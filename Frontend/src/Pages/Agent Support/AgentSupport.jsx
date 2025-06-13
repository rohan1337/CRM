import React from "react";
import { Search } from "lucide-react"; // Importing Search icon from Lucide React
import "./AgentSupport.css";

const AgentSupport = () => {
    return (
        <>
            {/* Header / Top Bar */}
            <header className="header-container">
                <h2 className="header-title">Active Ticket View</h2>
                <div className="header-actions">
                    <div className="search-box">
                        <Search size={20} color="#64748b" />
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </header>

            {/* Body Split Layout */}
            <div className="main-content-body">
                {/* Left Panel: Ticket View */}
                <div className="left-panel">
                    <div className="ticket-view-header">
						<div className="ticket-view-buttons">
							<button className="btn btn-default">View</button>
							<button className="btn btn-default active-view">Active Ticket View</button>
						</div>

						<h1 className="ticket-view-heading">All Tickets</h1>
                    </div>

                    <div className="tickets-section">
                        {/* Simulating ticket fields with placeholders */}
                        <div className="ticket-field" />
                        <div className="ticket-field" />
                        <div className="ticket-field" />
                        <div className="ticket-field" />
                        <div className="ticket-field" />
                    </div>
                </div>

                {/* Right Panel: Knowledge Base Article */}
                <div className="right-panel">
                    <div className="knowledge-base-article-header">
                        <h1>Knowledge Base Article</h1>
					</div>
					<div className="knowledge-base-article-body">
						<p className="article-intro">
                            Deliver self-service options to customers through a
                            24/7 knowledge repository.
                        </p>
                        <ul>
                            <li>
                                Enhance articles with an intuitive editing tool.
                            </li>
                            <li>
                                Improve article visibility on search engines
                                using meta descriptions.
                            </li>
                            <li>
                                Polish content through version control for
                                articles.
                            </li>
                            <li>
                                Grant authors access on an online review panel.
                            </li>
                            <li>
                                Enable customers to explore a multilingual
                                knowledge hub.
                            </li>
                        </ul>
					</div>
					<div className="article-actions">
						<button className="btn btn-primary">Create</button>
						<button className="btn btn-success">
							Learn More
						</button>
					</div>
                </div>
            </div>
        </>
    );
};

export default AgentSupport;
