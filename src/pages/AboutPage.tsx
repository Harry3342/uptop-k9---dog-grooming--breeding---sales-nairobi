import React from 'react';
import { ShieldCheck, Heart, Award, Sparkles, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      {/* 1. HERO BANNER - Using Clean Guardian Dog at Facility Photo */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF3DE] to-[#F8F9F5] dark:from-[#1E2519] dark:to-[#141712] transition-colors">
        <div className="relative w-full h-[380px] sm:h-[480px] rounded-b-[40px] overflow-hidden shadow-sm">
          <img
            src="/assets/aistudio/Gemini_Generated_Image_qskxmmqskxmmqskx_45eb7d04.jpg"
            alt="Uptop K9 Guardian Dog at Umoja Compound"
            className="w-full h-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full text-white text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-white/95 bg-[#76A035] px-3.5 py-1 rounded-full inline-block mb-3 shadow-xs">
                Nasra Gardens Estate, Nairobi • Established 2026
              </span>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white drop-shadow-sm">
                Who We Are
              </h1>
              <p className="text-xs sm:text-sm text-gray-200 mt-2 max-w-xl mx-auto leading-relaxed">
                Kenya's premier breeding, elite training and full grooming sanctuary for world-class guardian and working companions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. A LEGACY OF LOYALTY & STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5B8226] dark:text-[#A8D368] bg-[#F2F7EA] dark:bg-[#1E2519] px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A Legacy of Loyalty</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
              Ethical Breeding Rooted in Nairobi, Kenya
            </h2>

            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Uptop K9</strong> was founded on a simple belief: that a great dog can transform a home, a family and a life. From our facility in Umoja, Kenya, we keep premier guardian, working and companion breeds — the <strong>South African Boerboel & Mastiff</strong>, <strong>Working German Shepherds</strong> (Solid Black, Black & Tan, Long-Haired), the <strong>Turkish Kangal Shepherd</strong>, <strong>Border Collies</strong>, <strong>Rottweilers</strong>, <strong>Plott Hounds</strong>, and <strong>American Bullies</strong>.
            </p>

            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Our adult dogs are not for sale. They are the breeding programme, and you are welcome to come and meet them before you choose. What we sell is their puppies, <strong>$450–$550 (KES 58,500 – 71,500)</strong> — every one raised underfoot, vet-checked, matched thoughtfully to its new family, and supported for life.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onNavigate('booking')}
                className="px-6 py-3 rounded-full bg-[#76A035] hover:bg-[#63892B] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book a Kennel Visit in Umoja</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('breeds')}
                className="px-6 py-3 rounded-full bg-white dark:bg-[#1E2519] border border-[#E3ECD5] dark:border-[#2C3824] text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#25301E] font-bold text-xs shadow-xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>View Our Breeds</span>
              </button>
            </div>
          </div>

          {/* Collage Images Column */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Main photo */}
              <div className="col-span-2 aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white dark:border-[#2C3824] shadow-xl relative group bg-[#F2F5EE] dark:bg-[#10130F]">
                <img
                  src="/assets/dogs/Black-Mastiff-on-Grass-Platform.png"
                  alt="Uptop K9 Dignified Black Boerboel Mastiff"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-3 py-1 rounded-full">
                  Black Boerboel Mastiff • Umoja Facility
                </div>
              </div>

              {/* Secondary photo 1 */}
              <div className="aspect-square rounded-full overflow-hidden border-4 border-white dark:border-[#2C3824] shadow-md relative group bg-[#F2F5EE] dark:bg-[#10130F]">
                <img
                  src="/assets/dogs/Rottweiler-Studio-Portrait.png"
                  alt="Working Rottweiler"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                />
              </div>

              {/* Secondary photo 2 */}
              <div className="aspect-square rounded-full overflow-hidden border-4 border-white dark:border-[#2C3824] shadow-md relative group bg-[#F2F5EE] dark:bg-[#10130F]">
                <img
                  src="/assets/dogs/brown-dog.png"
                  alt="Tan Mastiff Mix Mountain Guardian"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-[#1A1F18] p-6 rounded-3xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs text-center space-y-1 transition-colors">
            <h3 className="text-3xl sm:text-4xl font-black text-[#76A035]">500+</h3>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">Happy Families</p>
          </div>
          <div className="bg-white dark:bg-[#1A1F18] p-6 rounded-3xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs text-center space-y-1 transition-colors">
            <h3 className="text-3xl sm:text-4xl font-black text-[#76A035]">5</h3>
            <p className="text-xs font-semibold text-gray-600 dark:text-gray-300">Breeds We Keep</p>
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

      {/* 4. WHAT WE STAND FOR / OUR VALUES */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-[#5B8226] dark:text-[#A8D368] uppercase tracking-wider">
            What We Stand For
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            Our Values
          </h2>
        </div>

        {/* 4 Rounded Pill Value Cards */}
        <div className="space-y-4">
          {/* Value 1 */}
          <div className="bg-white dark:bg-[#1A1F18] rounded-3xl p-6 sm:p-7 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs flex flex-col items-center text-center space-y-2 hover:border-[#76A035] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#F2F7EA] dark:bg-[#25301E] flex items-center justify-center text-[#76A035] mb-1">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Welfare First</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Our dogs are family. Every decision starts with their health, emotional well-being and happiness.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-white dark:bg-[#1A1F18] rounded-3xl p-6 sm:p-7 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs flex flex-col items-center text-center space-y-2 hover:border-[#76A035] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#F2F7EA] dark:bg-[#25301E] flex items-center justify-center text-[#76A035] mb-1">
              <Award className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Uncompromising Quality</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Only vet-checked, temperament-assessed dogs earn a place in our breeding programme.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-white dark:bg-[#1A1F18] rounded-3xl p-6 sm:p-7 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs flex flex-col items-center text-center space-y-2 hover:border-[#76A035] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#F2F7EA] dark:bg-[#25301E] flex items-center justify-center text-[#76A035] mb-1">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Integrity</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Transparent records, honest guidance and written health guarantees, always.
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-white dark:bg-[#1A1F18] rounded-3xl p-6 sm:p-7 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs flex flex-col items-center text-center space-y-2 hover:border-[#76A035] transition-colors">
            <div className="w-12 h-12 rounded-full bg-[#F2F7EA] dark:bg-[#25301E] flex items-center justify-center text-[#76A035] mb-1">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">Ethical Breeding</h4>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed">
              Responsible, limited litters raised underfoot in a loving home environment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
