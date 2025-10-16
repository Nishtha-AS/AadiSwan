import React, { useEffect, useRef } from "react";
import "./InputDesign.css";

/**
 * Full ordered list (01 → 18).
 * We’ll render 01–09 on the left, 10–18 on the right,
 * with compact rows so there’s no empty gap around the central image.
 */
const ITEMS = [
  "Sourcing and Onboarding",                 // 01
  "Credit Underwriting",                     // 02
  "Sanctioning Process",                     // 03
  "Legal Workflow",                          // 04
  "Credit Cheques and Dedupe",               // 05
  "Pre-Disbursement Compliance",             // 06
  "Sanction Letter",                         // 07
  "Valuation Workflow",                      // 08
  "Anti-Money Laundering",                   // 09
  "Pricing Workflow",                        // 10
  "Disbursement Documents",                  // 11
  "Credit Appraisal Note",                   // 12
  "Commercial Credit Bureau",                // 13
  "Covenant Deferral",                       // 14
  "Doc Execution (E-Sign & E-Stamp)",        // 15
  "Assessment",                              // 16
  "Bankruptcy Prediction",                   // 17
  "Environmental & Social Risk Evaluation",  // 18
];

// split into two equal stacks around the center media
const LEFT = ITEMS.slice(0, 9);     // 01..09
const RIGHT = ITEMS.slice(9, 18);   // 10..18

const LaptopPhoneImg =
  "https://api.builder.io/api/v1/image/assets/TEMP/76d3b3683c73123e13edd5ff0d219f952b604ba8?width=1400";

export default function InputDesign() {
  const ref = useRef(null);

  // Subtle fade/slide-in when section enters the viewport
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ia-in");
        }),
      { threshold: 0.15 }
    );
    root.querySelectorAll(".ia-row, .ia-media").forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return (
    <section className="ia-section" ref={ref}>
      <div className="ia-shell">
        <h2 className="ia-title">OUR PLATFORM AUTOMATES</h2>
        <p className="ia-subtitle">
          CredPro streamlines operations with seamless integration, rule-based
          workflows, and policy-driven automation, ensuring precise control and
          greater efficiency.
        </p>

        <div className="ia-grid">
          {/* Left compact list */}
          <ul className="ia-list" aria-label="Left workflow list">
            {LEFT.map((label, i) => {
              const num = (i + 1).toString().padStart(2, "0"); // 01..09
              return (
                <li
                  key={num}
                  className="ia-row"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="ia-badge">{num}.</span>
                  <span className="ia-text">{label}</span>
                </li>
              );
            })}
          </ul>

          {/* Center media */}
          <div className="ia-media" aria-hidden="true">
            <img src={LaptopPhoneImg} alt="" className="ia-device" />
          </div>

          {/* Right compact list */}
          <ul className="ia-list" aria-label="Right workflow list">
            {RIGHT.map((label, i) => {
              const num = (i + 10).toString().padStart(2, "0"); // 10..18
              return (
                <li
                  key={num}
                  className="ia-row"
                  style={{ transitionDelay: `${i * 40 + 80}ms` }}
                >
                  <span className="ia-badge">{num}.</span>
                  <span className="ia-text">{label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
