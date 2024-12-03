import React from 'react';
import './CreateAccountPage.css';
import logo from '../assets/images/beehive2.jpg';
import	{	useNavigate	}	from	'react-router-dom';

const CreateAccountPage = () => {
  return (
    <div className="create-account-container">
      <img src={logo} alt="Beehive Logo" className="interactive-logo" />
      <h2 className="create-account-title">Create Your Account</h2>
      <form className="create-account-form">
        <div className="input-group">
          <input type="text" placeholder="Full Name" required />
        </div>
        <div className="input-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit" className="create-account-button">Create Account</button>
      </form>
      <div className="login-link">
        <p>Already have an account? <a href="/">Login here</a></p>
      </div>
    </div>
  );
}

export default CreateAccountPage;
