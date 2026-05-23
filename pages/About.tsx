
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollFadeIn } from '../components/animations/ScrollAnimations';
import { VIDEOS, getWhatsAppLink } from '../constants';
import { VideoCard } from '../components/VideoCard';
import { StatsCounter } from '../components/StatsCounter';
import { useSanityData } from '../src/sanity/hooks';
import { ABOUT_QUERY } from '../src/sanity/queries';
import type { AboutPage } from '../src/sanity/types';
import { withAboutPageDefaults } from '../src/sanity/pageDefaults';

export const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const { data: aboutData } = useSanityData<AboutPage>(ABOUT_QUERY);
    const about = withAboutPageDefaults(aboutData);

    const titleRef = useScrollFadeIn({ duration: 1.2, delay: 0, distance: 80 });
    const contentRef = useScrollFadeIn({ duration: 1, delay: 0.2, distance: 60 });
    const imageRef = useScrollFadeIn({ duration: 1.2, delay: 0, distance: 80 });
    const ctaRef = useScrollFadeIn({ duration: 1, delay: 0, distance: 60 });

    useEffect(() => {
        if (!aboutRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from('.fade-in', {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: 'top 80%',
                },
            });
        }, aboutRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={aboutRef} className="py-32 px-6 max-w-4xl mx-auto space-y-24">
            <div ref={titleRef} className="space-y-6 text-center">
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">
                    {about.headlineLine1} <br />
                    <span className="text-[#74C63D]">{about.headlineLine2}</span>
                </h1>
                <p className="text-[#B8C0B8] text-xl leading-relaxed">{about.description}</p>
            </div>

            <div ref={imageRef} className="space-y-12">
                <div className="aspect-video rounded-[3rem] overflow-hidden border border-[#1C261C]">
                    <img
                        src={about.imageUrl}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        alt="Studio"
                        loading="lazy"
                    />
                </div>

                <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-[#74C63D] font-bold uppercase tracking-widest text-xs">
                                Our Mission
                            </h3>
                            <p className="text-white text-lg leading-relaxed">{about.mission}</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-[#74C63D] font-bold uppercase tracking-widest text-xs">
                                Sustainability
                            </h3>
                            <p className="text-white text-lg leading-relaxed">{about.sustainability}</p>
                        </div>
                    </div>
                    <div>
                        <VideoCard src={VIDEOS.reel4} title="The Process" category="Behind the Scenes" />
                    </div>
                </div>
            </div>

            <div className="py-16 space-y-12" data-stats-container>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-center">
                    {about.statsSectionTitle}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <StatsCounter endValue={200} label="Rugs Crafted" suffix="+" index={0} />
                    <StatsCounter endValue={100} label="Happy Clients" suffix="%" index={1} />
                    <StatsCounter endValue={4} label="Years Active" suffix="+" index={2} />
                    <StatsCounter endValue={1000} label="Hours Invested" suffix="+" index={3} />
                </div>
            </div>

            <div
                ref={ctaRef}
                className="p-12 rounded-[3rem] bg-[#0B0F0B] border border-[#1C261C] text-center space-y-6"
            >
                <h2 className="text-3xl font-display font-bold">{about.visitTitle}</h2>
                <p className="text-[#7C857C]">{about.visitDescription}</p>
                <a
                    href={getWhatsAppLink("Hi LOBO! I'd like to book a studio visit.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-[#74C63D] text-black font-bold rounded-2xl hover:bg-[#8DFF4A] transition-all"
                >
                    {about.visitButtonText}
                </a>
            </div>
        </div>
    );
};
