import React from 'react';
import './InventoryManagement.css';
import { useNavigate } from 'react-router-dom';
import beehivepic from '../assets/images/BeeHiveLive 1.png';
import beehivepic1 from '../assets/images/BeeHiveLive2.png';

const InventoryManagement = () => {
  const navigate = useNavigate();

  return (
    <div className="live-camera-container">
      {/* Header Section */}
      <header className="header">
        <h1>Live Camera System</h1>
      </header>

      {/* Main Content */}
      <div className="camera-grid">
        <div className="camera-item">
          <h3>Beehive Camera 1</h3>
          <div className="camera-feed">
            <img src={beehivepic} alt="Beehive 1" className="camera-image" />
          </div>
        </div>
        <div className="camera-item">
          <h3>Beehive Camera 2</h3>
          <div className="camera-feed">
            <img src={beehivepic1} alt="Beehive 2" className="camera-image" />
          </div>
        </div>
        <div className="camera-item">
          <h3>Beehive Camera 3</h3>
          <div className="camera-feed">
            <img src={beehivepic} alt="Beehive 3" className="camera-image" />
          </div>
        </div>
        <div className="camera-item">
          <h3>Beehive Camera 4</h3>
          <div className="camera-feed">
            <img src={beehivepic1} alt="Beehive 4" className="camera-image" />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <nav className="bottom-navbar">
        <button className="nav-button" onClick={() => navigate('/home')}>
          <span role="img" aria-label="Home">🏠</span>
          <span className="button-label">Home</span>
        </button>
        <button className="nav-button" onClick={() => navigate('/Settings')}>
          <span role="img" aria-label="Settings">⚙️</span>
          <span className="button-label">Settings</span>
        </button>
        <button className="nav-button" onClick={() => navigate('/')}>
          <span role="img" aria-label="Logout">🚪</span>
          <span className="button-label">Log Out</span>
        </button>
      </nav>
    </div>
  );
};

export default InventoryManagement;
