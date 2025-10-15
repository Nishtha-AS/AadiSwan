import React, { useState } from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(3); // Fourth FAQ is open by default

  const faqs = [
  {
    id: 1,
    question: "What is end-to-end credit administration, and how does CADPro enable it?",
    answer:
      "CADPro covers the entire post-sanction lifecycle: sanction letter generation, document templatization, covenant (CP/CS) scheduling, collateral & CERSAI registration, controlled disbursements (maker–checker), account/beneficiary validation, and ongoing compliance tracking. All tasks are policy-driven, checklist-based, and fully auditable, giving operations teams a single, governed workspace."
  },
  {
    id: 2,
    question: "How does CADPro integrate with Core Banking Systems (CBS) and third-party services?",
    answer:
      "CADPro provides REST/SOAP adapters and event/webhook support to exchange limits, collateral, account details, postings, and status updates with CBS/LMS. It also connects to eSign/eStamp, eNACH mandates, KYC/Bureau, GST/ITR, Bank Statement Analyzer, valuation/legal vendors, and CERSAI. Integrations are configurable via connectors and policy rules, minimizing bespoke code."
  },
  {
    id: 3,
    question: "Can CADPro help reduce turnaround time (TAT) for disbursement and post-sanction compliance?",
    answer:
      "Yes. Pre-built templates, auto-assembly of sanction documents, checklist-driven CP/CS closures, and rule-based maker–checker reduce rework and hand-offs. Account validation (penny-drop/VPA), payout rails (IMPS/NEFT/RTGS/UPI), and automated reminders for covenants cut manual follow-ups—bringing down disbursement and compliance TAT significantly."
  },
  {
    id: 4,
    question: "What makes CADPro different from traditional post-sanction workflows?",
    answer:
      "Unlike email/Excel workflows and generic DMS tools, CADPro is purpose-built for credit administration. It combines a version-controlled template engine, covenant scheduler with alerts/escalations, collateral & CERSAI handling, disbursement controls, and deep CBS/API integrations—backed by full audit trails and role-based access. The result is consistent policy enforcement, faster operations, and clean regulatory auditability."
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
