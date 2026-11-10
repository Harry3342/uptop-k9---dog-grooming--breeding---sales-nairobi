import React from 'react';
import { 
  HeartHandshake, Award, Stethoscope, Sparkles, Scissors, 
  Truck, Users, Check, ArrowRight, Calendar
} from 'lucide-react';
import { SERVICES_DATA, GROOMING_PACKAGES } from '../data/kennelData';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onBookGrooming: (pkgName: string, priceKES: number) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onBookGrooming,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#76A035]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#76A035]" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#76A035]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#76A035]" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#76A035]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#76A035]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#76A035]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#76A035]" />;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. HERO BANNER - Using Clean Border Collie Portrait with Owner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#EBF3DE] to-[#F8F9F5] dark:from-[#1E2519] dark:to-[#141712] transition-colors">
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-b-[40px] overflow-hidden shadow-sm">
          <img
            src="/assets/aistudio/Border_Collie_Portrait_with_Owner_8102ce2d.png"
            alt="Uptop K9 Full Kennel Services & Companionship Nairobi"
            className="w-full h-full object-cover object-[center_28%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-white text-center sm:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/95 bg-[#76A035] px-3.5 py-1 rounded-full mb-3 shadow-xs">
                <span>🐾</span>
                <span>Our Services</span>
                <span>🐾</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black max-w-2xl tracking-tight leading-tight text-white drop-shadow-sm">
                Full-Service Kennel & Canine Care
              </h1>
              <p className="text-xs sm:text-sm text-gray-200 mt-2 max-w-xl leading-relaxed">
                From ethical breeding and elite obedience training to professional salon grooming, nationwide safe delivery, and lifetime handler support.
              </p>
            </div>
          </div>
        </div>

        {/* Tailored Programs Intro Banner */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-10 text-center">
          <div className="bg-white/95 dark:bg-[#1A1F18]/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-[#E3ECD5] dark:border-[#2C3824] shadow-lg space-y-2 transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#F2F7EA] dark:bg-[#25301E] flex items-center justify-center mx-auto text-[#76A035]">
              <span className="text-lg">🏡</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-[#5B8226] dark:text-[#A8D368]">
              Tailored programs for every owner
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
              Talk to our team about a package combining the perfect dog, training and delivery for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE 7 SERVICES CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="bg-white dark:bg-[#1A1F18] rounded-3xl p-6 sm:p-8 border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs hover:border-[#76A035] dark:hover:border-[#76A035] transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">{service.title}</h3>
                  <div className="w-12 h-12 rounded-full bg-[#EBF3DE] dark:bg-[#25301E] flex items-center justify-center shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>

                {service.bullets.length > 0 && (
                  <ul className="space-y-2.5 pt-2 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-600 dark:text-gray-300">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#76A035] shrink-0 mt-0.5">🐾</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {service.priceKES && (
                <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#5B8226] dark:text-[#A8D368] bg-[#F2F7EA] dark:bg-[#25301E] px-3 py-1 rounded-full">
                    {service.priceKES}
                  </span>
                  <button
                    onClick={() => onNavigate('booking')}
                    className="text-xs font-bold text-[#76A035] hover:text-[#5B8226] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. DEDICATED GROOMING & SPA SALON PACKAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#5B8226] dark:text-[#A8D368] uppercase tracking-wider bg-[#F2F7EA] dark:bg-[#1E2519] px-3 py-1 rounded-full">
            Umoja Grooming Deck & Mobile Pet Van
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
            Dog Grooming & Spa Packages
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Professional high-velocity drying, Furminator de-shedding, medicated baths and precision scissor styling.
            Pay conveniently via Lipa na M-Pesa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GROOMING_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 sm:p-7 border flex flex-col justify-between space-y-6 transition-all ${
                pkg.popular
                  ? 'bg-white dark:bg-[#1A1F18] border-[#76A035] shadow-lg ring-2 ring-[#76A035]/20'
                  : 'bg-white dark:bg-[#1A1F18] border-[#E3ECD5] dark:border-[#2C3824] shadow-xs'
              }`}
            >
              <div className="space-y-4">
                {pkg.popular && (
                  <span className="inline-block bg-[#76A035] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    Most Popular for Guardians
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-black text-gray-900 dark:text-white">{pkg.name}</h3>
                  <div className="text-2xl font-black text-[#5B8226] dark:text-[#A8D368] mt-1">{pkg.price}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Duration: {pkg.duration}</p>
                </div>

                <div className="text-xs font-semibold text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-[#151912] p-2.5 rounded-xl border border-gray-100 dark:border-gray-800">
                  Recommended: {pkg.recommendedFor}
                </div>

                <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                  {pkg.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#76A035] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  const num = parseInt(pkg.price.replace(/[^0-9]/g, '')) || 4500;
                  onBookGrooming(pkg.name, num);
                }}
                className={`w-full py-3 rounded-2xl font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  pkg.popular
                    ? 'bg-[#76A035] hover:bg-[#63892B] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Spa Session</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BOTTOM TAILORED PROGRAMS CALLOUT */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#1A1F18] rounded-3xl p-8 sm:p-12 border border-[#E3ECD5] dark:border-[#2C3824] shadow-md text-center space-y-4 transition-colors">
          <h3 className="text-2xl sm:text-3xl font-black text-[#5B8226] dark:text-[#A8D368]">
            Tailored programs for every owner
          </h3>
          <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
            Talk to our team about a package combining the perfect dog, training and delivery for your needs.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-[#98B868] hover:bg-[#85A655] text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
            >
              Request a Consultation
            </button>
            <button
              onClick={() => onNavigate('breeds')}
              className="px-6 py-3 rounded-full bg-gray-500 hover:bg-gray-600 text-white font-bold text-xs shadow-sm transition-all cursor-pointer"
            >
              Browse for Dogs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
