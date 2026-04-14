import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface StatsCounterProps {
  endValue: number;
  label: string;
  suffix?: string;
  index?: number;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({
  endValue,
  label,
  suffix = '',
  index = 0,
}) => {
  const numberRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef({ value: 0 });

  useEffect(() => {
    if (!numberRef.current) return;

    const containerRef = numberRef.current.closest('[data-stats-container]');
    if (!containerRef) return;

    const animation = gsap.to(counterRef.current, {
      scrollTrigger: {
        trigger: containerRef,
        start: 'top 80%',
        markers: false,
      },
      value: endValue,
      duration: 2.5,
      delay: index * 0.2,
      ease: 'power2.out',
      onUpdate: () => {
        if (numberRef.current) {
          const displayValue = Math.floor(counterRef.current.value);
          numberRef.current.textContent = displayValue.toString();
        }
      },
    });

    return () => {
      animation.kill();
    };
  }, [endValue, index]);

  return (
    <div className="text-center space-y-2">
      <div ref={numberRef} className="text-4xl md:text-5xl font-display font-bold text-[#74C63D]">
        0
      </div>
      <p className="text-[#B8C0B8] text-sm md:text-base">
        {label}
        {suffix && <span className="ml-1">{suffix}</span>}
      </p>
    </div>
  );
};
