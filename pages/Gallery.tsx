
import React, { useState } from 'react';
import { VIDEOS } from '../constants';
import { VideoCard } from '../components/VideoCard';
import { ImageCard } from '../components/ImageCard';
import { useStaggeredChildren, useScrollFadeIn } from '../components/animations/ScrollAnimations';
import { useSanityData } from '../src/sanity/hooks';
import { GALLERY_QUERY, GALLERY_PAGE_QUERY } from '../src/sanity/queries';
import type { GalleryItem, GalleryPageCopy } from '../src/sanity/types';

export const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const { data: galleryData, loading } = useSanityData<GalleryItem[]>(GALLERY_QUERY);
    const { data: galleryPageData } = useSanityData<GalleryPageCopy>(GALLERY_PAGE_QUERY);
    
    const galleryRef = useStaggeredChildren({
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

    const categories = ['all', 'Premium', 'Modern', 'Custom', 'Anime', 'Art'];
    
    const filteredGallery = filter === 'all' 
        ? (galleryData || [])
        : (galleryData || []).filter(item => item.category === filter);

    const videoCards = [
        { id: 'v1', src: VIDEOS.reel1, title: 'Process', category: 'Behind the Scenes' },
        // { id: 'v2', src: VIDEOS.reel2, title: 'Testimonials', category: 'Happy Clients' },
        { id: 'v3', src: VIDEOS.reel3, title: 'Showcase', category: 'Portfolio' },
    ];

    return (
        <div ref={galleryRef} className="py-32 px-6 max-w-7xl mx-auto space-y-16">
            <div ref={titleRef} className="text-center space-y-4">
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">{galleryPageData?.headlineLine1 || 'Tufted'} <br /><span className="text-[#74C63D]">{galleryPageData?.headlineLine2 || 'Archives.'}</span></h1>
                <p className="text-[#B8C0B8] text-xl max-w-2xl mx-auto">{galleryPageData?.subtitle || 'A curation of our past works, custom commissions, and creative experiments.'}</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3">
                {categories.map(cat => (
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

            {/* Gallery Grid with Videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
                {/* Images */}
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
                
                {/* Video Cards (show for 'all' filter only) */}
                {filter === 'all' && videoCards.map((video, idx) => (
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
                <p className="text-[#B8C0B8] text-lg">{galleryPageData?.bottomText || 'Want something similar for your space?'}</p>
                <a 
                    href="https://wa.me/919526276687?text=Hi%20LOBO!%20I%20want%20to%20recreate%20a%20rug%20similar%20to%20one%20in%20your%20gallery."
                    className="inline-block px-12 py-5 bg-[#74C63D] text-black font-bold rounded-2xl hover:bg-[#8DFF4A] transition-all"
                >
                    {galleryPageData?.bottomButtonText || 'Request a Recreation'}
                </a>
            </div>
        </div>
    );
};
