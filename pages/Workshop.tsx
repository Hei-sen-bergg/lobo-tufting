
import React, { useEffect } from 'react';
import { Clock, Users, Scissors, Coffee, ArrowRight } from 'lucide-react';
import { getWhatsAppLink, VIDEOS } from '../constants';
import { useScrollFadeIn, useStaggeredChildren } from '../components/animations/ScrollAnimations';
import { VideoCard } from '../components/VideoCard';
import { ImageCard } from '../components/ImageCard';
import { useSanityData } from '../src/sanity/hooks';
import { GALLERY_QUERY, WORKSHOP_PAGE_QUERY } from '../src/sanity/queries';
import type { GalleryItem } from '../src/sanity/types';
import { DEFAULT_GALLERY } from '../src/sanity/defaults/content';
import { withListDefaults } from '../src/sanity/merge';
import { withWorkshopPageDefaults } from '../src/sanity/pageDefaults';

const featureIcons = [
  <Clock key="clock" />,
  <Scissors key="scissors" />,
  <Users key="users" />,
  <Coffee key="coffee" />,
];

export const Workshop = () => {
    const { data: pageData } = useSanityData(WORKSHOP_PAGE_QUERY);
    const { data: galleryData } = useSanityData<GalleryItem[]>(GALLERY_QUERY);
    const page = withWorkshopPageDefaults(pageData);
    const displayGallery = withListDefaults(galleryData, DEFAULT_GALLERY, [
      'title',
      'description',
      'category',
    ]).slice(0, 3);

    const sectionRef = useStaggeredChildren({
        duration: 0.8,
        staggerDelay: 0.12,
        distance: 50,
        ease: 'power3.out',
    });

    const titleRef = useScrollFadeIn({ duration: 1.2, delay: 0, distance: 80 });
    const imagesRef = useScrollFadeIn({ duration: 1.2, delay: 0.2, distance: 80 });

    useEffect(() => {
        if (!sectionRef.current) return;
        sectionRef.current.querySelectorAll('.reveal').forEach((el) => {
            el.classList.add('stagger-child');
        });
    }, []);

    return (
        <div ref={sectionRef} className="py-32 px-6 max-w-7xl mx-auto space-y-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                    <div ref={titleRef} className="space-y-4">
                        <span className="inline-block px-4 py-1 bg-[#74C63D] text-black text-xs font-black rounded-full uppercase">
                            {page.badgeText}
                        </span>
                        <h1 className="text-6xl md:text-8xl font-display font-bold leading-none tracking-tighter">
                            {page.headlineLine1} <br />
                            <span className="text-[#74C63D]">{page.headlineLine2}</span>
                        </h1>
                        <p className="text-[#B8C0B8] text-xl leading-relaxed">{page.intro}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {page.features.map((f, i) => (
                            <div key={i} className="stagger-child reveal flex gap-4">
                                <div className="mt-1 text-[#74C63D]">{featureIcons[i] ?? featureIcons[0]}</div>
                                <div>
                                    <h4 className="font-bold mb-1">{f.title}</h4>
                                    <p className="text-sm text-[#7C857C]">{f.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="stagger-child reveal pt-4">
                        <a
                            href={getWhatsAppLink('Hi LOBO! I want to book a slot for your next tufting workshop.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 px-10 py-5 bg-[#74C63D] text-black font-bold rounded-2xl hover:bg-[#8DFF4A] transition-all group"
                        >
                            {page.ctaButtonText}{' '}
                            <ArrowRight
                                size={20}
                                className="group-hover:translate-x-2 transition-transform"
                            />
                        </a>
                    </div>
                </div>

                <div>
                    <VideoCard src={VIDEOS.reel5} title="Tufting Demo" category="Workshop Preview" />
                </div>
            </div>

            <div className="space-y-12">
                <h2 className="text-5xl md:text-7xl font-display font-bold text-center">
                    {page.gallerySectionTitle}{' '}
                    <span className="text-[#74C63D]">{page.gallerySectionTitleAccent}</span>
                </h2>
                <div ref={imagesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayGallery.map((item, idx) => (
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
