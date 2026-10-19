import { Users, FlaskConical, TestTubes, Stethoscope } from 'lucide-react'

export default function StatsBar() {
  return (
    <div className="container">
      <div className="stats-bar fade-in">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">26+</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2000+</div>
            <div className="stat-label">Tests Available</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5L+</div>
            <div className="stat-label">Patients Served</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Always Open</div>
          </div>
        </div>
      </div>
    </div>
  )
}
