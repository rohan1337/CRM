import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateNewProduct.css";

const CreateNewProduct = () => {
	const navigate = useNavigate();

	const handleSave = (type) => {
		if (type === "save") {
			navigate("/products/products");
		} else if (type === "saveAndNew") {
			navigate("/products/products/create");
		}
	}

	return (
		<>
			{/* Create Product Category Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="account-heading">New Product</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button" onClick={() => navigate("/products/products")}>Cancel</button>
					<button className="save-button" onClick={() => handleSave("save")}>Save</button>
					<button className="save-and-new-button" onClick={() => handleSave("saveAndNew")}>Save and New</button>
				</div>
			</div>

			{/* Product Container */}
			<div className="product-container">
				<div className="product-heading">
					<h1>Product Information</h1>
				</div>
				<div className="product-form">
					<form>
						<div className="form-group productid">
							<label htmlFor="productid">Product ID</label>
							<input type="text" placeholder="Product ID" id="productid" />
						</div>
						<div className="form-group productname">
							<label htmlFor="productname">Product Name</label>
							<input type="text" placeholder="Product Name" id="productname" />
						</div>
						<div className="form-group status">
							<label htmlFor="status">Status</label>
							<input type="text" placeholder="Status" id="status" />
						</div>
						<div className="form-group productcategory">
							<label htmlFor="productcategory">Product Category</label>
							<select id="productcategory">
								<option value="">Select Product Category</option>
								<option value=""></option>
								<option value=""></option>
								<option value=""></option>
							</select>
						</div>
						<div className="form-group vendorname">
							<label htmlFor="vendorname">Vendor Name</label>
							<input type="text" placeholder="Vendor Name" id="vendorname" />
						</div>
						<div className="form-group parentcategory">
							<label htmlFor="parentcategory">Parent Category</label>
							<input type="date" placeholder="Parent Category" id="parentcategory" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default CreateNewProduct;