/* ================================================================
   VERIDION SYSTEMS LTD - MAIN SCRIPT v3
   Three.js removed. Pure CSS handles all hero animations.
================================================================ */

/* ── Sticky Nav ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile Menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  const isOpen = hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
});

// Close on link click
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
  });
});

/* ── Smooth Scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ── Scroll Reveal (Intersection Observer) ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger siblings in a grid for a cleaner cascade
      const siblings = entry.target.parentElement
        ? Array.from(entry.target.parentElement.querySelectorAll('.fade-in'))
        : [];
      const idx = siblings.indexOf(entry.target);
      const delay = Math.min(idx * 80, 360);
      setTimeout(() => entry.target.classList.add('visible'), delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -48px 0px'
});

document.querySelectorAll('.fade-in').forEach(el => revealObserver.observe(el));

/* ── Floating AI Button ── */
const floatBtn = document.getElementById('float-btn');
if (floatBtn) {
  window.addEventListener('scroll', () => {
    floatBtn.classList.toggle('visible', window.scrollY > 480);
  }, { passive: true });
}

/* ── Contact Form ── */
const form = document.getElementById('contact-form');
if (form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnHTML = submitBtn ? submitBtn.innerHTML : '';

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;

    btn.innerHTML = `
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
      </svg>
      Sending…
    `;

    try {
      const formData = new FormData(form);
      await fetch(form.action, {
        method: form.method,
        body: formData,
        mode: 'no-cors'
      });

      showSuccessMessage(originalBtnHTML);

    } catch (error) {
      console.error('Form submission error:', error);
      btn.disabled = false;
      btn.innerHTML = originalBtnHTML;
      alert('There was an error sending your message. Please try again or contact us at info@veridionsystems.net');
    }
  });
}

function showSuccessMessage(originalBtnHTML) {
  const contactForm = document.getElementById('contact-form');
  const successEl = document.getElementById('contact-success');
  if (!contactForm || !successEl) return;

  contactForm.style.display = 'none';
  successEl.style.display = 'flex';

  setTimeout(() => {
    successEl.style.display = 'none';
    contactForm.style.display = 'flex';
    contactForm.reset();
    const btn = contactForm.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = originalBtnHTML;
    }
  }, 4000);
}

/* ── Portfolio: hide broken img so placeholder shows ── */
document.querySelectorAll('.pc-shot').forEach(img => {
  img.addEventListener('error', () => { img.style.display = 'none'; });
});

/* ── Active nav link highlight on scroll ── */
const sections = document.querySelectorAll('section[id], div[id="portfolio"]');
const navLinks = document.querySelectorAll('.nav-links a');

const activeLinkObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle(
          'active',
          link.getAttribute('href') === `#${entry.target.id}`
        );
      });
    }
  });
}, { rootMargin: '-35% 0px -60% 0px' });

sections.forEach(s => activeLinkObserver.observe(s));
