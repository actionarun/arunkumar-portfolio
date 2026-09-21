import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-inner">
          <div className="footer-logo">Arun<span>Kumar</span></div>
          <p className="footer-copy">Designed and Built by Arunkumar N</p>
          <div className="footer-socials">
            <a href="https://github.com/actionarun" target="_blank" rel="noreferrer">
              <i className="ti ti-brand-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/arunkumar-n-701652297/" target="_blank" rel="noreferrer">
              <i className="ti ti-brand-linkedin"></i>
            </a>
            <a href="mailto:actionofak@gmail.com">
              <i className="ti ti-mail"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
