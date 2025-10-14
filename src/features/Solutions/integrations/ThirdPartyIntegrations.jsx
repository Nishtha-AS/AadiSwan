import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./ThirdPartyIntegrations.css";

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
  link:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1'/><path d='M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 1 1-7-7l1-1'/>
      </svg>`
    ),
  report:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M4 4h12l4 4v12H4z'/><path d='M16 4v4h4'/><path d='M8 14h8M8 10h5M8 18h6'/>
      </svg>`
    ),
  audit:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M21 21l-3.9-3.9'/><circle cx='11' cy='11' r='7'/> 
      </svg>`
    ),
  shield:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z'/>
      </svg>`
    ),
  idcard:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='5' width='18' height='14' rx='2'/><circle cx='9' cy='12' r='2'/><path d='M13 11h5M13 15h5'/>
      </svg>`
    ),
  bank:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M3 10h18L12 3 3 10z'/><path d='M4 10v8M8 10v8M12 10v8M16 10v8M20 10v8'/><path d='M2 18h20'/>
      </svg>`
    ),
  stamp:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M8 12h8l-2-6a2 2 0 1 0-4 0l-2 6z'/><rect x='4' y='16' width='16' height='4' rx='1'/>
      </svg>`
    ),
  table:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='4' width='18' height='16' rx='2'/><path d='M3 9h18M8 20V4M16 20V4'/>
      </svg>`
    ),
  calc:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='3' width='18' height='18' rx='2'/><path d='M7 7h10M7 12h10M7 17h6'/>
      </svg>`
    ),
  workflow:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <circle cx='6' cy='6' r='3'/><circle cx='18' cy='12' r='3'/><circle cx='6' cy='18' r='3'/><path d='M9 6h6M6 9v6M9 18h6'/>
      </svg>`
    ),
};

/* ===== CONTENT (from your PDF) ===== */
const heroBullets = ["Best in Class", "Configurable", "Competitive Advantage"];

const features = [
  // Data fetch & analysis
  { i: "report", t: "ITR Online Fetch", d: "Instant income-tax retrieval for income validation." },
  { i: "report", t: "GST Online Fetch", d: "Automated GST data access for timely filings and turnover." },
  { i: "table",  t: "Banking Statement Analysis", d: "Parse, categorize and score bank statements for cash-flows." },
  // Credit bureaus & registries
  { i: "audit",  t: "Credit Bureau (Individual)", d: "Pull and verify personal bureau reports for retail lending." },
  { i: "audit",  t: "Credit Bureau (Commercial)", d: "Business credit profiles for SME/Corporate decisions." },
  { i: "report", t: "MCA Data", d: "Company master, directors and charges for KYB." },
  { i: "shield", t: "Criminal Verification Service", d: "Check criminal records with auditable results." },
  { i: "idcard", t: "NSDL PAN Verification", d: "Validate PAN via NSDL APIs." },
  { i: "shield", t: "Aadhaar Vault Service", d: "Secure Aadhaar storage with access controls." },
  { i: "shield", t: "Central Fraud Registry", d: "Screen against national fraud registries." },
  // Docs, stamping, ROC
  { i: "stamp",  t: "E-Sign + E-Stamp", d: "Digital signing and stamping built into workflows." },
  { i: "report", t: "ROC Integration", d: "File/track company charge creation and updates." },
  // Entity identifiers & MSME
  { i: "idcard", t: "Legal Entity Identifier (LEI)", d: "Unique global identifier for entities." },
  { i: "idcard", t: "UDHYAM Registration", d: "MSME registration capture and validation." },
  // Cross-checks & finance
  { i: "audit",  t: "GSTIN against PAN", d: "Resolve active/inactive GSTINs mapped to a PAN." },
  { i: "table",  t: "Financial Statement Analysis", d: "Automated ratio packs from uploaded financials." },
  // Core/LMS & risk
  { i: "bank",   t: "LMS Integration (Finacle/Flexcube)", d: "Seamless disbursement and status sync." },
  { i: "shield", t: "Anti Money Laundering (AML)", d: "KYC/AML checks with ongoing monitoring." },
  { i: "audit",  t: "Internal Dedupe", d: "Detect duplicates across applicants and entities." },
  { i: "link",   t: "Related Party Entities", d: "Map associated/beneficially linked businesses." },
];

const valueBand = [
  { t: "Faster, Smarter Underwriting", d: "Bring external truth sources into CredPro to cut TAT and improve accuracy." },
  { t: "Configurable & Vendor-Agnostic", d: "Plug any provider, one or many, through our recipient data model." },
  { t: "Explainable Decisions", d: "Every fetch, transformation and score is auditable end-to-end." },
];

export default function ThirdPartyIntegrations() {
  return (
    <div className="tpi" style={{ "--nav-h": "88px" }}>
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
      <section className="tpi-hero" role="region" aria-labelledby="hero-title">
        <div className="tpi-hero__inner container">
          <div className="hero-copy">
            <span className="eyebrow">SOLUTIONS</span>
            <h1 id="hero-title" className="title">THIRD PARTY INTEGRATIONS</h1>
            <p className="intro">
              Optimize lending with a rich catalog of third-party data sources—ITR, GST, bureaus, MCA, AML and more—wired
              into automated checks, scoring and disbursement flows.
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
            <h2 className="why-title">Connect. Normalize. Decide.</h2>
            <p className="why-sub">Everything your credit team needs—fetched, reconciled and audited.</p>
          </div>

          <div className="mosaic">
            {features.map((f, i) => (
              <article key={f.t} className={`tile ${i % 2 ? "alt" : ""}`}>
                <span className="edge" aria-hidden />
                <div className="bubble">
                  <img src={Icons[f.i] || Icons.workflow} alt="" />
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
              <h3>Ready to plug in providers at speed?</h3>
              <p>We’ll connect your preferred APIs and standardize payloads into CredPro.</p>
            </div>
            <a className="cta-btn" href="/contact">Book a Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
