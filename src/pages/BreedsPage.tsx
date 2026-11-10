import React, { useState } from 'react';
import { 
  ArrowRight, ShieldCheck, Heart, Sparkles, Star, ChevronLeft, 
  ShoppingBag, Check, Info, Filter, SlidersHorizontal, Eye, Tag, Users, CheckCircle2
} from 'lucide-react';
import { BREEDS_DATA, PUPPIES_DATA, KENNEL_CONTACT } from '../data/kennelData';
import { Breed, Puppy } from '../types';

interface BreedsPageProps {
  selectedBreedInitial?: Breed | null;
  currency: 'KES' | 'USD';
  onSelectPuppyToBuy: (puppy: Puppy) => void;
}

export const BreedsPage: React.FC<BreedsPageProps> = ({
  selectedBreedInitial,
  currency,
  onSelectPuppyToBuy,
}) => {
  const [activeBreed, setActiveBreed] = useState<Breed | null>(
    selectedBreedInitial || BREEDS_DATA[0]
  );
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredBreeds = activeFilter === 'all' 
    ? BREEDS_DATA 
    : BREEDS_DATA.filter((b) => b.id === activeFilter);

  const availablePupsForBreed = PUPPIES_DATA.filter(
    (p) => !activeBreed || p.breedId === activeBreed.id
  );

  const formatPrice = (usd: number, kes: number) => {
    return currency === 'KES' ? `KSh ${kes.toLocaleString('en-KE')}` : `$${usd}`;
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. HERO CATEGORIES BANNER - Using Clean Handlers & Guardian Breeds Photo */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF3DE] to-[#F8F9F5] dark:from-[#1E2519] dark:to-[#141712] transition-colors">
        <div className="relative w-full h-[360px] sm:h-[460px] rounded-b-[40px] overflow-hidden shadow-sm">
          <img
            src="/assets/dogs/two-german-sherphards.png"
            alt="Uptop K9 Handler Team & Guardian Breeds in Nairobi"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-white/95 bg-[#76A035] px-3.5 py-1 rounded-full inline-block mb-3 shadow-xs">
                🐾 Authentic Kennel Bloodlines 🐾
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-sm">
                Our Breeds & Pack Roster
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-gray-200 max-w-2xl leading-relaxed">
                Meet the dogs in our kennel: Boerboels, German Shepherds, Border Collies, Kangals, American Bullies, and Mastiffs.
                Every parent dog lives at our Umoja facility under certified veterinary care.
              </p>
            </div>
          </div>
        </div>

        {/* Categories Header Pill */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 flex justify-center">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-[#1A1F18] px-6 py-3 rounded-full border border-[#E3ECD5] dark:border-[#2C3824] shadow-md transition-colors">
            <span className="text-[#76A035]">🐾</span>
            <span className="font-extrabold text-sm text-[#76A035] dark:text-[#A8D368] uppercase tracking-wider">
              Kennel Lineup & Breed Profiles
            </span>
            <span className="text-[#76A035]">🐾</span>
          </div>
        </div>
      </section>

      {/* 2. PACK LINEUP QUICK IDENTIFIER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1A1F18] rounded-3xl p-6 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-gray-800 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-gray-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#76A035]" />
                <span>Dogs Labeled in Our Kennel Lineup & Studio</span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Click any dog to jump directly to its breed specifications, temperament radar, and available puppies:
              </p>
            </div>
            <span className="text-xs font-bold text-[#5B8226] dark:text-[#A8D368] bg-[#F2F7EA] dark:bg-[#25301E] px-3 py-1 rounded-full shrink-0">
              8 Real Breeds at Kennel
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'boerboel-mastiff', label: 'Black Boerboel (Mastiff)', badge: 'Lineup Dog #1' },
              { id: 'boerboel-mastiff', label: 'Fawn Boerboel', badge: 'Lineup Dog #2' },
              { id: 'german-shepherd', label: 'German Shepherd (Long-Haired)', badge: 'Lineup Dog #3' },
              { id: 'boerboel-mastiff', label: 'Boerboel Mastiff', badge: 'Lineup Dog #4' },
              { id: 'tan-mastiff-mix', label: 'Tan Mastiff Mix', badge: 'Lineup Dog #5' },
              { id: 'border-collie', label: 'Border Collie (Intelligent • Energetic • Loyal)', badge: 'Studio Portrait' },
              { id: 'american-bully', label: 'American Bully / Pitbull Guardian', badge: 'Staircase Sentry' },
              { id: 'kangal', label: 'Turkish Kangal Shepherd', badge: 'Livestock Sentry' },
              { id: 'rottweiler', label: 'Working Rottweiler', badge: 'Pack Walk Sentry' },
              { id: 'plott-hound', label: 'Plott Hound / Brindle Tracker', badge: 'Tracking Hound' },
            ].map((item, idx) => {
              const matchedBreed = BREEDS_DATA.find((b) => b.id === item.id);
              const isSelected = activeBreed?.id === item.id;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    if (matchedBreed) {
                      setActiveBreed(matchedBreed);
                      setActiveFilter(matchedBreed.id);
                    }
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#76A035] text-white shadow-sm'
                      : 'bg-[#F8F9F5] dark:bg-[#141812] border border-[#E3ECD5] dark:border-[#2C3824] text-gray-700 dark:text-gray-300 hover:border-[#76A035]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#EBF3DE] dark:bg-[#25301E] text-[#5B8226] dark:text-[#A8D368]'
                  }`}>
                    {item.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BREED SELECTION TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <button
            onClick={() => {
              setActiveFilter('all');
            }}
            className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#76A035] text-white shadow-sm'
                : 'bg-white dark:bg-[#1A1F18] border border-[#E3ECD5] dark:border-[#2C3824] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#25301E]'
            }`}
          >
            All {BREEDS_DATA.length} Breeds
          </button>
          {BREEDS_DATA.map((breed) => (
            <button
              key={breed.id}
              onClick={() => {
                setActiveFilter(breed.id);
                setActiveBreed(breed);
              }}
              className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeBreed?.id === breed.id && activeFilter === breed.id
                  ? 'bg-[#76A035] text-white shadow-sm'
                  : 'bg-white dark:bg-[#1A1F18] border border-[#E3ECD5] dark:border-[#2C3824] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#25301E]'
              }`}
            >
              {breed.name}
            </button>
          ))}
        </div>
      </section>

      {/* 4. ACTIVE BREED SPOTLIGHT HERO & SPEC RADAR */}
      {activeBreed && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
          {/* Breed Hero Card with Dog in Landscape */}
          <div className="relative rounded-[36px] overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg min-h-[380px] sm:min-h-[460px] flex items-end p-6 sm:p-12">
            <img
              src={activeBreed.parentImage || activeBreed.image}
              alt={activeBreed.name}
              className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30" />

            <div className="relative z-10 max-w-2xl space-y-3">
              <div className="inline-flex items-center gap-2 text-[#82A838] font-bold text-xs uppercase tracking-widest bg-black/50 backdrop-blur-xs px-3.5 py-1 rounded-full">
                <span>🐾</span>
                <span>Breed Roster • {activeBreed.name}</span>
                <span>🐾</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                {activeBreed.name}
              </h2>
              <p className="text-xs sm:text-sm text-emerald-300 font-semibold">
                "{activeBreed.tagline}"
              </p>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                {activeBreed.fullStory}
              </p>

              {/* Varieties pill tags */}
              {activeBreed.varieties && activeBreed.varieties.length > 0 && (
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block mb-1.5">
                    Kennel Varieties & Bloodlines:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeBreed.varieties.map((varName, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-white text-xs font-bold border border-white/20"
                      >
                        ✓ {varName}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Parent dogs kept at Umoja */}
              {activeBreed.kennelDogs && activeBreed.kennelDogs.length > 0 && (
                <div className="flex items-center gap-2 text-xs text-gray-300 pt-1">
                  <Users className="w-4 h-4 text-[#76A035]" />
                  <span><strong>Kennel Sires & Dams:</strong> {activeBreed.kennelDogs.join(', ')}</span>
                </div>
              )}

              <div className="flex items-center gap-4 text-xs text-gray-300 font-semibold pt-2 border-t border-white/15">
                <span>Origin: {activeBreed.origin}</span>
                <span>•</span>
                <span>Lifespan: {activeBreed.lifespan}</span>
                <span>•</span>
                <span>Weight: {activeBreed.weight}</span>
              </div>
            </div>
          </div>

          {/* Twin Profile Cards: Breed Ratings & Attributes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Card: Breed Profile Sliders */}
            <div className="bg-white dark:bg-[#1A1F18] rounded-3xl p-6 sm:p-8 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs space-y-5 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center">
                Breed Profile & Temperament
              </h3>

              <div className="space-y-4 text-xs font-semibold">
                {/* Energy */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Energy Level</span>
                    <span className="text-[#76A035]">{activeBreed.ratings.energy}/5</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#76A035] rounded-full transition-all duration-500"
                      style={{ width: `${(activeBreed.ratings.energy / 5) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Trainability */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Trainability</span>
                    <span className="text-[#76A035]">{activeBreed.ratings.trainability}/5</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#76A035] rounded-full transition-all duration-500"
                      style={{ width: `${(activeBreed.ratings.trainability / 5) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Family Friendly */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Family-friendly</span>
                    <span className="text-[#76A035]">{activeBreed.ratings.familyFriendly}/5</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#76A035] rounded-full transition-all duration-500"
                      style={{ width: `${(activeBreed.ratings.familyFriendly / 5) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Guardian Instinct */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Guardian Instinct</span>
                    <span className="text-[#76A035]">{activeBreed.ratings.guardianInstinct}/5</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#76A035] rounded-full transition-all duration-500"
                      style={{ width: `${(activeBreed.ratings.guardianInstinct / 5) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Shedding */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-gray-700 dark:text-gray-300">
                    <span>Shedding</span>
                    <span className="text-[#76A035]">{activeBreed.ratings.shedding}/5</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#76A035] rounded-full transition-all duration-500"
                      style={{ width: `${(activeBreed.ratings.shedding / 5) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card: Attributes & Pills */}
            <div className="bg-white dark:bg-[#1A1F18] rounded-3xl p-6 sm:p-8 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs flex flex-col justify-between space-y-6 transition-colors">
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white text-center mb-4">
                  Attributes & Care
                </h3>

                <ul className="space-y-2.5 text-xs text-gray-600 dark:text-gray-300 mb-6">
                  {activeBreed.attributes.map((attr, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#76A035] shrink-0 mt-1.5" />
                      <span>{attr}</span>
                    </li>
                  ))}
                </ul>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2">
                  {activeBreed.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full bg-[#EBF3DE] dark:bg-[#26331E] text-[#5B8226] dark:text-[#A8D368] font-bold text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-4">
                <button
                  onClick={() => {
                    const firstPup = availablePupsForBreed[0] || PUPPIES_DATA[0];
                    onSelectPuppyToBuy(firstPup);
                  }}
                  className="w-full py-3.5 rounded-2xl bg-[#98B868] hover:bg-[#85A655] text-white font-extrabold text-sm shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Reserve Puppy with M-Pesa ({formatPrice(activeBreed.priceUSD, activeBreed.priceKES)})</span>
                </button>

              </div>
            </div>
          </div>

          {/* 5. ALL AVAILABLE PUPPIES FOR THIS BREED */}
          <div className="space-y-6 pt-6">
            <div className="text-center">
              <span className="text-xs font-bold text-[#5B8226] dark:text-[#A8D368] uppercase tracking-wider">
                Direct from Our Imported Parents
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-1">
                Available Puppies: {activeBreed.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {availablePupsForBreed.map((pup) => (
                <div
                  key={pup.id}
                  className="bg-white dark:bg-[#1A1F18] rounded-3xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs overflow-hidden flex flex-col justify-between hover:shadow-md transition-all group"
                >
                  {/* Photo with Available Tag */}
                  <div className="h-64 overflow-hidden relative bg-gray-100 dark:bg-gray-800">
                    <img
                      src={pup.image}
                      alt={pup.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-gray-900/60 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                      Available
                    </div>
                  </div>

                  {/* Puppy Details Info */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-extrabold text-gray-900 dark:text-white text-sm tracking-wide">
                        {pup.breedName}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                        <span className="text-gray-800 dark:text-gray-300 ml-1">5.0</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-black text-gray-900 dark:text-white">{pup.name}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                        {pup.gender}: {pup.ageWeeks} weeks
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        {pup.color}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-[#5B8226] dark:text-[#A8D368] font-semibold bg-[#F2F7EA] dark:bg-[#25301E] p-2 rounded-xl">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>{pup.healthGuarantee}</span>
                    </div>

                    <div className="pt-2 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <div className="text-xl font-black text-[#5B8226] dark:text-[#A8D368]">
                        {formatPrice(pup.priceUSD, pup.priceKES)}
                      </div>
                      <button
                        onClick={() => onSelectPuppyToBuy(pup)}
                        className="w-10 h-10 rounded-full bg-[#76A035] hover:bg-[#63892B] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform cursor-pointer"
                        title="Reserve with M-Pesa"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. COMPLETE BREED DIRECTORY (When 'all' filter is active) */}
      {activeFilter === 'all' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 pt-6">
          <div className="text-center">
            <span className="text-xs font-bold text-[#5B8226] dark:text-[#A8D368] uppercase tracking-wider">
              Kennel Pack Directory
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white mt-1">
              All Breeds Raised at Uptop K9 Umoja
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BREEDS_DATA.map((breed) => (
              <div
                key={breed.id}
                onClick={() => {
                  setActiveBreed(breed);
                  window.scrollTo({ top: 380, behavior: 'smooth' });
                }}
                className={`group bg-white dark:bg-[#1A1F18] rounded-3xl border shadow-xs hover:shadow-lg transition-all cursor-pointer overflow-hidden flex flex-col justify-between ${
                  activeBreed?.id === breed.id ? 'border-[#76A035] ring-2 ring-[#76A035]/30' : 'border-[#E3ECD5] dark:border-[#2C3824]'
                }`}
              >
                <div className="h-48 overflow-hidden relative bg-gray-100 dark:bg-gray-800">
                  <img
                    src={breed.image}
                    alt={breed.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur-xs text-[#5B8226] dark:text-[#A8D368] text-[10px] font-bold px-2.5 py-1 rounded-full">
                    {formatPrice(breed.priceUSD, breed.priceKES)}
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-extrabold text-base text-gray-900 dark:text-white group-hover:text-[#76A035] transition-colors">
                      {breed.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                      {breed.tagline}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs font-bold text-[#76A035]">
                    <span>View Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
