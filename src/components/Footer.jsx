import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="footer">
      {/* Top brand bar */}
      <div className="footer__brand">
        <img
          className="footer__logo"
          src="https://api.builder.io/api/v1/image/assets/TEMP/094ac5b656d6c9c243317250a4f4131ec257b852?width=433"
          alt="AadiSwan logo"
        />
      </div>

      {/* Main content */}
      <div className="footer__container">
        {/* Our Presence */}
        <section className="footer__col footer__presence" aria-labelledby="presence-title">
          <h3 id="presence-title" className="footer__title">Our Presence</h3>

          <div className="presence__grid">
            {/* New Delhi */}
            <figure className="presence__card">
              <figcaption className="presence__city">NEW DELHI</figcaption>
              <img
                className="presence__img"
                src="https://api.builder.io/api/v1/image/assets/TEMP/e085c71a9d961fa2f943124b46d389c577f62acd?width=308"
                alt="New Delhi skyline"
              />
              <p className="presence__addr">
                105A, 1st Floor, NDM-1, Netaji Subhash Place, Pitampura, Delhi, 110034
              </p>
            </figure>

            {/* Lucknow */}
            <figure className="presence__card">
              <figcaption className="presence__city">LUCKNOW</figcaption>
              <img
                className="presence__img"
                src="https://api.builder.io/api/v1/image/assets/TEMP/8e705f193585327134ef1f7e574a1db4a1e620ba?width=308"
                alt="Lucknow skyline"
              />
              <p className="presence__addr">
                Ground and 4th Floor, Yogiraj Tower, C-47, Vibhuti Khand, Gomti Nagar,
                Lucknow, Uttar Pradesh 226010
              </p>
            </figure>

            {/* Mumbai */}
            <figure className="presence__card">
              <figcaption className="presence__city">MUMBAI</figcaption>
              <img
                className="presence__img"
                src="https://api.builder.io/api/v1/image/assets/TEMP/e7427043cd1c375fc36b357e423b369af63d958a?width=308"
                alt="Mumbai skyline"
              />
              <p className="presence__addr">
                Modi Business Park, Sai Nagar, Anand Nagar, Thane West, Thane, Maharashtra 400615
              </p>
            </figure>

            {/* Abu Dhabi */}
            <figure className="presence__card">
              <figcaption className="presence__city">ABU DHABI</figcaption>
              <img
                className="presence__img"
                src="https://api.builder.io/api/v1/image/assets/TEMP/c509711ba12eb215bc0e358034e01dd4ae1d9589?width=308"
                alt="Abu Dhabi skyline"
              />
              <p className="presence__addr">
                Office No: 208, Room No: 2, Al Nasar Commercial Center, Najda Street, Abu Dhabi 131416, AE
              </p>
            </figure>
          </div>
        </section>

        {/* Useful Links */}
        <nav className="footer__col footer__links" aria-labelledby="links-title">
          <h3 id="links-title" className="footer__title">Useful Links</h3>
          <ul className="links__list">
            <li><a className="links__item" href="/">Home</a></li>
            <li><a className="links__item" href="/about">About Us</a></li>
            <li><a className="links__item" href="/products">Products</a></li>
            <li><a className="links__item" href="/solutions">Solutions</a></li>
            <li><a className="links__item" href="/careers">Careers</a></li>
            <li><a className="links__item" href="/contact">Contact Us</a></li>
          </ul>
        </nav>

        {/* Contact Us */}
        <section className="footer__col footer__contact" aria-labelledby="contact-title">
          <h3 id="contact-title" className="footer__title">Contact Us</h3>

          <div className="contact__rows">
            <div className="contact__row">
              <svg className="contact__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15.0501 5C16.0268 5.19057 16.9244 5.66826 17.6281 6.37194C18.3318 7.07561 18.8095 7.97326 19.0001 8.95M15.0501 1C17.0793 1.22544 18.9716 2.13417 20.4163 3.57701C21.8609 5.01984 22.7721 6.91101 23.0001 8.94M22.0001 16.92V19.92C22.0012 20.1985 21.9441 20.4742 21.8326 20.7293C21.721 20.9845 21.5574 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6408 21.8227C20.377 21.9119 20.0974 21.9451 19.8201 21.92C16.7429 21.5856 13.7871 20.5341 11.1901 18.85C8.77388 17.3147 6.72539 15.2662 5.19006 12.85C3.50003 10.2412 2.4483 7.27099 2.12006 4.18C2.09507 3.90347 2.12793 3.62476 2.21656 3.36162C2.30518 3.09849 2.44763 2.85669 2.63482 2.65162C2.82202 2.44655 3.04986 2.28271 3.30385 2.17052C3.55783 2.05833 3.8324 2.00026 4.11006 2H7.11006" stroke="#56AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a className="contact__link" href="tel:+919971777097">+91-9971777097</a>
            </div>

            <div className="contact__row">
              <svg className="contact__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#56AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="#56AEFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a className="contact__link" href="mailto:contactus@aadiswan.com">contactus@aadiswan.com</a>
            </div>
          </div>

          <div className="social">
            <a className="social__btn" href="https://linkedin.com/company/aadiswan" aria-label="LinkedIn">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M8.125 10C9.16054 10 10 9.16054 10 8.125C10 7.08946 9.16054 6.25 8.125 6.25C7.08946 6.25 6.25 7.08946 6.25 8.125C6.25 9.16054 7.08946 10 8.125 10Z" fill="white"/>
                <path d="M6.25 12.5C6.25 11.8097 6.80965 11.25 7.5 11.25H8.75C9.44035 11.25 10 11.8096 10 12.5V22.5C10 23.1904 9.44035 23.75 8.75 23.75H7.5C6.80965 23.75 6.25 23.1904 6.25 22.5V12.5Z" fill="white"/>
                <path d="M13.75 23.75H15C15.6904 23.75 16.25 23.1904 16.25 22.5V16.875C16.25 15 20 13.75 20 16.25V22.5005C20 23.1909 20.5596 23.75 21.25 23.75H22.5C23.1904 23.75 23.75 23.1904 23.75 22.5V15C23.75 12.5 21.875 11.25 19.375 11.25C16.875 11.25 16.25 13.125 16.25 13.125V12.5C16.25 11.8096 15.6904 11.25 15 11.25H13.75C13.0596 11.25 12.5 11.8097 12.5 12.5V22.5C12.5 23.1904 13.0596 23.75 13.75 23.75Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M25 1.25C27.0711 1.25 28.75 2.92894 28.75 5V25C28.75 27.0711 27.0711 28.75 25 28.75H5C2.92894 28.75 1.25 27.0711 1.25 25V5C1.25 2.92894 2.92894 1.25 5 1.25H25Z" fill="white"/>
              </svg>
            </a>

            <a className="social__btn" href="https://instagram.com/aadiswan" aria-label="Instagram">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 22.5C19.1421 22.5 22.5 19.1421 22.5 15C22.5 10.8579 19.1421 7.5 15 7.5C10.8579 7.5 7.5 10.8579 7.5 15C7.5 19.1421 10.8579 22.5 15 22.5ZM15 20C17.7614 20 20 17.7614 20 15C20 12.2386 17.7614 10 15 10C12.2386 10 10 12.2386 10 15C10 17.7614 12.2386 20 15 20Z" fill="white"/>
                <path d="M22.5 6.25C21.8096 6.25 21.25 6.80965 21.25 7.5C21.25 8.19035 21.8096 8.75 22.5 8.75C23.1904 8.75 23.75 8.19035 23.75 7.5C23.75 6.80965 23.1904 6.25 22.5 6.25Z" fill="white"/>
              </svg>
            </a>

            <a className="social__btn" href="https://facebook.com/aadiswan" aria-label="Facebook">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M25 1.25C27.0711 1.25 28.75 2.92894 28.75 5V25C28.75 27.0711 27.0711 28.75 25 28.75H5C2.92894 28.75 1.25 27.0711 1.25 25V5C1.25 2.92894 2.92894 1.25 5 1.25H25Z" fill="white"/>
                <path d="M18.75 26.25V17.5H21.35c.54 0 1.02-.35 1.19-.86l.55-1.66c.2-.61-.23-1.24-.87-1.24H18.75V10c0-.62.62-1.25 1.25-1.25H22.5V7.9c0-.4-.26-.76-.65-.86C20 6.59 18.75 6.59 18.75 6.59c-3.12 0-5 2.16-5 4.03v3.13H12.5c-.69 0-1.25.56-1.25 1.25v1.25c0 .69.56 1.25 1.25 1.25h1.25v8.75" fill="white"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Contact Form */}
        <section className="footer__col footer__form" aria-labelledby="form-title">
          <h3 id="form-title" className="footer__title sr-only">Contact form</h3>
          <form className="form" onSubmit={handleSubmit} noValidate>
            <label className="sr-only" htmlFor="f-name">Name</label>
            <input
              id="f-name"
              className="form__input"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label className="sr-only" htmlFor="f-email">Email</label>
            <input
              id="f-email"
              className="form__input"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label className="sr-only" htmlFor="f-msg">Your Message</label>
            <textarea
              id="f-msg"
              className="form__textarea"
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
            />

            <button type="submit" className="form__btn">Submit</button>
          </form>
        </section>
      </div>

      {/* Bottom strip */}
      <div className="footer__bottom">
        <p className="footer__copy">©2025 Aadiswan Info Consultants Pvt. Ltd.</p>
        <div className="footer__legal">
          <a className="footer__legalLink" href="/terms">Terms of Service</a>
          <a className="footer__legalLink" href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
