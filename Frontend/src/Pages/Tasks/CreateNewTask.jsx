import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateNewTask.css";

const CreateNewTask = () => {
	const navigate = useNavigate();

	const handleSave = (type) => {
		if (type === "save") {
			navigate("/activitymanagement/tasks");
		} else if (type === "saveAndNew") {
			navigate("/activitymanagement/tasks/create");
		}
	}

	return (
		<>
			{/* Create Product Category Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="task-heading">New Task</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button" onClick={() => navigate("/activitymanagement/tasks")}>Cancel</button>
					<button className="save-button" onClick={() => handleSave("save")}>Save</button>
					<button className="save-and-new-button" onClick={() => handleSave("saveAndNew")}>Save and New</button>
				</div>
			</div>

			{/* Tasks Container */}
			<div className="tasks-container">
				<div className="tasks-heading">
					<h1>Task Information</h1>
				</div>
				<div className="tasks-form1">
					<form>
						<div className="form-group taskowner1">
							<label htmlFor="taskowner1">Task Owner</label>
							<input type="text" placeholder="Task Owner" id="taskowner1" />
						</div>
						<div className="form-group oppname1">
							<label htmlFor="oppname1">Opp. Name</label>
							<input type="text" placeholder="Opp. Name" id="oppname1" />
						</div>
						<div className="form-group subject1">
							<label htmlFor="subject1">Subject</label>
							<input type="text" placeholder="Subject" id="subject1" />
						</div>
						<div className="form-group stage1">
							<label htmlFor="stage1">Stage</label>
							<select id="stage1">
								<option value="">Select Stage</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group primarycontact1">
							<label htmlFor="primarycontact1">Primary Contact</label>
							<input type="text" placeholder="Primary Contact" id="primarycontact1" />
						</div>
						<div className="form-group accountname1">
							<label htmlFor="accountname1">Account Name</label>
							<input type="text" placeholder="Account Name" id="accountname1" />
						</div>
						<div className="form-group startdate1">
							<label htmlFor="startdate1">Start Date</label>
							<input type="text" placeholder="Start Date" id="startdate1" />
						</div>
						<div className="form-group leadsource1">
							<label htmlFor="leadsource1">Lead Source</label>
							<select id="leadsource1">
								<option value="">Select Lead Source</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group status1">
							<label htmlFor="status1">Status</label>
							<select id="status1">
								<option value="">Select Status</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
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

export default CreateNewTask;