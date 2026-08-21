import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export interface QuickQuestion {
  label: string;
  message: string;
}

interface ChatLauncherProps {
  phoneNumber: string;
  questions?: QuickQuestion[];
}

const DEFAULT_QUESTIONS: QuickQuestion[] = [
  { label: 'Custom rug price?', message: "Hi LOBO! I'd like to know the price for a custom rug." },
  { label: 'Book a workshop', message: 'Hi LOBO! I want to book a slot for your next tufting workshop.' },
  { label: 'Accessories help', message: 'Hi LOBO! I need help choosing tufting accessories.' },
  { label: 'Track my order', message: "Hi LOBO! I'd like an update on my rug order." },
];

export const ChatLauncher: React.FC<ChatLauncherProps> = ({ phoneNumber, questions }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const quickQuestions = questions && questions.length > 0 ? questions : DEFAULT_QUESTIONS;

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div ref={panelRef} className="relative">
      {/* Quick-question panel */}
      {open && (
        <div className="absolute bottom-14 right-0 w-80 bg-[#0B0F0B] border border-[#1C261C] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#1C261C]">
            <div>
              <p className="text-white font-bold text-sm">Hi! How can we help?</p>
              <p className="text-[#7C857C] text-xs mt-0.5">We reply on WhatsApp</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-[#7C857C] hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
          <div className="p-3 space-y-2">
            {quickQuestions.map((q) => (
              <button
                key={q.label}
                onClick={() => openWhatsApp(q.message)}
                className="w-full text-left px-4 py-3 rounded-xl bg-[#0F140F] border border-[#1C261C] text-[#B8C0B8] text-sm hover:border-[#74C63D] hover:text-white transition-all"
              >
                {q.label}
              </button>
            ))}
            <button
              onClick={() =>
                openWhatsApp("Hi LOBO! I'd like to chat about a custom rug.")
              }
              className="w-full text-left px-4 py-3 rounded-xl bg-[#74C63D] text-black text-sm font-bold hover:bg-[#8DFF4A] transition-all"
            >
              Chat directly
            </button>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 bg-[#1C261C] rounded-xl flex items-center justify-center text-[#74C63D] hover:bg-[#74C63D] hover:text-black transition-all"
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
};
