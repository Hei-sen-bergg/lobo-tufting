
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, MessageCircle } from 'lucide-react';
import { COLORS, WHATSAPP_NUMBER } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-xl border-b border-[#1C261C] py-5 px-6 z-[100]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-[#74C63D] font-display text-2xl font-bold tracking-tighter flex items-center gap-3">
           <img src="/lobo_tufting_/logo-main.png" alt="LOBO Tufting logo" className="w-8 h-8 rounded-lg object-cover" />
          LOBO <span className="text-white">TUFTING</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs uppercase tracking-widest font-bold transition-colors hover:text-[#74C63D] ${
                location.pathname === link.path ? 'text-[#74C63D]' : 'text-[#7C857C]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="px-6 py-2.5 bg-[#1C261C] text-[#74C63D] text-xs font-black uppercase rounded-full hover:bg-[#74C63D] hover:text-black transition-all"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-black p-6 space-y-6 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-4xl font-display font-bold text-white hover:text-[#74C63D]"
            >
              {link.name}
            </Link>
          ))}
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-[#74C63D] text-black font-black uppercase rounded-2xl"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0B0F0B] border-t border-[#1C261C] py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <div className="text-[#74C63D] font-display text-3xl font-bold tracking-tighter">
            LOBO <span className="text-white">TUFTING</span>
          </div>
          <p className="text-[#7C857C] leading-relaxed">
            Crafting premium handmade rugs that transform spaces into experiences. Based in Kodungallur, Kerala.
          </p>
        </div>

        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm text-[#7C857C] font-medium">
            <li><Link to="/products" className="hover:text-[#74C63D]">Showcase</Link></li>
            <li><Link to="/gallery" className="hover:text-[#74C63D]">Gallery</Link></li>
            <li><Link to="/workshops" className="hover:text-[#74C63D]">Workshops</Link></li>
            <li><Link to="/about" className="hover:text-[#74C63D]">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-8">Social</h4>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/lobo_tufting_/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1C261C] rounded-xl flex items-center justify-center text-[#74C63D] hover:bg-[#74C63D] hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            {/* <a href="#" className="w-10 h-10 bg-[#1C261C] rounded-xl flex items-center justify-center text-[#74C63D] hover:bg-[#74C63D] hover:text-black transition-all">
              <Twitter size={20} />
            </a> */}
          </div>
        </div>

        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-8">Studio</h4>
          <p className="text-[#7C857C] text-sm leading-relaxed">
            Kodungallur, Kerala, India<br />
            PIN: 680667<br />
            hello@lobotufting.com
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-[#1C261C] text-center text-[#7C857C] text-[10px] uppercase tracking-widest">
        © {new Date().getFullYear()} LOBO Tufting. Engineered for Aesthetics.
      </div>
    </footer>
  );
};

const FloatingActionButtons = () => {
    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-center">
            {/* Instagram Button */}
            <a 
                href="https://www.instagram.com/lobo_tufting_/"
                target="_blank"
                rel="noopener noreferrer"
className="w-10 h-10 bg-[#1C261C] rounded-xl flex items-center justify-center text-[#74C63D] hover:bg-[#74C63D] hover:text-black transition-all"                aria-label="Follow on Instagram"
            >
                <Instagram size={32} fill="" />
            </a>

             {/* <a href="#" className="w-10 h-10 bg-[#1C261C] rounded-xl flex items-center justify-center text-[#74C63D] hover:bg-[#74C63D] hover:text-black transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-[#1C261C] rounded-xl flex items-center justify-center text-[#74C63D] hover:bg-[#74C63D] hover:text-black transition-all">
              <Twitter size={20} />
            </a> */}


            {/* WhatsApp Button */}
            <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#1C261C] rounded-xl flex items-center justify-center text-[#74C63D] hover:bg-[#74C63D] hover:text-black transition-all"
                aria-label="Contact on WhatsApp"
            >
                <MessageCircle size={32} fill="" />
            </a>
        </div>
    )
}

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#74C63D] selection:text-black">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingActionButtons />
    </div>
  );
};
