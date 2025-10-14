import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./CovenantManagement.css";

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
  exception:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <path d='M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z'/><path d='M12 9v4M12 17h.01'/>
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
  ui:
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='#2B7ACB' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>
        <rect x='3' y='4' width='18' height='14' rx='2'/><path d='M7 8h6M7 12h10'/>
      </svg>`
    ),
};

/* ===== CONTENT ===== */
const heroBullets = ["Best in Class", "Configurable", "Competitive Advantage"];

const features = [
  { i: "workflow", t: "Customizable Approval Workflows", d: "Tailor processes for deferrals and waivers with authority mapping and full history." },
  { i: "stages",   t: "Stage-Specific Covenants",        d: "Define and track covenants pre- and post-disbursement with clear ownership." },
  { i: "monitor",  t: "Automated Compliance Monitoring", d: "Scheduled checks keep portfolios compliant and spotlight exceptions early." },
  { i: "audit",    t: "Audit Trail & History",           d: "Every change is logged—who, what, when—with rationale captured." },
  { i: "report",   t: "Advanced Reporting & Analytics",  d: "Dashboards and exports across overdue, upcoming, waived and N/A states." },
  { i: "bell",     t: "Integrated Notifications",        d: "Proactive alerts and reminders for stakeholders on status changes." },
  { i: "exception",t: "Exception Handling",              d: "Smart workflows to manage breaches, escalations and approvals." },
  { i: "link",     t: "Integrated Covenant Linkage",     d: "Link covenants to loans, facilities and partners for contextual oversight." },
  { i: "types",    t: "Streamlined Covenant Types",      d: "Categorize and template frequently used covenants for reuse." },
  { i: "schedule", t: "Frequency & SLA Scheduling",      d: "Monthly/quarterly/annual checks with assignments and due dates." },
  { i: "ui",       t: "User-Friendly Interface",         d: "Clean, explainable UI so teams can manage at speed with confidence." },
];

const valueBand = [
  { t: "Portfolio Discipline", d: "Keep covenants living from sanction through monitoring—no spreadsheet drift." },
  { t: "Governance by Design", d: "Policy-driven routing, maker-checker and audits are built-in, not bolted on." },
  { t: "Time to Value",        d: "Ship configurations fast, reduce manual follow-ups and prevent breaches." },
];

export default function CovenantManagement() {
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
            <h1 id="hero-title" className="title">COVENANT MANAGEMENT</h1>

            <p className="intro">
              Configure stage-specific covenants, schedule frequency, track compliance, and manage deferral/waiver workflows.
              Notifications, reporting and full audit trails keep portfolios disciplined and explainable.
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
            <h2 className="why-title">Stay compliant, proactive and audit-ready</h2>
            <p className="why-sub">Set it once, monitor continuously—reduce risk without slowing operations.</p>
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
              <h3>Ready to bring discipline to covenant tracking?</h3>
              <p>We’ll map your covenants, schedules and approvals to your policy framework.</p>
            </div>
            <a className="cta-btn" href="/contact">Book a Demo</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
