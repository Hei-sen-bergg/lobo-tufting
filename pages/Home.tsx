
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Users, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import { gsap } from 'gsap';
import { useParallaxEffect, useScrollFadeIn } from '../components/animations/ScrollAnimations';
import { useSanityData } from '../src/sanity/hooks';
import { HOME_PAGE_QUERY } from '../src/sanity/queries';
import type { HomePage } from '../src/sanity/types';
import { withHomeDefaults } from '../src/sanity/homeDefaults';

const stepIcons = [
  <Palette size={32} key="palette" />,
  <Users size={32} key="users" />,
  <ShieldCheck size={32} key="shield" />,
];

const Hero = ({ home }: { home: HomePage }) => {
    const heroRef = useRef<HTMLDivElement>(null);
    const heroImageRef = useParallaxEffect(0.5);

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
            <div 
                ref={heroImageRef}
                className="absolute inset-0 -z-20 opacity-40"
                style={{
                    backgroundImage: `url('${home.imageUrl}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(116,198,61,0.1),_rgba(0,0,0,1))] -z-10"></div>
            
            <div className="max-w-5xl text-center space-y-8">
                <div className="hero-sub inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1C261C] border border-[#74C63D]/20 text-[#74C63D] text-sm font-medium">
                   {home.badgeText}
                </div>
                <h1 className="hero-title text-6xl md:text-9xl font-display font-bold tracking-tighter leading-none text-white">
                    {home.headlineLine1} <br /> <span className="text-[#74C63D]">{home.headlineLine2}</span>
                </h1>
                <p className="hero-sub text-[#B8C0B8] text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed">
                    {home.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a 
                        href={getWhatsAppLink("Hi LOBO! I want to inquire about a custom rug order.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-btn w-full sm:w-auto px-10 py-5 bg-[#74C63D] text-black font-bold rounded-xl hover:bg-[#8DFF4A] transition-all"
                    >
                        {home.primaryButtonText}
                    </a>
                    <Link to="/products" className="hero-btn w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-[#74C63D] text-[#74C63D] font-bold rounded-xl hover:bg-[#74C63D] hover:text-black transition-all">
                        {home.secondaryButtonText}
                    </Link>
                </div>
            </div>
        </div>
    );
};

const HowItWorks = ({ home }: { home: HomePage }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const steps = home.steps ?? [];

    useEffect(() => {
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
            gsap.set(".step-card", {
                y: 60,
                opacity: 0
            });

            gsap.to(".step-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.3,
                ease: "power3.out"
            });
        }, sectionRef.current);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-[#0B0F0B]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">{home.howItWorksTitle}</h2>
                    <p className="text-[#7C857C] text-lg">{home.howItWorksSubtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="step-card p-10 rounded-3xl bg-black border border-[#1C261C] hover:border-[#74C63D]/40 transition-all group">
                            <div className="w-20 h-20 rounded-2xl bg-[#0F140F] flex items-center justify-center text-[#74C63D] mb-8 group-hover:scale-110 transition-transform">
                                {stepIcons[idx] ?? stepIcons[0]}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-[#B8C0B8] leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export const Home = () => {
  const { data: homeData } = useSanityData<HomePage>(HOME_PAGE_QUERY);
  const home = withHomeDefaults(homeData);

  const teaserTitleRef = useScrollFadeIn({
    duration: 1,
    delay: 0,
    distance: 60
  });

  const teaserImageRef = useScrollFadeIn({
    duration: 1.2,
    delay: 0.2,
    distance: 80
  });

  return (
    <div className="space-y-0">
      <Hero home={home} />
      <HowItWorks home={home} />
      
      <section className="py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div ref={teaserTitleRef} className="space-y-8">
                  <h2 className="text-5xl md:text-7xl font-display font-bold leading-none">
                    {home.teaserLine1} <br /><span className="text-[#74C63D]">{home.teaserLine2}</span>
                  </h2>
                  <p className="text-[#B8C0B8] text-xl leading-relaxed">
                      {home.teaserDescription}
                  </p>
                  <div className="flex gap-8 border-l-2 border-[#1C261C] pl-8">
                      <div>
                          <p className="text-3xl font-display font-bold text-[#74C63D]">{home.stat1Value}</p>
                          <p className="text-sm text-[#7C857C]">{home.stat1Label}</p>
                      </div>
                      <div>
                          <p className="text-3xl font-display font-bold text-[#74C63D]">{home.stat2Value}</p>
                          <p className="text-sm text-[#7C857C]">{home.stat2Label}</p>
                      </div>
                  </div>
              </div>
              <div ref={teaserImageRef} className="relative group">
                  <div className="absolute -inset-4 bg-[#74C63D]/20 rounded-3xl blur-2xl group-hover:bg-[#74C63D]/30 transition-all"></div>
                  <img 
                    src="/lobo_tufting_/lobo_tufting__1688196492_3137142016581358514_47333694357.webp" 
                    alt="Tufting Process" 
                    className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover transition-all duration-700 group-hover:shadow-xl group-hover:scale-105" 
                    loading="lazy"
                  />
              </div>
          </div>
      </section>

      <section className="py-24 px-6 bg-[#74C63D]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-6xl font-display font-bold text-black tracking-tighter">{home.ctaTitle}</h2>
              <a 
                href={getWhatsAppLink("Hi LOBO! I'm ready to discuss a custom rug design.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-black text-white font-bold rounded-2xl hover:scale-105 transition-transform"
              >
                  {home.ctaButtonText}
              </a>
          </div>
      </section>
    </div>
  );
};
