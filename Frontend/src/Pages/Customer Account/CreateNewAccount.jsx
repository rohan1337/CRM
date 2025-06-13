import React from "react";
import "./CreateNewAccount.css";

const CreateNewAccount = () => {
	const forms = [
		// Account Information Elements
		{ classname: "account-information", key: "account", elements: [
			{ formtype: "input", label: "Account ID", type: "text", placeholder: "Account ID", id: "accountid", submenu: null },
			{ formtype: "select", label: "Account Owner", type: "", placeholder: "Select Account Owner", id: "accountowner", submenu: [
				{ id: 1, value: "", label: "" },
				{ id: 2, value: "", label: "" },
				{ id: 3, value: "", label: "" },
			] },
			{ formtype: "select", label: "Industry", type: "", placeholder: "Select Industry", id: "industry", submenu: [
				{ id: 1, value: "", label: "Sales Person" },
				{ id: 2, value: "", label: "Service Person" },
				{ id: 3, value: "", label: "HR" },
			] },
			{ formtype: "input", label: "Website", type: "url", placeholder: "e.g. https://www.example.com", id: "website", submenu: null },
			{ formtype: "select", label: "Parent Account", type: "", placeholder: "Select Parent Account", id: "parentaccount", submenu: [
				{ id: 1, value: "", label: "" },
				{ id: 2, value: "", label: "" },
				{ id: 3, value: "", label: "" },
			] },
			{ formtype: "select", label: "Account Type", type: "", placeholder: "Select Account Type", id: "accounttype", submenu: [
				{ id: 1, value: "", label: "Analyst" },
				{ id: 2, value: "", label: "Competitor" },
				{ id: 3, value: "", label: "Customer" },
				{ id: 3, value: "", label: "Distributor" },
				{ id: 3, value: "", label: "Partner" },
				{ id: 3, value: "", label: "Reseller" },
				{ id: 3, value: "", label: "Supplier" },
				{ id: 3, value: "", label: "Vendor" },
			] },
			{ formtype: "textarea", label: "Note", type: "", placeholder: "Write your note here...", id: "note", submenu: null },
		] },

		// Address Information Elements
		{ classname: "address-information", key: "address", elements: [
			{ formtype: "input", label: "Billing Address Line 1", type: "text", placeholder: "Billing Address Line 1", id: "billingaddressline1", submenu: null },
			{ formtype: "input", label: "Billing Address Line 2", type: "text", placeholder: "Billing Address Line 2", id: "billingaddressline2", submenu: null },
			{ formtype: "input", label: "Billing City", type: "text", placeholder: "Billing City", id: "billingcity", submenu: null },
			{ formtype: "input", label: "Billing State", type: "text", placeholder: "Billing State", id: "billingstate", submenu: null },
			{ formtype: "input", label: "Billing Country", type: "text", placeholder: "Billing Country", id: "billingcountry", submenu: null },
			{ formtype: "input", label: "Billing ZIP Code", type: "text", placeholder: "Billing ZIP Code", id: "billingzipcode", submenu: null },
			{ formtype: "input", label: "Shipping Address Line 1", type: "text", placeholder: "Shipping Address Line 1", id: "shippingaddressline1", submenu: null },
			{ formtype: "input", label: "Shipping Address Line 2", type: "text", placeholder: "Shipping Address Line 2", id: "shippingaddressline2", submenu: null },
			{ formtype: "input", label: "Shipping City", type: "text", placeholder: "Shipping City", id: "shippingcity", submenu: null },
			{ formtype: "input", label: "Shipping State", type: "text", placeholder: "Shipping State", id: "shippingstate", submenu: null },
			{ formtype: "input", label: "Shipping Country", type: "text", placeholder: "Shipping Country", id: "shippingcountry", submenu: null },
			{ formtype: "input", label: "Shipping ZIP Code", type: "text", placeholder: "Shipping ZIP Code", id: "shippingzipcode", submenu: null },
		] },
	];

	const addressInformationElements = [
		{ formtype: "input", label: "Billing Address Line 1", type: "text", placeholder: "Billing Address Line 1", id: "billingaddressline1", submenu: null },
		{ formtype: "input", label: "Billing Address Line 2", type: "text", placeholder: "Billing Address Line 2", id: "billingaddressline2", submenu: null },
		{ formtype: "input", label: "Billing City", type: "text", placeholder: "Billing City", id: "billingcity", submenu: null },
		{ formtype: "input", label: "Billing State", type: "text", placeholder: "Billing State", id: "billingstate", submenu: null },
		{ formtype: "input", label: "Billing Country", type: "text", placeholder: "Billing Country", id: "billingcountry", submenu: null },
		{ formtype: "input", label: "Billing ZIP Code", type: "text", placeholder: "Billing ZIP Code", id: "billingzipcode", submenu: null },
		{ formtype: "input", label: "Shipping Address Line 1", type: "text", placeholder: "Shipping Address Line 1", id: "shippingaddressline1", submenu: null },
		{ formtype: "input", label: "Shipping Address Line 2", type: "text", placeholder: "Shipping Address Line 2", id: "shippingaddressline2", submenu: null },
		{ formtype: "input", label: "Shipping City", type: "text", placeholder: "Shipping City", id: "shippingcity", submenu: null },
		{ formtype: "input", label: "Shipping State", type: "text", placeholder: "Shipping State", id: "shippingstate", submenu: null },
		{ formtype: "input", label: "Shipping Country", type: "text", placeholder: "Shipping Country", id: "shippingcountry", submenu: null },
		{ formtype: "input", label: "Shipping ZIP Code", type: "text", placeholder: "Shipping ZIP Code", id: "shippingzipcode", submenu: null },
	]

	return (
		<>
			{/* Create Account Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="account-heading">New Account</h1>
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

export default CreateNewAccount;