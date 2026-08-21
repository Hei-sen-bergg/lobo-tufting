import React, { useEffect, useRef } from 'react';
import { Clock, Users, Scissors, Coffee, ArrowRight } from 'lucide-react';
import { getWhatsAppLink, VIDEOS } from '../constants';
import { gsap } from 'gsap';
import { useScrollFadeIn, useStaggeredChildren } from '../components/animations/ScrollAnimations';
import { PageSkeleton } from '../components/LoadingSkeleton';
import { VideoCard } from '../components/VideoCard';
import { ImageCard } from '../components/ImageCard';
import { useSanityData } from '../src/sanity/hooks';
import { GALLERY_QUERY, WORKSHOP_PAGE_QUERY } from '../src/sanity/queries';
import type { GalleryItem, WorkshopPageCopy } from '../src/sanity/types';

const FEATURE_ICONS = [Clock, Scissors, Users, Coffee];

export const Workshop = () => {
    const { data: galleryData } = useSanityData<GalleryItem[]>(GALLERY_QUERY);
    const { data: workshopPageData, loading } = useSanityData<WorkshopPageCopy>(WORKSHOP_PAGE_QUERY);

    const sectionRef = useStaggeredChildren({
        duration: 0.8,
        staggerDelay: 0.12,
        distance: 50,
        ease: 'power3.out'
    });

    const titleRef = useScrollFadeIn({
        duration: 1.2,
        delay: 0,
        distance: 80
    });

    const imagesRef = useScrollFadeIn({
        duration: 1.2,
        delay: 0.2,
        distance: 80
    });

    useEffect(() => {
        if (!sectionRef.current) return;
        const reveals = sectionRef.current.querySelectorAll('.reveal');
        reveals.forEach(el => {
            if (!el.classList.contains('stagger-child')) {
                el.classList.add('stagger-child');
            }
        });
    }, []);

    const features = workshopPageData?.features ?? [];
    const displayGallery = galleryData ?? [];
    const videoSrc = workshopPageData?.videoUrl || VIDEOS.reel5;

    return (
        <div ref={sectionRef} className="py-32 px-6 max-w-7xl mx-auto space-y-24">
            {loading ? (
                <PageSkeleton />
            ) : (
                <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                    <div ref={titleRef} className="space-y-4">
                        {workshopPageData?.badgeText ? (
                            <span className="inline-block px-4 py-1 bg-[#74C63D] text-black text-xs font-black rounded-full uppercase">{workshopPageData.badgeText}</span>
                        ) : null}
                        <h1 className="text-6xl md:text-8xl font-display font-bold leading-none tracking-tighter">{workshopPageData?.headlineLine1} <br /><span className="text-[#74C63D]">{workshopPageData?.headlineLine2}</span></h1>
                        {workshopPageData?.intro ? (
                            <p className="text-[#B8C0B8] text-xl leading-relaxed">
                                {workshopPageData.intro}
                            </p>
                        ) : null}
                    </div>

                    {features.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((f, i) => {
                                const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                                return (
                                    <div key={i} className="stagger-child reveal flex gap-4">
                                        <div className="mt-1 text-[#74C63D]">{Icon ? <Icon /> : null}</div>
                                        <div>
                                            <h4 className="font-bold mb-1">{f.title}</h4>
                                            <p className="text-sm text-[#7C857C]">{f.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {workshopPageData?.ctaButtonText ? (
                        <div className="stagger-child reveal pt-4">
                            <a
                                href={getWhatsAppLink("Hi LOBO! I want to book a slot for your next tufting workshop.")}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-10 py-5 bg-[#74C63D] text-black font-bold rounded-2xl hover:bg-[#8DFF4A] transition-all group"
                            >
                                {workshopPageData.ctaButtonText} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                            </a>
                        </div>
                    ) : null}
                </div>

                <div>
                    <VideoCard
                        src={videoSrc}
                        title="Tufting Demo"
                        category="Workshop Preview"
                    />
                </div>
            </div>

            {/* Workshop Gallery */}
            {(workshopPageData?.gallerySectionTitle || workshopPageData?.gallerySectionTitleAccent) && (
                <div className="space-y-12">
                    <h2 className="text-5xl md:text-7xl font-display font-bold text-center">{workshopPageData?.gallerySectionTitle} <span className="text-[#74C63D]">{workshopPageData?.gallerySectionTitleAccent}</span></h2>
                    <div ref={imagesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayGallery.slice(0, 3).map((item, idx) => (
                            <ImageCard
                                key={item._id}
                                src={item.imageUrl}
                                alt={item.title}
                                title={item.title}
                                category={item.category}
                                index={idx}
                            />
                        ))}
                    </div>
                </div>
            )}
                </>
            )}
        </div>
    );
};
