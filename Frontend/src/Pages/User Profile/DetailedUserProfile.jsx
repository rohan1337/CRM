import { useState } from "react";
import "./DetailedUserProfile.css";

const DetailedUserProfile = () => {
	const [menuModal, setMenuModal] = useState(false);
	const [isReadOnly, setIsReadOnly] = useState(true);

	return (
		<>
			{/* Tasks Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="detailed-user-information-heading">Detailed User Information</h1>
				</div>
				<div className="header-container-buttons">
					<button className="edit-button" onClick={() => setIsReadOnly(false)}>Edit</button>
					<button className="save-button">Save</button>
				</div>
			</div>

			{/* Overview Container */}
			<div className="user-details-container">
				<div className="user-details-heading">
					<h1>Call Information</h1>
				</div>
				<div className="user-details-form">
					<form>
						<div className="form-group username">
							<label htmlFor="username">User Name</label>
							<input type="text" placeholder="User Name" id="username" readOnly={isReadOnly} />
						</div>
						<div className="form-group userid">
							<label htmlFor="userid">User ID</label>
							<input type="text" placeholder="User ID" id="userid" readOnly={isReadOnly} />
						</div>
						<div className="form-group email">
							<label htmlFor="email">Email</label>
							<input type="text" placeholder="e.g. john.doe@example.com" id="email" readOnly={isReadOnly} />
						</div>
						<div className="form-group phoneno">
							<label htmlFor="phoneno">Phone No.</label>
							<input type="text" placeholder="e.g. +0 12345 67890" id="phoneno" readOnly={isReadOnly} />
						</div>
						<div className="form-group buisnessrole">
							<label htmlFor="buisnessrole">Business Role</label>
							{isReadOnly ? (
								<input type="text" placeholder="Business Role" id="buisnessrole" readOnly={isReadOnly} />
							) : (
								<select id="businessrole">
									<option value="">Select Business Role</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							)}
						</div>
						<div className="form-group timeformat">
							<label htmlFor="timeformat">Time Format</label>
							{isReadOnly ? (
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
					</form>
				</div>
			</div>
		</>
	);
}

export default DetailedUserProfile;