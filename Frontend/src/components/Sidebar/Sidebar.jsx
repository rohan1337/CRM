import React, { useState } from 'react';
import './sidebar.css';
import {
    BarChart3, Building, Users, ShoppingBag, Briefcase, Contact, Mail, Phone, MessageSquare, Layers, FileText, Settings, Shield, Activity, ChevronDown
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(location.pathname);
    const [openDropdown, setOpenDropdown] = useState({});

    const toggleDropdown = (menu) => {
        setOpenDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
    };

    const navigation = [
        { name: 'Homepage', icon: BarChart3, path: '/' },

        {
            name: 'Business Structure',
            icon: Building,
            path: '/business-structure',
            subMenu: [
                { name: 'Org Hub', path: '/business-structure/org-hub', icon: Users },
                { name: 'Divisions', path: '/business-structure/divisions', icon: Layers }
            ]
        },

        {
            name: 'Sales',
            icon: ShoppingBag,
            path: '/sales',
            subMenu: [
                { name: 'Leads', path: '/sales/leads', icon: Briefcase },
                { name: 'Opportunities', path: '/sales/opportunities', icon: Activity },
                { name: 'Sales Quotes', path: '/sales/salesquotes', icon: FileText },
                { name: 'Price Proposals', path: '/sales/price-proposals', icon: FileText },
                { name: 'Inventory Desk', path: '/sales/inventory-desk', icon: FileText }
            ]
        },

        {
            name: "Product",
            icon: ShoppingBag,
            path: "/products",
            subMenu: [
                { name: "Product", path: "/products/products", icon: Activity },
                { name: "Product Category", path: "/products/productcategories", icon: Activity },
            ]
        },

        {
            name: 'Customers',
            icon: Contact,
            path: '/customers',
            subMenu: [
                { name: 'Accounts', path: '/customers/accounts', icon: Users },
                { name: 'Contacts', path: '/customers/contacts', icon: Mail }
            ]
        },

        {
            name: 'Channels',
            icon: Phone,
            path: '/channels',
            subMenu: [
                { name: 'E-Mail', path: '/channels/emails', icon: Mail },
                { name: 'Live Talk', path: '/channels/live-talk', icon: MessageSquare },
                { name: 'LinkedIn', path: '/channels/linkedin', icon: Contact },
                { name: 'Telephone', path: '/channels/telephone', icon: Phone },
                { name: 'Web Forms', path: '/channels/webforms', icon: FileText }
            ]
        },

        {
            name: 'Activity Management',
            icon: Activity,
            path: '/activity-management',
            subMenu: [
                { name: 'Tasks', path: '/activitymanagement/tasks', icon: Briefcase },
                { name: 'Phone Calls', path: '/activitymanagement/phonecalls', icon: Phone },
                { name: 'Emails', path: '/activitymanagement/emails', icon: Mail },
                { name: 'Meetings', path: '/activitymanagement/meetings', icon: Contact }
            ]
        },

        {
            name: 'Analytics',
            icon: BarChart3,
            path: '/analytics',
            subMenu: [
                { name: 'Reports', path: '/analytics/reports', icon: FileText },
                { name: 'Dashboards', path: '/analytics/dashboards', icon: BarChart3 }
            ]
        },

        {
            name: 'Administrator',
            icon: Shield,
            path: '/admin',
            subMenu: [
                { name: 'General Settings', path: '/admin/generalsettings', icon: Settings },
                { name: 'User Profiles', path: '/admin/userprofiles', icon: Users },
                { name: 'Access Management', path: '/admin/accessmanagement', icon: Shield },
                { name: 'Work Flows', path: '/admin/workflows', icon: Activity }
            ]
        },

        {
            name: 'Service',
            icon: Briefcase,
            path: '/service',
            subMenu: [
                { name: 'Tickets', path: '/service/tickets', icon: FileText },
                { name: 'Agent Desktop', path: '/service/agentdesktop', icon: Users },
                { name: 'Knowledge Base', path: '/service/knowledgebase', icon: Layers }
            ]
        }
    ];

    return (
        <div className="sidebar-container">
            <nav className="sidebar-nav">
                {navigation.map((item) => (
                    <div key={item.path}>
                        {item.subMenu ? (
                            <>
                                <div
                                    className={`sidebar-item ${activeTab.startsWith(item.path) ? 'active' : ''}`}
                                    onClick={() => toggleDropdown(item.name)}
                                >
                                    <item.icon className="sidebar-icon" />
                                    <span className="sidebar-link">{item.name}</span>
                                    <ChevronDown className={`dropdown-icon ${openDropdown[item.name] ? 'open' : ''}`} />
                                </div>
                                {openDropdown[item.name] && (
                                    <div className="submenu">
                                        {item.subMenu.map((sub) => (
                                            <Link
                                                key={sub.path}
                                                to={sub.path}
                                                className={`submenu-item ${activeTab === sub.path ? 'active' : ''}`}
                                                onClick={() => setActiveTab(sub.path)}
                                            >
                                                <sub.icon className="submenu-icon" />
                                                <span>{sub.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link
                                to={item.path}
                                onClick={() => setActiveTab(item.path)}
                                className={`sidebar-item ${activeTab === item.path ? 'active' : ''}`}
                            >
                                <item.icon className="sidebar-icon" />
                                {item.name}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>

            <footer className="sidebar-footer">
                Designed and developed by <b>Galvinus Pvt Ltd</b>
            </footer>
        </div>
    );
};

export default Sidebar;
