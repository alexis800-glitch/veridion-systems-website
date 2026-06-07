const clients = [
  {
    icon: '🏨',
    company: 'Eko Hotels & Suites',
    project: 'Christmas Booking Portal',
  },
  {
    icon: '🎟️',
    company: 'HEBS Events',
    project: 'Event Management Platform',
  },
  {
    icon: '✈️',
    company: 'Safari Wings Travel',
    project: 'Hotel & Travel Concierge',
  },
];

export function TrustStrip() {
  return (
    <section className="clients-section">
      <div className="container clients-inner">
        <p className="clients-label">Trusted by organisations across sectors</p>
        <div className="clients-grid">
          {clients.map((c) => (
            <div key={c.company} className="client-card">
              <div className="client-icon-wrap">{c.icon}</div>
              <div className="client-info">
                <div className="client-name">{c.company}</div>
                <div className="client-project">{c.project}</div>
              </div>
              <div className="client-check" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
