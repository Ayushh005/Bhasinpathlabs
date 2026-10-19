import {
  Users,
  HeartHandshake,
  Target,
  ShieldCheck,
  Sparkles,
  Award,
} from 'lucide-react'

const values = [
  {
    icon: <Users size={24} />,
    title: 'Patient First Always',
    description:
      'The patient is the sole purpose of our work. Every protocol, turnaround pledge, and clinical verification is shaped around their well-being.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Compassionate Care',
    description:
      'We treat every sample and every anxiety-laden phone inquiry with the same gentleness and diligence we would expect for our own parents and children.',
  },
  {
    icon: <Target size={24} />,
    title: 'Zero Compromise on Accuracy',
    description:
      'Doctors base surgical, medication, and therapeutic decisions on our values. Precision is not a marketing goal—it is an uncompromising clinical obligation.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Medical Ethics & Transparency',
    description:
      'No hidden costs, no unnecessary test additions, and no automated shortcuts. Pure clinical honesty in our reports, policies, and interactions.',
  },
]

export default function Values() {
  return (
    <section className="values" id="values">
      <div className="container">
        <div className="values-header fade-in">
          <div className="section-pill-tag">
            <Sparkles size={14} />
            <span>OUR CORE ETHOS</span>
          </div>
          <h2 className="section-title">
            Principles That Guide <span className="gradient-text">Every Diagnostic Decision</span>
          </h2>
          <p className="section-subtitle">
            26 years of continuous community trust built upon bedrock medical standards and compassionate human service.
          </p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="value-card fade-in"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <div className="value-icon-box">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-desc">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
