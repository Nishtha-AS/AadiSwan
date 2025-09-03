import React from 'react';
import ContactHeroSection from '../components/ContactHeroSection';
import ContactFormsSection from '../components/ContactFormsSection';
import OurPresenceSection from '../components/OurPresenceSection';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <ContactHeroSection />
      <ContactFormsSection />
      <OurPresenceSection />
    </div>
  );
};

export default ContactPage;
