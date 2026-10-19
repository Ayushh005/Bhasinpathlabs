import { PhoneCall, UserCheck, ShieldAlert, FileText, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: <PhoneCall size={22} />,
    title: "1. Book Your Test in 30 Seconds",
    description:
      'Call or WhatsApp us with your doctor prescription or tests required. Our clinical coordinator confirms your 30-minute home visit slot and shares fasting instructions.',
    tags: ['Quick WhatsApp Booking', 'Flexible 30-min Slots', 'Fasting Instructions'],
  },
  {
    number: '02',
    icon: <UserCheck size={22} />,
    title: '2. Hygienic Phlebotomist Visit',
    description:
      'Our certified phlebotomist arrives with sterile single-use vacuum collection tubes, verifies patient identity, and collects sample with painless precision.',
    tags: ['Single-use Sterile Needles', 'Patient ID Verification', 'Barcode Labelled at Home'],
  },
  {
    number: '03',
    icon: <ShieldAlert size={22} />,
    title: '3. Temperature-Controlled Cold Chain',
    description:
      'Samples are sealed in barcoded bio-safe containers maintained strictly at 2°C - 8°C during transit to prevent any biological degradation before analyzer loading.',
    tags: ['2-8°C Cold Chain Boxes', 'GPS Tracked Transit', 'Zero Sample Degrade'],
  },
  {
    number: '04',
    icon: <FileText size={22} />,
    title: '4. Testing & MD Pathologist Review',
    description:
      'Automated analyzer run with dual internal controls. Every report is reviewed, correlated with clinical history, and signed off by a qualified MD Pathologist.',
    tags: ['Dual Control Checks', 'MD Pathologist Sign-off', 'Free Clinical Guidance'],
  },
  {
    number: '05',
    icon: <Smartphone size={22} />,
    title: '5. Fast Delivery via WhatsApp & Portal',
    description:
      'Receive your digitally signed NABL PDF report directly on WhatsApp within hours, access historical records anytime, or request doorstep physical printouts.',
    tags: ['Instant WhatsApp Delivery', 'Online Patient Portal', 'Same-day Turnaround'],
  },
]

export default function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="container">
        <div className="journey-header fade-in">
          <div className="section-pill-tag">
            <Sparkles size={14} />
            <span>DOORSTEP CONVENIENCE</span>
          </div>
          <h2 className="section-title">
            The Seamless <span className="gradient-text">Sample Journey</span>
          </h2>
          <p className="section-subtitle">
            How we ensure hospital-grade laboratory accuracy from your living room sofa to your final digital report.
          </p>
        </div>

        <div className="journey-timeline">
          {steps.map((step, index) => (
            <div key={step.number} className="journey-step-card fade-in">
              <div className="journey-step-number-col">
                <span className="step-num">{step.number}</span>
                <div className="step-icon-bubble">{step.icon}</div>
                {index < steps.length - 1 && <div className="step-line"></div>}
              </div>

              <div className="journey-step-body">
                <h3 className="journey-step-title">{step.title}</h3>
                <p className="journey-step-text">{step.description}</p>
                <div className="journey-step-tags">
                  {step.tags.map((tag) => (
                    <span key={tag} className="journey-tag">
                      <CheckCircle2 size={13} className="tag-check" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
