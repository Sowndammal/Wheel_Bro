// src/pages/AdminDashboard.js
import React from 'react';
import './AdminDashboard.css'; // Include any additional styles
import AdminNavbar from './AdminNavbar';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <div className="admin-dashboard__content">
        <h1>Dashboard</h1>
        {/* Add dashboard content here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
