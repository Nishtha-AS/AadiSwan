import React from 'react';
import './ProductsSection.css';

const ProductsSection = () => {
  return (
    <div className="products-section">
      <div className="products-container">
        <div className="products-row">
          <div className="product-column">
            <div className="product-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/32b5bcd555a9f8f1aa91784782017253a0c4bf00?placeholderIfAbsent=true"
                alt="AadiSwan Logo"
                className="product-logo"
              />
              <div className="product-description">
                AadiSwan's flagship lending suite, covering origination,
                underwriting, credit administration, covenant management, and
                valuation/legal workflows. Using self service BRE, It automates
                end-to-end processes, ensuring precise evaluations, compliance,
                and faster turnaround times.
              </div>
              <div className="product-button">
                <div>More →</div>
              </div>
            </div>
          </div>
          
          <div className="product-column">
            <div className="product-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/698e2c34a3614f30cefd902068b3ce85f8bf95b1?placeholderIfAbsent=true"
                alt="CADPro Logo"
                className="product-logo"
              />
              <div className="product-description">
                CADPro streamlines credit administration with automated document
                templatization management, covenant scheduling & tracking,
                disbursement workflows, pre/post disbursement compliance
                ensuring consistency & transparency in processes while reducing
                manual intervention.
              </div>
              <div className="product-button">
                <div>More →</div>
              </div>
            </div>
          </div>
          
          <div className="product-column">
            <div className="product-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/56221730c6804a8322774c861afcd8249bd8153b?placeholderIfAbsent=true"
                alt="CAMPro Logo"
                className="product-logo"
              />
              <div className="product-description">
                CAMPro is an AI- and ML-powered engine that automates credit
                appraisals by generating analyst-style memos, projecting
                financials, benchmarking peers, and delivering sentiment
                analysis with forward-looking metrics enabling faster,
                consistent, and insight-driven lending decisions across
                business, financial, and management domains.
              </div>
              <div className="product-button">
                <div>More →</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="products-row-bottom">
          <div className="product-column-wide">
            <div className="product-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8f7432175e5c649bba6828b323af6f6c7f4ba0a4?placeholderIfAbsent=true"
                alt="ESMSPro Logo"
                className="product-logo"
              />
              <div className="product-description">
                ESMSPro facilitates environmental and social risk management by
                integrating ESG criteria into lending processes, offering
                comprehensive assessments, monitoring, and reporting to support
                sustainable and responsible financing practices.
              </div>
              <div className="product-button">
                <div>More →</div>
              </div>
            </div>
          </div>
          
          <div className="product-column-wide">
            <div className="product-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a823da0f4adf90c08d2370342d795d4fa0aedf92?placeholderIfAbsent=true"
                alt="EWSPro Logo"
                className="product-logo"
              />
              <div className="product-description">
                EWSPro provides early warning signal solution by monitoring
                behavioural financial and non-financial indicators, enabling
                proactive risk management, timely alerts, and better
                decision-making to mitigate potential credit risks and reduce
                defaults.
              </div>
              <div className="product-button">
                <div>More →</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
