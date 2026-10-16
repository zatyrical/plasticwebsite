'use client';

import { useEffect } from 'react';

export default function MotionObserver() {
  useEffect(() => {
    // Animation is optional: never mask content unless its APIs can initialise.
    if (
      typeof window.matchMedia !== 'function' ||
      typeof IntersectionObserver !== 'function' ||
      typeof requestAnimationFrame !== 'function'
    ) return;
    const motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!motionOK) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>('.segmented-section'));
    if (!sections.length) return;
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.segmented-section .about-image-card, .segmented-section .aesthetic-photo-card, .segmented-section .focus-grid:not(.aesthetic-photo-grid):not(.reconstructive-photo-grid) .focus-card, .segmented-section .media-visual-card, .segmented-section .training-image-strip div, .segmented-section .blog-card, .segmented-section .compliance'
      )
    );

    const motionClasses = ['motion-section', 'motion-iris', 'motion-card', 'motion-in'];
    const original = Array.from(new Set([...sections, ...cards])).map(element => ({
      element,
      classes: motionClasses.map(name => [name, element.classList.contains(name)] as const),
      delay: element.style.getPropertyValue('--motion-delay'),
      priority: element.style.getPropertyPriority('--motion-delay')
    }));
    let active = true;
    let sectionObserver: IntersectionObserver | undefined;
    let cardObserver: IntersectionObserver | undefined;
    const cleanup = () => {
      active = false;
      sectionObserver?.disconnect();
      cardObserver?.disconnect();
      document.body.classList.remove('motion-js');
      original.forEach(({ element, classes, delay, priority }) => {
        classes.forEach(([name, present]) => element.classList.toggle(name, present));
        if (delay) element.style.setProperty('--motion-delay', delay, priority);
        else element.style.removeProperty('--motion-delay');
      });
    };

    try {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          if (!active) return;
          entries.forEach((entry) => {
            entry.target.classList.toggle('motion-in', entry.isIntersecting);
          });
        },
        { threshold: 0.18, rootMargin: '-8% 0px -16% 0px' }
      );

      cardObserver = new IntersectionObserver(
        (entries, observer) => {
          if (!active) return;
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            requestAnimationFrame(() => {
              if (active) entry.target.classList.add('motion-in');
            });
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -4% 0px' }
      );

      sections.forEach((section) => {
        section.classList.add('motion-section');
        if (section.matches('#about, #contact')) section.classList.add('motion-iris');
        const sectionCards = Array.from(
          section.querySelectorAll<HTMLElement>(
            '.about-image-card, .aesthetic-photo-card, .focus-grid:not(.aesthetic-photo-grid):not(.reconstructive-photo-grid) .focus-card, .media-visual-card, .training-image-strip div, .blog-card, .compliance'
          )
        );
        sectionCards.forEach((card, index) => {
          card.classList.add('motion-card');
          card.style.setProperty('--motion-delay', `${Math.min(index % 4, 3) * 80}ms`);
        });
      });
      sections.forEach(section => sectionObserver!.observe(section));
      cards.forEach(card => cardObserver!.observe(card));
      document.body.classList.add('motion-js');
    } catch {
      cleanup();
      return;
    }

    return cleanup;
  }, []);

  return null;
}
