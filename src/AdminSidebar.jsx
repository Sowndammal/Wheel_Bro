import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './AdminSidebar.css'; // Add custom styles here

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <Nav vertical>
        <NavItem>
          <NavLink tag={Link} to="/admin/dashboard">Dashboard</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/admin/safety-report">Safety Report</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/admin/live-view">Live View</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/admin/vehicle-database">Vehicle Database</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/admin/tco">TCO</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/admin/alerts">Alerts</NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to="/admin/settings">Settings</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export default AdminSidebar;
