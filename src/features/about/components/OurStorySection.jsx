import React from 'react';
import './OurStorySection.css';

const OurStorySection = () => {
  return (
    <div className="our-story-section">
      <img
        className="our-story-background"
        src="https://api.builder.io/api/v1/image/assets/TEMP/c8715f6da8434a3bcb5a05c8b560d9eea0d99633?width=2880"
        alt=""
      />
      
      <div className="our-story-content">
        <h2 className="our-story-title">OUR STORY</h2>
        
        <p className="our-story-description">
          Founded in 2014, Aadiswan Info Consultants Pvt. Ltd. (CIN: U72900UP2014PTC064158) has grown into a pioneering force in financial technology. Our journey began with a clear vision: to transform the financial industry by delivering innovative, reliable, and efficient software solutions that address the complex needs of modern banking and finance.
          <br /><br />
          At AadiSwan, we specialize in building advanced platforms that streamline underwriting, covenant management, document workflows, pricing, valuation, and third-party integrations. Our flagship product, CredPro, is more than just software — it's a complete ecosystem designed to enhance decision-making, ensure compliance, and accelerate credit lifecycle automation.
          <br /><br />
          What sets us apart is our unique DNA: we are seasoned underwriters turned technologists. This rare blend of financial expertise and technology allows us to create solutions that are both practically relevant and technologically cutting-edge, empowering institutions to operate with accuracy, speed, and confidence.
          <br />
          Over the years, we have successfully implemented our solutions across India and the Middle East, enabling banks, NBFCs, and cooperative lenders to achieve efficiency while staying regulatory compliant. As we look ahead, our mission is clear — to expand globally and continue leading the seamless integration of technology and finance.
        </p>
        
        <div className="mission-vision-container">
          <div className="mission-card">
            <h3 className="card-title">Our Mission</h3>
            <p className="card-description">
              To empower financial institutions with intelligent, reliable, and policy-driven credit automation platforms that streamline processes, reduce risks, and accelerate decision-making — ensuring faster, compliant, and customer-centric lending experiences.
            </p>
          </div>
          
          <div className="vision-card">
            <h3 className="card-title">Our Vision</h3>
            <p className="card-description">
              To be the global leader in digital credit lifecycle automation, redefining how banks, NBFCs, and financial institutions leverage technology and domain expertise to build a more efficient, transparent, and inclusive financial ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
