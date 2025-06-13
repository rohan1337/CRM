import React, { useState } from "react";
import { Plus, RefreshCcw, Check, Filter, Search, User, ChevronDown, Delete,  } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CustomerContact.css";

const CustomerContact = () => {
	const [selectedRows, setSelectedRows] = useState([]);
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
	const [showcontactDropdown, setShowcontactDropdown] = useState(false);
	const [showFilters, setShowFilters] = useState(false);
	const navigate = useNavigate();

	const contactData = [
		{
			id: 1,
			name: "contact 1",
			contactId: "L-001",
			companyName: "Company A",
			status: "New",
			email: "contact1@example.com",
			phone: "123-456-7890",
			city: "New York",
			country: "USA",
		},
		{
			id: 2,
			name: "contact 2",
			contactId: "L-002",
			companyName: "Company B",
			status: "Open",
			email: "contact2@example.com",
			phone: "234-567-8901",
			city: "Los Angeles",
			country: "USA",
		},
		{
			id: 3,
			name: "contact 3",
			contactId: "L-003",
			companyName: "Company C",
			status: "Converted",
			email: "contact3@example.com",
			phone: "345-678-9012",
			city: "Chicago",
			country: "USA",
		},
	];

	const contactCategories = [
		{ id: "all", name: "All Contacts", count: "121" },
		{ id: "parent", name: "Parent Contacts", count: "" },
		{ id: "active", name: "Active Contacts", count: "" },
		{ id: "closed", name: "Closed Contacts", count: "" },
	];

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
		<div className="contact-management-container">
			{/* Contact section with dropdown */}
			<div className="contact-section">
				<div className="contact-header">
					<div className="contact-dropdown-container">
						<button
							className="contact-dropdown-button"
							onClick={toggleContactsDropdown}
						>
							<User size={20} color="#fff" strokeWidth={2} />
							<span>All Contacts</span>
							<ChevronDown size={20} color="#fff" strokeWidth={2} />
						</button>
						{showcontactDropdown && (
							<div className="contact-dropdown-menu">
								{contactCategories.map((category) => (
									<div
										key={category.id}
										className="contact-dropdown-item"
									>
										<span className="icon-category"></span>
										<span>{category.name}</span>
										{category.count && (
											<span className="count">
												{category.count}
											</span>
										)}
									</div>
								))}
							</div>
						)}
					</div>

					<div className="right-actions">
						<button className="action-button select-button">
							<Check size={20} color = "#64748b" srokewidth={1} />
							<span>Select All</span>
						</button>
						<button className="action-button refresh-button">
							<RefreshCcw size={20} color="#64748b" strokeWidth={1} />
							<span>Refresh</span>
						</button>
					</div>
				</div>

				{/* Contact Stats */}
				<div className="contact-stats">
					<div className="stat-item">
						<div className="stat-label">TOTAL Contact</div>
						<div className="stat-value">121</div>
					</div>
					<div className="stat-item">
						<div className="stat-label">TOTAL CONVERTED</div>
						<div className="stat-value">35</div>
					</div>
					<div className="stat-item">
						<div className="stat-label">TOTAL LOST</div>
						<div className="stat-value">12</div>
					</div>
					<div className="stat-item">
						<div className="stat-label">TOTAL OPEN</div>
						<div className="stat-value">74</div>
					</div>
				</div>

				{/* Search and Actions */}
				<div className="contact-actions">
					<div className="search-container">
						<input
							type="text"
							placeholder="Search contact..."
							className="search-input"
						/>
						<Search className="search-icon-small" size={20} color="#64748b" strokeWidth={1} />
					</div>
					<div className="action-icons">
						<button className="modern-button add-button">
							<Plus size={20} color="#fff" strokeWidth={2} />
							<span onClick={() => navigate("/customers/contacts/create")}>Add Contact</span>
						</button>
						<button className="icon-button-modern refresh-button">
							<RefreshCcw size={20} color="#64748b" strokeWidth={2} />
						</button>
						<button
							className="icon-button-modern filter-button"
							onClick={toggleFilters}
						>
							<Filter size={20} color="#64748b" strokeWidth={2} />
						</button>
					</div>
				</div>

				{/* Filters Section */}
				{showFilters && (
					<div className="filters-container">
						<div className="filters-header">
							<h3>Filter Contact</h3>
							<button
								className="close-filters"
								onClick={toggleFilters}
							>
								×
							</button>
						</div>
						<div className="filter-row">
							<div className="filter-col">
								<label>Contact Name</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Contact ID</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Contact Owner</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Contact Type</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Website</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
						</div>
						<div className="filter-row">
							<div className="filter-col">
								<label>Parent Contact</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Address Line</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Phone No.</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>City</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Country</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>ZIP Code</label>
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

				{/* Contact Table */}
				<div className="contact-table-container">
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
									Contact Name{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Account ID <span className="sort-icon">↓</span>
								</th>
								<th>
									Account Name{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Account Type <span className="sort-icon">↓</span>
								</th>
								<th>
									Role <span className="sort-icon">↓</span>
								</th>
								<th>
									Website{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Address Line 1{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Address Line 2{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Country{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Pin Code{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Last Interaction <span className="sort-icon">↓</span>
								</th>
								<th>
									Created On <span className="sort-icon">↓</span>
								</th>
								<th>
									Action{" "}
									<span className="sort-icon">↓</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{contactData.map((contact) => (
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
									<td>{contact.name}</td>
									<td>{contact.contactId}</td>
									<td>{contact.companyName}</td>
									<td>
										<span
											className={`status-badge status-${contact.status.toLowerCase()}`}
										>
											{contact.status}
										</span>
									</td>
									<td>{contact.email}</td>
									<td>{contact.phone}</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>{contact.city}</td>
									<td>{contact.country}</td>
									<td>
										<div className="action-buttons">
											<button className="display-btn">Display</button>
											<button className="delete-btn">Delete</button>
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
									Are you sure you want to delete these contacts?
								</p>
							</div>
							<div className="dialog-buttons">
								<button
									className="cancel-button"
									onClick={() => setShowDeleteConfirm(false)}
								>
									Cancel
								</button>
								<button
									className="delete-button"
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

export default CustomerContact;