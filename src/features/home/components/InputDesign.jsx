import React from 'react';
import './InputDesign.module.css';

const InputDesign = () => {
  return (
    <div className="platform-automation-container">
      <h2 className="platform-automation-title">
        OUR PLATFORM AUTOMATES
      </h2>
      <p className="platform-automation-description">
        CredPro streamlines operations with seamless integration, rule-based
        workflows, and policy-driven automation, ensuring precise control and
        greater efficiency.
      </p>
      <div className="automation-layout">
        <div className="automation-content">
          <div className="automation-column left-column">
            <div className="automation-item">
              <div className="automation-number">01.</div>
              <div className="automation-text">Sourcing and Onboarding</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">03.</div>
              <div className="automation-text">Sanctioning Process</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">05.</div>
              <div className="automation-text">Credit Cheques and Dedupe</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">07.</div>
              <div className="automation-text">Sanction Letter</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">09.</div>
              <div className="automation-text">Anti-Money Laundering</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">11.</div>
              <div className="automation-text">Disbursement Documents</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">13.</div>
              <div className="automation-text">Commercial Credit Bureau</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">15.</div>
              <div className="automation-text">Doc Execution (E-Sign & E-Stamp)</div>
            </div>
          </div>

          <div className="automation-column right-column">
            <div className="automation-item">
              <div className="automation-number">02.</div>
              <div className="automation-text">Credit Underwriting</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">04.</div>
              <div className="automation-text">Legal Workflow</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">06.</div>
              <div className="automation-text">Pre-Disbursement Compliance</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">08.</div>
              <div className="automation-text">Valuation Workflow</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">10.</div>
              <div className="automation-text">Pricing Workflow</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">12.</div>
              <div className="automation-text">Credit Appraisal Note</div>
            </div>
            <div className="automation-item">
              <div className="automation-number">14.</div>
              <div className="automation-text">Covenant Deferral</div>
            </div>
          </div>
        </div>

        <div className="automation-center-image">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/76d3b3683c73123e13edd5ff0d219f952b604ba8?placeholderIfAbsent=true"
            alt="Leading Loan Management Solution"
            className="center-solution-image"
          />
        </div>
      </div>

      <div className="automation-bottom-row">
        <div className="automation-item">
          <div className="automation-number">16.</div>
          <div className="automation-text">Assessment</div>
        </div>
        <div className="automation-item">
          <div className="automation-number">17.</div>
          <div className="automation-text">Bankruptcy Prediction</div>
        </div>
        <div className="automation-item">
          <div className="automation-number">18.</div>
          <div className="automation-text">Environmental & Social Risk Evaluation</div>
        </div>
      </div>
    </div>
  );
};

export default InputDesign;
