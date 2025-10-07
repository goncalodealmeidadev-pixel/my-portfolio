import './Services.css'

function Services() {
  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Services & Pricing</h1>
        <p className="services-tagline">
          Helping local businesses shine online with modern, functional, and easy-to-use websites and tools.
        </p>
      </div>

      <div className="services-content">
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
              <li>Fast loading times</li>
              <li>Professional aesthetics</li>
            </ul>
          </div>

          <div className="service-card featured">
            <div className="featured-badge">Most Popular</div>
            <div className="service-icon">⚡</div>
            <h3>Small App / Feature</h3>
            <p className="service-description">Custom tool or widget (booking, contact forms, calculators)</p>
            <div className="service-price">300–800 CHF</div>
            <ul className="service-features">
              <li>Custom functionality</li>
              <li>Database integration</li>
              <li>User-friendly interface</li>
              <li>Secure & reliable</li>
              <li>API integrations</li>
              <li>Real-time updates</li>
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
              <li>Performance monitoring</li>
              <li>Bug fixes</li>
            </ul>
          </div>
        </div>

        <div className="services-samples">
          <h2>Visual Samples</h2>
          <div className="samples-grid">
            <div className="sample-card">
              <a href="https://goncalo-dealmeida-gym-landing.netlify.app" target="_blank" rel="noopener noreferrer">
                <div className="sample-placeholder">🏋️</div>
                <h4>Landing page for a gym</h4>
                <p>Modern, responsive design with smooth animations</p>
              </a>
            </div>
            <div className="sample-card">
              <a href="https://goncalo-dealmeida-gym-tracking.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className="sample-placeholder">📊</div>
                <h4>Workout tracking app</h4>
                <p>Full-featured app with local storage</p>
              </a>
            </div>
            <div className="sample-card">
              <a href="https://goncalo-dealmeida-weather-app.netlify.app" target="_blank" rel="noopener noreferrer">
                <div className="sample-placeholder">🌤️</div>
                <h4>Weather app with API</h4>
                <p>Real-time weather data integration</p>
              </a>
            </div>
          </div>
        </div>

        <div className="services-cta">
          <h3>Ready to get started?</h3>
          <p>
            I can create a free sample page or feature for your business so you can see how it could look.
            If it resonates, we can discuss expanding it — if not, there's no obligation.
          </p>
          <div className="cta-buttons">
            <a href="mailto:goncalo.dealmeida.dev@gmail.com" className="cta-primary">
              Get Your Free Sample
            </a>
            <a href="/" className="cta-secondary">
              View My Portfolio
            </a>
          </div>
        </div>

        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p><strong>Email:</strong> <a href="mailto:goncalo.dealmeida.dev@gmail.com">goncalo.dealmeida.dev@gmail.com</a></p>
          <p><strong>Portfolio:</strong> <a href="/">https://goncalo-dealmeida-portfolio.netlify.app</a></p>
        </div>
      </div>
    </div>
  )
}

export default Services
