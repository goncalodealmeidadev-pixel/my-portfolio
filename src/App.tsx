import './App.css'
import { useState } from 'react'

function App() {
  const [showToast, setShowToast] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('goncalo.dealmeida.dev@gmail.com')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }
  const projects = [
    {
      name: "Gym/Workout Tracking App",
      description: "Track your workouts, monitor progress, and achieve your fitness goals with an intuitive interface.",
      techStack: ["React", "TypeScript", "Local Storage"],
      demoLink: "https://goncalo-dealmeida-gym-tracking.netlify.app/",
      githubLink: "https://github.com/goncalodealmeidadev-pixel/my-portfolio/tree/main/projects/gym-tracker"
    },
    {
      name: "Gym Landing Page",
      description: "Modern, responsive landing page for gyms and fitness centers to attract new members.",
      techStack: ["React", "CSS", "Responsive Design"],
      demoLink: "https://goncalo-dealmeida-gym-landing.netlify.app",
      githubLink: "https://github.com/goncalodealmeidadev-pixel/my-portfolio/tree/main/projects/gym-landing"
    },
    {
      name: "Weather App",
      description: "Real-time weather information with forecasts and location-based weather updates.",
      techStack: ["React", "API", "Geolocation"],
      demoLink: "https://goncalo-dealmeida-weather-app.netlify.app",
      githubLink: "https://github.com/goncalodealmeidadev-pixel/my-portfolio/tree/main/projects/weather-app"
    }
  ]

  return (
    <div className="app">
      {/* Header/Hero Section */}
      <section id="about" className="header">
        <div className="header-content">
          <h1>Gonçalo De Almeida</h1>
          <p className="subtitle">Software Developer Apprentice | 17 years old</p>
          <p className="tagline">I build full-stack web applications with Java, Spring Boot, React, and Docker</p>
          <p className="description">
            Building modern web applications and digital experiences. Currently learning full-stack development
            with a focus on React, TypeScript, and clean code practices.
          </p>
          <div className="cta-buttons">
            <a href="#services" className="cta-primary">View Services</a>
            <a href="#projects" className="cta-secondary">View My Work</a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about-me" className="about-me">
        <div className="about-me-content">
          <h2>About Me</h2>
          <p>
            Hi! I'm Gonçalo, a 17-year-old full-stack developer with a passion for building secure, scalable web applications.
            I'm currently an apprentice software developer at <strong>Zühlke Engineering AG</strong>, where I get to work on
            real-world projects that challenge me to grow every day.
          </p>
          <p>
            I love the entire development process—from designing clean frontend experiences with React and TypeScript,
            to building robust backend systems with Java and Spring Boot. Whether it's crafting an intuitive user interface
            or architecting a secure REST API, I'm all about writing code that's not just functional, but maintainable and elegant.
          </p>
          <p>
            When I'm not coding, you'll probably find me exploring new technologies, contributing to open-source projects,
            or working on side projects that push my skills further. I'm always eager to learn, collaborate, and take on
            new challenges that help me become a better developer.
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

      {/* Services Section */}
      <section id="services" className="services">
        <div className="services-content">
          <h2>Services & Pricing</h2>
          <p className="services-intro">
            I create simple, effective web solutions that make your business more visible and engaging.
            Below is an overview of what I can offer — and to make it easy, I can start with a free sample
            so you can see it live before deciding.
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🌐</div>
              <h3>Website</h3>
              <p className="service-description">1–3 pages, responsive, portfolio-quality design</p>
              <div className="service-price">500–1,000 CHF</div>
              <ul className="service-features">
                <li>Modern, responsive design</li>
                <li>Mobile-friendly</li>
                <li>SEO optimized</li>
                <li>Contact forms</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Small App / Feature</h3>
              <p className="service-description">Custom tool or widget (booking, contact forms, calculators)</p>
              <div className="service-price">300–800 CHF</div>
              <ul className="service-features">
                <li>Custom functionality</li>
                <li>Database integration</li>
                <li>User-friendly interface</li>
                <li>Secure & reliable</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3>Maintenance</h3>
              <p className="service-description">Monthly updates, security, backups, minor tweaks</p>
              <div className="service-price">50 CHF / month</div>
              <ul className="service-features">
                <li>Regular updates</li>
                <li>Security patches</li>
                <li>Content updates</li>
                <li>Technical support</li>
              </ul>
            </div>
          </div>

          <div className="services-cta">
            <h3>Ready to get started?</h3>
            <p>I can create a free sample page or feature for your business so you can see how it could look.
               If it resonates, we can discuss expanding it — if not, there's no obligation.</p>
            <a href="#contact" className="cta-primary">Get Your Free Sample</a>
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
              <div className="project-links">
                {project.demoLink && (
                  <a href={project.demoLink} className="demo-link" target="_blank" rel="noopener noreferrer">
                    View Demo →
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="contact-content">
          <div className="profile-image">
            <img
              src="/Goncalo_De_Almeida_klein-2409919922.jpg"
              alt="Gonçalo De Almeida"
              loading="lazy"
              width="250"
              height="250"
            />
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
                onClick={copyEmail}
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
          <p>Ready to start your next project? I'm available for freelance work and always excited to collaborate on interesting projects.</p>
        </div>

        {/* Toast Notification */}
        {showToast && (
          <div className="toast">
            ✓ Email copied to clipboard!
          </div>
        )}
      </section>
    </div>
  )
}

export default App
