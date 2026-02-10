
import React, { useEffect, useRef } from 'react';
import { Clock, Users, Scissors, Coffee, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '../constants';
import { gsap } from 'gsap';

export const Workshop = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        const ctx = gsap.context(() => {
            gsap.from(".reveal", {
                opacity: 0,
                x: -30,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, sectionRef.current);
        return () => ctx.revert();
    }, []);

    const features = [
        { icon: <Clock />, title: "3-Hour Session", desc: "Intensive hands-on training from start to finish." },
        { icon: <Scissors />, title: "All Gear Provided", desc: "Tufting guns, frames, and premium wool included." },
        { icon: <Users />, title: "Small Groups", desc: "Maximum 6 people per session for personalized attention." },
        { icon: <Coffee />, title: "Refreshments", desc: "Snacks and Kerala's finest coffee to keep you fueled." },
    ];

    return (
        <div ref={sectionRef} className="py-32 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-10">
                    <div className="space-y-4">
                        <span className="reveal inline-block px-4 py-1 bg-[#74C63D] text-black text-xs font-black rounded-full uppercase">Workshops in Kerala</span>
                        <h1 className="reveal text-6xl md:text-8xl font-display font-bold leading-none tracking-tighter">Become the <br /><span className="text-[#74C63D]">Artisan.</span></h1>
                        <p className="reveal text-[#B8C0B8] text-xl leading-relaxed">
                            Ever wondered how those fluffy masterpieces are made? Join us in our Thoongalloor studio and learn the addictive art of tufting. 
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {features.map((f, i) => (
                            <div key={i} className="reveal flex gap-4">
                                <div className="mt-1 text-[#74C63D]">{f.icon}</div>
                                <div>
                                    <h4 className="font-bold mb-1">{f.title}</h4>
                                    <p className="text-sm text-[#7C857C]">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="reveal pt-4">
                        <a 
                            href={getWhatsAppLink("Hi LOBO! I want to book a slot for your next tufting workshop.")}
                            className="inline-flex items-center gap-4 px-10 py-5 bg-[#74C63D] text-black font-bold rounded-2xl hover:bg-[#8DFF4A] transition-all group"
                        >
                            Inquire for Next Slot <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </div>

                <div className="relative reveal">
                    <div className="absolute -inset-10 bg-[#74C63D]/5 blur-3xl -z-10 rounded-full"></div>
                    <div className="grid grid-cols-2 gap-4">
                        <img src="https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=400&auto=format&fit=crop" className="rounded-3xl w-full h-64 object-cover rotate-[-2deg]" alt="Workshop 1" />
                        <img src="https://images.unsplash.com/photo-1627318728515-58252f36079c?q=80&w=400&auto=format&fit=crop" className="rounded-3xl w-full h-80 object-cover mt-12 rotate-[3deg]" alt="Workshop 2" />
                        <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=400&auto=format&fit=crop" className="rounded-3xl w-full h-80 object-cover -mt-20 rotate-[-4deg]" alt="Workshop 3" />
                        <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=400&auto=format&fit=crop" className="rounded-3xl w-full h-64 object-cover mt-4 rotate-[1deg]" alt="Workshop 4" />
                    </div>
                </div>
            </div>
        </div>
    );
};
