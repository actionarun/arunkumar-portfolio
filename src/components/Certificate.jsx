import './Certificate.css'

const certs = [
  {
    org: 'ZenClass',
    name: 'MERN Stack Development',
    desc: 'Full Stack Web Development Program',
    img: '/my-certificate.png',
    link: '/my-certificate.png',
    color: '#00b4d8',
  },
  {
    org: 'Ocean Academy',
    name: 'Fullstack with AI 3 Hrs Masterclass',
    desc: 'Certificate of Participation — 19th September 2026',
    img: '/ocean-certificate.png',
    link: '/ocean-certificate.png',
    color: '#6366f1',
  },
]

export default function Certificate() {
  return (
    <section id="certificate">
      <div className="wrap">
        <div className="sec-title">My <span>Certifications</span></div>
        <div className="sec-underline"></div>
        <div className="cert-grid">
          {certs.map(function(c) {
            return (
              <div className="cert-card" key={c.name} style={{'--cert-color': c.color}}>
                <div className="cert-preview">
                  <img src={c.img} alt={c.name} className="cert-img" />
                </div>
                <div className="cert-info">
                  <div className="cert-badge">{c.org}</div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-org">{c.desc}</div>
                  <a href={c.link} target="_blank" rel="noreferrer" className="cert-btn">
                    <i className="ti ti-external-link"></i> View Certificate
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}