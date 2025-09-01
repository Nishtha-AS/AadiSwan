import React, { useState } from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(3); // Fourth FAQ is open by default

  const faqs = [
    {
      id: 1,
      question: "What is end-to-end credit lifecycle automation, and how does CredPro enable it?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 2,
      question: "How does CredPro integrate with existing Core Banking Systems (CBS) and third-party APIs?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      question: "Can CredPro help reduce turnaround time (TAT) for loan sanctioning and disbursement?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      id: 4,
      question: "What makes CredPro different from traditional lending workflow solutions?",
      answer: "CredPro is different from traditional lending workflow solutions because it goes beyond basic digitization. While legacy systems rely on manual checks and siloed processes, CredPro delivers a fully automated, policy-driven credit lifecycle. It integrates with 100+ APIs (credit bureaus, KYC, AML, valuation, compliance), ensuring real-time data validation and faster decision-making. Its AI-powered monitoring engine enables continuous covenant tracking, early warning signals, and ESG compliance—features missing in traditional solutions. This means lenders get faster turnaround times, reduced risk, and a scalable, future-ready platform tailored for banks, NBFCs, and MSME lenders."
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
