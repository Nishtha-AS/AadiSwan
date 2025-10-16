import React, { useEffect, useRef } from 'react';
import './ConsultancySection.css';

const ConsultancySection = () => {
  const sectionRef = useRef(null);

  // Subtle reveal-on-scroll animations
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const items = root.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="consultancy" ref={sectionRef}>
      <div className="consultancy-shell">
        {/* Left column */}
        <div className="consultancy-left reveal">
          <h2 className="consultancy-heading">
            CONSULTANCY SERVICE BY AADISWAN
          </h2>

          <p className="consultancy-lead">
            In addition to our cutting-edge products, Aadiswan offers specialized
            consultancy services designed to elevate your organizational
            capabilities. With over 250 years of combined team experience, we
            provide expert guidance to support your entry into new domains. By
            collaborating closely with your risk, underwriting, and product teams,
            we ensure that banks can navigate complex areas with confidence and
            precision. Our consultancy services are tailored to address gaps in
            expertise, leveraging our extensive knowledge to enhance your strategic
            initiatives and operational efficiency.
          </p>

          <ul className="consultancy-bullets">
            <li className="reveal" style={{ transitionDelay: '60ms' }}>
              <span className="check-bullet" aria-hidden>✓</span>
              <span>Expertise Driven Insights</span>
            </li>
            <li className="reveal" style={{ transitionDelay: '120ms' }}>
              <span className="check-bullet" aria-hidden>✓</span>
              <span>Prompt &amp; Flexible Support</span>
            </li>
            <li className="reveal" style={{ transitionDelay: '180ms' }}>
              <span className="check-bullet" aria-hidden>✓</span>
              <span>Collaborative Approach</span>
            </li>
          </ul>
        </div>

        {/* Right column – timeline */}
        <div className="consultancy-right">
          <ol className="timeline" role="list">
            {/* Step 1 */}
            <li className="timeline-item reveal" style={{ transitionDelay: '80ms' }}>
              <div className="timeline-rail" aria-hidden>
                <span className="dot">01</span>
                <span className="rail"></span>
              </div>
              <div className="timeline-card">
                <h3>Initial Assessment</h3>
                <p>
                  Begin with a comprehensive evaluation of your current processes and
                  expertise gaps to tailor a customized consultancy approach.
                </p>
              </div>
            </li>

            {/* Step 2 */}
            <li className="timeline-item reveal" style={{ transitionDelay: '140ms' }}>
              <div className="timeline-rail" aria-hidden>
                <span className="dot">02</span>
                <span className="rail"></span>
              </div>
              <div className="timeline-card">
                <h3>Strategic Planning</h3>
                <p>
                  Develop a detailed action plan, including specific recommendations
                  and strategies, in collaboration with your CXOs, risk, underwriting,
                  and product teams.
                </p>
              </div>
            </li>

            {/* Step 3 */}
            <li className="timeline-item reveal" style={{ transitionDelay: '200ms' }}>
              <div className="timeline-rail" aria-hidden>
                <span className="dot">03</span>
                <span className="rail"></span>
              </div>
              <div className="timeline-card">
                <h3>Implementation Support</h3>
                <p>
                  Provide hands-on assistance during the implementation phase,
                  ensuring smooth roll out and addressing any challenges that arise.
                </p>
              </div>
            </li>

            {/* Step 4 */}
            <li className="timeline-item reveal" style={{ transitionDelay: '260ms' }}>
              <div className="timeline-rail" aria-hidden>
                <span className="dot">04</span>
                {/* Longer blue tail above success */}
                <span className="rail rail-end"></span>
              </div>
              <div className="timeline-card">
                <h3>Ongoing Evaluation</h3>
                <p>
                  Conclude with a thorough review of outcomes, measuring success
                  against goals, and offering continuous support for long-term
                  effectiveness.
                </p>
              </div>
            </li>

            {/* Step 5 – Implementation Success */}
            <li className="timeline-item success-item reveal" style={{ transitionDelay: '320ms' }} aria-label="Implementation success">
              <div className="timeline-rail" aria-hidden>
                <span className="dot success-dot" aria-hidden>✓</span>
                {/* green tail removed visually via CSS */}
                <span className="rail rail-success"></span>
              </div>
              <div className="success-card">
                <span className="success-text">Implementation Success</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ConsultancySection;
