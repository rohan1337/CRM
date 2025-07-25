import { useState } from "react";
import { Paperclip, ChevronDown, Plus } from "lucide-react";
import "./DetailedCustomerAccount.css";

const DetailedCustomerAccount = () => {
	const [ formData, setFormData ] = useState({

	});

	return (
		<>
			{/* Create Contact Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="account-heading">New Contact</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button">Cancel</button>
					<button className="save-button">Save</button>
					<button className="save-and-new-button">Save and New</button>
				</div>
			</div>

			{/* Account Information Container */}
			<div className="account-information-container">
				<div className="account-information-heading">
					<h1>Account Information</h1>
				</div>
				<div className="account-information-form1">
					<form>
						<div className="form-group accountids1">
							<label htmlFor="accountids1">Account ID</label>
							<input type="text" placeholder="Account ID" id="accountids1" />
						</div>
						<div className="form-group accountnames1">
							<label htmlFor="accountnames1">Account Name</label>
							<input type="text" placeholder="Account Name" id="accountnames1" />
						</div>
						<div className="form-group websites1">
							<label htmlFor="websites1">Website</label>
							<input type="text" placeholder="Website" id="websites1" />
						</div>
						<div className="form-group accounttypess1">
							<label htmlFor="accounttypes1">Account Type</label>
							<select id="accounttypes1">
								<option value="">Select Account</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group accountowners1">
							<label htmlFor="accountowners1">Account Owner</label>
							<select id="accountowners1">
								<option value="">Select Account Owner</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group industries1">
							<label htmlFor="industries1">Industry</label>
							<select id="industries1">
								<option value="">Select Industry</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group parentaccounts1">
							<label htmlFor="parentaccounts1">Parent Account</label>
							<select id="parentaccounts1">
								<option value="">Parent Account</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group notes2">
							<label htmlFor="notes2">Note</label>
							<textarea placeholder="Write your note here..." id="notes2" />
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
						<div className="form-group billingaddressline1">
							<label htmlFor="billingaddressline1">Billing Address Line 1</label>
							<input type="text" placeholder="Billing Address Line 1" id="billingaddressline1" />
						</div>
						<div className="form-group billingaddressline2">
							<label htmlFor="billingaddressline2">Billing Address Line 2</label>
							<input type="text" placeholder="Billing Address Line 2" id="billingaddressline2" />
						</div>
						<div className="form-group billingcity">
							<label htmlFor="billingcity">Billing City</label>
							<input type="text" placeholder="Billing City" id="billingcity" />
						</div>
						<div className="form-group billingstate">
							<label htmlFor="billingstate">Billing State</label>
							<input type="text" placeholder="Billing State" id="billingstate" />
						</div>
						<div className="form-group billingcountry">
							<label htmlFor="billingcountry">Billing Country</label>
							<input type="text" placeholder="Billing Country" id="billingcountry" />
						</div>
						<div className="form-group billingzipcode">
							<label htmlFor="billingzipcode">Billing ZIP Code</label>
							<input type="text" placeholder="Billing ZIP Code" id="billingzipcode" />
						</div>
						<div className="form-group shippingaddressline1">
							<label htmlFor="shippingaddressline1">Shipping Address Line 1</label>
							<input type="text" placeholder="Shipping Address Line 1" id="shippingaddressline1" />
						</div>
						<div className="form-group shippingaddressline2">
							<label htmlFor="shippingaddressline2">Shipping Address Line 2</label>
							<input type="text" placeholder="Shipping Address Line 2" id="shippingaddressline2" />
						</div>
						<div className="form-group shippingcity">
							<label htmlFor="shippingcity">Shipping City</label>
							<input type="text" placeholder="Shipping City" id="shippingcity" />
						</div>
						<div className="form-group shippingstate">
							<label htmlFor="shippingstate">Shipping State</label>
							<input type="text" placeholder="Shipping State" id="shippingstate" />
						</div>
						<div className="form-group shippingcountry">
							<label htmlFor="shippingcountry">Shipping Country</label>
							<input type="text" placeholder="Shipping Country" id="shippingcountry" />
						</div>
						<div className="form-group shippingzipcode">
							<label htmlFor="shippingzipcode">Shipping ZIP Code</label>
							<input type="text" placeholder="Shipping ZIP Code" id="shippingzipcode" />
						</div>
					</form>
				</div>
			</div>

			{/* Sales Order Information Container */}
			<div className="sales-order-information-container">
				<div className="sales-order-information-heading">
					<h1>Sales Order Information</h1>
				</div>
				<div className="sales-order-information-form">
					<form>
						<div className="form-group salesorderowner">
							<label htmlFor="salesorderowner">Sales Order Owner</label>
							<select id="salesorderowner">
								<option value="">Select Sales Order Owner</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group salesorderstatus">
							<label htmlFor="salesorderstatus">Sales Order Status</label>
							<select id="salesorderstatus">
								<option value="">Select Sales Order Status</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group purchaseorder">
							<label htmlFor="purchaseorder">Purchase Order</label>
							<input type="text" placeholder="Purchase Order" id="purchaseorder" />
						</div>
						<div className="form-group interactionnote">
							<label htmlFor="interactionnote">Interaction Note</label>
							<textarea placeholder="Write your interaction note here..." id="interaction note" />
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

export default DetailedCustomerAccount;