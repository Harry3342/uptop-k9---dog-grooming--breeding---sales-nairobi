import React, { useState } from 'react';
import { 
  Phone, Menu, X, CalendarCheck, Sun, Moon, Sparkles
} from 'lucide-react';
import { KENNEL_CONTACT } from '../data/kennelData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  currency: 'KES' | 'USD';
  onToggleCurrency: () => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  currency,
  onToggleCurrency,
  isDarkMode,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Organized, well-structured navigation tags (no duplicate 'Book a Session' link since it's the primary CTA)
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'breeds', label: 'Breeds' },
    { id: 'merch', label: 'Shop Merch', badge: 'NEW' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 dark:bg-[#141812]/95 backdrop-blur-md border-b border-[#E3ECD5] dark:border-[#2C3824] shadow-xs transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-20 py-2 gap-3">
          
          {/* 1. Left: Brand Emblem & Name */}
          <div 
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-11 h-11 rounded-full shadow-sm relative overflow-hidden group-hover:scale-105 transition-transform shrink-0 border border-black/10 dark:border-white/10 bg-[#1A1A1A]">
              <img
                src="/assets/uptop_k9_logo.png"
                alt="Uptop K9 Emblem"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#1F2937] dark:text-white block leading-none">
                Uptop K9
              </span>
            </div>
          </div>

          {/* 2. Center: Clean, Organized Navigation Tags in a Unified Floating Pill Bar (Optimized for Tablets md+ and Desktop) */}
          <nav className="hidden xl:flex items-center gap-0.5 bg-[#F5F8F0] dark:bg-[#1A2016] px-2 py-1.5 rounded-full border border-[#E3ECD5] dark:border-[#2C3824] shadow-2xs">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-2.5 py-1.5 rounded-full text-xs font-semibold transition-all flex items-center gap-1 cursor-pointer active:scale-95 ${
                    isActive
                      ? 'bg-[#76A035] text-white shadow-xs font-bold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/80 dark:hover:bg-[#25301E]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && !isActive && (
                    <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-extrabold px-1.5 py-0.2 rounded-full uppercase tracking-wider hidden sm:inline">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. Right: Clean Action Controls (Currency, Theme, Primary CTA) */}
          <div className="hidden xl:flex items-center gap-2 shrink-0">
            {/* Segmented Currency Switcher */}
            <div className="flex items-center bg-[#F5F8F0] dark:bg-[#1A2016] p-0.5 rounded-full border border-[#E3ECD5] dark:border-[#2C3824] text-[11px] font-bold">
              <button
                type="button"
                onClick={() => currency !== 'KES' && onToggleCurrency()}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  currency === 'KES'
                    ? 'bg-white dark:bg-[#2C3824] text-[#5B8226] dark:text-[#9EC468] shadow-xs'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                KES
              </button>
              <button
                type="button"
                onClick={() => currency !== 'USD' && onToggleCurrency()}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-white dark:bg-[#2C3824] text-[#5B8226] dark:text-[#9EC468] shadow-xs'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                USD
              </button>
            </div>

            {/* Icon Theme Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="w-9 h-9 rounded-full border border-[#E3ECD5] dark:border-[#2C3824] bg-[#F5F8F0] dark:bg-[#1A2016] text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-[#25301E] flex items-center justify-center transition-all cursor-pointer shadow-2xs active:scale-95"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-gray-700" />}
            </button>

            {/* Primary Book Now CTA */}
            <button
              type="button"
              onClick={() => handleLinkClick('booking')}
              className="px-4 py-2 rounded-full bg-[#76A035] hover:bg-[#63892B] text-white font-bold text-xs shadow-xs flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </button>
          </div>

          {/* 4. Mobile Controls & Hamburger Menu (Shown only on small mobile < md) */}
          <div className="xl:hidden flex items-center gap-1.5 shrink-0">
            {/* Mobile Currency */}
            <button
              type="button"
              onClick={onToggleCurrency}
              className="px-2.5 py-1 rounded-full border border-[#E3ECD5] dark:border-[#2C3824] bg-[#F5F8F0] dark:bg-[#1A2016] text-xs font-bold text-[#5B8226] dark:text-[#9EC468]"
            >
              {currency}
            </button>

            {/* Mobile Theme Toggle */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="w-8 h-8 rounded-full border border-[#E3ECD5] dark:border-[#2C3824] bg-[#F5F8F0] dark:bg-[#1A2016] text-gray-700 dark:text-gray-200 flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-gray-700" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-[#E3ECD5] dark:border-[#2C3824] text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-[#1A2016] cursor-pointer"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Only under md: breakpoint) */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-[#E3ECD5] dark:border-[#2C3824] bg-white dark:bg-[#141812] px-4 pt-3 pb-6 shadow-xl animate-fadeIn space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-800">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Navigation Menu</span>
            <span className="text-[10px] uppercase font-bold text-[#76A035] bg-[#F2F7EA] dark:bg-[#1A2016] px-2 py-0.5 rounded-full">
              Nasra Gardens Estate, Nairobi
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className={`w-full text-left py-2 px-3 rounded-xl text-sm font-semibold flex items-center justify-between cursor-pointer ${
                  currentPage === link.id
                    ? 'bg-[#76A035] text-white font-bold'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#1E2519]'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    currentPage === link.id
                      ? 'bg-white/20 text-white'
                      : 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300'
                  }`}>
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => handleLinkClick('booking')}
              className="w-full py-2.5 rounded-full bg-[#76A035] hover:bg-[#63892B] text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book a Session</span>
            </button>
            <a
              href={`tel:${KENNEL_CONTACT.phone}`}
              className="w-full py-2.5 rounded-full border border-gray-200 dark:border-gray-700 text-center text-xs font-bold text-gray-800 dark:text-gray-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#76A035]" />
              <span>Call Kennel: {KENNEL_CONTACT.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
