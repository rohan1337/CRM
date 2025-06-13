import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateNewCategory.css";

const CreateNewCategory = () => {
	const navigate = useNavigate();

	const handleSave = (type) => {
		if (type === "save") {
			navigate("/products/productcategories");
		} else if (type === "saveAndNew") {
			navigate("/products/productcategories/create");
		}
	}

	return (
		<>
			{/* Create Product Category Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="account-heading">New Product Category</h1>
				</div>
				<div className="header-container-buttons">
					<button className="cancel-button" onClick={() => navigate("/products/products")}>Cancel</button>
					<button className="save-button" onClick={() => handleSave("save")}>Save</button>
					<button className="save-and-new-button" onClick={() => handleSave("saveAndNew")}>Save and New</button>
				</div>
			</div>

			{/* Category Container */}
			<div className="product-category-container">
				<div className="product-category-heading">
					<h1>Product Category Information</h1>
				</div>
				<div className="product-category-form">
					<form>
						<div className="form-group productcategoryid">
							<label htmlFor="productcategoryid">Product Category ID</label>
							<input type="text" placeholder="Product Category ID" id="productcategoryid" />
						</div>
						<div className="form-group productcategoryname">
							<label htmlFor="productcategoryname">Product Category Name</label>
							<input type="text" placeholder="Product Category Name" id="productcategoryname" />
						</div>
						<div className="form-group status">
							<label htmlFor="status">Status</label>
							<input type="text" placeholder="Status" id="status" />
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

export default CreateNewCategory;