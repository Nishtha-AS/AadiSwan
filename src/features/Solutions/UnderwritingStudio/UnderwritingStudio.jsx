import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./UnderwritingStudio.css";

/* ---------- Icon set (inline SVGs; replace with your assets anytime) ---------- */
const Icons = {
  assess:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M10 13a5 5 0 1 1 3 0'/>
        <path d='m21 21-3.9-3.9'/>
      </svg>`
    ),
  shield:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M12 3l7 4v5c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z'/>
      </svg>`
    ),
  layers:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='m12 2 9 5-9 5-9-5 9-5z'/>
        <path d='m3 12 9 5 9-5'/>
        <path d='m3 17 9 5 9-5'/>
      </svg>`
    ),
  bank:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M3 10h18'/>
        <path d='M4 10v8M8 10v8M12 10v8M16 10v8M20 10v8'/>
        <path d='M12 2 3 7v3h18V7l-9-5z'/>
        <path d='M2 20h20'/>
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
  calc:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='4' y='2' width='16' height='20' rx='2'/>
        <path d='M8 6h8'/>
        <path d='M8 10h8'/>
        <path d='M8 14h4'/>
      </svg>`
    ),
  chart:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M3 3v18h18'/>
        <rect x='7' y='12' width='3' height='6'/>
        <rect x='12' y='7' width='3' height='11'/>
        <rect x='17' y='10' width='3' height='8'/>
      </svg>`
    ),
  flow:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <circle cx='7' cy='7' r='3'/>
        <circle cx='17' cy='17' r='3'/>
        <path d='M10 7h4a3 3 0 0 1 3 3v1'/>
      </svg>`
    ),
  grade:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='m12 2 3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-7z'/>
      </svg>`
    ),
  link:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1'/>
        <path d='M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 1 1-7-7l1-1'/>
      </svg>`
    ),
  checkDoc:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/>
        <path d='M14 2v6h6'/>
        <path d='M9 15l2 2 4-4'/>
      </svg>`
    ),
  people:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2'/>
        <circle cx='9' cy='7' r='4'/>
        <path d='M23 21v-2a4 4 0 0 0-3-3.87'/>
        <path d='M16 3.13a4 4 0 0 1 0 7.75'/>
      </svg>`
    ),
  bolt:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M13 2L3 14h7v8l11-14h-7l-1-6z'/>
      </svg>`
    ),
  clock:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <circle cx='12' cy='12' r='9'/>
        <path d='M12 7v6l4 2'/>
      </svg>`
    ),
  ratio:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M19 5 5 19'/>
        <circle cx='7.5' cy='7.5' r='2.5'/>
        <circle cx='16.5' cy='16.5' r='2.5'/>
      </svg>`
    ),
  sanction:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='4' width='18' height='14' rx='2'/>
        <path d='M7 8h10M7 12h8'/>
        <path d='M9 21l3-3 3 3'/>
      </svg>`
    ),
  // bullet for the hero chips
  chipCheck:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'>
        <circle cx='9' cy='9' r='9' fill='#3FC57B'/>
        <path d='M5 9.2l2.1 2.2L13 6.5' stroke='#fff' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'/>
      </svg>`
    )
};

/* ===== CONTENT ===== */
const heroBullets = [
  "Retail & Corporate Loans",
  "Reduced TAT with Automation",
  "Policy-Driven, RBI-Aligned"
];

const features = [
  { i: "assess",  t: "Creditworthiness Assessment",  d: "Evaluate borrower profiles with bureau data, behavior markers, and historical performance to ensure robust underwriting decisions." },
  { i: "shield",  t: "Collateral Evaluation",         d: "Assess pledged assets (movable/immovable), maintain coverage adequacy, and support cross-collateral scenarios." },
  { i: "layers",  t: "Loan Structuring",              d: "Tailor terms, pricing, limits, and repayment schedules based on policy rules and risk appetite." },
  { i: "chart",   t: "Banking Statement Analysis",    d: "Analyze cashflows, detect seasonality and stress, and build accurate repayment capacity views." },
  { i: "ratio",   t: "Financial Ratio Analysis",      d: "Review DSCR, ICR, gearing and more with transparent calculations and commentary hooks." },
  { i: "doc",     t: "Credit Appraisal Note Preparation", d: "Generate analyst-style CAM notes automatically with editable sections and audit trails." },
  { i: "layers",  t: "Cross-Collateral Calculation",  d: "Compute combined collateral values and link covenants to coverage thresholds." },
  { i: "sanction",t: "Sanction Letter Generation",    d: "Automate sanction letters from policy templates and merge approved terms instantly." },
  { i: "grade",   t: "Dynamic Scoring Models",        d: "Use segment-specific scorecards with champion/challenger setups and outcomes tracking." },
  { i: "calc",    t: "Loan-to-Value (LTV) Calculation", d: "Drive LTV limits via asset class, tenor, borrower type, and internal policy caps." },
  { i: "bolt",    t: "Deviations",                    d: "Capture and route exceptions for approvals with reason codes, limits, and maker-checker." },
  { i: "grade",   t: "Risk Grading",                  d: "Assign application and customer risk grades; propagate to sanction rules and monitoring bands." },
  { i: "link",    t: "Credit Bureau Integration",     d: "Automate retrieval, parsing and scoring with configurable bureau adapters." },
  { i: "checkDoc",t: "Policy Compliance Check",       d: "Block/flag out-of-policy cases and produce compliance summaries for committees." },
  { i: "people",  t: "Committee-Based Sanctioning",   d: "Enable collaborative approvals with agendas, notes, voting and decision logging." }
];

const valueBand = [
  { t: "Managed Services & Products", d: "Blend of platform + services from ex-underwriters for rollout speed and outcome quality." },
  { t: "Flexibility & Adaptability",  d: "Policy-driven configuration for retail & corporate across changing market conditions." },
  { t: "Competitive Advantage",       d: "Cut TAT, raise accuracy, and scale underwriting with deep automation and controls." }
];

/* 👉 Replace with your actual screenshot path */
import heroShot from "../../../assets/underwriting-studio-hero.png";

export default function UnderwritingStudio() {
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
          { label: "Contact Us", href: "/contact" }
        ]}
      />

      {/* ================= HERO ================= */}
      <section className="us-hero">
        <div className="us-hero__inner container">
          <div className="hero-copy">
            <span className="eyebrow">SOLUTIONS</span>
            <h1 className="title">UNDERWRITING STUDIO</h1>

            <p className="intro">
              Underwriting is core to sound lending. Manual, siloed reviews inflate TAT, create
              inconsistencies, and add risk. Underwriting Studio (CredPro) automates the credit journey
              for both retail and corporate loans — with policy-driven decisioning, deep data ingestion,
              and transparent controls — cutting turnaround time while improving accuracy and compliance.
            </p>

            <div className="badge-row" role="list">
              {heroBullets.map((b) => (
                <div key={b} className="badge" role="listitem">
                  <img src={Icons.chipCheck} alt="" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Screenshot */}
          <figure className="hero-art" aria-label="Underwriting Studio application UI">
            <div className="art-frame">
              <img src={heroShot} alt="Underwriting Studio screen" loading="eager" />
            </div>
          </figure>
        </div>

        <div className="hero-grid" aria-hidden />
      </section>

      {/* ================= FEATURES ================= */}
      <section className="why">
        <div className="container">
          <div className="why-top">
            <h2 className="why-title">Complete Suite of Underwriting Tech Tools</h2>
            <p className="why-sub">
              Advanced assessment, automation, and committee workflows — configurable and policy-driven.
            </p>
          </div>

          <div className="mosaic">
            {features.map((f, i) => (
              <article key={f.t} className={`tile ${i % 2 ? "alt" : ""}`}>
                <span className="edge" aria-hidden />
                <div className="bubble">
                  <img src={Icons[f.i] || Icons.assess} alt="" />
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
              <h3>Ready to transform underwriting?</h3>
              <p>Book a demo and see how CredPro reduces TAT while improving accuracy and control.</p>
            </div>
            <a className="cta-btn" href="/contact">Book a Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
