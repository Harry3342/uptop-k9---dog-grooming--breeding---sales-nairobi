import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import { KENNEL_CONTACT } from '../data/kennelData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#76A035] text-white pt-14 pb-8 border-t border-[#658B2C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/20">
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full shadow-lg relative overflow-hidden shrink-0 border-2 border-white/20 bg-[#1A1A1A]">
                <img
                  src="/assets/uptop_k9_logo.png"
                  alt="Uptop K9 Emblem"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tight text-white leading-none">
                  Uptop K9
                </h3>
                <span className="text-[11px] font-bold text-white/80 tracking-wider uppercase">
                  Nasra Gardens Estate, Nairobi
                </span>
              </div>
            </div>

            <p className="text-xs text-white/90 leading-relaxed max-w-md">
              {KENNEL_CONTACT.subtagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {/* TikTok */}
              <a
                href={`https://www.tiktok.com/@${KENNEL_CONTACT.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.32V8.71a8.33 8.33 0 0 0 4.91 1.59v-3.61a4.92 4.92 0 0 1-1-.01Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href={`https://www.instagram.com/${KENNEL_CONTACT.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${KENNEL_CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={() => onNavigate('breeds')}
                  className="hover:underline hover:text-white/90 text-left cursor-pointer"
                >
                  Shop All Dogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('breeds')}
                  className="hover:underline hover:text-white/90 text-left cursor-pointer"
                >
                  Available Puppies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('merch')}
                  className="hover:underline hover:text-white/90 text-left cursor-pointer flex items-center gap-1.5"
                >
                  <span>Shop Uptop K9 Merch</span>
                  <span className="text-[9px] bg-white text-[#76A035] font-black px-1.5 py-0.2 rounded-full">
                    NEW
                  </span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:underline hover:text-white/90 text-left cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:underline hover:text-white/90 text-left cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:underline hover:text-white/90 text-left cursor-pointer"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('booking')}
                  className="hover:underline hover:text-white/90 text-left cursor-pointer"
                >
                  Book Grooming or Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">
              Get in touch
            </h4>
            <div className="space-y-3 text-xs">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <a href={`tel:${KENNEL_CONTACT.phone}`} className="font-bold text-white text-sm hover:underline">
                    {KENNEL_CONTACT.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <a href={`mailto:${KENNEL_CONTACT.email}`} className="font-medium text-white hover:underline">
                    {KENNEL_CONTACT.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-white block">
                    {KENNEL_CONTACT.location}
                  </span>
                  <span className="text-[11px] text-white/80">{KENNEL_CONTACT.fullAddress}</span>
                </div>
              </div>

              <div className="pt-2 text-xs font-bold">
                M-PESA Buy Goods Till: {KENNEL_CONTACT.mpesaTill}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-white/80 gap-3">
          <p>© {new Date().getFullYear()} Uptop K9 Kennels. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <span>Nasra Gardens Estate, Nairobi, Kenya</span>
            <span>•</span>
            <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-policy', { detail: 'privacy' }))} className="hover:underline">Privacy</button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-policy', { detail: 'terms' }))} className="hover:underline">Terms</button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-policy', { detail: 'refunds' }))} className="hover:underline">Refunds</button>
            <button onClick={() => window.dispatchEvent(new CustomEvent('navigate-policy', { detail: 'cookies' }))} className="hover:underline">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
