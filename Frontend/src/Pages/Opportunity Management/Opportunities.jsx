import { useState } from "react";
import { Plus, RefreshCcw, Check, Filter, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Opportunities.css";

const Opportunities = () => {
	const [selectedRows, setSelectedRows] = useState([]);
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
	const [showFilters, setShowFilters] = useState(false);
	const navigate = useNavigate();

	const leadsData = [
		{
			id: 1,
			name: "Lead 1",
			leadId: "L-001",
			companyName: "Company A",
			status: "New",
			email: "lead1@example.com",
			phone: "123-456-7890",
			city: "New York",
			country: "USA",
		},
		{
			id: 2,
			name: "Lead 2",
			leadId: "L-002",
			companyName: "Company B",
			status: "Open",
			email: "lead2@example.com",
			phone: "234-567-8901",
			city: "Los Angeles",
			country: "USA",
		},
		{
			id: 3,
			name: "Lead 3",
			leadId: "L-003",
			companyName: "Company C",
			status: "Converted",
			email: "lead3@example.com",
			phone: "345-678-9012",
			city: "Chicago",
			country: "USA",
		},
	];

	const leadsCategories = [
		{ id: "all", name: "All Opportunities", count: "121" },
		{ id: "my", name: "My Opportunities (All)", count: "" },
		{ id: "converted", name: "Converted Opportunities", count: "" },
		{ id: "open", name: "Open Opportunities", count: "" },
		{ id: "cold", name: "Cold Opportunities", count: "" },
		{ id: "today", name: "Today's Opportunities", count: "" },
		{ id: "qualified", name: "Qualified Opportunities", count: "" },
		{ id: "hot", name: "Hot Opportunities", count: "" },
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

	const toggleFilters = () => {
		setShowFilters(!showFilters);
	};

	const handleActionButtons = () => {
		navigate("/sales/opportunities/details");
	}

	return (
		<div className="leads-management-container">
			{/* Opportunity section with dropdown */}
			<div className="leads-section">
				{/* Opportunity Stats */}
				<div className="opportunity-stats">
					<div className="stat-item">
						<div className="stat-label">TOTAL OPPORTUNITIES</div>
						<div className="stat-value">121</div>
					</div>
				</div>

				{/* Search and Actions */}
				<div className="opportunity-actions">
					<div className="opportunity-actions-left">
						<div className="search-container">
							<input
								type="text"
								placeholder="Search opportunities..."
								className="search-input"
							/>
							<Search className="search-icon-small" size={20} color="#64748b" strokeWidth={1} />
						</div>
						<div className="opportunity-dropdown-container">
							<select
								name=""
								id=""
								className="opportunity-dropdown-button"
							>
								<option value="">All Opportunities</option>
								<option value="">My Opportunities (All)</option>
								<option value="">Converted Opportunities</option>
								<option value="">Open Opportunities</option>
								<option value="">Hot Opportunities</option>
								<option value="">Cold Opportunities</option>
								<option value="">Today's Opportunities</option>
								<option value="">Qualified Opportunities</option>
							</select>
						</div>
					</div>
					<div className="action-icons">
						<button className="modern-button add-button" onClick={() => navigate("/sales/opportunities/create")}>
							{/* <span className="button-icon">+</span> */}
							<Plus size={20} color="#fff" strokeWidth={2} />
							<span>Create Opportunity</span>
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
							<h3>Filter Leads</h3>
							<button
								className="close-filters"
								onClick={toggleFilters}
							>
								×
							</button>
						</div>
						<div className="filter-row">
							<div className="filter-col">
								<label>Lead Name</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Lead ID</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Company Name</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Status</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Email</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
						</div>
						<div className="filter-row">
							<div className="filter-col">
								<label>Phone No.</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Lead Source</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Lead Owner</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Address Line 1</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Address Line 2</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
						</div>
						<div className="filter-row">
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
								<label>PIN Code</label>
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
						</div>
						<div className="filter-actions">
							<div className="sort-options">
								<button className="sort-button">
									<span>Ascending</span>
									<span className="sort-icon">↑</span>
								</button>
								<button className="sort-button">
									<span>Descending</span>
									<span className="sort-icon">↓</span>
								</button>
							</div>
							<div className="filter-buttons">
								<button className="reset-button">Reset</button>
								<button className="apply-button">Apply</button>
							</div>
						</div>
					</div>
				)}

				{/* Leads Table */}
				<div className="opportunity-table-container">
					<table className="opportunity-table">
						<thead>
							<tr>
								<th className="checkbox-column">
									<input
										type="checkbox"
										className="custom-checkbox"
									/>
								</th>
								<th>
									Opp. Name{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Stage <span className="sort-icon">↓</span>
								</th>
								<th>
									Account Name{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Amount <span className="sort-icon">↓</span>
								</th>
								<th>
									Email <span className="sort-icon">↓</span>
								</th>
								<th>
									Probability{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Status{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Progress{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Created On{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Actions{" "}
									<span className="sort-icon">↓</span>
								</th>
							</tr>
						</thead>
						<tbody>
							{leadsData.map((lead) => (
								<tr
									key={lead.id}
									className={
										selectedRows.includes(lead.id)
											? "selected-row"
											: ""
									}
								>
									<td className="checkbox-column">
										<input
											type="checkbox"
											className="custom-checkbox"
											checked={selectedRows.includes(
												lead.id
											)}
											onChange={() =>
												toggleRowSelection(lead.id)
											}
										/>
									</td>
									<td>{lead.name}</td>
									<td>{lead.leadId}</td>
									<td>{lead.companyName}</td>
									<td>
										<span
											className={`status-badge status-${lead.status.toLowerCase()}`}
										>
											{lead.status}
										</span>
									</td>
									<td>{lead.email}</td>
									<td>{lead.phone}</td>
									<td>{lead.city}</td>
									<td>{lead.country}</td>
									<td></td>
									<td>
										<div className="action-buttons">
											<button className="display-btn" onClick={handleActionButtons}>Display</button>
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
									Are you sure you want to delete these leads?
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

export default Opportunities;