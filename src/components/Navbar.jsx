import './Navbar.css'

const links = ['home', 'about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <div className="nav-logo">Arun<span>Kumar</span></div>
        <div className="nav-links">
          {links.map(function(l) {
            return (
              <button key={l} onClick={function() { scrollTo(l) }}>
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            )
          })}
        </div>
        <a href="mailto:actionofak@gmail.com" className="nav-hire">Hire Me</a>
      </div>
    </nav>
  )
}