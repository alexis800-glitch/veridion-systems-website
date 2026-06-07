'use client';

import { motion } from 'framer-motion';
import { AnimateInView } from './AnimateInView';

const ease = [0.25, 0.4, 0.25, 1] as const;

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export function Services() {
  return (
    <section id="services">
      <div className="container">
        <AnimateInView>
          <div className="section-header">
            <div className="section-eyebrow">What We Build</div>
            <h2>End-to-End Technology Services for <span className="text-teal">Modern Organisations</span></h2>
            <p>From intelligent automation to custom software and data platforms that we design and build, we create systems that drive your business operations forward.</p>
          </div>
        </AnimateInView>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >

          <motion.div
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
          >
            <div className="sc-icon icon-teal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>AI Workflow Automation</h3>
            <p>Eliminate manual, repetitive tasks with intelligent automation pipelines. We connect your tools, automate approvals, and let AI handle operational work so your team can focus on what matters.</p>
            <div className="sc-tags"><span>N8n</span><span>Make</span><span>OpenAI API</span><span>Zapier</span></div>
          </motion.div>

          <motion.div
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
          >
            <div className="sc-icon icon-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3>Custom Business Applications</h3>
            <p>Purpose-built web applications precisely tailored to your workflows, including booking systems, operational CRMs, staff portals, and client-facing platforms that fit your processes exactly.</p>
            <div className="sc-tags"><span>Web Apps</span><span>Portals</span><span>CRM</span><span>Dashboards</span></div>
          </motion.div>

          <motion.div
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
          >
            <div className="sc-icon icon-gold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="14"/><path d="M2 20h20"/>
              </svg>
            </div>
            <h3>Power BI &amp; Data Dashboards</h3>
            <p>Transform raw business data into clear, actionable intelligence. We build Power BI dashboards that give leadership the visibility they need to make informed, confident decisions.</p>
            <div className="sc-tags"><span>Power BI</span><span>Analytics</span><span>KPI Tracking</span></div>
          </motion.div>

          <motion.div
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
          >
            <div className="sc-icon icon-green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <h3>Hotel &amp; Travel Technology</h3>
            <p>Specialised technology for hospitality and travel, including custom booking engines, reservation management, invoicing systems, and guest experience platforms built for real operational needs.</p>
            <div className="sc-tags"><span>Booking Systems</span><span>Invoicing</span><span>Travel Tech</span></div>
          </motion.div>

          <motion.div
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
          >
            <div className="sc-icon icon-purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <circle cx="9" cy="10" r="0.5" fill="currentColor"/>
                <circle cx="12" cy="10" r="0.5" fill="currentColor"/>
                <circle cx="15" cy="10" r="0.5" fill="currentColor"/>
              </svg>
            </div>
            <h3>AI Assistants &amp; Chatbots</h3>
            <p>Deploy AI-powered assistants that handle customer enquiries, process requests, and provide intelligent responses. They&apos;re trained on your business data and operate around the clock.</p>
            <div className="sc-tags"><span>ChatGPT API</span><span>WhatsApp Bot</span><span>Web Chat</span></div>
          </motion.div>

          <motion.div
            className="service-card"
            variants={cardVariants}
            whileHover={{ y: -6, transition: { duration: 0.22, ease } }}
          >
            <div className="sc-icon icon-amber">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3>Digital Transformation Consulting</h3>
            <p>Strategic technology consulting for businesses ready to modernise. We assess your current operations and build a practical, phased roadmap towards intelligent digital systems.</p>
            <div className="sc-tags"><span>Strategy</span><span>Roadmapping</span><span>Process Design</span></div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
