import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import logo from '../assets/images/bee.GIF';
import image1 from '../assets/images/beehivegif.gif'; // Example images for the buttons
import image2 from '../assets/images/camera.png';
import image3 from '../assets/images/Status.png';
import image4 from '../assets/images/alert.png';

const HomePage = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <img src={logo} alt="Beehive Logo" className="logo" />
        <h1 className="app-title">Hive App</h1>
        <img src={logo} alt="Beehive Logo" className="logo" />
      </header>

      {/* Main Content Area */}
      <div className="content">
        <h2></h2>
        <div className="image-buttons">
          {/* Button 1 navigates to the BeehiveDiagnostics page */}
          <button
            className="image-button"
            onClick={() => navigate('/diagnostics')}
          >
            <img src={image1} alt="Button 1" />
          </button>

          {/* Other buttons can have their own functionality */}
          <button
            className="image-button"
            onClick={() => navigate('/activities')}
          >
            <img src={image3} alt="Button 2" />
          </button>

          <button
            className="image-button"
            onClick={() => navigate('/inventory')}
          >
            <img src={image2} alt="Button 3" />
          </button>

          <button
            className="image-button"
            onClick={() => navigate('/swarmalert')}
          >
            <img src={image4} alt="Button 4" />
          </button>

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

export default HomePage;

