import './Hero.css'

export default function Hero() {
  return (
    <div className="hero" id="home">
      <div className="hero-bg">
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
      </div>
      <div className="wrap">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-dot"></span>
              <span>Available for work</span>
            </div>
            <h1 className="hero-title">
              Hi, I am <span className="hero-cyan">Arunkumar</span>
            </h1>
            <h2 className="hero-role">MERN Stack Developer</h2>
            <p className="hero-desc">
              I craft purposeful experiences that ignite creativity and spark engagement,
              turning ideas into clean, scalable, and meaningful digital solutions.
            </p>
            <div className="hero-btns">
              <a
                href="https://drive.google.com/file/d/1VE6VKSvRJsDKNF5uvW1asAJ4Re3LmyrS/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="btn-cyan"
              >
                View Resume
              </a>
              
              <a
                href="https://drive.google.com/file/d/1VE6VKSvRJsDKNF5uvW1asAJ4Re3LmyrS/view?usp=sharing"
                className="btn-outline"
              >
                Download CV
              </a>
              <a
                href="#contact"
                onClick={function(e) {
                  e.preventDefault()
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-outline"
              >
                Contact Me
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/actionarun" target="_blank" rel="noreferrer" className="social-link">
                <i className="ti ti-brand-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/arunkumar-n-701652297/" target="_blank" rel="noreferrer" className="social-link">
                <i className="ti ti-brand-linkedin"></i>
              </a>
              <a href="mailto:actionofak@gmail.com" className="social-link">
                <i className="ti ti-mail"></i>
              </a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-photo-wrap">
              <div className="hero-photo-ring"></div>
              <img src="/my-photo.png" alt="Arunkumar N" className="hero-photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
