import React, { useEffect, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import { getWhatsAppLink, VIDEOS } from '../constants';
import { gsap } from 'gsap';
import { useStaggeredChildren, useScrollFadeIn } from '../components/animations/ScrollAnimations';
import { PageSkeleton } from '../components/LoadingSkeleton';
import { ImageCard } from '../components/ImageCard';
import { VideoCard } from '../components/VideoCard';
import { useSanityData } from '../src/sanity/hooks';
import { PRODUCTS_QUERY, SHOP_PAGE_QUERY } from '../src/sanity/queries';
import type { Product, ShopPageCopy } from '../src/sanity/types';

export const Shop = () => {
    const { data: products, loading: productsLoading } = useSanityData<Product[]>(PRODUCTS_QUERY);
    const { data: shopPageData, loading: pageLoading } = useSanityData<ShopPageCopy>(SHOP_PAGE_QUERY);

    const shopRef = useStaggeredChildren({
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

    const ctaRef = useScrollFadeIn({
        duration: 1,
        delay: 0,
        distance: 60
    });

    useEffect(() => {
        if (!shopRef.current) return;
        const cards = shopRef.current.querySelectorAll('.product-card');
        cards.forEach(card => {
            if (!card.classList.contains('stagger-child')) {
                card.classList.add('stagger-child');
            }
        });
    }, []);

    if (productsLoading || pageLoading) {
        return <PageSkeleton />;
    }

    const displayProducts = products ?? [];
    const videoSrc = shopPageData?.videoUrl || VIDEOS.reel3;

    return (
        <div ref={shopRef} className="py-32 px-6 max-w-7xl mx-auto space-y-16">
            {/* Hero banner */}
            <div className="relative min-h-[40vh] flex items-center justify-center -mx-6 px-6 -mt-32 pt-32">
                {shopPageData?.heroImageUrl && (
                    <div
                        className="absolute inset-0 -z-10 opacity-40"
                        style={{
                            backgroundImage: `url('${shopPageData.heroImageUrl}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                )}
                <div ref={titleRef} className="text-center space-y-4">
                    <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">{shopPageData?.headlineLine1} <br /><span className="text-[#74C63D]">{shopPageData?.headlineLine2}</span></h1>
                    {shopPageData?.subtitle ? (
                        <p className="text-[#B8C0B8] text-xl max-w-2xl mx-auto">{shopPageData.subtitle}</p>
                    ) : null}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
                {displayProducts.map((product, idx) => (
                    <div key={product._id} className="stagger-child product-card group">
                        <ImageCard
                            src={product.imageUrl}
                            alt={product.title}
                            title={product.title}
                            category={product.category}
                            index={idx}
                        />
                        <div className="p-6 space-y-4 bg-[#0B0F0B] rounded-b-3xl">
                            <div className="flex justify-between items-start">
                                <div>
                                    <p className="text-[#7C857C] text-xs font-bold uppercase tracking-widest">{product.category}</p>
                                    {product.description ? (
                                        <p className="text-[#B8C0B8] text-sm mt-1">{product.description}</p>
                                    ) : null}
                                </div>
                                {product.price != null ? (
                                    <span className="text-2xl font-bold text-[#74C63D]">₹{product.price}</span>
                                ) : null}
                            </div>
                            <a
                                href={getWhatsAppLink(`Hi LOBO! I'm interested in the ${product.title} rug. Is it still available?`)}
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

            {/* Video Demo Section */}
            {(shopPageData?.videoSectionTitle || shopPageData?.videoSectionTitleAccent) && (
                <div className="py-16 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-center">{shopPageData?.videoSectionTitle} <span className="text-[#74C63D]">{shopPageData?.videoSectionTitleAccent}</span></h2>
                    {shopPageData?.videoSectionSubtitle ? (
                        <p className="text-[#7C857C] text-center text-lg max-w-2xl mx-auto">{shopPageData.videoSectionSubtitle}</p>
                    ) : null}
                    <div className="flex justify-center">
                        <VideoCard
                            src={videoSrc}
                            title="Studio Tour"
                            category="Studio Highlights"
                        />
                    </div>
                </div>
            )}

            {(shopPageData?.ctaTitle || shopPageData?.ctaDescription || shopPageData?.ctaLinkText) && (
                <div ref={ctaRef} className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-[#0B0F0B] to-black border border-[#1C261C] text-center space-y-6">
                    {shopPageData?.ctaTitle ? (
                        <h2 className="text-3xl font-display font-bold">{shopPageData.ctaTitle}</h2>
                    ) : null}
                    {shopPageData?.ctaDescription ? (
                        <p className="text-[#7C857C]">{shopPageData.ctaDescription}</p>
                    ) : null}
                    {shopPageData?.ctaLinkText ? (
                        <a
                            href={getWhatsAppLink("Hi LOBO! I checked your shop but I'd like to request a unique custom rug design.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-[#74C63D] font-bold hover:underline"
                        >
                            {shopPageData.ctaLinkText}
                        </a>
                    ) : null}
                </div>
            )}
        </div>
    );
};
