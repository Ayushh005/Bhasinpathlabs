import { Star, ExternalLink, CheckCircle, Quote, Sparkles } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Greater Kailash I, New Delhi',
    test: 'Full Body Health Package',
    initials: 'PS',
    rating: 5,
    text: 'Exceptional service! The phlebotomist reached our home at 6:30 AM sharp. He was so gentle that my 80-year-old mother didn’t feel any pinch at all. We received verified digital reports on WhatsApp by 1 PM.',
  },
  {
    name: 'Col. Rajesh Verma (Retd.)',
    location: 'Panchsheel Park, New Delhi',
    test: 'Diabetic Quarterly Panel',
    initials: 'RV',
    rating: 5,
    text: 'I have been using Dr Bhasin’s Lab for the past 14 years. Their accuracy is trusted by my cardiologist at AIIMS. The 24-hour GK-1 lab has been a lifesaver during multiple emergency situations.',
  },
  {
    name: 'Dr. Ananya Sengupta',
    location: 'Hauz Khas, New Delhi',
    test: 'Senior Consultant Physician',
    initials: 'AS',
    rating: 5,
    text: 'As a practicing clinician, I always advise my critical patients to get their samples run at Dr Bhasin’s. Pathologist oversight makes a tangible difference in borderline and abnormal parameters.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials-header fade-in">
          <div className="section-pill-tag">
            <Sparkles size={14} />
            <span>PATIENT VOICES</span>
          </div>
          <h2 className="section-title">
            Trusted by Thousands of <span className="gradient-text">Delhi NCR Families</span>
          </h2>
          <p className="section-subtitle">
            Read genuine feedback from patients and senior doctors who rely on our accuracy every single day.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <div
              key={item.name}
              className="testimonial-card fade-in"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="testimonial-top">
                <div className="testimonial-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <Quote size={20} className="testimonial-quote-icon" />
              </div>

              <p className="testimonial-text">"{item.text}"</p>

              <div className="testimonial-user">
                <div className="user-avatar">{item.initials}</div>
                <div className="user-details">
                  <div className="user-name-row">
                    <strong className="user-name">{item.name}</strong>
                    <CheckCircle size={14} className="verified-check" />
                  </div>
                  <span className="user-location">{item.location}</span>
                  <span className="user-test-tag">{item.test}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-google-bar">
          <div className="google-rating-box">
            <span className="google-stars">★★★★★</span>
            <span className="google-score"><strong>4.8 / 5.0</strong> on Google Reviews</span>
            <span className="google-count">(Based on 1,200+ Patient Ratings)</span>
          </div>
          <a
            href="https://bhasinpathlabs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            <span>Read All Google Reviews</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
