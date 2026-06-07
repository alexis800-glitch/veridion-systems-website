'use client';

import { useEffect } from 'react';

export function ClientScripts() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = entry.target.parentElement
              ? Array.from(entry.target.parentElement.querySelectorAll('.fade-in'))
              : [];
            const idx = siblings.indexOf(entry.target);
            const delay = Math.min(idx * 80, 360);
            setTimeout(() => entry.target.classList.add('visible'), delay);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  return null;
}
