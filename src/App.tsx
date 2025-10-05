import './App.css'

function App() {
  const projects = [
    {
      name: "Gym/Workout Tracking App",
      description: "Track your workouts, monitor progress, and achieve your fitness goals with an intuitive interface.",
      techStack: "React, TypeScript, Local Storage",
      demoLink: "https://goncalo-dealmeida-gym-tracking.netlify.app/"
    },
    {
      name: "Gym Landing Page",
      description: "Modern, responsive landing page for gyms and fitness centers to attract new members.",
      techStack: "React, CSS, Responsive Design",
      demoLink: "https://goncalo-dealmeida-gym-landing.netlify.app"
    },
    {
      name: "Weather App",
      description: "Real-time weather information with forecasts and location-based weather updates.",
      techStack: "React, Weather API, Geolocation",
      demoLink: "https://goncalo-dealmeida-weather-app.netlify.app"
    }
  ]

  return (
    <div className="app">
      {/* Header/About Section */}
      <section id="about" className="header">
        <div className="header-content">
          <h1>Gonçalo De Almeida</h1>
          <p className="subtitle">Software Developer Apprentice | 17 years old</p>
          <p className="description">
            Building modern web applications and digital experiences. Currently learning full-stack development
            with a focus on React, TypeScript, and clean code practices.
          </p>
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
              <p className="tech-stack">Tech: {project.techStack}</p>
              {project.demoLink && (
                <a href={project.demoLink} className="demo-link">
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
              I'm available for freelance projects and collaborations.
              Whether you need a website, app, or technical consultation, I'd love to hear from you!
            </p>
            <div className="contact-info">
              <a href="mailto:goncalo.dealmeida.dev@gmail.com">goncalo.dealmeida.dev@gmail.com</a>
              <a href="tel:+41797321537">+41 79 732 15 37</a>
            </div>
            <button
              className="cta-button"
              onClick={() => {
                navigator.clipboard.writeText('goncalo.dealmeida.dev@gmail.com');
                alert('Email copied to clipboard!');
              }}
            >
              Contact Me for Freelance Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
