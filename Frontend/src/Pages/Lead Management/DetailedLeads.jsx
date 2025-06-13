import { useState } from "react";
import { Paperclip, ChevronDown, Plus } from "lucide-react";
import "./DetailedLeads.css";

const DetailedLeads = () => {
	const [ formData, setFormData ] = useState({

	});

	return (
		<>
			{/* Create Contact Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="account-heading">Lead Name</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button">Cancel</button>
					<button className="save-button">Save</button>
					<button className="save-and-new-button">Save and New</button>
				</div>
			</div>

			{/* Lead Information Container */}
			<div className="lead-information-container">
				<div className="lead-information-heading">
					<h1>Lead Information</h1>
				</div>
				<div className="lead-information-form1">
					<form>
						<div className="form-group leadids1">
							<label htmlFor="leadids1">Lead ID</label>
							<input type="text" placeholder="Lead ID" id="leadids1" />
						</div>
						<div className="form-group firstnames1">
							<label htmlFor="firstnames1">First Name</label>
							<input type="text" placeholder="First Name" id="firstnames1" />
						</div>
						<div className="form-group lastnames1">
							<label htmlFor="lastnames1">Last Name</label>
							<input type="text" placeholder="Last Name" id="lastnames1" />
						</div>
						<div className="form-group titles1">
							<label htmlFor="titles1">Title</label>
							<select id="titles1">
								<option value="">Select Title</option>
								<option value="Mr">Mr</option>
								<option value="Ms">Ms</option>
								<option value="Mrs">Mrs</option>
							</select>
						</div>
						<div className="form-group leadowners1">
							<label htmlFor="leadowners1">Lead Owner</label>
							<select id="leadowners1">
								<option value="">Select Lead Owner</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group companies1">
							<label htmlFor="companies1">Company</label>
							<input type="text" placeholder="Company" id="companies1" />
						</div>
						<div className="form-group dateofbirth1">
							<label htmlFor="dateofbirth1">Date of Birth</label>
							<input type="date" placeholder="DD/MM/YYYY" id="dateofbirth1" />
						</div>
						<div className="form-group nationality1">
							<label htmlFor="nationality1">Nationality</label>
							<input type="text" placeholder="Nationality" id="nationality1" />
						</div>
						<div className="form-group notes1">
							<label htmlFor="notes1">Note</label>
							<textarea placeholder="Write your note here..." id="notes1" />
						</div>
					</form>
				</div>
			</div>

			{/* Contact Information Container */}
			<div className="contact-information-container">
				<div className="contact-information-heading">
					<h1>Contact Information</h1>
				</div>
				<div className="contact-information-form">
					<form>
						<div className="form-group emailids2">
							<label htmlFor="emailids2">Email ID</label>
							<input type="email" placeholder="e.g. john.doe@example.com" id="emailids2" />
						</div>
						<div className="form-group secondaryemails2">
							<label htmlFor="secondaryemails2">Secondary Email</label>
							<input type="email" placeholder="e.g. jogn.doe123@example.com" id="secondaryemails2" />
						</div>
						<div className="form-group phonenos2">
							<label htmlFor="phonenos2">Phone No.</label>
							<input type="tel" placeholder="e.g. +0 12345 67890" id="phonenos2" />
						</div>
						<div className="form-group mobilenos2">
							<label htmlFor="mobilenos2">Mobile No.</label>
							<input type="tel" placeholder="Billing State" id="mobilenos2" />
						</div>
						<div className="form-group websites2">
							<label htmlFor="websites2">Website</label>
							<input type="url" placeholder="e.g. http://www.example.com" id="websites2" />
						</div>
						<div className="form-group addresslines12">
							<label htmlFor="addresslines12">Address Line 1</label>
							<input type="text" placeholder="Address Line 1" id="addresslines12" />
						</div>
						<div className="form-group addresslines22">
							<label htmlFor="addresslines22">Address Line 2</label>
							<input type="text" placeholder="Address Line 2" id="addresslines22" />
						</div>
						<div className="form-group cities2">
							<label htmlFor="cities2">City</label>
							<input type="text" placeholder="City" id="cities2" />
						</div>
						<div className="form-group states2">
							<label htmlFor="states2">State</label>
							<input type="text" placeholder="State" id="states2" />
						</div>
						<div className="form-group countries2">
							<label htmlFor="countries2">Country</label>
							<input type="text" placeholder="Country" id="countries2" />
						</div>
						<div className="form-group zipcodes2">
							<label htmlFor="zipcodes2">ZIP Code</label>
							<input type="text" placeholder="ZIP Code" id="zipcodes2" />
						</div>
					</form>
				</div>
			</div>

			{/* Lead Qualification Container */}
			<div className="lead-qualification-container">
				<div className="lead-qualification-heading">
					<h1>Lead Qualification</h1>
				</div>
				<div className="lead-qualification-form">
					<form>
						<div className="form-group leadsources1">
							<label htmlFor="leadsources1">Lead Source</label>
							<select id="leadsources1">
								<option value="">Select Lead Source</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group leadstatuses1">
							<label htmlFor="leadstatuses1">Lead Status</label>
							<select id="leadstatuses1">
								<option value="">Select Lead Status</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group interestlevels1">
							<label htmlFor="interestlevels1">Interest Level</label>
							<input type="text" placeholder="Interest Level" id="interestlevels1" />
						</div>
						<div className="form-group budgets1">
							<label htmlFor="budgets1">Budget</label>
							<input type="text" placeholder="Budget" id="budgets1" />
						</div>
						<div className="form-group potentialrevenues1">
							<label htmlFor="potentialrevenues1">Potential Revenue</label>
							<input type="text" placeholder="Potential Revenue" id="potentialrevenues1" />
						</div>
					</form>
				</div>
			</div>

			{/* Lead Interaction Container */}
			<div className="lead-interaction-container">
				<div className="lead-interaction-heading">
					<h1>Lead Interaction</h1>
				</div>
				<div className="lead-interaction-form">
					<form>
						<div className="form-group interactiontypes1">
							<label htmlFor="interactiontypes1">Interaction Type</label>
							<select id="interactiontypes1">
								<option value="">Select Interaction Type</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group interactiondates1">
							<label htmlFor="interactiondates1">Interaction Date</label>
							<input type="date" placeholder="Interaction Date" id="interactiondates1" />
						</div>
						<div className="form-group interactionoutcomes1">
							<label htmlFor="interactionoutcomes1">Interaction Outcome</label>
							<input type="text" placeholder="Interaction Outcome" id="interactionoutcomes1" />
						</div>
						<div className="form-group notes4">
							<label htmlFor="notes4">Note</label>
							<textarea placeholder="Write your note here..." id="notes4" />
						</div>
					</form>
				</div>
			</div>

			{/* Attachments Section */}
			<div className="attachment-section-container">
				<div className="attachment-section-heading">
					<h1>Attachments</h1>
					<button>Attach<Paperclip size={15} /></button>
				</div>
				<div className="attachment-section-table">
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

			{/* Products Section */}
			<div className="product-section-container">
				<div className="product-section-heading">
					<h1>Products</h1>
					<button>Add Product<Plus size={15} /></button>
				</div>
				<div className="product-section-table">
					<div className="table-container">
						<div className="table-column">
							<h1>Product Name<ChevronDown size={15} /></h1>
							<p>1</p>
						</div>
						<div className="table-column">
							<h1>Product Code<ChevronDown size={15} /></h1>
							<p>2</p>
						</div>
						<div className="table-column">
							<h1>Vendor Name<ChevronDown size={15} /></h1>
							<p>3</p>
						</div>
						<div className="table-column">
							<h1>Unit Price<ChevronDown size={15} /></h1>
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

export default DetailedLeads;