import React, { useState } from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(3); // Fourth FAQ is open by default

 const faqs = [
  {
  id: 1,
  question:
    "What is Credit Appraisal Memo automation, and how does CAMPro enable it?",
  answer:
    "CAMPro automates the preparation of Credit Appraisal Memos by combining financial data, industry insights, and AI-driven analytics into a unified digital workspace. It eliminates manual spreadsheet work by automatically extracting ratios, assessing cash flows, and mapping benchmarks—ensuring consistent, transparent, and faster credit assessments across all borrower segments."
},
{
  id: 2,
  question:
    "How does CAMPro integrate with data sources and existing credit systems?",
  answer:
    "CAMPro connects seamlessly with internal and third-party systems through APIs for financial statements, credit ratings, industry data, sentiment scores, and borrower profiles. It can interface with Underwriting, EWS, and CAD modules, allowing continuous information exchange and unified risk evaluation across the credit lifecycle."
},
{
  id: 3,
  question:
    "Can CAMPro help improve accuracy and turnaround time in credit assessments?",
  answer:
    "Yes. CAMPro automates ratio computation, peer comparison, and qualitative evaluation—cutting manual analysis effort drastically. Predefined templates, auto-prefill from data connectors, and rule-based validation reduce errors, enhance transparency, and significantly shorten the time required for memo preparation and approval."
},
{
  id: 4,
  question:
    "What differentiates CAMPro from traditional credit appraisal tools?",
  answer:
    "Unlike static templates or Excel-based models, CAMPro is AI-powered and insight-driven. It merges quantitative analysis with qualitative sentiment evaluation, integrates live industry and rating data, and standardizes memo generation through configurable templates. This leads to objective appraisals, auditable decisions, and institution-wide consistency in credit risk evaluation."
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
