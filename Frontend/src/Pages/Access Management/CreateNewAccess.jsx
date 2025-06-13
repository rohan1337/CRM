import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateNewAccess.css";

const CreateNewAccess = () => {
	const navigate = useNavigate();

	const handleSave = (type) => {
		if (type === "save") {
			navigate("/admin/accessmanagement");
		} else if (type === "saveAndNew") {
			navigate("/admin/accessmanagement/create");
		}
	}

	return (
		<>
			{/* Create User Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="new-user-heading">New User</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button" onClick={() => navigate("/admin/accessmanagement")}>Cancel</button>
					<button className="save-button" onClick={() => handleSave("save")}>Save</button>
					<button className="save-and-new-button" onClick={() => handleSave("saveAndNew")}>Save and New</button>
				</div>
			</div>

			{/* Create User Container */}
			<div className="create-user-container">
				<div className="create-user-heading">
					<h1>User Details</h1>
				</div>
				<div className="create-user-form">
					<form>
						<div className="form-group username">
							<label htmlFor="username">User Name</label>
							<input type="text" placeholder="User Name" id="username" />
						</div>
						<div className="form-group userid">
							<label htmlFor="userid">User ID</label>
							<input type="text" placeholder="User ID" id="userid" />
						</div>
						<div className="form-group email">
							<label htmlFor="email">Email</label>
							<input type="text" placeholder="eg. john.doe@example.com" id="email" />
						</div>
						<div className="form-group phoneno">
							<label htmlFor="phoneno">Phone No.</label>
							<input type="text" placeholder="eg. +0 12345 67890" id="phoneno" />
						</div>
						<div className="form-group businessrole">
							<label htmlFor="businessrole">Business Role</label>
							<select id="businessrole">
								<option value="">Select Business Role</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group timeformat">
							<label htmlFor="timeformat">Time Format</label>
							<select id="timeformat">
								<option value="">Select Time Format</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>						
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateNewAccess;