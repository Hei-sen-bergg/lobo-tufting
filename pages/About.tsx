import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useScrollFadeIn } from '../components/animations/ScrollAnimations';
import { VIDEOS, getWhatsAppLink } from '../constants';
import { VideoCard } from '../components/VideoCard';
import { StatsCounter } from '../components/StatsCounter';
import { PageSkeleton } from '../components/LoadingSkeleton';
import { useSanityData } from '../src/sanity/hooks';
import { ABOUT_QUERY } from '../src/sanity/queries';
import type { About as AboutType } from '../src/sanity/types';

export const About = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const { data: aboutData, loading } = useSanityData<AboutType>(ABOUT_QUERY);

    const titleRef = useScrollFadeIn({
        duration: 1.2,
        delay: 0,
        distance: 80
    });

    const contentRef = useScrollFadeIn({
        duration: 1,
        delay: 0.2,
        distance: 60
    });

    const imageRef = useScrollFadeIn({
        duration: 1.2,
        delay: 0,
        distance: 80
    });

    const ctaRef = useScrollFadeIn({
        duration: 1,
        delay: 0,
        distance: 60
    });

    useEffect(() => {
        if (!aboutRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".fade-in", {
                opacity: 0,
                y: 30,
                duration: 1,
                stagger: 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 80%"
                }
            });
        }, aboutRef.current);
        return () => ctx.revert();
    }, []);

    if (loading) {
        return <PageSkeleton />;
    }

    const stats = aboutData?.stats ?? [];

    return (
        <div ref={aboutRef} className="py-32 px-6 max-w-4xl mx-auto space-y-24">
            <div ref={titleRef} className="space-y-6 text-center">
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">{aboutData?.headlineLine1} <br /><span className="text-[#74C63D]">{aboutData?.headlineLine2}</span></h1>
                {aboutData?.description ? (
                    <p className="text-[#B8C0B8] text-xl leading-relaxed">
                        {aboutData.description}
                    </p>
                ) : null}
            </div>

            <div ref={imageRef} className="space-y-12">
                {aboutData?.imageUrl ? (
                    <div className="aspect-video rounded-[3rem] overflow-hidden border border-[#1C261C]">
                        <img
                            src={aboutData.imageUrl}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            alt="Studio"
                            loading="lazy"
                        />
                    </div>
                ) : null}

                <div ref={contentRef} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        {aboutData?.mission ? (
                            <div className="space-y-4">
                                <h3 className="text-[#74C63D] font-bold uppercase tracking-widest text-xs">Our Mission</h3>
                                <p className="text-white text-lg leading-relaxed">
                                    {aboutData.mission}
                                </p>
                            </div>
                        ) : null}
                        {aboutData?.sustainability ? (
                            <div className="space-y-4">
                                <h3 className="text-[#74C63D] font-bold uppercase tracking-widest text-xs">Sustainability</h3>
                                <p className="text-white text-lg leading-relaxed">
                                    {aboutData.sustainability}
                                </p>
                            </div>
                        ) : null}
                    </div>
                    <div>
                        <VideoCard
                            src={VIDEOS.reel4}
                            title="The Process"
                            category="Behind the Scenes"
                        />
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            {(aboutData?.statsSectionTitle || stats.length > 0) && (
                <div className="py-16 space-y-12" data-stats-container>
                    {aboutData?.statsSectionTitle ? (
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-center">{aboutData.statsSectionTitle}</h2>
                    ) : null}
                    {stats.length > 0 && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((s, i) => (
                                <StatsCounter
                                    key={i}
                                    endValue={s.value ?? 0}
                                    label={s.label ?? ''}
                                    suffix={s.suffix ?? ''}
                                    index={i}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}

            {(aboutData?.visitTitle || aboutData?.visitDescription || aboutData?.visitButtonText) && (
                <div ref={ctaRef} className="p-12 rounded-[3rem] bg-[#0B0F0B] border border-[#1C261C] text-center space-y-6">
                    {aboutData?.visitTitle ? (
                        <h2 className="text-3xl font-display font-bold">{aboutData.visitTitle}</h2>
                    ) : null}
                    {aboutData?.visitDescription ? (
                        <p className="text-[#7C857C]">{aboutData.visitDescription}</p>
                    ) : null}
                    {aboutData?.visitButtonText ? (
                        <a
                            href={getWhatsAppLink("Hi LOBO! I'd like to book a studio visit.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 bg-[#74C63D] text-black font-bold rounded-2xl hover:bg-[#8DFF4A] transition-all"
                        >
                            {aboutData.visitButtonText}
                        </a>
                    ) : null}
                </div>
            )}
        </div>
    );
};
