import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, ChevronDown } from "lucide-react";
import "./AccessManagement.css";

const AccessManagement = () => {
	const [menuModal, setMenuModal] = useState(false);
	const [isReadOnly, setIsReadOnly] = useState(true);
	const navigate = useNavigate();

	return (
		<>
			{/* General Settings Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="access-management-heading">Access Management</h1>
				</div>
				<div className="header-container-buttons">
					<button className="new-button" onClick={() => navigate("/admin/accessmanagement/create")}>New</button>
					<button className="edit-button" onClick={() => setIsReadOnly(true)}>Edit</button>
					{/* <div className="more-options-container">
						<button className="more-options-button" onClick={() => setMenuModal(prevState => !prevState)}>⁞</button>
						Menu Modal
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
					</div> */}
				</div>
			</div>

			{/* Business Role Container */}
			<div className="business-role-container">
				<div className="business-role-heading">
					<h1>Business Role</h1>
				</div>
				<div className="business-role-form">
					<form>
						<div className="form-group userid">
							<label htmlFor="userid">User ID</label>
							<input type="text" placeholder="User ID" id="userid" readOnly={isReadOnly} />
						</div>
						<div className="form-group username">
							<label htmlFor="username">User Name</label>
							<input type="text" placeholder="User Name" id="username" readOnly={isReadOnly} />
						</div>
						<div className="form-group businessrole">
							<label htmlFor="businessrole">Business Role</label>
							{ isReadOnly ? (
								<input type="text" placeholder="Business Role" id="businessrole" readOnly={isReadOnly} />
							) : (
								<select id="businessrole">
									<option value="">Select Business Role</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							)}
						</div>
					</form>
				</div>
			</div>

			{/* User Access and Restriction - Assigned Users */}
			<div className="access-restriction-container">
				<div className="access-restriction-heading">
					<h1>User Access and Restriction - Assigned Users</h1>
					<button>Add User<Plus size={15} /></button>
				</div>
				<div className="access-restriction-table">
					<div className="table-container">
						<div className="table-column">
							<h1>User Name<ChevronDown size={15} /></h1>
							<p>1</p>
						</div>
						<div className="table-column">
							<h1>User ID<ChevronDown size={15} /></h1>
							<p>2</p>
						</div>
					</div>
				</div>
			</div>

			{/* User Access and Restriction - Workcenter */}
			<div className="access-restriction2-container">
				<div className="access-restriction2-heading">
					<h1>User Access and Restriction - Workcenter</h1>
				</div>
				<div className="access-restriction2-table">
					<div className="table-container">
						<div className="table-column">
							<h1>User Name<ChevronDown size={15} /></h1>
							<p>1</p>
						</div>
						<div className="table-column">
							<h1>User ID<ChevronDown size={15} /></h1>
							<p>2</p>
						</div>
						<div className="table-column">
							<h1>User Name<ChevronDown size={15} /></h1>
							<p>1</p>
						</div>
						<div className="table-column">
							<h1>User ID<ChevronDown size={15} /></h1>
							<p>2</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AccessManagement;