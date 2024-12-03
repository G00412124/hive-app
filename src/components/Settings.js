import React, { useState } from 'react';
import './Settings.css';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate(); // Hook to handle navigation
  // State variables for settings
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  const [showPremiumForm, setShowPremiumForm] = useState(false);

  // Simulated account details
  const accountDetails = {
    username: 'BeeKeeper123',
    email: 'beekeeper123@example.com',
    membershipType: 'Basic',  // Default membership type
    joinDate: '2022-06-15',
  };

  // Card details state
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  // Handle card input changes
  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  // Handle form submission (simulating premium upgrade)
  const handlePremiumSubmit = (e) => {
    e.preventDefault();
    alert('Premium Membership Purchased!');
    // After purchase, you can update the accountDetails state or perform any actions
    setShowPremiumForm(false);  // Hide the form after submission
  };

  return (
    <div className="settings-container">
      {/* Header Section */}
      <header className="header">
        <h1>Settings</h1>
      </header>

      {/* Main Content */}
      <div className="content">
        {/* Notifications Setting */}
        <div className="setting-item">
          <h3>Notifications</h3>
          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="slider round"></span>
          </label>
          <p>{notifications ? 'Notifications are ON' : 'Notifications are OFF'}</p>
        </div>

        {/* Sound Setting */}
        <div className="setting-item">
          <h3>Sound</h3>
          <label className="switch">
            <input
              type="checkbox"
              checked={sound}
              onChange={() => setSound(!sound)}
            />
            <span className="slider round"></span>
          </label>
          <p>{sound ? 'Sound is ON' : 'Sound is OFF'}</p>
        </div>

        {/* Account Details Section */}
        <div className="setting-item">
          <h3>Account Details</h3>
          <button onClick={() => setShowDetails(!showDetails)} className="show-details-btn">
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
          {showDetails && (
            <div className="account-details">
              <p><strong>Username:</strong> {accountDetails.username}</p>
              <p><strong>Email:</strong> {accountDetails.email}</p>
              <p><strong>Membership Type:</strong> {accountDetails.membershipType}</p>
              <p><strong>Join Date:</strong> {accountDetails.joinDate}</p>
            </div>
          )}
        </div>

        {/* Buy Premium Section */}
        <div className="setting-item">
          <h3>Buy Premium</h3>
          <button onClick={() => setShowPremiumForm(!showPremiumForm)} className="buy-premium-btn">
            {showPremiumForm ? 'Cancel' : 'Buy Premium'}
          </button>
          {showPremiumForm && (
            <form className="premium-form" onSubmit={handlePremiumSubmit}>
              <div className="input-field">
                <label htmlFor="cardNumber">Card Number:</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleCardChange}
                  placeholder="1234 5678 9876 5432"
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="expirationDate">Expiration Date:</label>
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  value={cardDetails.expirationDate}
                  onChange={handleCardChange}
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="cvv">CVV:</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleCardChange}
                  placeholder="123"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          )}
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

export default Settings;
