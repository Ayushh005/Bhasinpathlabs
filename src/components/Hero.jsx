import { useState } from 'react'
import { Phone, MessageCircle, Award, Clock, ShieldCheck, Search, ArrowRight, CheckCircle2, Sparkles, MapPin } from 'lucide-react'

export default function Hero() {
  const [searchTerm, setSearchTerm] = useState('')

  const quickPackages = [
    { name: 'Full Body Checkup', tests: '68 Tests', discount: '50% OFF' },
    { name: 'Complete Blood Count (CBC)', tests: '24 Tests', popular: true },
    { name: 'Thyroid Profile (Total)', tests: '3 Tests' },
    { name: 'Diabetes Panel (HbA1c)', tests: '4 Tests' },
    { name: 'Vitamin D & B12 Combo', tests: '2 Tests' },
  ]

  return (
    <section className="hero" id="hero">
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content fade-in">
            <div className="hero-pill-badge">
              <span className="hero-pill-dot"></span>
              <span className="hero-pill-text">NABL Accredited • ISO 15189:2022 Certified Lab</span>
            </div>

            <h1 className="hero-title">
              Doctors Behind<br />
              <span className="gradient-text">Every Single Result.</span>
            </h1>

            <p className="hero-description">
              Medically led by veteran pathologists overseeing every diagnostic test. Experience 100% accurate results with 24×7 walk-in services and 30-minute doorstep sample collection across Delhi NCR.
            </p>

            {/* Quick Test Search Bar */}
            <div className="hero-search-wrapper">
              <div className="hero-search-box">
                <Search className="hero-search-icon" />
                <input
                  type="text"
                  placeholder="Search 2,000+ tests (e.g. CBC, Lipid, HbA1c, Vitamin D...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="hero-search-input"
                />
                <a href="#services" className="hero-search-btn">
                  <span>Find Test</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Quick tags */}
              <div className="hero-popular-tags">
                <span className="popular-label">Popular:</span>
                {quickPackages.slice(0, 3).map((pkg) => (
                  <a
                    key={pkg.name}
                    href="#services"
                    className="popular-tag-pill"
                  >
                    <span>{pkg.name}</span>
                    {pkg.discount && <span className="discount-chip">{pkg.discount}</span>}
                  </a>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-buttons">
              <a href="tel:+919311193111" className="btn btn-primary btn-lg">
                <Phone size={18} />
                <span>Call +91 93111 93111</span>
              </a>
              <a
                href="https://wa.me/919311193111?text=Hi%2C%20I%20would%20like%20to%20book%20a%20blood%20test%20or%20home%20collection"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={18} />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Micro Trust Indicators */}
            <div className="hero-trust-row">
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>Free Home Sample Pickup*</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>Reports within 6 Hours</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" />
                <span>Senior Pathologist Sign-off</span>
              </div>
            </div>

            {/* Feature Badges */}
            <div className="hero-badges">
              <div className="hero-badge">
                <div className="hero-badge-icon badge-blue">
                  <Award size={20} />
                </div>
                <div className="hero-badge-text">
                  <span className="hero-badge-highlight">26+ Years</span>
                  <span>Trusted Since 2000</span>
                </div>
              </div>
              <div className="hero-badge">
                <div className="hero-badge-icon badge-teal">
                  <Clock size={20} />
                </div>
                <div className="hero-badge-text">
                  <span className="hero-badge-highlight">24×7×365</span>
                  <span>Always Open In GK-1</span>
                </div>
              </div>
              <div className="hero-badge">
                <div className="hero-badge-icon badge-indigo">
                  <ShieldCheck size={20} />
                </div>
                <div className="hero-badge-text">
                  <span className="hero-badge-highlight">NABL</span>
                  <span>ISO 15189 Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card Showcase */}
          <div className="hero-visual fade-in-right">
            <div className="hero-card-main">
              <div className="hero-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80"
                  alt="Doctor and clinical diagnostics pathologist at Dr Bhasin's Lab"
                  loading="eager"
                  className="hero-main-img"
                />
                <div className="hero-image-overlay"></div>
              </div>

              {/* Floating Live Status Card 1 */}
              <div className="hero-floating-card card-top-right">
                <div className="pulse-indicator">
                  <span className="pulse-dot"></span>
                </div>
                <div>
                  <div className="floating-card-title">Home Collection Live</div>
                  <div className="floating-card-sub">Slots available now in Delhi NCR</div>
                </div>
              </div>

              {/* Floating Trust Card 2 */}
              <div className="hero-floating-card card-bottom-left">
                <div className="floating-card-icon">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <div className="floating-card-title">100% Doctor Verified</div>
                  <div className="floating-card-sub">Every report signed by MD Pathologist</div>
                </div>
              </div>

              {/* Floating Location Card 3 */}
              <div className="hero-floating-card card-bottom-right">
                <div className="location-pin-icon">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="floating-card-title">GK-I Centre</div>
                  <div className="floating-card-sub">Open 24 Hours Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
