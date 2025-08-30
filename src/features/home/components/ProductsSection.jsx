import React from 'react';
import './ProductsSection.css';

// Import your product logos
import credProLogo from '../../../assets/CredPro_logo.png';
import cadProLogo from '../../../assets/CADPro_logo.png';
import camProLogo from '../../../assets/CAMPro_logo.png';
import esmsProLogo from '../../../assets/ESMSPro_logo.png';
import ewsProLogo from '../../../assets/EWSPro_logo.png';

const ProductsSection = () => {
  return (
    <section className="our-products-section">
      <h2 className="section-title large">OUR PRODUCTS</h2>
      <p className="section-description">
        ADS offers tailored solutions for a variety of asset classes, ensuring comprehensive management and optimization. Our multi-asset approach guarantees efficiency and precision across all financial portfolios.
      </p>
      
      <div className="products-container">
        {/* Top Row - 3 Products */}
        <div className="products-row-top">
          <div className="product-card">
            <img src={credProLogo} alt="AS CredPro" className="product-logo" />
            <p className="product-description">
              AadiSwan's flagship lending suite, covering origination, underwriting, credit administration, covenant management, and valuation/legal workflows. Using self-service BRE, it automates end-to-end processes, ensuring precise evaluations, compliance, and faster turnaround times.
            </p>
            <button className="more-btn">More →</button>
          </div>
          
          <div className="product-card">
            <img src={cadProLogo} alt="AS CADPro" className="product-logo" />
            <p className="product-description">
              CADPro streamlines credit administration with automated document templatization, covenant scheduling & tracking, disbursement workflows, pre/post disbursement compliance—ensuring consistency & transparency while reducing manual intervention.
            </p>
            <button className="more-btn">More →</button>
          </div>
          
          <div className="product-card">
            <img src={camProLogo} alt="AS CAMPro" className="product-logo" />
            <p className="product-description">
              CAMPro is an AI- and ML-powered engine that automates credit appraisals by generating analyst-style memos, projecting financials, benchmarking peers, and delivering sentiment analysis with forward-looking metrics for faster, consistent lending decisions.
            </p>
            <button className="more-btn">More →</button>
          </div>
        </div>
        
        {/* Bottom Row - 2 Products */}
        <div className="products-row-bottom">
          <div className="product-card">
            <img src={esmsProLogo} alt="AS ESMSPro" className="product-logo" />
            <p className="product-description">
              ESMSPro facilitates environmental and social risk management by integrating ESG criteria into lending processes, offering comprehensive assessments, monitoring, and reporting to support sustainable and responsible financing practices.
            </p>
            <button className="more-btn">More →</button>
          </div>
          
          <div className="product-card">
            <img src={ewsProLogo} alt="AS EWSPro" className="product-logo" />
            <p className="product-description">
              EWSPro provides early warning signals by monitoring behavioural financial and non-financial indicators, enabling proactive risk management and timely alerts to mitigate potential credit risks and reduce defaults.
            </p>
            <button className="more-btn">More →</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
