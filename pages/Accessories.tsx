
import React, { useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import { useStaggeredChildren, useScrollFadeIn } from '../components/animations/ScrollAnimations';
import { ImageCard } from '../components/ImageCard';
import { useSanityData } from '../src/sanity/hooks';
import { ACCESSORIES_PAGE_QUERY, ACCESSORIES_QUERY } from '../src/sanity/queries';
import type { Accessory } from '../src/sanity/types';
import { DEFAULT_ACCESSORIES } from '../src/sanity/defaults/content';
import { withListDefaults } from '../src/sanity/merge';
import { withAccessoriesPageDefaults } from '../src/sanity/pageDefaults';

export const Accessories = () => {
    const { data: pageData } = useSanityData(ACCESSORIES_PAGE_QUERY);
    const { data: accessories } = useSanityData<Accessory[]>(ACCESSORIES_QUERY);
    const page = withAccessoriesPageDefaults(pageData);
    const displayItems = withListDefaults(accessories, DEFAULT_ACCESSORIES, [
      'title',
      'description',
      'category',
    ]);

    const gridRef = useStaggeredChildren({
        duration: 0.8,
        staggerDelay: 0.12,
        distance: 50,
        ease: 'power3.out',
    });

    const titleRef = useScrollFadeIn({ duration: 1.2, delay: 0, distance: 80 });
    const ctaRef = useScrollFadeIn({ duration: 1, delay: 0, distance: 60 });

    useEffect(() => {
        if (!gridRef.current) return;
        gridRef.current.querySelectorAll('.accessory-card').forEach((card) => {
            card.classList.add('stagger-child');
        });
    }, [displayItems.length]);

    return (
        <div ref={gridRef} className="py-32 px-6 max-w-7xl mx-auto space-y-16">
            <div ref={titleRef} className="text-center space-y-4">
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">
                    {page.headlineLine1} <br />
                    <span className="text-[#74C63D]">{page.headlineLine2}</span>
                </h1>
                <p className="text-[#B8C0B8] text-xl max-w-2xl mx-auto">{page.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
                {displayItems.map((item, idx) => (
                    <div key={item._id} className="stagger-child accessory-card group">
                        <ImageCard
                            src={item.imageUrl}
                            alt={item.title}
                            title={item.title}
                            category={item.category}
                            index={idx}
                        />
                        <div className="p-6 space-y-4 bg-[#0B0F0B] rounded-b-3xl">
                            <div className="flex justify-between items-start gap-4">
                                <div>
                                    <p className="text-[#7C857C] text-xs font-bold uppercase tracking-widest">
                                        {item.category}
                                    </p>
                                    <p className="text-[#B8C0B8] text-sm mt-1">{item.description}</p>
                                </div>
                                <span className="text-2xl font-bold text-[#74C63D] shrink-0">
                                    ₹{item.price}
                                </span>
                            </div>
                            <a
                                href={getWhatsAppLink(
                                    `Hi LOBO! I'm interested in ${item.title} (₹${item.price}). Is it available?`
                                )}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-[#74C63D] text-black font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-[#8DFF4A] transition-all"
                            >
                                <ShoppingCart size={20} /> Inquire Now
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div
                ref={ctaRef}
                className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-[#0B0F0B] to-black border border-[#1C261C] text-center space-y-6"
            >
                <h2 className="text-3xl font-display font-bold">{page.ctaTitle}</h2>
                <p className="text-[#7C857C]">{page.ctaDescription}</p>
                <a
                    href={getWhatsAppLink('Hi LOBO! I need help choosing tufting accessories.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-[#74C63D] text-black font-bold rounded-xl hover:bg-[#8DFF4A] transition-all"
                >
                    {page.ctaButtonText}
                </a>
            </div>
        </div>
    );
};
