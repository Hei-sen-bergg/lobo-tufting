import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useParallaxEffect = (speed = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    
    gsap.to(element, {
      y: 100,
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom center',
        scrub: 0.6,
        markers: false,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);

  return elementRef;
};

export const useScrollFadeIn = (options = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const {
    duration = 1,
    delay = 0,
    distance = 60,
    ease = 'power3.out'
  } = options as any;

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(elementRef.current, {
        y: distance,
        opacity: 0
      });

      // Animate TO visible state
      gsap.to(elementRef.current, {
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          end: 'top 50%',
          markers: false
        },
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease
      });
    });

    return () => ctx.revert();
  }, [duration, delay, distance, ease]);

  return elementRef;
};

export const useStaggeredChildren = (options = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    duration = 1,
    staggerDelay = 0.15,
    distance = 60,
    ease = 'power3.out'
  } = options as any;

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial state for all children
      gsap.set('.stagger-child', {
        y: distance,
        opacity: 0
      });

      // Animate TO visible state
      gsap.to('.stagger-child', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          markers: false
        },
        y: 0,
        opacity: 1,
        duration,
        stagger: staggerDelay,
        ease
      });
    }, containerRef.current);

    return () => ctx.revert();
  }, [duration, staggerDelay, distance, ease]);

  return containerRef;
};

export const useHoverScale = (scale = 1.05) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const onMouseEnter = () => {
      gsap.to(element, {
        scale,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    const onMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mouseleave', onMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', onMouseEnter);
      element.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [scale]);

  return elementRef;
};

export const useCountUpScroll = (endValue = 100, options = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef({ value: 0 });
  const {
    duration = 2,
    ease = 'power2.out'
  } = options as any;

  useEffect(() => {
    if (!elementRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(counterRef.current, {
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          markers: false
        },
        value: endValue,
        duration,
        ease,
        onUpdate: () => {
          if (elementRef.current) {
            elementRef.current.textContent = Math.floor(counterRef.current.value).toString();
          }
        }
      });
    });

    return () => ctx.revert();
  }, [endValue, duration, ease]);

  return elementRef;
};
