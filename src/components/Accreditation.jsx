import { ShieldCheck, Award, CheckCircle, FileCheck, ExternalLink } from 'lucide-react'

export default function Accreditation() {
  const pillars = [
    {
      title: 'ISO 15189:2022 Standard',
      desc: 'Accredited by NABL (National Accreditation Board for Testing and Calibration Laboratories) under Certificate NABL-M0626DL08110.',
    },
    {
      title: 'Global EQAS Participation',
      desc: 'Enrolled in Bio-Rad (USA) & CMC Vellore External Quality Assurance Schemes for precision benchmarking.',
    },
    {
      title: 'Automated Barcode Tracking',
      desc: 'Zero-mixup policy with bi-directional barcoded sample tubes scanned at every transfer touchpoint.',
    },
    {
      title: '100% Pathologist Sign-off',
      desc: 'No automated machine releases without senior MD Pathologist clinical verification and doctor consultation.',
    },
  ]

  return (
    <section className="accreditation-section" id="accreditation">
      <div className="container">
        <div className="accreditation-card">
          <div className="accreditation-grid">
            <div className="accreditation-info">
              <div className="accreditation-badge-top">
                <ShieldCheck size={16} />
                <span>NABL ACCREDITATION & QUALITY PILLARS</span>
              </div>

              <h2 className="accreditation-heading">
                Quality is Built into Every Step — <span className="gradient-text-light">Not Just Checked at the End.</span>
              </h2>

              <p className="accreditation-lead">
                Our laboratory operates under strict NABL ISO 15189:2022 accreditation. Every discipline—Biochemistry, Haematology, Serology, Clinical Pathology, Microbiology & Molecular Diagnostics—follows validated clinical governance.
              </p>

              <div className="accreditation-pillars-grid">
                {pillars.map((pillar, i) => (
                  <div key={i} className="pillar-item">
                    <div className="pillar-icon">
                      <CheckCircle size={18} />
                    </div>
                    <div>
                      <h4 className="pillar-title">{pillar.title}</h4>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="accreditation-cert-box">
              <div className="cert-glass-wrapper">
                <div className="cert-badge-ribbon">
                  <Award size={18} />
                  <span>NABL M0626DL08110</span>
                </div>
                <div className="cert-logo-row">
                  <div className="cert-seal">
                    <div className="seal-inner">
                      <span className="seal-year">SINCE 2000</span>
                      <span className="seal-text">NABL ACCREDITED</span>
                      <span className="seal-sub">ISO 15189</span>
                    </div>
                  </div>
                  <div className="cert-ilac">
                    <span className="ilac-badge">ilac-MRA</span>
                    <span className="ilac-sub">Mutual Recognition</span>
                  </div>
                </div>

                <div className="cert-quote-box">
                  <p className="cert-quote">
                    "Accreditation provides an independent benchmark. For our patients, it guarantees uncompromised precision."
                  </p>
                  <div className="cert-dr">
                    <strong>Medical Director & Lead Pathologist</strong>
                    <span>Dr Bhasin's Diagnostic Laboratory</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
