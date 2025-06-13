import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateNewQuote.css";

const CreateNewQuote = () => {
	const navigate = useNavigate();

	const handleSave = (type) => {
		if (type === "save") {
			navigate("/sales/salesquotes");
		} else if (type === "saveAndNew") {
			navigate("/sales/salesquotes/create");
		}
	}

	const contactData = [];

	return (
		<>
			{/* Create Sales Quotes Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="sales-quotes-heading">New Quote</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button" onClick={() => navigate("/sales/salesquotes")}>Cancel</button>
					<button className="save-button" onClick={() => handleSave("save")}>Save</button>
					<button className="save-and-new-button" onClick={() => handleSave("saveAndNew")}>Save and New</button>
				</div>
			</div>

			{/* Sales Order Information Container */}
			<div className="sales-order-container">
				<div className="sales-order-heading">
					<h1>Sales Order Information</h1>
				</div>
				<div className="sales-order-form">
					<form>
						<div className="form-group quoteowner">
							<label htmlFor="quoteowner">Quote Owner</label>
							<input type="text" placeholder="Quote Owner" id="quoteowner" />
						</div>
						<div className="form-group oppname">
							<label htmlFor="oppname">Opp. Name</label>
							<input type="text" placeholder="Opp. Name" id="oppname" />
						</div>
						<div className="form-group accountname">
							<label htmlFor="accountname">Account Name</label>
							<input type="text" placeholder="Account Name" id="accountname" />
						</div>
						<div className="form-group subject">
							<label htmlFor="subject">Subject</label>
							<input type="text" placeholder="Subject" id="subject" />
						</div>
						<div className="form-group primarycontact">
							<label htmlFor="primarycontact">Primary Contact</label>
							<input type="tel" placeholder="Primary Contact" id="primarycontact" />
						</div>
						<div className="form-group amount">
							<label htmlFor="amount">Amount</label>
							<input type="text" placeholder="Amount" id="amount" />
						</div>
						<div className="form-group successrate">
							<label htmlFor="successrate">Success Rate</label>
							<input type="text" placeholder="Success Rate" id="successrate" />
						</div>
						<div className="form-group duedate">
							<label htmlFor="duedate">Due Date</label>
							<input type="date" placeholder="Due Date" id="duedate" />
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
					</form>
				</div>
			</div>

			{/* Address Information Container */}
			<div className="address-information-container">
				<div className="address-information-heading">
					<h1>Address Information</h1>
				</div>
				<div className="address-information-form">
					<form>
						<div className="form-group billingcountry">
							<label htmlFor="billingcountry">Billing Country</label>
							<input type="text" placeholder="Billing Country" id="billingcountry" />
						</div>
						<div className="form-group billingstate">
							<label htmlFor="billingstate">Billing State</label>
							<input type="text" placeholder="Billing State" id="billingstate" />
						</div>
						<div className="form-group billingcity">
							<label htmlFor="billingcity">Billing City</label>
							<input type="text" placeholder="Billing City" id="billingcity" />
						</div>
						<div className="form-group billingstreet">
							<label htmlFor="billingstreet">Billing Street</label>
							<input type="text" placeholder="Billing Street" id="billingstreet" />
						</div>
						<div className="form-group billingpostalcode">
							<label htmlFor="billingpostalcode">Billing Postal Code</label>
							<input type="text" placeholder="Billing Postal Code" id="billingpostalcode" />
						</div>
						<div className="form-group shippingcountry">
							<label htmlFor="shippingcountry">Shipping Country</label>
							<input type="text" placeholder="Shipping Country" id="shippingcountry" />
						</div>
						<div className="form-group shippingstate">
							<label htmlFor="shippingstate">Shipping State</label>
							<input type="text" placeholder="Shipping State" id="shippingstate" />
						</div>
						<div className="form-group shippingcity">
							<label htmlFor="shippingcity">Shipping City</label>
							<input type="text" placeholder="Shipping City" id="shippingcity" />
						</div>
						<div className="form-group shippingstreet">
							<label htmlFor="shippingstreet">Shipping Street</label>
							<input type="text" placeholder="Shipping Street" id="shippingstreet" />
						</div>
						<div className="form-group shippingpostalcode">
							<label htmlFor="shippingpostalcode">Shipping Postal Code</label>
							<input type="text" placeholder="Shipping Postal Code" id="shippingpostalcode" />
						</div>
					</form>
				</div>
			</div>

			{/* Product Information Container */}
			<div className="product-information-container">
				<div className="product-information-heading">
					<h1>Product Information</h1>
				</div>
				<div className="sales-quotes-table-env-container">
					<div className="sales-quotes-table-container">
						<table className="sales-quotes-table">
							<thead>
								<tr>
									<th>
										Sl. No.{" "}
										<span className="sort-icon">↓</span>
									</th>
									<th>
										Product Name <span className="sort-icon">↓</span>
									</th>
									<th>
										Quantity{" "}
										<span className="sort-icon">↓</span>
									</th>
									<th>
										Billing Amount <span className="sort-icon">↓</span>
									</th>
									<th>
										Discount <span className="sort-icon">↓</span>
									</th>
									<th>
										Tax <span className="sort-icon">↓</span>
									</th>
									<th>
										Total Price <span className="sort-icon">↓</span>
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>2</td>
									<td>3</td>
									<td>4</td>
									<td>5</td>
									<td>6</td>
									<td>7</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{/* Terms and Conditions Container */}
			<div className="terms-and-conditions-container">
				<div className="terms-and-conditions-heading">
					<h1>Terms and Conditions</h1>
				</div>
				<div className="terms-content">
					<section>
						<h2>1. Introduction</h2>
						<p>Welcome to our website. These Terms and Conditions govern your use of our services.</p>
					</section>
					
					<section>
						<h2>2. Acceptance of Terms</h2>
						<p>By accessing or using our website, you agree to comply with and be bound by these Terms and Conditions.</p>
					</section>
					
					<section>
						<h2>3. User Rights</h2>
						<p>We respect your rights and strive to provide a fair and transparent service.</p>
					</section>
					
					<section>
						<h2>4. Limitations of Liability</h2>
						<p>Our liability is limited to the maximum extent permitted by applicable law.</p>
					</section>
				</div>
			</div>

			{/* Description Container */}
			<div className="description-container">
				<div className="description-heading">
					<h1>Description</h1>
				</div>
				<div className="description-form">
					<form>
						<div className="form-group description">
							<textarea placeholder="Add description here..." id="description" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateNewQuote;