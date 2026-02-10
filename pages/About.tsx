
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!aboutRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".fade-in", {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.3,
                ease: "power2.out"
            });
        }, aboutRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={aboutRef} className="py-32 px-6 max-w-4xl mx-auto space-y-24">
            <div className="space-y-6 text-center">
                <h1 className="fade-in text-6xl md:text-8xl font-display font-bold tracking-tighter">The LOBO <br /><span className="text-[#74C63D]">Origin.</span></h1>
                <p className="fade-in text-[#B8C0B8] text-xl leading-relaxed">
                    Born out of a obsession for textures and pop culture, LOBO Tufting started in a small garage in Thoongalloor. 
                </p>
            </div>

            <div className="fade-in space-y-12">
                <div className="aspect-video rounded-[3rem] overflow-hidden border border-[#1C261C]">
                    <img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale opacity-50" alt="Studio" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-4">
                        <h3 className="text-[#74C63D] font-bold uppercase tracking-widest text-xs">Our Mission</h3>
                        <p className="text-white text-lg leading-relaxed">
                            We don't just sell rugs; we sell tactile stories. Our mission is to bridge the gap between digital art and physical warmth, one stitch at a time.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-[#74C63D] font-bold uppercase tracking-widest text-xs">Sustainability</h3>
                        <p className="text-white text-lg leading-relaxed">
                            We source locally produced wool where possible and use eco-friendly adhesives, ensuring that our footprints are as soft on the planet as our rugs are on your feet.
                        </p>
                    </div>
                </div>
            </div>

            <div className="fade-in p-12 rounded-[3rem] bg-[#0B0F0B] border border-[#1C261C] text-center space-y-6">
                <h2 className="text-3xl font-display font-bold">Visit the Studio</h2>
                <p className="text-[#7C857C]">Located in the heart of Thoongalloor, Kerala. By appointment only.</p>
                <a 
                    href="https://wa.me/919037305374"
                    className="inline-block px-10 py-4 bg-[#74C63D] text-black font-bold rounded-2xl hover:scale-105 transition-transform"
                >
                    Book a Studio Visit
                </a>
            </div>
        </div>
    );
};
