import React from 'react';
import '../styles/IndustriesUseCases.css';

const IndustriesUseCases = () => {
  const industries = [
    // Top row
    {
      id: 'msme',
      title: 'MSME Lending',
      description: 'Digitized origination, automated underwriting, faster sanctioning for small businesses.',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/1c949fc98236285a6a4199425158840b47796910?width=160',
      alt: 'MSME Lending'
    },
    {
      id: 'retail',
      title: 'Retail Banking',
      description: 'Customer onboarding, KYC, loan lifecycle automation for individuals.',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/c18c71acf71101079ece1658b011e3df9ca4c428?width=160',
      alt: 'Retail Banking'
    },
    {
      id: 'project',
      title: 'Project Finance',
      description: 'Structured workflows, rule-based underwriting, automated risk assessments.',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/06187ed50caedffb1971c307c50f226533f8cea4?width=160',
      alt: 'Project Finance'
    }
  ];

  const bottomRowIndustries = [
    {
      id: 'supply-chain',
      title: 'Supply Chain Finance',
      description: 'Vendor financing, invoice discounting, and risk monitoring.',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/f5d3c43b7ea49e164608ef0d91ee914327e9b1d5?width=160',
      alt: 'Supply Chain Finance'
    },
    {
      id: 'nbfc',
      title: 'NBFC Funding',
      description: 'Streamlined lending journeys, compliance-first automation.',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/5a44b22556eb27293975f266fe3b01a27917fd77?width=160',
      alt: 'NBFC Funding'
    }
  ];

  return (
    <section className="industries-use-cases-section">
      <div className="industries-background-overlay"></div>
      
      <div className="industries-container">
        <h2 className="industries-title">Industries & Use Cases</h2>
        
        <p className="industries-subtitle">
          EWSPro adapts across multiple lending environments.
        </p>
        
        <div className="industries-grid">
          <div className="industries-row-top">
            {industries.map((industry) => (
              <div key={industry.id} className="industry-card">
                <div className="industry-icon">
                  <img src={industry.icon} alt={industry.alt} />
                </div>
                <div className="industry-content">
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-description">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="industries-row-bottom">
            {bottomRowIndustries.map((industry) => (
              <div key={industry.id} className="industry-card">
                <div className="industry-icon">
                  <img src={industry.icon} alt={industry.alt} />
                </div>
                <div className="industry-content">
                  <h3 className="industry-title">{industry.title}</h3>
                  <p className="industry-description">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesUseCases;
