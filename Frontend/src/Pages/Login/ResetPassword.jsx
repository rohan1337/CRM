import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css"; // Make sure your styles are moved to this file
import gal_logo1 from "../../assets/gal_logo1.png"; // Adjust the path as necessary
import image from "../../assets/image.png";

const ResetPassword = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { id, value, checked, type } = e.target;
		setFormData({
			...formData,
			[id]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Login attempt:", formData);
	};

	return (
		<div className="main-container">
			<div className="login-card">
				{/* Left Panel */}
				<div className="left-panel1">
					{/* Logo */}
					<div className="logo">
						<img
							src={gal_logo1}
							alt="Logo"
							className="logo-image"
						/>
					</div>

					{/* Login Form */}
					<h2 className="form-title"><i>Reset Your Password</i></h2>
					<form onSubmit={handleSubmit}>
						{/* New Password */}
						<div className="form-group1">
							<div className="input-container">
								<svg
									className="input-icon icon"
									viewBox="0 0 24 24"
								>
									<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
								</svg>
								<input
									type={passwordVisible ? "text" : "password"}
									id="password"
									className="form-input"
									placeholder="New Password"
									value={formData.password}
									onChange={handleChange}
								/>
							</div>
						</div>

						{/* Confirm Password */}
						<div className="form-group1">
							<div className="input-container">
								<svg
									className="input-icon icon"
									viewBox="0 0 24 24"
								>
									<path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
								</svg>
								<input
									type={passwordVisible ? "text" : "password"}
									id="password"
									className="form-input"
									placeholder="Confirm Your Password"
									value={formData.password}
									onChange={handleChange}
								/>
							</div>
						</div>

						{/* Remember Me & Forgot Password */}
						<div className="form-row3">
							<a className="forgot-link" onClick={() => navigate("/login")}>
								<i>Go Back to Login</i>
							</a>
						</div>

						{/* Set New Password Button */}
						<button type="submit" className="login-btn">
							Set New Password
						</button>
					</form>
				</div>

				{/* Right Panel (Illustration & Info) */}
				<div className="right-panel1">
					<div className="right-panel-content">
						<h2 className="content-header">
							<i>Just one more step!</i>
						</h2>
						<p className="content-text">
							<i>
								Lorem ipsum dolor, sit amet consectetur
								adipisicing elit. Repellat omnis dicta ad vel
								odit at sed fugiat, labore eius ex.
							</i>
						</p>
					</div>
					<img src={image} alt="deco-image" className="deco-image" />
				</div>
			</div>

			{/* Footer (optional: separate component) */}
			<footer className="footer">
				{/* Footer content copied from HTML version */}
			</footer>
		</div>
	);
};

export default ResetPassword;
