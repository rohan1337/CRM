import React from "react";
import "./CreateNewLead.css";

const CreateNewLead = () => {
	const forms = [
		// Lead Information Elements
		{ classname: "lead-information", key: "lead", elements: [
			{ formtype: "input", label: "Lead ID", type: "text", placeholder: "Lead ID", id: "leadid", submenu: null },
			{ formtype: "input", label: "First Name", type: "text", placeholder: "First Name", id: "firstname", submenu: null },
			{ formtype: "input", label: "Last Name", type: "text", placeholder: "Last Name", id: "lastname", submenu: null },
			{ formtype: "select", label: "Title", type: "", placeholder: "Select Title", id: "title", submenu: [
				{ id: 1, value: "Mr", label: "Mr" },
				{ id: 2, value: "Ms", label: "Ms" },
				{ id: 3, value: "Mrs", label: "Mrs" },
			] },
			{ formtype: "input", label: "Lead Owner", type: "text", placeholder: "Lead Owner", id: "leadowner", submenu: null },
			{ formtype: "input", label: "Company", type: "text", placeholder: "Company", id: "company", submenu: null },
			{ formtype: "input", label: "Date of Birth", type: "date", placeholder: "DD/MM/YYYY", id: "dateofbirth", submenu: null },
			{ formtype: "input", label: "Nationality", type: "text", placeholder: "Nationality", id: "nationality", submenu: null },
			{ formtype: "textarea", label: "Note", type: "", placeholder: "Write your note here...", id: "note", submenu: null },
		] },

		// Contact Information Elements
		{ classname: "contact-information", key: "contact", elements: [
			{ formtype: "input", label: "Email ID", type: "email", placeholder: "e.g. john.doe@example.com", id: "useremail", submenu: null },
			{ formtype: "input", label: "Secondary Email", type: "email", placeholder: "e.g. john.doe123@example.com", id: "secondaryemail", submenu: null },
			{ formtype: "input", label: "Phone No.", type: "tel", placeholder: "e.g. +0 123 456 7890", id: "phoneno", submenu: null },
			{ formtype: "input", label: "Mobile No.", type: "tel", placeholder: "e.g. +0 12345 67890", id: "mobileno", submenu: null },
			{ formtype: "input", label: "Website", type: "url", placeholder: "e.g. https://www.example.com", id: "website", submenu: null },
			{ formtype: "textarea", label: "Address line 1", type: "", placeholder: "Address Line 1", id: "addressline1", submenu: null },
			{ formtype: "textarea", label: "Address line 2", type: "", placeholder: "Address Line 2", id: "addressline2", submenu: null },
			{ formtype: "input", label: "City", type: "text", placeholder: "City", id: "city", submenu: null },
			{ formtype: "input", label: "State", type: "text", placeholder: "State", id: "state", submenu: null },
			{ formtype: "input", label: "Country", type: "text", placeholder: "Country", id: "country", submenu: null },
			{ formtype: "input", label: "ZIP Code", type: "text", placeholder: "ZIP Code", id: "zipcode", submenu: null },
		] },

		// Lead Qualification Elements
		{ classname: "lead-qualification", key: "qualification", elements: [
			{ formtype: "select", label: "Lead Source", type: "", placeholder: "Select Lead Source", id: "leadsource", submenu: [
				{ id: 1, value: "", label: "" },
				{ id: 2, value: "", label: "" },
				{ id: 3, value: "", label: "" },
			] },
			{ formtype: "input", label: "Budget", type: "text", placeholder: "Budget", id: "budget", submenu: null },
			{ formtype: "select", label: "Lead Status", type: "", placeholder: "Select Lead Status", id: "leadstatus", submenu: [
				{ id: 1, value: "", label: "" },
				{ id: 2, value: "", label: "" },
				{ id: 3, value: "", label: "" },
			] },
			{ formtype: "input", label: "Potential Revenue", type: "text", placeholder: "Potential Revenue", id: "potentialrevenue", submenu: null },
			{ formtype: "input", label: "Interest Level", type: "text", placeholder: "Interest Level", id: "interestlevel", submenu: null },
		] },

		// Lead Interaction Details Elements
		{ classname: "lead-interaction-details", key: "interaction", elements: [
			{ formtype: "select", label: "Interaction Type", type: "", placeholder: "Select Interaction Type", id: "interactiontype", submenu: [
				{ id: 1, value: "", label: "" },
				{ id: 2, value: "", label: "" },
				{ id: 3, value: "", label: "" },
			] },
			{ formtype: "input", label: "Interaction Outcome", type: "text", placeholder: "Interaction Outcome", id: "interactionoutcome", submenu: null },
			{ formtype: "input", label: "Interaction Date", type: "date", placeholder: "Interaction Date", id: "interactiondate", submenu: null },
			{ formtype: "textarea", label: "Interaction Note", type: "", placeholder: "Write your interaction note here...", id: "interactionnote", submenu: null },
		] },
	];

    return (
		<>
			{/* Leads Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="lead-heading">New Lead</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button">Cancel</button>
					<button className="save-button">Save</button>
					<button className="save-and-new-button">Save and New</button>
				</div>
			</div>

			{/* Form Container */}
			{forms.map((form) => (
				<div className={`${form.classname}-container`} key={form.key}>
					<div className={`${form.classname}-heading`}>
						<h1>{form.classname.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h1>
					</div>
					<div className={`${form.classname}-form`}>
						<form>
							{form.elements.map((element) => (
								<div className={`form-group ${element.id}`} key={element.id}>
									<label htmlFor={element.id}>{element.label}</label>
									{element.formtype === "input" ? (
										<input type={element.type} placeholder={element.placeholder} id={element.id} />
									) : (element.formtype === "select" ? (
											<select id={element.id}>
												<option value="">{element.placeholder}</option>
												{element.submenu && element.submenu.map((option) => (
													<option key={option.id} value={option.value}>
														{option.label}
													</option>
												))}
											</select>
										) : (
											<textarea placeholder={element.placeholder} id={element.id} />
										)
									)}
								</div>
							))}
						</form>
					</div>
				</div>
			))}
		</>
	);
}

export default CreateNewLead;