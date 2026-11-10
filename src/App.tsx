/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BreedsPage } from './pages/BreedsPage';
import { MerchPage } from './pages/MerchPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { BookingPage } from './pages/BookingPage';
import { ContactPage } from './pages/ContactPage';
import { PolicyPage, PolicyType } from './pages/PolicyPage';
import { CookieBanner } from './components/CookieBanner';
import { Breed, Puppy } from './types';
import { BREEDS_DATA } from './data/kennelData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [currency, setCurrency] = useState<'KES' | 'USD'>('KES');
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(BREEDS_DATA[0]);
  const [policyType, setPolicyType] = useState<PolicyType>('privacy');

  // Dark Mode Theme State
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('uptop_k9_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      try {
        localStorage.setItem('uptop_k9_theme', 'dark');
      } catch (e) {}
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      try {
        localStorage.setItem('uptop_k9_theme', 'light');
      } catch (e) {}
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handlePolicyNavigation = (event: Event) => {
      const type = (event as CustomEvent<PolicyType>).detail;
      setPolicyType(type);
      setCurrentPage('policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('navigate-policy', handlePolicyNavigation);
    return () => window.removeEventListener('navigate-policy', handlePolicyNavigation);
  }, []);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  
  // Booking Page Pre-fill state
  const [bookingServiceName, setBookingServiceName] = useState('Full Royal Spa & De-Shedding');
  const [bookingPriceKES, setBookingPriceKES] = useState(5500);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCurrency = () => {
    setCurrency((prev) => (prev === 'KES' ? 'USD' : 'KES'));
  };

  const handleSelectPuppyToBuy = (puppy: Puppy) => {
    setBookingServiceName(`Puppy Reservation & Viewing - ${puppy.breedName} (${puppy.name})`);
    setBookingPriceKES(15000);
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBreed = (breed: Breed) => {
    setSelectedBreed(breed);
    setCurrentPage('breeds');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookGrooming = (pkgName: string, priceKES: number) => {
    setBookingServiceName(pkgName);
    setBookingPriceKES(priceKES);
    setCurrentPage('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9F5] dark:bg-[#0B0B0B] text-[#1F2937] dark:text-[#F3F4F6] transition-colors duration-200">
      {/* Navigation Header with Dark Mode Toggle */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        currency={currency}
        onToggleCurrency={handleToggleCurrency}
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Multi-Page Views */}
      <main className="flex-1">
        <div key={currentPage} className="page-transition">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              currency={currency}
              onSelectPuppyToBuy={handleSelectPuppyToBuy}
              onSelectBreed={handleSelectBreed}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'breeds' && (
            <BreedsPage
              selectedBreedInitial={selectedBreed}
              currency={currency}
              onSelectPuppyToBuy={handleSelectPuppyToBuy}
            />
          )}

          {currentPage === 'merch' && (
            <MerchPage
              currency={currency}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onNavigate={handleNavigate}
              onBookGrooming={handleBookGrooming}
            />
          )}

          {currentPage === 'gallery' && (
            <GalleryPage />
          )}

          {currentPage === 'booking' && (
            <BookingPage
              initialServiceName={bookingServiceName}
              initialPriceKES={bookingPriceKES}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage />
          )}

          {currentPage === 'policy' && (
            <PolicyPage type={policyType} />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      <CookieBanner />
    </div>
  );
}
