import bringtonLogo from "../assets/logo.jpg.svg";
import signature from "../assets/sign.jpg.svg";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-newsletter">
          <h2 className="newsletter-title">
            Be the First to Receive the <br /> Latest News
          </h2>
          <button className="signup-btn">Sign Up →</button>
        </div>
      </div>

      {/* Middle Section (Logo + Columns) */}
      <div className="footer-middle">
        {/* Logo column */}
        <div className="footer-col footer-logo-col">
          <img src={bringtonLogo} alt="Brington Logo" className="logo-img" />
          <span className="logo-text">Brington</span>
        </div>

        {/* Navigation */}
        <div className="footer-col">
          <h4>Navigation</h4>
          <p>Home</p>
          <p>About</p>
          <p>Numbers</p>
          <p>Contact</p>
        </div>

        {/* Social */}
        <div className="footer-col">
          <h4>Social</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>YouTube</p>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>info@mysite.com</p>
          <p>Tel: +91 234 567 890</p>
          <p>India</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-left">© 2025 by Brington Inc.</p>
        <div className="footer-right">
          <span>Built with love and caffeine</span>
          <img src={signature} alt="Signature" className="signature-img" />
        </div>
      </div>
    </footer>
  );
}
