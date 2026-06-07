export function CaseStudies() {
  return (
    <section id="case-studies">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Case Studies</div>
          <h2>Selected Project Experience</h2>
          <p>Four practical systems we&apos;ve designed and delivered. Each addresses a specific operational challenge with a focused, purpose-built solution.</p>
        </div>

        <div className="cs-grid">

          <div className="cs-card fade-in">
            <div className="cs-top">
              <span className="cs-label">Hospitality</span>
              <h3>Christmas Booking Portal</h3>
            </div>
            <div className="cs-items">
              <div className="cs-item">
                <span className="cs-badge badge-problem">Challenge</span>
                <p>Manual reservation coordination during peak holiday season created scheduling conflicts, inconsistent guest responses, and limited visibility into real-time booking status across the team.</p>
              </div>
              <div className="cs-item">
                <span className="cs-badge badge-solution">Solution</span>
                <p>Built a custom seasonal booking portal with real-time availability display, integrated payment processing, and automated confirmation workflows for both guests and internal staff.</p>
              </div>
              <div className="cs-item">
                <span className="cs-badge badge-outcome">Outcome</span>
                <p>Reduced manual booking coordination. Management gained real-time visibility into reservation status. Staff directed attention to guest experience rather than admin processing.</p>
              </div>
            </div>
          </div>

          <div className="cs-card fade-in">
            <div className="cs-top">
              <span className="cs-label">Events</span>
              <h3>Event Ticketing System</h3>
            </div>
            <div className="cs-items">
              <div className="cs-item">
                <span className="cs-badge badge-problem">Challenge</span>
                <p>Paper-based ticketing left the team without reliable sales data, made gate entry verification slow, and created inconsistencies in attendance tracking throughout the event.</p>
              </div>
              <div className="cs-item">
                <span className="cs-badge badge-solution">Solution</span>
                <p>Deployed a digital ticketing platform with QR code generation, mobile scanning at the gate, real-time capacity monitoring, and a live sales reporting dashboard for management.</p>
              </div>
              <div className="cs-item">
                <span className="cs-badge badge-outcome">Outcome</span>
                <p>Faster gate verification, improved attendance tracking accuracy, and management had access to live sales data throughout the event for better internal coordination.</p>
              </div>
            </div>
          </div>

          <div className="cs-card fade-in">
            <div className="cs-top">
              <span className="cs-label">AI Automation</span>
              <h3>Email Automation Workflow</h3>
            </div>
            <div className="cs-items">
              <div className="cs-item">
                <span className="cs-badge badge-problem">Challenge</span>
                <p>A customer service team spent a significant portion of each working day manually reading, sorting, and routing emails. This reduced their capacity for more complex client interactions.</p>
              </div>
              <div className="cs-item">
                <span className="cs-badge badge-solution">Solution</span>
                <p>Built an AI classification layer using the OpenAI API that tags emails by intent and sentiment, automatically routes to the right team member, and drafts suggested responses for routine queries.</p>
              </div>
              <div className="cs-item">
                <span className="cs-badge badge-outcome">Outcome</span>
                <p>Improved customer response workflow. Routine enquiries are handled faster, and the team focuses on complex or relationship-sensitive messages rather than inbox triage.</p>
              </div>
            </div>
          </div>

          <div className="cs-card fade-in">
            <div className="cs-top">
              <span className="cs-label">Travel Technology</span>
              <h3>Safari Wings Travel Platform</h3>
            </div>
            <div className="cs-items">
              <div className="cs-item">
                <span className="cs-badge badge-problem">Challenge</span>
                <p>A travel management company was handling bookings, invoices, and itineraries across disconnected spreadsheets. This caused data entry errors, delayed invoicing, and inconsistent client communication.</p>
              </div>
              <div className="cs-item">
                <span className="cs-badge badge-solution">Solution</span>
                <p>Built a unified travel operations platform covering booking management, automated invoice generation, an itinerary builder, client portal, and WhatsApp delivery integration.</p>
              </div>
              <div className="cs-item">
                <span className="cs-badge badge-outcome">Outcome</span>
                <p>Reduced errors from manual transfers between tools. Invoice generation became faster and more consistent. Management gained improved reporting visibility for operational planning.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
