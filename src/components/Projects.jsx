import { useState } from 'react'
import './Projects.css'

const mainProjects = [
  {
    num: '01',
    title: 'Action Music',
    badge: 'MERN Stack',
    desc: 'A full-stack music streaming platform featuring real-time audio playback, dynamic playlist management, and an intuitive search experience. Built with a modular React frontend and a scalable Node.js backend. Integrated Cloudinary for optimized audio and image delivery, significantly reducing media load times. Deployed on Netlify with a responsive, mobile-first UI.',
    tags: ['React.js', 'Node.js', 'MongoDB','Express.js','JWT','Brevo API', 'Cloudinary'],
    live: 'https://storied-lily-fc7a92.netlify.app/',
    frontend: 'https://github.com/actionarun/music-frontend',
    backend: 'https://github.com/actionarun/music-backend.git',
    color: '#1db954',
  },
  {
    num: '02',
    title: 'ChatApp',
    badge: 'Full Stack',
    desc: 'A full-stack real-time chat application with one-to-one messaging, online/offline presence, user search, persistent chat history, and photo sharing using Socket.IO and MongoDB. Secure JWT authentication, bcrypt password hashing, and email OTP verification via Brevo API. Features message edit and delete-for-everyone with live sync, client-side image compression, and a responsive dark/light mode UI.',
    tags: ['React.js', 'Socket.IO', 'Node.js', 'MongoDB', 'JWT', 'Brevo API'],
    live: 'https://chat-appppp.netlify.app/',
    frontend: 'https://github.com/actionarun/Chat-app-frontend.git',
    backend: 'https://github.com/actionarun/Chat-app-backend.git',
    color: '#00b4d8',
    img: '/chat-app.png',
  },
  {
    num: '03',
    title: 'Notes Application',
    badge: 'MERN Stack',
    desc: 'A feature-rich MERN notes application with JWT-based authentication and role-based access control for both User and Admin roles. Supports Cloudinary image uploads, MongoDB full-text search with pagination, and production email workflows via Brevo API. Fully deployed on Render and Netlify with environment-based configuration and error handling.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Express.js', 'Brevo API'],
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