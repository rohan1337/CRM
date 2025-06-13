import React, { useState } from "react";
import { Plus, RefreshCcw, Check, Filter, Search, User, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./CustomerAccount.css";

const CustomerAccount = () => {
	const [selectedRows, setSelectedRows] = useState([]);
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
	const [showaccountDropdown, setShowaccountDropdown] = useState(false);
	const [showFilters, setShowFilters] = useState(false);

	const navigate = useNavigate();

	const accountData = [
		{
			id: 1,
			name: "account 1",
			accountId: "L-001",
			companyName: "Company A",
			status: "New",
			email: "account1@example.com",
			phone: "123-456-7890",
			city: "New York",
			country: "USA",
		},
		{
			id: 2,
			name: "account 2",
			accountId: "L-002",
			companyName: "Company B",
			status: "Open",
			email: "account2@example.com",
			phone: "234-567-8901",
			city: "Los Angeles",
			country: "USA",
		},
		{
			id: 3,
			name: "account 3",
			accountId: "L-003",
			companyName: "Company C",
			status: "Converted",
			email: "account3@example.com",
			phone: "345-678-9012",
			city: "Chicago",
			country: "USA",
		},
	];

	const accountCategories = [
		{ id: "all", name: "All Accounts", count: "121" },
		{ id: "parent", name: "Parent Accounts", count: "" },
		{ id: "active", name: "Active Accounts", count: "" },
		{ id: "closed", name: "Closed Accounts", count: "" },
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

	const toggleAccountsDropdown = () => {
		setShowaccountDropdown(!showaccountDropdown);
	};

	const toggleFilters = () => {
		setShowFilters(!showFilters);
	};

	return (
		<div className="account-management-container">
			{/* account section with dropdown */}
			<div className="account-section">
				<div className="account-header">
					<div className="account-dropdown-container">
						<button
							className="account-dropdown-button"
							onClick={toggleAccountsDropdown}
						>
							<User size={20} color="#fff" strokeWidth={2} />
							<span>All Accounts</span>
							<ChevronDown size={20} color="#fff" strokeWidth={2} />
						</button>
						{showaccountDropdown && (
							<div className="account-dropdown-menu">
								{accountCategories.map((category) => (
									<div
										key={category.id}
										className="account-dropdown-item"
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

				{/* account Stats */}
				<div className="account-stats">
					<div className="stat-item">
						<div className="stat-label">TOTAL Account</div>
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
				<div className="account-actions">
					<div className="search-container">
						<input
							type="text"
							placeholder="Search account..."
							className="search-input"
						/>
						<Search className="search-icon-small" size={20} color="#64748b" strokeWidth={1} />
					</div>
					<div className="action-icons">
						<button className="modern-button add-button">
							<Plus size={20} color="#fff" strokeWidth={2} />
							<span onClick={() => navigate("/customers/accounts/create")}>Add Account</span>
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
							<h3>Filter Account</h3>
							<button
								className="close-filters"
								onClick={toggleFilters}
							>
								×
							</button>
						</div>
						<div className="filter-row">
							<div className="filter-col">
								<label>Account Name</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Account ID</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Account Owner</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Account Type</label>
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
								<label>Parent Account</label>
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
						{/* <div className="filter-row">
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
								<label>Phones</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Last Interaction</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Created on</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
						</div> */}
						<div className="filter-actions">
							{/* <div className="sort-options">
								<button className="sort-button">
									<span>Ascending</span>
									<span className="sort-icon">↑</span>
								</button>
								<button className="sort-button">
									<span>Descending</span>
									<span className="sort-icon">↓</span>
								</button>
							</div> */}
							<div className="filter-buttons">
								<button className="reset-button">Reset</button>
								<button className="apply-button">Apply</button>
							</div>
						</div>
					</div>
				)}

				{/* Account Table */}
				<div className="account-table-container">
					<table className="account-table">
						<thead>
							<tr>
								<th className="checkbox-column">
									<input
										type="checkbox"
										className="custom-checkbox"
									/>
								</th>
								<th>
									Account Name{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Account ID <span className="sort-icon">↓</span>
								</th>
								<th>
									Account Owner{" "}
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
							{accountData.map((account) => (
								<tr
									key={account.id}
									className={
										selectedRows.includes(account.id)
											? "selected-row"
											: ""
									}
								>
									<td className="checkbox-column">
										<input
											type="checkbox"
											className="custom-checkbox"
											checked={selectedRows.includes(
												account.id
											)}
											onChange={() =>
												toggleRowSelection(account.id)
											}
										/>
									</td>
									<td>{account.name}</td>
									<td>{account.accountId}</td>
									<td>{account.companyName}</td>
									<td>
										<span
											className={`status-badge status-${account.status.toLowerCase()}`}
										>
											{account.status}
										</span>
									</td>
									<td>{account.email}</td>
									<td>{account.phone}</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td>{account.city}</td>
									<td>{account.country}</td>
									<td>
										<div className="action-menu">
											<button className="action-dots">
												⋮
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
									Are you sure you want to delete these accounts?
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

export default CustomerAccount;