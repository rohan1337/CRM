import { useNavigate } from "react-router-dom";
import "./CreateOpportunity.css";

const CreateOpportunity = () => {
	const navigate = useNavigate();

	const handleSave = (type) => {
		if (type === "save") {
			navigate("/sales/opportunities");
		} else if (type === "saveAndNew") {
			navigate("/sales/oppotunities/create");
		}
	}

	return (
		<>
			{/* Create Sales Quotes Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="opportunity-heading">Opportunity Information</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button123" onClick={() => navigate("/sales/opportunities")}>Cancel</button>
					<button className="save-button123" onClick={() => handleSave("save")}>Save</button>
					<button className="save-and-new-button" onClick={() => handleSave("saveAndNew")}>Save and New</button>
				</div>
			</div>

			{/* Lead Information Container */}
			<div className="opportunity-information-container">
				{/* <div className="opportunity-heading">
					<h1>Lead Information</h1>
				</div> */}
				<div className="opportunity-information-form">
					<form>
						<div className="form-group opportunityowner">
							<label htmlFor="opportunityowner">Opportunity Owner</label>
							<input type="text" placeholder="Opportunity Owner" id="opportunityowner" />
						</div>
						<div className="form-group accountname">
							<label htmlFor="accountname">Account Name</label>
							<input type="text" placeholder="Account Name" id="accountname" />
						</div>
						<div className="form-group primarycontact">
							<label htmlFor="primarycontact">Primary Contact</label>
							<input type="tel" placeholder="e.g. +12345 67890" id="primarycontact" />
						</div>
						<div className="form-group startdate">
							<label htmlFor="startdate">Start Date</label>
							<input type="text" placeholder="Start Date" id="startdate" />
						</div>
						<div className="form-group enddate">
							<label htmlFor="enddate">End Date</label>
							<input type="text" placeholder="End Date" id="enddate" />
						</div>
						<div className="form-group opportunityname">
							<label htmlFor="opportunityname">Opportunity Name</label>
							<input type="text" placeholder="Opportunity Name" id="opportunityname" />
						</div>
						<div className="form-group stage">
							<label htmlFor="stage">Stage</label>
							<select id="stage">
								<option value="">Select Stage</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group amount">
							<label htmlFor="amount">Amount</label>
							<input type="text" placeholder="Amount" id="amount" />
						</div>
						<div className="form-group status">
							<label htmlFor="status">Status</label>
							<select id="status">
								<option value="">Select Status</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group leadsource">
							<label htmlFor="leadsource">Lead Source</label>
							<select id="leadsource">
								<option value="">Select Lead Source</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group probability">
							<label htmlFor="probability">Probability</label>
							<input type="date" placeholder="Probability" id="probability" />
						</div>
						<div className="form-group type">
							<label htmlFor="type">Type</label>
							<select id="type">
								<option value="">Select Type</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
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
}

export default CreateOpportunity;