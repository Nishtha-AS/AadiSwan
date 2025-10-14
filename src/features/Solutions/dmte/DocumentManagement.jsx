import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./DocumentManagement.css";

/* ---------- Inline SVG icon set (same visual language as Underwriting) ---------- */
const Icons = {
  chipCheck:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <circle cx='9' cy='9' r='9' fill='#3FC57B'/>
        <path d='M5 9.2l2.1 2.2L13 6.5' stroke='#fff' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/>
      </svg>`
    ),
  doc:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/>
        <path d='M14 2v6h6'/>
        <path d='M8 13h8M8 17h6M8 9h3'/>
      </svg>`
    ),
  sign:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M4 19h16'/>
        <path d='M6 15c3 0 3-6 6-6s3 6 6 6'/>
        <path d='M13.5 7.5l4-4'/>
      </svg>`
    ),
  stamp:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.6' stroke-linejoin='round'>
        <path d='M12 3a3 3 0 0 1 3 3v2a2 2 0 0 0 2 2h1v3H6v-3h1a2 2 0 0 0 2-2V6a3 3 0 0 1 3-3Z'/>
        <rect x='4' y='14.5' width='16' height='3.5' rx='1.5' fill='#E6F3FF' stroke='#2B7ACB' stroke-width='1.4'/>
      </svg>`
    ),
  flow:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='3' width='6' height='4' rx='1'/>
        <rect x='3' y='17' width='6' height='4' rx='1'/>
        <rect x='15' y='10' width='6' height='4' rx='1'/>
        <path d='M9 5h3a3 3 0 0 1 3 3v1M9 19h3a3 3 0 0 0 3-3v-1'/>
      </svg>`
    ),
  audit:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4Z'/>
        <path d='M9 12h6M9 15h6'/>
      </svg>`
    ),
  library:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.6'>
        <rect x='4' y='4' width='6' height='16' rx='1.5'/>
        <rect x='10' y='4' width='6' height='16' rx='1.5'/>
        <rect x='16' y='4' width='4' height='16' rx='1' fill='#E6F3FF' stroke-width='1.4'/>
      </svg>`
    ),
  edit:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M3 17.25V21h3.75L18.81 8.94l-3.75-3.75L3 17.25Z'/>
        <path d='M13.5 5.25l3.75 3.75'/>
      </svg>`
    ),
  release:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='4' y='4' width='16' height='12' rx='2'/>
        <path d='M8 16v3h8v-3'/>
      </svg>`
    ),
  truck:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='2' y='7' width='11' height='7' rx='1.5'/>
        <path d='M13 10h5l3 3v1h-8v-4Z'/>
        <circle cx='7' cy='18' r='2'/><circle cx='17' cy='18' r='2'/>
      </svg>`
    ),
  shield:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4Z'/>
        <path d='M9 12l2 2 4-4' stroke-width='1.8'/>
      </svg>`
    ),
};

/* ===== CONTENT ===== */
const heroBullets = [
  "Automated Generation",
  "E-Sign / E-Stamp",
  "Audit Trails",
];

const features = [
  { i: "doc",    t: "Automated Document Generation", d: "Create the entire pack from loan structure & program using tokenized merge fields and conditional clauses." },
  { i: "sign",   t: "E-Sign Integration",             d: "Plug into approved providers for fast, secure and legally binding execution." },
  { i: "stamp",  t: "E-Stamp Integration",            d: "Auto-generate and apply e-stamp with state mapping and guardrails." },
  { i: "flow",   t: "Configurable Approval Matrix",   d: "Govern deferrals, waivers and special conditions with policy-driven routing." },
  { i: "audit",  t: "Complete Audit Trail",           d: "Versioning & activity logs—who changed what and when—for every action." },
  { i: "library",t: "Template Library",               d: "Centrally manage templates mapped to products, segments, states and languages." },
  { i: "edit",   t: "Controlled Manual Adjustments",  d: "Allow edits to auto-generated docs with guardrails and change logs." },
  { i: "release",t: "Document Release Tracking",      d: "Track permanent/temporary releases with purpose, due dates and acknowledgements." },
  { i: "truck",  t: "Dispatch Tracking",              d: "End-to-end dispatch to storage/branches with shipment references." },
  { i: "shield", t: "Compliance & Governance",        d: "Stay audit-ready with configurable rules aligned to internal/RBI guidelines." },
];

const valueBand = [
  { t: "Governance by Design", d: "Approval matrices, sign/stamp, and comprehensive audit trail as first-class primitives." },
  { t: "Faster, Error-Free Packs", d: "Tokenized templates and rules eliminate manual assembly and reduce TAT." },
  { t: "Enterprise-Ready", d: "Library, dispatch, and release tracking integrated with underwriting and CAD." },
];

export default function DocumentManagement() {
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

      {/* ================= HERO (same structure/classes as Underwriting) ================= */}
      <section className="us-hero" role="region" aria-labelledby="hero-title">
        <div className="us-hero__inner container">
          <div className="hero-copy">
            <span className="eyebrow">SOLUTIONS</span>
            <h1 id="hero-title" className="title">DOCUMENT MANAGEMENT & TEMPLATE ENGINE</h1>

            <p className="intro">
              Transform document handling with a configurable engine that <strong>auto-generates</strong> the right pack,
              integrates <strong>e-sign/e-stamp</strong> for instant execution, and maintains a <strong>complete audit trail</strong>.
              Track releases & dispatches, govern a central template library, and stay <strong>compliance-ready</strong>.
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

          {/* No image: we keep the framed right panel for consistent layout */}
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
            <h2 className="why-title">Automate, Govern, and Execute — End-to-End</h2>
            <p className="why-sub">
              A single, policy-driven system for creation, execution, tracking and compliance.
            </p>
          </div>

          <div className="mosaic">
            {features.map((f, i) => (
              <article key={f.t} className={`tile ${i % 2 ? "alt" : ""}`}>
                <span className="edge" aria-hidden />
                <div className="bubble">
                  <img src={Icons[f.i] || Icons.doc} alt="" />
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
              <h3>Ready to templatize & automate your document lifecycle?</h3>
              <p>We’ll configure tokens, rules and approvals to your policy framework.</p>
            </div>
            <a className="cta-btn" href="/contact">Book a Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
