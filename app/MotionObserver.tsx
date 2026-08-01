'use client';

import { useEffect } from 'react';

export default function MotionObserver() {
  useEffect(() => {
    const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!motionOK) return;

    document.body.classList.add('motion-js');

    const sections = Array.from(document.querySelectorAll<HTMLElement>('.segmented-section'));
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.segmented-section .about-image-card, .segmented-section .aesthetic-photo-card, .segmented-section .focus-grid:not(.aesthetic-photo-grid) .focus-card, .segmented-section .media-visual-card, .segmented-section .training-image-strip div, .segmented-section .blog-card, .segmented-section .compliance'
      )
    );

    sections.forEach((section) => {
      section.classList.add('motion-section');
      if (section.matches('#about, #contact')) section.classList.add('motion-iris');
    });
    cards.forEach((card, index) => {
      card.classList.add('motion-card');
      card.style.setProperty('--motion-delay', `${Math.min(index % 4, 3) * 90}ms`);
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('motion-in', entry.isIntersecting);
        });
      },
      { threshold: 0.18, rootMargin: '-8% 0px -16% 0px' }
    );

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('motion-in', entry.isIntersecting);
        });
      },
      { threshold: 0.22, rootMargin: '0px 0px -10% 0px' }
    );

    sections.forEach((section) => sectionObserver.observe(section));
    cards.forEach((card) => cardObserver.observe(card));

    return () => {
      sectionObserver.disconnect();
      cardObserver.disconnect();
      document.body.classList.remove('motion-js');
    };
  }, []);

  return null;
}
