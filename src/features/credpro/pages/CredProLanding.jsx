import React from 'react';
import CredProHeroSection from '../components/CredProHeroSection';
import ProductOverview from '../components/ProductOverview';
import InputDesign from '../components/InputDesign';
import ApiEcosystem from '../components/ApiEcosystem';
import IndustriesUseCases from '../components/IndustriesUseCases';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer'; // Added Footer import
import './CredProLanding.css';

const CredProLanding = () => {
  return (
    <div className="credpro-landing">
      <CredProHeroSection />
      <ProductOverview />
      <InputDesign />
      <ApiEcosystem />
      <IndustriesUseCases />
      <FAQSection />
      <Footer /> {/* Added Footer component */}
    </div>
  );
};

export default CredProLanding;
