
import React, { useEffect, useRef } from 'react';
import { Clock, Users, Scissors, Coffee, ArrowRight } from 'lucide-react';
import { getWhatsAppLink, VIDEOS } from '../constants';
import { gsap } from 'gsap';
import { useScrollFadeIn, useStaggeredChildren } from '../components/animations/ScrollAnimations';
import { VideoCard } from '../components/VideoCard';
import { ImageCard } from '../components/ImageCard';
import { useSanityData } from '../src/sanity/hooks';
import { WORKSHOPS_QUERY, GALLERY_QUERY, WORKSHOP_PAGE_QUERY } from '../src/sanity/queries';
import type { WorkshopItem, GalleryItem, WorkshopPageCopy } from '../src/sanity/types';

export const Workshop = () => {
    const { data: workshopData } = useSanityData<WorkshopItem[]>(WORKSHOPS_QUERY);
    const { data: galleryData } = useSanityData<GalleryItem[]>(GALLERY_QUERY);
    const { data: workshopPageData } = useSanityData<WorkshopPageCopy>(WORKSHOP_PAGE_QUERY);
    
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
        
        // Mark feature and CTA elements as stagger children
        const reveals = sectionRef.current.querySelectorAll('.reveal');
        reveals.forEach(el => {
            if (!el.classList.contains('stagger-child')) {
                el.classList.add('stagger-child');
            }
        });
    }, []);

    const features = [
        { icon: <Clock />, title: "3-Hour Session", desc: "Intensive hands-on training from start to finish." },
        { icon: <Scissors />, title: "All Gear Provided", desc: "Tufting guns, frames, and premium wool included." },
        { icon: <Users />, title: "Small Groups", desc: "Maximum 6 people per session for personalized attention." },
        { icon: <Coffee />, title: "Refreshments", desc: "Snacks and Kerala's finest coffee to keep you fueled." },
    ];

    const displayGallery = galleryData || [];

    const badgeText = workshopPageData?.badgeText || 'Workshops in Kerala';
    const headlineLine1 = workshopPageData?.headlineLine1 || 'Become the';
    const headlineLine2 = workshopPageData?.headlineLine2 || 'Artisan.';
    const intro = workshopPageData?.intro || 'Ever wondered how those fluffy masterpieces are made? Join us in our Kodungallur studio and learn the addictive art of tufting.';
    const gallerySectionTitle = workshopPageData?.gallerySectionTitle || 'What Students';
    const gallerySectionTitleAccent = workshopPageData?.gallerySectionTitleAccent || 'Create';

    return (
        <div ref={sectionRef} className="py-32 px-6 max-w-7xl mx-auto space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                    <div ref={titleRef} className="space-y-4">
                        <span className="inline-block px-4 py-1 bg-[#74C63D] text-black text-xs font-black rounded-full uppercase">{badgeText}</span>
                        <h1 className="text-6xl md:text-8xl font-display font-bold leading-none tracking-tighter">{headlineLine1} <br /><span className="text-[#74C63D]">{headlineLine2}</span></h1>
                        <p className="text-[#B8C0B8] text-xl leading-relaxed">
                            {intro}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="stagger-child reveal flex gap-4">
                                <div className="mt-1 text-[#74C63D]">{f.icon}</div>
                                <div>
                                    <h4 className="font-bold mb-1">{f.title}</h4>
                                    <p className="text-sm text-[#7C857C]">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="stagger-child reveal pt-4">
                        <a 
                            href={getWhatsAppLink("Hi LOBO! I want to book a slot for your next tufting workshop.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-10 py-5 bg-[#74C63D] text-black font-bold rounded-2xl hover:bg-[#8DFF4A] transition-all group"
                        >
                            {workshopPageData?.ctaButtonText || 'Inquire for Next Slot'} <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </div>

                <div>
                    <VideoCard 
                        src={VIDEOS.reel5} 
                        title="Tufting Demo" 
                        category="Workshop Preview"
                    />
                </div>
            </div>

            {/* Workshop Gallery */}
            <div className="space-y-12">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-center">{gallerySectionTitle} <span className="text-[#74C63D]">{gallerySectionTitleAccent}</span></h2>
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

        </div>
    );
};
