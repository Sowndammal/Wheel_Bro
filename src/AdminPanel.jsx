// src/AdminPanel.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // Used to render child routes
import AdminNavbar from './AdminNavbar'; // Import your AdminNavbar component
import './AdminPanel.css'; // Add your styles here

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <AdminNavbar /> {/* Render the AdminNavbar */}
      <main className="admin-panel__content">
        <Outlet /> {/* This is where the child routes will be rendered */}
      </main>
    </div>
  );
};

export default AdminPanel;
