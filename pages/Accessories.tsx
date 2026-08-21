import React, { useEffect, useMemo, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import { useStaggeredChildren, useScrollFadeIn } from '../components/animations/ScrollAnimations';
import { GridSkeleton } from '../components/LoadingSkeleton';
import { ImageCard } from '../components/ImageCard';
import { useSanityData } from '../src/sanity/hooks';
import { ACCESSORIES_PAGE_QUERY, ACCESSORIES_QUERY } from '../src/sanity/queries';
import type { Accessory, AccessoriesPageCopy } from '../src/sanity/types';

export const Accessories = () => {
    const [filter, setFilter] = useState('all');
    const { data: pageData } = useSanityData<AccessoriesPageCopy>(ACCESSORIES_PAGE_QUERY);
    const { data: accessories, loading } = useSanityData<Accessory[]>(ACCESSORIES_QUERY);

    const items = accessories ?? [];

    const categories = useMemo(() => {
        const set = new Set<string>();
        items.forEach((i) => i.category && set.add(i.category));
        return ['all', ...Array.from(set)];
    }, [items]);

    const filteredItems = filter === 'all' ? items : items.filter((i) => i.category === filter);

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
    }, [filteredItems.length]);

    return (
        <div ref={gridRef} className="py-32 px-6 max-w-7xl mx-auto space-y-16">
            {/* Hero banner */}
            <div className="relative min-h-[40vh] flex items-center justify-center -mx-6 px-6 -mt-32 pt-32">
                {pageData?.heroImageUrl && (
                    <div
                        className="absolute inset-0 -z-10 opacity-40"
                        style={{
                            backgroundImage: `url('${pageData.heroImageUrl}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                )}
                <div ref={titleRef} className="text-center space-y-4">
                    <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">
                        {pageData?.headlineLine1} <br />
                        <span className="text-[#74C63D]">{pageData?.headlineLine2}</span>
                    </h1>
                    {pageData?.subtitle ? (
                        <p className="text-[#B8C0B8] text-xl max-w-2xl mx-auto">{pageData.subtitle}</p>
                    ) : null}
                </div>
            </div>

            {/* Category Filter */}
            {categories.length > 1 && (
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
            )}

            {loading && items.length === 0 ? (
                <GridSkeleton count={6} />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
                    {filteredItems.map((item, idx) => (
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
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {item.category ? (
                                                <p className="text-[#7C857C] text-xs font-bold uppercase tracking-widest">
                                                    {item.category}
                                                </p>
                                            ) : null}
                                            <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${item.inStock ? 'bg-[#74C63D]/10 text-[#74C63D]' : 'bg-red-500/10 text-red-400'}`}>
                                                {item.inStock ? 'In Stock' : 'Sold Out'}
                                            </span>
                                        </div>
                                        {item.description ? (
                                            <p className="text-[#B8C0B8] text-sm mt-1">{item.description}</p>
                                        ) : null}
                                    </div>
                                    {item.price != null ? (
                                        <span className="text-2xl font-bold text-[#74C63D] shrink-0">
                                            ₹{item.price}
                                        </span>
                                    ) : null}
                                </div>
                                <a
                                    href={getWhatsAppLink(
                                        `Hi LOBO! I'm interested in ${item.title} (₹${item.price}). Is it available?`
                                    )}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-full py-3 font-bold rounded-xl flex items-center justify-center gap-3 transition-all ${item.inStock ? 'bg-[#74C63D] text-black hover:bg-[#8DFF4A]' : 'bg-[#1C261C] text-[#7C857C] cursor-not-allowed'}`}
                                >
                                    <ShoppingCart size={20} /> {item.inStock ? 'Inquire Now' : 'Sold Out'}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {(pageData?.ctaTitle || pageData?.ctaDescription || pageData?.ctaButtonText) && (
                <div
                    ref={ctaRef}
                    className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-[#0B0F0B] to-black border border-[#1C261C] text-center space-y-6"
                >
                    {pageData?.ctaTitle ? (
                        <h2 className="text-3xl font-display font-bold">{pageData.ctaTitle}</h2>
                    ) : null}
                    {pageData?.ctaDescription ? (
                        <p className="text-[#7C857C]">{pageData.ctaDescription}</p>
                    ) : null}
                    {pageData?.ctaButtonText ? (
                        <a
                            href={getWhatsAppLink('Hi LOBO! I need help choosing tufting accessories.')}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-10 py-4 bg-[#74C63D] text-black font-bold rounded-xl hover:bg-[#8DFF4A] transition-all"
                        >
                            {pageData.ctaButtonText}
                        </a>
                    ) : null}
                </div>
            )}
        </div>
    );
};
