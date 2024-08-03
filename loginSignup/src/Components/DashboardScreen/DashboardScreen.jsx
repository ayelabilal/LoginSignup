
import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/login';
  };

  return (
    <div>
      <h1 style={{ fontSize: "58px" }}>Welcome to the Dashboard</h1>
      <button onClick={handleLogout} className='button'>Logout</button>
    </div>
  );
};

export default Dashboard;
