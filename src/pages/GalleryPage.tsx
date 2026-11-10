import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/kennelData';
import { Eye, X, Camera } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const categories = ['All', 'Grooming', 'Puppies', 'Training', 'Kennel Life', 'Deliveries'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-12 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-b from-[#EBF3DE] to-[#F8F9F5] dark:from-[#1E261A] dark:to-[#141712] pt-10 pb-6 px-4 sm:px-6 lg:px-8 text-center transition-colors">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#5B8226] dark:text-[#9EC468] bg-white dark:bg-[#1A1F18] px-4 py-1 rounded-full border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs">
            <Camera className="w-3.5 h-3.5" />
            <span>Moments at Uptop K9 Nairobi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Kennel Life & Grooming Gallery
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Take a look inside our Umoja facility: active grooming transformations, handler-led obedience work,
            underfoot puppy socialization, and companion handovers to homes across Kenya.
          </p>
        </div>
      </section>

      {/* 2. Category Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#76A035] text-white shadow-sm'
                  : 'bg-white dark:bg-[#1A1F18] border border-[#E3ECD5] dark:border-[#2C3824] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#252E20]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group bg-white dark:bg-[#1A1F18] rounded-3xl overflow-hidden border border-[#E3ECD5] dark:border-[#2C3824] shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F2F5EE] dark:bg-[#10130F]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-md">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-black/70 backdrop-blur-xs text-[#5B8226] dark:text-[#9EC468] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#E3ECD5] dark:border-[#2C3824]">
                  {item.category}
                </div>
              </div>

              <div className="p-4 space-y-1">
                <h4 className="font-extrabold text-sm text-gray-900 dark:text-white line-clamp-1">{item.title}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-3xl w-full bg-white dark:bg-[#1A1F18] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-[#2C3824]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[60vh] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[60vh] w-auto object-contain mx-auto"
              />
            </div>

            <div className="p-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-[#EBF3DE] dark:bg-[#252E20] text-[#5B8226] dark:text-[#9EC468] px-2.5 py-0.5 rounded-full">
                  {selectedPhoto.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedPhoto.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
