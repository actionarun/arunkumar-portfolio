import './About.css'

const stats = [
  { num: '7+', label: 'Projects Built' },
  { num: '4', label: 'Tech Stacks' },
  { num: '12+', label: 'Skills' },
  { num: '100%', label: 'Passion' },
]

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-title">About <span>Me</span></div>
        <div className="sec-underline"></div>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am a passionate MERN Stack Developer dedicated to building high-performance
              web applications from scratch. With a strong command over JavaScript (ES6+),
              I specialize in sculpting dynamic frontends with React and wiring them to
              robust, secure backends using Node.js and Express.
            </p>
            <p>
              I love solving complex data challenges in MongoDB and always look for ways
              to optimize speed and UX. Ready to bring my dedication, clean coding habits,
              and fast-learning mindset to a collaborative development team.
            </p>
            <div className="about-info">
              <div className="about-info-row">
                <i className="ti ti-mail"></i>
                <span>actionofak@gmail.com</span>
              </div>
              <div className="about-info-row">
                <i className="ti ti-phone"></i>
                <span>+91 88258 01248</span>
              </div>
              <div className="about-info-row">
                <i className="ti ti-map-pin"></i>
                <span>Chennai, India</span>
              </div>
            </div>
          </div>
          <div className="stat-grid">
            {stats.map(function(s) {
              return (
                <div className="stat-card" key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-lbl">{s.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
