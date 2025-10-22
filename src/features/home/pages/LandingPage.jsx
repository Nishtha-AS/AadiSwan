// src/features/home/pages/LandingPage.jsx
import React from 'react';

// Centralized header & footer
import SiteNavigation from '../../../components/SiteNavigation';
import Footer from '../../../components/Footer';
import herogif from '../../../assets/Home Page hero.gif';

// Home sections
import StatisticsSection from '../components/StatisticsSection';
import ConsultancySection from '../components/ConsultancySection';
import CustomerOnboarding1 from '../components/CustomerOnboarding1';
import ProductsSection from '../components/ProductsSection';
import InputDesign from '../components/InputDesign';
import MultiAssetSolutions from '../components/MultiAssetSolutions';

// Icons (PNG)
import sheildicon from '../../../assets/Shield.png';
import shieldlockicon from '../../../assets/Shield Lock.png';
import handshakeicon from '../../../assets/Hand Shake.png';
import sustainabilityicon from '../../../assets/Sustainability 2.png';

// Stylesheet
import './LandingPage.css';

const HeroCard = ({ src, alt, title, subtitle }) => (
  <div className="hero-card a-stagger">
    <div className="hero-card__icon">
      <img src={src} alt={alt} loading="lazy" />
    </div>
    <div className="hero-card__txt">
      <div className="hero-card__title">{title}</div>
      <div className="hero-card__sub">{subtitle}</div>
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Background (GIF) — darker via filter only (no overlay) */}
      <img className="hero-background" src={herogif} alt="" aria-hidden="true" />

      {/* Centralized Navigation */}
      <SiteNavigation overlay activeLabel="Home" />

      {/* HERO */}
      <section className="hero" aria-label="Intro">
        <div className="hero-shell">
          <h1 className="hero-title a-fade-up" style={{ '--d': '120ms' }}>
            TRANSFORM YOUR LENDING AND<br />MONITORING PROCESS
          </h1>

          <p className="hero-sub a-fade-up" style={{ '--d': '240ms' }}>
            Reimagine credit and risk operations with connected, intelligent fintech solutions
            built to automate decisions, enhance compliance, and deliver speed with precision.
          </p>

          <div className="hero-ctas a-fade-up" style={{ '--d': '360ms' }}>
            <a className="btn-primary" href="#contact" aria-label="Book a demo">
              Book a Demo
            </a>
            <a
              className="btn-ghost"
              href="tel:+919971777097"
              aria-label="Call AadiSwan"
              rel="nofollow"
            >
              Call Us
            </a>
          </div>

          {/* Feature cards row */}
          <div className="hero-cards a-fade-up" style={{ '--d': '480ms' }}>
            <HeroCard
              src={sheildicon}
              alt="Regulatory compliance"
              title="Regulatory"
              subtitle="Compliance"
            />
            <HeroCard
              src={shieldlockicon}
              alt="Data security and privacy"
              title="Data Security"
              subtitle="and Privacy"
            />
            <HeroCard
              src={handshakeicon}
              alt="Bank-grade reliability"
              title="Bank-grade"
              subtitle="Reliability"
            />
            <HeroCard
              src={sustainabilityicon}
              alt="Sustainability and ESG"
              title="Sustainability"
              subtitle="and ESG"
            />
          </div>
        </div>
      </section>

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
