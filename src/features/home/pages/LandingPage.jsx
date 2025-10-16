// src/features/home/pages/LandingPage.jsx
import React from 'react';

// Centralized header & footer
import SiteNavigation from '../../../components/SiteNavigation';
import Footer from '../../../components/Footer';

// Home sections
import StatisticsSection from '../components/StatisticsSection';
import ConsultancySection from '../components/ConsultancySection';
import CustomerOnboarding1 from '../components/CustomerOnboarding1';
import ProductsSection from '../components/ProductsSection';
import InputDesign from '../components/InputDesign';
import MultiAssetSolutions from '../components/MultiAssetSolutions';

// Stylesheet
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Background Hero Image */}
      <img
        className="hero-background"
        src="https://api.builder.io/api/v1/image/assets/TEMP/6d9d205db9aec208c9dcf74e6a6b4a91731efbb6?width=2880"
        alt=""
      />

      {/* Centralized Navigation */}
      <SiteNavigation overlay activeLabel="Home" />

      {/* HERO */}
      {/* NOTE: kept the same elements, just added animation delays via CSS variables */}
      <div className="hero-content">
        <h1 className="hero-title a-fade-up" style={{ '--d': '120ms' }}>
          TRANSFORM YOUR LENDING AND MONITORING PROCESS
        </h1>
        <p className="hero-description a-fade-up" style={{ '--d': '260ms' }}>
          A new paradigm of digital-led technologies and connected experiences awaits your
          financial operations with AadiSwan. Embrace our advanced, platform-led solutions to
          accelerate and adapt to the evolving digital era, transforming your business processes
          for optimal efficiency and precision.
        </p>
        <div className="hero-buttons a-fade-up" style={{ '--d': '420ms' }}>
          <button className="book-demo-btn">Book A Demo</button>
          <button className="call-us-btn">Call Us</button>
        </div>
      </div>

      {/* Hero Side Image */}
      <img
        className="hero-side-image a-fade-up a-float"
        style={{ '--d': '380ms' }}
        src="https://api.builder.io/api/v1/image/assets/TEMP/b5ce5c673af9fe6d1ea145788a66694305d47e00?width=1172"
        alt="Hero Art"
      />

      {/* OUR CLIENTS */}
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
                // duplicate for seamless marquee loop
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

      {/* Customer Origination / Onboarding */}
      <section className="customer-onboarding-section">
        <CustomerOnboarding1 />
      </section>

      {/* Products */}
      <ProductsSection />

      {/* Consultancy */}
      <section className="consultancy-section-wrapper">
        <ConsultancySection />
      </section>

      {/* Multi-Asset Solutions */}
      <MultiAssetSolutions />

      {/* Statistics */}
      <section className="statistics-section-wrapper">
        <StatisticsSection />
      </section>

      {/* Platform Automation / Contact */}
      <section className="platform-automation-section" id="contact">
        <InputDesign />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
