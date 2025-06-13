import React, { useState } from "react";
import { Plus, RefreshCcw, Filter, Search, User, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./ProductCategory.css";

const ProductCategory = () => {
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
		{ id: "all", name: "All Product Category", count: "121" },
		{ id: "active", name: "Active Product Category", count: "" },
		{ id: "inactive", name: "Inactive Product Category", count: "" },
		{ id: "closed", name: "Closed Product Category", count: "" },
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
		<div className="product-category-management-container">
			<div className="product-category-section">
				{/* Product Stats */}
				<div className="product-category-stats">
					<div className="stat-item">
						<div className="stat-label">TOTAL PRODUCT CATEGORIES</div>
						<div className="stat-value">121</div>
					</div>
				</div>

				{/* Search and Actions */}
				<div className="product-category-actions">
					<div className="product-category-actions-left">
						<div className="search-container">
							<input
								type="text"
								placeholder="Search product categories..."
								className="search-input"
							/>
							<Search className="search-icon-small" size={20} color="#64748b" strokeWidth={1} />
						</div>
						<div className="product-category-dropdown-container">
							<button
								className="product-category-dropdown-button"
								onClick={toggleContactsDropdown}
							>
								<User size={20} color="#64748b" strokeWidth={2} />
								<span>All Product Category</span>
								<ChevronDown size={20} color="#64748b" strokeWidth={2} />
							</button>
							{showcontactDropdown && (
								<div className="product-category-dropdown-menu">
									{contactCategories.map((category) => (
										<div
											key={category.id}
											className="product-category-dropdown-item"
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
					</div>
					<div className="action-icons">
						<button className="modern-button add-button">
							<Plus size={20} color="#fff" strokeWidth={2} />
							<span onClick={() => navigate("/products/productcategories/create")}>Add Product</span>
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
							<h3>Filter Product Categories</h3>
							<button
								className="close-filters"
								onClick={toggleFilters}
							>
								×
							</button>
						</div>
						<div className="filter-row">
							<div className="filter-col">
								<label>Product Category Name</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Product Category ID</label>
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
								<label>Vendor Name</label>
								<select className="filter-select">
									<option>Select</option>
								</select>
							</div>
							<div className="filter-col">
								<label>Parent Name</label>
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
				<div className="product-category-table-container">
					<table className="product-category-table">
						<thead>
							<tr>
								<th className="checkbox-column">
									<input
										type="checkbox"
										className="custom-checkbox"
									/>
								</th>
								<th>
									Product Category Name{" "}
									<span className="sort-icon">↓</span>
								</th>
								<th>
									Product Category ID <span className="sort-icon">↓</span>
								</th>
								<th>
									Status{" "}
									<span className="sort-icon">↓</span>
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
									<td>{contact.country}</td>
									<td>
										<div className="action-buttons">
											<button className="display-btn" onClick={() => navigate("/products/productcategories/details")}>Display</button>
											<button className="delete-btn" onClick={setShowDeleteConfirm}>Delete</button>
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
									Are you sure you want to delete this product category?
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

export default ProductCategory;