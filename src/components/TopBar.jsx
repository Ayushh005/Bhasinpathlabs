import { Clock, MapPin, Phone, Download, ShieldCheck } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span className="top-bar-item top-bar-status">
            <span className="live-status-dot"></span>
            <span>Open 24×7×365 Days</span>
          </span>
          <span className="top-bar-item top-bar-address">
            <MapPin size={13} />
            <span>S-35, Greater Kailash I, New Delhi</span>
          </span>
          <span className="top-bar-item top-bar-badge-mini">
            <ShieldCheck size={13} />
            <span>NABL Accredited Lab</span>
          </span>
        </div>
        <div className="top-bar-right">
          <a href="#" className="top-bar-link">
            <Download size={13} />
            <span>Download Report / Receipt</span>
          </a>
          <a href="tel:+919311193111" className="top-bar-phone">
            <Phone size={13} />
            <span>Emergency / Inquiry: <strong>+91 93111 93111</strong></span>
          </a>
        </div>
      </div>
    </div>
  )
}
