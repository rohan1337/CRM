import React, { useState } from "react";
import { Plus, Filter, RefreshCw, ChevronDown, Search } from "lucide-react";
import "./Webforms.css";
import FormCreator from "./FormCreator";

const Webforms = () => {
	const [activeView, setActiveView] = useState("webforms");
	const [showFormCreator, setShowFormCreator] = useState(false);
	const [showEmailsList, setShowEmailsList] = useState(false);

	const handleCreateCustom = () => {
		setShowFormCreator(true);
	};

	const handlePreBuilt = () => {
		// Show pre-built templates selection
		setShowEmailsList(true);
	};

	const handleCancel = () => {
		setShowFormCreator(false);
		setShowEmailsList(false);
	};

	return (
		<div className="webforms-container">
			{!showFormCreator && !showEmailsList ? (
				<>
					<div className="webforms-header">
						<h1>Webforms</h1>
						<div className="dropdown">
							<button className="dropdown-button">
								<span>Standard View</span>
								<ChevronDown size={16} />
							</button>
						</div>
					</div>

					<div className="webforms-content">
						<div className="search-bar">
							<div className="search-input">
								<Search size={18} />
								<input
									type="text"
									placeholder="Global Search Bar"
								/>
							</div>
							<div className="search-icons">
								<button className="icon-button">
									<Filter size={18} />
								</button>
								<button className="icon-button">
									<RefreshCw size={18} />
								</button>
							</div>
						</div>

						<div className="webforms-options">
							<div
								className="option-box create-custom"
								onClick={handleCreateCustom}
							>
								<h1>Create Custom Webform</h1>
								<p>
									Create custom web forms to capture lead data
									into your CRM system.
								</p>
								<div className="custom-webform-container">
									<div className="webform-icon">
										<span className="icon-wrapper">+</span>
									</div>
								</div>
							</div>

							<div
								className="option-box pre-built"
								onClick={handlePreBuilt}
							>
								<h1>Pre-Built Webform</h1>
								<p>
									Select any one of the pre-built web forms to
									seamlessly push data into your CRM system.
								</p>
								<div className="pre-built-container">
									<div className="webform-icon pre-built-icon">
										<span className="icon-wrapper">&#10003;</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			) : showFormCreator ? (
				<FormCreator onCancel={handleCancel} />
			) : (
				<EmailsList onCancel={handleCancel} />
			)}
		</div>
	);
};

export default Webforms;
