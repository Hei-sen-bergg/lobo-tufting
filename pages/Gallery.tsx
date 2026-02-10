
import React, { useEffect, useRef } from 'react';
import { MOCK_GALLERY } from '../constants';
import { gsap } from 'gsap';

export const Gallery = () => {
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!galleryRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".gallery-item", {
                opacity: 0,
                scale: 0.9,
                duration: 1,
                stagger: {
                    each: 0.1,
                    grid: "auto",
                    from: "start"
                },
                ease: "power2.out"
            });
        }, galleryRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={galleryRef} className="py-32 px-6 max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">Tufted <br /><span className="text-[#74C63D]">Archives.</span></h1>
                <p className="text-[#B8C0B8] text-xl max-w-2xl mx-auto">A curation of our past works, custom commissions, and creative experiments.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
                {MOCK_GALLERY.map(item => (
                    <div key={item.id} className="gallery-item relative aspect-square group overflow-hidden rounded-3xl bg-[#0B0F0B]">
                        <img 
                            src={item.imageUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end">
                            <span className="text-[#74C63D] text-xs font-black uppercase tracking-widest mb-2">{item.category}</span>
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center pt-20">
                <p className="text-[#7C857C] mb-8">Want something similar for your space?</p>
                <a 
                    href="https://wa.me/919037305374"
                    className="px-12 py-5 bg-[#1C261C] border border-[#74C63D]/20 text-white font-bold rounded-2xl hover:bg-[#74C63D] hover:text-black transition-all"
                >
                    Request a Recreation
                </a>
            </div>
        </div>
    );
};
