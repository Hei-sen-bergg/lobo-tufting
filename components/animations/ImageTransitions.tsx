import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useImageGrayscaleHover = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const onMouseEnter = () => {
      gsap.to(image, {
        filter: 'grayscale(0%)',
        duration: 0.6,
        ease: 'power2.out'
      });
    };

    const onMouseLeave = () => {
      gsap.to(image, {
        filter: 'grayscale(100%)',
        duration: 0.6,
        ease: 'power2.out'
      });
    };

    image.addEventListener('mouseenter', onMouseEnter);
    image.addEventListener('mouseleave', onMouseLeave);

    return () => {
      image.removeEventListener('mouseenter', onMouseEnter);
      image.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return imageRef;
};

export const useLazyImageLoad = () => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      observer.observe(image);
      return () => observer.disconnect();
    }
  }, []);

  return imageRef;
};

export const useImageSlideIn = (duration = 1, delay = 0) => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.95,
      duration,
      delay,
      ease: 'power3.out'
    });
  }, [duration, delay]);

  return imageRef;
};

export const useImageMask = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.from(containerRef.current, {
      clipPath: 'inset(0% 100% 0% 0%)',
      duration: 1,
      ease: 'power2.out'
    });
  }, []);

  return containerRef;
};
