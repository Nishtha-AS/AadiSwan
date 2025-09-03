// src/features/contact/pages/ContactPage.jsx  ✅ KEEP THIS ONE
import React from 'react';
import SiteNavigation from '../../../components/SiteNavigation';
import ContactHeroSection from '../components/ContactHeroSection';
import ContactFormsSection from '../components/ContactFormsSection';
import OurPresenceSection from '../components/OurPresenceSection';
import Footer from '../../../components/Footer';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <SiteNavigation
        overlay={true}
        /* Center row links BEFORE the dropdown triggers (Figma order) */
        leadingItems={[
          { label: 'Home', href: '/' },
        ]}
        /* Optional right-side text links AFTER the dropdown triggers */
        trailingItems={[
          { label: 'About Us', href: '/about' },
          { label: 'Blog', href: '/blog' },
          { label: 'Contact Us', href: '/contact' },
        ]}
        activeLabel="Contact Us"
      />
      <ContactHeroSection />
      <ContactFormsSection />
      <OurPresenceSection />
      <Footer />
    </div>
  );
}
