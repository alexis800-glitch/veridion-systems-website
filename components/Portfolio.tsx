'use client';

import { motion } from 'framer-motion';
import { AnimateInView } from './AnimateInView';
import { useMounted } from '@/hooks/useMounted';

const ease: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

interface PortfolioCardProps {
  href?: string;
  ariaLabel?: string;
  url: string;
  imgSrc: string;
  imgAlt: string;
  placeholder: string;
  placeholderLabel: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
}

const portfolioItems: PortfolioCardProps[] = [
  {
    href: 'https://ekochristmasportal.com',
    ariaLabel: 'Visit Eko Christmas Booking Portal (opens in new tab)',
    url: 'ekochristmasportal.com',
    imgSrc: '/assets/screenshots/christmas-dashboard.png',
    imgAlt: 'Eko Christmas Booking Portal, operational screenshot',
    placeholder: '📅',
    placeholderLabel: 'Booking Portal',
    badge: 'Hospitality',
    title: 'Eko Christmas Booking Portal',
    description: 'Seasonal hospitality booking system with real-time availability, payment integration, and automated guest confirmation workflows.',
    tags: ['Node.js', 'React', 'PostgreSQL', 'Stripe'],
  },
  {
    href: 'https://hebseventportal.com',
    ariaLabel: 'Visit HEBS Event Management Platform (opens in new tab)',
    url: 'hebseventportal.com',
    imgSrc: '/assets/screenshots/hebs-event-management.png',
    imgAlt: 'HEBS Event Management Platform, operational screenshot',
    placeholder: '📋',
    placeholderLabel: 'Event Management',
    badge: 'Events',
    title: 'HEBS Event Management Platform',
    description: 'Comprehensive event operations platform with attendee management, ticketing, real-time capacity tracking, and integrated reporting for enterprise event teams.',
    tags: ['Vue.js', 'Python', 'MongoDB', 'Real-time'],
  },
  {
    href: 'https://tickets.ekohotels.com',
    ariaLabel: 'Visit Eko Event Ticketing System (opens in new tab)',
    url: 'tickets.ekohotels.com',
    imgSrc: '/assets/screenshots/ticketing-dashboard.png',
    imgAlt: 'Eko Event Ticketing System, operational screenshot',
    placeholder: '🎟️',
    placeholderLabel: 'Ticketing System',
    badge: 'Events',
    title: 'Eko Event Ticketing System',
    description: 'Full-featured ticketing platform with dynamic pricing, QR code generation, mobile gate scanning, and real-time revenue analytics for event organizers.',
    tags: ['Next.js', 'Firebase', 'QR Codes', 'Payment API'],
  },
  {
    url: 'ai-email.veridion.app',
    imgSrc: '/assets/screenshots/email-automation.png',
    imgAlt: 'AI Email Automation Workflow, operational screenshot',
    placeholder: '🤖',
    placeholderLabel: 'AI Automation',
    badge: 'Automation',
    title: 'AI Email Automation Workflow',
    description: 'Intelligent email processing with LLM-powered classification, sentiment analysis, automatic routing, and AI-generated response suggestions for support teams.',
    tags: ['OpenAI API', 'Python', 'NLP', 'Workflow Engine'],
  },
  {
    href: 'https://invoice.safariwings.net',
    ariaLabel: 'Visit Safari Wings Travel Platform (opens in new tab)',
    url: 'invoice.safariwings.net',
    imgSrc: '/assets/screenshots/safariwings-homepage.png',
    imgAlt: 'Safari Wings Travel Platform, screenshot',
    placeholder: '✈️',
    placeholderLabel: 'Travel Platform',
    badge: 'Travel',
    title: 'Safari Wings Travel Platform',
    description: 'End-to-end travel operations platform combining booking management, customer relationship tools, itinerary builder, and a client-facing self-service portal.',
    tags: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
  },
  {
    url: 'hotel-dashboard.veridion.app',
    imgSrc: '/assets/screenshots/hotel-dashboard.png',
    imgAlt: 'Hotel Performance Dashboard, screenshot',
    placeholder: '📊',
    placeholderLabel: 'Performance Dashboard',
    badge: 'Hospitality',
    title: 'Hotel Performance Dashboard',
    description: 'Executive business intelligence dashboard connected to Power BI, providing hospitality leadership with occupancy, revenue, and operational KPI visibility in real-time.',
    tags: ['Power BI', 'DAX', 'Analytics', 'SQL Server'],
  },
];

function PortfolioCard({
  href,
  ariaLabel,
  url,
  imgSrc,
  imgAlt,
  placeholder,
  placeholderLabel,
  badge,
  title,
  description,
  tags,
}: PortfolioCardProps) {
  const inner = (
    <>
      <div className="pc-screen">
        <div className="pc-chrome">
          <div className="pc-chrome-controls">
            <div className="pc-dots"><span /><span /><span /></div>
            <div className="pc-url">{url}</div>
          </div>
        </div>
        <div className="pc-viewport">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgSrc}
            alt={imgAlt}
            className="pc-shot"
            loading="lazy"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
          <div className="pc-img-placeholder" aria-hidden="true">
            <div className="ph-icon">{placeholder}</div>
            <span>{placeholderLabel}</span>
          </div>
        </div>
      </div>
      <div className="pc-info">
        <div className="pc-badge">{badge}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="pc-tags">
          {tags.map((tag) => (
            <span key={tag} className="tag-tech">{tag}</span>
          ))}
        </div>
        <a href="#case-studies" className="btn-case-study">
          View Case Study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </a>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="portfolio-card"
        aria-label={ariaLabel}
        style={{ cursor: 'pointer' }}
      >
        {inner}
      </a>
    );
  }

  return <div className="portfolio-card">{inner}</div>;
}

export function Portfolio() {
  const mounted = useMounted();

  return (
    <section id="portfolio">
      <div className="container">
        <AnimateInView>
          <div className="section-header">
            <div className="section-eyebrow">Portfolio</div>
            <h2>Selected Work by <span className="text-teal">Veridion Systems</span></h2>
            <p>Selected internal and client-facing systems designed by Veridion Systems Ltd. Each project below represents a real operational challenge and a practical system built to address it.</p>
          </div>
        </AnimateInView>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView={mounted ? 'visible' : undefined}
          viewport={{ once: true, margin: '0px' }}
        >
          {portfolioItems.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <PortfolioCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
