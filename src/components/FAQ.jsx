import { useState } from 'react'
import { ChevronDown, Send, Sparkles, HelpCircle, PhoneCall, CheckCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Can I visit the laboratory at night or on Sunday?',
    answer:
      'Yes! Our central laboratory at S-35, Greater Kailash I, New Delhi is open 24 hours a day, 7 days a week, 365 days a year, including all Sundays and national holidays. Walk in anytime for urgent emergency testing or routine samples.',
  },
  {
    question: 'What are the charges and timings for Home Sample Collection?',
    answer:
      'Home collection is available from 6:00 AM to midnight across South Delhi and Delhi NCR. We offer complimentary home sample pickup for preventive health packages and orders over ₹500 in Greater Kailash and neighboring areas.',
  },
  {
    question: 'How and when will I receive my test reports?',
    answer:
      'Most routine blood test reports (CBC, Liver, Kidney, Blood Sugar, Urine) are ready within 4 to 6 hours. You receive an automated WhatsApp notification with a secure PDF download link, and you can also download your report anytime from our patient portal.',
  },
  {
    question: 'Do I need a doctor’s prescription to book tests?',
    answer:
      'A doctor’s prescription is not mandatory for preventive wellness packages, routine blood sugar, lipid, or vitamin screening. However, for specialized clinical investigations, sharing your doctor’s prescription helps our pathologists ensure the exact required protocol is followed.',
  },
  {
    question: 'How do I prepare for fasting blood tests?',
    answer:
      'For fasting tests (such as Fasting Blood Sugar, Lipid Profile, or Comprehensive Health Checkups), please observe 10 to 12 hours of overnight fasting. You may drink plain water, but avoid tea, coffee, smoking, or heavy exertion prior to sample collection.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const [formData, setFormData] = useState({ name: '', phone: '', query: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', phone: '', query: '' })
    }, 4000)
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header fade-in">
          <div className="section-pill-tag">
            <Sparkles size={14} />
            <span>PATIENT ASSISTANCE</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find quick clarity on timings, sample collection protocols, report turnaround, and fasting instructions.
          </p>
        </div>

        <div className="faq-layout">
          {/* FAQ Accordion */}
          <div className="faq-accordion">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={faq.question}
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`faq-chevron ${isOpen ? 'rotate' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="faq-answer-box">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Quick Callback / Booking Card */}
          <div className="faq-callback-card">
            <div className="callback-header">
              <div className="callback-icon">
                <PhoneCall size={22} />
              </div>
              <div>
                <h3 className="callback-title">Request a Quick Callback</h3>
                <p className="callback-sub">Our clinical desk calls you back in 10 mins</p>
              </div>
            </div>

            {submitted ? (
              <div className="callback-success">
                <CheckCircle size={36} className="success-icon" />
                <h4>Request Received!</h4>
                <p>Our phlebotomy coordinator will call you back shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="callback-form">
                <div className="form-group">
                  <label htmlFor="patient-name">Patient Name</label>
                  <input
                    id="patient-name"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="patient-phone">Phone Number</label>
                  <input
                    id="patient-phone"
                    type="tel"
                    placeholder="e.g. 98111 XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="patient-query">Tests or Requirements</label>
                  <textarea
                    id="patient-query"
                    rows="3"
                    placeholder="e.g. Need Full Body Checkup home visit in GK-1 tomorrow at 7 AM"
                    value={formData.query}
                    onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  <Send size={16} />
                  <span>Request Instant Callback</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
