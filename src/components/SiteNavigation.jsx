// src/components/SiteNavigation.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import "./SiteNavigation.css";

/* ---- Shared header assets ---- */
import logo from "../assets/aadiswan_logo.png";
import callIcon from "../assets/call_logo.png";
import emailIcon from "../assets/Email_logo.png";
import leadingLoanImg from "../assets/leading_loan_management_img.png";

/* ---- Product logos (CredPro set) ---- */
import credProLogo from "../assets/CredPro_logo.png";
import cadProLogo from "../assets/CADPro_logo.png";
import camProLogo from "../assets/CAMPro_logo.png";
import esmsProLogo from "../assets/ESMSPro_logo.png";
import ewsProLogo from "../assets/EWSPro_logo.png";

/* ---- Solutions logos ---- */
import underwritingStudioLogo from "../assets/underwriting_studio_logo.png";
import dmteLogo from "../assets/DMTE_Logo.png";
import automatedDecisioningLogo from "../assets/automated_decisioning.png";
import covenantManagementLogo from "../assets/convenant_management.png";
import supportWorkflowLogo from "../assets/support_workflow_logo.png";
import tpdLogo from "../assets/TPD_Logo.png";

/* ---- Asset Classes logos ---- */
import workingCapitalLogo from "../assets/WCM_logo.jpg";
import supplyChainLogo from "../assets/supply_chain_logo.png";
import projectFinanceLogo from "../assets/project_finance_logo.png";
import lapLogo from "../assets/load_against_property_logo.png";
import nbfcLogo from "../assets/NBFC_logo.png";

/* ---------- Defaults (CredPro data) ---------- */
const defaultProducts = [
  { logo: credProLogo, name: "AS CredPro", desc: "Automates end-to-end lending processes for faster, compliant credit decisions." },
  { logo: cadProLogo,  name: "AS CADPro",  desc: "Simplifies credit administration with seamless, transparent workflows." },
  { logo: camProLogo,  name: "AS CAMPro",  desc: "AI-powered engine for smarter, insight-driven credit appraisals." },
  { logo: esmsProLogo, name: "AS ESMSPro", desc: "Enables responsible lending with ESG-focused risk assessments." },
  { logo: ewsProLogo,  name: "AS EWSPro",  desc: "Provides early warning signals to mitigate credit risks proactively." },
];

const defaultSolutions = [
  { label: "Underwriting Studio",                          icon: underwritingStudioLogo },
  { label: "Document Management and Template Engine",      icon: dmteLogo },
  { label: "Automated Decisioning", highlighted: true,     icon: automatedDecisioningLogo },
  { label: "Covenant Management",                          icon: covenantManagementLogo },
  { label: "Support Workflows- Legal, Valuation and more", icon: supportWorkflowLogo },
  { label: "Third Party Integrations",                     icon: tpdLogo },
];

const defaultSolutionsSecondary = [
  { label: "Working Capital Loans", icon: workingCapitalLogo },
  { label: "Supply Chain Finance",  icon: supplyChainLogo    },
  { label: "Project Finance",       icon: projectFinanceLogo },
  { label: "Loan Against Property", icon: lapLogo            },
  { label: "NBFC Funding",          icon: nbfcLogo           },
];

/* ---------- Helper: smart menu positioning to avoid clipping ---------- */
function positionMenu(triggerEl, menuEl) {
  if (!triggerEl || !menuEl) return;

  const isProducts = menuEl.classList.contains("products-dropdown");
  const isDesktop  = window.innerWidth >= 992;

  // ✅ Let CSS handle Products viewport-centering on desktop.
  // Also clear any leftover inline styles to avoid fighting the CSS.
  if (isProducts && isDesktop) {
    menuEl.style.left = "";
    menuEl.style.right = "";
    menuEl.style.transform = "";
    menuEl.style.position = "";
    menuEl.style.top = "";
    return;
  }

  // JS positions:
  // - Products on mobile (<=991px)
  // - Solutions on all breakpoints (so your edge-avoid logic still applies)

  // Reset to default: centered under trigger (relative to dropdown trigger container)
  menuEl.style.left = "50%";
  menuEl.style.right = "";
  menuEl.style.transform = "translateX(-50%) translateY(0)";

  const rect = menuEl.getBoundingClientRect();
  const vw = window.innerWidth;

  const overflowLeft  = rect.left < 8;         // keep small padding from edges
  const overflowRight = rect.right > vw - 8;

  if (overflowRight && !overflowLeft) {
    // Align menu's right edge with the trigger container
    menuEl.style.left = "";
    menuEl.style.right = "0";
    menuEl.style.transform = "translateY(0)";
  } else if (overflowLeft && !overflowRight) {
    // Align menu's left edge with the trigger container
    menuEl.style.left = "0";
    menuEl.style.right = "";
    menuEl.style.transform = "translateY(0)";
  } else {
    // Keep centered
    menuEl.style.left = "50%";
    menuEl.style.right = "";
    menuEl.style.transform = "translateX(-50%) translateY(0)";
  }
}

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
  solutionsSecondary = defaultSolutionsSecondary,
  solutionsTitle = "SOLUTIONS",
  solutionsSecondaryTitle = "ASSET CLASSES",

  rightContent,
}) {
  const trailing = trailingItems ?? staticItems ?? [];

  const [openProducts, setOpenProducts]   = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);

  const prodRef = useRef(null);
  const solRef  = useRef(null);
  const productsMenuRef  = useRef(null);
  const solutionsMenuRef = useRef(null);

  const closeAll = useCallback(() => {
    setOpenProducts(false);
    setOpenSolutions(false);
  }, []);

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

  // Reposition menus whenever they open or on resize
  useEffect(() => {
    function handle() {
      if (openProducts)  positionMenu(prodRef.current, productsMenuRef.current);
      if (openSolutions) positionMenu(solRef.current,  solutionsMenuRef.current);
    }
    handle();

    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [openProducts, openSolutions]);

  const toggleProducts  = () =>
    setOpenProducts((v) => {
      const nv = !v;
      if (nv) setOpenSolutions(false);
      return nv;
    });

  const toggleSolutions = () =>
    setOpenSolutions((v) => {
      const nv = !v;
      if (nv) setOpenProducts(false);
      return nv;
    });

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
              onClick={() => {
                const next = !openProducts;
                setOpenProducts(next);
                if (next) setOpenSolutions(false);
                // Position on next frame so menu has size
                requestAnimationFrame(() => {
                  positionMenu(prodRef.current, productsMenuRef.current);
                });
              }}
            >
              <span>Products</span>
              <span className="caret-circle" aria-hidden="true">
                <svg
                  className={`caret-icon ${openProducts ? "rotated" : ""}`}
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>

            <div
              id="products-menu"
              ref={productsMenuRef}
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
              onClick={() => {
                const next = !openSolutions;
                setOpenSolutions(next);
                if (next) setOpenProducts(false);
                requestAnimationFrame(() => {
                  positionMenu(solRef.current, solutionsMenuRef.current);
                });
              }}
            >
              <span>Solutions</span>
              <span className="caret-circle" aria-hidden="true">
                <svg
                  className={`caret-icon ${openSolutions ? "rotated" : ""}`}
                  viewBox="0 0 24 24"
                  width="14"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>

            <div
              id="solutions-menu"
              ref={solutionsMenuRef}
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
