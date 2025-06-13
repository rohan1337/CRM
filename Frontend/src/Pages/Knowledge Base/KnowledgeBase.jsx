import React from "react";
import { Search, User } from "lucide-react"; // Lucide React icons
import "./KnowledgeBase.css";

const KnowledgeBase = () => {
    return (
        <>
            {/* Top Header */}
            <header className="top-header">
                <h2 className="page-title">Active Ticket View</h2>
				<div className="search-box">
					<Search size={18} color="#64748b" />
					<input type="text" placeholder="Search" />
				</div>
            </header>

            {/* Body Split Layout */}
            <div className="main-body">
                {/* Left Menu Panel */}
				<div className="left-menu-panel">
					<div className="left-menu-panel-header">
						<h1>View</h1>
					</div>
                    <ul className="tickets-menu">
						<li>Knowledge Base Article</li>
                    	<li>All Tickets</li>
                        <li>My Tickets</li>
                        <li>Closed Tickets</li>
                        <li>Last 7 Days Tickets</li>
                        <li>Open Tickets</li>
                    </ul>
                </div>

                {/* Center Content: Tickets List */}
                <div className="center-content">
					<div className="center-content-header">
                    	<h1>Laptop Issue</h1>
					</div>
                    {/* Simulate a few ticket rows */}
					<div className="center-content-body">
						<div className="ticket-row">Ticket 1</div>
						<div className="ticket-row">Ticket 2</div>
						<div className="ticket-row">Ticket 3</div>
						<div className="ticket-row">Ticket 4</div>
					</div>
                </div>
            </div>
        </>
    );
};

export default KnowledgeBase;
