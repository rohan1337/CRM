import { useState } from "react";
import "./GeneralSettings.css";

const GeneralSettings = () => {
	const [menuModal, setMenuModal] = useState(false);
	const [isReadOnly, setIsReadOnly] = useState(true);

	return (
		<>
			{/* General Settings Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="general-settings-heading">General Settings</h1>
				</div>
				<div className="header-container-buttons">
					<button className="save-button">Save</button>
					<button className="edit-button" onClick={() => setIsReadOnly(true)}>Edit</button>
					<div className="more-options-container">
						<button className="more-options-button" onClick={() => setMenuModal(prevState => !prevState)}>⁞</button>
						{/* Menu Modal */}
						{menuModal && (
							<div className="menu-modal-container">
								<div className="menu-modal">
									<ul className="menu-modal-list">
										<li>Clone</li>
										<li>Delete</li>
										<li>Find and Merge Duplicates</li>
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Product Information Container */}
			<div className="personal-information-container">
				<div className="personal-information-heading">
					<h1>Personal Information</h1>
				</div>
				<div className="personal-information-form">
					<form>
						<div className="form-group language">
							<label htmlFor="language">Language</label>
							<input type="text" placeholder="Language" id="language" readOnly={isReadOnly} />
						</div>
						<div className="form-group accountname">
							<label htmlFor="accountname">Account Name</label>
							<input type="text" placeholder="Account Name" id="accountname" readOnly={isReadOnly} />
						</div>
						<div className="form-group businessrole">
							<label htmlFor="businessrole">Business Role</label>
							<input type="text" placeholder="Business Role" id="businessrole" readOnly={isReadOnly} />
						</div>
						<div className="form-group country">
							<label htmlFor="country">Country</label>
							<input type="text" placeholder="Country" id="country" readOnly={isReadOnly} />
						</div>
						<div className="form-group dateformat">
							<label htmlFor="dateformat">Date Format</label>
							{ isReadOnly ? (
								<input type="text" placeholder="Date Format" id="dateformat" readOnly={isReadOnly} />
							) : (
								<select id="dateformat">
									<option value="">Select Date Format</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							)}
						</div>
						<div className="form-group timeformat">
							<label htmlFor="timeformat">Time Format</label>
							{ isReadOnly ? (
								<input type="text" placeholder="Time Format" id="timeformat" readOnly={isReadOnly} />
							) : (
								<select id="timeformat">
									<option value="">Select Time Format</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							)}
						</div>
						<div className="form-group timezone">
							<label htmlFor="timezone">Time Zone</label>
							{ isReadOnly ? (
								<input type="text" placeholder="Time Zone" id="timezone" readOnly={isReadOnly} />
							) : (
								<select id="timezone">
									<option value="">Select Time Zone</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							)}
						</div>
					</form>
				</div>
			</div>

			{/* Company Information Container */}
			<div className="company-information-container">
				<div className="company-information-heading">
					<h1>Company Information</h1>
				</div>
				<div className="company-information-form">
					<form>
						<div className="form-group businessname">
							<label htmlFor="businessname">Business Name</label>
							<input type="text" placeholder="Business Name" id="businessname" readOnly={isReadOnly} />
						</div>
						<div className="form-group legalentitytype">
							<label htmlFor="legalentitytype">Legal Entity Type</label>
							<input type="text" placeholder="Legal Entity Type" id="legalentitytype" readOnly={isReadOnly} />
						</div>
						<div className="form-group addressline1">
							<label htmlFor="addressline1">Address Line 1</label>
							<input type="text" placeholder="Address Line 1" id="addressline1" readOnly={isReadOnly} />
						</div>
						<div className="form-group addressline2">
							<label htmlFor="addressline2">Address Line 2</label>
							<input type="text" placeholder="Address Line 2" id="addressline2" readOnly={isReadOnly} />
						</div>
						<div className="form-group city">
							<label htmlFor="city">City</label>
							<input type="text" placeholder="City" id="city" readOnly={isReadOnly} />
						</div>
						<div className="form-group state">
							<label htmlFor="state">State</label>
							<input type="text" placeholder="State" id="state" readOnly={isReadOnly} />
						</div>
						<div className="form-group country">
							<label htmlFor="country">Country</label>
							<input type="text" placeholder="Country" id="country" readOnly={isReadOnly} />
						</div>
						<div className="form-group zipcode">
							<label htmlFor="zipcode">ZIP Code</label>
							<input type="text" placeholder="ZIP Code" id="zipcode" readOnly={isReadOnly} />
						</div>
						<div className="icon-container">
							<div className="brand-logo">
								<div className="brand-logo-dots">
									<div className="dot"></div>
									<div className="dot"></div>
									<div className="dot"></div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default GeneralSettings;