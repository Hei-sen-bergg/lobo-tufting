import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

interface ImageCardProps {
  src: string;
  alt: string;
  title?: string;
  category?: string;
  index?: number;
  rounded?: boolean;
}

export const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  title,
  category,
  index = 0,
  rounded = true
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!cardRef.current || !imageLoaded) return;

    // Animate IN from current state on scroll - avoids starting at opacity 0
    gsap.to(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        markers: false
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.12,
      ease: 'power3.out'
    });

    return () => {
      gsap.killTweensOf(cardRef.current);
    };
  }, [index, imageLoaded]);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (!cardRef.current) return;
      gsap.to(cardRef.current, {
        scale: 1.05,
        boxShadow: '0 40px 80px rgba(116, 198, 61, 0.2)',
        duration: 0.4,
        ease: 'power2.out'
      });

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          brightness: 1.1,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      gsap.to(cardRef.current, {
        scale: 1,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        duration: 0.4,
        ease: 'power2.out'
      });

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          brightness: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative w-full aspect-square group overflow-hidden bg-[#0B0F0B] ${
        rounded ? 'rounded-3xl' : ''
      } shadow-lg hover:shadow-xl transition-all cursor-pointer`}
      style={{ opacity: 1, transform: 'translateY(0)' }}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-all duration-700"
        onLoad={() => setImageLoaded(true)}
        decoding="async"
      />

      {/* Overlay */}
      {(title || category) && (
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-6 flex flex-col justify-end">
          {category && (
            <span className="text-[#74C63D] text-xs font-bold uppercase tracking-widest mb-2">
              {category}
            </span>
          )}
          {title && <h3 className="text-white font-bold text-lg">{title}</h3>}
        </div>
      )}
    </div>
  );
};
