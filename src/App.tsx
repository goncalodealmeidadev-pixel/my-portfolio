import './App.css'

function App() {
  const projects = [
    {
      name: "Gym/Workout Tracking App",
      description: "Track your workouts, monitor progress, and achieve your fitness goals with an intuitive interface.",
      techStack: ["React", "TypeScript", "Local Storage"],
      demoLink: "https://goncalo-dealmeida-gym-tracking.netlify.app/"
    },
    {
      name: "Gym Landing Page",
      description: "Modern, responsive landing page for gyms and fitness centers to attract new members.",
      techStack: ["React", "CSS", "Responsive Design"],
      demoLink: "https://goncalo-dealmeida-gym-landing.netlify.app"
    },
    {
      name: "Weather App",
      description: "Real-time weather information with forecasts and location-based weather updates.",
      techStack: ["React", "API", "Geolocation"],
      demoLink: "https://goncalo-dealmeida-weather-app.netlify.app"
    }
  ]

  return (
    <div className="app">
      {/* Header/Hero Section */}
      <section id="about" className="header">
        <div className="header-content">
          <h1>Gonçalo De Almeida</h1>
          <p className="subtitle">Software Developer Apprentice | 17 years old</p>
          <p className="tagline">I build fast, responsive web apps with React & TypeScript</p>
          <p className="description">
            Building modern web applications and digital experiences. Currently learning full-stack development
            with a focus on React, TypeScript, and clean code practices.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="cta-primary">View My Work</a>
            <a href="#contact" className="cta-secondary">Hire Me</a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="about-me">
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate full-stack developer currently in an apprenticeship as a software developer at <strong>Zühlke Engineering AG</strong>,
            where I'm gaining hands-on experience building complete web applications from front to back.
            I work confidently with JavaScript, TypeScript, React, HTML, and CSS on the frontend, and Java, Spring Boot,
            and Spring Security on the backend.
          </p>
          <p>
            I also have hands-on experience working with PostgreSQL databases, Docker for containerized deployments,
            and understand key concepts in secure backend development. I love designing clean, scalable architectures
            and delivering projects that are both performant and reliable.
          </p>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React & TypeScript</li>
                <li>HTML & CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Spring Security</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Database</h3>
              <ul>
                <li>PostgreSQL</li>
                <li>Docker</li>
                <li>Git & GitHub</li>
                <li>Vite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.name}</h3>
              <p className="description">{project.description}</p>
              <div className="tech-tags">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.demoLink && (
                <a href={project.demoLink} className="demo-link" target="_blank" rel="noopener noreferrer">
                  View Demo →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <div className="profile-image">
            <img src="/Goncalo_De_Almeida_klein-2409919922.jpg" alt="Gonçalo De Almeida" />
          </div>
          <div className="contact-text">
            <h2>Let's Work Together</h2>
            <p>
              I'm currently open for freelance opportunities and collaborations. Whether you need a website, app,
              or technical consultation, I'd love to hear from you and discuss how we can work together!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:goncalo.dealmeida.dev@gmail.com">goncalo.dealmeida.dev@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong>Phone:</strong>
                <a href="tel:+41797321537">+41 79 732 15 37</a>
              </div>
            </div>
            <div className="contact-buttons">
              <button
                className="contact-cta-button primary"
                onClick={() => {
                  navigator.clipboard.writeText('goncalo.dealmeida.dev@gmail.com');
                  alert('Email copied to clipboard!');
                }}
              >
                Copy Email
              </button>
              <a href="mailto:goncalo.dealmeida.dev@gmail.com" className="contact-cta-button secondary">
                Send Email
              </a>
            </div>
          </div>
        </div>
        <div className="final-cta">
          <h3>Let's build something together</h3>
          <p>Ready to start your next project? Get in touch and let's make it happen.</p>
          <a href="mailto:goncalo.dealmeida.dev@gmail.com" className="final-cta-button">
            Start a Conversation
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
