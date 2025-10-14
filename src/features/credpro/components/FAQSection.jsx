import React, { useState } from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(3); // Fourth FAQ is open by default

 const faqs = [
  {
    id: 1,
    question:
      "What is end-to-end credit lifecycle automation, and how does CredPro enable it?",
    answer:
      "CredPro digitizes the complete lending journey—from lead capture and onboarding to underwriting, sanction, disbursement, and ongoing monitoring. It uses policy-driven workflows, checklists, and maker–checker controls to enforce credit policy, capture evidence, and maintain a full audit trail. Integrated data pulls (KYC, bureau, GST/ITR, bank statements, AML, valuation) reduce manual effort and improve decision quality."
  },
  {
    id: 2,
    question:
      "How does CredPro integrate with existing Core Banking Systems (CBS) and third-party APIs?",
    answer:
      "CredPro provides REST/SOAP adapters and event/webhook support to exchange customers, accounts, limits, collateral, postings, and status updates with CBS/LMS. Out of the box it connects to 100+ services—KYC, credit bureau, AML/blacklist, MCA, GST/ITR, bank-statement analyzers, e-Sign/e-Stamp, eNACH/mandates, valuation/legal vendors—through a configurable connector layer, minimizing bespoke development."
  },
  {
    id: 3,
    question:
      "Can CredPro help reduce turnaround time (TAT) for loan sanctioning and disbursement?",
    answer:
      "Yes. Pre-built journeys, auto-prefill from APIs, rule-based underwriting, and automated document assembly cut rework and handoffs. Maker–checker thresholds, smart tasking, and straight-through checks (account validation, mandate creation, payout rails) compress decision and disbursement TAT while improving accuracy and compliance."
  },
  {
    id: 4,
    question:
      "What makes CredPro different from traditional lending workflow solutions?",
    answer:
      "Traditional tools digitize forms but leave policy enforcement and data gathering manual. CredPro is policy-first: it embeds rules, evidence capture, and covenants into the workflow; orchestrates 100+ integrations for real-time validation; and continuously monitors obligations with alerts and escalations. The result is consistent decisions, lower operational risk, faster throughput, and clean regulatory auditability across banks, NBFCs, and MSME lenders."
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
