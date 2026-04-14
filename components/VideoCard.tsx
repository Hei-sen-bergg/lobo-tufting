import React, { useRef, useEffect, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { gsap } from 'gsap';

interface VideoCardProps {
  src: string;
  title?: string;
  category?: string;
  index?: number;
}

export const VideoCard: React.FC<VideoCardProps> = ({ src, title, category, index = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!cardRef.current) return;

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
  }, [index]);

  useEffect(() => {
    const handleMouseEnter = () => {
      if (!cardRef.current) return;
      gsap.to(cardRef.current, {
        scale: 1.05,
        duration: 0.4,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      gsap.to(cardRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
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

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden group cursor-pointer border-2 border-transparent hover:border-[#74C63D] transition-all duration-300"
      style={{ opacity: 1, transform: 'translateY(0)' }}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        loop
        muted
        autoPlay
        playsInline
        preload="metadata"
      />

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#74C63D] hover:text-black transition-all group-hover:opacity-100 opacity-0"
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>

      {/* Play button overlay */}
    

      {/* Info overlay */}
      {(title || category) && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {category && (
            <span className="text-[#74C63D] text-xs font-bold uppercase tracking-wide">
              {category}
            </span>
          )}
          {title && <p className="text-white font-bold text-sm mt-1">{title}</p>}
        </div>
      )}
    </div>
  );
};
