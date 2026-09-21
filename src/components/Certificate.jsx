import './Certificate.css'

export default function Certificate() {
  return (
    <section id="certificate">
      <div className="wrap">
        <div className="sec-title">My <span>Certifications</span></div>
        <div className="sec-underline"></div>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-preview">
              <img src="/my-certificate.png" alt="ZenClass Certificate" className="cert-img" />
            </div>
            <div className="cert-info">
              <div className="cert-badge">ZenClass</div>
              <div className="cert-name">MERN Stack Development</div>
              <div className="cert-org">Full Stack Web Development Program</div>
              <a
                href="/my-certificate.png"
                target="_blank"
                rel="noreferrer"
                className="cert-btn"
              >
                <i className="ti ti-external-link"></i> View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
