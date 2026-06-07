export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-copy">
            <div className="section-eyebrow">About Veridion Systems</div>
            <h2>A Technology Company Building <span className="text-teal">Practical Business Systems</span></h2>
            <p>Veridion Systems Ltd designs and builds AI automation workflows, custom business applications, Power BI dashboards, and digital platforms for organisations across hospitality, travel, events, SMEs, and corporate sectors.</p>
            <p>Our approach is practical and outcome-focused. We build systems that fit how your business actually operates, not generic off-the-shelf software, so that the tools your team uses every day genuinely make operations faster, clearer, and easier to manage.</p>
            <p>Every engagement starts with a genuine understanding of your processes. We work closely with your team from discovery through to deployment, and we don&apos;t consider a project complete until it&apos;s working well in the hands of the people who use it.</p>
            <div className="about-actions">
              <a href="#contact" className="btn btn-primary">Schedule a Consultation</a>
              <a href="#portfolio" className="btn btn-outline">View Portfolio</a>
            </div>
          </div>
          <div className="about-pillars">
            <div className="pillar">
              <div className="pillar-icon icon-teal">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h4>AI &amp; Automation</h4>
              <p>Intelligent systems that reduce manual work and let your team focus on higher-value tasks.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon icon-gold">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="14"/><path d="M2 20h20"/>
                </svg>
              </div>
              <h4>Business Intelligence</h4>
              <p>Dashboards and reporting tools that give leadership the visibility needed to make sound decisions.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon icon-blue">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h4>Custom Software</h4>
              <p>Applications built precisely for your workflows, not adapted from something generic.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon icon-green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 2v20M2 12h20M21.71 10.71l-1.41 1.41M4.71 16.71l1.41-1.41M21.71 13.29l-1.41-1.41M4.71 8.29l1.41 1.41"/>
                </svg>
              </div>
              <h4>Practical Business Systems</h4>
              <p>Systems designed for how your business actually operates, not generic off-the-shelf solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
