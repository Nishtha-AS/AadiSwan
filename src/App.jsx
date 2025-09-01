import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './features/home/pages/LandingPage';
import CredProLanding from './features/credpro/pages/CredProLanding';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home page route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* CredPro page route */}
          <Route path="/credpro" element={<CredProLanding />} />
          
          {/* 404 fallback route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
