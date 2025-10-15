import React from 'react';
import covenantKpiMonitoring from '../../../assets/Covenant & KPI Monitoring.png';
import disclosureAuditTrail from '../../../assets/Disclosure & Audit Trail.png';
import stakeholderGrievance from '../../../assets/Stakeholder & Grievance.png';
import accountConductIncidentFlags from '../../../assets/Account Conduct & Incident Flags.png';
import actionPlanAssignmentTracking from '../../../assets/Action Plan Assignment & Tracking.png';
import breachComplianceRegister from '../../../assets/Breach & Compliance Register.png';
import ewsSignal from '../../../assets/EWS Signal.png';
import externalDataChecks from '../../../assets/External Data Checks.png';
import riskScoringBucketing from '../../../assets/Risk Scoring & Bucketing.png';
import sectorCounterpartyWatchlists from '../../../assets/Sector Counterparty Watchlists.png';

import '../styles/ApiEcosystem.css';

const ApiEcosystem = () => {
 const apiServices = [
  // Top row (5)
  [
    {
      icon: breachComplianceRegister,
      name: "Breach & Compliance Register",
      alt: "Breach & Compliance Register"
    },
    {
      icon: covenantKpiMonitoring,
      name: "Covenant & KPI Monitoring",
      alt: "Covenant & KPI Monitoring"
    },
    {
      icon: disclosureAuditTrail,
      name: "Disclosure & Audit Trail",
      alt: "Disclosure & Audit Trail"
    },
    {
      icon: ewsSignal,
      name: "EWS Signal",
      alt: "EWS Signal"
    },
    {
      icon: actionPlanAssignmentTracking,
      name: "Action Plan Assignment & Tracking",
      alt: "Action Plan Assignment & Tracking"
    }
  ],
  // Bottom row (5)
  [
    {
      icon: sectorCounterpartyWatchlists,
      name: "Sector / Counterparty Watchlists",
      alt: "Sector / Counterparty Watchlists"
    },
    {
      icon: riskScoringBucketing,
      name: "Risk Scoring & Bucketing",
      alt: "Risk Scoring & Bucketing"
    },
    {
      icon: accountConductIncidentFlags,
      name: "Account Conduct & Incident Flags",
      alt: "Account Conduct & Incident Flags"
    },
    {
      icon: stakeholderGrievance,
      name: "Stakeholder & Escalations",
      alt: "Stakeholder & Escalations"
    },
    {
      icon: externalDataChecks,
      name: "External Data Checks (Bureau / GST / MCA)",
      alt: "External Data Checks (Bureau / GST / MCA)"
    }
  ]
];

  return (
    <section className="api-ecosystem-section">
      <div className="api-ecosystem-container">
        <h2 className="api-ecosystem-title">EWSPro API Ecosystem</h2>
        
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