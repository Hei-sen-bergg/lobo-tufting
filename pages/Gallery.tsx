
import React, { useState } from 'react';
import { VIDEOS } from '../constants';
import { VideoCard } from '../components/VideoCard';
import { ImageCard } from '../components/ImageCard';
import { useStaggeredChildren, useScrollFadeIn } from '../components/animations/ScrollAnimations';
import { useSanityData } from '../src/sanity/hooks';
import { GALLERY_PAGE_QUERY, GALLERY_QUERY } from '../src/sanity/queries';
import type { GalleryItem } from '../src/sanity/types';
import { DEFAULT_GALLERY } from '../src/sanity/defaults/content';
import { withListDefaults } from '../src/sanity/merge';
import { withGalleryPageDefaults } from '../src/sanity/pageDefaults';

export const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const { data: pageData } = useSanityData(GALLERY_PAGE_QUERY);
    const { data: galleryData } = useSanityData<GalleryItem[]>(GALLERY_QUERY);
    const page = withGalleryPageDefaults(pageData);
    const allItems = withListDefaults(galleryData, DEFAULT_GALLERY, ['title', 'description', 'category']);

    const galleryRef = useStaggeredChildren({
        duration: 0.8,
        staggerDelay: 0.12,
        distance: 50,
        ease: 'power3.out',
    });

    const titleRef = useScrollFadeIn({ duration: 1.2, delay: 0, distance: 80 });

    const categories = ['all', 'Premium', 'Modern', 'Custom', 'Anime', 'Art'];

    const filteredGallery =
        filter === 'all' ? allItems : allItems.filter((item) => item.category === filter);

    const videoCards = [
        { id: 'v1', src: VIDEOS.reel1, title: 'Process', category: 'Behind the Scenes' },
        { id: 'v3', src: VIDEOS.reel3, title: 'Showcase', category: 'Portfolio' },
    ];

    return (
        <div ref={galleryRef} className="py-32 px-6 max-w-7xl mx-auto space-y-16">
            <div ref={titleRef} className="text-center space-y-4">
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">
                    {page.headlineLine1} <br />
                    <span className="text-[#74C63D]">{page.headlineLine2}</span>
                </h1>
                <p className="text-[#B8C0B8] text-xl max-w-2xl mx-auto">{page.subtitle}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full font-semibold transition-all text-sm md:text-base ${
                            filter === cat
                                ? 'bg-[#74C63D] text-black'
                                : 'bg-[#1C261C] text-[#B8C0B8] hover:border-[#74C63D]/50 border border-transparent'
                        }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
                {filteredGallery.map((item, idx) => (
                    <div key={item._id} className="stagger-child">
                        <ImageCard
                            src={item.imageUrl}
                            alt={item.title}
                            title={item.title}
                            category={item.category}
                            index={idx}
                        />
                    </div>
                ))}

                {filter === 'all' &&
                    videoCards.map((video, idx) => (
                        <div key={video.id} className="stagger-child">
                            <VideoCard
                                src={video.src}
                                title={video.title}
                                category={video.category}
                                index={filteredGallery.length + idx}
                            />
                        </div>
                    ))}
            </div>

            <div className="text-center pt-20 space-y-6">
                <p className="text-[#B8C0B8] text-lg">{page.bottomText}</p>
                <a
                    href="https://wa.me/919526276687?text=Hi%20LOBO!%20I%20want%20to%20recreate%20a%20rug%20similar%20to%20one%20in%20your%20gallery."
                    className="inline-block px-12 py-5 bg-[#74C63D] text-black font-bold rounded-2xl hover:bg-[#8DFF4A] transition-all"
                >
                    {page.bottomButtonText}
                </a>
            </div>
        </div>
    );
};
