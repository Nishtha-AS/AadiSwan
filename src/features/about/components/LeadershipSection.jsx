import React from "react";
import "./LeadershipSection.css";

const leaders = [
  {
    name: "Animesh Singh Chauhan",
    title: "Founder & CEO",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/54efe0ebfb5a8e54d51551b0a070df8a13502c69?width=900",
    desc:
      "With deep expertise in credit underwriting and technology, he drives the company's mission to deliver innovative, API-integrated credit automation solutions that empower banks, NBFCs, and MSME lenders across India and the Middle East."
  },
  {
    name: "Sudhansu Sekhar Mishra",
    title: "Director",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/1b5e5793fc043824ed9ebbe20731209ca8ee92c7?width=900",
    desc:
      "Appointed in 2020, Sudhansu Sekhar Mishra supports AadiSwan's strategic outreach and operations. With a professional background in fintech implementation and business development, he helps drive client-focused innovation and expansion."
  }
];

export default function LeadershipSection() {
  return (
    <section className="leadership-section" aria-labelledby="leadership-heading">
      {/* decorative background */}
      <div className="leadership-bg" aria-hidden="true" />

      <div className="leadership-shell">
        <header className="leadership-head">
          <h2 id="leadership-heading" className="leadership-title">LEADERSHIP</h2>
          <p className="leadership-kicker">
            Domain-first experience. Technology-driven vision. Customer-centric outcomes.
          </p>
          <p className="leadership-description">
            AadiSwan’s leadership blends decades of banking and underwriting experience with modern
            engineering. Focused on automation, AI, and API ecosystems, they drive products that are
            secure, scalable, and measurably impactful for banks and NBFCs across India and the Middle East.
          </p>
        </header>

        <div className="leadership-grid">
          {leaders.map((p) => (
            <article key={p.name} className="leader-card">
              <div className="leader-portrait">
                <span className="portrait-ring" aria-hidden="true" />
                <img src={p.img} alt={p.name} loading="lazy" />
              </div>

              <div className="leader-body">
                <h3 className="leader-name">{p.name}</h3>
                <p className="leader-title">{p.title}</p>
                <p className="leader-desc">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
