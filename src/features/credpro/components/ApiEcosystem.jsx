import React from 'react';
import '../styles/ApiEcosystem.css';

const ApiEcosystem = () => {
  const apiServices = [
    // Top row
    [
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/8744238d5fd48d2f08700ea0e8653d40a4515aa7?width=160",
        name: "KYC API",
        alt: "KYC API"
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/a6dd26792291a2b43495a99969c8769ca8c080bd?width=160",
        name: "Credit Bureau API",
        alt: "Credit Bureau API"
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/2a8123e8a16ad24ec81fe2481ab1eb45c22442ed?width=160",
        name: "AML/Blacklist API",
        alt: "AML/Blacklist API"
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/708e7ce2c80cdab58a9b6e575ec74dba25f8fa2b?width=208",
        name: "Fraud Check & Dedupe API",
        alt: "Fraud Check & Dedupe API"
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/38139cb094b1c94e53d3c8d8adaad32f48c6fed1?width=208",
        name: "MCA API",
        alt: "MCA API"
      }
    ],
    // Bottom row
    [
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/a0d0072f02f8b8dca51d500c3548caf594c44e41?width=160",
        name: "Bank Statement Analyzer API",
        alt: "Bank Statement Analyzer API"
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/23d8887a9cd6a920bd4b87aca7effc8f70ca4332?width=160",
        name: "GST/ITR API",
        alt: "GST/ITR API"
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/5a17049d8e9b4f9b8bcce36da3804a9096022f1e?width=160",
        name: "E-Sign & E-Stamp API",
        alt: "E-Sign & E-Stamp API"
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/a6dd26792291a2b43495a99969c8769ca8c080bd?width=160",
        name: "CBS Integration API",
        alt: "CBS Integration API"
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/a6dd26792291a2b43495a99969c8769ca8c080bd?width=160",
        name: "Early Warning Signals API",
        alt: "Early Warning Signals API"
      }
    ]
  ];

  return (
    <section className="api-ecosystem-section">
      <div className="api-ecosystem-container">
        <h2 className="api-ecosystem-title">CredPro API Ecosystem</h2>
        
        <p className="api-ecosystem-description">
          Seamlessly integrate with 100+ trusted APIs across compliance, risk, and credit workflows — enabling faster, smarter, and automated lending decisions.
        </p>
        
        <div className="api-grid">
          {apiServices.map((row, rowIndex) => (
            <div key={rowIndex} className="api-grid-row">
              {row.map((service, serviceIndex) => (
                <div key={serviceIndex} className="api-service-card">
                  <div className="api-service-icon">
                    <img src={service.icon} alt={service.alt} />
                  </div>
                  <h3 className="api-service-name">{service.name}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiEcosystem;
