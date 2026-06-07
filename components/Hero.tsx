export function Hero() {
  return (
    <section id="hero">
      <div className="hero-bg-dots" aria-hidden="true" />
      <div className="hero-bg-gradient" aria-hidden="true" />

      <div className="container hero-layout">
        {/* Left: copy */}
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="eyebrow-dot" />
            AI · Automation · Business Intelligence
          </div>

          <h1>
            AI, Automation &amp; Business Intelligence
            <span className="text-teal"> Solutions for Modern Businesses</span>
          </h1>

          <p className="hero-sub">
            We design booking platforms, operational dashboards, AI workflows,
            and custom business applications that help organisations automate
            work and make smarter decisions.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Schedule Consultation
            </a>
            <a href="#services" className="btn btn-outline btn-lg">
              Explore Services
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </a>
          </div>

          <div className="hero-credentials">
            <div className="cred">
              <div className="cred-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
                </svg>
              </div>
              <div className="cred-text">
                <span className="cred-value">5+</span>
                <span className="cred-label">Business Systems Built &amp; Deployed</span>
              </div>
            </div>
            <div className="cred-divider" aria-hidden="true" />
            <div className="cred">
              <div className="cred-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="cred-text">
                <span className="cred-value">3 Sectors</span>
                <span className="cred-label">Hospitality · Travel · Events</span>
              </div>
            </div>
            <div className="cred-divider" aria-hidden="true" />
            <div className="cred">
              <div className="cred-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="cred-text">
                <span className="cred-value">AI First</span>
                <span className="cred-label">Automation-Focused Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: dashboard visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="hv-window">
            <div className="hv-chrome">
              <div className="hv-chrome-dots"><span /><span /><span /></div>
              <span className="hv-chrome-title">Operations Intelligence at Veridion</span>
              <div className="hv-live"><span className="live-pulse" />Live</div>
            </div>
            <div className="hv-body">
              <div className="hv-workflow">
                <div className="hv-node">
                  <div className="hv-node-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <span>Data In</span>
                </div>
                <div className="hv-conn"><div className="hv-packet" /></div>
                <div className="hv-node hv-node-active">
                  <div className="hv-node-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <span>AI Engine</span>
                </div>
                <div className="hv-conn"><div className="hv-packet" style={{ animationDelay: '1s' }} /></div>
                <div className="hv-node">
                  <div className="hv-node-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <span>Automate</span>
                </div>
                <div className="hv-conn"><div className="hv-packet" style={{ animationDelay: '2s' }} /></div>
                <div className="hv-node">
                  <div className="hv-node-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="20" x2="18" y2="10"/>
                      <line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  </div>
                  <span>Report</span>
                </div>
              </div>
              <div className="hv-chart">
                <div className="hv-chart-label">Automation Coverage <span className="hv-pct">↑ 87%</span></div>
                <div className="hv-bars">
                  <div className="hv-bar" style={{ '--h': '38%' } as React.CSSProperties} />
                  <div className="hv-bar" style={{ '--h': '58%' } as React.CSSProperties} />
                  <div className="hv-bar" style={{ '--h': '47%' } as React.CSSProperties} />
                  <div className="hv-bar hv-bar-hi" style={{ '--h': '82%' } as React.CSSProperties} />
                  <div className="hv-bar" style={{ '--h': '65%' } as React.CSSProperties} />
                  <div className="hv-bar hv-bar-hi" style={{ '--h': '90%' } as React.CSSProperties} />
                  <div className="hv-bar" style={{ '--h': '74%' } as React.CSSProperties} />
                </div>
              </div>
              <div className="hv-status">
                <div className="hv-pill pill-green"><span />CRM Synced</div>
                <div className="hv-pill pill-green"><span />AI Active</div>
                <div className="hv-pill pill-amber"><span />3 Pending</div>
                <div className="hv-pill pill-blue"><span />Power BI</div>
              </div>
            </div>
          </div>
          <div className="hv-chip chip-a">
            <div className="chip-icon chip-icon-teal">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>
              </svg>
            </div>
            <div className="chip-text">
              <span className="chip-val">5+</span>
              <span className="chip-lbl">Systems Built</span>
            </div>
          </div>
          <div className="hv-chip chip-b">
            <div className="chip-pulse-dot" />
            <div className="chip-text">
              <span className="chip-val small">AI Processing</span>
              <span className="chip-lbl">87 tasks automated today</span>
            </div>
          </div>
          <div className="hv-chip chip-c">
            <div className="chip-text">
              <span className="chip-lbl">Invoice #INV-2847 generated</span>
              <span className="chip-val small teal">Auto-sent to client ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
