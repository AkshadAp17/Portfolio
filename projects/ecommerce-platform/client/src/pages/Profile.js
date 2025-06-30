import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useAuth } from '../context/AuthContext';
import { fetchUserOrders } from '../services/api';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, logout } = useAuth();

  const { data: orders = [], isLoading: ordersLoading } = useQuery(
    ['orders', user?.id],
    () => fetchUserOrders(user?.id),
    {
      enabled: !!user?.id && activeTab === 'orders',
    }
  );

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return (
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="text-center">
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#6b7280' }}>
            Please log in
          </h2>
          <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
            You need to be logged in to view your profile.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '2rem' }}>
        My Account
      </h1>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        borderBottom: '1px solid #e5e7eb', 
        marginBottom: '2rem' 
      }}>
        <button
          onClick={() => setActiveTab('profile')}
          className={`btn ${activeTab === 'profile' ? 'btn-primary' : 'btn-outline'}`}
          style={{ 
            borderRadius: '0', 
            marginRight: '0.5rem',
            borderBottom: activeTab === 'profile' ? '2px solid #2563eb' : 'none'
          }}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`btn ${activeTab === 'orders' ? 'btn-primary' : 'btn-outline'}`}
          style={{ 
            borderRadius: '0',
            borderBottom: activeTab === 'orders' ? '2px solid #2563eb' : 'none'
          }}
        >
          Order History
        </button>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="card" style={{ maxWidth: '600px' }}>
          <div className="card-content">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
              Profile Information
            </h2>
            
            <div style={{ marginBottom: '1rem' }}>
              <label className="form-label">Name</label>
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db'
              }}>
                {user.name || user.username || 'Not provided'}
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label className="form-label">Email</label>
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db'
              }}>
                {user.email || 'Not provided'}
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label className="form-label">Member Since</label>
              <div style={{ 
                padding: '0.75rem', 
                backgroundColor: '#f3f4f6', 
                borderRadius: '0.375rem',
                border: '1px solid #d1d5db'
              }}>
                {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}
              </div>
            </div>

            <button 
              onClick={handleLogout}
              className="btn btn-danger"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
            Order History
          </h2>
          
          {ordersLoading ? (
            <div className="loading">
              <div className="spinner"></div>
            </div>
          ) : orders.length === 0 ? (
            <div className="text-center" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#6b7280' }}>
                No orders yet
              </h3>
              <p style={{ color: '#9ca3af', marginBottom: '2rem' }}>
                You haven't placed any orders yet. Start shopping to see your order history here.
              </p>
              <a href="/products" className="btn btn-primary">
                Start Shopping
              </a>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {orders.map((order) => (
                <div key={order.id} className="card">
                  <div className="card-content">
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start',
                      marginBottom: '1rem'
                    }}>
                      <div>
                        <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                          Order #{order.id}
                        </h3>
                        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
                          Placed on {new Date(order.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.125rem', fontWeight: '600' }}>
                          ${order.total}
                        </div>
                        <span style={{ 
                          padding: '0.25rem 0.5rem', 
                          borderRadius: '0.25rem', 
                          fontSize: '0.75rem',
                          backgroundColor: order.status === 'delivered' ? '#d1fae5' : '#dbeafe',
                          color: order.status === 'delivered' ? '#065f46' : '#1e40af'
                        }}>
                          {order.status || 'Processing'}
                        </span>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1rem' }}>
                      <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                        Items ({order.items?.length || 0})
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {order.items?.slice(0, 3).map((item, index) => (
                          <div key={index} style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between',
                            fontSize: '0.875rem'
                          }}>
                            <span>{item.name} × {item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        ))}
                        {order.items?.length > 3 && (
                          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                            +{order.items.length - 3} more items
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;