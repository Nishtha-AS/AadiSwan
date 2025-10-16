import React, { useState } from "react";
import "./Footer.css";

/* ---------- Brand icons (inline SVG, high-contrast) ---------- */
const BrandIcons = {
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#0A66C2" />
      <path
        d="M7 10h2v8H7zm1-4a1.25 1.25 0 1 1 0 2.5A1.25 1.25 0 0 1 8 6zM11 10h1.9v1.1h.03c.26-.5 1-1.2 2.3-1.2 2.46 0 2.94 1.6 2.94 3.6V18h-2v-3.2c0-.9-.01-1.74-1.06-1.74-1.06 0-1.22.83-1.22 1.68V18h-2v-8z"
        fill="#fff"
      />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path d="M10 9.5v5l5-2.5-5-2.5z" fill="#fff" />
    </svg>
  ),
};

/* ---------- Small composable card ---------- */
const PresenceCard = ({ city, img, addr, href }) => (
  <a
    className="presence-card-link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={`Open ${city} on Google Maps`}
  >
    <figure className="presence-card" role="group" aria-label={city}>
      <figcaption className="presence-city">{city}</figcaption>
      <img className="presence-img" src={img} alt={`${city} skyline`} loading="lazy" />
      <p className="presence-addr">{addr}</p>
    </figure>
  </a>
);

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="as-footer">
      {/* brand */}
      <div className="as-footer__brand">
        <img
          className="as-footer__logo"
          src="https://api.builder.io/api/v1/image/assets/TEMP/094ac5b656d6c9c243317250a4f4131ec257b852?width=433"
          alt="AadiSwan"
          height="48"
        />
      </div>

      {/* main grid */}
      <div className="as-footer__grid">
        {/* Presence */}
        <section aria-labelledby="presence" className="col presence">
          <h3 id="presence" className="col-title">Our Presence</h3>

          <div className="presence-grid">
            <PresenceCard
              city="NEW DELHI"
              href="https://share.google/dStUQeSzg0GTr8gSr"
              img="https://api.builder.io/api/v1/image/assets/TEMP/e085c71a9d961fa2f943124b46d389c577f62acd?width=308"
              addr="105A, 1st Floor, NDM-1, Netaji Subhash Place, Pitampura, Delhi, 110034"
            />
            <PresenceCard
              city="LUCKNOW"
              href="https://share.google/iXqJKIs2MI6btwiJq"
              img="https://api.builder.io/api/v1/image/assets/TEMP/8e705f193585327134ef1f7e574a1db4a1e620ba?width=308"
              addr="Ground & 4th Floor, Yogiraj Tower, C-47, Vibhuti Khand, Gomti Nagar, Lucknow 226010"
            />
            <PresenceCard
              city="MUMBAI"
              href="https://share.google/olKY3AY1jwzl5pTew"
              img="https://api.builder.io/api/v1/image/assets/TEMP/e7427043cd1c375fc36b357e423b369af63d958a?width=308"
              addr="Modi Business Park, Sai Nagar, Anand Nagar, Thane West, Thane, Maharashtra 400615"
            />
            <PresenceCard
              city="ABU DHABI"
              href="https://share.google/CDJIOKdTRNXqhmu9g"
              img="https://api.builder.io/api/v1/image/assets/TEMP/c509711ba12eb215bc0e358034e01dd4ae1d9589?width=308"
              addr="Office 208, Rm 2, Al Nasar Commercial Center, Najda St, Abu Dhabi 131416, AE"
            />
          </div>
        </section>

        {/* Links */}
        <nav aria-labelledby="links" className="col links">
          <h3 id="links" className="col-title">Useful Links</h3>
          <ul className="links-list">
            <li><a href="/"          className="link">Home</a></li>
            <li><a href="/about"     className="link">About Us</a></li>
            <li><a href="/products"  className="link">Products</a></li>
            <li><a href="/solutions" className="link">Solutions</a></li>
            <li><a href="/careers"   className="link">Careers</a></li>
            <li><a href="/contact"   className="link">Contact Us</a></li>
          </ul>
        </nav>

        {/* Contact */}
        <section aria-labelledby="contact" className="col contact">
          <h3 id="contact" className="col-title">Contact Us</h3>

          <div className="contact-rows">
            <a className="contact-row" href="tel:+919971777097">
              <span className="icon chip">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.83 20.73a3 3 0 0 1-3.16.7c-2.31-.83-4.53-2.13-6.57-3.87a28.9 28.9 0 0 1-4.9-5.05c-1.3-1.77-2.27-3.44-2.9-5A3 3 0 0 1 5.1 3.8l2-1a1 1 0 0 1 1.4.55l1.34 3.37a1 1 0 0 1-.22 1.06l-1 1a1 1 0 0 0-.2 1.16 20.6 20.6 0 0 0 7.65 7.68 1 1 0 0 0 1.16-.2l1-1a1 1 0 0 1 1.06-.22l3.37 1.34a1 1 0 0 1 .55 1.4z" />
                </svg>
              </span>
              <span className="contact-text">+91-9971777097</span>
            </a>
            <a className="contact-row" href="mailto:contactus@aadiswan.com">
              <span className="icon chip">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" strokeWidth="1.6"/>
                  <path d="M21 7l-9 6L3 7" />
                </svg>
              </span>
              <span className="contact-text">contactus@aadiswan.com</span>
            </a>
          </div>

          <div className="social">
            <a
              className="social-btn social-li"
              href="https://linkedin.com/company/aadiswan"
              aria-label="LinkedIn"
              title="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              {BrandIcons.linkedin}
            </a>
            <a
              className="social-btn social-yt"
              href="https://www.youtube.com/"
              aria-label="YouTube"
              title="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              {BrandIcons.youtube}
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <section aria-labelledby="write" className="col form-col">
          <h3 id="write" className="col-title">Write to Us</h3>
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="input">
              <input
                id="f-name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input">
              <input
                id="f-email"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="input">
              <textarea
                id="f-msg"
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <button type="submit" className="btn">Submit</button>
          </form>
        </section>
      </div>

      {/* bottom */}
      <div className="as-footer__bottom">
        <p className="copy">©2025 Aadiswan Info Consultants Pvt. Ltd.</p>
        <nav className="legal">
          <a href="/terms">Terms of Service</a>
          <span aria-hidden="true">•</span>
          <a href="/privacy">Privacy Policy</a>
        </nav>
      </div>
    </footer>
  );
}
