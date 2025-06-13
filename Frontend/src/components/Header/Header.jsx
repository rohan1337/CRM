import React, { useState } from 'react';
import { Bell, Search, Grid, Settings } from 'lucide-react';
import './header.css';
import gal_logo from '../../assets/gal_logo.png';

const Header = ({ pendingRequests }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSystemsDropdown, setShowSystemsDropdown] = useState(false);
    const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
        setShowSystemsDropdown(false);
        setShowSettingsDropdown(false);
    };

    const toggleSystemsDropdown = () => {
        setShowSystemsDropdown(!showSystemsDropdown);
        setShowDropdown(false);
        setShowSettingsDropdown(false);
    };

    const toggleSettingsDropdown = () => {
        setShowSettingsDropdown(!showSettingsDropdown);
        setShowDropdown(false);
        setShowSystemsDropdown(false);
    };

    return (
        <header className="unique-navbar-container">
            <div className="unique-navbar-header">
                <img src={gal_logo} className='unique-navbar-logo' />
                <span className="unique-navbar-title">Galvinus CRM</span>
            </div>

            <div className="unique-navbar-right">
                <div className="unique-search-container">
                    <Search className="unique-navbar-search-icon" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="unique-navbar-search-input"
                    />
                </div>

                <div className="unique-navbar-icons">
                    <button className="unique-navbar-settings" onClick={toggleSettingsDropdown}>
                        <Settings className="unique-navbar-settings-icon" />
                    </button>

                    <button className="unique-navbar-notifications" onClick={() => { }}>
                        <Bell className="unique-navbar-bell-icon" />
                        {pendingRequests > 0 && (
                            <span className="unique-notification-badge">{pendingRequests}</span>
                        )}
                    </button>

                    <div className="unique-navbar-profile" onClick={toggleDropdown}>
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="Admin"
                            className="unique-navbar-profile-pic"
                        />
                    </div>

                    <button className="unique-navbar-systems" onClick={toggleSystemsDropdown}>
                        <Grid className="unique-navbar-grid-icon" />
                    </button>

                    {showSettingsDropdown && (
                        <div className="unique-settings-dropdown">
                            <p className="unique-profile-dropdown-item">General Settings</p>
                            <p className="unique-profile-dropdown-item">Notifications</p>
                            <p className="unique-profile-dropdown-item">Appearance</p>
                            <p className="unique-profile-dropdown-item">Security</p>
                            <p className="unique-profile-dropdown-item">Integrations</p>
                        </div>
                    )}

                    {showDropdown && (
                        <div className="unique-profile-dropdown">
                            <p className="unique-profile-dropdown-item">Rohan Roy</p>
                            <p className="unique-profile-dropdown-item unique-profile-role-item">HR Administrator</p>
                            <p className="unique-profile-dropdown-item unique-profile-email-item">rohan.roy@galvinus.com</p>
                            <hr />
                            <p className="unique-profile-dropdown-item">Reset Password</p>
                            <p className="unique-profile-dropdown-item">Logout</p>
                        </div>
                    )}

                    {showSystemsDropdown && (
                        <div className="unique-systems-dropdown">
                            <p className="unique-profile-dropdown-item">HR System</p>
                            <p className="unique-profile-dropdown-item">Ecommerce System</p>
                            <p className="unique-profile-dropdown-item">CRM System</p>
                            <p className="unique-profile-dropdown-item">Inventory System</p>
                            <p className="unique-profile-dropdown-item">Analytics Dashboard</p>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;