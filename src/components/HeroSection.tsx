import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { SUPPORTED_CITIES, HaryanaCity } from '../data/haryanaData';

interface HeroSectionProps {
  onSearch: (query: string, city?: HaryanaCity) => void;
  onExploreClick: () => void;
  onPlannerClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onExploreClick,
  onPlannerClick
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState<HaryanaCity | ''>('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, selectedCity || undefined);
  };

  const handleCityQuickSelect = (city: HaryanaCity) => {
    setSelectedCity(city);
    onSearch('', city);
  };

  return (
    <section className="relative bg-[#F8F7F2] text-[#26332F] overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#E4DFD3]">
      
      {/* Decorative Warm Ambient Glows (Natural & Organic, Not Cyber) */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#A8B9A1]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-[#D58B65]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Value Prop, and Search Form */}
          <div className="lg:col-span-7">
            
            {/* Subtle Region Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDF2EB] border border-[#C1CFBC] text-xs text-[#24483F] font-semibold mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#D58B65]" />
              <span className="tracking-wide">Discover Hidden Haryana · Authentic Travel Discovery</span>
            </div>

            {/* Primary Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#24483F] font-['Outfit'] leading-[1.12] text-balance mb-6">
              Your Next Adventure Is Closer Than You Think
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#4F635C] leading-relaxed max-w-xl font-normal mb-8">
              Uncover ancient sacred sarovars, misty Shivalik pine valleys, Mughal terraced water gardens, and living craft traditions across Haryana.
            </p>

            {/* Unified Travel Search Engine Card */}
            <div className="bg-white p-3.5 sm:p-5 rounded-2xl border border-[#E4DFD3] shadow-[0_12px_36px_rgba(36,72,63,0.08)] mb-8">
              <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-3">
                
                {/* City selector dropdown */}
                <div className="relative md:w-60 shrink-0">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#24483F]" />
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value as HaryanaCity | '')}
                    className="w-full pl-10 pr-8 py-3 bg-[#F8F7F2] border border-[#E4DFD3] rounded-xl text-xs sm:text-sm text-[#26332F] font-medium focus:outline-none focus:border-[#24483F] appearance-none cursor-pointer transition-colors"
                    aria-label="Select destination city"
                  >
                    <option value="">All 12 Haryana Districts</option>
                    {SUPPORTED_CITIES.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} ({c.attractionCount} spots)
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#687E77] text-xs">
                    ▼
                  </div>
                </div>

                {/* Keyword / Attraction search */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#687E77]" />
                  <input
                    type="text"
                    placeholder="Search spots, lakes, temples, street food, crafts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#F8F7F2] border border-[#E4DFD3] rounded-xl text-xs sm:text-sm text-[#26332F] placeholder-[#8C9E97] focus:outline-none focus:border-[#24483F] transition-colors"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#D58B65] hover:bg-[#BE744F] active:scale-98 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
                >
                  <span>Find Places</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Quick City Navigation Chips */}
              <div className="mt-3.5 pt-3.5 border-t border-[#E4DFD3]/70 flex flex-wrap items-center gap-1.5 text-xs text-[#4F635C]">
                <span className="text-[#687E77] font-semibold mr-1">Popular regions:</span>
                {(['Kurukshetra', 'Panchkula', 'Pinjore', 'Ambala', 'Yamunanagar', 'Karnal', 'Hisar', 'Gurugram'] as HaryanaCity[]).map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => handleCityQuickSelect(city)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-150 cursor-pointer ${
                      selectedCity === city
                        ? 'bg-[#24483F] text-white shadow-2xs'
                        : 'bg-[#F8F7F2] hover:bg-[#EDF2EB] text-[#26332F] border border-[#E4DFD3]'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust Highlights Strip with clean editorial typography */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-3 border-t border-[#E4DFD3]/80">
              <div>
                <div className="text-2xl font-bold text-[#24483F] font-['Outfit'] tabular-nums tracking-tight">12</div>
                <div className="text-xs text-[#687E77] mt-0.5 font-medium">Supported Districts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#24483F] font-['Outfit'] tabular-nums tracking-tight">20+</div>
                <div className="text-xs text-[#687E77] mt-0.5 font-medium">Curated Destinations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#D58B65] font-['Outfit'] tabular-nums tracking-tight">100%</div>
                <div className="text-xs text-[#687E77] mt-0.5 font-medium">Verified Local Stories</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#24483F] font-['Outfit'] tabular-nums tracking-tight">Zero</div>
                <div className="text-xs text-[#687E77] mt-0.5 font-medium">Paid API Walls</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-End Travel Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(36,72,63,0.12)] border border-[#E4DFD3] bg-white aspect-[4/3] group">
              <img
                src="/src/assets/images/hero_haryana_landscape_1793859250332.jpg"
                alt="Scenic Morni Hills Tikkar Taal Haryana at sunrise"
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24483F]/90 via-[#24483F]/30 to-transparent" />
              
              {/* Bottom Card Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[11px] font-semibold text-[#F8F7F2] mb-2">
                  <MapPin className="w-3 h-3 text-[#D58B65]" />
                  <span>Tikkar Taal · Morni Hills, Panchkula</span>
                </div>
                <h3 className="text-xl font-bold font-['Outfit'] text-white">
                  Haryana’s Shivalik Foothill Lakes
                </h3>
                <p className="text-xs text-[#EBF0E9] mt-1 font-light line-clamp-2">
                  Quiet pine-scented ridge trails, serene twin natural lakes, and migratory waterfowl.
                </p>
              </div>
            </div>

            {/* Floating Discovery Tag */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-3.5 rounded-2xl border border-[#E4DFD3] shadow-[0_10px_25px_rgba(36,72,63,0.1)] items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#EDF2EB] flex items-center justify-center text-[#24483F]">
                <Sparkles className="w-4 h-4 text-[#D58B65]" />
              </div>
              <div className="pr-2">
                <div className="text-xs font-bold text-[#24483F]">Curated Local Lens</div>
                <div className="text-[11px] text-[#687E77]">Authentic Indian travel startup</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
