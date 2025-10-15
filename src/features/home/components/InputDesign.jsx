import React, { useEffect, useRef } from "react";
import "./InputDesign.css";

const LEFT_ITEMS = [
  "Sourcing and Onboarding",
  "Sanctioning Process",
  "Credit Cheques and Dedupe",
  "Sanction Letter",
  "Anti-Money Laundering",
  "Disbursement Documents",
  "Commercial Credit Bureau",
  "Doc Execution (E-Sign & E-Stamp)",
  "Assessment",
];

const RIGHT_ITEMS = [
  "Credit Underwriting",
  "Legal Workflow",
  "Pre-Disbursement Compliance",
  "Valuation Workflow",
  "Pricing Workflow",
  "Credit Appraisal Note",
  "Covenant Deferral",
  "Bankruptcy Prediction",
  "Environmental & Social Risk Evaluation",
];

const LaptopPhoneImg =
  "https://api.builder.io/api/v1/image/assets/TEMP/76d3b3683c73123e13edd5ff0d219f952b604ba8?width=1400";

export default function InputDesign() {
  const rootRef = useRef(null);

  // fade/slide reveal
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.15 }
    );
    root.querySelectorAll(".pa-card, .pa-media").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="pa-section" ref={rootRef}>
      <div className="pa-shell">
        <h2 className="pa-title">OUR PLATFORM AUTOMATES</h2>
        <p className="pa-subtitle">
          CredPro streamlines operations with seamless integration, rule-based
          workflows, and policy-driven automation, ensuring precise control and
          greater efficiency.
        </p>

        {/* 3-column grid on desktop, stacked on mobile */}
        <div className="pa-grid">
          {/* Left column */}
          <ul className="pa-list" aria-label="Platform flows – left">
            {LEFT_ITEMS.map((label, i) => (
              <li className="pa-card" key={label} style={{ transitionDelay: `${i * 40}ms` }}>
                <span className="pa-badge">{String(i + 1).padStart(2, "0")}.</span>
                <span className="pa-label">{label}</span>
              </li>
            ))}
          </ul>

          {/* Center media */}
          <div className="pa-media" aria-hidden="true">
            <img className="pa-laptop" src={LaptopPhoneImg} alt="" />
          </div>

          {/* Right column */}
          <ul className="pa-list" aria-label="Platform flows – right">
            {RIGHT_ITEMS.map((label, i) => {
              // numbers continue from 10..18
              const n = i + 10;
              return (
                <li
                  className="pa-card"
                  key={label}
                  style={{ transitionDelay: `${i * 40 + 80}ms` }}
                >
                  <span className="pa-badge">{String(n).padStart(2, "0")}.</span>
                  <span className="pa-label">{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
