import React from 'react';
import CredProHeroSection from '../components/CredProHeroSection';
import ProductOverview from '../components/ProductOverview';
import InputDesign from '../components/InputDesign';
import ApiEcosystem from '../components/ApiEcosystem';
import IndustriesUseCases from '../components/IndustriesUseCases';
import FAQSection from '../components/FAQSection';
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
    </div>
  );
};

export default CredProLanding;
