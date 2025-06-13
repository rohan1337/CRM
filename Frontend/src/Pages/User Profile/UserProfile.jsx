import React, { useState } from "react";
import { Plus, RefreshCcw, Filter, Search, User, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showcontactDropdown, setShowcontactDropdown] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [showActionsModal, setShowActionsModal] = useState(false);
    const navigate = useNavigate();

    const transformedData = [
        {
            id: 1,
            userName: "Rick",
            userId: "New",
            emailId: "2025-03-27T12:00:00.000Z",
            status: "",
            address: "",
            contact: "Hello",
            createdOn: "Meeting with Rick",
        },
        {
            id: 2,
            userName: "contact 2",
            userId: "Open",
            emailId: "2025-03-27T12:00:00.000Z",
            status: "",
            address: "",
            contact: "contact2@example.com",
            createdOn: "Meeting with contact 2",
        },
        {
            id: 3,
            userName: "contact 3",
            userId: "Converted",
            emailId: "2025-03-27T12:00:00.000Z",
            status: "",
            address: "",
            contact: "contact3@example.com",
            createdOn: "Meeting with contact 3",
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
        <div className="user-profiles-management-container">
            <div className="user-profiles-section">
                {/* Product Stats */}
                <div className="user-profiles-stats">
                    <div className="stat-item">
                        <div className="stat-label">TOTAL Users</div>
                        <div className="stat-value">365</div>
                    </div>
                </div>

                {/* Search and Actions */}
                <div className="user-profiles-actions">
                    <div className="user-profiles-actions-left">
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
                        <div className="user-profiles-dropdown-container">
                            {/* <button
								className="user-profiles-dropdown-button"
								onClick={toggleContactsDropdown}
							>
								<User size={20} color="#64748b" strokeWidth={2} />
								<span>All ORG</span>
								<ChevronDown size={20} color="#64748b" strokeWidth={2} />
							</button> */}
											{/* {showcontactDropdown && (
								<div className="user-profiles-dropdown-menu">
								{contactCategories.map((category) => (
									<div
									key={category.id}
									className="user-profiles-dropdown-item"
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
                                className="user-profiles-dropdown-button"
                            >
                                <option value="">All Users</option>
                                <option value="">Active Users</option>
                                <option value="">inactive Users</option>
                            </select>
                        </div>
                    </div>
                    <div className="action-icons">
                        <button className="modern-button add-button">
                            <Plus size={20} color="#fff" strokeWidth={2} />
                            <span
                                onClick={() =>
                                    navigate("/admin/userprofiles/createOrEdit")
                                }
                            >
                                Add User
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
                            {/* <select name="" id="" className="modern-button action-button">
								<option value="">Actions</option>
								<option value="">Mass Mail</option>
								<option value="">Mass Delete</option>
								<option value="">Export</option>
								<option value="">Mass Update</option>
								<option value="">Print View</option>
							</select> */}
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
                <div className="user-profiles-table-container">
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
                                    User Name{" "}
                                    <span className="sort-icon">↓</span>
                                </th>
                                <th>
                                    User ID<span className="sort-icon">↓</span>
                                </th>
                                <th>
                                    Email ID<span className="sort-icon">↓</span>
                                </th>
                                <th>
                                    Status<span className="sort-icon">↓</span>
                                </th>
                                <th>
                                    Address <span className="sort-icon">↓</span>
                                </th>
                                <th>
                                    Phone <span className="sort-icon">↓</span>
                                </th>

                                <th>
                                    Created On{" "}
                                    <span className="sort-icon">↓</span>
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
                                    <td>{contact.userName}</td>
                                    <td>{contact.userId}</td>
                                    <td>{contact.emailId}</td>
                                    <td>{contact.status}</td>
                                    <td>{contact.address}</td>
                                    <td>{contact.phone}</td>
                                    <td>{contact.createdOn}</td>

                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="display-btn"
                                                onClick={() =>
                                                    navigate(
                                                        "/admin/userprofiles/display"
                                                    )
                                                }
                                            >
                                                Display
                                            </button>
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

export default UserProfile;
