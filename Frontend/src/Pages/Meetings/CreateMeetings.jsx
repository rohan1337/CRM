import React from "react";
import { useNavigate } from "react-router-dom";
import "./CreateTicket.css";

const CreateMeetings = () => {
  const navigate = useNavigate();

  const handleSave = (type) => {
    if (type === "save") {
      navigate("/activitymanagement/meetings");
    } else if (type === "saveAndNew") {
      navigate("/activitymanagement/meetings/create");
    }
  };

  return (
    <>
      {/* Create Product Category Page Header Section */}
      <div className="header-container">
        <div className="header-title">
          <h1></h1>
        </div>
        <div className="header-buttons">
          <button
            className="cancel-button"
            onClick={() => navigate("/activitymanagement/meetings")}
          >
            Cancel
          </button>
          <button className="save-button" onClick={() => handleSave("save")}>
            Save
          </button>
          <button
            className="save-new-button"
            onClick={() => handleSave("saveAndNew")}
          >
            Save and New
          </button>
        </div>
      </div>

      {/* Product Container */}
      <div className="form-container">
        <div className="form-title">
          <h1>Meeting Information</h1>
        </div>
        <div className="form-content">
          <form>
            <div className="form-group meeting-owner">
              <label htmlFor="Meeting Owner">Meeting Owner</label>
              <input
                type="text"
                placeholder="Meeting Owner"
                id="Meeting Owner"
              />
            </div>
            <div className="form-group location">
              <label htmlFor="Location">Location</label>
              <input type="text" placeholder="Location" id="Location" />
            </div>

            <div className="form-group From">
              <label htmlFor="From">From</label>
              <input type="date" placeholder="From" id="From" />
            </div>
            <div className="form-group To">
              <label htmlFor="To">to</label>
              <input type="date" placeholder="to" id="to" />
            </div>
            <div className="form-group Host">
              <label htmlFor="Host">Host</label>
              <input type="text" placeholder="Location" id="Location" />
            </div>
            <div className="form-group related">
              <label htmlFor="Related">Related To</label>
              <input type="text" placeholder="related" id="related" />
            </div>

            <div className="form-group participants">
              <label htmlFor="participants">Participants</label>
              <textarea placeholder="participants" id="participants" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateMeetings;
