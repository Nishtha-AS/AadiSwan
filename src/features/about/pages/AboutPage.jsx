// src/features/about/pages/AboutPage.jsx
import React from 'react';

import AboutHeroSection from '../components/AboutHeroSection';
import OurStorySection from '../components/OurStorySection';
import OurValuesSection from '../components/OurValuesSection';
import LeadershipSection from '../components/LeadershipSection';
import OurPresenceSection from '../components/OurPresenceSection';

import Footer from '../../../components/Footer';
import SiteNavigation from '../../../components/SiteNavigation';

import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Order: Home | Products ▼ | Solutions ▼ | About Us | Blog | Contact Us */}
      <SiteNavigation
        variant="credpro"
        overlay={true}
        activeLabel="About Us"
        leadingItems={[
          { label: "Home", href: "/" }
        ]}
        trailingItems={[
          { label: "About Us", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Contact Us", href: "/contact" }
        ]}
      />

      <AboutHeroSection />
      <OurStorySection />
      <OurValuesSection />
      <LeadershipSection />
      <OurPresenceSection />

      <Footer />
    </div>
  );
};

export default AboutPage;
