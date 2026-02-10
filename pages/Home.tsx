
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, Palette, Users, ShieldCheck } from 'lucide-react';
import { MOCK_GALLERY, getWhatsAppLink } from '../constants';
import { gsap } from 'gsap';

const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".hero-title", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.2
            });
            gsap.from(".hero-sub", {
                opacity: 0,
                duration: 1.5,
                delay: 0.8,
                ease: "power2.out"
            });
            gsap.from(".hero-btn", {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                delay: 1.2,
                ease: "back.out(1.7)",
                stagger: 0.2
            });
        }, heroRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(116,198,61,0.1),_rgba(0,0,0,1))] -z-10"></div>
            
            <div className="max-w-5xl text-center space-y-8">
                <div className="hero-sub inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C261C] border border-[#74C63D]/20 text-[#74C63D] text-sm font-medium">
                    <Star size={14} fill="currentColor" /> Handcrafted with Precision in Kerala
                </div>
                <h1 className="hero-title text-6xl md:text-9xl font-display font-bold tracking-tighter leading-none text-white">
                    ART YOU CAN <br /> <span className="text-[#74C63D]">WALK ON.</span>
                </h1>
                <p className="hero-sub text-[#B8C0B8] text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
                    Premium custom-tufted rugs for your space. Anime, logos, or abstract art—we bring your floors to life.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a 
                        href={getWhatsAppLink("Hi LOBO! I want to inquire about a custom rug order.")} 
                        className="hero-btn w-full sm:w-auto px-10 py-5 bg-[#74C63D] text-black font-bold rounded-xl hover:bg-[#8DFF4A] transition-all"
                    >
                        Custom Inquiry
                    </a>
                    <Link to="/products" className="hero-btn w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-[#74C63D] text-[#74C63D] font-bold rounded-xl hover:bg-[#74C63D] hover:text-black transition-all">
                        Browse Collection
                    </Link>
                </div>
            </div>
        </div>
    );
};

const HowItWorks = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".step-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out"
            });
        }, sectionRef.current);
        return () => ctx.revert();
    }, []);

    const steps = [
        { icon: <Palette size={32} />, title: 'Conceptualize', desc: 'Share your design, favorite anime character, or logo via WhatsApp.' },
        { icon: <Users size={32} />, title: 'Consultation', desc: 'We help you select the perfect size, wool type, and vibrant color palette.' },
        { icon: <ShieldCheck size={32} />, title: 'Hand-Tufted', desc: 'Our artisans meticulously craft your rug, ensuring durability and detail.' },
    ];

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-[#0B0F0B]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">The LOBO Way</h2>
                    <p className="text-[#7C857C] text-lg">Bespoke craftsmanship from Kerala to your doorstep.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="step-card p-10 rounded-3xl bg-black border border-[#1C261C] hover:border-[#74C63D]/40 transition-all group">
                            <div className="w-20 h-20 rounded-2xl bg-[#0F140F] flex items-center justify-center text-[#74C63D] mb-8 group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-[#B8C0B8] leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Home = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <HowItWorks />
      
      {/* Visual Teaser */}
      <section className="py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                  <h2 className="text-5xl md:text-7xl font-display font-bold leading-none">Crafting <br /><span className="text-[#74C63D]">Soft Statments.</span></h2>
                  <p className="text-[#B8C0B8] text-xl leading-relaxed">
                      Every rug we create is more than just home decor; it's a piece of tactile art. Located in Thoongalloor, we pride ourselves on pushing the boundaries of tufting techniques.
                  </p>
                  <div className="flex gap-8 border-l-2 border-[#1C261C] pl-8">
                      <div>
                          <p className="text-3xl font-display font-bold text-[#74C63D]">200+</p>
                          <p className="text-sm text-[#7C857C]">Rugs Delivered</p>
                      </div>
                      <div>
                          <p className="text-3xl font-display font-bold text-[#74C63D]">100%</p>
                          <p className="text-sm text-[#7C857C]">Handmade</p>
                      </div>
                  </div>
              </div>
              <div className="relative group">
                  <div className="absolute -inset-4 bg-[#74C63D]/20 rounded-3xl blur-2xl group-hover:bg-[#74C63D]/30 transition-all"></div>
                  <img src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=800&auto=format&fit=crop" alt="Tufting Process" className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl" />
              </div>
          </div>
      </section>

      {/* Quick CTA */}
      <section className="py-24 px-6 bg-[#74C63D]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-black tracking-tighter">Ready to start your project?</h2>
              <a 
                href={getWhatsAppLink("Hi LOBO! I'm ready to discuss a custom rug design.")}
                className="inline-block px-12 py-5 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-transform"
              >
                  Let's Chat on WhatsApp
              </a>
          </div>
      </section>
    </div>
  );
};
