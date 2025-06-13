import { useState } from "react";
import { Paperclip, Plus, ChevronDown } from "lucide-react";
import "./CreateOrEditWorkflow.css";

const CreateOrEditWorkflow = () => {
	const [menuModal, setMenuModal] = useState(false);
	const [isReadOnly, setIsReadOnly] = useState(true);

	return (
		<>
			{/* Tasks Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="tasks-heading">Workflow</h1>
				</div>
				<div className="header-container-buttons">
					<button className="save-button">Save</button>
					<button
						className="edit-button"
						onClick={() => setIsReadOnly(true)}
					>
						Edit
					</button>
					{/* <div className="more-options-container"> */}
						{/* <button
							className="more-options-button"
							onClick={() => setMenuModal((prevState) => !prevState)}
							>
							⁞
							</button> */}
									{/* Menu Modal */}
									{/* {menuModal && (
							<div className="menu-modal-container">
								<div className="menu-modal">
								<ul className="menu-modal-list">
									<li>Submit for Approval</li>
									<li>Delete</li>
									<li>Print Preview</li>
									<li>Change Owner</li>
								</ul>
								</div>
							</div>
						)} */}
					{/* </div> */}
				</div>
			</div>

			{/* Business Object Container */}
			<div className="business-object-container">
				<div className="business-object-heading">
					<h1>Business Object</h1>
				</div>
				<div className="business-object-form">
					<form>
						<div className="form-group from">
							<label htmlFor="From">From</label>
							{/* <input
								type="text"
								placeholder="From"
								id="from"
								readOnly={isReadOnly}
							/> */}
							<select name="" id="">
								<option value="">Account</option>
								<option value="">Activity Task</option>
								<option value="">Appointment</option>
								<option value="">Assignment</option>
								<option value="">Campaign</option>
								<option value="">Contact</option>
								<option value="">Content Transfer</option>
								<option value="">Deal Resignation</option>
								<option value="">Email </option>
								<option value="">incident</option>
								<option value="">Individual Customer</option>
							</select>
						</div>

						<div className="form-group To">
							<label htmlFor="To">Name</label>
							<input
								type="text"
								placeholder="To"
								id="To"
								readOnly={isReadOnly}
							/>
						</div>
						<div className="form-group Description">
							<label htmlFor="Description">Description</label>
							<input
								type="text"
								placeholder="Description"
								id="Description"
								readOnly={isReadOnly}
							/>
						</div>
						<div className="form-group Timing">
							<label htmlFor="Timing">Timing</label>
							<input
								type="text"
								placeholder="Timing"
								id="Timing"
								readOnly={isReadOnly}
							/>
						</div>
					</form>
				</div>
			</div>

			{/* Conditions Container */}

			<div className="conditions-container">
				<div className="conditions-heading">
					<div className="left">
						<h1>Conditions</h1>
					</div>
					<div className="right">
						<h1>Execute if the following conditions met </h1>
						<div>
							<select name="" id="conditions">
								<option value="">Condition are met</option>
							</select>
						</div>
					</div>
				</div>
				<div className="conditions-form">
					<form>
						<div className="form-group fields">
							<label htmlFor="fields">Fields</label>
							<select name="" id="">
								<option value=""></option>
							</select>
						</div>

						<div className="form-group compareoperator">
							<label htmlFor="compareoperator">
								Compare Operator
							</label>
							<select id="compareoperator">
								<option value=""></option>
							</select>
						</div>

						<div className="form-group with">
							<label htmlFor="with">With</label>
							<select id="with">
								<option value=""></option>
							</select>
						</div>
					</form>
				</div>
			</div>

			{/* Account Information Container */}
			<div className="actions-container">
				<div className="actions-heading">
					<h1>Actions</h1>
				</div>
				<div className="actions-form">
					<form>
						<div className="form-group ruletype">
							<label htmlFor="ruletype">Rule Type</label>
							<select id="ruletype">
								<option value="">Select Rule Type</option>
							</select>
						</div>
						<div className="form-group cancel">
							<label htmlFor="cancel">Cancel</label>
							<select id="cancel">
								<option value="">Select Cancel</option>
							</select>
						</div>
						<div className="form-group userdetermination">
							<label htmlFor="userdetermination">User Determination</label>
							<select id="userdetermination">
								<option value="">Select User Determination</option>
							</select>
						</div>
						<div className="form-group businessroledetermination">
							<label htmlFor="businessroledetermination">Business Role Determination</label>
							<select id="businessroledetermination">
								<option value="">Select Business Role Determination</option>
							</select>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateOrEditWorkflow;
