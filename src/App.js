import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import HomePage from './components/HomePage';
import BeehiveDiagnostics from './components/BeehiveDiagnostics';
import BeekeepingActivitiesLog from './components/BeekeepingActivitiesLog';
import InventoryManagement from './components/InventoryManagement';
import SwarmAlert from './components/SwarmAlert';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/diagnostics" element={<BeehiveDiagnostics />} />
        <Route path="/activities" element={<BeekeepingActivitiesLog />} />
        <Route path="/inventory" element={<InventoryManagement />} />
        <Route path="/swarmalert" element={<SwarmAlert />} />
        <Route path="/settings" element={<Settings />} />

      </Routes>
    </Router>
  );
}

export default App;
