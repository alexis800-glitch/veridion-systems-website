'use client';

import { useState, useRef, FormEvent } from 'react';

const SUBMIT_URL = 'https://superagent-60478300.base44.app/functions/submitInquiry';

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);

    const data = new FormData(formRef.current);
    const payload = {
      fullName:           data.get('name'),
      companyName:        data.get('company'),
      email:              data.get('email'),
      phone:              data.get('phone'),
      industry:           data.get('industry'),
      projectDescription: data.get('message'),
      budgetRange:        data.get('budget'),
      timeline:           data.get('timeline'),
    };

    try {
      const res = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server responded with ${res.status}`);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        formRef.current?.reset();
      }, 4000);
    } catch {
      alert('There was an error sending your message. Please try again or contact us at info@veridionsystems.net');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Get in Touch</div>
          <h2>Let&apos;s Start the <span className="text-teal">Conversation</span></h2>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-intro">Tell us about your business and the system you want to build. We&apos;ll come back to you within one business day with an initial response.</p>

            <div className="contact-details">
              <div className="cd-item">
                <div className="cd-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="cd-label">Email</p>
                  <a href="mailto:info@veridionsystems.net">info@veridionsystems.net</a>
                </div>
              </div>
              <div className="cd-item">
                <div className="cd-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="cd-label">Phone &amp; WhatsApp</p>
                  <a href="tel:+2348065881783">+234 806 588 1783</a>
                </div>
              </div>
              <div className="cd-item">
                <div className="cd-icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <div>
                  <p className="cd-label">LinkedIn</p>
                  <a href="#" target="_blank" rel="noopener noreferrer">Veridion Systems Ltd</a>
                </div>
              </div>
            </div>

            <div className="contact-trust">
              <div className="ct-item"><span className="ct-dot" />Free initial consultation, no obligation</div>
              <div className="ct-item"><span className="ct-dot" />Response within one business day</div>
              <div className="ct-item"><span className="ct-dot" />Global team, based in Lagos, Nigeria</div>
            </div>
          </div>

          <div id="contact-form-wrapper">
            {success ? (
              <div className="contact-success">
                <div className="success-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3>Thank you</h3>
                <p>Your message has been received. We will respond within one business day.</p>
              </div>
            ) : (
              <form className="contact-form" ref={formRef} onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-name">Full Name</label>
                    <input type="text" id="f-name" name="name" placeholder="Your full name" required autoComplete="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-email">Business Email</label>
                    <input type="email" id="f-email" name="email" placeholder="you@company.com" required autoComplete="email" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-phone">Phone Number <span className="lbl-opt">(optional)</span></label>
                    <input type="tel" id="f-phone" name="phone" placeholder="+234 806 588 1783" autoComplete="tel" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-company">Company Name</label>
                    <input type="text" id="f-company" name="company" placeholder="Your company" required autoComplete="organization" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-industry">Industry</label>
                    <input type="text" id="f-industry" name="industry" placeholder="e.g. Hospitality, Travel, Events" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="f-budget">Budget Range</label>
                    <div className="select-wrap">
                      <select id="f-budget" name="budget" required>
                        <option value="" disabled>Select budget range…</option>
                        <option value="under-250k">Under ₦250,000</option>
                        <option value="250k-500k">₦250,000 – ₦500,000</option>
                        <option value="500k-1m">₦500,000 – ₦1,000,000</option>
                        <option value="1m-3m">₦1,000,000 – ₦3,000,000</option>
                        <option value="3m-plus">₦3,000,000+</option>
                        <option value="discuss">Let&apos;s discuss</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="f-timeline">Timeline</label>
                    <div className="select-wrap">
                      <select id="f-timeline" name="timeline" required>
                        <option value="" disabled>Select timeline…</option>
                        <option value="asap">ASAP (within 1 month)</option>
                        <option value="1-3-months">1 – 3 months</option>
                        <option value="3-6-months">3 – 6 months</option>
                        <option value="6-plus-months">6+ months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="f-message">Project Description</label>
                  <textarea id="f-message" name="message" rows={5} placeholder="Describe your business challenge or the system you want to build…" required />
                </div>
                <button type="submit" className="btn btn-primary btn-full btn-lg" disabled={submitting}>
                  {submitting ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
