const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 5002;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// In-memory storage for demo (would be MongoDB in production)
let projects = [
  {
    id: '1',
    name: 'Website Redesign',
    description: 'Complete overhaul of company website',
    createdAt: new Date('2024-01-15'),
    teamMembers: ['user1', 'user2', 'user3']
  },
  {
    id: '2',
    name: 'Mobile App Development',
    description: 'Build native mobile app for iOS and Android',
    createdAt: new Date('2024-02-01'),
    teamMembers: ['user1', 'user4']
  }
];

let tasks = [
  {
    id: '1',
    title: 'Design Homepage Mockup',
    description: 'Create wireframes and mockups for the new homepage',
    status: 'todo',
    priority: 'high',
    assignee: 'user1',
    projectId: '1',
    createdAt: new Date('2024-01-16'),
    dueDate: new Date('2024-02-15')
  },
  {
    id: '2',
    title: 'Implement Authentication',
    description: 'Add user login and registration functionality',
    status: 'in-progress',
    priority: 'medium',
    assignee: 'user2',
    projectId: '1',
    createdAt: new Date('2024-01-18'),
    dueDate: new Date('2024-02-10')
  },
  {
    id: '3',
    title: 'Setup Development Environment',
    description: 'Configure React Native development environment',
    status: 'done',
    priority: 'high',
    assignee: 'user1',
    projectId: '2',
    createdAt: new Date('2024-02-02'),
    dueDate: new Date('2024-02-05')
  },
  {
    id: '4',
    title: 'API Integration',
    description: 'Connect mobile app to backend APIs',
    status: 'todo',
    priority: 'medium',
    assignee: 'user4',
    projectId: '2',
    createdAt: new Date('2024-02-03'),
    dueDate: new Date('2024-02-20')
  }
];

let users = [
  { id: 'user1', name: 'Alice Johnson', email: 'alice@example.com', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b798?w=100' },
  { id: 'user2', name: 'Bob Smith', email: 'bob@example.com', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { id: 'user3', name: 'Carol Davis', email: 'carol@example.com', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
  { id: 'user4', name: 'David Wilson', email: 'david@example.com', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' }
];

// Routes
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.get('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }
  res.json(project);
});

app.post('/api/projects', (req, res) => {
  const newProject = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date(),
    teamMembers: req.body.teamMembers || []
  };
  projects.push(newProject);
  
  // Broadcast to all connected clients
  io.emit('projectCreated', newProject);
  res.status(201).json(newProject);
});

app.get('/api/tasks', (req, res) => {
  const { projectId } = req.query;
  let filteredTasks = tasks;
  
  if (projectId) {
    filteredTasks = tasks.filter(task => task.projectId === projectId);
  }
  
  res.json(filteredTasks);
});

app.post('/api/tasks', (req, res) => {
  const newTask = {
    id: Date.now().toString(),
    ...req.body,
    createdAt: new Date()
  };
  tasks.push(newTask);
  
  // Broadcast to all connected clients
  io.emit('taskCreated', newTask);
  res.status(201).json(newTask);
});

app.put('/api/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(task => task.id === req.params.id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  
  tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
  
  // Broadcast to all connected clients
  io.emit('taskUpdated', tasks[taskIndex]);
  res.json(tasks[taskIndex]);
});

app.delete('/api/tasks/:id', (req, res) => {
  const taskIndex = tasks.findIndex(task => task.id === req.params.id);
  if (taskIndex === -1) {
    return res.status(404).json({ message: 'Task not found' });
  }
  
  const deletedTask = tasks.splice(taskIndex, 1)[0];
  
  // Broadcast to all connected clients
  io.emit('taskDeleted', deletedTask.id);
  res.json({ message: 'Task deleted successfully' });
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Join project room
  socket.on('joinProject', (projectId) => {
    socket.join(`project-${projectId}`);
    console.log(`User ${socket.id} joined project ${projectId}`);
  });

  // Leave project room
  socket.on('leaveProject', (projectId) => {
    socket.leave(`project-${projectId}`);
    console.log(`User ${socket.id} left project ${projectId}`);
  });

  // Real-time task status updates
  socket.on('taskStatusChange', (data) => {
    const { taskId, newStatus, projectId } = data;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    
    if (taskIndex !== -1) {
      tasks[taskIndex].status = newStatus;
      
      // Broadcast to project room
      socket.to(`project-${projectId}`).emit('taskStatusChanged', {
        taskId,
        newStatus,
        task: tasks[taskIndex]
      });
    }
  });

  // Real-time typing indicators
  socket.on('userTyping', (data) => {
    socket.to(`project-${data.projectId}`).emit('userTyping', data);
  });

  socket.on('userStoppedTyping', (data) => {
    socket.to(`project-${data.projectId}`).emit('userStoppedTyping', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.listen(PORT, () => {
  console.log(`Task Management server running on port ${PORT}`);
});