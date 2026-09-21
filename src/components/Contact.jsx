import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function onSend() {
    if (!form.name || !form.email || !form.message) {
      alert('Please fill all fields.')
      return
    }
    const text = encodeURIComponent(
      'Hi Arun!\n\nName: ' + form.name + '\nEmail: ' + form.email + '\nMessage: ' + form.message
    )
    window.open('https://wa.me/918825801248?text=' + text, '_blank')
    setSent(true)
    setTimeout(function() { setSent(false) }, 4000)
  }

  return (
    <section id="contact">
      <div className="wrap">
        <div className="sec-title">Let us <span>Work Together</span></div>
        <div className="sec-underline"></div>
        <p className="contact-sub">I am open to opportunities and collaborations. Feel free to connect with me anytime.</p>
        <div className="contact-grid">
          <div className="contact-left">
            <a href="mailto:actionofak@gmail.com" className="contact-item">
              <i className="ti ti-mail"></i>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-val">actionofak@gmail.com</div>
              </div>
            </a>
            <a href="tel:+918825801248" className="contact-item">
              <i className="ti ti-phone"></i>
              <div>
                <div className="ci-label">Phone</div>
                <div className="ci-val">+91 88258 01248</div>
              </div>
            </a>
            <a href="https://github.com/actionarun" target="_blank" rel="noreferrer" className="contact-item">
              <i className="ti ti-brand-github"></i>
              <div>
                <div className="ci-label">GitHub</div>
                <div className="ci-val">github.com/actionarun</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/arunkumar-n-701652297/" target="_blank" rel="noreferrer" className="contact-item">
              <i className="ti ti-brand-linkedin"></i>
              <div>
                <div className="ci-label">LinkedIn</div>
                <div className="ci-val">linkedin.com/in/arunkumar-n</div>
              </div>
            </a>
          </div>
          <div className="contact-form">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your Name"
              className="form-input"
            />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="Your Email"
              className="form-input"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Your Message"
              className="form-input form-textarea"
            ></textarea>
            <button className="form-submit" onClick={onSend}>
              Send Message
            </button>
            {sent && <p className="form-ok">Redirecting to WhatsApp...</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
