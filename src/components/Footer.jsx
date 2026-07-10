import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}

        <div className="footer-box">
          <h2>
            Flexx_abhii<span>STORE</span>
          </h2>

          <p>
            India's Premium Fitness Store for Gym Equipment, Supplements,
            Footwear & Activewear. Train Hard. Stay Strong.
          </p>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Links */}

        <div className="footer-box">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Categories */}

        <div className="footer-box">
          <h3>Categories</h3>

          <Link to="/category/protein">Protein</Link>
          <Link to="/category/footwear">Footwear</Link>
          <Link to="/category/men_wear">Men Wear</Link>
          <Link to="/category/women_wear">Women Wear</Link>
        </div>

        {/* Newsletter */}

        <div className="footer-box">
          <h3>Newsletter</h3>

          <p>Subscribe to get latest offers and fitness updates.</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />

            <button>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 GymStore. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
