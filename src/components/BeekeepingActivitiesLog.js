import React, { useState, useEffect } from 'react';
import './BeekeepingActivitiesLog.css';
import { useNavigate } from 'react-router-dom';

const BeekeepingActivitiesLog = () => {
    const navigate = useNavigate();
  // Define some random activities for demonstration
  const activities = [
    { id: 1, activity: 'Inspection on Hive', description: 'Checked the hive for diseases or queen health.', date: '04/12/2024' },
    { id: 2, activity: 'Feed Bees', description: 'Provided additional food .', date: '04/12/2024' },
    { id: 3, activity: 'Harvest Honey Inspection', description: 'Extract honey from hive 3.', date: '04/12/2024' },
    { id: 4, activity: 'Checked Bee Population', description: 'The bee population is healthy and growing.', date: '04/12/2024' },
    { id: 5, activity: 'Insured Queen Bee is Present', description: 'Checked for signs of Queen activity.', date: '04/12/2024' },
    { id: 6, activity: 'Inspection Hive Box', description: 'Hive box is free from cracks and pests.', date: '04/12/2024' },
  ];

  // State for random activity selection
  const [randomActivity, setRandomActivity] = useState(null);
  const [activityLog, setActivityLog] = useState([]);

  // Function to pick a random activity every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * activities.length);
      setRandomActivity(activities[randomIndex]);
    }, 5000); // Pick a random activity every 5 seconds

    // Initialize the activity log
    setActivityLog(activities);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="activities-container">
      {/* Header Section */}
      <header className="header">
        <h1>Beekeeping Activities Log</h1>
      </header>

      {/* Main Content */}
      <div className="content">
        <div className="random-activity">
          <h2>Important Activity</h2>
          {randomActivity ? (
            <div className="activity-item">
              <h3>{randomActivity.activity}</h3>
              <p>{randomActivity.description}</p>
              <p><strong>Date:</strong> {randomActivity.date}</p>
            </div>
          ) : (
            <p>Loading activity...</p>
          )}
        </div>

        <div className="log-container">
          <h2>Activity Log</h2>
          <div className="status-container">
            {activityLog.map((activity) => (
              <div key={activity.id} className="status-item">
                <h3>{activity.activity}</h3>
                <p>{activity.description}</p>
                <p><strong>Date:</strong> {activity.date}</p>
              </div>
            ))}
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

export default BeekeepingActivitiesLog;
