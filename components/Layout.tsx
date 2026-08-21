import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Youtube, Twitter, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { useSanityData } from '../src/sanity/hooks';
import { SETTINGS_QUERY } from '../src/sanity/queries';
import type { Settings } from '../src/sanity/types';
import { ChatLauncher } from './ChatLauncher';

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  instagram: <Instagram size={20} />,
  facebook: <Facebook size={20} />,
  youtube: <Youtube size={20} />,
  twitter: <Twitter size={20} />,
  x: <Twitter size={20} />,
  whatsapp: <MessageCircle size={20} />,
};

const waLink = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

const Navbar = ({ settings }: { settings: Settings | null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const phone = settings?.phoneNumber?.trim();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/products' },
    { name: 'Accessories', path: '/accessories' },
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
          {phone ? (
            <a
              href={waLink(phone, 'Hi LOBO! I have an inquiry.')}
              className="px-6 py-2.5 bg-[#1C261C] text-[#74C63D] text-xs font-black uppercase rounded-full hover:bg-[#74C63D] hover:text-black transition-all"
            >
              Inquire
            </a>
          ) : null}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed left-0 right-0 top-[73px] z-[99] bg-black p-6 space-y-6 flex flex-col items-center justify-start pt-12 animate-in fade-in slide-in-from-top duration-300 w-full">
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
          {phone ? (
            <a
              href={waLink(phone, 'Hi LOBO! I have an inquiry.')}
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-[#74C63D] text-black font-black uppercase text-center rounded-2xl mt-6"
            >
              WhatsApp Us
            </a>
          ) : null}
        </div>
      )}
    </nav>
  );
};

const Footer = ({ settings }: { settings: Settings | null }) => {
  const socialLinks = settings?.socialLinks ?? [];

  return (
    <footer className="bg-[#0B0F0B] border-t border-[#1C261C] py-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="space-y-6">
          <div className="text-[#74C63D] font-display text-3xl font-bold tracking-tighter">
            LOBO <span className="text-white">TUFTING</span>
          </div>
          {settings?.siteDescription ? (
            <p className="text-[#7C857C] leading-relaxed">
              {settings.siteDescription}
            </p>
          ) : null}
        </div>

        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm text-[#7C857C] font-medium">
            <li><Link to="/products" className="hover:text-[#74C63D]">Shop</Link></li>
            <li><Link to="/accessories" className="hover:text-[#74C63D]">Accessories</Link></li>
            <li><Link to="/gallery" className="hover:text-[#74C63D]">Gallery</Link></li>
            <li><Link to="/workshops" className="hover:text-[#74C63D]">Workshops</Link></li>
            <li><Link to="/about" className="hover:text-[#74C63D]">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-8">Social</h4>
          <div className="flex gap-4 flex-wrap">
            {socialLinks.map((link, i) => {
              const platform = link.platform?.toLowerCase();
              return (
                <a
                  key={`${platform}-${i}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1C261C] rounded-xl flex items-center justify-center text-[#74C63D] hover:bg-[#74C63D] hover:text-black transition-all"
                  aria-label={link.platform}
                >
                  {SOCIAL_ICONS[platform] || <MessageCircle size={20} />}
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-white text-xs font-black uppercase tracking-widest mb-8">Studio</h4>
          <div className="space-y-3 text-[#7C857C] text-sm leading-relaxed">
            {settings?.address ? (
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#74C63D]" />
                <span className="whitespace-pre-line">{settings.address}</span>
              </p>
            ) : null}
            {settings?.contactEmail ? (
              <p className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-[#74C63D]" />
                <a href={`mailto:${settings.contactEmail}`} className="hover:text-[#74C63D]">{settings.contactEmail}</a>
              </p>
            ) : null}
            {settings?.phoneNumber ? (
              <p className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-[#74C63D]" />
                <span>+{settings.phoneNumber}</span>
              </p>
            ) : null}
            {settings?.hours ? (
              <p className="whitespace-pre-line">{settings.hours}</p>
            ) : null}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-[#1C261C] text-center text-[#7C857C] text-[10px] uppercase tracking-widest">
        © {new Date().getFullYear()} LOBO Tufting. Engineered for Aesthetics.
      </div>
    </footer>
  );
};

const FloatingActionButtons = ({ settings }: { settings: Settings | null }) => {
  const instagramUrl = settings?.socialLinks?.find(
    (l) => l.platform?.toLowerCase() === 'instagram'
  )?.url;
  const phone = settings?.phoneNumber?.trim();

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-center">
      {instagramUrl ? (
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-[#1C261C] rounded-xl flex items-center justify-center text-[#74C63D] hover:bg-[#74C63D] hover:text-black transition-all"
          aria-label="Follow on Instagram"
        >
          <Instagram size={20} />
        </a>
      ) : null}

      {phone ? (
        <ChatLauncher
          phoneNumber={phone}
          questions={settings?.chatQuickQuestions}
        />
      ) : null}
    </div>
  );
};

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const { data } = useSanityData<Settings>(SETTINGS_QUERY);

  const settings = data ?? null;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-[#74C63D] selection:text-black">
      <Navbar settings={settings} />
      <main className="flex-grow">{children}</main>
      <Footer settings={settings} />
      <FloatingActionButtons settings={settings} />
    </div>
  );
};
