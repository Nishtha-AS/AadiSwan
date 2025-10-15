import React, { useEffect, useRef, useState } from "react";
import "./StatisticsSection.css";

const STATS = [
  { value: 50, labelTop: "Expert", labelBottom: "Consultants", plus: true },
  { value: 100, labelTop: "API", labelBottom: "Integrations", plus: true },
  { value: 10, labelTop: "Years of", labelBottom: "Experience", plus: true, dot: true },
  { value: 8, labelTop: "Industry", labelBottom: "Clients", plus: false, icon: "lock" },
];

function useCountUp(inView, target, duration = 1200) {
  const [n, setN] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return n;
}

export default function StatisticsSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`stats-wrap ${inView ? "in-view" : ""}`}>
      {/* Heading sits on white, above the map */}
      <div className="stats-head">
        <h2 className="stats-heading">OUR NUMBERS SPEAKS FOR US</h2>
      </div>

      {/* Map + cards block */}
      <div className="stats-body">
        <div className="stats-grid">
          {STATS.map((s, i) => {
            const value = useCountUp(inView, s.value);
            return (
              <div key={i} className="stat-card">
                <div className="card-halo" aria-hidden />
                <div className="stat-top">
                  {s.icon === "lock" && (
                    <svg
                      className="stat-icon"
                      viewBox="0 0 24 24"
                      width="28"
                      height="28"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 10V8a6 6 0 1 1 12 0v2"
                        stroke="#1C5682"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <rect
                        x="4"
                        y="10"
                        width="16"
                        height="10"
                        rx="2"
                        stroke="#1C5682"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  )}
                  <div className="stat-number">
                    <span>{value}</span>
                    {s.plus && <span className="plus">+</span>}
                    {s.dot && <span className="dot" />}
                  </div>
                </div>

                <div className="stat-label">
                  <div>{s.labelTop}</div>
                  <div>{s.labelBottom}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
