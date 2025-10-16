import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./MultiAssetSolutions.css";

/** Icons */
import workingCapitalLogo from "../../../assets/WCM_logo.png";
import lapLogo from "../../../assets/load_against_property_logo.png";
import supplyChainLogo from "../../../assets/supply_chain_logo.png";
import projectFinanceLogo from "../../../assets/project_finance_logo.png";
import nbfcLogo from "../../../assets/NBFC_logo.png";

/** Trade Finance icon (placeholder) */
const tradeFinanceIcon =
  "https://api.builder.io/api/v1/image/assets/TEMP/7a9df0f34c7558d9bd60944b38d717ca53ae56ed?width=182";

/** Cards mapped to routes present in App.jsx */
const CARDS = [
  {
    title: "WORKING CAPITAL",
    icon: workingCapitalLogo,
    to: "/workingcapital",
  },
  {
    title: "LOAN AGAINST PROPERTY",
    icon: lapLogo,
    to: "/lap",
  },
  {
    title: "SUPPLY CHAIN FINANCE",
    icon: supplyChainLogo,
    to: "/supplychain",
  },
  {
    title: "PROJECT FINANCE",
    icon: projectFinanceLogo,
    to: "/projectfinance",
  },
  {
    title: "NBFC FUNDING",
    icon: nbfcLogo,
    to: "/nbfcfunding",
  },
  {
    title: "TRADE FINANCE",
    icon: tradeFinanceIcon,
    to: null, // no route in App.jsx yet
  },
];

export default function MultiAssetSolutions() {
  const gridRef = useRef(null);

  // Reveal cards on scroll (Intersection Observer)
  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const items = Array.from(el.querySelectorAll(".mas-card"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((it) => io.observe(it));
    return () => io.disconnect();
  }, []);

  return (
    <section className="mas-section" aria-labelledby="mas-title">
      <div className="mas-shell">
        <h2 id="mas-title" className="mas-title">
          MULTI-ASSET SOLUTIONS
        </h2>
        <p className="mas-subtitle">
          ADS offers tailored solutions for a variety of asset classes, ensuring
          comprehensive management and optimization. Our multi-asset approach
          guarantees efficiency and precision across all financial portfolios.
        </p>

        <div ref={gridRef} className="mas-grid">
          {CARDS.map(({ title, icon, to }, i) => {
            const CardInner = (
              <>
                <div className="mas-icon-wrap" aria-hidden="true">
                  <img src={icon} alt="" className="mas-icon" />
                </div>
                <div className="mas-card-title">{title}</div>
              </>
            );

            return to ? (
              <Link
                key={title}
                to={to}
                className="mas-card"
                title={title}
                aria-label={title}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {CardInner}
              </Link>
            ) : (
              <div
                key={title}
                className="mas-card mas-card--disabled"
                role="link"
                aria-disabled="true"
                title={`${title} (Coming Soon)`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {CardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
