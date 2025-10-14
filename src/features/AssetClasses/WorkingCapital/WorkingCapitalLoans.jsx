import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./WorkingCapitalLoans.css";

/* Small inline placeholders (swap later with PNG/SVG if you’d like) */
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

/* Content */
const introBadges = [
  "Syndication of Credit",
  "Consortium Arrangement",
  "Adhoc Credit Limit",
];

const reasons = [
  {
    k: "risk",
    title: "Advanced Risk Assessment and Flexible Solutions",
    desc:
      "Employ sophisticated underwriting, scorecard integration, and multiple assessment methods—such as turnover and cash budgeting—aligned with RBI guidelines to size working capital accurately.",
  },
  {
    k: "docs",
    title: "Automated Documentation & Compliance",
    desc:
      "Streamline documentation with policy checks, ensure regulatory compliance, and reduce errors to accelerate approvals for priority sector lending.",
  },
  {
    k: "monitor",
    title: "Comprehensive Portfolio Monitoring",
    desc:
      "Track loan performance with real-time signals and actionable analytics; identify early warning signs and proactively mitigate risk.",
  },
  {
    k: "eval",
    title: "Inclusive Credit Evaluation",
    desc:
      "Blend fund- and non-fund-based assessments; optimize cash-credit and loan components for robust, compliant financing structures.",
  },
  {
    k: "invrec",
    title: "Inventory & Receivables Management",
    desc:
      "Set practical inventory/receivable levels that reflect reliable current assets and enable disciplined working capital drawdowns.",
  },
  {
    k: "delivery",
    title: "Enhanced Credit Delivery Systems",
    desc:
      "Support consortium arrangements and credit syndication with rigorous utilization controls to ensure efficient, disciplined delivery.",
  },
];

export default function WorkingCapitalLoans() {
  return (
    <div className="wcl" style={{ "--nav-h": "88px" }}>
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

      {/* =============== HERO =============== */}
      <section className="wcl-hero">
        <div className="wcl-hero__inner container">
          <span className="eyebrow">ASSET CLASSES</span>
          <h1 className="title">WORKING CAPITAL LOANS</h1>

          <p className="intro">
            Elevate your working capital management with CredPro from ADS. Our advanced
            solution is crafted to handle the complexities of large-scale lending with
            unmatched precision. CredPro integrates sophisticated financial underwriting,
            real-time portfolio monitoring, and automated compliance tools to streamline
            your processes. It supports flexible credit evaluations, effective inventory
            management, and rigorous adherence to RBI guidelines, ensuring efficient and
            regulatory-compliant financing. Trust CredPro to deliver superior performance
            and adaptability in today’s dynamic financial environment.
          </p>

          <div className="badge-row" role="list">
            {introBadges.map((b) => (
              <div key={b} className="badge" role="listitem">
                <img src={Check} alt="" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-grid" aria-hidden />
      </section>

      {/* =============== WHY AADISWAN (revamped) =============== */}
      <section className="why">
        <div className="container">
          <div className="why-top">
            <h2 className="why-title">Why AadiSwan For Working Capital Solutions?</h2>
            <p className="why-sub">
              A concise, high-signal overview — engineered for speed, transparency, and control.
            </p>
          </div>

          {/* New “Feature Mosaic” layout */}
          <div className="mosaic">
            {reasons.map((r, i) => (
              <article
                key={r.k}
                className={`tile ${i % 2 ? "alt" : ""}`}
                aria-label={r.title}
              >
                {/* Accent edge */}
                <span className="edge" aria-hidden />

                {/* Icon bubble */}
                <div className="bubble">
                  <img src={DotIcon} alt="" />
                </div>

                {/* Content */}
                <div className="tile-body">
                  <h3 className="tile-title">{r.title}</h3>
                  <p className="tile-desc">{r.desc}</p>
                </div>

                {/* faint micro-grid */}
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
