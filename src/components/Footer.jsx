import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
} from 'lucide-react'

/* Inline social SVG icons since lucide-react doesn't include brand icons */
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.449-1.44z"/>
    </svg>
  )
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-logo-container">
              <img
                src="/dr-bhasins-lab-logo.png"
                alt="Dr Bhasin's Lab - Trusted Quality & Service"
                className="footer-brand-logo-img"
              />
            </div>
            <p>
              NABL accredited pathology laboratory providing trusted diagnostic services
              since 2000. Open 24x7x365 at Greater Kailash I, New Delhi.
            </p>
            <div className="footer-social">
              <a href="https://facebook.com" className="footer-social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href="https://instagram.com" className="footer-social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
              <a href="https://twitter.com" className="footer-social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
              <a href="https://youtube.com" className="footer-social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li className="footer-link-item"><a href="#">Home</a></li>
              <li className="footer-link-item"><a href="#services">Home Collection</a></li>
              <li className="footer-link-item"><a href="#services">Test Library</a></li>
              <li className="footer-link-item"><a href="#packages">Health Packages</a></li>
              <li className="footer-link-item"><a href="#why-us">About Us</a></li>
              <li className="footer-link-item"><a href="#accreditation">Accreditation</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Diagnostic Services</h4>
            <ul className="footer-links">
              <li className="footer-link-item"><a href="#services">Routine Blood Tests</a></li>
              <li className="footer-link-item"><a href="#services">Cardiac Risk Markers</a></li>
              <li className="footer-link-item"><a href="#services">Thyroid & Hormones</a></li>
              <li className="footer-link-item"><a href="#services">Diabetes Monitoring</a></li>
              <li className="footer-link-item"><a href="#services">Paediatric Phlebotomy</a></li>
              <li className="footer-link-item"><a href="#services">Flu & Viral Profiles</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact & Lab Centre</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>S-35, Greater Kailash I, New Delhi - 110048</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} />
                <a href="tel:+919311193111" style={{ color: 'white', fontWeight: 600 }}>+91 93111 93111</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <a href="mailto:info@bhasinpathlabs.com">info@bhasinpathlabs.com</a>
              </div>
              <div className="footer-contact-item">
                <Clock size={18} />
                <span>Open 24 Hours • 7 Days • 365 Days</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Dr Bhasin's Lab. All rights reserved. NABL ISO 15189:2022 Accredited.</p>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">NABL Scope</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
