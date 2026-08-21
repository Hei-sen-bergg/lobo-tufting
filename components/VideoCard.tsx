import React, { useRef, useEffect, useState } from 'react';
import { Play, Volume2, VolumeX } from 'lucide-react';
import { gsap } from 'gsap';

interface VideoCardProps {
  src: string;
  title?: string;
  category?: string;
  index?: number;
}

/** Convert a YouTube or Vimeo watch URL to an embed URL. Returns null for local files. */
function getEmbedUrl(url: string): string | null {
  // YouTube — watch?v= or youtu.be/
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]+)/);
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}?mute=1&autoplay=1&loop=1&playsinline=1`;
  // Vimeo — vimeo.com/123456
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}?muted=1&autoplay=1&loop=1&playsinline=1`;
  return null;
}

export const VideoCard: React.FC<VideoCardProps> = ({ src, title, category, index = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const embedUrl = getEmbedUrl(src);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      scrollTrigger: { trigger: cardRef.current, start: 'top 85%', markers: false },
      opacity: 1, y: 0, duration: 0.8, delay: index * 0.12, ease: 'power3.out',
    });
    return () => { gsap.killTweensOf(cardRef.current); };
  }, [index]);

  useEffect(() => {
    if (embedUrl) return; // no hover zoom for iframes
    const card = cardRef.current;
    if (!card) return;
    const enter = () => gsap.to(card, { scale: 1.05, duration: 0.4, ease: 'power2.out' });
    const leave = () => gsap.to(card, { scale: 1, duration: 0.4, ease: 'power2.out' });
    card.addEventListener('mouseenter', enter);
    card.addEventListener('mouseleave', leave);
    return () => { card.removeEventListener('mouseenter', enter); card.removeEventListener('mouseleave', leave); };
  }, [embedUrl]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden group cursor-pointer border-2 border-transparent hover:border-[#74C63D] transition-all duration-300"
      style={{ opacity: 1, transform: 'translateY(0)' }}
    >
      {embedUrl ? (
        /* External embed (YouTube / Vimeo) */
        <iframe
          src={embedUrl}
          className="w-full h-full object-cover"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={title || category || 'Video'}
        />
      ) : (
        /* Local .mp4 video */
        <>
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
          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#74C63D] hover:text-black transition-all group-hover:opacity-100 opacity-0"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </>
      )}

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
