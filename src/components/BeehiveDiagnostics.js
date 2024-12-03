import React, { useState, useEffect } from 'react';
import './BeehiveDiagnostics.css';
import beehiveGif from '../assets/images/bee.GIF';
import { useNavigate } from 'react-router-dom';

const BeehiveDiagnostics = () => {
  const navigate = useNavigate();

  // State variables for dynamic values
  const [beeCount, setBeeCount] = useState(22328); // Start with 20,000 bees
  const [honeyCount, setHoneyCount] = useState(5); // Start with 1 kg of honey
  const [integrity, setIntegrity] = useState(84); // Hive integrity starts at 84%
  const [temperature, setTemperature] = useState(34.0); // Start with 34°C (ideal for bees)

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Bee count fluctuates up or down by up to 500 but stays above 15,000
      setBeeCount((prev) =>
        Math.max(15000, prev + Math.floor(Math.random() * 1000 - 500))
      );

      // Honey count increases over time without a cap
      setHoneyCount((prev) =>
        Math.max(0, parseFloat((prev + Math.random() * 0.5).toFixed(1)))
      );

      // Hive integrity fluctuates slightly, minimum 50%
      setIntegrity((prev) =>
        Math.max(50, Math.min(100, prev + Math.floor(Math.random() * 3 - 1)))
      );

      // Temperature fluctuates slightly, range between 32°C and 37°C
      setTemperature((prev) =>
        Math.max(32, Math.min(37, parseFloat((prev + (Math.random() * 0.4 - 0.2)).toFixed(1))))
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="diagnostics-container">
      {/* Header Section */}
      <header className="header">
        <h1>Beehive Diagnostics</h1>
      </header>

      {/* Main Content */}
      <div className="content">
        <img src={beehiveGif} alt="Beehive Animation" className="beehive-gif" />

        <div className="status-container">
          <div className="status-item">
            <h3>Bee Count:</h3>
            <p>{beeCount.toLocaleString()} bees</p>
          </div>
          <div className="status-item">
            <h3>Honey Count:</h3>
            <p>{honeyCount.toFixed(1)} kg</p>
          </div>
          <div className="status-item">
            <h3>Hive Integrity:</h3>
            <p>{integrity}%</p>
          </div>
          <div className="status-item">
            <h3>Temperature:</h3>
            <p>{temperature.toFixed(1)}°C</p> {/* Displays temperature in °C */}
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

export default BeehiveDiagnostics;
