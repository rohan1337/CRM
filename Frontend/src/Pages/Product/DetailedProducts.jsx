import { useState } from "react";
import "./DetailedProducts.css";

const DetailedProducts = () => {
	const [menuModal, setMenuModal] = useState(false);
	const [isReadOnly, setIsReadOnly] = useState(true);

	return (
		<>
			{/* Product Name Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="product-heading">Product Name</h1>
				</div>
				<div className="header-container-buttons">
					<button className="edit-button" onClick={() => setIsReadOnly(false)}>Edit</button>
					<button className="save-button">Save</button>
					<div className="more-options-container">
						<button className="more-options-button" onClick={() => setMenuModal(prevState => !prevState)}>⁞</button>
						{/* Menu Modal */}
						{menuModal && (
							<div className="menu-modal-container">
								<div className="menu-modal">
									<ul className="menu-modal-list">
										<li>Clone</li>
										<li>Delete</li>
										<li>Find and Merge Duplicates</li>
									</ul>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Product Information Container */}
			<div className="product-information-container">
				<div className="product-information-heading">
					<h1>Product Information</h1>
				</div>
				<div className="product-information-form">
					<form>
						<div className="form-group productid">
							<label htmlFor="productid">Product ID</label>
							<input type="text" placeholder="Product ID" id="productid" readOnly={isReadOnly} />
						</div>
						<div className="form-group productname">
							<label htmlFor="productname">Product Name</label>
							<input type="text" placeholder="Product Name" id="productname" readOnly={isReadOnly} />
						</div>
						<div className="form-group status">
							<label htmlFor="status">Status</label>
							<input type="text" placeholder="Status" id="status" readOnly={isReadOnly} />
						</div>
						<div className="form-group productcategory">
							<label htmlFor="productcategory">Product Category</label>
							{isReadOnly ? (
								<input type="text" placeholder="Product Category" id="productcategory" readOnly={isReadOnly} />
							) : (
								<select id="productcategory">
									<option value="">Select Product Category</option>
									<option value=""></option>
									<option value=""></option>
									<option value=""></option>
								</select>
							)}
						</div>
						<div className="form-group vendorname">
							<label htmlFor="vendorname">Vendor Name</label>
							<input type="text" placeholder="Vendor Name" id="vendorname" readOnly={isReadOnly} />
						</div>
						<div className="form-group parentcategory">
							<label htmlFor="parentcategory">Parent Category</label>
							<input type="text" placeholder="Parent Category" id="parentcategory" readOnly={isReadOnly} />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default DetailedProducts;