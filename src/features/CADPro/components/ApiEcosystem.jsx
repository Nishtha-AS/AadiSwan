import React from 'react';
import DocumentTemplate from '../../../assets/Document Template & DMS API.png';
import enach from '../../../assets/eNACH.png'; 
import payouts from '../../../assets/Disbursement Payouts.png';
import validation from '../../../assets/Account Validation.png';
import collateral from '../../../assets/Collateral .png';
import valuation from '../../../assets/Valuation Vendor.png';
import legal from '../../../assets/Legal.png';
import insurance from '../../../assets/Insurance.png';
import integration from '../../../assets/Integration.png';
import '../styles/ApiEcosystem.css';

const ApiEcosystem = () => {
  const apiServices = [
    // Top row
    [
      {
        icon: DocumentTemplate,
        name: "Document Template & DMS API",
        alt: "Document Template & DMS API"
      },
      {
        icon: enach,
        name: "eNACH / eMandate API",
        alt: "eNACH / eMandate API"
      },
      {
        icon: payouts,
        name: "Disbursement Payouts",
        alt: "Disbursement Payouts"
      },
      {
        icon: validation,
        name: "Account Validation",
        alt: "Account Validation (Penny Drop / VPA)"
      },
      {
        icon: collateral,
        name: "Collateral & CERSAI Registration",
        alt: "Collateral & CERSAI Registration"
      }
    ],
    // Bottom row
    [
      {
        icon: valuation,
        name: "Valuation Vendor API",
        alt: "Valuation Vendor API"
      },
      {
        icon: legal,
        name: "Legal & Title Search",
        alt: "Legal & Title Search"
      },
      {
        icon: "https://api.builder.io/api/v1/image/assets/TEMP/5a17049d8e9b4f9b8bcce36da3804a9096022f1e?width=160",
        name: "E-Sign & E-Stamp API",
        alt: "E-Sign & E-Stamp API"
      },
      {
        icon: insurance,
        name: "Insurance Issuance",
        alt: "Insurance Issuance"
      },
      {
        icon: integration,
        name: "CBS / LMS Integration",
        alt: "CBS / LMS Integration"
      }
    ]
  ];

  return (
    <section className="api-ecosystem-section">
      <div className="api-ecosystem-container">
        <h2 className="api-ecosystem-title">CADPro API Ecosystem</h2>
        
        <p className="api-ecosystem-description">
          Seamlessly integrate with 100+ trusted services across documentation, e-Sign/e-Stamp, disbursements, account validation, eNACH mandates, collateral & CERSAI, and CBS/LMS—enabling faster, consistent, and fully auditable credit administration.
        </p>
        
        <div className="api-grid">
          {apiServices.map((row, rowIndex) => (
            <div key={rowIndex} className="api-grid-row">
              {row.map((service, serviceIndex) => (
                <div key={serviceIndex} className="api-service-card">
                  <div className="api-service-icon">
                    {/* The src prop correctly uses the imported variable which is now a valid path string */}
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