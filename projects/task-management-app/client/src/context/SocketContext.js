import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = createContext();

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);

  useEffect(() => {
    const newSocket = io(process.env.REACT_APP_SERVER_URL || 'http://localhost:5002');
    setSocket(newSocket);

    // Handle online users
    newSocket.on('usersOnline', (users) => {
      setOnlineUsers(users);
    });

    // Handle typing indicators
    newSocket.on('userTyping', (data) => {
      setTypingUsers(prev => [...prev.filter(u => u.userId !== data.userId), data]);
    });

    newSocket.on('userStoppedTyping', (data) => {
      setTypingUsers(prev => prev.filter(u => u.userId !== data.userId));
    });

    return () => {
      newSocket.close();
    };
  }, []);

  const joinProject = (projectId) => {
    if (socket) {
      socket.emit('joinProject', projectId);
    }
  };

  const leaveProject = (projectId) => {
    if (socket) {
      socket.emit('leaveProject', projectId);
    }
  };

  const updateTaskStatus = (taskId, newStatus, projectId) => {
    if (socket) {
      socket.emit('taskStatusChange', { taskId, newStatus, projectId });
    }
  };

  const startTyping = (userId, userName, projectId) => {
    if (socket) {
      socket.emit('userTyping', { userId, userName, projectId });
    }
  };

  const stopTyping = (userId, projectId) => {
    if (socket) {
      socket.emit('userStoppedTyping', { userId, projectId });
    }
  };

  const value = {
    socket,
    onlineUsers,
    typingUsers,
    joinProject,
    leaveProject,
    updateTaskStatus,
    startTyping,
    stopTyping
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};