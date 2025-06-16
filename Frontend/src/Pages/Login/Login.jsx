import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Make sure your styles are moved to this file
import gal_logo1 from "../../assets/gal_logo1.png"; // Adjust the path as necessary
import image from "../../assets/image.png";

const Login = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [formData, setFormData] = useState({
		username: "",
		password: "",
		rememberMe: false,
	});
	const navigate = useNavigate();

	const togglePassword = () => {
		setPasswordVisible(!passwordVisible);
	};

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

	const handleGoogleLogin = () => {
		console.log("Google login clicked");
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
					<h2 className="form-title">Login</h2>
					<form onSubmit={handleSubmit}>
						{/* Username Input */}
						<div className="form-group1">
							<div className="input-container">
								<svg
									className="input-icon icon"
									viewBox="0 0 24 24"
								>
									<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
								</svg>
								<input
									type="text"
									id="username"
									className="form-input"
									placeholder="Your User name"
									value={formData.username}
									onChange={handleChange}
								/>
							</div>
						</div>

						{/* Password Input */}
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
									placeholder="Your password"
									value={formData.password}
									onChange={handleChange}
								/>
								<button
									type="button"
									className="password-toggle"
									onClick={togglePassword}
								>
									<svg
										id="eyeIcon"
										className="icon"
										viewBox="0 0 24 24"
									>
										<path
											d={
												passwordVisible
													? "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94L6.06 6.06 4.94 4.94 19.06 19.06 17.94 17.94zM12 14c.78 0 1.42-.67 1.42-1.5S12.78 11 12 11s-1.42.67-1.42 1.5S11.22 14 12 14z"
													: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
											}
										/>
									</svg>
								</button>
							</div>
						</div>

						{/* Remember Me & Forgot Password */}
						<div className="form-row1">
							<label className="checkbox-container">
								<input
									type="checkbox"
									id="rememberMe"
									className="checkbox"
									checked={formData.rememberMe}
									onChange={handleChange}
								/>
								<span className="checkbox-label">
									Remember me
								</span>
							</label>
							<a
								className="forgot-link"
								onClick={() => navigate("/reset")}
							>
								<i>Forgot Password?</i>
							</a>
						</div>

						{/* Login Button */}
						<button type="submit" className="login-btn">
							Log In
						</button>

						{/* Divider */}
						<div className="divider">
							<span className="divider-text">or</span>
						</div>

						{/* Google Login */}
						<button
							type="button"
							className="google-btn"
							onClick={handleGoogleLogin}
						>
							<svg className="google-icon" viewBox="0 0 24 24">
								<path
									fill="#4285F4"
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								/>
								<path
									fill="#34A853"
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								/>
								<path
									fill="#FBBC05"
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
								/>
								<path
									fill="#EA4335"
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								/>
							</svg>
							Continue with Google
						</button>

						{/* Sign Up */}
						<p className="signup-text">
							Haven't registered yet?{" "}
							<a
								className="signup-link"
								onClick={() => navigate("/signup")}
							>
								Sign Up
							</a>
						</p>
					</form>
				</div>

				{/* Right Panel (Illustration & Info) */}
				<div className="right-panel1">
					<div className="right-panel-content">
						<h2 className="content-header">
							<i>Login</i>
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

export default Login;
