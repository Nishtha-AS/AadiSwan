import React from "react";
import SiteNavigation from "../../../components/SiteNavigation";
import "../../../components/SiteNavigation.css";
import Footer from "../../../components/Footer";
import "./ProjectFinance.css";

/* temporary inline icons (swap with your assets anytime) */
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
    `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10" stroke="#2B7ACB" stroke-width="2"/>
      <circle cx="11" cy="11" r="4.3" fill="#2B7ACB"/>
    </svg>`
  );

/* ---- content (condensed from your PDF) ---- */
const heroBullets = ["CRE / CME", "DCCO & Provisioning", "RBI-Aligned Reports"];

const tiles = [
  {
    k: "crecme",
    title: "Comprehensive CRE & CME Management",
    desc:
      "Manage Commercial Real Estate (CRE) and Commercial Mortgage-Backed exposures with structured workflows, documentation, and monitoring across project stages.",
  },
  {
    k: "endogenous",
    title: "Endogenous Risk Assessment",
    desc:
      "Use advanced risk analytics to evaluate endogenous risks in real time and align underwriting decisions with policy limits and board-approved frameworks.",
  },
  {
    k: "dccomilestones",
    title: "DCCO Tracking & Milestones",
    desc:
      "Track Date of Commencement of Commercial Operations with configurable milestones, slippage alerts, and supervisory reporting.",
  },
  {
    k: "collateral",
    title: "Collateral, Covenants & Security",
    desc:
      "Capture security packages, covenants and conditions precedent/subsequent. Monitor compliance and automate reminder/exception workflows.",
  },
  {
    k: "provision",
    title: "Provisioning & Restructuring",
    desc:
      "Automate provisioning logic, restructuring cases and asset-classification rules—maintaining complete audit trails and maker-checker approvals.",
  },
  {
    k: "reg",
    title: "RBI-Aligned Reports & MIS",
    desc:
      "Generate board/regulatory MIS, portfolio views and early-warning snippets with drill-downs across projects, counterparties and geography.",
  },
];

export default function ProjectFinance() {
  return (
    <div className="pf scf" style={{ "--nav-h": "88px" }}>
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

      {/* ---------- HERO (exact same structure/styling as Supply Chain) ---------- */}
      <section className="scf-hero pf-hero">
        <div className="scf-hero__inner container">
          <span className="eyebrow">ASSET CLASSES</span>
          <h1 className="title">PROJECT FINANCE</h1>

          <p className="intro">
            Manage the full lifecycle of project finance with policy-driven workflows:
            CRE/CME coverage, DCCO milestone tracking, collateral & covenant controls,
            provisioning and RBI-aligned reporting. Real-time monitoring, exception
            handling and maker-checker approvals keep large exposures compliant and
            audit-ready.
          </p>

          <div className="badge-row" role="list">
            {heroBullets.map((b) => (
              <div className="badge" role="listitem" key={b}>
                <img src={Check} alt="" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-grid" aria-hidden />
      </section>

      {/* ---------- WHY / MOSAIC (drop-in match to Supply Chain) ---------- */}
      <section className="why">
        <div className="container">
          <div className="why-top">
            <h2 className="why-title">Why AadiSwan for Project Finance?</h2>
            <p className="why-sub">
              Purpose-built controls for CRE/CME, DCCO, provisioning and RBI-aligned reporting.
            </p>
          </div>

          <div className="mosaic">
            {tiles.map((t, i) => (
              <article className={`tile ${i % 2 ? "alt" : ""}`} key={t.k}>
                <span className="edge" aria-hidden />
                <div className="bubble">
                  <img src={DotIcon} alt="" />
                </div>
                <div className="tile-body">
                  <h3 className="tile-title">{t.title}</h3>
                  <p className="tile-desc">{t.desc}</p>
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
