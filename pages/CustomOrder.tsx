import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { getWhatsAppLink, MOCK_GALLERY } from '../constants';
import { useScrollFadeIn, useStaggeredChildren } from '../components/animations/ScrollAnimations';
import { ImageCard } from '../components/ImageCard';

export const CustomOrder = () => {
    const titleRef = useScrollFadeIn({
        duration: 1.2,
        delay: 0,
        distance: 80
    });

    const galleryRef = useStaggeredChildren({
        duration: 0.8,
        staggerDelay: 0.12,
        distance: 50,
        ease: 'power3.out'
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        dimensions: '',
        color: '',
        pattern: '',
        budget: '',
        inspiration: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const message = `Hi LOBO! I'd like to create a custom rug.\n\nDetails:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDimensions: ${formData.dimensions}\nColor Preference: ${formData.color}\nPattern: ${formData.pattern}\nBudget: ${formData.budget}\nInspiration: ${formData.inspiration}`;
        
        window.location.href = getWhatsAppLink(message);
    };

    const inspirationImages = MOCK_GALLERY.slice(0, 9);

    return (
        <div className="py-32 px-6 max-w-7xl mx-auto">
            <div ref={titleRef} className="mb-20 space-y-4 max-w-3xl">
                <span className="inline-block px-4 py-1 bg-[#74C63D] text-black text-xs font-black rounded-full uppercase">Custom Orders</span>
                <h1 className="text-6xl md:text-8xl font-display font-bold leading-none tracking-tighter">
                    Bring Your <span className="text-[#74C63D]">Vision</span> to Life
                </h1>
                <p className="text-[#B8C0B8] text-xl leading-relaxed">
                    Have a specific design in mind? We'll work with you to create a one-of-a-kind tufted rug that matches your aesthetic perfectly.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Sticky Form - Left Side */}
                <div className="lg:col-span-1">
                    <div className="sticky top-32 space-y-8">
                        <div className="bg-[#0B0F0B] border border-[#222] rounded-3xl p-8 space-y-6">
                            <h2 className="text-2xl font-bold">Tell Us Your Story</h2>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-[#B8C0B8]">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 bg-[#1A1F1A] border border-[#333] rounded-xl text-white placeholder-[#666] focus:border-[#74C63D] focus:outline-none transition"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-[#B8C0B8]">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 bg-[#1A1F1A] border border-[#333] rounded-xl text-white placeholder-[#666] focus:border-[#74C63D] focus:outline-none transition"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-[#B8C0B8]">Phone (WhatsApp)</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 bg-[#1A1F1A] border border-[#333] rounded-xl text-white placeholder-[#666] focus:border-[#74C63D] focus:outline-none transition"
                                        required
                                    />
                                </div>

                                {/* Dimensions */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-[#B8C0B8]">Rug Dimensions</label>
                                    <input
                                        type="text"
                                        name="dimensions"
                                        value={formData.dimensions}
                                        onChange={handleChange}
                                        placeholder="e.g., 4ft x 6ft"
                                        className="w-full px-4 py-3 bg-[#1A1F1A] border border-[#333] rounded-xl text-white placeholder-[#666] focus:border-[#74C63D] focus:outline-none transition"
                                    />
                                </div>

                                {/* Color */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-[#B8C0B8]">Color Preference</label>
                                    <select
                                        name="color"
                                        value={formData.color}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1A1F1A] border border-[#333] rounded-xl text-white focus:border-[#74C63D] focus:outline-none transition"
                                    >
                                        <option value="">Choose a color...</option>
                                        <option value="Pastels">Pastels</option>
                                        <option value="Vibrant">Vibrant</option>
                                        <option value="Neutral">Neutral/Earth Tones</option>
                                        <option value="Bold">Bold & Dark</option>
                                        <option value="Custom">Custom Mix</option>
                                    </select>
                                </div>

                                {/* Pattern */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-[#B8C0B8]">Pattern Style</label>
                                    <select
                                        name="pattern"
                                        value={formData.pattern}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1A1F1A] border border-[#333] rounded-xl text-white focus:border-[#74C63D] focus:outline-none transition"
                                    >
                                        <option value="">Choose a style...</option>
                                        <option value="Abstract">Abstract</option>
                                        <option value="Geometric">Geometric</option>
                                        <option value="Anime">Anime/Character</option>
                                        <option value="Portrait">Portrait/Art</option>
                                        <option value="Floral">Floral</option>
                                        <option value="Text">Text/Typography</option>
                                        <option value="Custom">Custom Design</option>
                                    </select>
                                </div>

                                {/* Budget */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-[#B8C0B8]">Budget Range</label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-[#1A1F1A] border border-[#333] rounded-xl text-white focus:border-[#74C63D] focus:outline-none transition"
                                    >
                                        <option value="">Select budget...</option>
                                        <option value="10k-20k">₹10,000 - ₹20,000</option>
                                        <option value="20k-40k">₹20,000 - ₹40,000</option>
                                        <option value="40k-60k">₹40,000 - ₹60,000</option>
                                        <option value="60k+">₹60,000+</option>
                                    </select>
                                </div>

                                {/* Inspiration */}
                                <div>
                                    <label className="block text-sm font-medium mb-2 text-[#B8C0B8]">Additional Notes</label>
                                    <textarea
                                        name="inspiration"
                                        value={formData.inspiration}
                                        onChange={handleChange}
                                        placeholder="Describe your vision, or mention if you're inspired by any of the designs on the right..."
                                        rows={3}
                                        className="w-full px-4 py-3 bg-[#1A1F1A] border border-[#333] rounded-xl text-white placeholder-[#666] focus:border-[#74C63D] focus:outline-none transition resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#74C63D] text-black font-bold rounded-xl hover:bg-[#8DFF4A] transition-all group"
                                >
                                    <Send size={18} />
                                    Send via WhatsApp
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-xs text-[#666] text-center">
                                    We'll get back to you within 24 hours with a custom quote.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Inspiration Gallery - Right Side */}
                <div className="lg:col-span-2">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Get <span className="text-[#74C63D]">Inspired</span></h2>
                            <p className="text-[#B8C0B8]">Browse our portfolio to see design possibilities and styles we've created.</p>
                        </div>

                        <div ref={galleryRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {inspirationImages.map((item, idx) => (
                                <ImageCard
                                    key={item.id}
                                    src={item.imageUrl}
                                    alt={item.title}
                                    title={item.title}
                                    category={item.category}
                                    index={idx}
                                />
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-[#74C63D]/10 to-transparent border border-[#74C63D]/30 rounded-2xl p-8 space-y-4">
                            <h3 className="font-bold text-lg">Why Custom Rugs?</h3>
                            <ul className="space-y-2 text-[#B8C0B8]">
                                <li className="flex gap-3">
                                    <span className="text-[#74C63D] font-bold">→</span>
                                    <span>Completely personalized to your space and style</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#74C63D] font-bold">→</span>
                                    <span>Handcrafted by expert tufters with premium materials</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#74C63D] font-bold">→</span>
                                    <span>Flexible dimensions and unlimited design possibilities</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#74C63D] font-bold">→</span>
                                    <span>Direct collaboration with our design team</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="mt-32 pt-32 border-t border-[#222]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    {[
                        { step: "01", title: "Fill the Form", desc: "Tell us about your vision and preferences." },
                        { step: "02", title: "Get a Quote", desc: "We'll send you a custom price estimate." },
                        { step: "03", title: "Design Approval", desc: "We create mockups for your review." },
                        { step: "04", title: "Tufting Begins", desc: "Handcrafted with premium materials & care." }
                    ].map((item, i) => (
                        <div key={i} className="space-y-4">
                            <div className="text-[#74C63D] text-5xl font-black">{item.step}</div>
                            <h4 className="font-bold text-lg">{item.title}</h4>
                            <p className="text-[#7C857C] text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
