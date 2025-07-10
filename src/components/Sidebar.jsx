import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Assuming you will create a CSS file for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Learning Management System</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/courses">Courses</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;