
import React, { useEffect, useRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import { MOCK_PRODUCTS, getWhatsAppLink } from '../constants';
import { gsap } from 'gsap';

export const Shop = () => {
    const shopRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!shopRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".product-card", {
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            });
        }, shopRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={shopRef} className="py-32 px-6 max-w-7xl mx-auto space-y-16">
            <div className="text-center space-y-4">
                <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter">Available <br /><span className="text-[#74C63D]">Masterpieces.</span></h1>
                <p className="text-[#B8C0B8] text-xl max-w-2xl mx-auto">Ready-to-ship rugs handcrafted with premium materials. Exclusive drops.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10">
                {MOCK_PRODUCTS.map(product => (
                    <div key={product.id} className="product-card group bg-[#0B0F0B] rounded-[2rem] border border-[#1C261C] overflow-hidden hover:border-[#74C63D]/40 transition-all">
                        <div className="aspect-square overflow-hidden relative">
                            <img 
                                src={product.images[0]} 
                                alt={product.name} 
                                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" 
                            />
                            <div className="absolute top-6 right-6 px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold text-[#74C63D] border border-[#74C63D]/20">
                                {product.size}
                            </div>
                        </div>
                        <div className="p-8 space-y-6">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold group-hover:text-[#74C63D] transition-colors">{product.name}</h3>
                                    <p className="text-[#7C857C] mt-1 uppercase tracking-widest text-xs font-bold">{product.category}</p>
                                </div>
                                <span className="text-2xl font-bold text-white">₹{product.price}</span>
                            </div>
                            <a 
                                href={getWhatsAppLink(`Hi LOBO! I'm interested in the ${product.name} rug for ₹${product.price}. Is it still available?`)}
                                className="w-full py-4 bg-[#1C261C] text-[#74C63D] font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-[#74C63D] hover:text-black transition-all"
                            >
                                <ShoppingCart size={20} /> Check Availability
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-[#0B0F0B] to-black border border-[#1C261C] text-center space-y-6">
                <h2 className="text-3xl font-display font-bold">Don't see what you're looking for?</h2>
                <p className="text-[#7C857C]">We specialize in one-of-a-kind custom orders tailored to your specifications.</p>
                <a 
                    href={getWhatsAppLink("Hi LOBO! I checked your shop but I'd like to request a unique custom rug design.")}
                    className="inline-block text-[#74C63D] font-bold hover:underline"
                >
                    Start a custom commission →
                </a>
            </div>
        </div>
    );
};
