import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./LoanAgainstProperty.css";

/* Temporary inline icons (swap to your SVG/PNGs later) */
const Check =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="#3FC57B"/>
      <path d="M5 9.2l2.1 2.2L13 6.5" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  );

const DotIcon =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" stroke="#2B7ACB" stroke-width="2"/>
      <circle cx="8" cy="8" r="3" fill="#2B7ACB"/>
    </svg>`
  );

/* ===== Content from your LAP PDF ===== */
const heroBullets = ["Precise LTV Assessment", "Efficient Renewal Cycles", "Seamless Mobile Application"];

const features = [
  {
    k: "exposure",
    title: "Comprehensive Exposure Calculation",
    desc:
      "Calculate total exposure across multiple banks to assess accurate loan limits against the property and manage multiple loans effectively.",
  },
  {
    k: "ltv",
    title: "Precise LTV Assessment",
    desc:
      "Perform detailed Loan-to-Value calculations that align loan amounts with market value and borrower profile for prudent lending.",
  },
  {
    k: "legal",
    title: "Streamlined Legal Workflow",
    desc:
      "Automate title checks, legal verification, and documentation to reduce legal risk and ensure regulatory compliance before approval.",
  },
  {
    k: "renewals",
    title: "Efficient Renewal Cycles",
    desc:
      "Track and manage renewals for loan enhancements and extensions with timely adjustments as property values and borrower needs change.",
  },
  {
    k: "mobile",
    title: "Seamless Mobile Application Access",
    desc:
      "Give users real-time visibility: status updates, account info, and monitoring—anytime, anywhere—for a better customer experience.",
  },
  {
    k: "collateral",
    title: "Advanced Collateral Mgmt. & Automated Docs",
    desc:
      "Manage collateral comprehensively (incl. other-bank exposure) and auto-generate sanction letters to speed up compliant approvals.",
  },
];

export default function LoanAgainstProperty() {
  return (
    <div className="lap" style={{ "--nav-h": "88px" }}>
      <SiteNavigation
        variant="solutions"
        overlay
        brandHref="/"
        leadingItems={[{ label: "Home", href: "/" }]}
        products={[]}
        solutions={[]}
        solutionsSecondary={[]}
        trailingItems={[
          { label: "About Us", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />

      {/* ================= HERO ================= */}
      <section className="lap-hero">
        <div className="lap-hero__inner container">
          <span className="eyebrow">ASSET CLASSES</span>
          <h1 className="title">LOAN AGAINST PROPERTY</h1>

          <p className="intro">
            ADS provides a comprehensive LAP solution that streamlines end-to-end lending. From precise LTV assessments
            and robust collateral management to automated sanction letters and legal workflows, the platform ensures
            fast, compliant approvals. Flexible renewal cycles and mobile access enable real-time monitoring and smooth
            lifecycle management—built to meet RBI and operational requirements.
          </p>

          <div className="badge-row" role="list">
            {heroBullets.map((b) => (
              <div key={b} className="badge" role="listitem">
                <img src={Check} alt="" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-grid" aria-hidden />
      </section>

      {/* ============== WHY (Feature Mosaic) ============== */}
      <section className="why">
        <div className="container">
          <div className="why-top">
            <h2 className="why-title">Why AadiSwan for Loan Against Property?</h2>
            <p className="why-sub">Purpose-built workflows for LTV, legal, collateral, renewals, and RBI-aligned docs.</p>
          </div>

          <div className="mosaic">
            {features.map((f, i) => (
              <article key={f.k} className={`tile ${i % 2 ? "alt" : ""}`}>
                <span className="edge" aria-hidden />
                <div className="bubble">
                  <img src={DotIcon} alt="" />
                </div>
                <div className="tile-body">
                  <h3 className="tile-title">{f.title}</h3>
                  <p className="tile-desc">{f.desc}</p>
                </div>
                <div className="tile-grid" aria-hidden />
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
