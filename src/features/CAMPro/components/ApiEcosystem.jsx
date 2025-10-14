import React from 'react';
import BorrowerProfile from '../../../assets/Borrower Profile & Entity Verification.png';
import CashFlowProjection from '../../../assets/Cash Flow & Projection Analyzer.png';
import CreditRating from '../../../assets/Credit Rating & Bureau Data.png';
import DataConnector from '../../../assets/Data Connector API.png';
import ESGCompliance from '../../../assets/ESG & Compliance Assessment.png';
import FinancialStatement from '../../../assets/Financial Statement Analyzer API.png';
import IndustryBenchmarking from '../../../assets/Industry Benchmarking API.png';
import PortfolioInsights from '../../../assets/Portfolio Insights & Monitoring.png';
import RiskScoring from '../../../assets/Risk Scoring & Model Integration.png';
import SentimentAnalysis from '../../../assets/Sentiment Analysis.png';
import '../styles/ApiEcosystem.css';

const ApiEcosystem = () => {
  const apiServices = [
    // Top row
    [
      {
        icon: BorrowerProfile,
        name: 'Borrower Profile & Entity Verification API',
        alt: 'Borrower Profile & Entity Verification API',
      },
      {
        icon: CashFlowProjection,
        name: 'Cash Flow & Projection Analyzer API',
        alt: 'Cash Flow & Projection Analyzer API',
      },
      {
        icon: CreditRating,
        name: 'Credit Rating & Bureau Data API',
        alt: 'Credit Rating & Bureau Data API',
      },
      {
        icon: DataConnector,
        name: 'Data Connector API',
        alt: 'Data Connector API',
      },
      {
        icon: ESGCompliance,
        name: 'ESG & Compliance Assessment API',
        alt: 'ESG & Compliance Assessment API',
      },
    ],

    // Bottom row
    [
      {
        icon: FinancialStatement,
        name: 'Financial Statement Analyzer API',
        alt: 'Financial Statement Analyzer API',
      },
      {
        icon: IndustryBenchmarking,
        name: 'Industry Benchmarking API',
        alt: 'Industry Benchmarking API',
      },
      {
        icon: PortfolioInsights,
        name: 'Portfolio Insights & Monitoring API',
        alt: 'Portfolio Insights & Monitoring API',
      },
      {
        icon: RiskScoring,
        name: 'Risk Scoring & Model Integration API',
        alt: 'Risk Scoring & Model Integration API',
      },
      {
        icon: SentimentAnalysis,
        name: 'Sentiment Analysis API',
        alt: 'Sentiment Analysis API',
      },
    ],
  ];

  return (
    <section className="api-ecosystem-section">
      <div className="api-ecosystem-container">
        <h2 className="api-ecosystem-title">CAMPro API Ecosystem</h2>

        <p className="api-ecosystem-description">
          Seamlessly integrate CAMPro with AI-driven and analytical APIs across risk, compliance, and
          credit assessment — enabling faster, smarter, and consistent appraisal decisions.
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
