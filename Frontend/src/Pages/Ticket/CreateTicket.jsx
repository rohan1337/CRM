import { useNavigate } from "react-router-dom";
import "./CreateTicket.css";

const CreateTicket = () => {
	const navigate = useNavigate();

	const handleSave = (type) => {
		if (type === "save") {
			navigate("/service/tickets");
		} else if (type === "saveAndNew") {
			navigate("/service/tickets/createTicket");
		}
	};

	return (
		<>
			{/* Create Product Category Page Header Section */}
			<div className="header-container">
				<div className="header-title123">
					<h1>New Ticket</h1>
				</div>
				<div className="header-buttons">
					<button
						className="cancel-button12"
						onClick={() => navigate("/service/tickets")}
					>
						Cancel
					</button>
					<button
						className="save-button12"
						onClick={() => handleSave("save")}
					>
						Save
					</button>
					<button
						className="save-new-button"
						onClick={() => handleSave("saveAndNew")}
					>
						Save and New
					</button>
				</div>
			</div>

			{/* Product Container */}
			<div className="form-container123">
				<div className="form-title123">
					<h1>Ticket Information</h1>
				</div>
				<div className="form-content">
					<form>
						<div className="form-group account-name">
							<label htmlFor="accountName">Account Name</label>
							<input
								type="text"
								placeholder="Account Name"
								id="accountName"
							/>
						</div>
						<div className="form-group primary-contact">
							<label htmlFor="primaryContact">
								Primary Contact
							</label>
							<input
								type="text"
								placeholder="Primary Contact"
								id="primaryContact"
							/>
						</div>
						<div className="form-group ticket-type">
							<label htmlFor="ticketType">Type</label>
							<select id="ticketType">
								<option value="">Choose Type</option>
								<option value="new">New Business</option>
								<option value="existing">
									Existing Business
								</option>
							</select>
						</div>
						<div className="form-group subject">
							<label htmlFor="subject">Subject</label>
							<input
								type="text"
								placeholder="Subject"
								id="subject"
							/>
						</div>
						<div className="form-group lead-source">
							<label htmlFor="leadSource">Lead Source</label>
							<select id="leadSource">
								<option value="">Choose Lead Source</option>
								<option value="phone">Phone call</option>
								<option value="web">Web</option>
								<option value="referral">Referral</option>
								<option value="others">Others</option>
							</select>
						</div>
						<div className="form-group priority">
							<label htmlFor="priority">Priority</label>
							<select id="priority">
								<option value="">Choose Priority</option>
							</select>
						</div>
						<div className="form-group amount">
							<label htmlFor="amount">Amount</label>
							<input
								type="text"
								placeholder="Amount"
								id="amount"
							/>
						</div>
						<div className="form-group ticket-status">
							<label htmlFor="ticketStatus">Status</label>
							<select id="ticketStatus">
								<option value="">Choose Status</option>
								<option value="open">Open</option>
								<option value="processing">
									To be Processed
								</option>
								<option value="completed">Completed</option>
								<option value="closed">Closed</option>
							</select>
						</div>
						<div className="form-group description">
							<label htmlFor="description">Description</label>
							<textarea placeholder="Add description here..." id="description" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateTicket;
