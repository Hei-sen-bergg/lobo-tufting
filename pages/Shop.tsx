
import React, { useEffect, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import { getWhatsAppLink, VIDEOS } from '../constants';
import { gsap } from 'gsap';
import { useStaggeredChildren, useScrollFadeIn } from '../components/animations/ScrollAnimations';
import { ImageCard } from '../components/ImageCard';
import { VideoCard } from '../components/VideoCard';
import { useSanityData } from '../src/sanity/hooks';
import { PRODUCTS_QUERY } from '../src/sanity/queries';
import type { Product } from '../src/sanity/types';

export const Shop = () => {
    const { data: products } = useSanityData<Product[]>(PRODUCTS_QUERY);
    
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
        
        // Mark product cards as stagger children
        const cards = shopRef.current.querySelectorAll('.product-card');
        cards.forEach(card => {
            if (!card.classList.contains('stagger-child')) {
                card.classList.add('stagger-child');
            }
        });
    }, []);

    const displayProducts = products || [];

    return (
        <div ref={shopRef} className="py-32 px-6 max-w-7xl mx-auto space-y-16">
            <div ref={titleRef} className="text-center space-y-4">
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">Available <br /><span className="text-[#74C63D]">Masterpieces.</span></h1>
                <p className="text-[#B8C0B8] text-xl max-w-2xl mx-auto">Ready-to-ship rugs handcrafted with premium materials. Exclusive drops.</p>
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
                                    <p className="text-[#B8C0B8] text-sm mt-1">{product.description}</p>
                                </div>
                                <span className="text-2xl font-bold text-[#74C63D]">₹{product.price}</span>
                            </div>
                            <a 
                                href={getWhatsAppLink(`Hi LOBO! I'm interested in the ${product.title} rug for ₹${product.price}. Is it still available?`)}
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
            <div className="py-16 space-y-8">
                <h2 className="text-4xl md:text-6xl font-display font-bold text-center">Explore Our <span className="text-[#74C63D]">Studio</span></h2>
                <p className="text-[#7C857C] text-center text-lg max-w-2xl mx-auto">Inside our tufting studio - where creativity meets craftsmanship</p>
                <div className="flex justify-center">
                    <VideoCard 
                        src={VIDEOS.reel3} 
                        title="Studio Tour" 
                        category="Studio Highlights"
                    />
                </div>
            </div>

            <div ref={ctaRef} className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-[#0B0F0B] to-black border border-[#1C261C] text-center space-y-6">
                <h2 className="text-3xl font-display font-bold">Don't see what you're looking for?</h2>
                <p className="text-[#7C857C]">We specialize in one-of-a-kind custom orders tailored to your specifications.</p>
                <a 
                    href={getWhatsAppLink("Hi LOBO! I checked your shop but I'd like to request a unique custom rug design.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[#74C63D] font-bold hover:underline"
                >
                    Start a custom commission
                </a>
            </div>
        </div>
    );
};
