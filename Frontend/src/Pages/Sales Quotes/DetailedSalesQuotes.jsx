import { useState } from "react";
import { Paperclip, Plus, ChevronDown, Pencil } from "lucide-react";
import "./DetailedSalesQuotes.css";

const DetailedSalesQuotes = () => {
	const [menuModal, setMenuModal] = useState(false);
	const [isReadOnly, setIsReadOnly] = useState(true);

	return (
		<>
			{/* Sales Quotes Name Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="sales-quotes-name-heading">Sales Quotes Name</h1>
				</div>
				<div className="header-container-buttons">
					<button className="send-email-button">Send Email</button>
					<button className="edit-button" onClick={() => setIsReadOnly(false)}>Edit</button>
					<button className="convert-button">Convert</button>
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
			<div className="overview-container">
				<div className="overview-heading">
					<h1>Overview</h1>
				</div>
				<div className="overview-form">
					<form>
						<div className="form-group salesquotesno">
							<label htmlFor="salesquotesno">Sales Quotes No.</label>
							<input type="text" placeholder="Sales Quotes No." id="salesquotesno" readOnly={isReadOnly} />
						</div>
						<div className="form-group successper">
							<label htmlFor="successper">Success%</label>
							<input type="text" placeholder="Success%" id="successper" readOnly={isReadOnly} />
						</div>
						<div className="form-group status">
							<label htmlFor="status">Status</label>
							{isReadOnly ? (
								<input type="text" placeholder="Status" id="status" readOnly={isReadOnly} />
							) : (
								<select id="status">
									<option value="">Select Status</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							)}
						</div>
						<div className="form-group owner">
							<label htmlFor="owner">Owner</label>
							<input type="text" placeholder="Owner" id="owner" readOnly={isReadOnly} />
						</div>
						<div className="form-group duedate">
							<label htmlFor="duedate">Due Date</label>
							<input type="date" placeholder="Due Date" id="duedate" readOnly={isReadOnly} />
						</div>
					</form>
				</div>
			</div>

			{/* Sales Quote Information Container */}
			<div className="sales-quote-information-container">
				<div className="sales-quote-information-heading">
					<h1>Sales Quote Information</h1>
				</div>
				<div className="sales-quote-information-form">
					<form>
						<div className="form-group salesquoteowner">
							<label htmlFor="salesquoteowner">Sales Quote Owner</label>
							<input type="text" placeholder="Sales Quote Owner" id="salesquoteowner" readOnly={isReadOnly} />
						</div>
						<div className="form-group oppname">
							<label htmlFor="oppname">Opp. Name</label>
							<input type="text" placeholder="Opp. Name" id="oppname" readOnly={isReadOnly} />
						</div>
						<div className="form-group accountname">
							<label htmlFor="accountname">Account Name</label>
							<input type="text" placeholder="Account Name" id="accountname" readOnly={isReadOnly} />
						</div>
						<div className="form-group subject">
							<label htmlFor="subject">Subject</label>
							<input type="text" placeholder="Subject" id="subject" readOnly={isReadOnly} />
						</div>
						<div className="form-group primarycontact">
							<label htmlFor="primarycontact">Primary Contact</label>
							<input type="text" placeholder="Primary Contact" id="primarycontact" readOnly={isReadOnly} />
						</div>
						<div className="form-group amount">
							<label htmlFor="amount">Amount</label>
							<input type="number" placeholder="Amount" id="amount" readOnly={isReadOnly} />
						</div>
						<div className="form-group successrate">
							<label htmlFor="successrate">Success Rate</label>
							<input type="number" placeholder="Success Rate" id="successrate" readOnly={isReadOnly} />
						</div>
						<div className="form-group duedate">
							<label htmlFor="duedate">Due Date</label>
							<input type="date" placeholder="Due Date" id="duedate" readOnly={isReadOnly} />
						</div>
						<div className="form-group status">
							<label htmlFor="status">Status</label>
							{isReadOnly ? (
								<input type="text" placeholder="Status" id="status" readOnly={isReadOnly} />
							) : (
								<select id="status">
									<option value="">Select Status</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							)}
						</div>						
					</form>
				</div>
			</div>

			{/* Address Information Container */}
			<div className="address-information1-container">
				<div className="address-information1-heading">
					<h1>Address Information</h1>
				</div>
				<div className="address-information1-form">
					<form>
						<div className="form-group billingcountry">
							<label htmlFor="billingcountry">Billing Country</label>
							<input type="text" placeholder="Billing Country" id="billingcountry" readOnly={isReadOnly} />
						</div>
						<div className="form-group billingstate">
							<label htmlFor="billingstate">Billing State</label>
							<input type="text" placeholder="Billing State" id="billingstate" readOnly={isReadOnly} />
						</div>
						<div className="form-group billingcity">
							<label htmlFor="billingcity">Billing City</label>
							<input type="text" placeholder="Billing City" id="billingcity" readOnly={isReadOnly} />
						</div>
						<div className="form-group billingstreet">
							<label htmlFor="billingstreet">Billing Street</label>
							<input type="text" placeholder="Billing Street" id="billingstreet" readOnly={isReadOnly} />
						</div>
						<div className="form-group billingcode">
							<label htmlFor="billingcode">Billing Code</label>
							<input type="text" placeholder="Billing Code" id="billingcode" readOnly={isReadOnly} />
						</div>					
						<div className="form-group shippingcountry">
							<label htmlFor="shippingcountry">Shipping Country</label>
							<input type="text" placeholder="Shipping Country" id="shippingcountry" readOnly={isReadOnly} />
						</div>
						<div className="form-group shippingstate">
							<label htmlFor="shippingstate">Shipping State</label>
							<input type="text" placeholder="Shipping State" id="shippingstate" readOnly={isReadOnly} />
						</div>
						<div className="form-group shippingcity">
							<label htmlFor="shippingcity">Shipping City</label>
							<input type="text" placeholder="Shipping City" id="shippingcity" readOnly={isReadOnly} />
						</div>
						<div className="form-group shippingstreet">
							<label htmlFor="shippingstreet">Shipping Street</label>
							<input type="text" placeholder="Shipping Street" id="shippingstreet" readOnly={isReadOnly} />
						</div>
						<div className="form-group shippingcode">
							<label htmlFor="shippingcode">Shipping Code</label>
							<input type="text" placeholder="Shipping Code" id="shippingcode" readOnly={isReadOnly} />
						</div>					
					</form>
				</div>
			</div>

			{/* Product Information Section */}
			<div className="product-information1-container">
				<div className="product-information1-heading">
					<h1>Product Information</h1>
					<button>Add Product<Plus size={15} /></button>
				</div>
				<div className="product-information1-table">
					<div className="table-container">
						<div className="table-column">
							<h1>Sl. No.<ChevronDown size={15} /></h1>
							<p>1</p>
						</div>
						<div className="table-column">
							<h1>Product Name<ChevronDown size={15} /></h1>
							<p>2</p>
						</div>
						<div className="table-column">
							<h1>Quantity<ChevronDown size={15} /></h1>
							<p>3</p>
						</div>
						<div className="table-column">
							<h1>Billing Amount<ChevronDown size={15} /></h1>
							<p>4</p>
						</div>
						<div className="table-column">
							<h1>Discount<ChevronDown size={15} /></h1>
							<p>5</p>
						</div>
						<div className="table-column">
							<h1>Tax<ChevronDown size={15} /></h1>
							<p>6</p>
						</div>
						<div className="table-column">
							<h1>Total Price<ChevronDown size={15} /></h1>
							<p>7</p>
						</div>
					</div>
				</div>
			</div>

			{/* Sales Order Container */}
			<div className="sales-order1-container">
				<div className="sales-order1-heading">
					<h1>Sales Order</h1>
					<button>Assign/New<Plus size={15} /></button>
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

			{/* Notes Container */}
			<div className="notes1-container">
				<div className="notes1-heading">
					<h1>Notes</h1>
				</div>
				<div className="notes1-form">
					<form>
						<div className="form-group notes">
							<label htmlFor="notes">Notes</label>
							<textarea placeholder="Write your note here..." id="description" readOnly={isReadOnly} />
						</div>
					</form>
				</div>
			</div>

			{/* Activities Section */}
			<div className="activity-section1-container">
				<div className="activity-section1-heading">
					<h1>Activities</h1>
					<button>Add Activity<Plus size={15} /></button>
				</div>
				<div className="activity-section1-table">
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

			{/* Email Interactions Section */}
			<div className="email-interactions-container">
				<div className="email-interactions-heading">
					<div className="left">
						<button className="email2-button">Emails</button>
						<button className="draft-button">Drafts</button>
					</div>
					<div className="right">
						<button className="compose-mail-button">Compose Mail<Pencil size={15} /></button>
					</div>
				</div>
			</div>
		</>
	);
}

export default DetailedSalesQuotes;