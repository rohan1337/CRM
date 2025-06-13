import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateNewCall.css";

const CreateNewCall = () => {
	const navigate = useNavigate();

	const handleSave = (type) => {
		if (type === "save") {
			navigate("/activitymanagement/phonecalls");
		} else if (type === "saveAndNew") {
			navigate("/activitymanagement/phonecalls/create");
		}
	}

	return (
		<>
			{/* Create Product Category Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="call-heading">Schedule a Call</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button" onClick={() => navigate("/activitymanagement/phonecalls")}>Cancel</button>
					<button className="save-button" onClick={() => handleSave("save")}>Save</button>
					<button className="save-and-new-button" onClick={() => handleSave("saveAndNew")}>Save and New</button>
				</div>
			</div>

			{/* Phone Calls Container */}
			<div className="calls-container">
				<div className="calls-heading">
					<h1>Call Information</h1>
				</div>
				<div className="calls-form">
					<form>
						<div className="form-group callfor">
							<label htmlFor="callfor">Call For</label>
							<input type="text" placeholder="Call For" id="callfor" />
						</div>
						<div className="form-group relatedto">
							<label htmlFor="relatedto">Related To</label>
							<input type="text" placeholder="Related To" id="relatedto" />
						</div>
						<div className="form-group calltimefrom">
							<label htmlFor="calltimefrom">Call Time (From)</label>
							<input type="text" placeholder="Call Time (From)" id="calltimefrom" />
						</div>
						<div className="form-group calltimeto">
							<label htmlFor="calltimeto">Call Time (To)</label>
							<input type="text" placeholder="Call Time (To)" id="calltimeto" />
						</div>
						<div className="form-group calltype">
							<label htmlFor="calltype">Call Type</label>
							<input type="text" placeholder="Call Type" id="calltype" />
						</div>
						<div className="form-group owner">
							<label htmlFor="owner">Owner</label>
							<input type="text" placeholder="Owner" id="owner" />
						</div>
						<div className="form-group subject">
							<label htmlFor="subject">Subject</label>
							<input type="text" placeholder="Subject" id="subject" />
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
							<input type="text" placeholder="Subject" id="subject1" />
						</div>
						<div className="form-group description1">
							<label htmlFor="description1">Description</label>
							<textarea placeholder="Write description here..." id="description1" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateNewCall;