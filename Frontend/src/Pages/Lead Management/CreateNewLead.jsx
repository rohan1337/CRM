import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CreateNewLead.css";

const CreateNewLead = () => {
	const navigate = useNavigate();

	// 🆕 NEW: state to hold the selected image
	const [leadImage, setLeadImage] = useState(null);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			console.log("Selected file:", file);

			// Optional: validate type or size
			if (file.size > 10 * 1024 * 1024) {
				alert("File size exceeds 10MB");
				return;
			}

			// Do something with the file (preview, upload, etc.)
			// For example: set a state
			// setSelectedFile(file);
		}
	};

	const handleSave = (type) => {
		if (type === "save") {
			navigate("/sales/leads");
		} else if (type === "saveAndNew") {
			navigate("/sales/leads/create");
		}
	}

	return (
		<>
			{/* Create Sales Quotes Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="sales-quotes-heading">New Lead</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button123" onClick={() => navigate("/sales/leads")}>Cancel</button>
					<button className="save-button123" onClick={() => handleSave("save")}>Save</button>
					<button className="save-and-new-button" onClick={() => handleSave("saveAndNew")}>Save and New</button>
				</div>
			</div>

			<div className="image-container">
				<div className="image-row">
					<label htmlFor="lead-image-input" className="lead-image-placeholder">
					<img
						src={leadImage || "https://www.w3schools.com/howto/img_avatar.png"}
						alt="Lead"
						className="lead-image-preview"
					/>
					</label>
					<div className="upload-box" onClick={() => document.getElementById("fileInput").click()}>
						<div className="upload-icon">⬆️</div>
						<p className="upload-text">Upload a file</p>
						<p className="upload-subtext">PDF, DOC, DOCX, JPG up to 10MB</p>
						<input
							type="file"
							id="fileInput"
							onChange={handleFileChange}
							style={{ display: 'none' }}
						/>
					</div>
				</div>
			</div>

			{/* Lead Information Container */}
			<div className="lead-information-container">
				<div className="lead-information-heading">
					<h1>Lead Information</h1>
				</div>
				<div className="lead-information-form">
					<form>
						<div className="form-group leadid">
							<label htmlFor="leadid">Lead ID</label>
							<input type="text" placeholder="Lead ID" id="leadid" />
						</div>
						<div className="form-group firstname">
							<label htmlFor="firstname">First Name</label>
							<input type="text" placeholder="First Name" id="firstname" />
						</div>
						<div className="form-group lastname">
							<label htmlFor="lastname">Last Name</label>
							<input type="text" placeholder="Last Name" id="lastname" />
						</div>
						<div className="form-group title">
							<label htmlFor="title">Title</label>
							<input type="text" placeholder="Title" id="title" />
						</div>
						<div className="form-group leadowner">
							<label htmlFor="leadowner">Lead Owner</label>
							<select id="leadowner">
								<option value="">Select Lead Owner</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group company">
							<label htmlFor="company">Company</label>
							<input type="text" placeholder="Company" id="company" />
						</div>
						<div className="form-group dob">
							<label htmlFor="dob">D.O.B</label>
							<input type="date" placeholder="D.O.B" id="dob" />
						</div>
						<div className="form-group nationality">
							<label htmlFor="nationality">Nationality</label>
							<input type="date" placeholder="Nationality" id="nationality" />
						</div>
						<div className="form-group notes">
							<label htmlFor="notes">Notes</label>
							<textarea placeholder="Add notes here..." id="notes" />
						</div>
					</form>
				</div>
			</div>

			{/* Contact Information Container */}
			<div className="contact-information-container">
				<div className="contact-information-heading">
					<h1>Contact Information</h1>
				</div>
				<div className="contact-information-form123">
					<form>
						<div className="form-group emailid123">
							<label htmlFor="emailid123">Email ID</label>
							<input type="email" placeholder="Email ID" id="emailid123" />
						</div>
						<div className="form-group secondaryemail123">
							<label htmlFor="secondaryemail123">Secondary Email</label>
							<input type="email" placeholder="Secondary Email" id="secondaryemail123" />
						</div>
						<div className="form-group phoneno123">
							<label htmlFor="phoneno123">Phone No.</label>
							<input type="tel" placeholder="e.g. +12345 67890" id="phoneno123" />
						</div>
						<div className="form-group mobileno123">
							<label htmlFor="mobileno123">Mobile No.</label>
							<input type="tel" placeholder="e.g. +123 456 7890" id="mobileno123" />
						</div>
						<div className="form-group fax123">
							<label htmlFor="fax123">Fax</label>
							<input type="text" placeholder="Fax" id="fax123" />
						</div>
						<div className="form-group website123">
							<label htmlFor="website123">Website</label>
							<input type="url" placeholder="e.g. www.example.com" id="website123" />
						</div>
						<div className="form-group addressline1123">
							<label htmlFor="addressline1123">Address Line 1</label>
							<input type="text" placeholder="Address Line 1" id="addressline1123" />
						</div>
						<div className="form-group addressline2123">
							<label htmlFor="addressline2123">Address Line 2</label>
							<input type="text" placeholder="Address Line 2" id="addressline2123" />
						</div>
						<div className="form-group city123">
							<label htmlFor="city123">City</label>
							<input type="text" placeholder="City" id="city123" />
						</div>
						<div className="form-group state123">
							<label htmlFor="state123">State</label>
							<input type="text" placeholder="State" id="state123" />
						</div>
						<div className="form-group country123">
							<label htmlFor="country123">Country</label>
							<input type="text" placeholder="Country" id="country123" />
						</div>
						<div className="form-group zipcode123">
							<label htmlFor="zipcode123">Zip Code</label>
							<input type="text" placeholder="Zip Code" id="zipcode123" />
						</div>
					</form>
				</div>
			</div>

			{/* Lead Qualification Container */}
			<div className="lead-qualification-container">
				<div className="lead-qualification-heading">
					<h1>Lead Qualification</h1>
				</div>
				<div className="lead-qualification-form123">
					<form>
						<div className="form-group leadsource">
							<label htmlFor="leadsource">Lead Source</label>
							<select id="leadsource">
								<option value="">Select Lead Source</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group leadstatus">
							<label htmlFor="leadstatus">Lead Status</label>
							<select id="leadstatus">
								<option value="">Select Lead Status</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group interestlevel">
							<label htmlFor="interestlevel">Interest Level</label>
							<input type="text" placeholder="Interest Level" id="interestlevel" />
						</div>
						<div className="form-group budget">
							<label htmlFor="budget">Budget</label>
							<input type="text" placeholder="Budget" id="budget" />
						</div>
						<div className="form-group potentialrevenue">
							<label htmlFor="potentialrevenue">Potential Revenue</label>
							<input type="text" placeholder="Potential Revenue" id="potentialrevenue" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateNewLead;