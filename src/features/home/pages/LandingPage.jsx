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

// Keep existing stylesheet import (see note)
import './LandingPage.css';

const LandingPage = () => {
  // Asset class configuration with icons
  const assetClasses = [
    { icon: workingCapitalIcon, label: 'Working Capital Loans' },
    { icon: supplyChainIcon, label: 'Supply Chain Finance' },
    { icon: projectFinanceIcon, label: 'Project Finance', highlighted: true },
    { icon: lapIcon, label: 'Loan Against Property' },
    { icon: nbfcFundingIcon, label: 'NBFC Funding' },
  ];

  return (
    <div className="landing-page">
      {/* Background Hero Image */}
      <img
        className="hero-background"
        src="https://api.builder.io/api/v1/image/assets/TEMP/6d9d205db9aec208c9dcf74e6a6b4a91731efbb6?width=2880"
        alt=""
      />

      {/* Navigation Section */}
      <div className="navigation-section">
        <img
          className="logo"
          src="https://api.builder.io/api/v1/image/assets/TEMP/6a46d8eeed76ab7e2aa362283b5f85cc5f3a6021?width=400"
          alt="AadiSwan Logo"
        />

        <div className="menu-items">
          <div className="menu-item active">
            <span>Home</span>
          </div>

          {/* Products Dropdown */}
          <div className="menu-item dropdown">
            <span>Products</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#56AEFF" />
              <path d="m12 15-.384-.074a1 1 0 0 1-.326-.216l-3-3a1 1 0 0 1 1.415-1.415L12 12.586l2.293-2.291a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-.326.216L12 15Z" fill="#000708" />
            </svg>
          </div>

          {/* Solutions Dropdown - Updated Version */}
          <div className="menu-item dropdown">
            <span>Solutions</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="#56AEFF" />
              <path d="m12 15-.384-.074a1 1 0 0 1-.326-.216l-3-3a1 1 0 0 1 1.415-1.415L12 12.586l2.293-2.291a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-.326.216L12 15Z" fill="#000708" />
            </svg>

            {/* Updated Solutions Dropdown Menu */}
            <div className="dropdown-menu solutions-dropdown">
              <div className="dropdown-columns">
                {/* Solutions Column */}
                <div className="dropdown-column">
                  <h3 className="dropdown-title">SOLUTIONS</h3>
                  <ul className="dropdown-list">
                    <li>
                      <span className="list-number">1</span>
                      <span>Underwriting Studio</span>
                    </li>
                    <li>
                      <span className="list-number">2</span>
                      <span>Document Management and Template Engine</span>
                    </li>
                    <li className="highlighted">
                      <span className="list-number">3</span>
                      <span>Automated Decisioning</span>
                    </li>
                    <li>
                      <span className="list-number">4</span>
                      <span>Covenant Management</span>
                    </li>
                    <li>
                      <span className="list-number">5</span>
                      <span>Support Workflows- Legal, Valuation and more</span>
                    </li>
                    <li>
                      <span className="list-number">6</span>
                      <span>Third Party Integrations</span>
                    </li>
                  </ul>
                </div>

                {/* Asset Classes Column - Updated with Icons */}
                <div className="dropdown-column">
                  <h3 className="dropdown-title">ASSET CLASSES</h3>
                  <ul className="dropdown-list">
                    {assetClasses.map(({ icon, label, highlighted }) => (
                      <li key={label} className={highlighted ? 'highlighted' : ''}>
                        <img src={icon} alt="" className="list-icon" />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Promotional Image Column - Updated */}
                <div className="dropdown-promo">
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

          <div className="menu-item"><span>About Us</span></div>
          <div className="menu-item"><span>Blog</span></div>
          <div className="menu-item"><span>Contact Us</span></div>
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

              // Create original set + duplicate set for seamless loop
              const allLogos = [
                // First set - originals
                ...clientIds.map((id) => (
                  <div key={id} className="client-card">
                    <img
                      src={`https://api.builder.io/api/v1/image/assets/TEMP/${id}?width=226`}
                      alt={`Client ${id}`}
                      loading="lazy"
                    />
                  </div>
                )),
                // Second set - duplicates for seamless loop
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
          {/* Large product cards */}
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

          {/* Wide product cards */}
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

      {/* Multi-Asset Solutions Section */}
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
          {/* Left column - ODD numbers 1-15 */}
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

          {/* Center image */}
          <div className="automation-image">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/76d3b3683c73123e13edd5ff0d219f952b604ba8?width=950"
              alt="Platform Automation"
              loading="lazy"
            />
          </div>

          {/* Right column - EVEN numbers 2-14 + 18 */}
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

        {/* Bottom row - Points 16, 17 below the image */}
        <div className="automation-bottom">
          <div className="bottom-item"><span>16.</span> Assessment</div>
          <div className="bottom-item"><span>17.</span> Bankruptcy Prediction</div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        <img
          className="footer-background"
          src="https://api.builder.io/api/v1/image/assets/TEMP/659332a597b3ea5882a5416c6c6cdecf5f25d08c?width=2880"
          alt=""
        />
        <img
          className="footer-logo"
          src="https://api.builder.io/api/v1/image/assets/TEMP/da0cf940b8f93eebd34a3b67c5a3a109864465c2?width=488"
          alt="AadiSwan Logo"
          loading="lazy"
        />

        <div className="footer-content">
          <div className="presence-section">
            <div className="footer-section-header">Our Presence</div>
            <div className="presence-grid">
              {/* New Delhi */}
              <div className="presence-card">
                <div className="presence-top">
                  <span className="presence-pin" aria-hidden="true">📍</span>
                  <h3 className="presence-city">NEW DELHI</h3>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e085c71a9d961fa2f943124b46d389c577f62acd?width=308"
                  alt="Delhi skyline"
                  className="presence-skyline"
                  loading="lazy"
                />
                <p className="presence-address">
                  105A, 1st Floor, NDM-1, Netaji Subhash Place, Pitampura, Delhi, 110034
                </p>
              </div>

              {/* Lucknow */}
              <div className="presence-card">
                <div className="presence-top">
                  <span className="presence-pin" aria-hidden="true">📍</span>
                  <h3 className="presence-city">LUCKNOW</h3>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8e705f193585327134ef1f7e574a1db4a1e620ba?width=308"
                  alt="Lucknow skyline"
                  className="presence-skyline"
                  loading="lazy"
                />
                <p className="presence-address">
                  Ground and 4th Floor, Yogiraj Tower, C-47, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                </p>
              </div>

              {/* Mumbai */}
              <div className="presence-card">
                <div className="presence-top">
                  <span className="presence-pin" aria-hidden="true">📍</span>
                  <h3 className="presence-city">MUMBAI</h3>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e7427043cd1c375fc36b357e423b369af63d958a?width=308"
                  alt="Mumbai skyline"
                  className="presence-skyline"
                  loading="lazy"
                />
                <p className="presence-address">
                  Modi Business Park, Sai Nagar, Anand Nagar, Thane West, Thane, Maharashtra 400615
                </p>
              </div>

              {/* Abu Dhabi */}
              <div className="presence-card">
                <div className="presence-top">
                  <span className="presence-pin" aria-hidden="true">📍</span>
                  <h3 className="presence-city">ABU DHABI</h3>
                </div>
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c509711ba12eb215bc0e358034e01dd4ae1d9589?width=308"
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

          <div className="useful-links-section">
            <div className="footer-section-header">Useful Links</div>
            <div className="links-list">
              <div className="nav-link active-link">Home</div>
              <div className="nav-link">About Us</div>
              <div className="nav-link">Products</div>
              <div className="nav-link">Solutions</div>
              <div className="nav-link">Careers</div>
              <div className="nav-link">Contact Us</div>
            </div>
          </div>

          <div className="contact-section">
            <div className="footer-section-header">Contact Us</div>
            <div className="contact-info">
              <div className="contact-item">
                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0501 5C16.0268 5.19057 16.9244 5.66826 17.6281 6.37194C18.3318 7.07561 18.8095 7.97326 19.0001 8.95M15.0501 1C17.0793 1.22544 18.9716 2.13417 20.4163 3.57701C21.8609 5.01984 22.7721 6.91101 23.0001 8.94M22.0001 16.92V19.92C22.0012 20.1985 21.9441 20.4742 21.8326 20.7293C21.721 20.9845 21.5574 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.377 21.9119 20.0974 21.9451 19.8201 21.92C16.7429 21.5856 13.7871 20.5341 11.1901 18.85C8.77388 17.3147 6.72539 15.2662 5.19006 12.85C3.50003 10.2412 2.4483 7.27099 2.12006 4.18C2.09507 3.90347 2.12793 3.62476 2.21656 3.36162C2.30518 3.09849 2.44763 2.85669 2.63482 2.65162C2.82202 2.44655 3.04986 2.28271 3.30385 2.17052C3.55783 2.05833 3.8324 2.00026 4.11006 2H7.11006C7.59536 1.99522 8.06585 2.16708 8.43382 2.48353C8.80179 2.79999 9.04213 3.23945 9.11005 3.72C9.23668 4.68007 9.47151 5.62273 9.81006 6.53C9.9446 6.88792 9.97372 7.27691 9.89396 7.65088C9.81421 8.02485 9.62892 8.36811 9.36005 8.64L8.09006 9.91C9.51361 12.4135 11.5865 14.4864 14.0901 15.91L15.3601 14.64C15.6319 14.3711 15.9752 14.1858 16.3492 14.1061C16.7231 14.0263 17.1121 14.0555 17.4701 14.19C18.3773 14.5286 19.32 14.7634 20.2801 14.89C20.7658 14.9585 21.2095 15.2032 21.5266 15.5775C21.8437 15.9518 22.0122 16.4296 22.0001 16.92Z" stroke="#56AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="contact-text">+91-9971777097</div>
              </div>
              <div className="contact-item">
                <svg className="contact-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#56AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="#56AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="contact-text">contactus@aadiswan.com</div>
              </div>
            </div>
            <div className="legal-links">
              <div className="legal-link">Terms of Service</div>
              <div className="legal-link">Privacy Policy</div>
            </div>
            <div className="social-icons">
              <svg className="social-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.125 10C9.16054 10 10 9.16054 10 8.125C10 7.08946 9.16054 6.25 8.125 6.25C7.08946 6.25 6.25 7.08946 6.25 8.125C6.25 9.16054 7.08946 10 8.125 10Z" fill="white"/>
                <path d="M6.25 12.5C6.25 11.8097 6.80965 11.25 7.5 11.25H8.75C9.44035 11.25 10 11.8096 10 12.5V22.5C10 23.1904 9.44035 23.75 8.75 23.75H7.5C6.80965 23.75 6.25 23.1904 6.25 22.5V12.5Z" fill="white"/>
                <path d="M13.75 23.75H15C15.6904 23.75 16.25 23.1904 16.25 22.5V16.875C16.25 15 20 13.75 20 16.25V22.5005C20 23.1909 20.5596 23.75 21.25 23.75H22.5C23.1904 23.75 23.75 23.1904 23.75 22.5V15C23.75 12.5 21.875 11.25 19.375 11.25C16.875 11.25 16.25 13.125 16.25 13.125V12.5C16.25 11.8096 15.6904 11.25 15 11.25H13.75C13.0596 11.25 12.5 11.8097 12.5 12.5V22.5C12.5 23.1904 13.0596 23.75 13.75 23.75Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M25 1.25C27.0711 1.25 28.75 2.92894 28.75 5V25C28.75 27.0711 27.0711 28.75 25 28.75H5C2.92894 28.75 1.25 27.0711 1.25 25V5C1.25 2.92894 2.92894 1.25 5 1.25H25ZM25 3.75C25.6904 3.75 26.25 4.30965 26.25 5V25C26.25 25.6904 25.6904 26.25 25 26.25H18.75V17.4999H21.3453C21.8833 17.4999 22.3609 17.1556 22.5311 16.6451L23.0849 14.9839C23.2872 14.3767 22.8354 13.7499 22.1955 13.7499H18.75V11.2499C18.75 10.6249 19.375 9.9999 20 9.9999H22.5C23.1904 9.9999 23.75 9.44025 23.75 8.7499V7.89241C23.75 7.48864 23.4921 7.12662 23.1016 7.02359C21.4631 6.59119 20 6.59119 20 6.59119C16.875 6.59119 15 8.7499 15 10.6249V13.7499H12.5C11.8097 13.7499 11.25 14.3095 11.25 14.9999V16.2499C11.25 16.9402 11.8096 17.4999 12.5 17.4999H15V26.25H5C4.30965 26.25 3.75 25.6904 3.75 25V5C3.75 4.30965 4.30965 3.75 5 3.75H25Z" fill="white"/>
              </svg>
              <svg className="social-icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 22.5C19.1421 22.5 22.5 19.1421 22.5 15C22.5 10.8579 19.1421 7.5 15 7.5C10.8579 7.5 7.5 10.8579 7.5 15C7.5 19.1421 10.8579 22.5 15 22.5ZM15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z" fill="white"/>
                <path d="M22.5 6.25C21.8096 6.25 21.25 6.80965 21.25 7.5C21.25 8.19035 21.8096 8.75 22.5 8.75C23.1904 8.75 23.75 8.19035 23.75 7.5C23.75 6.80965 23.1904 6.25 22.5 6.25Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M2.06745 5.34508C1.25 6.94941 1.25 9.04961 1.25 13.25V16.75C1.25 20.9504 1.25 23.0506 2.06745 24.6549C2.7865 26.0661 3.93385 27.2135 5.34508 27.9325C6.94941 28.75 9.04961 28.75 13.25 28.75H16.75C20.9504 28.75 23.0506 28.75 24.6549 27.9325C26.0661 27.2135 27.2135 26.0661 27.9325 24.6549C28.75 23.0506 28.75 20.9504 28.75 16.75V13.25C28.75 9.04961 28.75 6.94941 27.9325 5.34508C27.2135 3.93385 26.0661 2.7865 24.6549 2.06745C23.0506 1.25 20.9504 1.25 16.75 1.25H13.25C9.04961 1.25 6.94941 1.25 5.34508 2.06745C3.93385 2.7865 2.7865 3.93385 2.06745 5.34508ZM16.75 3.75H13.25C11.1086 3.75 9.65281 3.75195 8.5276 3.84387C7.43155 3.93342 6.87105 4.09574 6.48005 4.29496C5.53924 4.77434 4.77434 5.53924 4.29496 6.48005C4.09574 6.87105 3.93342 7.43155 3.84387 8.5276C3.75195 9.65281 3.75 11.1086 3.75 13.25V16.75C3.75 18.8915 3.75195 20.3471 3.84387 21.4724C3.93342 22.5685 4.09574 23.129 4.29496 23.52C4.77434 24.4608 5.53924 25.2256 6.48005 25.705C6.87105 25.9042 7.43155 26.0666 8.5276 26.1561C9.65281 26.248 11.1086 26.25 13.25 26.25H16.75C18.8915 26.25 20.3471 26.248 21.4724 26.1561C22.5685 26.0666 23.129 25.9042 23.52 25.705C24.4608 25.2256 25.2256 24.4608 25.705 23.52C25.9042 23.129 26.0666 22.5685 26.1561 21.4724C26.248 20.3471 26.25 18.8915 26.25 16.75V13.25C26.25 11.1086 26.248 9.65281 26.1561 8.5276C26.0666 7.43155 25.9042 6.87105 25.705 6.48005C25.2256 5.53924 24.4608 4.77434 23.52 4.29496C23.129 4.09574 22.5685 3.93342 21.4724 3.84387C20.3471 3.75195 18.8915 3.75 16.75 3.75H13.25C9.04961 3.75 6.94941 3.75 5.34508 2.06745C3.93385 2.7865 2.7865 3.93385 2.06745 5.34508Z" fill="white"/>
              </svg>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="footer-section-header">Contact Us</div>
            <div className="contact-form">
              <div className="input-field">
                <div className="field-label">Name</div>
                <div className="input-wrapper">
                  <input type="text" placeholder="Value" className="form-input" />
                </div>
              </div>
              <div className="input-field">
                <div className="field-label">Email</div>
                <div className="input-wrapper">
                  <input type="email" placeholder="Value" className="form-input" />
                </div>
              </div>
              <div className="textarea-field">
                <div className="field-label">Message</div>
                <div className="textarea-wrapper">
                  <textarea placeholder="Value" className="form-textarea"></textarea>
                  <svg className="drag-icon" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.523 0.353516L0.353516 6.523M6.98064 3.89589L3.8959 6.98063" stroke="#B3B3B3"/>
                  </svg>
                </div>
              </div>
              <div className="button-group">
                <button className="submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-text">
          ©2025 Aadiswan Info Consultants Pvt. Ltd.
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
