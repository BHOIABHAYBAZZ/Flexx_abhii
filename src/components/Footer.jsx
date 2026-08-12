import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
} from "react-icons/fa";

import {
  SiVisa,
  SiMastercard,
  SiPaytm,
} from "react-icons/si";

import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Top Features */}

      <div className="footer-features">
        <div className="feature">
          <FaShippingFast />
          <span>Free Shipping</span>
        </div>

        <div className="feature">
          <FaShieldAlt />
          <span>Secure Payment</span>
        </div>

        <div className="feature">
          <FaUndoAlt />
          <span>Easy Returns</span>
        </div>
      </div>

      <div className="footer-top">

        {/* Brand */}

        <div className="footer-box">
          <h2>
            Flexx_abhii<span>STORE</span>
          </h2>

          <p>
            India's Premium Fitness Store for Gym Equipment,
            Supplements, Footwear & Activewear.
          </p>

          <div className="contact-info">
            <p><FaPhoneAlt /> +91 8849972202</p>
            <p><FaEnvelope /> abhaybhoi@gmail.com</p>
            <p><FaMapMarkerAlt /> Gujarat, India</p>
          </div>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/newarrivals">New Arrivals</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/accessories">Accessories</Link>
        </div>

        {/* Categories */}

        <div className="footer-box">
          <h3>Categories</h3>

          <Link to="/protein">Protein</Link>
          <Link to="/footwear">Footwear</Link>
          <Link to="/men">Men Wear</Link>
          <Link to="/women">Women Wear</Link>
          <Link to="/gymequipment">Gym Equipment</Link>
        </div>

        {/* Newsletter */}

        <div className="footer-box">
          <h3>Newsletter</h3>

          <p>
            Subscribe to get exclusive offers &
            fitness updates.
          </p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              <FaArrowRight />
            </button>
          </div>

          {/* Payment Icons */}

          <div className="payment-icons">
            <SiVisa />
            <SiMastercard />
            <SiPaytm />
            <span className="payment-text">UPI</span>
            <span className="payment-text">RuPay</span>
          </div>

        </div>

      </div>

      <div className="footer-bottom">
        <p style={{color:"white"}}>
          © 2026 Flexx_abhii Store. All Rights Reserved.
        </p>

        <p style={{color:"white"}}>
          Made with ❤️ by <strong>Abhay Bhoi</strong>
        </p>
      </div>

    </footer>
  );
}