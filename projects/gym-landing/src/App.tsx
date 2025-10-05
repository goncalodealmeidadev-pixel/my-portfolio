import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">POWERHOUSE GYM</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#classes">Classes</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact" className="cta-nav">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">TRANSFORM YOUR BODY</h1>
          <p className="hero-subtitle">Get Fit. Get Strong. Get Results.</p>
          <button className="cta-button">Start Your Free Trial</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">Why Choose Powerhouse?</h2>
          <div className="features">
            <div className="feature-card">
              <div className="feature-icon">EQUIP</div>
              <h3>State-of-the-Art Equipment</h3>
              <p>Latest fitness technology and premium equipment for optimal results</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">TRAIN</div>
              <h3>Expert Trainers</h3>
              <p>Certified professionals dedicated to your fitness journey</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">24/7</div>
              <h3>Round-the-Clock Access</h3>
              <p>Work out on your schedule with unlimited gym access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="classes">
        <div className="section-container">
          <h2 className="section-title">Our Classes</h2>
          <div className="classes-grid">
            <div className="class-card">
              <h3>Strength Training</h3>
              <p>Build muscle and increase strength with guided weightlifting sessions</p>
              <span className="class-time">Mon, Wed, Fri • 6:00 AM & 6:00 PM</span>
            </div>
            <div className="class-card">
              <h3>HIIT Cardio</h3>
              <p>High-intensity interval training to burn fat and boost endurance</p>
              <span className="class-time">Tue, Thu, Sat • 7:00 AM & 5:00 PM</span>
            </div>
            <div className="class-card">
              <h3>Yoga & Flexibility</h3>
              <p>Improve flexibility, balance, and mental wellness</p>
              <span className="class-time">Daily • 8:00 AM & 7:00 PM</span>
            </div>
            <div className="class-card">
              <h3>Boxing</h3>
              <p>Learn boxing techniques while getting an intense full-body workout</p>
              <span className="class-time">Mon, Wed, Fri • 5:00 PM & 7:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="section-container">
          <h2 className="section-title">Membership Plans</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic</h3>
              <div className="price">$29<span>/month</span></div>
              <ul>
                <li>Gym access</li>
                <li>Locker room</li>
                <li>Free Wi-Fi</li>
                <li>Mobile app</li>
              </ul>
              <button className="pricing-btn">Choose Plan</button>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">MOST POPULAR</div>
              <h3>Premium</h3>
              <div className="price">$49<span>/month</span></div>
              <ul>
                <li>Everything in Basic</li>
                <li>All group classes</li>
                <li>Personal trainer (2x/month)</li>
                <li>Nutrition guidance</li>
              </ul>
              <button className="pricing-btn">Choose Plan</button>
            </div>
            <div className="pricing-card">
              <h3>Elite</h3>
              <div className="price">$79<span>/month</span></div>
              <ul>
                <li>Everything in Premium</li>
                <li>Unlimited personal training</li>
                <li>Meal planning</li>
                <li>Spa & sauna access</li>
              </ul>
              <button className="pricing-btn">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            This is a demo project. For inquiries about custom web development, contact me!
          </p>
          <button
            className="cta-button large"
            onClick={() => window.location.href = 'mailto:goncalo.dealmeida.dev@gmail.com'}
          >
            Contact Me
          </button>
          <div className="contact-info">
            <p>Email: goncalo.dealmeida.dev@gmail.com</p>
            <p>Phone: +41 79 732 15 37</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Created by Gonçalo De Almeida</p>
        <p>&copy; 2025 Portfolio Project. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
