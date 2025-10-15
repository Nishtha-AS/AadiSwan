import React, { useState } from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(3); // Fourth FAQ is open by default

const faqs = [
  {
    id: 1,
    question:
      "What is an Early Warning Signal (EWS) framework, and how does EWSPro enable it?",
    answer:
      "EWSPro operationalizes portfolio surveillance end-to-end: multi-source data aggregation (LOS/CBS/LMS/DWH, bureau, GST/MCA, ratings, news), policy-driven signal libraries, configurable thresholds & materiality, automated risk scoring & bucketing (watchlists/SMA-style), alerting & escalation, corrective-action assignment with owners/due dates, and closure/audit trails. Everything is role-controlled, versioned, and fully auditable in one governed workspace."
  },
  {
    id: 2,
    question:
      "How does EWSPro integrate with core systems and third-party services?",
    answer:
      "EWSPro provides REST/SOAP connectors and webhooks to exchange customer/facility, account-conduct, covenant/CS, collateral, and rating data with CBS/LMS/LOS/BI platforms. It plugs into bureau/GST/MCA/news/risk vendors, supports file & API ingests (batch or real-time), and exposes curated data marts for dashboards. Integrations are configured via connectors and policy rules—no heavy custom code."
  },
  {
    id: 3,
    question:
      "Can EWSPro actually reduce slippages and reporting turnaround time?",
    answer:
      "Yes. Standardized signal templates and sector/counterparty models cut noise and improve consistency; automated alerts, SLA timers, and hierarchy escalations accelerate action; corrective-action tracking prevents pendency; and ready-to-use dashboards/MIS (aging, top breaches, RM performance, heatmaps) remove manual compilation—reducing both slippage risk and reporting TAT."
  },
  {
    id: 4,
    question:
      "What makes EWSPro different from spreadsheets or generic analytics tools?",
    answer:
      "EWSPro is purpose-built for proactive credit risk. It combines a governed signal library, rule chaining & versioning, model scorecards, watchlists/SMA logic, breach aging, committee approvals, and end-to-end action workflows—backed by deep banking integrations and a defensible audit trail. Result: consistent policy enforcement, early visibility on stress, and regulator-ready evidence across the portfolio."
  }
];


  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="faq-section-wrapper">
      <h2 className="faq-main-title">FAQs</h2>
      <div className="faq-container">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item ${expandedFAQ === faq.id ? 'expanded' : ''}`}
          >
            <div className="faq-header" onClick={() => toggleFAQ(faq.id)}>
              <div className="faq-question-wrapper">
                <div className="faq-question">{faq.question}</div>
              </div>
              <div className="faq-toggle-button">
                <div className="toggle-circle">
                  <svg
                    className="toggle-arrow"
                    width="14"
                    height="8"
                    viewBox="0 0 14 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={expandedFAQ === faq.id ? "M12 6.5L7 1.5L2 6.5" : "M2 1.5L7 6.5L12 1.5"}
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="faq-divider"></div>
            {expandedFAQ === faq.id && (
              <div className="faq-description">
                <div className="faq-answer">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
