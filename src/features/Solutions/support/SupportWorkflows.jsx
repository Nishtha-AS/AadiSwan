import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./SupportWorkflows.css";

/* ---------- Inline SVG icon set (same visual language) ---------- */
const Icons = {
  chipCheck:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <circle cx='9' cy='9' r='9' fill='#3FC57B'/>
        <path d='M5 9.2l2.1 2.2L13 6.5' stroke='#fff' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/>
      </svg>`
    ),
  stages:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='3' width='6' height='6' rx='1'/><rect x='15' y='3' width='6' height='6' rx='1'/>
        <rect x='3' y='15' width='6' height='6' rx='1'/><rect x='15' y='15' width='6' height='6' rx='1'/>
        <path d='M9 6h6M6 9v6M18 9v6M9 18h6'/>
      </svg>`
    ),
  schedule:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='4' width='18' height='17' rx='2'/><path d='M8 2v4M16 2v4M3 10h18'/><path d='M8 14h3M14 14h2M6 18h5M13 18h5'/>
      </svg>`
    ),
  monitor:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M3 12s2-4 9-4 9 4 9 4-2 4-9 4-9-4-9-4z'/><circle cx='12' cy='12' r='2'/>
      </svg>`
    ),
  workflow:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <circle cx='6' cy='6' r='3'/><circle cx='18' cy='12' r='3'/><circle cx='6' cy='18' r='3'/><path d='M9 6h6M6 9v6M9 18h6'/>
      </svg>`
    ),
  audit:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M21 21l-3.9-3.9'/><circle cx='11' cy='11' r='7'/><path d='M8 11h6M11 8v6'/>
      </svg>`
    ),
  report:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M4 4h12l4 4v12H4z'/><path d='M16 4v4h4'/><path d='M8 14h8M8 10h5M8 18h6'/>
      </svg>`
    ),
  bell:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9'/><path d='M13.73 21a2 2 0 0 1-3.46 0'/>
      </svg>`
    ),
  link:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1'/><path d='M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 1 1-7-7l1-1'/>
      </svg>`
    ),
  types:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='4' width='18' height='16' rx='2'/><path d='M3 9h18'/><path d='M7 13h3M7 17h5'/>
      </svg>`
    ),
  calc:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='3' width='18' height='18' rx='2'/><path d='M7 7h10M7 12h10M7 17h6'/>
      </svg>`
    ),
  table:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='4' width='18' height='16' rx='2'/><path d='M3 9h18M8 20V4M16 20V4'/>
      </svg>`
    ),
};

/* ===== CONTENT (from PDF) ===== */
const heroBullets = [
  "Workflow-Based",
  "Configurable",
  "Integrated with PDD/LTV",
];

const features = [
  // LEGAL WORKFLOW
  { group: "Legal Workflow", i: "link",   t: "Cross-Collateral Compatibility", d: "Manage multiple collaterals with seamless integration across a case." },
  { group: "Legal Workflow", i: "types",  t: "Integrated Valuation Module",    d: "Link legal review with valuation data for a comprehensive view." },
  { group: "Legal Workflow", i: "audit",  t: "Deviation Tracking",             d: "Route and resolve legal discrepancies with full approval history." },
  { group: "Legal Workflow", i: "report", t: "Document Management",            d: "Track lodged and pending title deed documents end-to-end." },
  { group: "Legal Workflow", i: "bell",   t: "External Legal Vendor Access",   d: "Provide limited, controlled access to external legal vendors." },

  // VALUATION WORKFLOW
  { group: "Valuation Workflow", i: "monitor", t: "Collateral Valuation Management", d: "Plan, assign and capture valuations for all asset types." },
  { group: "Valuation Workflow", i: "workflow",t: "Internal & External Valuers",     d: "Coordinate work across internal teams and empaneled valuers." },
  { group: "Valuation Workflow", i: "exception",t:"Deviation Handling",              d: "Log deviations and route them for approvals." },
  { group: "Valuation Workflow", i: "schedule", t:"LTV Calculation Integration",     d: "Feed approved valuations straight into LTV computation." },
  { group: "Valuation Workflow", i: "report",   t:"Document Tracking",               d: "Maintain lodged/pending valuation documents in PDD." },

  // PRICING WORKFLOW
  { group: "Pricing Workflow", i: "calc",   t: "Dynamic Pricing Models",        d: "Parameterize by collateral, facility, location, PSL and more." },
  { group: "Pricing Workflow", i: "monitor",t: "Automated Rate Calculation",    d: "Compute rates via predefined algorithms with auditability." },
  { group: "Pricing Workflow", i: "types",  t: "Configurable Pricing Tiers",    d: "Define and manage multiple tiers and sub-tiers." },
  { group: "Pricing Workflow", i: "schedule",t:"Real-Time Base Rate Update",    d: "Reflect LIBOR/Repo or internal base rate changes instantly." },
  { group: "Pricing Workflow", i: "workflow",t:"Approval Workflow Integration", d: "Route deviations to authorities; track SLAs and outcomes." },
  { group: "Pricing Workflow", i: "table",  t: "Customizable Rate Tables",      d: "Design and update rate tables to match policy." },
  { group: "Pricing Workflow", i: "link",   t: "Non-Fund Based Pricing",        d: "Support commissions for guarantees/LCs and other NFB products." },
  { group: "Pricing Workflow", i: "audit",  t: "Margin Management",             d: "Monitor and adjust margins with maker-checker control." },
  { group: "Pricing Workflow", i: "exception",t:"Pricing Exception Handling",   d: "Record reasons, approvals and validity windows." },
  { group: "Pricing Workflow", i: "report", t: "Comprehensive Reporting",       d: "Analytics and exports across structures, approvals and changes." },
];

const valueBand = [
  { t: "Accuracy & Efficiency", d: "Automate legal, valuation and pricing flows to reduce errors and cycle time." },
  { t: "Compliance & Governance", d: "Policy-driven approvals, maker-checker and full audit trails keep you compliant." },
  { t: "End-to-End Integration", d: "Tight links to LTV, PDD and underwriting for a single source of truth." },
];

export default function SupportWorkflows() {
  return (
    <div className="sw" style={{ "--nav-h": "88px" }}>
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

      {/* ================= HERO (same skeleton) ================= */}
      <section className="sw-hero" role="region" aria-labelledby="hero-title">
        <div className="sw-hero__inner container">
          <div className="hero-copy">
            <span className="eyebrow">SOLUTIONS</span>
            <h1 id="hero-title" className="title">SUPPORT WORKFLOWS</h1>
            <p className="intro">
              Legal, Valuation and Pricing workflows that streamline underwriting: validate titles,
              assess collateral accurately for LTV, and automate pricing with approvals and audit trails.
            </p>

            <div className="badge-row" role="list" aria-label="Key highlights">
              {heroBullets.map((b) => (
                <div key={b} className="badge" role="listitem" tabIndex="0">
                  <img src={Icons.chipCheck} alt="" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative right column (no hero image) */}
          <figure className="hero-art" aria-hidden="true">
            <div className="art-frame art-frame--noimg" />
          </figure>
        </div>

        <div className="hero-grid" aria-hidden />
      </section>

      {/* ================= FEATURES MOSAIC ================= */}
      <section className="why">
        <div className="container">
          <div className="why-top">
            <h2 className="why-title">Legal, Valuation & Pricing that work as one</h2>
            <p className="why-sub">Configure once, operate continuously—reduce risk without slowing growth.</p>
          </div>

          {/* small legend for groups */}
          <div className="legend" aria-hidden>
            <span className="k k--legal">●</span> Legal &nbsp;&nbsp;
            <span className="k k--val">●</span> Valuation &nbsp;&nbsp;
            <span className="k k--price">●</span> Pricing
          </div>

          <div className="mosaic">
            {features.map((f, i) => (
              <article key={`${f.group}-${f.t}`} className={`tile ${i % 2 ? "alt" : ""}`}>
                <span className="edge" aria-hidden />
                <div className={`bubble ${f.group === "Legal Workflow" ? "b--legal" : f.group === "Valuation Workflow" ? "b--val" : "b--price"}`}>
                  <img src={Icons[f.i] || Icons.workflow} alt="" />
                </div>
                <div className="tile-body">
                  <div className="tile-kicker">{f.group}</div>
                  <h3 className="tile-title">{f.t}</h3>
                  <p className="tile-desc">{f.d}</p>
                </div>
                <div className="tile-grid" aria-hidden />
              </article>
            ))}
          </div>

          <div className="value-band">
            {valueBand.map((v, i) => (
              <div key={i} className="value-chip">
                <img src={Icons.chipCheck} alt="" />
                <div>
                  <div className="value-chip__t">{v.t}</div>
                  <div className="value-chip__d">{v.d}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-box">
            <div className="cta-left">
              <h3>Ready to unify support workflows?</h3>
              <p>We’ll map your legal, valuation and pricing rules to policy—end-to-end.</p>
            </div>
            <a className="cta-btn" href="/contact">Book a Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
