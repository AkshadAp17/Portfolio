import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import ProjectBoard from './pages/ProjectBoard';
import TaskDetail from './pages/TaskDetail';
import TeamMembers from './pages/TeamMembers';
import Settings from './pages/Settings';

// Context
import { SocketProvider } from './context/SocketContext';
import { AuthProvider } from './context/AuthContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SocketProvider>
          <Router>
            <div className="App min-h-screen bg-gray-50 flex">
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#363636',
                    color: '#fff',
                  },
                }}
              />
              
              <Sidebar />
              
              <div className="flex-1 flex flex-col">
                <Header />
                
                <main className="flex-1 overflow-hidden">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/project/:projectId" element={<ProjectBoard />} />
                    <Route path="/task/:taskId" element={<TaskDetail />} />
                    <Route path="/team" element={<TeamMembers />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </div>
          </Router>
        </SocketProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;