import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminNavbar.css'; // Include styles for the navbar

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <h2>Admin Panel</h2>
      <ul className="admin-navbar__list">
        <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
        <li><NavLink to="/admin/users" activeClassName="active">Users</NavLink></li>
        <li><NavLink to="/admin/reports" activeClassName="active">Reports</NavLink></li>
        <li><NavLink to="/admin/settings" activeClassName="active">Settings</NavLink></li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
