import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row g-5">
          
          {/* العمود الأول: الهوية */}
          <div className="col-lg-4 col-md-12">
            <h3 className="footer-logo mb-4">MASKANY<span className="dot">.</span></h3>
            <p className="footer-bio">
              We redefine luxury living by connecting elite clients with the most prestigious properties worldwide.
            </p>
            <div className="social-container mt-4">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة */}
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="footer-list">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/properties">Properties</NavLink></li>
              <li><NavLink to="/agents">Our Agents</NavLink></li>
              <li><NavLink to="/help">Help Center</NavLink></li>
            </ul>
          </div>

          {/* العمود الثالث: خدماتنا */}
          <div className="col-lg-2 col-md-4 col-6">
            <h6 className="footer-heading">Services</h6>
            <ul className="footer-list">
              <li><NavLink to="/add-property">List Property</NavLink></li>
              <li><NavLink to="/packages">Our Packages</NavLink></li>
              <li><NavLink to="/mortgage">Calculator</NavLink></li>
              <li><NavLink to="/privacy">Privacy</NavLink></li>
            </ul>
          </div>

          {/* العمود الرابع: النشرة البريدية */}
          <div className="col-lg-4 col-md-4">
            <h6 className="footer-heading">Newsletter</h6>
            <p className="small footer-bio mb-4">Subscribe to get latest property updates.</p>
            <div className="newsletter-group">
              <input type="email" placeholder="Email Address" className="newsletter-input" />
              <button className="newsletter-btn">Join</button>
            </div>
          </div>

        </div>

        <div className="footer-bottom mt-5 pt-4">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="copy-text">© 2026 Maskany. Designed by <strong>Abdul-Rahman Omar</strong></p>
            </div>
            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <i className="bi bi-credit-card-2-back me-3 fs-5"></i>
              <i className="bi bi-paypal me-3 fs-5"></i>
              <i className="bi bi-shield-check fs-5"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;