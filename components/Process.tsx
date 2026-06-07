export function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">How We Work</div>
          <h2>A Structured Process for <span className="text-teal">Reliable Delivery</span></h2>
          <p>Every engagement follows our four-phase framework for understanding your operations and deploying practical systems that keep improving.</p>
        </div>

        <div className="process-timeline">
          <div className="timeline-track" aria-hidden="true" />

          <div className="timeline-step fade-in">
            <div className="ts-number">01</div>
            <div className="ts-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <h3>Discover</h3>
            <p>We audit your current operations, map existing workflows, identify inefficiencies, and define the specific automation opportunities that will create the most business value.</p>
          </div>

          <div className="timeline-step fade-in">
            <div className="ts-number">02</div>
            <div className="ts-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                <circle cx="11" cy="11" r="2"/>
              </svg>
            </div>
            <h3>Design</h3>
            <p>We architect the complete solution including data structure, user experience, integration points, and automation logic so that the design is solid before any code is written.</p>
          </div>

          <div className="timeline-step fade-in">
            <div className="ts-number">03</div>
            <div className="ts-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
              </svg>
            </div>
            <h3>Build</h3>
            <p>Our team builds your system with clean, maintainable code. You receive regular progress demonstrations, complete transparency, and the ability to provide feedback at each stage.</p>
          </div>

          <div className="timeline-step fade-in">
            <div className="ts-number">04</div>
            <div className="ts-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <h3>Automate</h3>
            <p>We deploy, monitor performance, and continuously add automation improvements. Your systems evolve over time with ongoing optimisation and dedicated support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
