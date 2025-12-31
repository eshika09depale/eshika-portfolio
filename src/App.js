import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    { 
      id: 1,
      title: "💻 CodeTech-Task-1", 
      desc: "Coding challenge solution with clean, professional UI/UX", 
      tech: "HTML + CSS + JavaScript", 
      live: "https://code-tech-task-1.vercel.app/",
      github: "https://github.com/eshika09depale/CodeTech-Task-1"
    },
    { 
      id: 2,
      title: "💻 React-Quiz-App", 
      desc: "Coding challenge solution with clean", 
      tech: "React App", 
      live: "https://react-quiz-app-psi-sepia.vercel.app/",
      github: "https://github.com/eshika09depale/react-quiz-app"
    },
    { 
      id: 3,
      title: "💻 Feedback-Website", 
      desc: "Coding challenge solution with Feeedback Website", 
      tech: "HTML + CSS + JavaScript", 
      live: "https://feedback-website-ten.vercel.app/",
      github: "https://github.com/eshika09depale/feedback-website"
    },
  ];

  // ✅ WHATSAPP + EMAIL FUNCTION (UPDATED!)
  const handleContact = (e) => {
    e.preventDefault();
    
    // Form values (correct order)
    const name = e.target[0].value;      // Name input
    const email = e.target[1].value;     // Email input  
    const phone = e.target[2].value;     // Phone input
    const message = e.target[3].value;   // Textarea
    
    // WhatsApp Message
    const whatsappText = `🌟 New Portfolio Lead!\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n\n💬 Message:\n${message}\n\n---\nEshika Depale | MERN Developer`;
    
    // Email Subject & Body
    const emailSubject = `New Portfolio Lead: ${name} (${phone})`;
    const emailBody = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent from Portfolio`;
    
    // Open WhatsApp FIRST
    window.open(`https://wa.me/916261493636?text=${encodeURIComponent(whatsappText)}`, '_blank');
    
    // Email after 500ms (backup)
    setTimeout(() => {
      window.location.href = `mailto:eshikadepale@gmil.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    }, 500);
    
    // Reset form + Success
    e.target.reset();
    alert('✅ Message sent to WhatsApp + Email! Check both! 🚀');
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="portfolio">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-content">
            <h1 className="logo">Eshika Depale</h1>
            
            {/* DESKTOP + MOBILE NAV */}
            <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
              <button 
                className={activeTab === 'home' ? 'active' : ''} 
                onClick={() => {setActiveTab('home'); setMobileMenuOpen(false);}}
              >
                Home
              </button>
              <button 
                className={activeTab === 'about' ? 'active' : ''} 
                onClick={() => {setActiveTab('about'); setMobileMenuOpen(false);}}
              >
                About
              </button>
              <button 
                className={activeTab === 'projects' ? 'active' : ''} 
                onClick={() => {setActiveTab('projects'); setMobileMenuOpen(false);}}
              >
                Projects
              </button>
              <button 
                className={activeTab === 'contact' ? 'active' : ''} 
                onClick={() => {setActiveTab('contact'); setMobileMenuOpen(false);}}
              >
                Contact
              </button>
            </div>

            {/* MOBILE HAMBURGER */}
            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            {/* THEME TOGGLE */}
            <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </nav>

        {/* Home Section */}
        {activeTab === 'home' && (
          <section className="hero">
            <div className="hero-content">
              <div className="typing-effect">
                <h1>Hi, I'm <span className="highlight">Eshika Depale</span></h1>
                <h2>B.Tech IT | MERN Stack Developer</h2>
                <p>Indore, Madhya Pradesh | GATE 2026 Prep</p>
                <div className="hero-stats">
                  <span>🎓 B.Tech IT (Final Year)</span>
                  <span>💻 <strong>3+</strong> Projects</span>
                  <span>📍 Indore, MP</span>
                </div>
              </div>
              <div className="hero-buttons">
                <a href="#contact" className="btn-primary" onClick={() => setActiveTab('contact')}>
                  Hire Me →
                </a>
                <a href="https://github.com/eshika09depale" className="btn-secondary">GitHub</a>
                <a href="https://www.linkedin.com/in/eshika-depale-82b906251/" className="btn-secondary">LinkedIn</a>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="/images/Mee.jpeg"
                alt="Eshika Depale"
                className="profile-pic"
              />
            </div>
          </section>
        )}

        {/* About Section */}
        {activeTab === 'about' && (
          <section className="about">
            <h2>About Me</h2>
            <div className="about-grid">
              <div className="about-text">
                <h3>MERN Stack Developer from Indore</h3>
                <p>
                  B.Tech Information Technology student passionate about building modern web applications. 
                  Currently learning MERN stack and preparing for GATE 2026. Love solving real-world problems 
                  with clean, scalable code.
                </p>
                <div className="skills">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Tailwind CSS</span>
                  <span>JavaScript</span>
                  <span>Git & GitHub</span>
                  <span>GATE Prep</span>
                  <span>MS-Excel</span>
                  <span>MS-Word</span>
                  <span>Data Entry</span>
                  <span>Fast Typing</span>
                  <span>Problem Solving</span>
                </div>
              </div>
              <div className="stats">
                <div className="stat">
                  <h4>3</h4>
                  <p>Live Projects</p>
                  <small>Production Ready</small>
                </div>
                <div className="stat">
                  <h4>10</h4>
                  <p>GitHub Repos</p>
                  <small>All Public</small>
                </div>
                <div className="stat">
                  <h4>100%</h4>
                  <p>Mobile Responsive</p>
                  <small>Every Device</small>
                </div>
                <div className="stat">
                  <h4>2026</h4>
                  <p>GATE CSE Target</p>
                  <small>Indore Pride</small>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects */}
        {activeTab === 'projects' && (
          <section className="projects">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <div className="project-tech">{project.tech}</div>
                  </div>
                  <p>{project.desc}</p>
                  <div className="project-links">
                    <a href={project.live} className="project-link live" target="_blank" rel="noopener noreferrer">
                      Live Demo →
                    </a>
                    <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                      GitHub →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        {activeTab === 'contact' && (
          <section className="contact">
            <h2>Get In Touch</h2>
            <div className="contact-grid">
              <form className="contact-form" onSubmit={handleContact}>
                <input type="text" placeholder="Your Name *" required />
                <input type="email" placeholder="Your Email *" required />
                <input type="tel" placeholder="Phone Number *" required />
                <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
                <button type="submit">Send Message 🚀</button>
              </form>
              </div>
          </section>
        )}

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <p>&copy; 2025 Eshika Depale | Made with ❤️ in Indore, MP</p>
            <div className="social-links">
              <a href="https://github.com/eshika09depale" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/eshika-depale-82b906251/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://wa.me/916261493636" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
