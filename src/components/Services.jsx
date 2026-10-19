import { useState } from 'react'
import {
  Home,
  Building2,
  HeartPulse,
  Baby,
  ShieldCheck,
  Users,
  ArrowRight,
  Check,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
} from 'lucide-react'

const services = [
  {
    icon: <Home size={24} />,
    color: 'service-blue',
    title: 'Home Sample Collection',
    tag: 'Free in GK-1 & South Delhi',
    description:
      'Convenient 30-minute home visit slots from 6 AM to midnight. Qualified phlebotomists follow rigorous sterile safety standards.',
    link: 'Book home collection',
    href: '#journey',
  },
  {
    icon: <Building2 size={24} />,
    color: 'service-teal',
    title: '24×7 Walk-in Testing',
    tag: 'Always Open',
    description:
      'Visit our primary GK-I facility any hour of the day or night. Immediate processing for urgent diagnostics and routine workups.',
    link: 'Centre timings & directions',
    href: '#why-us',
  },
  {
    icon: <HeartPulse size={24} />,
    color: 'service-rose',
    title: 'Preventive Health Checkups',
    tag: 'Up to 50% Off',
    description:
      'Curated panels designed by pathologists covering cardiac, diabetic, liver, kidney, vitamin & hormone health parameters.',
    link: 'View all packages',
    href: '#packages',
  },
  {
    icon: <Baby size={24} />,
    color: 'service-amber',
    title: 'Paediatric Sample Collection',
    tag: 'Gentle & Anxious-free',
    description:
      'Specialized paediatric needles and experienced staff trained in compassionate, tear-free phlebotomy for infants and children.',
    link: 'Paediatric care guide',
    href: '#journey',
  },
  {
    icon: <ShieldCheck size={24} />,
    color: 'service-indigo',
    title: 'NABL Certified Quality',
    tag: 'ISO 15189:2022',
    description:
      'Every test parameter is run on automated, calibrated analyzers with stringent multi-level internal and external quality checks.',
    link: 'Learn about accreditation',
    href: '#accreditation',
  },
  {
    icon: <Users size={24} />,
    color: 'service-purple',
    title: 'Doctor & Institutional Panels',
    tag: 'Clinical Tie-ups',
    description:
      'Referral reporting, clinic logistics support, hospital lab management and bespoke corporate wellness initiatives.',
    link: 'Institutional partnerships',
    href: '#faq',
  },
]

const healthPackages = [
  {
    id: 'sehat-start',
    name: 'Sehat Start Package',
    badge: 'Popular',
    idealFor: 'Annual baseline routine screening',
    testsCount: '48 Parameters',
    price: '₹1,300',
    originalPrice: '₹2,400',
    discount: '46% OFF',
    fasting: '10-12 hrs fasting required',
    turnaround: 'Same day report (6 hrs)',
    features: [
      'Complete Blood Count (CBC - 24 params)',
      'Liver Function Test (LFT - 11 params)',
      'Kidney Function Test (KFT - 5 params)',
      'Fasting Blood Sugar (Glucose)',
      'Complete Urine Examination',
    ],
  },
  {
    id: 'advance-health',
    name: 'Advance Health Checkup',
    badge: 'Most Recommended',
    isPopular: true,
    idealFor: 'Comprehensive wellness for men & women 30+',
    testsCount: '78 Parameters',
    price: '₹2,800',
    originalPrice: '₹5,500',
    discount: '49% OFF',
    fasting: '10-12 hrs fasting required',
    turnaround: 'Same day report',
    features: [
      'Everything in Sehat Start Package',
      'Lipid Profile (Cholesterol & Triglycerides)',
      'Thyroid Profile (T3, T4, TSH)',
      'HbA1c (3-month Diabetes Average)',
      'Serum Calcium & Uric Acid',
      'Free Home Sample Collection',
    ],
  },
  {
    id: 'premium-comprehensive',
    name: 'Premium Full Body Checkup',
    badge: 'Executive',
    idealFor: 'Complete organ & metabolic assessment 40+',
    testsCount: '92 Parameters',
    price: '₹5,200',
    originalPrice: '₹9,800',
    discount: '47% OFF',
    fasting: '10-12 hrs fasting required',
    turnaround: '24 hrs (includes Vitamin D & B12)',
    features: [
      'Everything in Advance Checkup',
      'Vitamin D (25-OH) & Vitamin B12',
      'Iron Deficiency Profile',
      'Cardiac Risk Markers (hs-CRP)',
      'Electrolytes (Na, K, Cl)',
      'Free Doctor Report Consultation',
    ],
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section className="services" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header fade-in">
          <div className="section-pill-tag">
            <Sparkles size={14} />
            <span>CLINICAL EXCELLENCE</span>
          </div>
          <h2 className="section-title">
            Comprehensive Testing & <span className="gradient-text">Diagnostics Services</span>
          </h2>
          <p className="section-subtitle">
            From seamless home sample collections across Delhi NCR to 24×7 urgent lab investigations, we provide accurate, doctor-verified diagnostic care.
          </p>
        </div>

        {/* Diagnostic Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card fade-in"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="service-card-top">
                <div className={`service-icon-box ${service.color}`}>
                  {service.icon}
                </div>
                {service.tag && (
                  <span className="service-tag-chip">{service.tag}</span>
                )}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a href={service.href} className="service-action-link">
                <span>{service.link}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        {/* Health Packages Highlight Section */}
        <div className="packages-container" id="packages">
          <div className="packages-header">
            <div>
              <span className="section-pill-tag tag-emerald">
                <HeartPulse size={14} />
                <span>PREVENTIVE PACKAGES</span>
              </span>
              <h3 className="packages-section-title">
                Popular Doctor-Designed <span className="gradient-text">Health Packages</span>
              </h3>
              <p className="packages-section-desc">
                Transparent pricing, comprehensive parameter inclusions, and home collection.
              </p>
            </div>
            <a
              href="https://wa.me/919311193111?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20health%20packages"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp-outline"
            >
              <MessageCircle size={16} />
              <span>Ask Pathologist on WhatsApp</span>
            </a>
          </div>

          <div className="packages-grid">
            {healthPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`package-card ${pkg.isPopular ? 'popular-card' : ''}`}
              >
                {pkg.isPopular && (
                  <div className="popular-badge-ribbon">⭐ Most Popular</div>
                )}
                <div className="package-top">
                  <div className="package-tag-row">
                    <span className="pkg-badge">{pkg.badge}</span>
                    <span className="pkg-count">{pkg.testsCount}</span>
                  </div>
                  <h4 className="pkg-name">{pkg.name}</h4>
                  <p className="pkg-ideal">{pkg.idealFor}</p>

                  <div className="pkg-pricing-row">
                    <div className="pkg-price-box">
                      <span className="pkg-current-price">{pkg.price}</span>
                      <span className="pkg-original-price">{pkg.originalPrice}</span>
                    </div>
                    <span className="pkg-discount-tag">{pkg.discount}</span>
                  </div>

                  <div className="pkg-meta-row">
                    <span className="pkg-meta-item">
                      <Clock size={13} /> {pkg.turnaround}
                    </span>
                  </div>
                </div>

                <div className="package-divider"></div>

                <div className="package-features-list">
                  <span className="includes-label">Includes:</span>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div className="feature-check">
                        <Check size={13} />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="package-bottom">
                  <a
                    href={`https://wa.me/919311193111?text=Hi%2C%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(pkg.name)}%20(${pkg.price})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn ${pkg.isPopular ? 'btn-primary' : 'btn-secondary'} w-full`}
                  >
                    <span>Book Package</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
