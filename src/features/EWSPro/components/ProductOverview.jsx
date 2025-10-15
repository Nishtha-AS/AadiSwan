import React from 'react';
import '../styles/ProductOverview.css';

const ProductOverview = () => {
  return (
    <section className="product-overview-section">
      <div className="product-overview-container">
        {/* Left Column - Content */}
        <div className="product-overview-content">
          {/* Section Title */}
          <h2 className="product-overview-title">PRODUCT OVERVIEW</h2>
          
          {/* Main Description */}
          <p className="product-overview-description">
            EWSPro is AadiSwan’s end-to-end Early Warning Signal & Risk Intelligence platform. It streamlines portfolio surveillance across the credit lifecycle— from data aggregation and signal generation to scoring, escalation, and closure tracking. By ingesting internal (LOS/CBS/LMS/DWH), behavioral/account-conduct, covenant and collateral data alongside external sources (Bureau, GST/MCA, ratings, market/news feeds), EWSPro surfaces emerging stress early and drives timely action. With policy-driven rule libraries, versioned models, and 100+ integration options, EWSPro delivers audit-ready evidence, faster exception handling, and consistent governance.
          </p>
          
          {/* Who is it for section */}
          <div className="target-audience-section">
            <p className="audience-intro">Who is it for?</p>
            <ul className="audience-list">
              <li>Banks & DFIs building or upgrading enterprise EWS frameworks</li>
              <li>NBFCs & Cooperatives seeking proactive NPA prevention and collections prioritization</li>
              <li>Corporate/SME/Agri lenders managing distributed portfolios and multi-stage monitoring</li>
            </ul>
          </div>
          
          {/* Features Grid */}
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M12.4998 23.9583C18.8281 23.9583 23.9582 18.8282 23.9582 12.5C23.9582 6.1717 18.8281 1.04163 12.4998 1.04163C6.17157 1.04163 1.0415 6.1717 1.0415 12.5C1.0415 18.8282 6.17157 23.9583 12.4998 23.9583Z" fill="url(#paint0_linear)" stroke="white" strokeMiterlimit="10" strokeLinecap="square"/>
                  <defs>
                    <linearGradient id="paint0_linear" x1="12.4998" y1="1.04163" x2="12.4998" y2="23.9583" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#036CBC"/>
                      <stop offset="1" stopColor="#56AEFF"/>
                    </linearGradient>
                  </defs>
                </svg>
                <svg className="check-mark" width="13" height="14" viewBox="0 0 13 14" fill="none">
                  <g clipPath="url(#clip0_check)">
                    <path d="M2.3335 7.31824L4.8976 9.86454L10.6668 4.13538" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_check">
                      <rect width="12.5" height="12.5" fill="white" transform="translate(0.25 0.75)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="feature-text">End-to-end EWS governance with policy-driven workflows</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M12.4998 23.9583C18.8281 23.9583 23.9582 18.8282 23.9582 12.5C23.9582 6.1717 18.8281 1.04163 12.4998 1.04163C6.17157 1.04163 1.0415 6.1717 1.0415 12.5C1.0415 18.8282 6.17157 23.9583 12.4998 23.9583Z" fill="url(#paint1_linear)" stroke="white" strokeMiterlimit="10" strokeLinecap="square"/>
                  <defs>
                    <linearGradient id="paint1_linear" x1="12.4998" y1="1.04163" x2="12.4998" y2="23.9583" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#036CBC"/>
                      <stop offset="1" stopColor="#56AEFF"/>
                    </linearGradient>
                  </defs>
                </svg>
                <svg className="check-mark" width="13" height="14" viewBox="0 0 13 14" fill="none">
                  <g clipPath="url(#clip1_check)">
                    <path d="M2.3335 7.31824L4.8976 9.86454L10.6668 4.13538" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip1_check">
                      <rect width="12.5" height="12.5" fill="white" transform="translate(0.25 0.75)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="feature-text">Unified data layer & APIs</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M12.4998 23.9583C18.8281 23.9583 23.9582 18.8282 23.9582 12.5C23.9582 6.1717 18.8281 1.04163 12.4998 1.04163C6.17157 1.04163 1.0415 6.1717 1.0415 12.5C1.0415 18.8282 6.17157 23.9583 12.4998 23.9583Z" fill="url(#paint2_linear)" stroke="white" strokeMiterlimit="10" strokeLinecap="square"/>
                  <defs>
                    <linearGradient id="paint2_linear" x1="12.4998" y1="1.04163" x2="12.4998" y2="23.9583" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#036CBC"/>
                      <stop offset="1" stopColor="#56AEFF"/>
                    </linearGradient>
                  </defs>
                </svg>
                <svg className="check-mark" width="13" height="14" viewBox="0 0 13 14" fill="none">
                  <g clipPath="url(#clip2_check)">
                    <path d="M2.3335 7.31824L4.8976 9.86454L10.6668 4.13538" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip2_check">
                      <rect width="12.5" height="12.5" fill="white" transform="translate(0.25 0.75)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="feature-text">Automated risk scoring & bucketing</span>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                  <path d="M12.4998 23.9583C18.8281 23.9583 23.9582 18.8282 23.9582 12.5C23.9582 6.1717 18.8281 1.04163 12.4998 1.04163C6.17157 1.04163 1.0415 6.1717 1.0415 12.5C1.0415 18.8282 6.17157 23.9583 12.4998 23.9583Z" fill="url(#paint3_linear)" stroke="white" strokeMiterlimit="10" strokeLinecap="square"/>
                  <defs>
                    <linearGradient id="paint3_linear" x1="12.4998" y1="1.04163" x2="12.4998" y2="23.9583" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#036CBC"/>
                      <stop offset="1" stopColor="#56AEFF"/>
                    </linearGradient>
                  </defs>
                </svg>
                <svg className="check-mark" width="13" height="14" viewBox="0 0 13 14" fill="none">
                  <g clipPath="url(#clip3_check)">
                    <path d="M2.3335 7.31824L4.8976 9.86454L10.6668 4.13538" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip3_check">
                      <rect width="12.5" height="12.5" fill="white" transform="translate(0.25 0.75)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="feature-text">Configurable signal library & thresholds</span>
            </div>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="product-overview-image">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ce9cc171195ab291a00767a442bbc2f5ddc19ce4?width=1000"
            alt="Leading Loan Management Solution"
            className="overview-image"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductOverview;
