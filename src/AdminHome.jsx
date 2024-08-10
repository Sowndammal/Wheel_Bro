import React from 'react';
import './AdminHome.css'; // Add custom styles if needed
import AdminNavbar from './AdminNavbar';

const AdminHome = () => {
  return (
    <div className="admin-home">
      <AdminNavbar />
      <div className="admin-home__content">
        <h1>Welcome to the Admin Panel</h1>
        <p>Use the navigation menu to manage the application.</p>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default AdminHome;
