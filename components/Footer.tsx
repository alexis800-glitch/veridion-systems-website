const LogoBadge = ({ size }: { size: number }) => (
  <div className="logo-badge">
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect width="48" height="48" rx="10" fill="#071923"/>
      <path d="M 6 13 H 15 L 24 35" stroke="#2BB9C8" strokeWidth="5" strokeLinecap="square" strokeLinejoin="bevel" fill="none"/>
      <path d="M 24 35 L 33 13 H 42" stroke="#2BB9C8" strokeWidth="5" strokeLinecap="square" strokeLinejoin="bevel" fill="none"/>
      <rect x="21.5" y="32.5" width="5" height="5" fill="#D6A93B"/>
    </svg>
  </div>
);

export function Footer() {
  return (
    <footer id="footer">
      <div className="footer-body">
        <div className="container">
          <div className="footer-grid">

            <div className="footer-brand">
              <a href="#" className="nav-logo footer-logo-link" aria-label="Veridion Systems Ltd Home">
                <LogoBadge size={38} />
                <div className="logo-type">
                  <span className="logo-brand">Veridion <em>Systems</em></span>
                  <span className="logo-sub">Ltd</span>
                </div>
              </a>
              <p className="footer-tagline">Building Intelligent Systems for Modern Businesses</p>
              <p className="footer-mission">AI · Automation · Business Intelligence</p>
              <div className="footer-socials">
                <a href="#" className="social-btn" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a href="https://wa.me/2348065881783" target="_blank" rel="noopener noreferrer" className="social-btn social-wa" aria-label="WhatsApp">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </a>
                <a href="mailto:info@veridionsystems.net" className="social-btn" aria-label="Email">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">AI Workflow Automation</a></li>
                <li><a href="#services">Custom Business Apps</a></li>
                <li><a href="#services">Power BI Dashboards</a></li>
                <li><a href="#services">Hotel &amp; Travel Tech</a></li>
                <li><a href="#services">AI Assistants</a></li>
                <li><a href="#services">Digital Transformation</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#industries">Industries</a></li>
                <li><a href="#process">How We Work</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="mailto:info@veridionsystems.net">info@veridionsystems.net</a></li>
                <li><a href="tel:+2348065881783">+234 806 588 1783</a></li>
                <li><a href="https://wa.me/2348065881783" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a></li>
                <li><span style={{ color: 'var(--text-m)' }}>Lagos, Nigeria</span></li>
              </ul>
              <a href="#contact" className="btn btn-primary" style={{ marginTop: '1.5rem', fontSize: '0.84rem', padding: '10px 18px' }}>Contact Us</a>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="container footer-bar-inner">
          <p>&copy; 2026 Veridion Systems Ltd. All rights reserved.</p>
          <div className="footer-bar-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <div className="container">
          <p>
            Veridion Systems Ltd · RC Number: 9594563 · TIN: 2622441498655 ·
            Registered Address: 1415 Ademola Adetokunbo Street, Victoria Island, Lagos State, Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}
