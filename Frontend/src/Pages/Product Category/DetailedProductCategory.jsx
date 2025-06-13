import { useState } from "react";
import "./DetailedProductCategory.css";

const DetailedProductCategory = () => {
	const [menuModal, setMenuModal] = useState(false);
	const [isReadOnly, setIsReadOnly] = useState(true);

	return (
		<>
			{/* Product Name Page Header Section */}
			<div className="header-container">
				<div className="header-container-heading">
					<h1 className="product-heading">Product Category</h1>
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
			<div className="product-category-container">
				<div className="product-category-heading">
					<h1>Product Information</h1>
				</div>
				<div className="product-category-form1">
					<form>
						<div className="form-group productcategoryid1">
							<label htmlFor="productcategoryid1">Product Category ID</label>
							<input type="text" placeholder="Product Category ID" id="productcategoryid1" readOnly={isReadOnly} />
						</div>
						<div className="form-group productcategoryname1">
							<label htmlFor="productcategoryname1">Product Category Name</label>
							<input type="text" placeholder="Product Category Name" id="productcategoryname1" readOnly={isReadOnly} />
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default DetailedProductCategory;