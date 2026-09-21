import './Skills.css'

const skillGroups = [
  {
    label: 'Core Stack',
    icon: 'ti-code',
    skills: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '🚂' },
      { name: 'MongoDB', icon: '🍃' },
    ]
  },
  {
    label: 'Frontend',
    icon: 'ti-palette',
    skills: [
      { name: 'JavaScript ES6+', icon: '🟡' },
      { name: 'HTML5', icon: '🧱' },
      { name: 'Tailwind CSS', icon: '💨' },
      { name: 'CSS3', icon: '🎨' },
    ]
  },
  {
    label: 'Tools & Deploy',
    icon: 'ti-tool',
    skills: [
      { name: 'Git & GitHub', icon: '🐙' },
      { name: 'Vercel', icon: '▲' },
      { name: 'Render', icon: '🚀' },
      { name: 'Netlify', icon: '🌐' },
    ]
  },
  {
    label: 'Other',
    icon: 'ti-sparkles',
    skills: [
      { name: 'SQL', icon: '🗄️' },
      { name: 'Cloudinary', icon: '☁️' },
      { name: 'JWT', icon: '🔐' },
      { name: 'Prompt Engineering', icon: '🤖' },
    ]
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-title">My <span>Skills</span></div>
        <div className="sec-underline"></div>
        <div className="skill-groups">
          {skillGroups.map(function(g) {
            return (
              <div className="skill-group" key={g.label}>
                <div className="sg-header">
                  <i className={"ti " + g.icon}></i>
                  <span>{g.label}</span>
                </div>
                <div className="sg-pills">
                  {g.skills.map(function(s) {
                    return (
                      <div className="sg-pill" key={s.name}>
                        <span className="sg-emoji">{s.icon}</span>
                        <span>{s.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
