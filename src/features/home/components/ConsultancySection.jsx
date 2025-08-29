import React from 'react';
import './ConsultancySection.css';

const ConsultancySection = () => {
  return (
    <div className="consultancy-main-container">
      <div className="consultancy-left-section">
        <h2 className="consultancy-title">
          CONSULTANCY SERVICE BY AADISWAN
        </h2>
        <p className="consultancy-description">
          In addition to our cutting-edge products, Aadiswan offers specialized
          consultancy services designed to elevate your organizational
          capabilities. With over 250 years of combined team experience, we
          provide expert guidance to support your entry into new domains. By
          collaborating closely with your risk, underwriting, and product teams,
          we ensure that banks can navigate complex areas with confidence and
          precision. Our consultancy services are tailored to address gaps in
          expertise, leveraging our extensive knowledge to enhance your
          strategic initiatives and operational efficiency.
        </p>
        
        <div className="features-list">
          <div className="feature-item">
            <div className="check-icon">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <circle cx="12.5" cy="12.5" r="11.5" fill="url(#paint0_linear_1)" stroke="white" strokeMiterlimit="10"/>
                <path d="M7.33337 12.3184L9.89748 14.8647L15.6667 9.1355" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_1" x1="12.5" y1="1" x2="12.5" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#036CBC"/>
                    <stop offset="1" stopColor="#56AEFF"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span>Expertise Driven Insights</span>
          </div>
          
          <div className="feature-item">
            <div className="check-icon">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <circle cx="12.5" cy="12.5" r="11.5" fill="url(#paint0_linear_2)" stroke="white" strokeMiterlimit="10"/>
                <path d="M7.33337 12.3184L9.89748 14.8647L15.6667 9.1355" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_2" x1="12.5" y1="1" x2="12.5" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#036CBC"/>
                    <stop offset="1" stopColor="#56AEFF"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span>Prompt &amp; Flexible Support</span>
          </div>
          
          <div className="feature-item">
            <div className="check-icon">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                <circle cx="12.5" cy="12.5" r="11.5" fill="url(#paint0_linear_3)" stroke="white" strokeMiterlimit="10"/>
                <path d="M7.33337 12.3184L9.89748 14.8647L15.6667 9.1355" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_3" x1="12.5" y1="1" x2="12.5" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#036CBC"/>
                    <stop offset="1" stopColor="#56AEFF"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span>Collaborative Approach</span>
          </div>
        </div>
      </div>
      
      <div className="consultancy-right-section">
        <div className="process-steps">
          <div className="process-step">
            <div className="step-left">
              <div className="step-circle">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="26" fill="url(#paint0_linear_step1)" stroke="white" strokeMiterlimit="10"/>
                  <defs>
                    <linearGradient id="paint0_linear_step1" x1="28" y1="2" x2="28" y2="54" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#036CBC"/>
                      <stop offset="1" stopColor="#56AEFF"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="step-number">01</span>
              </div>
              <div className="connecting-line"></div>
            </div>
            <div className="step-content">
              <h3>Initial Assessment</h3>
              <p>Begin with a comprehensive evaluation of your current processes and expertise gaps to tailor a customized consultancy approach</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-left">
              <div className="step-circle">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="26" fill="url(#paint0_linear_step2)" stroke="#003760" strokeMiterlimit="10"/>
                  <defs>
                    <linearGradient id="paint0_linear_step2" x1="28" y1="2" x2="28" y2="54" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#036CBC"/>
                      <stop offset="1" stopColor="#56AEFF"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="step-number">02</span>
              </div>
              <div className="connecting-line"></div>
            </div>
            <div className="step-content">
              <h3>Strategic Planning</h3>
              <p>Develop a detailed action plan, including specific recommendations and strategies, in collaboration with your CXOs, risk, underwriting, and product teams</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-left">
              <div className="step-circle">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="26" fill="url(#paint0_linear_step3)" stroke="#003760" strokeMiterlimit="10"/>
                  <defs>
                    <linearGradient id="paint0_linear_step3" x1="28" y1="2" x2="28" y2="54" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#036CBC"/>
                      <stop offset="1" stopColor="#56AEFF"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="step-number">03</span>
              </div>
              <div className="connecting-line"></div>
            </div>
            <div className="step-content">
              <h3>Implementation Support</h3>
              <p>Provide hands-on assistance during the implementation phase, ensuring smooth roll out and addressing any challenges that arise</p>
            </div>
          </div>
          
          <div className="process-step">
            <div className="step-left">
              <div className="step-circle">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="26" fill="url(#paint0_linear_step4)" stroke="#003760" strokeMiterlimit="10"/>
                  <defs>
                    <linearGradient id="paint0_linear_step4" x1="28" y1="2" x2="28" y2="54" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#036CBC"/>
                      <stop offset="1" stopColor="#56AEFF"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="step-number">04</span>
              </div>
              <div className="connecting-line"></div>
            </div>
            <div className="step-content">
              <h3>Ongoing Evaluation</h3>
              <p>Conclude with a thorough review of outcomes, measuring success against goals, and offering continuous support for long-term effectiveness</p>
            </div>
          </div>
          
          <div className="success-step">
            <div className="success-circle">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="26" fill="url(#paint0_linear_success)" stroke="#003760" strokeMiterlimit="10"/>
                <path d="M18 28.7257L23.8462 34.5312L37 21.4688" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear_success" x1="28" y1="2" x2="28" y2="54" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#036CBC"/>
                    <stop offset="1" stopColor="#56AEFF"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="success-text">Implementation Success!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultancySection;
