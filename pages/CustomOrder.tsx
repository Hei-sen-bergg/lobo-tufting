
import React, { useState } from 'react';
import { Upload, HelpCircle, Send } from 'lucide-react';

export const CustomOrder = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    size: 'M',
    theme: '',
    colors: '',
    budget: '',
    deadline: '',
    location: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
        setSubmitted(true);
        window.scrollTo(0, 0);
    }, 1000);
  };

  if (submitted) {
      return (
          <div className="min-h-[70vh] flex items-center justify-center px-6">
              <div className="max-w-md text-center space-y-6">
                  <div className="w-20 h-20 bg-[#74C63D]/20 text-[#74C63D] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={40} />
                  </div>
                  <h1 className="text-4xl font-display font-bold">Request Received!</h1>
                  <p className="text-[#B8C0B8]">Thanks for reaching out! We've received your custom order request. Our team will contact you via WhatsApp within 24 hours to discuss the design and pricing.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-[#74C63D] text-black font-bold rounded-xl"
                  >
                      Back to Home
                  </button>
              </div>
          </div>
      )
  }

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter">Your Vision, <br /><span className="text-[#74C63D]">Tufted.</span></h1>
            <p className="text-[#B8C0B8] text-lg">Every custom rug is a collaboration. Tell us about your idea, and we'll craft it with precision and care.</p>
          </div>

          <div className="p-8 bg-[#0B0F0B] rounded-3xl border border-[#1C261C] space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                  <HelpCircle className="text-[#74C63D]" /> Pricing Guidelines
              </h3>
              <ul className="space-y-4">
                  <li className="flex justify-between items-center p-4 bg-black rounded-xl border border-[#1C261C]">
                      <div>
                          <p className="font-bold">Small (1x1 ft)</p>
                          <p className="text-xs text-[#7C857C]">Ideal for desk mats or wall decor</p>
                      </div>
                      <span className="text-[#74C63D] font-bold">₹1,200+</span>
                  </li>
                  <li className="flex justify-between items-center p-4 bg-black rounded-xl border border-[#1C261C]">
                      <div>
                          <p className="font-bold">Medium (2x2 ft)</p>
                          <p className="text-xs text-[#7C857C]">Best for logos and anime portraits</p>
                      </div>
                      <span className="text-[#74C63D] font-bold">₹3,500+</span>
                  </li>
                  <li className="flex justify-between items-center p-4 bg-black rounded-xl border border-[#1C261C]">
                      <div>
                          <p className="font-bold">Large (3x3 ft+)</p>
                          <p className="text-xs text-[#7C857C]">Premium statement pieces</p>
                      </div>
                      <span className="text-[#74C63D] font-bold">₹7,000+</span>
                  </li>
              </ul>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#0B0F0B] p-8 md:p-10 rounded-3xl border border-[#1C261C] space-y-8">
            <h2 className="text-2xl font-bold">Order Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#7C857C]">Name</label>
                    <input 
                        type="text" required
                        placeholder="Your full name"
                        className="w-full bg-black border border-[#1C261C] rounded-xl px-4 py-3 focus:outline-none focus:border-[#74C63D] transition-colors"
                        onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#7C857C]">WhatsApp Number</label>
                    <input 
                        type="tel" required
                        placeholder="+91 90..."
                        className="w-full bg-black border border-[#1C261C] rounded-xl px-4 py-3 focus:outline-none focus:border-[#74C63D] transition-colors"
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-[#7C857C]">Rug Size Preference</label>
                <div className="grid grid-cols-4 gap-4">
                    {['S', 'M', 'L', 'Custom'].map(s => (
                        <button
                            key={s}
                            type="button"
                            onClick={() => setFormData({...formData, size: s})}
                            className={`py-3 rounded-xl border font-bold transition-all ${
                                formData.size === s ? 'bg-[#74C63D] border-[#74C63D] text-black' : 'bg-black border-[#1C261C] text-[#7C857C] hover:border-[#74C63D]'
                            }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-[#7C857C]">Design / Theme Idea</label>
                <input 
                    type="text" required
                    placeholder="e.g. Naruto Uzumaki, Spotify Logo..."
                    className="w-full bg-black border border-[#1C261C] rounded-xl px-4 py-3 focus:outline-none focus:border-[#74C63D] transition-colors"
                    onChange={e => setFormData({...formData, theme: e.target.value})}
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-[#7C857C]">Upload Inspiration (Optional)</label>
                <div className="border-2 border-dashed border-[#1C261C] rounded-2xl p-8 flex flex-col items-center justify-center text-[#7C857C] hover:border-[#74C63D]/50 transition-colors cursor-pointer group">
                    <Upload size={32} className="mb-2 group-hover:text-[#74C63D]" />
                    <p className="text-sm">Click to upload image or drag & drop</p>
                    <p className="text-xs mt-1">PNG, JPG up to 10MB</p>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-[#7C857C]">Additional Notes</label>
                <textarea 
                    rows={4}
                    placeholder="Tell us more about colors, budget, or delivery deadlines..."
                    className="w-full bg-black border border-[#1C261C] rounded-xl px-4 py-3 focus:outline-none focus:border-[#74C63D] transition-colors resize-none"
                    onChange={e => setFormData({...formData, notes: e.target.value})}
                />
            </div>

            <button type="submit" className="w-full py-4 bg-[#74C63D] text-black font-bold rounded-xl hover:bg-[#8DFF4A] transition-all transform hover:-translate-y-1 active:translate-y-0">
                Submit Request
            </button>
        </form>
      </div>
    </div>
  );
};
