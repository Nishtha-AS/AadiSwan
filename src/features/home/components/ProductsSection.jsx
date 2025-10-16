import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ProductsSection.css';

// Logos
import credProLogo from '../../../assets/CredPro_logo.png';
import cadProLogo from '../../../assets/CADPro_logo.png';
import camProLogo from '../../../assets/CAMPro_logo.png';
import esmsProLogo from '../../../assets/ESMSPro_logo.png';
import ewsProLogo from '../../../assets/EWSPro_logo.png';

const products = [
  {
    key: 'credpro',
    title: 'AS CredPro',
    logo: credProLogo,
    to: '/credpro',
    desc:
      "AadiSwan's flagship lending suite, covering origination, underwriting, credit administration, covenant management, and valuation/legal workflows. Using self-service BRE, it automates end-to-end processes, ensuring precise evaluations, compliance, and faster turnaround times.",
  },
  {
    key: 'cadpro',
    title: 'AS CADPro',
    logo: cadProLogo,
    to: '/cadpro',
    desc:
      'CADPro streamlines credit administration with automated document templatization, covenant scheduling & tracking, disbursement workflows, pre/post disbursement compliance—ensuring consistency & transparency while reducing manual intervention.',
  },
  {
    key: 'campro',
    title: 'AS CAMPro',
    logo: camProLogo,
    to: '/campro',
    desc:
      'CAMPro is an AI- and ML-powered engine that automates credit appraisals by generating analyst-style memos, projecting financials, benchmarking peers, and delivering sentiment analysis with forward-looking metrics for faster, consistent lending decisions.',
  },
  {
    key: 'esmspro',
    title: 'AS ESMSPro',
    logo: esmsProLogo,
    to: '/esmspro',
    desc:
      'ESMSPro integrates environmental & social risk criteria into lending processes, enabling assessments, monitoring, and reporting that support responsible, sustainable financing practices.',
  },
  {
    key: 'ewspro',
    title: 'AS EWSPro',
    logo: ewsProLogo,
    to: '/ewspro',
    desc:
      'EWSPro delivers early warning signals by monitoring behavioral, financial, and non-financial indicators—enabling proactive risk management and timely interventions to reduce defaults.',
  },
];

export default function ProductsSection() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Title + subtitle
    const headBits = root.querySelectorAll('.op-title, .op-subtitle');
    const cards = root.querySelectorAll('.op-card');

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('op-in');
            // Stop watching after first reveal
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    headBits.forEach((el, i) => {
      el.style.setProperty('--d', `${i * 120}ms`);
      io.observe(el);
    });

    cards.forEach((card, i) => {
      // stagger each card
      card.style.setProperty('--d', `${i * 90 + 180}ms`);
      io.observe(card);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section className="our-products v2" aria-labelledby="products-title" ref={rootRef}>
      <div className="op-shell">
        <h2 id="products-title" className="op-title">OUR PRODUCTS</h2>
        <p className="op-subtitle">
          ADS offers tailored solutions for a variety of asset classes, ensuring comprehensive management and optimization.
          Our multi-asset approach guarantees efficiency and precision across all financial portfolios.
        </p>

        <div className="op-grid">
          {products.map(({ key, title, logo, desc, to }) => {
            const cardInner = (
              <>
                <img className="op-logo" src={logo} alt={title} loading="lazy" />
                <h3 className="op-card-title">{title}</h3>
                <p className="op-desc">{desc}</p>
                <span className="op-btn" role="button" tabIndex={0}>
                  More <span className="op-arrow">→</span>
                </span>
                <span className="op-card-border" aria-hidden />
              </>
            );

            return (
              <article key={key} className="op-card">
                {to && to !== '#'
                  ? (
                    <Link to={to} className="op-card-link" aria-label={`${title} details`}>
                      {cardInner}
                    </Link>
                  )
                  : (
                    <div className="op-card-link" aria-label={`${title} details`}>
                      {cardInner}
                    </div>
                  )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
