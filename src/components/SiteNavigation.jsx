// src/components/SiteNavigation.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import "./SiteNavigation.css";

import logo from "../assets/aadiswan_logo.png";
import callIcon from "../assets/call_logo.png";
import emailIcon from "../assets/Email_logo.png";
import leadingLoanImg from "../assets/leading_loan_management_img.png";

/* ---------- Defaults (safe fallbacks) ---------- */
const defaultProducts = [
  { name: "CredPro", desc: "Unified Credit Origination & Underwriting", logo },
  { name: "CAMPro",  desc: "AI-powered Credit Appraisal & Risk Commentary",   logo },
  { name: "CADPro",  desc: "Sanction Documentation & Compliance Automation",  logo },
  { name: "ESMSPro", desc: "ESG & Social Risk Evaluation",                    logo },
  { name: "EWSPro",  desc: "Early Warning Signal Engine",                     logo },
];

const defaultSolutions = [
  { label: "Underwriting Studio" },
  { label: "Document Management and Template Engine" },
  { label: "Automated Decisioning", highlighted: true },
  { label: "Covenant Management" },
  { label: "Support Workflows- Legal, Valuation and more" },
  { label: "Third Party Integrations" },
];

export default function SiteNavigation({
  variant,
  overlay = true,
  brandHref = "/",
  leadingItems = [],
  trailingItems,
  staticItems,
  activeLabel,
  products = defaultProducts,
  solutions = defaultSolutions,
  solutionsSecondary = [],
  solutionsTitle = "SOLUTIONS",
  solutionsSecondaryTitle = "ASSET CLASSES",
  rightContent,
}) {
  const trailing = trailingItems ?? staticItems ?? [];

  const [openProducts, setOpenProducts]   = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);

  const prodRef = useRef(null);
  const solRef  = useRef(null);

  const closeAll = useCallback(() => { setOpenProducts(false); setOpenSolutions(false); }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (
        prodRef.current && !prodRef.current.contains(e.target) &&
        solRef.current  && !solRef.current.contains(e.target)
      ) closeAll();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [closeAll]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeAll();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeAll]);

  const toggleProducts  = () => setOpenProducts(v => { if (!v) setOpenSolutions(false); return !v; });
  const toggleSolutions = () => setOpenSolutions(v => { if (!v) setOpenProducts(false);  return !v; });

  const productCols = [products.slice(0, 3), products.slice(3)];

  return (
    <header
      className={[
        "site-nav-section",
        overlay ? "is-overlay" : "",
        variant ? `nav--${variant}` : ""
      ].join(" ")}
      role="navigation"
      aria-label="Main"
    >
      <div className="site-nav-container nav-container">
        {/* Brand */}
        <div className="nav-left">
          <a href={brandHref} className="brand-link" aria-label="AadiSwan Home">
            <img className="logo" src={logo} alt="AadiSwan" />
          </a>
        </div>

        {/* Center menu */}
        <div className="menu-items" role="menubar" aria-label="Primary">
          {leadingItems.map(({ label, href }) => (
            <a
              key={label}
              href={href || "#"}
              role="menuitem"
              className={`menu-item ${label === activeLabel ? "active" : ""}`}
            >
              <span>{label}</span>
            </a>
          ))}

          {/* Products */}
          <div className="menu-item dropdown" role="none" ref={prodRef}>
            <button
              type="button"
              className="menu-trigger"
              aria-haspopup="menu"
              aria-expanded={openProducts}
              aria-controls="products-menu"
              onClick={toggleProducts}
            >
              <span>Products</span>
              <span className="caret-dot" aria-hidden />
            </button>

            <div
              id="products-menu"
              className={`dropdown-menu products-dropdown ${openProducts ? "is-open" : ""}`}
              role="menu"
              aria-label="Products"
            >
              <div className="dropdown-columns products-columns">
                {/* Col 1 */}
                <div className="dropdown-column products-column">
                  <h3 className="dropdown-title">PRODUCTS</h3>
                  <ul className="dropdown-list products-list" role="none">
                    {productCols[0].map((p) => (
                      <li key={p.name} role="presentation">
                        <a href="#product" role="menuitem" className="product-row">
                          <div className="product-chip">
                            <img src={p.logo} alt="" className="product-chip-img" />
                          </div>
                          <div className="product-card-body">
                            <span className="product-name">{p.name}</span>
                            <span className="product-desc">{p.desc}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Col 2 */}
                <div className="dropdown-column products-column">
                  <ul className="dropdown-list products-list" role="none">
                    {productCols[1].map((p) => (
                      <li key={p.name} role="presentation">
                        <a href="#product" role="menuitem" className="product-row">
                          <div className="product-chip">
                            <img src={p.logo} alt="" className="product-chip-img" />
                          </div>
                          <div className="product-card-body">
                            <span className="product-name">{p.name}</span>
                            <span className="product-desc">{p.desc}</span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Promo */}
                <div className="dropdown-promo promo-column" role="none">
                  <div className="promo-image">
                    <img src={leadingLoanImg} alt="Leading Loan Management Solution" />
                    <div className="promo-overlay">
                      <div className="trusted-badge">Trusted by 10+ Prestigious Banks</div>
                      <p>Leading Loan Management Solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="menu-item dropdown" role="none" ref={solRef}>
            <button
              type="button"
              className="menu-trigger"
              aria-haspopup="menu"
              aria-expanded={openSolutions}
              aria-controls="solutions-menu"
              onClick={toggleSolutions}
            >
              <span>Solutions</span>
              <span className="caret-dot" aria-hidden />
            </button>

            <div
              id="solutions-menu"
              className={`dropdown-menu solutions-dropdown ${openSolutions ? "is-open" : ""}`}
              role="menu"
              aria-label="Solutions"
            >
              <div className="dropdown-columns solutions-columns">
                {/* Solutions list (LEFT) */}
                <div className="dropdown-column col col--left">
                  <h3 className="dropdown-title">{solutionsTitle}</h3>
                  <ul className="dropdown-list solutions-list" role="none">
                    {solutions.map(({ label, highlighted, icon }) => (
                      <li
                        key={label}
                        className={highlighted ? "highlighted" : ""}
                        role="presentation"
                      >
                        <a href="#solution" role="menuitem">
                          {icon ? (
                            <img className="li-logo" src={icon} alt="" />
                          ) : (
                            <span className="bullet" aria-hidden />
                          )}
                          <span>{label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Asset Classes (CENTER) */}
                {solutionsSecondary?.length > 0 && (
                  <div className="dropdown-column col col--center">
                    <h3 className="dropdown-title">{solutionsSecondaryTitle}</h3>
                    <ul className="dropdown-list solutions-list alt" role="none">
                      {solutionsSecondary.map(({ label, icon }) => (
                        <li key={label} role="presentation">
                          <a href="#asset" role="menuitem">
                            {icon ? (
                              <img className="li-logo" src={icon} alt="" />
                            ) : (
                              <span className="li-badge li-badge--dot" aria-hidden />
                            )}
                            <span>{label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Promo */}
                <div className="dropdown-promo col col--promo" role="none">
                  <div className="promo-image">
                    <img src={leadingLoanImg} alt="Leading Loan Management Solution" />
                    <div className="promo-overlay">
                      <div className="trusted-badge">Trusted by 10+ Prestigious Banks</div>
                      <p>Leading Loan Management Solution</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trailing items */}
          {trailing.map(({ label, href }) => (
            <a
              key={label}
              href={href || "#"}
              role="menuitem"
              className={`menu-item ${label === activeLabel ? "active" : ""}`}
            >
              <span>{label}</span>
            </a>
          ))}
        </div>

        {/* Right icons */}
        <div className="nav-right contact-buttons">
          {rightContent ? (
            rightContent
          ) : (
            <div className="right-icons">
              <button className="icon-btn" aria-label="Call"><img src={callIcon} alt="" /></button>
              <button className="icon-btn" aria-label="Email"><img src={emailIcon} alt="" /></button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
