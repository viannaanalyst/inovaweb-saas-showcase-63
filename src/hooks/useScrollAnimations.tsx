import { useEffect, useRef } from 'react';

export function useScrollAnimations() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observar todos os elementos com classes de animação
    const elements = document.querySelectorAll(
      '.scroll-reveal-card, .scroll-reveal-up, .scroll-reveal-bounce, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-fade, .carousel-image-enter, .carousel-text-enter'
    );
    elements.forEach((el) => observer.current?.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const addScrollAnimation = (element: HTMLElement | null, animationType: 'card' | 'up' | 'bounce' | 'left' | 'right' | 'fade' | 'carousel-image' | 'carousel-text') => {
    if (element && observer.current) {
      const className = animationType.includes('carousel') ? animationType : `scroll-reveal-${animationType}`;
      element.classList.add(className);
      observer.current.observe(element);
    }
  };

  return { addScrollAnimation };
}