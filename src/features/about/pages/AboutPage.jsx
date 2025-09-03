import React, { useState } from 'react';
import AboutHeroSection from '../components/AboutHeroSection';
import AboutNavigation from '../components/AboutNavigation';
import OurStorySection from '../components/OurStorySection';
import OurValuesSection from '../components/OurValuesSection';
import LeadershipSection from '../components/LeadershipSection';
import OurPresenceSection from '../components/OurPresenceSection';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <AboutNavigation />
      <AboutHeroSection />
      <OurStorySection />
      <OurValuesSection />
      <LeadershipSection />
      <OurPresenceSection />
    </div>
  );
};

export default AboutPage;
