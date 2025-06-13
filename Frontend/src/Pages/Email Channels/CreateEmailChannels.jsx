import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateEmailChannels.css";

const CreateEmailChannels = () => {
	const navigate = useNavigate();
	const [attachmentsVisible, setAttachmentsVisible] = useState(false);

	const handleSave = (type) => {
		if (type === "save") {
			navigate("/activitymanagement/emails");
		} else if (type === "saveAndNew") {
			navigate("/activitymanagement/emails/create");
		}
	};

	const attachmentRows = [
		{
			slNo: 1,
			type: "PDF",
			size: "1 MB",
			sentOn: "2025-03-28",
			owner: "John Doe",
		},
		{
			slNo: 2,
			type: "Image",
			size: "2 MB",
			sentOn: "2025-03-27",
			owner: "Jane Smith",
		},
	];

	const handleAttachments = () => {
		setAttachmentsVisible((prev) => !prev);
	};

	const handleSubmit = () => {
		event.preventDefault();
	};

	return (
		<>
			<div className="header-container">
				<div className="header-title">
					<h1 className="email-heading">Create Email</h1>
				</div>
				<div className="header-buttons">
					<button
						onClick={() => navigate("/activitymanagement/emails")}
						className="cancel-button"
					>
						Cancel
					</button>
					<button
						onClick={() => handleSave("save")}
						className="save-button"
					>
						Save
					</button>
					<button
						onClick={() => handleSave("saveAndNew")}
						className="save-new-button"
					>
						Save and New
					</button>
				</div>
			</div>

			{/* Email Information */}

			<div className="email-information-container">
				<div className="email-information-heading">
					<h1>Email Information</h1>
				</div>
				<div className="email-information-content">
					<form onSubmit={handleSubmit}>
						<div className="email-container">
							<div className="subject-adjustment-container">
								<div className="subject-adjustment-header">
									<button>Subject</button>
									<button onClick={handleAttachments}>
										Attachments
									</button>
								</div>

								{attachmentsVisible && (
									<div className="attachments-container">
										<div className="attachments-table">
											<div className="table-row table-header">
												<div className="table-cell">
													SL No
												</div>
												<div className="table-cell">
													Type
												</div>
												<div className="table-cell">
													Size
												</div>
												<div className="table-cell">
													Sent On
												</div>
												<div className="table-cell">
													Owner
												</div>
											</div>

											{attachmentRows.map(
												(row, index) => (
													<div
														className="table-row"
														key={index}
													>
														<div className="table-cell">
															{row.slNo}
														</div>
														<div className="table-cell">
															{row.type}
														</div>
														<div className="table-cell">
															{row.size}
														</div>
														<div className="table-cell">
															{row.sentOn}
														</div>
														<div className="table-cell">
															{row.owner}
														</div>
													</div>
												)
											)}
										</div>
									</div>
								)}

								<input type="text" className="subject-input" />
							</div>

							<div className="message-container">
								<div className="message-header">
									<button>Message</button>
									<button>Reply</button>
								</div>
								<textarea className="message-textarea"></textarea>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default CreateEmailChannels;
