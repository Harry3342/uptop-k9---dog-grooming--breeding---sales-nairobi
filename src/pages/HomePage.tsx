import React, { useRef, useState } from 'react';
import { 
  ArrowRight, ShieldCheck, Heart, Sparkles, Star, ChevronRight, 
  CheckCircle2, ChevronLeft, Calendar, HelpCircle, Phone, ArrowUpRight,
  Eye, Scissors
} from 'lucide-react';
import { BREEDS_DATA, PUPPIES_DATA, FAQS_DATA, TESTIMONIALS_DATA, KENNEL_CONTACT } from '../data/kennelData';
import { Puppy, Breed } from '../types';

interface HomePageProps {
  onNavigate: (page: string) => void;
  currency: 'KES' | 'USD';
  onSelectPuppyToBuy: (puppy: Puppy) => void;
  onSelectBreed: (breed: Breed) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  currency,
  onSelectPuppyToBuy,
  onSelectBreed,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const thumbnailStripRef = useRef<HTMLDivElement>(null);

  const heroThumbnails = [
    {
      img: '/assets/aistudio/Gemini_Generated_Image_2fqi982fqi982fqi_7b7f7d03.jpg',
      title: 'Boerboel & Mastiff Lineup',
      breedId: 'boerboel-mastiff'
    },
    {
      img: '/assets/aistudio/Border_Collie_Portrait_with_Owner_8102ce2d.png',
      title: 'Border Collie Champion',
      breedId: 'border-collie'
    },
    {
      img: '/assets/aistudio/Gemini_Generated_Image_qskxmmqskxmmqskx_45eb7d04.jpg',
      title: 'American Bully Sentry',
      breedId: 'american-bully'
    },
    {
      img: '/assets/dogs/Majestic-Kangal.png',
      title: 'Turkish Kangal',
      breedId: 'kangal'
    },
    {
      img: '/assets/dogs/long-haired-german-shephard.png',
      title: 'Working German Shepherd',
      breedId: 'german-shepherd'
    },
    {
      img: '/assets/dogs/Rottweiler-Studio-Portrait.png',
      title: 'Working Rottweiler',
      breedId: 'rottweiler'
    },
    {
      img: '/assets/dogs/tan_mastiff_mix_golden.jpg',
      title: 'Tan Mastiff Guardian',
      breedId: 'tan-mastiff-mix'
    },
    {
      img: '/assets/dogs/plott_hound_handler_clean.jpg',
      title: 'Plott Hound Tracker',
      breedId: 'plott-hound'
    }
  ];

  const formatPrice = (usd: number, kes: number) => {
    return currency === 'KES' ? `KSh ${kes.toLocaleString('en-KE')}` : `$${usd}`;
  };

  const scrollThumbnails = (direction: 'previous' | 'next') => {
    thumbnailStripRef.current?.scrollBy({
      left: direction === 'next' ? 120 : -120,
      behavior: 'smooth',
    });
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. HERO SECTION (Faithful to Home_369a4dc6.png) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF3DE] via-[#F5F8F0] to-[#F8F9F5] dark:from-[#1E2519] dark:via-[#161A13] dark:to-[#141712] transition-colors">
        {/* Puppy Backdrop / Banner Image */}
        <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] rounded-b-[40px] overflow-hidden shadow-sm">
          <img
            src="/assets/aistudio/Gemini_Generated_Image_2fqi982fqi982fqi_7b7f7d03.jpg"
            alt="Uptop K9 Nairobi Kennel & Grooming"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full text-white">
              <span className="inline-block bg-[#76A035] text-white text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
                Nasra Gardens Estate, Nairobi • Premier Guardian Kennel
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black max-w-3xl tracking-tight leading-tight">
                The Best Kennel & Grooming Services in Nairobi Kenya
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-200 max-w-2xl leading-relaxed">
                The premier breeds we raise and the dogs behind them: South African Boerboels, Working German Shepherds, Border Collies, Kangals, and Mountain Guardians.
                Every dog below lives at our facility under the name on its own vaccination record — these are the parents, not the puppies for sale.
              </p>
            </div>
          </div>
        </div>

        {/* Action Row Under Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-10">
          <div className="flex flex-col items-center gap-6 bg-white/95 dark:bg-[#1A1F18]/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#E3ECD5] dark:border-[#4A7130] shadow-lg transition-colors">
            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full">
              <button
                onClick={() => onNavigate('breeds')}
                className="flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-[#76A035] hover:bg-[#63892B] dark:bg-[#8CFF3D] dark:hover:bg-[#A5FF68] dark:text-[#14200F] text-white font-bold text-sm shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Browse all breeds</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('booking')}
                className="flex-1 sm:flex-none px-6 py-3.5 rounded-full bg-[#82A838] hover:bg-[#72962E] dark:bg-[#6FD52D] dark:hover:bg-[#8CFF3D] dark:text-[#14200F] text-white font-bold text-sm shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Session</span>
              </button>
            </div>

            {/* Thumbnail Carousel Strip */}
            <div className="flex flex-col items-center justify-center gap-3 w-full">
              <div ref={thumbnailStripRef} className="no-scrollbar flex w-full max-w-[360px] sm:max-w-[620px] items-center gap-3 overflow-x-hidden scroll-smooth">
                {heroThumbnails.map((thumb, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      const found = BREEDS_DATA.find((b) => b.id === thumb.breedId);
                      if (found) onSelectBreed(found);
                    }}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#E3ECD5] dark:border-[#7CFF3B] shadow-xs cursor-pointer hover:scale-105 transition-transform shrink-0 relative group"
                  >
                    <img src={thumb.img} alt={thumb.title} className="w-full h-full object-cover object-center" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                  </div>
                ))}
              </div>

              {/* Prev/Next arrows */}
              <div className="flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => scrollThumbnails('previous')}
                  aria-label="Show previous dog breeds"
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-[#263D1D] hover:bg-gray-200 dark:hover:bg-[#395A27] border border-transparent dark:border-[#7CFF3B] flex items-center justify-center text-gray-700 dark:text-[#B8FF8A] cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollThumbnails('next')}
                  aria-label="Show next dog breeds"
                  className="w-8 h-8 rounded-full bg-gray-100 dark:bg-[#263D1D] hover:bg-gray-200 dark:hover:bg-[#395A27] border border-transparent dark:border-[#7CFF3B] flex items-center justify-center text-gray-700 dark:text-[#B8FF8A] cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AVAILABLE PUPPIES STRIP (Faithful to Home_369a4dc6.png) */}
      <section className="bg-[#76A035] dark:bg-[#3F7A1D] dark:border dark:border-[#7CFF3B] py-10 px-4 sm:px-6 lg:px-8 text-white rounded-[36px] max-w-7xl mx-auto shadow-md">
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest text-white/80 font-bold block mb-1">
            Now Ready for Adoption in Nairobi
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Available Puppies
          </h2>
          <p className="text-xs text-white/90 mt-1">
            All pups 8-13 weeks, fully dewormed, vet-checked, microchipped with written health guarantee.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {PUPPIES_DATA.slice(0, 5).map((pup) => (
            <div
              key={pup.id}
              onClick={() => onSelectPuppyToBuy(pup)}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xs rounded-2xl p-3 border border-white/20 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-2.5 bg-[#F2F5EE] dark:bg-black/30">
                <img
                  src={pup.image}
                  alt={pup.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="text-center">
                <span className="inline-block text-[10px] font-bold bg-[#EBF3DE] dark:bg-[#1E2719] text-[#5B8226] dark:text-[#A8D368] px-2.5 py-0.5 rounded-full mb-1">
                  {pup.breedName}
                </span>
                <h4 className="font-extrabold text-white text-sm">{pup.name}</h4>
                <p className="text-[11px] text-white/80 font-medium">
                  {formatPrice(pup.priceUSD, pup.priceKES)}
                </p>
                <button className="mt-2 w-full py-1.5 rounded-lg bg-white text-[#76A035] text-[11px] font-bold group-hover:bg-[#F2F7EA] transition-colors">
                  Reserve Pup
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TRUST BAR WITH STARS (Faithful to Home_369a4dc6.png) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 border-y border-[#E3ECD5] dark:border-[#2C3824] flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-1.5">
            <span>Global Delivery</span>
            <Star className="w-3.5 h-3.5 fill-[#76A035] text-[#76A035]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span>Imported Parent Dogs</span>
            <Star className="w-3.5 h-3.5 fill-[#76A035] text-[#76A035]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span>Health Guaranteed</span>
            <Star className="w-3.5 h-3.5 fill-[#76A035] text-[#76A035]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span>Puppies $450–$550</span>
            <Star className="w-3.5 h-3.5 fill-[#76A035] text-[#76A035]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span>Since 2026</span>
            <Star className="w-3.5 h-3.5 fill-[#76A035] text-[#76A035]" />
          </div>
          <div className="flex items-center gap-1.5">
            <span>Royal Care</span>
          </div>
        </div>
      </section>

      {/* 4. OUR BREEDS SECTION (Faithful to Home_369a4dc6.png) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-[#76A035] font-extrabold text-sm uppercase tracking-widest mb-1">
            <span>🐾</span>
            <span>OUR AUTHENTIC BREEDS</span>
            <span>🐾</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            The Premier Breeds We Raise And The Dogs Behind Them
          </h2>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Guardians, working shepherds, agile collies, and athletic protectors. Every dog below lives at our Umoja
            kennel under the name on its own vaccination record — these are the parents, not the puppies for sale.
          </p>
        </div>

        {/* Breed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BREEDS_DATA.map((breed) => (
            <div
              key={breed.id}
              className="bg-white dark:bg-[#1A1F18] rounded-3xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between group"
            >
              <div className="h-56 overflow-hidden relative bg-gray-100 dark:bg-gray-800">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur-xs text-[#5B8226] dark:text-[#A8D368] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#E3ECD5] dark:border-[#2C3824]">
                  From {formatPrice(breed.priceUSD, breed.priceKES)}
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-base text-gray-900 dark:text-white group-hover:text-[#76A035] transition-colors">
                    {breed.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <span className="text-[#76A035]">🐾</span>
                    <span className="line-clamp-1"><strong>Parents:</strong> {breed.parentName}</span>
                  </div>

                  {breed.varieties && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {breed.varieties.slice(0, 2).map((v, i) => (
                        <span key={i} className="text-[10px] bg-[#EBF3DE] dark:bg-[#25301E] text-[#5B8226] dark:text-[#A8D368] font-bold px-2 py-0.5 rounded-full">
                          {v}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2">
                    {breed.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <button
                    onClick={() => onSelectBreed(breed)}
                    className="text-xs font-bold text-[#76A035] hover:text-[#5B8226] flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Explore Breed</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onNavigate('booking')}
                    className="text-[11px] font-bold bg-[#F2F7EA] dark:bg-[#25301E] text-[#5B8226] dark:text-[#A8D368] px-3 py-1.5 rounded-full hover:bg-[#E3ECD5] dark:hover:bg-[#2F3E26] transition-colors cursor-pointer"
                  >
                    Inquire Pups
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MERCHANDISE PROMO BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#1A1A1A] to-[#2B3818] dark:from-[#0D100C] dark:to-[#1C2612] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl border border-gray-800 dark:border-[#2C3824]">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#76A035] text-white px-3 py-1 rounded-full uppercase tracking-wider">
              <Eye className="w-3.5 h-3.5" />
              <span>              Uptop K9 merch</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Take the pack with you
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Fresh branded tees, hoodies, caps, and everyday accessories for people who believe every dog deserves the good life.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigate('merch')}
                className="px-6 py-3 rounded-full bg-[#76A035] hover:bg-[#63892B] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Shop the collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Scissors className="w-4 h-4" />
                <span>View Grooming Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. STATS PILL BOXES (Faithful to Home_369a4dc6.png) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#1A1F18] p-6 rounded-3xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs text-center space-y-1 transition-colors">
            <h3 className="text-3xl sm:text-4xl font-black text-[#76A035]">500+</h3>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">Happy Families</p>
          </div>
          <div className="bg-white dark:bg-[#1A1F18] p-6 rounded-3xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs text-center space-y-1 transition-colors">
            <h3 className="text-3xl sm:text-4xl font-black text-[#76A035]">8</h3>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">Breeds in Pack</p>
          </div>
          <div className="bg-white dark:bg-[#1A1F18] p-6 rounded-3xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs text-center space-y-1 transition-colors">
            <h3 className="text-2xl sm:text-3xl font-black text-[#76A035]">From $450</h3>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">Puppies for Sale</p>
          </div>
          <div className="bg-white dark:bg-[#1A1F18] p-6 rounded-3xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs text-center space-y-1 transition-colors">
            <h3 className="text-3xl sm:text-4xl font-black text-[#76A035]">100%</h3>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">Health Guaranteed</p>
          </div>
        </div>
      </section>

      {/* 7. FAQS SECTION (Faithful to Home_369a4dc6.png) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            Frequently Asked Questions (FAQS)
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Everything you need to know about our Umoja kennel, breeding policy, and grooming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-[#1A1F18] rounded-2xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs p-5 transition-all hover:border-[#76A035]"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full text-left font-bold text-sm text-gray-900 dark:text-white flex items-start justify-between gap-3 cursor-pointer"
                >
                  <span className="flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#76A035] shrink-0 mt-0.5" />
                    <span>{faq.q}</span>
                  </span>
                  <span className="text-xs text-[#76A035] shrink-0 font-extrabold">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-xs text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-3">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2F7EA] dark:bg-[#1E2519] rounded-3xl p-8 sm:p-10 border border-[#E3ECD5] dark:border-[#2E3A26] transition-colors">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#5B8226] dark:text-[#A8D368] uppercase tracking-wider">
              Real Experiences Across Kenya
            </span>
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mt-1">
              What Dog Owners in Nairobi Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div key={idx} className="bg-white dark:bg-[#151912] p-6 rounded-2xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{t.quote}"
                </p>
                <div className="pt-2 border-t border-gray-100 dark:border-gray-800">
                  <h5 className="font-bold text-xs text-gray-900 dark:text-white">{t.name}</h5>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">{t.location} • {t.breed}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
