import React from 'react';
import './StatisticsSection.css';

const StatisticsSection = () => {
  return (
    <section className="statistics-section">
      <h2 className="stats-title">OUR NUMBERS SPEAKS FOR US</h2>
      
      <img
        className="stats-background"
        src="https://api.builder.io/api/v1/image/assets/TEMP/635165c859b1246e4b14802ec2f9f091a4e61ec4?width=2880"
        alt=""
      />
      
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-background"></div>
          <div className="stat-number">50+</div>
          <div className="stat-label">Expert Consultants</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-background"></div>
          <div className="stat-number">100+</div>
          <div className="stat-label">API Integrations</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-background"></div>
          <div className="stat-number">10+</div>
          <div className="stat-label">Years of Experience</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-background"></div>
          <div className="stat-number">8</div>
          <div className="stat-label">Industry Clients</div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
