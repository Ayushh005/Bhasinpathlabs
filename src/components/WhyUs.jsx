import {
  Stethoscope,
  HeartHandshake,
  Clock,
  Microscope,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: <Stethoscope size={24} />,
    title: 'Medically Led, Patient Centred',
    description:
      'Supervised 24×7 by qualified MD pathologists. Every critical value is flagged, retested, and communicated immediately to treating physicians.',
    accent: 'blue',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Real People, Real Empathy',
    description:
      'Healthcare tests can bring anxiety. You talk directly with experienced coordinators and pathologists who listen, answer questions, and assist.',
    accent: 'teal',
  },
  {
    icon: <Clock size={24} />,
    title: 'Available 24×7×365 in GK-1',
    description:
      'Our central South Delhi laboratory never closes. Whether midnight emergency cardiac markers or 6 AM fasting sugar, we are ready.',
    accent: 'indigo',
  },
  {
    icon: <Microscope size={24} />,
    title: 'State-of-the-Art Automation',
    description:
      'Fully automated clinical biochemistry, chemiluminescence immunoassay, and 5-part haematology analyzers ensure zero manual transfer error.',
    accent: 'emerald',
  },
]

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="why-us-grid">
          <div className="why-us-intro fade-in-left">
            <div className="section-pill-tag">
              <Sparkles size={14} />
              <span>THE DR BHASIN STANDARD</span>
            </div>
            <h2 className="section-title">
              Patient First. Medical Expertise. <span className="gradient-text">Human Responsibility.</span>
            </h2>
            <p className="why-us-lead">
              Diagnostic reports guide over 70% of medical decisions. We believe accurate testing is not a commodity—it is a sacred clinical trust that demands unwavering integrity and meticulous doctor oversight.
            </p>

            <div className="why-us-stats-mini">
              <div className="mini-stat">
                <span className="mini-stat-num">99.8%</span>
                <span className="mini-stat-label">On-time Report Delivery</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-num">500K+</span>
                <span className="mini-stat-label">Patients Trusted Us</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-num">24/7</span>
                <span className="mini-stat-label">Emergency Pathology</span>
              </div>
            </div>
          </div>

          <div className="why-us-cards-grid fade-in-right">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="why-us-card"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={`why-us-icon-wrapper ${feature.accent}`}>
                  {feature.icon}
                </div>
                <h3 className="why-us-card-title">{feature.title}</h3>
                <p className="why-us-card-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
