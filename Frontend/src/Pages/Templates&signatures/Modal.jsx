// src/components/Modal.jsx
import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, onNext, selectedModule, setSelectedModule }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Create New Template</h2>

        <div className="modal-form">
          <label >Select Module:</label>
          <select value={selectedModule} onChange={(e) => setSelectedModule(e.target.value)}>
            <option value="Leads">Leads</option>
            <option value="Contacts">Contacts</option>
            <option value="Deals">Deals</option>
          </select>
        </div>

        <div className="modal-buttons">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="next-btn" onClick={onNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
