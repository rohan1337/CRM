import React, { useState } from "react";
import {
	Plus,
	RefreshCcw,
	Filter,
	Search,
	User,
	ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Emails.css";

const Emails = () => {
	const [selectedRows, setSelectedRows] = useState([]);
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
	const [showcontactDropdown, setShowcontactDropdown] = useState(false);
	const [showFilters, setShowFilters] = useState(false);
	const [showActionsModal, setShowActionsModal] = useState(false);
	const navigate = useNavigate();

	const transformedData = [
		{
			id: 1,
			title: "Rick",
			status: "New",
			startdate: "2025-03-27T12:00:00.000Z",
			duedate: "",
			completeddate: "",
			relatedTo: "Company A",
			contact: "Hello",
			subject: "Meeting with Rick",
			meetingOwner: "123-456-7890",
		},
		{
			id: 2,
			title: "contact 2",
			status: "Open",
			startdate: "2025-03-27T12:00:00.000Z",
			duedate: "",
			completeddate: "",
			relatedTo: "Company B",
			contact: "contact2@example.com",
			subject: "Meeting with contact 2",
			meetingOwner: "234-567-8901",
		},
		{
			id: 3,
			title: "contact 3",
			status: "Converted",
			startdate: "2025-03-27T12:00:00.000Z",
			duedate: "",
			completeddate: "",
			relatedTo: "Company C",
			contact: "contact3@example.com",
			subject: "Meeting with contact 3",
			meetingOwner: "345-678-9012",
		},
	];

	const handleClick = () => {
		console.log("Hi");
	};

	const toggleRowSelection = (id) => {
		if (selectedRows.includes(id)) {
			setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
		} else {
			setSelectedRows([...selectedRows, id]);
		}
	};

	const handleDeleteConfirm = () => {
		// Handle delete logic
		setShowDeleteConfirm(false);
		setSelectedRows([]);
	};

	const toggleContactsDropdown = () => {
		setShowcontactDropdown(!showcontactDropdown);
	};

	const toggleFilters = () => {
		setShowFilters(!showFilters);
	};

	return (
		<div className="emails-management-container">
			<div className="emails-section">
				{/* Product Stats */}
				<div className="emails-stats">
					<div className="stat-item">
						<div className="stat-label">TOTAL Emails</div>
						<div className="stat-value">265</div>
					</div>
				</div>

				{/* Search and Actions */}
				<div className="emails-actions">
					<div className="emails-actions-left">
						<div className="search-container">
							<input
								type="text"
								placeholder="Search ..."
								className="search-input"
							/>
							<Search
								className="search-icon-small"
								size={20}
								color="#64748b"
								strokeWidth={1}
							/>
						</div>
						<div className="emails-dropdown-container">
							{/* <button
								className="emails-dropdown-button"
								onClick={toggleContactsDropdown}
							>
								<User size={20} color="#64748b" strokeWidth={2} />
								<span>All ORG</span>
								<ChevronDown size={20} color="#64748b" strokeWidth={2} />
							</button> */}
							{/* {showcontactDropdown && (
								<div className="emails-dropdown-menu">
									{contactCategories.map((category) => (
										<div
											key={category.id}
											className="emails-dropdown-item"
										>
											<span className="icon-category"></span>
											<span>{category.name}</span>
											{category.count && (
												<span className="count">{category.count}</span>
											)}
										</div>
									))}
								</div>
							)} */}
							<select
								name=""
								id=""
								className="emails-dropdown-button"
							>
								<option value="">My Emails</option>
								<option value="">All Emails</option>
								<option value="">Last 30 days Emails</option>
								<option value="">Todays Emails</option>
								<option value="">Last 7 days Emails</option>
							</select>
						</div>
					</div>
					<div className="action-icons">
						<button className="modern-button add-button">
							<Plus size={20} color="#fff" strokeWidth={2} />
							<span
								onClick={() =>
									navigate(
										"/activitymanagement/emails/create"
									)
								}
							>
								Add Email
							</span>
						</button>
						<button className="icon-button-modern refresh-button">
							<RefreshCcw
								size={20}
								color="#64748b"
								strokeWidth={2}
							/>
						</button>
						<button
							className="icon-button-modern filter-button"
							onClick={toggleFilters}
						>
							<Filter size={20} color="#64748b" strokeWidth={2} />
						</button>
						<div className="action-button-container">
							{/* <button
								className="modern-button action-button"
								onClick={() => setShowActionsModal((prev) => !prev)}
							>
								Actions
								<ChevronDown size={20} color="#64748b" strokeWidth={2} />
							</button> */}

							{/* Actions Modal */}
							{/* {showActionsModal && (
								<div className="actions-modal-container">
									<div className="actions-modal">
										<ul className="actions-modal-list">
											<li>Export</li>
											<li>View All</li>
											<li>Delete</li>
											</ul>
										<select name="" id="">
											<option value="">Export</option>
											<option value="">View All</option>
											<option value="">Delete</option>
										</select>
									</div>
								</div>
							)} */}
							<select
								name=""
								id=""
								className="modern-button action-button"
							>
								<option value="">Actions</option>
								<option value="">Mass Mail</option>
								<option value="">Mass Delete</option>
								<option value="">Export</option>
								<option value="">Mass Update</option>
								<option value="">Print View</option>
							</select>
						</div>
					</div>
				</div>

				{/* Filters Section */}
				{showFilters && (
					<div className="filters-container">
						<div className="filters-header">
							<h3>Filter Sales Quotes</h3>
							<button
								className="close-filters"
								onClick={toggleFilters}
							>
								×
							</button>
						</div>
						<div className="filter-row">
							<div className="filter-col">
								<label>Owner</label>
								<select className="filter-select">
									<option>Select Status</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Manager</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>location</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Owner</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Parent Unit Name</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
						</div>
						<div className="filter-actions">
							<div className="filter-buttons">
								<button className="reset-button">Reset</button>
								<button className="apply-button">Apply</button>
							</div>
						</div>
					</div>
				)}

				{/* Sales Quotes Table */}
				<div className="emails-table-container">
					<table className="contact-table">
						<thead>
							<tr>
								<th className="checkbox-column">
									<input
										type="checkbox"
										className="custom-checkbox"
									/>
								</th>
								<th>
									Subject <span className="sort-icon">↓</span>
								</th>
								<th>
									Status<span className="sort-icon">↓</span>
								</th>
								<th>
									Email From
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Sent On<span className="sort-icon">↓</span>
								</th>
								<th>
									Category{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Account <span className="sort-icon">↓</span>
								</th>

								<th>
									Contact <span className="sort-icon">↓</span>
								</th>

								<th>
									Changed By{" "}
									<span className="sort-icon">↓</span>
								</th>

								<th>
									Owner <span className="sort-icon">↓</span>
								</th>

								<th>
									Action <span className="sort-icon">↓</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{transformedData.map((contact) => (
								<tr
									key={contact.id}
									className={
										selectedRows.includes(contact.id)
											? "selected-row"
											: ""
									}
								>
									<td className="checkbox-column">
										<input
											type="checkbox"
											className="custom-checkbox"
											checked={selectedRows.includes(
												contact.id
											)}
											onChange={() =>
												toggleRowSelection(contact.id)
											}
										/>
									</td>
									<td>{contact.title}</td>
									<td>{contact.status}</td>
									<td>{contact.startdate}</td>
									<td>{contact.duedate}</td>
									<td>{contact.completeddate}</td>
									<td>{contact.relatedTo}</td>
									<td>{contact.contact}</td>
									<td>{contact.subject}</td>
									<td>{contact.meetingOwner}</td>

									<td>
										<div className="action-buttons">
											{/* <button
												className="display-btn"
												onClick={() =>
													navigate("/activitymanagement/meetings/display")
												}
											>
												Display
											</button> */}
											<button
												className="delete-btn"
												onClick={setShowDeleteConfirm}
											>
												Delete
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Pagination */}
				<div className="pagination">
					<button className="pagination-button">Previous</button>
					<div className="page-numbers">
						<button className="page-number active">1</button>
						<button className="page-number">2</button>
						<button className="page-number">3</button>
					</div>
					<button className="pagination-button">Next</button>
				</div>

				{/* Delete Confirmation Dialog */}
				{showDeleteConfirm && (
					<div className="delete-confirm-overlay">
						<div className="delete-confirm-dialog">
							<div className="dialog-header">
								<h3>Confirm Delete</h3>
								<p>
									Are you sure you want to delete this quote?
								</p>
							</div>
							<div className="dialog-buttons">
								<button
									className="confirm-cancel-button"
									onClick={() => setShowDeleteConfirm(false)}
								>
									Cancel
								</button>
								<button
									className="confirm-delete-button"
									onClick={handleDeleteConfirm}
								>
									Delete
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Emails;
