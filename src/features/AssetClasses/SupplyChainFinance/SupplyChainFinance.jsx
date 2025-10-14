import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./SupplyChainFinance.css";

/* Temporary inline icons (replace with your SVG/PNGs later) */
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

/* ===== Content pulled from your PDF (edited only for punctuation/consistency) ===== */

const heroBullets = ["Vendor Financing", "Dealer Financing", "Factoring"];

const features = [
  {
    k: "coverage",
    title: "Comprehensive Vendor & Dealer Financing",
    desc:
      "Provide critical funding to vendors and dealers, bridging working capital gaps and improving turnover—while offering flexible payment terms.",
  },
  {
    k: "reporting",
    title: "Advanced Reporting Module",
    desc:
      "Track accruals, disbursements, receivables, and current outstanding amounts for complete visibility and control.",
  },
  {
    k: "integration",
    title: "Seamless Integration",
    desc:
      "Integrates effortlessly with any Loan Management System (LMS) so operations remain smooth and efficient.",
  },
  {
    k: "risk",
    title: "Collateral & Credit Assessment",
    desc:
      "Leverage detailed collateral features, sophisticated credit assessment tools, and syndication options for comprehensive risk management.",
  },
  {
    k: "relationships",
    title: "Enhanced Corporate Relationships",
    desc:
      "Help corporate buyers standardize and consolidate payment processes—strengthening vendor and dealer relationships.",
  },
  {
    k: "efficiency",
    title: "Optimized Supply Chain Efficiency",
    desc:
      "Enable early payments and extended credit terms to improve cash flow, reduce risk, and enhance overall supply chain efficiency.",
  },
];

export default function SupplyChainFinance() {
  return (
    <div className="scf" style={{ "--nav-h": "88px" }}>
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
      <section className="scf-hero">
        <div className="scf-hero__inner container">
          <span className="eyebrow">ASSET CLASSES</span>
          <h1 className="title">SUPPLY CHAIN FINANCE</h1>

          <p className="intro">
            Elevate your supply chain finance with CredPro from ADS. Our solution
            is engineered to handle the complexities of vendor and dealer
            financing with precision and efficiency. CredPro offers advanced
            financial underwriting, real-time portfolio monitoring, and robust
            reporting across accruals, disbursements, and receivables. Seamlessly
            integrating with any LMS, it supports flexible credit evaluations,
            comprehensive collateral assessment, and credit syndication. With
            automated compliance tools and adherence to RBI guidelines, CredPro
            enables streamlined, transparent, and compliant supply chain
            financing—optimizing operations and enhancing financial agility.
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
            <h2 className="why-title">
              Why AadiSwan for Supply Chain Finance?
            </h2>
            <p className="why-sub">
              Choose ADS for unparalleled expertise and innovative solutions.
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
