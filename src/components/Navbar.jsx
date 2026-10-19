import { useState, useEffect } from 'react'
import { Phone, MessageCircle, Menu, X, CalendarCheck } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const navLinks = [
    { label: 'Home', href: '#', active: true },
    { label: 'Home Collection', href: '#services' },
    { label: 'Test Library', href: '#services' },
    { label: 'Health Packages', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Accreditation', href: '#accreditation' },
    { label: 'Contact', href: '#footer' },
  ]

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar-nav">
            <a href="#" className="navbar-brand">
              <img
                src="/dr-bhasins-lab-logo.png"
                alt="Dr Bhasin's Lab - Trusted Quality & Service"
                className="brand-logo-img"
              />
            </a>

            <div className="navbar-desktop-menu">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`navbar-nav-link ${link.active ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="navbar-cta-group">
              <a
                href="https://wa.me/919311193111"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon-link whatsapp-link"
                title="WhatsApp Us"
              >
                <MessageCircle size={19} />
              </a>

              <a
                href="tel:+919311193111"
                className="nav-icon-link phone-link"
                title="Call 24x7 Lab"
              >
                <Phone size={19} />
              </a>

              <a href="#services" className="btn btn-navbar-booking">
                <CalendarCheck size={16} />
                <span>Book Home Visit</span>
              </a>

              <button
                className="mobile-hamburger-btn"
                onClick={() => setMobileOpen(true)}
                aria-label="Open mobile navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)}>
        <div className="mobile-nav-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-nav-top">
            <a href="#" className="navbar-brand" onClick={() => setMobileOpen(false)}>
              <img
                src="/dr-bhasins-lab-logo.png"
                alt="Dr Bhasin's Lab - Trusted Quality & Service"
                className="brand-logo-img"
              />
            </a>
            <button
              className="mobile-close-btn"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-link"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mobile-nav-footer">
            <a
              href="https://wa.me/919311193111"
              className="btn btn-whatsapp w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> WhatsApp Booking
            </a>
            <a href="tel:+919311193111" className="btn btn-primary w-full">
              <Phone size={18} /> Call 93111 93111
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
