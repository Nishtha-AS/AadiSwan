// src/features/home/pages/LandingPage.jsx
import React from 'react';

// Sections that live under features/home/components
import StatisticsSection from '../components/StatisticsSection';
import ConsultancySection from '../components/ConsultancySection';
import CustomerOnboarding1 from '../components/CustomerOnboarding1';

// Local image imports for asset classes (from src/assets)
import leadingLoanImg from '../../../assets/leading_loan_management_img.png';
import workingCapitalIcon from '../../../assets/WCM_logo.jpg';
import supplyChainIcon from '../../../assets/supply_chain_logo.png';
import projectFinanceIcon from '../../../assets/project_finance_logo.png';
import lapIcon from '../../../assets/load_against_property_logo.png';
import nbfcFundingIcon from '../../../assets/NBFC_logo.png';

// Product logos (ensure these files exist in src/assets)
import credProLogo from '../../../assets/CredPro_logo.png';
import cadProLogo from '../../../assets/CADPro_logo.png';
import camProLogo from '../../../assets/CAMPro_logo.png';
import esmsProLogo from '../../../assets/ESMSPro_logo.png';
import ewsProLogo from '../../../assets/EWSPro_logo.png';

// Stylesheet
import './LandingPage.css';

const LandingPage = () => {
  const assetClasses = [
    { icon: workingCapitalIcon, label: 'Working Capital Loans' },
    { icon: supplyChainIcon, label: 'Supply Chain Finance' },
    { icon: projectFinanceIcon, label: 'Project Finance', highlighted: true },
    { icon: lapIcon, label: 'Loan Against Property' },
    { icon: nbfcFundingIcon, label: 'NBFC Funding' },
  ];

  const products = [
    {
      logo: credProLogo,
      name: 'AS CredPro',
      desc: 'Automates end-to-end lending processes for faster, compliant credit decisions.',
    },
    {
      logo: cadProLogo,
      name: 'AS CADPro',
      desc: 'Simplifies credit administration with seamless, transparent workflows.',
    },
    {
      logo: camProLogo,
      name: 'AS CAMPro',
      desc: 'AI-powered engine for smarter, insight-driven credit appraisals.',
    },
    {
      logo: esmsProLogo,
      name: 'AS ESMSPro',
      desc: 'Enables responsible lending with ESG-focused risk assessments.',
    },
    {
      logo: ewsProLogo,
      name: 'AS EWSPro',
      desc: 'Provides early warning signals to mitigate credit risks proactively.',
    },
  ];

  // Split products to match two-column design (3 + 2)
  const productCols = [products.slice(0, 3), products.slice(3)];

  return (
    <div className="landing-page">
      {/* Background Hero Image */}
      <img
        className="hero-background"
        src="https://api.builder.io/api/v1/image/assets/TEMP/6d9d205db9aec208c9dcf74e6a6b4a91731efbb6?width=2880"
        alt=""
      />

      {/* Navigation Section */}
      <div className="navigation-section" role="navigation" aria-label="Main">
        <img
          className="logo"
          src="https://api.builder.io/api/v1/image/assets/TEMP/6a46d8eeed76ab7e2aa362283b5f85cc5f3a6021?width=400"
          alt="AadiSwan Logo"
        />

        <div className="menu-items" role="menubar" aria-label="Primary">
          <div className="menu-item active" role="menuitem">
            <span>Home</span>
          </div>

          {/* Products Dropdown */}
          <div className="menu-item dropdown" role="none">
            <button
              type="button"
              className="menu-trigger"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-controls="products-menu"
            >
              <span>Products</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#56AEFF" />
                <path d="m12 15-.384-.074a1 1 0 0 1-.326-.216l-3-3a1 1 0 0 1 1.415-1.415L12 12.586l2.293-2.291a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-.326.216L12 15Z" fill="#000708" />
              </svg>
            </button>

            {/* Products dropdown menu */}
            <div
              id="products-menu"
              className="dropdown-menu products-dropdown"
              role="menu"
              aria-label="Products"
            >
              <div className="dropdown-columns">
                {/* Left PRODUCTS column with heading */}
                <div className="dropdown-column products-column">
                  <h3 className="dropdown-title">PRODUCTS</h3>
                  <ul className="dropdown-list products-list" role="none">
                    {productCols[0].map((p) => (
                      <li key={p.name} className="product-item" role="presentation">
                        <a href="#product" role="menuitem" className="product-link">
                          <img src={p.logo} alt="" className="product-icon" />
                          <div className="product-copy">
                            <span className="product-name">{p.name}</span>
                            <span className="product-desc">{p.desc}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right PRODUCTS column (no duplicate title) */}
                <div className="dropdown-column products-column">
                  <ul className="dropdown-list products-list" role="none">
                    {productCols[1].map((p) => (
                      <li key={p.name} className="product-item" role="presentation">
                        <a href="#product" role="menuitem" className="product-link">
                          <img src={p.logo} alt="" className="product-icon" />
                          <div className="product-copy">
                            <span className="product-name">{p.name}</span>
                            <span className="product-desc">{p.desc}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Promotional Image Column */}
                <div className="dropdown-promo promo-column" role="none">
                  <div className="promo-image">
                    <img src={leadingLoanImg} alt="Leading Loan Management Solution" />
                    <div className="promo-overlay">
                      <div className="trusted-badge">Trusted by 10+ Prestigious Banks</div>
                      <p>Leading Loan Management Solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="menu-item dropdown" role="none">
            <button
              type="button"
              className="menu-trigger"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-controls="solutions-menu"
            >
              <span>Solutions</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#56AEFF" />
                <path d="m12 15-.384-.074a1 1 0 0 1-.326-.216l-3-3a1 1 0 0 1 1.415-1.415L12 12.586l2.293-2.291a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-.326.216L12 15Z" fill="#000708" />
              </svg>
            </button>

            {/* Solutions Dropdown Menu */}
            <div
              id="solutions-menu"
              className="dropdown-menu solutions-dropdown"
              role="menu"
              aria-label="Solutions"
            >
              <div className="dropdown-columns">
                {/* Solutions Column */}
                <div className="dropdown-column">
                  <h3 className="dropdown-title">SOLUTIONS</h3>
                  <ul className="dropdown-list" role="none">
                    <li role="presentation">
                      <a href="#solution" role="menuitem">
                        <span className="list-number">1</span>
                        <span>Underwriting Studio</span>
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#solution" role="menuitem">
                        <span className="list-number">2</span>
                        <span>Document Management and Template Engine</span>
                      </a>
                    </li>
                    <li className="highlighted" role="presentation">
                      <a href="#solution" role="menuitem">
                        <span className="list-number">3</span>
                        <span>Automated Decisioning</span>
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#solution" role="menuitem">
                        <span className="list-number">4</span>
                        <span>Covenant Management</span>
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#solution" role="menuitem">
                        <span className="list-number">5</span>
                        <span>Support Workflows- Legal, Valuation and more</span>
                      </a>
                    </li>
                    <li role="presentation">
                      <a href="#solution" role="menuitem">
                        <span className="list-number">6</span>
                        <span>Third Party Integrations</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Asset Classes Column */}
                <div className="dropdown-column">
                  <h3 className="dropdown-title">ASSET CLASSES</h3>
                  <ul className="dropdown-list" role="none">
                    {assetClasses.map(({ icon, label, highlighted }) => (
                      <li key={label} className={highlighted ? 'highlighted' : ''} role="presentation">
                        <a href="#asset" role="menuitem">
                          <img src={icon} alt="" className="list-icon" />
                          <span>{label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Promotional Image Column */}
                <div className="dropdown-promo" role="none">
                  <div className="promo-image">
                    <img src={leadingLoanImg} alt="Leading Loan Management Solution" />
                    <div className="promo-overlay">
                      <div className="trusted-badge">Trusted by 10+ Prestigious Banks</div>
                      <p>Leading Loan Management Solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="menu-item" role="menuitem"><span>About Us</span></div>
          <div className="menu-item" role="menuitem"><span>Blog</span></div>
          <div className="menu-item" role="menuitem"><span>Contact Us</span></div>
        </div>

        <img
          className="contact-buttons"
          src="https://api.builder.io/api/v1/image/assets/TEMP/586ab01f436087153e20e6a1c215f88efd4ab95a?width=228"
          alt="Contact Buttons"
        />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">TRANSFORM YOUR LENDING AND MONITORING PROCESS</h1>
        <p className="hero-description">
          A new paradigm of digital-led technologies and connected experiences awaits your
          financial operations with AadiSwan. Embrace our advanced, platform-led solutions to
          accelerate and adapt to the evolving digital era, transforming your business processes
          for optimal efficiency and precision.
        </p>
        <div className="hero-buttons">
          <button className="book-demo-btn">Book A Demo</button>
          <button className="call-us-btn">Call Us</button>
        </div>
      </div>

      {/* Hero Side Image */}
      <img
        className="hero-side-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/b5ce5c673af9fe6d1ea145788a66694305d47e00?width=1172"
        alt="Hero Art"
      />

      {/* Our Clients Section */}
      <section className="our-clients-section">
        <h2 className="section-title">OUR CLIENTS</h2>

        <div className="clients-marquee" aria-label="Client logos carousel">
          <div className="clients-track">
            {(() => {
              const clientIds = [
                '3985a0fa6e1cfa398ad99fe0eb303cd6713b2862',
                '784dd2e53f8aeb81f7c7410d69dde11ce93cfe12',
                'd468c3fa48a06f3e6ce232aab0a625ea0217a970',
                '0433f90725991367412d201b26b6a634075ba12c',
                '09d12f45fe84cc0ad90f515d835418b1d109addc',
                '1b4ec3b0c1a33d8fdfbae61f45b1adb9841d28e0',
              ];

              const allLogos = [
                ...clientIds.map((id) => (
                  <div key={id} className="client-card">
                    <img
                      src={`https://api.builder.io/api/v1/image/assets/TEMP/${id}?width=226`}
                      alt={`Client ${id}`}
                      loading="lazy"
                    />
                  </div>
                )),
                ...clientIds.map((id) => (
                  <div key={`${id}-dup`} className="client-card" aria-hidden="true">
                    <img
                      src={`https://api.builder.io/api/v1/image/assets/TEMP/${id}?width=226`}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                )),
              ];

              return allLogos;
            })()}
          </div>
        </div>
      </section>

      {/* Customer Onboarding Section */}
      <section className="customer-onboarding-section">
        <CustomerOnboarding1 />
      </section>

      {/* Our Products Section */}
      <section className="our-products-section">
        <h2 className="section-title">OUR PRODUCTS</h2>
        <p className="section-description">
          ADS offers tailored solutions for a variety of asset classes, ensuring comprehensive
          management and optimization. Our multi-asset approach guarantees efficiency and precision
          across all financial portfolios.
        </p>

        <div className="products-grid">
          {[
            {
              id: 'eb598de18572e13b2ecd0f01e1d60c800e57d8c1',
              text: `AadiSwan's flagship lending suite, covering origination, underwriting,
              credit administration, covenant management, and valuation/legal workflows. Using
              self-service BRE, it automates end-to-end processes, ensuring precise evaluations,
              compliance, and faster turnaround times.`,
            },
            {
              id: '716fee80c37d1c6dd7332f298b19317757a8ecff',
              text: `CADPro streamlines credit administration with automated document
              templatization, covenant scheduling & tracking, disbursement workflows, pre/post
              disbursement compliance—ensuring consistency & transparency while reducing manual
              intervention.`,
            },
            {
              id: 'a7a803ceae652b505f09572aa0c3ded43775b3d5',
              text: `CAMPro is an AI- and ML-powered engine that automates credit appraisals by
              generating analyst-style memos, projecting financials, benchmarking peers, and
              delivering sentiment analysis with forward-looking metrics for faster, consistent
              lending decisions.`,
            },
          ].map(({ id, text }) => (
            <div key={id} className="product-card large">
              <img
                src={`https://api.builder.io/api/v1/image/assets/TEMP/${id}?width=470`}
                alt="Product Logo"
                className="product-logo"
                loading="lazy"
              />
              <p className="product-description">{text}</p>
              <button className="more-btn">More →</button>
            </div>
          ))}

          {[
            {
              id: 'a4fd30933838b6ad02726223cd8507f059476290',
              text: `ESMSPro facilitates environmental and social risk management by integrating
              ESG criteria into lending processes, offering comprehensive assessments, monitoring,
              and reporting to support sustainable and responsible financing practices.`,
            },
            {
              id: 'a823da0f4adf90c08d2370342d795d4fa0aedf92',
              text: `EWSPro provides early warning signals by monitoring behavioural financial
              and non-financial indicators, enabling proactive risk management and timely alerts
              to mitigate potential credit risks and reduce defaults.`,
            },
          ].map(({ id, text }) => (
            <div key={id} className="product-card wide">
              <img
                src={`https://api.builder.io/api/v1/image/assets/TEMP/${id}?width=473`}
                alt="Product Logo"
                className="product-logo"
                loading="lazy"
              />
              <p className="product-description">{text}</p>
              <button className="more-btn">More →</button>
            </div>
          ))}
        </div>
      </section>

      {/* Consultancy Section */}
      <section className="consultancy-section-wrapper">
        <ConsultancySection />
      </section>

      {/* Multi-Asset Section */}
      <section className="multi-asset-section">
        <h2 className="section-title">MULTI-ASSET SOLUTIONS</h2>
        <p className="section-description">
          ADS offers tailored solutions for a variety of asset classes, ensuring comprehensive
          management and optimization. Our multi-asset approach guarantees efficiency and precision
          across all financial portfolios.
        </p>

        <div className="asset-grid">
          {[
            { id: 'c233904a984a4ec9d07281c496c8b2ca717a3f90', label: 'WORKING CAPITAL' },
            { id: '831b41e451d19bcaad87b1b93cf20967092aafb7', label: 'LOAN AGAINST PROPERTY' },
            { id: '6747060e5dcc9757463ebed4211058308f1b338e', label: 'SUPPLY CHAIN FINANCE' },
            { id: '6ff401983144cf1e9edeb0b1f88a4f97ff91649e', label: 'PROJECT FINANCE' },
            { id: 'edd3af706bb28da2a270e17bbac090215b9ae047', label: 'NBFC FUNDING' },
            { id: '7a9df0f34c7558d9bd60944b38d717ca53ae56ed', label: 'TRADE FINANCE' },
          ].map(({ id, label }) => (
            <div key={id} className="asset-card">
              <img
                src={`https://api.builder.io/api/v1/image/assets/TEMP/${id}?width=182`}
                alt={label}
                loading="lazy"
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section-wrapper">
        <StatisticsSection />
      </section>

      {/* Platform Automation Section */}
      <section className="platform-automation-section">
        <h2 className="section-title">OUR PLATFORM AUTOMATES</h2>
        <p className="section-description">
          CredPro streamlines operations with seamless integration, rule-based workflows and
          policy-driven automation, ensuring precise control and greater efficiency.
        </p>

        <div className="automation-grid">
          <ul className="automation-list">
            <li><span>01.</span> Sourcing and Onboarding</li>
            <li><span>03.</span> Sanctioning Process</li>
            <li><span>05.</span> Credit Cheques and Dedupe</li>
            <li><span>07.</span> Sanction Letter</li>
            <li><span>09.</span> Anti-Money Laundering</li>
            <li><span>11.</span> Disbursement Documents</li>
            <li><span>13.</span> Commercial Credit Bureau</li>
            <li><span>15.</span> Doc Execution (E-Sign &amp; E-Stamp)</li>
          </ul>

          <div className="automation-image">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/76d3b3683c73123e13edd5ff0d219f952b604ba8?width=950"
              alt="Platform Automation"
              loading="lazy"
            />
          </div>

          <ul className="automation-list">
            <li><span>02.</span> Credit Underwriting</li>
            <li><span>04.</span> Legal Workflow</li>
            <li><span>06.</span> Pre-Disbursement Compliance</li>
            <li><span>08.</span> Valuation Workflow</li>
            <li><span>10.</span> Pricing Workflow</li>
            <li><span>12.</span> Credit Appraisal Note</li>
            <li><span>14.</span> Covenant Deferral</li>
            <li><span>18.</span> Environmental &amp; Social Risk Evaluation</li>
          </ul>
        </div>

        <div className="automation-bottom">
          <div className="bottom-item"><span>16.</span> Assessment</div>
          <div className="bottom-item"><span>17.</span> Bankruptcy Prediction</div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        <img
          className="footer-background"
          src="https://api.builder.io/api/v1/image/assets/TEMP/6d9d205db9aec208c9dcf74e6a6b4a91731efbb6?width=1440"
          alt=""
        />

        <img
          className="footer-logo"
          src="https://api.builder.io/api/v1/image/assets/TEMP/6a46d8eeed76ab7e2aa362283b5f85cc5f3a6021?width=244"
          alt="AadiSwan Logo"
        />

        <div className="footer-content">
          {/* Our Presence Section */}
          <div className="presence-section">
            <h3 className="footer-section-header">OUR PRESENCE</h3>
            <div className="presence-grid">
              <div className="presence-card">
                <div className="presence-top">
                  <h4 className="presence-city">Delhi</h4>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/b8e0f5f8de5c7c2ae7c5d5aa7e6b5d0fe9e2b0f1?width=150"
                  alt="Delhi skyline"
                  className="presence-skyline"
                  loading="lazy"
                />
                <p className="presence-address">
                  105A, 1st Floor, NDM-1, Netaji Subhash Place, Pitampura, Delhi, 110034
                </p>
              </div>

              <div className="presence-card">
                <div className="presence-top">
                  <h4 className="presence-city">Lucknow</h4>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c9f1e6f9df6c8c3bf8c6d6bb8f7c6e1gf0f3c1g2?width=150"
                  alt="Lucknow skyline"
                  className="presence-skyline"
                  loading="lazy"
                />
                <p className="presence-address">
                  Ground and 4th Floor, Yogiraj Tower, C-47, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                </p>
              </div>

              <div className="presence-card">
                <div className="presence-top">
                  <h4 className="presence-city">Mumbai</h4>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/d0g2f7g0eg7d9d4cg9d7e7cc9g8d7f2hg1g4d2h3?width=150"
                  alt="Mumbai skyline"
                  className="presence-skyline"
                  loading="lazy"
                />
                <p className="presence-address">
                  Modi Business Park, Sai Nagar, Anand Nagar, Thane West, Thane, Maharashtra 400615
                </p>
              </div>

              <div className="presence-card">
                <div className="presence-top">
                  <h4 className="presence-city">Abu Dhabi</h4>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e1h3g8h1fh8e0e5dh0e8f8dd0h9e8g3ih2h5e3i4?width=150"
                  alt="Abu Dhabi skyline"
                  className="presence-skyline"
                  loading="lazy"
                />
                <p className="presence-address">
                  Office No: 208, Room No: 2,. Al Nasar Commercial Center, Najda Street. Abu Dhabi, Abu Dhabi 131416, AE
                </p>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="useful-links-section">
            <h3 className="footer-section-header">USEFUL LINKS</h3>
            <div className="links-list">
              <div className="nav-link active-link">Home</div>
              <div className="nav-link">Products</div>
              <div className="nav-link">Solutions</div>
              <div className="nav-link">About Us</div>
              <div className="nav-link">Blog</div>
              <div className="nav-link">Contact Us</div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section">
            <h3 className="footer-section-header">CONTACT US</h3>
            <div className="contact-info">
              <div className="contact-item">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/phone-icon?width=24"
                  alt="Phone"
                  className="contact-icon"
                />
                <span className="contact-text">+91-11-41421313</span>
              </div>
              <div className="contact-item">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/email-icon?width=24"
                  alt="Email"
                  className="contact-icon"
                />
                <span className="contact-text">info@aadiswan.com</span>
              </div>
            </div>

            <div className="legal-links">
              <div className="legal-link">Privacy Policy</div>
              <div className="legal-link">Terms and Conditions</div>
            </div>

            <div className="social-icons">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/linkedin-icon?width=30"
                alt="LinkedIn"
                className="social-icon"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/twitter-icon?width=30"
                alt="Twitter"
                className="social-icon"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/facebook-icon?width=30"
                alt="Facebook"
                className="social-icon"
              />
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h3 className="footer-section-header">GET IN TOUCH</h3>
            <form className="contact-form">
              <div className="input-field">
                <label className="field-label">Name*</label>
                <div className="input-wrapper">
                  <input type="text" className="form-input" placeholder="Enter your name" />
                </div>
              </div>

              <div className="input-field">
                <label className="field-label">Email*</label>
                <div className="input-wrapper">
                  <input type="email" className="form-input" placeholder="Enter your email" />
                </div>
              </div>

              <div className="textarea-field">
                <label className="field-label">Message*</label>
                <div className="textarea-wrapper">
                  <textarea className="form-textarea" placeholder="Enter your message"></textarea>
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/drag-icon?width=7"
                    alt="Resize"
                    className="drag-icon"
                  />
                </div>
              </div>

              <div className="button-group">
                <button type="submit" className="submit-btn">Submit</button>
              </div>
            </form>
          </div>
        </div>

        <p className="copyright-text">
          Copyright © 2024 AadiSwan Fintech Private Limited. All rights reserved.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
