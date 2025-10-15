// src/components/SiteNavigation.jsx
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./SiteNavigation.css";

/* ===================== CENTRALIZED ASSETS ===================== */

/* ---- Shared header assets ---- */
import logo from "../assets/aadiswan_logo.png";
import callIcon from "../assets/call_logo.png";
import emailIcon from "../assets/Email_logo.png";
import leadingLoanImg from "../assets/leading_loan_management_img.png";

/* ---- Product logos ---- */
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

/* ===================== CENTRALIZED NAVIGATION DATA ===================== */

const NAV_ITEMS = {
  // Static links appearing before Products/Solutions
  LEADING_ITEMS: [{ label: "Home", href: "/" }],

  // Static links appearing after Products/Solutions
  TRAILING_ITEMS: [
    { label: "About Us", href: "/aboutUs" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],

  // Products Data (for Products dropdown)
  PRODUCTS: [
    { logo: credProLogo, name: "AS CredPro", desc: "Automates end-to-end lending processes for faster, compliant credit decisions.", path: "/credpro" },
    { logo: cadProLogo, name: "AS CADPro", desc: "Simplifies credit administration with seamless, transparent workflows.", path: "/cadpro" },
    { logo: camProLogo, name: "AS CAMPro", desc: "AI-powered engine for smarter, insight-driven credit appraisals.", path: "/campro" },
    { logo: esmsProLogo, name: "AS ESMSPro", desc: "Enables responsible lending with ESG-focused risk assessments.", path: "/credpro" },
    { logo: ewsProLogo, name: "AS EWSPro", desc: "Provides early warning signals to mitigate credit risks proactively.", path: "/credpro" },
  ],

  // Solutions Data (for Solutions dropdown - left column)
  SOLUTIONS_PRIMARY: [
    { label: "Underwriting Studio", icon: underwritingStudioLogo, path: "/underwriting" },
    { label: "Document Management and Template Engine", icon: dmteLogo, path: "/documentmanagement" },
    { label: "Automated Decisioning", highlighted: true, icon: automatedDecisioningLogo, path: "/automateddescision" },
    { label: "Covenant Management", icon: covenantManagementLogo, path: "/covenant" },
    { label: "Support Workflows- Legal, Valuation and more", icon: supportWorkflowLogo, path: "/support" },
    { label: "Third Party Integrations", icon: tpdLogo, path: "/integrations" },
  ],

  // Asset Classes Data (for Solutions dropdown - middle column)
  SOLUTIONS_SECONDARY: [
    { label: "Working Capital Loans", icon: workingCapitalLogo, path: "/workingcapital" },
    { label: "Supply Chain Finance", icon: supplyChainLogo, path: "/supplychain" },
    { label: "Project Finance", icon: projectFinanceLogo, path: "/projectfinance" },
    { label: "Loan Against Property", icon: lapLogo, path: "/lap" },
    { label: "NBFC Funding", icon: nbfcLogo, path: "/nbfcfunding" },
  ],
};

/* ---------- Helper: desktop dropdown positioning (Keep this as is) ---------- */
function positionMenu(triggerEl, menuEl) {
  if (!triggerEl || !menuEl) return;
  if (window.innerWidth < 992) { menuEl.style.cssText = ""; return; }

  menuEl.style.left = "50%";
  menuEl.style.right = "";
  menuEl.style.transform = "translateX(-50%) translateY(0)";

  const rect = menuEl.getBoundingClientRect();
  const vw = window.innerWidth;
  if (rect.left < 8) {
    menuEl.style.left = "0";
    menuEl.style.transform = "translateY(0)";
  } else if (rect.right > vw - 8) {
    menuEl.style.left = "";
    menuEl.style.right = "0";
    menuEl.style.transform = "translateY(0)";
  }
}

export default function SiteNavigation({
  variant,
  overlay = true,
  brandHref = "/",
  activeLabel, // ONLY activeLabel and rightContent are kept as props

  rightContent,
}) {
  const products = NAV_ITEMS.PRODUCTS;
  const solutions = NAV_ITEMS.SOLUTIONS_PRIMARY;
  const solutionsSecondary = NAV_ITEMS.SOLUTIONS_SECONDARY;
  const leadingItems = NAV_ITEMS.LEADING_ITEMS;
  const trailing = NAV_ITEMS.TRAILING_ITEMS;

  const [openProducts, setOpenProducts] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 992);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileAcc, setMobileAcc] = useState({ products: false, solutions: false });

  const prodRef = useRef(null);
  const solRef = useRef(null);
  const productsMenuRef = useRef(null);
  const solutionsMenuRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.documentElement.style.overflow = drawerOpen ? "hidden" : "";
    return () => (document.documentElement.style.overflow = "");
  }, [drawerOpen]);

  const closeAll = useCallback(() => {
    setOpenProducts(false);
    setOpenSolutions(false);
  }, []);

  useEffect(() => {
    const onDocClick = (e) => {
      if (isMobile) return;
      if (
        prodRef.current && !prodRef.current.contains(e.target) &&
        solRef.current && !solRef.current.contains(e.target)
      ) closeAll();
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [closeAll, isMobile]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDrawerOpen(false);
        closeAll();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeAll]);

  useEffect(() => {
    const handle = () => {
      if (window.innerWidth >= 992) {
        if (openProducts) positionMenu(prodRef.current, productsMenuRef.current);
        if (openSolutions) positionMenu(solRef.current, solutionsMenuRef.current);
      }
    };
    handle();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, [openProducts, openSolutions]);

  const productCols = [products.slice(0, 3), products.slice(3)];

  // helpers: clicking a Link should close menus/drawer
  const onNavigate = () => {
    closeAll();
    setDrawerOpen(false);
  };

  /* ---------- Mobile list helper (Keep this as is) ---------- */
  const MobileList = ({ items, withDesc }) => (
    <ul className="m-list" role="menu">
      {items.map((p) => (
        <li key={p.name || p.label} role="none">
          <Link to={p.path || "#"} role="menuitem" className="m-row" onClick={onNavigate}>
            <img src={p.logo || p.icon} alt="" className="m-row__img" />
            <div className="m-row__body">
              <span className="m-row__title">{p.name || p.label}</span>
              {withDesc && p.desc && <span className="m-row__desc">{p.desc}</span>}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={["site-nav-section", overlay ? "is-overlay" : "", variant ? `nav--${variant}` : ""].join(" ")}
      role="navigation"
      aria-label="Main"
    >
      <div className="site-nav-container nav-container">
        {/* Brand */}
        <div className="nav-left">
          <Link to={brandHref} className="brand-link" aria-label="AadiSwan Home" onClick={onNavigate}>
            <img className="logo" src={logo} alt="AadiSwan" />
          </Link>
        </div>

        {/* Center menu (desktop) */}
        {!isMobile && (
          <div className="menu-items" role="menubar" aria-label="Primary">
            {leadingItems.map(({ label, href }) => (
              <Link
                key={label}
                to={href || "#"}
                role="menuitem"
                className={`menu-item ${label === activeLabel ? "active" : ""}`}
                onClick={onNavigate}
              >
                <span>{label}</span>
              </Link>
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
                  requestAnimationFrame(() => positionMenu(prodRef.current, productsMenuRef.current));
                }}
              >
                <span>Products</span>
                <span className="caret-circle" aria-hidden="true">
                  <svg className={`caret-icon ${openProducts ? "rotated" : ""}`} viewBox="0 0 24 24" width="14" height="14" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <div id="products-menu" ref={productsMenuRef} className={`dropdown-menu products-dropdown ${openProducts ? "is-open" : ""}`} role="menu" aria-label="Products">
                <div className="dropdown-columns products-columns">
                  {/* Col 1 */}
                  <div className="dropdown-column products-column">
                    <h3 className="dropdown-title">PRODUCTS</h3>
                    <ul className="dropdown-list products-list" role="none">
                      {productCols[0].map((p) => (
                        <li key={p.name} role="presentation">
                          <Link to={p.path} role="menuitem" className="product-row" onClick={onNavigate}>
                            <div className="product-chip"><img src={p.logo} alt="" className="product-chip-img" /></div>
                            <div className="product-card-body">
                              <span className="product-name">{p.name}</span>
                              <span className="product-desc">{p.desc}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 2 */}
                  <div className="dropdown-column products-column">
                    <ul className="dropdown-list products-list" role="none">
                      {productCols[1].map((p) => (
                        <li key={p.name} role="presentation">
                          <Link to={p.path} role="menuitem" className="product-row" onClick={onNavigate}>
                            <div className="product-chip"><img src={p.logo} alt="" className="product-chip-img" /></div>
                            <div className="product-card-body">
                              <span className="product-name">{p.name}</span>
                              <span className="product-desc">{p.desc}</span>
                            </div>
                          </Link>
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
                  requestAnimationFrame(() => positionMenu(solRef.current, solutionsMenuRef.current));
                }}
              >
                <span>Solutions</span>
                <span className="caret-circle" aria-hidden="true">
                  <svg className={`caret-icon ${openSolutions ? "rotated" : ""}`} viewBox="0 0 24 24" width="14" height="14" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>

              <div id="solutions-menu" ref={solutionsMenuRef} className={`dropdown-menu solutions-dropdown ${openSolutions ? "is-open" : ""}`} role="menu" aria-label="Solutions">
                <div className="dropdown-columns solutions-columns">
                  {/* Solutions list (LEFT) */}
                  <div className="dropdown-column col col--left">
                    <h3 className="dropdown-title">SOLUTIONS</h3>
                    <ul className="dropdown-list solutions-list" role="none">
                      {solutions.map(({ label, highlighted, icon, path }) => (
                        <li key={label} className={highlighted ? "highlighted" : ""} role="presentation">
                          <Link to={path} role="menuitem" onClick={onNavigate}>
                            {icon ? <img className="li-logo" src={icon} alt="" /> : <span className="bullet" aria-hidden />}
                            <span>{label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Asset Classes (CENTER) */}
                  {solutionsSecondary?.length > 0 && (
                    <div className="dropdown-column col col--center">
                      <h3 className="dropdown-title">ASSET CLASSES</h3>
                      <ul className="dropdown-list solutions-list alt" role="none">
                        {solutionsSecondary.map(({ label, icon, path }) => (
                          <li key={label} role="presentation">
                            <Link to={path} role="menuitem" onClick={onNavigate}>
                              {icon ? <img className="li-logo" src={icon} alt="" /> : <span className="li-badge li-badge--dot" aria-hidden />}
                              <span>{label}</span>
                            </Link>
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
              <Link
                key={label}
                to={href || "#"}
                role="menuitem"
                className={`menu-item ${label === activeLabel ? "active" : ""}`}
                onClick={onNavigate}
              >
                <span>{label}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Right icons / Hamburger */}
        <div className="nav-right">
          {isMobile ? (
            <button className="hamburger" aria-label="Open menu" aria-expanded={drawerOpen} onClick={() => setDrawerOpen(true)}>
              <span /><span /><span />
            </button>
          ) : (
            <div className="right-icons">
              {rightContent || (
                <>
                  <button className="icon-btn" aria-label="Call"><img src={callIcon} alt="" /></button>
                  <button className="icon-btn" aria-label="Email"><img src={emailIcon} alt="" /></button>
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ===== Mobile Drawer ===== */}
      {isMobile && (
        <>
          <div className={`m-backdrop ${drawerOpen ? "is-open" : ""}`} onClick={() => setDrawerOpen(false)} aria-hidden={!drawerOpen} />
          <aside className={`m-drawer ${drawerOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Mobile navigation">
            <div className="m-drawer__head">
              <img className="m-logo" src={logo} alt="AadiSwan" />
              <button className="m-close" aria-label="Close menu" onClick={() => setDrawerOpen(false)}>×</button>
            </div>

            {/* Top links (Home / About / Blog / Contact etc.) */}
            <nav className="m-nav" aria-label="Primary">
              {[...leadingItems, ...trailing].map(({ label, href }) => (
                <Link key={label} to={href || "#"} className="m-link" onClick={onNavigate}>
                  {label}
                </Link>
              ))}
            </nav>

            {/* Accordion: Products */}
            <div className="m-acc">
              <button className="m-acc__btn" aria-expanded={mobileAcc.products} onClick={() => setMobileAcc(s => ({ ...s, products: !s.products }))}>
                <span>Products</span>
                <svg width="16" height="16" viewBox="0 0 24 24" className={mobileAcc.products ? "rot" : ""}>
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={`m-acc__panel ${mobileAcc.products ? "open" : ""}`}>
                <MobileList items={products} withDesc />
                <div className="m-promo">
                  <img src={leadingLoanImg} alt="" />
                  <div className="m-badge">Trusted by 10+ Prestigious Banks</div>
                </div>
              </div>
            </div>

            {/* Accordion: Solutions */}
            <div className="m-acc">
              <button className="m-acc__btn" aria-expanded={mobileAcc.solutions} onClick={() => setMobileAcc(s => ({ ...s, solutions: !s.solutions }))}>
                <span>Solutions</span>
                <svg width="16" height="16" viewBox="0 0 24 24" className={mobileAcc.solutions ? "rot" : ""}>
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className={`m-acc__panel ${mobileAcc.solutions ? "open" : ""}`}>
                <h4 className="m-subtitle">SOLUTIONS</h4>
                <MobileList items={solutions.map(s => ({ ...s, name: s.label, logo: s.icon }))} />
                {solutionsSecondary?.length > 0 && (
                  <>
                    <h4 className="m-subtitle">ASSET CLASSES</h4>
                    <MobileList items={solutionsSecondary.map(s => ({ ...s, name: s.label, logo: s.icon }))} />
                  </>
                )}
                <div className="m-promo">
                  <img src={leadingLoanImg} alt="" />
                  <div className="m-badge">Leading Loan Management Solution</div>
                </div>
              </div>
            </div>

            {/* Contact icons */}
            <div className="m-actions">
              <button className="icon-btn" aria-label="Call"><img src={callIcon} alt="" /></button>
              <button className="icon-btn" aria-label="Email"><img src={emailIcon} alt="" /></button>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}