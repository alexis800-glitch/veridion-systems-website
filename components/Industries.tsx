const ChevronRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

export function Industries() {
  return (
    <section id="industries">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Industries We Serve</div>
          <h2>Practical Systems Built for <span className="text-teal">Specific Industry Needs</span></h2>
          <p>We work closely with organisations across high-growth sectors that need smarter operations, better data visibility, and automation that works in the real world.</p>
        </div>

        <div className="industries-grid">

          <div className="industry-card fade-in">
            <div className="ind-icon icon-teal">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3>Hospitality</h3>
            <p>Hotels, resorts, and hospitality operators that want to digitise bookings, reduce manual coordination, and gain clearer visibility into property performance and revenue.</p>
            <a href="#contact" className="ind-link">Explore solutions <ChevronRight /></a>
          </div>

          <div className="industry-card fade-in">
            <div className="ind-icon icon-blue">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
            </div>
            <h3>Travel &amp; Tourism</h3>
            <p>Travel agencies, tour operators, and travel management companies that need smarter booking platforms, automated invoicing, and organised client management workflows.</p>
            <a href="#contact" className="ind-link">Explore solutions <ChevronRight /></a>
          </div>

          <div className="industry-card fade-in">
            <div className="ind-icon icon-gold">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="1" y="4" width="22" height="16" rx="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
            </div>
            <h3>Events &amp; Ticketing</h3>
            <p>Event organisers and venue managers requiring end-to-end digital ticketing, QR gate access, real-time capacity control, and clear sales reporting throughout the event.</p>
            <a href="#contact" className="ind-link">Explore solutions <ChevronRight /></a>
          </div>

          <div className="industry-card fade-in">
            <div className="ind-icon icon-purple">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <h3>SMEs &amp; Startups</h3>
            <p>Growing businesses that need custom operational software, automation tools, and reporting dashboards without the complexity or cost of large enterprise platforms.</p>
            <a href="#contact" className="ind-link">Explore solutions <ChevronRight /></a>
          </div>

          <div className="industry-card fade-in">
            <div className="ind-icon icon-green">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <h3>Corporate Teams</h3>
            <p>Internal departments and corporate organisations that need workflow automation, structured approval systems, cross-team dashboards, and AI-powered tools for daily operations.</p>
            <a href="#contact" className="ind-link">Explore solutions <ChevronRight /></a>
          </div>

          <div className="industry-card fade-in">
            <div className="ind-icon icon-amber">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/><path d="M2 20h20"/>
              </svg>
            </div>
            <h3>Data &amp; Analytics Teams</h3>
            <p>Analytics and operations teams that need Power BI dashboards, automated reporting pipelines, competitive monitoring tools, and business intelligence infrastructure that scales.</p>
            <a href="#contact" className="ind-link">Explore solutions <ChevronRight /></a>
          </div>

        </div>
      </div>
    </section>
  );
}
