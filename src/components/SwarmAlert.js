import React, { useState, useEffect } from 'react';
import './SwarmAlert.css';
import { useNavigate } from 'react-router-dom';

const SwarmAlert = () => {
    const navigate = useNavigate(); // Hook to handle navigation
  // State variables for simulated swarm data
  const [swarmRisk, setSwarmRisk] = useState(15); // Start with a 15% risk of swarming
  const [swarmEvents, setSwarmEvents] = useState([
    { id: 1, date: '2024-05-12', strategy: 'Split the hive' },
    { id: 2, date: '2024-07-18', strategy: 'Removed queen cells' },
  ]);
  const [alertMessage, setAlertMessage] = useState('No swarming risk at the moment.');

  // Simulate swarm risk and provide suggestions
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate changing swarm risk based on random factors
      const risk = Math.floor(Math.random() * 100); // Risk from 0 to 100%
      setSwarmRisk(risk);

      // Determine message based on risk
      if (risk > 50) {
        setAlertMessage('High risk of swarming! Take preventive actions.');
      } else if (risk > 20) {
        setAlertMessage('Moderate risk. Monitor the hive closely.');
      } else {
        setAlertMessage('No swarming risk at the moment.');
      }
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="swarm-container">
      {/* Header Section */}
      <header className="header">
        <h1>Swarm Alert and Management</h1>
      </header>

      {/* Main Content */}
      <div className="content">
        {/* Swarm Risk Alert */}
        <div className="swarm-alert">
          <h3>Current Swarm Risk</h3>
          <div className={`swarm-risk ${swarmRisk > 50 ? 'high' : swarmRisk > 20 ? 'moderate' : 'low'}`}>
            <p>{swarmRisk}%</p>
            <p>{alertMessage}</p>
          </div>
        </div>

        {/* Prevention Tips */}
        <div className="prevention-tips">
          <h3>Prevention Tips</h3>
          <ul>
            <li>Ensure proper hive ventilation.</li>
            <li>Provide adequate space for the colony to grow.</li>
            <li>Split the hive if the population grows too large.</li>
            <li>Monitor for queen cells and remove them if needed.</li>
          </ul>
        </div>

        {/* Recent Swarm Events */}
        <div className="swarm-events">
          <h3>Recent Swarm Events</h3>
          <ul>
            {swarmEvents.map((event) => (
              <li key={event.id}>
                <strong>{event.date}:</strong> {event.strategy}
              </li>
            ))}
          </ul>
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

export default SwarmAlert;
