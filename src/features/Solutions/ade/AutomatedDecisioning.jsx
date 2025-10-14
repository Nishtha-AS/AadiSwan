import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./AutomatedDecisioning.css";

/* ---------- Inline SVG icon set (matching Underwriting visual language) ---------- */
const Icons = {
  chipCheck:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <circle cx='9' cy='9' r='9' fill='#3FC57B'/>
        <path d='M5 9.2l2.1 2.2L13 6.5' stroke='#fff' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/>
      </svg>`
    ),
  api:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='3' width='7' height='7' rx='1.5'/><rect x='14' y='3' width='7' height='7' rx='1.5'/>
        <rect x='3' y='14' width='7' height='7' rx='1.5'/><rect x='14' y='14' width='7' height='7' rx='1.5'/>
        <path d='M6.5 10.5v3M17.5 10.5v3M10.5 6.5h3M10.5 17.5h3'/>
      </svg>`
    ),
  logic:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <circle cx='6' cy='12' r='3'/><circle cx='18' cy='6' r='3'/><circle cx='18' cy='18' r='3'/>
        <path d='M9 12h6M9 10l6-2M9 14l6 2'/>
      </svg>`
    ),
  prescreen:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M10 13a5 5 0 1 1 3 0'/><path d='m21 21-3.9-3.9'/>
      </svg>`
    ),
  scoring:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M3 3v18h18'/><rect x='7' y='12' width='3' height='6'/><rect x='12' y='7' width='3' height='11'/><rect x='17' y='10' width='3' height='8'/>
      </svg>`
    ),
  rating:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='m12 2 3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z'/>
      </svg>`
    ),
  limit:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='5' width='18' height='14' rx='2'/><path d='M8 12h8M12 8v8'/>
      </svg>`
    ),
  segments:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M12 2v20'/><path d='M2 12h20'/><circle cx='6' cy='6' r='2'/><circle cx='18' cy='18' r='2'/>
      </svg>`
    ),
  product:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='7' width='18' height='12' rx='2'/><path d='M3 11h18'/>
      </svg>`
    ),
  deviation:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M3 3h7v7H3zM14 14h7v7h-7z'/><path d='M10 14 14 10'/>
      </svg>`
    ),
  rules:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M5 4h14M5 8h10M5 12h14M5 16h8'/><path d='M17 4v16'/>
      </svg>`
    ),
};

/* ===== CONTENT ===== */
const heroBullets = ["Best in Class", "Configurable", "Competitive Advantage"];

const features = [
  { i: "api",      t: "Seamless API Integration",       d: "Effortless connection within LOS and other systems for smooth decision orchestration." },
  { i: "logic",    t: "Comprehensive Decision Logic",   d: "Covers end-to-end decision scenarios—policy gates, eligibility, and outcomes." },
  { i: "prescreen",t: "Pre-Screening Capabilities",     d: "Early knockout and routing to streamline effort and improve TAT." },
  { i: "scoring",  t: "Advanced Scoring Models",        d: "Sophisticated scorecards for accurate risk assessment with version control." },
  { i: "rating",   t: "Customizable Rating Systems",    d: "Tailor internal/external ratings and map to policy brackets." },
  { i: "limit",    t: "Dynamic Limit Calculation",      d: "Real-time limit/DP computation driven by data and policy." },
  { i: "segments", t: "Multi-Segment Differentiation",  d: "Vary logic across customer segments and risk tiers." },
  { i: "product",  t: "Product-Level Decisioning",      d: "Rules per product/variant for precise, contextual outcomes." },
  { i: "deviation",t: "Auto & Manual Deviations",       d: "Flexible deviations with authority mapping and audit trails." },
  { i: "rules",    t: "User-Friendly Rule Customization", d: "Create and modify rules without deep IT involvement; ship changes fast." },
];

const valueBand = [
  { t: "Policy → Production Fast", d: "Translate program notes into executable rules with rollbacks and audits." },
  { t: "Consistency at Scale", d: "Reduce human error and keep outcomes aligned to institutional goals." },
  { t: "Focus on Strategy", d: "Automate routine checks so underwriters can focus on higher-value judgment." },
];

export default function AutomatedDecisioning() {
  return (
    <div className="us" style={{ "--nav-h": "88px" }}>
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

      {/* ================= HERO (identical skeleton to Underwriting) ================= */}
      <section className="us-hero" role="region" aria-labelledby="hero-title">
        <div className="us-hero__inner container">
          <div className="hero-copy">
            <span className="eyebrow">SOLUTIONS</span>
            <h1 id="hero-title" className="title">AUTOMATED DECISIONING</h1>

            <p className="intro">
              A configurable engine that automates pre-screening, scoring, dynamic limits and policy gates—integrated via APIs—so
              every decision is accurate, consistent and aligned to your institutional goals.
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

          {/* Keep right column layout without importing an image */}
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
            <h2 className="why-title">Decisioning that’s precise, explainable and fast</h2>
            <p className="why-sub">From pre-screening to limits and deviations—configure and ship without heavy IT cycles.</p>
          </div>

          <div className="mosaic">
            {features.map((f, i) => (
              <article key={f.t} className={`tile ${i % 2 ? "alt" : ""}`}>
                <span className="edge" aria-hidden />
                <div className="bubble">
                  <img src={Icons[f.i] || Icons.logic} alt="" />
                </div>
                <div className="tile-body">
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
              <h3>Ready to automate decisioning?</h3>
              <p>Let’s map your policy and ship rules with safe rollouts and audits.</p>
            </div>
            <a className="cta-btn" href="/contact">Book a Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
