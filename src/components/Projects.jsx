import { useState } from 'react'
import './Projects.css'

const mainProjects = [
  {
    num: '01',
    title: 'Action Music',
    badge: 'Full Stack',
    desc: 'Full-stack music streaming platform with seamless audio playback, dynamic playlists, and intuitive search. Integrated Cloudinary for optimized audio and image storage.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Cloudinary'],
    live: 'https://storied-lily-fc7a92.netlify.app/',
    frontend: 'https://github.com/actionarun/music-frontend',
    backend: 'https://github.com/actionarun/music-backend.git',
    color: '#1db954',
  },
  {
    num: '02',
    title: 'SK Photography',
    badge: 'Full Stack',
    desc: 'Full-stack MERN app with public portfolio and JWT-authenticated admin dashboard for managing images, client enquiries, and studio settings. RESTful APIs, Cloudinary, bcrypt auth.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
    live: 'https://sk-photo.netlify.app/',
    frontend: 'https://github.com/actionarun/sk-photography-frontend.git',
    backend: 'https://github.com/actionarun/sk-photography-backend.git',
    color: '#00b4d8',
  },
  {
    num: '03',
    title: 'Notes Application',
    badge: 'Full Stack',
    desc: 'Full-stack MERN notes app with JWT auth and role-based access control (User/Admin). Cloudinary image uploads, MongoDB text-search with pagination. Brevo API email integration.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Brevo API'],
    live: 'https://notesappfrontend.netlify.app/dashboard',
    frontend: 'https://github.com/actionarun/notesapp-frontend.git',
    backend: 'https://github.com/actionarun/notesapp-backend.git',
    color: '#f59e0b',
  },
]

function ProjectCard({ p }) {
  const [imgError, setImgError] = useState(false)
  const screenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(p.live)}&screenshot=true&meta=false&embed=screenshot.url`

  return (
    <div className="main-card" style={{'--card-color': p.color}}>
      <div className="mc-preview">
        {!imgError ? (
          <img
            src={screenshotUrl}
            alt={p.title}
            className="mc-screenshot"
            onError={function() { setImgError(true) }}
          />
        ) : (
          <div className="mc-placeholder">
            <i className="ti ti-world"></i>
            <span>{p.title}</span>
          </div>
        )}
        <a href={p.live} target="_blank" rel="noreferrer" className="mc-overlay">
          <i className="ti ti-external-link"></i>
          <span>View Live</span>
        </a>
      </div>
      <div className="mc-body">
        <div className="mc-top">
          <span className="mc-badge">{p.badge}</span>
          <span className="mc-num">{p.num}</span>
        </div>
        <h3 className="mc-title">{p.title}</h3>
        <p className="mc-desc">{p.desc}</p>
        <div className="mc-bottom">
          <div className="mc-tags">
            {p.tags.map(function(t) {
              return <span key={t} className="mc-tag">{t}</span>
            })}
          </div>
          <div className="mc-links">
            <a href={p.live} target="_blank" rel="noreferrer" className="mc-link mc-link-live">
              <i className="ti ti-external-link"></i> Live
            </a>
            <a href={p.frontend} target="_blank" rel="noreferrer" className="mc-link mc-link-code">
              <i className="ti ti-brand-github"></i> Frontend
            </a>
            <a href={p.backend} target="_blank" rel="noreferrer" className="mc-link mc-link-code">
              <i className="ti ti-brand-github"></i> Backend
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-title">My <span>Projects</span></div>
        <div className="sec-underline"></div>
        <div className="main-grid">
          {mainProjects.map(function(p) {
            return <ProjectCard key={p.num} p={p} />
          })}
        </div>
      </div>
    </section>
  )
}