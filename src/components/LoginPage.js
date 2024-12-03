import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import logo from '../assets/images/bee.GIF';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Mock function to simulate login validation
  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with actual validation logic or API call
    if (email === "admin@gmail.com" && password === "admin") {
      navigate('/home'); // Redirect to the homepage on successful login
    } else {
      alert("Invalid credentials, please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Hive</h2>
      <img src={logo} alt="Beehive Logo" className="interactive-logo" />
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="sign-up-link">
        <p>Don't have an account? <a href="/create-account">Create one</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
