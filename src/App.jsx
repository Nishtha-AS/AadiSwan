import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './features/home/pages/LandingPage';
import CredProLanding from './features/credpro/pages/CredProLanding';
import AboutPage from './features/about/pages/AboutPage';
import ContactPage from './features/contact/pages/ContactPage';
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

          {/* About Us page route */}
          <Route path="/aboutUs" element={<AboutPage />} />

          {/* Contact page route */}
          <Route path="/contact" element={<ContactPage />} />

          {/* 404 fallback route */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
