import React from 'react';
import './ConsultancySection.css';

const ConsultancySection = () => {
  return (
    <section className="consultancy">
      <div className="consultancy-shell">
        {/* Left column */}
        <div className="consultancy-left">
          <h2 className="consultancy-heading">
            CONSULTANCY SERVICE BY AADISWAN
          </h2>

          <p className="consultancy-lead">
            In addition to our cutting-edge products, Aadiswan offers specialized
            consultancy services designed to elevate your organizational
            capabilities. With over 250 years of combined team experience, we
            provide expert guidance to support your entry into new domains. By
            collaborating closely with your risk, underwriting, and product teams,
            we ensure that banks can navigate complex areas with confidence and
            precision. Our consultancy services are tailored to address gaps in
            expertise, leveraging our extensive knowledge to enhance your strategic
            initiatives and operational efficiency.
          </p>

          <ul className="consultancy-bullets">
            <li>
              <span className="check-bullet" aria-hidden>✓</span>
              <span>Expertise Driven Insights</span>
            </li>
            <li>
              <span className="check-bullet" aria-hidden>✓</span>
              <span>Prompt &amp; Flexible Support</span>
            </li>
            <li>
              <span className="check-bullet" aria-hidden>✓</span>
              <span>Collaborative Approach</span>
            </li>
          </ul>
        </div>

        {/* Right column – timeline */}
        <div className="consultancy-right">
          <ol className="timeline" role="list">
            {/* Step 1 */}
            <li className="timeline-item">
              <div className="timeline-rail" aria-hidden>
                <span className="dot">01</span>
                <span className="rail"></span>
              </div>
              <div className="timeline-card">
                <h3>Initial Assessment</h3>
                <p>
                  Begin with a comprehensive evaluation of your current processes and
                  expertise gaps to tailor a customized consultancy approach.
                </p>
              </div>
            </li>

            {/* Step 2 */}
            <li className="timeline-item">
              <div className="timeline-rail" aria-hidden>
                <span className="dot">02</span>
                <span className="rail"></span>
              </div>
              <div className="timeline-card">
                <h3>Strategic Planning</h3>
                <p>
                  Develop a detailed action plan, including specific recommendations
                  and strategies, in collaboration with your CXOs, risk, underwriting,
                  and product teams.
                </p>
              </div>
            </li>

            {/* Step 3 */}
            <li className="timeline-item">
              <div className="timeline-rail" aria-hidden>
                <span className="dot">03</span>
                <span className="rail"></span>
              </div>
              <div className="timeline-card">
                <h3>Implementation Support</h3>
                <p>
                  Provide hands-on assistance during the implementation phase,
                  ensuring smooth roll out and addressing any challenges that arise.
                </p>
              </div>
            </li>

            {/* Step 4 */}
            <li className="timeline-item">
              <div className="timeline-rail" aria-hidden>
                <span className="dot">04</span>
                <span className="rail rail-end"></span>
              </div>
              <div className="timeline-card">
                <h3>Ongoing Evaluation</h3>
                <p>
                  Conclude with a thorough review of outcomes, measuring success
                  against goals, and offering continuous support for long-term
                  effectiveness.
                </p>
              </div>
            </li>

            {/* Step 5 – Implementation Success (aligned in the same grid) */}
            <li className="timeline-item success-item" aria-label="Implementation success">
              <div className="timeline-rail" aria-hidden>
                {/* short green continuation of the rail */}
                <span className="rail rail-success"></span>
              </div>

              <div className="success-card">
                <div className="success-badge" aria-hidden>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                    <defs>
                      <linearGradient id="successGrad" x1="28" y1="2" x2="28" y2="54" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4AA90A"/>
                        <stop offset="1" stopColor="#9FF863"/>
                      </linearGradient>
                    </defs>
                    <circle cx="28" cy="28" r="26" fill="url(#successGrad)" stroke="#0f4c0f" strokeMiterlimit="10"/>
                    <path d="M18 28.7L23.9 34.5L37 21.5" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="success-text">Implementation Success</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ConsultancySection;
