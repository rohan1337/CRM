import { useState } from "react";
import { Paperclip, Plus, ChevronDown } from "lucide-react";
import "./DetailedPhoneCalls.css";

const DetailedPhoneCalls = () => {
	const [menuModal, setMenuModal] = useState(false);
	const [isReadOnly, setIsReadOnly] = useState(true);

	return (
		<>
			{/* Tasks Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="call-heading">Phone Call Name</h1>
				</div>
				<div className="header-container-buttons">
					<button className="send-email-button">Send Email</button>
					<button className="edit-button" onClick={() => setIsReadOnly(true)}>Edit</button>
					<div className="more-options-container">
						<button className="more-options-button" onClick={() => setMenuModal(prevState => !prevState)}>⁞</button>
						{/* Menu Modal */}
						{menuModal && (
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
						)}
					</div>
				</div>
			</div>

			{/* Overview Container */}
			<div className="call-information-container">
				<div className="call-information-heading">
					<h1>Call Information</h1>
				</div>
				<div className="call-information-form">
					<form>
						<div className="form-group callfor">
							<label htmlFor="callfor">Call For</label>
							<input type="text" placeholder="Call For" id="callfor" readOnly={isReadOnly} />
						</div>
						<div className="form-group relatedto">
							<label htmlFor="relatedto">Related To</label>
							<input type="text" placeholder="Related To" id="relatedto" readOnly={isReadOnly} />
						</div>
						<div className="form-group calltimefor">
							<label htmlFor="calltimefor">Call Time (For)</label>
							<input type="text" placeholder="Call Time (For)" id="calltimefor" readOnly={isReadOnly} />
						</div>
						<div className="form-group calltimeto">
							<label htmlFor="calltimeto">Call Time (To)</label>
							<input type="text" placeholder="Call Time (To)" id="calltimeto" readOnly={isReadOnly} />
						</div>
						<div className="form-group calltype">
							<label htmlFor="calltype">Call Type</label>
							<input type="text" placeholder="Call Type" id="calltype" readOnly={isReadOnly} />
						</div>
						<div className="form-group owner">
							<label htmlFor="owner">Owner</label>
							<input type="text" placeholder="Owner" id="owner" readOnly={isReadOnly} />
						</div>
						<div className="form-group subject">
							<label htmlFor="subject">Subject</label>
							<input type="text" placeholder="Subject" id="subject" readOnly={isReadOnly} />
						</div>
					</form>
				</div>
			</div>

			{/* Purpose Container */}
			<div className="purpose-container">
				<div className="purpose-heading">
					<h1>Purpose</h1>
				</div>
				<div className="purpose-form">
					<form>
						<div className="form-group subject1">
							<label htmlFor="subject1">Subject</label>
							<input type="text" placeholder="Subject" id="subject1" readOnly={isReadOnly} />
						</div>
						<div className="form-group description1">
							<label htmlFor="description1">Description</label>
							<textarea placeholder="Write description here..." id="description1" readOnly={isReadOnly} />
						</div>
					</form>
				</div>
			</div>

			{/* Notes Container */}
			<div className="notes-container">
				<div className="notes-heading">
					<div className="left">
						<h1>Notes</h1>
					</div>
				</div>
				<div className="notes-form">
					<form>
						<div className="form-group notes">
							<label htmlFor="notes">Notes</label>
							<textarea placeholder="Write your note here..." id="description" readOnly={isReadOnly} />
						</div>
					</form>
				</div>
			</div>

			{/* Account Information Container */}
			<div className="account-information-container">
				<div className="account-information-heading">
					<div className="left">
						<h1>Account Information</h1>
					</div>
				</div>
				<div className="account-information-form">
					<form>
						<div className="form-group accountid">
							<label htmlFor="accountid">Account ID</label>
							<input type="text" placeholder="Account ID" id="accountid" readOnly={isReadOnly} />
						</div>
						<div className="form-group accountname">
							<label htmlFor="accountname">Account Name</label>
							<input type="text" placeholder="Account Name" id="accountname" readOnly={isReadOnly} />
						</div>
						<div className="form-group website">
							<label htmlFor="website">Website</label>
							<input type="text" placeholder="Website" id="website" readOnly={isReadOnly} />
						</div>
						<div className="form-group accounttype">
							<label htmlFor="accounttype">Account Type</label>
							{isReadOnly ? (
								<input type="text" placeholder="Account Type" id="accounttype" readOnly={isReadOnly} />
							) : (
								<select id="accounttype">
									<option value="">Select Account Type</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							)}
						</div>
						<div className="form-group accountowner">
							<label htmlFor="accountowner">Account Owner</label>
							<input type="text" placeholder="Account Owner" id="accountowner" readOnly={isReadOnly} />
						</div>
						<div className="form-group industry">
							<label htmlFor="industry">Indstry</label>
							<input type="text" placeholder="Indstry" id="industry" readOnly={isReadOnly} />
						</div>
						<div className="form-group parentaccount">
							<label htmlFor="parentaccount">Parent Account</label>
							<input type="date" placeholder="Parent Account" id="parentaccount" readOnly={isReadOnly} />
						</div>
						<div className="form-group role">
							<label htmlFor="role">Role</label>
							{isReadOnly ? (
								<input type="text" placeholder="Role" id="role" readOnly={isReadOnly} />
							) : (
								<select id="role">
									<option value="">Select Role</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							)}
						</div>
						<div className="form-group notes">
							<label htmlFor="notes">Notes</label>
							<textarea placeholder="Write your notes here..." id="notes" readOnly={isReadOnly} />
						</div>
					</form>
				</div>
			</div>

			{/* Contacts Information Container */}
			<div className="contact-information-container">
				<div className="contact-information-heading">
					<div className="left">
						<h1>Contact Information</h1>
					</div>
				</div>
				<div className="contact3-information-form">
					<form>
						<div className="form-group emailid3">
							<label htmlFor="emailid3">Email ID</label>
							<input type="email" placeholder="Email ID" id="emailid3" readOnly={isReadOnly} />
						</div>
						<div className="form-group secondaryemail3">
							<label htmlFor="secondaryemail3">Secondary Email</label>
							<input type="email" placeholder="Secondary Email" id="secondaryemail3" readOnly={isReadOnly} />
						</div>
						<div className="form-group phoneno3">
							<label htmlFor="phoneno3">Phone No.</label>
							<input type="tel" placeholder="e.g. +0 12345 67890" id="phoneno3" readOnly={isReadOnly} />
						</div>
						<div className="form-group mobileno3">
							<label htmlFor="mobileno3">Mobile No.</label>
							<input type="tel" placeholder="e.g. +0 123 456 7890" id="mobileno3" readOnly={isReadOnly} />
						</div>
						<div className="form-group fax3">
							<label htmlFor="fax3">Fax</label>
							<input type="text" placeholder="Fax" id="fax3" readOnly={isReadOnly} />
						</div>
						<div className="form-group website3">
							<label htmlFor="website3">Website</label>
							<input type="text" placeholder="e.g. http://www.example.com" id="website3" readOnly={isReadOnly} />
						</div>
						<div className="form-group addressline13">
							<label htmlFor="addressline13">Address Line 1</label>
							<input type="text" placeholder="Address Line 1" id="addressline13" readOnly={isReadOnly} />
						</div>
						<div className="form-group addressline23">
							<label htmlFor="addressline23">Address Line 2</label>
							<input type="text" placeholder="Address Line 2" id="addressline23" readOnly={isReadOnly} />
						</div>
						<div className="form-group city3">
							<label htmlFor="city3">City</label>
							<input type="text" placeholder="City" id="city3" readOnly={isReadOnly} />
						</div>
						<div className="form-group state3">
							<label htmlFor="state3">State</label>
							<input type="text" placeholder="State" id="state3" readOnly={isReadOnly} />
						</div>
						<div className="form-group country3">
							<label htmlFor="country3">Country</label>
							<input type="text" placeholder="Country" id="country3" readOnly={isReadOnly} />
						</div>
						<div className="form-group zipcode3">
							<label htmlFor="zipcode3">ZIP Code</label>
							<input type="text" placeholder="ZIP Code" id="zipcode3" readOnly={isReadOnly} />
						</div>						
					</form>
				</div>
			</div>

			{/* Attachments Section */}
			<div className="attachment1-section-container">
				<div className="attachment1-section-heading">
					<h1>Attachments</h1>
					<button>Attach<Paperclip size={15} /></button>
				</div>
				<div className="attachment1-section-table">
					<div className="table-container">
						<div className="table-column">
							<h1>File Name<ChevronDown size={15} /></h1>
							<p>1</p>
						</div>
						<div className="table-column">
							<h1>Attached By<ChevronDown size={15} /></h1>
							<p>2</p>
						</div>
						<div className="table-column">
							<h1>Date Added<ChevronDown size={15} /></h1>
							<p>3</p>
						</div>
						<div className="table-column">
							<h1>File Size<ChevronDown size={15} /></h1>
							<p>4</p>
						</div>
					</div>
				</div>
			</div>

			{/* Activities Section */}
			<div className="activity-section-container">
				<div className="activity-section-heading">
					<h1>Activities</h1>
					<button>Add Activity<Plus size={15} /></button>
				</div>
				<div className="activity-section-table">
					<div className="table-container">
						<div className="table-column">
							<h1>Activity Name<ChevronDown size={15} /></h1>
							<p>1</p>
						</div>
						<div className="table-column">
							<h1>Activity Type<ChevronDown size={15} /></h1>
							<p>2</p>
						</div>
						<div className="table-column">
							<h1>Meetings<ChevronDown size={15} /></h1>
							<p>3</p>
						</div>
						<div className="table-column">
							<h1>Calls<ChevronDown size={15} /></h1>
							<p>4</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DetailedPhoneCalls;