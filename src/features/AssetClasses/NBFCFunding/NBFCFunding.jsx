// src/features/AssetClasses/NBFCFunding/NBFCFunding.jsx
import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./NBFCFunding.css";

/* Temporary inline icons (swap to your real SVG/PNGs later) */
const Check =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="9" fill="#3FC57B"/>
      <path d="M5 9.2l2.1 2.2L13 6.5" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  );

const DotIcon =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="7" stroke="#2B7ACB" stroke-width="2"/>
      <circle cx="8" cy="8" r="3" fill="#2B7ACB"/>
    </svg>`
  );

/* ===== Content pulled/summarized from “Term Loans / CC / OD – AadiSwan” (NBFC Funding) ===== */

const heroBullets = [
  "NOF Calculation",
  "Bridge Finance Compliance",
  "Factoring Management",
];

const features = [
  {
    k: "nof",
    title: "Net Owned Fund (NOF) Calculation",
    desc:
      "Accurately compute NOF in line with RBI guidelines so NBFCs manage capital effectively with all mandated adjustments.",
  },
  {
    k: "bridge",
    title: "Compliance with Bridge Finance Restrictions",
    desc:
      "Prevent sanctioning of bridge / interim finance where prohibited and align funding with long-term capital needs.",
  },
  {
    k: "leaseCollat",
    title: "Leased / Sub-Leased & Collateral Management",
    desc:
      "Handle leased and sub-leased assets with proper valuation, documentation and collateral tracking for transparency.",
  },
  {
    k: "exposure",
    title: "Other Bank Exposure Calculation",
    desc:
      "Calculate and monitor exposure to other banks, ensuring you remain within RBI limits and internal risk thresholds.",
  },
  {
    k: "riskReports",
    title: "Enhanced Risk Assessment & Reporting",
    desc:
      "Use rich analytics and detailed reports for real-time evaluation, early insights, and informed portfolio actions.",
  },
  {
    k: "factoring",
    title: "Factoring Compliance & Receivables",
    desc:
      "Support factoring per RBI criteria and manage receivables efficiently—keeping assets, income and limits compliant.",
  },
];

export default function NBFCFunding() {
  return (
    <div className="nbfc" style={{ "--nav-h": "88px" }}>
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
      <section className="nbfc-hero">
        <div className="nbfc-hero__inner container">
          <span className="eyebrow">ASSET CLASSES</span>
          <h1 className="title">NBFC FUNDING</h1>

          <p className="intro">
            ADS delivers a comprehensive NBFC funding solution aligned with RBI
            regulations. From accurate Net Owned Fund (NOF) calculations and
            bridge-finance restrictions, to exposure monitoring, collateral and
            leased/sub-leased asset management—our platform streamlines
            compliance, strengthens risk oversight and supports factoring with
            robust receivables control and reporting.
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
            <h2 className="why-title">Why AadiSwan for NBFC Funding?</h2>
            <p className="why-sub">
              Purpose-built controls for NOF, bridge-finance restrictions, RBI-aligned
              exposure, factoring and reporting.
            </p>
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
