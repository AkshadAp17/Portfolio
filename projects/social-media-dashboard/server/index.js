const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5004;

// Middleware
app.use(cors());
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET || 'social-dashboard-secret',
  resave: false,
  saveUninitialized: false
}));

// Mock social media data
const mockAnalytics = {
  overview: {
    totalFollowers: 125430,
    totalPosts: 892,
    totalEngagement: 45672,
    avgEngagementRate: 3.2
  },
  platforms: [
    {
      id: 'twitter',
      name: 'Twitter',
      followers: 45200,
      posts: 324,
      engagement: 15600,
      engagementRate: 3.5,
      color: '#1DA1F2'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      followers: 52100,
      posts: 187,
      engagement: 18900,
      engagementRate: 3.6,
      color: '#E4405F'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      followers: 28130,
      posts: 234,
      engagement: 8172,
      engagementRate: 2.9,
      color: '#1877F2'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      followers: 0,
      posts: 147,
      engagement: 3000,
      engagementRate: 2.1,
      color: '#0A66C2'
    }
  ],
  recentPosts: [
    {
      id: 1,
      platform: 'twitter',
      content: 'Just launched our new product! Check it out 🚀',
      timestamp: '2024-01-15T10:30:00Z',
      likes: 245,
      shares: 32,
      comments: 18,
      engagementRate: 4.2
    },
    {
      id: 2,
      platform: 'instagram',
      content: 'Behind the scenes at our office today',
      timestamp: '2024-01-15T08:15:00Z',
      likes: 892,
      shares: 67,
      comments: 134,
      engagementRate: 5.8
    },
    {
      id: 3,
      platform: 'facebook',
      content: 'Weekly team update and achievements',
      timestamp: '2024-01-14T16:45:00Z',
      likes: 156,
      shares: 23,
      comments: 45,
      engagementRate: 3.1
    }
  ],
  scheduledPosts: [
    {
      id: 1,
      platform: 'twitter',
      content: 'Exciting announcement coming tomorrow!',
      scheduledTime: '2024-01-16T09:00:00Z',
      status: 'scheduled'
    },
    {
      id: 2,
      platform: 'instagram',
      content: 'New blog post about industry trends',
      scheduledTime: '2024-01-16T14:30:00Z',
      status: 'scheduled'
    }
  ]
};

// Analytics endpoints
app.get('/api/analytics/overview', (req, res) => {
  res.json(mockAnalytics.overview);
});

app.get('/api/analytics/platforms', (req, res) => {
  res.json(mockAnalytics.platforms);
});

app.get('/api/analytics/engagement-history', (req, res) => {
  // Generate mock engagement data for the last 30 days
  const engagementHistory = [];
  const now = new Date();
  
  for (let i = 29; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    engagementHistory.push({
      date: date.toISOString().split('T')[0],
      twitter: Math.floor(Math.random() * 500) + 200,
      instagram: Math.floor(Math.random() * 800) + 400,
      facebook: Math.floor(Math.random() * 300) + 150,
      linkedin: Math.floor(Math.random() * 200) + 100
    });
  }
  
  res.json(engagementHistory);
});

// Posts endpoints
app.get('/api/posts/recent', (req, res) => {
  res.json(mockAnalytics.recentPosts);
});

app.get('/api/posts/scheduled', (req, res) => {
  res.json(mockAnalytics.scheduledPosts);
});

app.post('/api/posts/schedule', (req, res) => {
  const { platform, content, scheduledTime } = req.body;
  
  const newPost = {
    id: Date.now(),
    platform,
    content,
    scheduledTime,
    status: 'scheduled'
  };
  
  mockAnalytics.scheduledPosts.push(newPost);
  res.status(201).json(newPost);
});

app.put('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const postIndex = mockAnalytics.scheduledPosts.findIndex(post => post.id === parseInt(id));
  
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  mockAnalytics.scheduledPosts[postIndex] = {
    ...mockAnalytics.scheduledPosts[postIndex],
    ...req.body
  };
  
  res.json(mockAnalytics.scheduledPosts[postIndex]);
});

app.delete('/api/posts/:id', (req, res) => {
  const { id } = req.params;
  const postIndex = mockAnalytics.scheduledPosts.findIndex(post => post.id === parseInt(id));
  
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }
  
  mockAnalytics.scheduledPosts.splice(postIndex, 1);
  res.json({ message: 'Post deleted successfully' });
});

// Content suggestions endpoint
app.get('/api/content/suggestions', (req, res) => {
  const suggestions = [
    {
      id: 1,
      type: 'trending-hashtag',
      title: '#TechTuesday',
      description: 'Share your latest tech insights',
      platform: 'twitter'
    },
    {
      id: 2,
      type: 'content-idea',
      title: 'Behind the Scenes',
      description: 'Show your team in action',
      platform: 'instagram'
    },
    {
      id: 3,
      type: 'industry-news',
      title: 'Industry Report 2024',
      description: 'Share insights from latest industry report',
      platform: 'linkedin'
    }
  ];
  
  res.json(suggestions);
});

// Team endpoints
app.get('/api/team/members', (req, res) => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Social Media Manager',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b798?w=100',
      permissions: ['post', 'schedule', 'analytics']
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Content Creator',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      permissions: ['post', 'schedule']
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Analytics Specialist',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      permissions: ['analytics']
    }
  ];
  
  res.json(teamMembers);
});

app.listen(PORT, () => {
  console.log(`Social Media Dashboard server running on port ${PORT}`);
});