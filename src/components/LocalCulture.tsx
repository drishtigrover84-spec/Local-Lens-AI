import React, { useState } from 'react';
import { Utensils, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { CULTURE_ITEMS } from '../data/haryanaData';

export const LocalCulture: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'food' | 'handicraft' | 'experience'>('all');

  const filteredItems = CULTURE_ITEMS.filter((item) => {
    if (filterType === 'all') return true;
    return item.type === filterType;
  });

  return (
    <section id="culture" className="py-24 bg-[#F8F7F2] text-[#26332F] border-b border-[#E4DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#24483F] uppercase mb-2">
              <Utensils className="w-3.5 h-3.5 text-[#D58B65]" />
              <span>Living Heritage, Flavors & Crafts</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#24483F] font-['Outfit']">
              Authentic Haryana Culture
            </h2>
            <p className="text-[#4F635C] mt-2 text-sm sm:text-base leading-relaxed">
              Step into traditional village courtyards, taste earthen tandoor delicacies, discover GI-tagged Phulkari needlework, and watch molten jaggery boiled in field kolhus.
            </p>
          </div>

          {/* Type Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#EDF2EB] rounded-2xl border border-[#C1CFBC] self-start md:self-auto">
            {[
              { id: 'all', label: 'All Traditions' },
              { id: 'food', label: 'Authentic Food' },
              { id: 'handicraft', label: 'Handicrafts' },
              { id: 'experience', label: 'Local Rituals' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-[#24483F] text-white shadow-xs'
                    : 'text-[#4F635C] hover:text-[#24483F]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Culture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-[#E4DFD3] overflow-hidden shadow-[0_4px_20px_rgba(36,72,63,0.05)] hover:shadow-[0_16px_36px_rgba(36,72,63,0.1)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo if available */}
                {item.image && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="flex items-center gap-2 text-xs text-stone-200 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-[#A8B9A1]" />
                        <span>{item.cityOrigin}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Hindi & English Title */}
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#24483F] font-['Outfit']">
                        {item.title}
                      </h3>
                      {item.hindiTitle && (
                        <div className="text-xs text-[#687E77] font-medium mt-0.5">
                          {item.hindiTitle}
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-[#24483F] mb-3">
                    {item.tagline}
                  </p>

                  <p className="text-xs text-[#4F635C] leading-relaxed mb-4 font-normal">
                    {item.description}
                  </p>

                  {/* Cultural Story Box */}
                  <div className="bg-[#F8F7F2] p-4 rounded-xl border border-[#E4DFD3] mb-4">
                    <div className="text-[11px] font-bold text-[#24483F] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-[#D58B65]" />
                      <span>Generational Heritage</span>
                    </div>
                    <p className="text-xs text-[#687E77] leading-relaxed">
                      {item.story}
                    </p>
                  </div>

                  {/* Notes */}
                  <div className="space-y-1.5 text-xs text-[#687E77] pt-3 border-t border-[#E4DFD3]">
                    <div>
                      <strong className="text-[#24483F] font-semibold">Where to experience: </strong>
                      <span>{item.whereToFind}</span>
                    </div>
                    <div>
                      <strong className="text-[#24483F] font-semibold">Prime season: </strong>
                      <span>{item.seasonOrOccasion}</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="px-6 py-3.5 bg-[#F8F7F2] border-t border-[#E4DFD3] flex items-center justify-between text-xs text-[#687E77]">
                <div className="flex items-center gap-1.5 text-[#24483F] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#24483F]" />
                  <span>{item.authenticityBadge}</span>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
