import React, { useState, useMemo } from 'react';
import { Search, MapPin, Bookmark, Clock, ArrowUpRight, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { DESTINATIONS, Destination, SUPPORTED_CITIES, HaryanaCity } from '../data/haryanaData';

interface ExploreDestinationsProps {
  initialSearchQuery?: string;
  initialCity?: HaryanaCity;
  onSelectDestination: (destination: Destination) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const ExploreDestinations: React.FC<ExploreDestinationsProps> = ({
  initialSearchQuery = '',
  initialCity,
  onSelectDestination,
  favorites,
  onToggleFavorite
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [selectedCity, setSelectedCity] = useState<HaryanaCity | 'All'>(initialCity || 'All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [onlyHiddenGems, setOnlyHiddenGems] = useState(false);

  // Sync state if initial props change
  React.useEffect(() => {
    if (initialCity) setSelectedCity(initialCity);
  }, [initialCity]);

  React.useEffect(() => {
    if (initialSearchQuery) setSearchQuery(initialSearchQuery);
  }, [initialSearchQuery]);

  const categories = ['All', 'Heritage', 'Nature', 'Spiritual', 'Culinary', 'Handicraft'];

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((item) => {
      // City filter
      if (selectedCity !== 'All' && item.city !== selectedCity) {
        return false;
      }
      // Hidden Gem checkbox/toggle
      if (onlyHiddenGems && !item.isHiddenGem) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Search query across title, city, tags, description, highlights
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesCity = item.city.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesStory = item.detailedStory.toLowerCase().includes(query);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(query));
        const matchesHighlights = item.highlights.some((h) => h.toLowerCase().includes(query));
        if (!matchesTitle && !matchesCity && !matchesDesc && !matchesStory && !matchesTags && !matchesHighlights) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCity, selectedCategory, onlyHiddenGems, searchQuery]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCity('All');
    setSelectedCategory('All');
    setOnlyHiddenGems(false);
  };

  return (
    <section id="explore" className="py-24 bg-[#F8F7F2] text-[#26332F] border-b border-[#E4DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-[#24483F] uppercase mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D58B65]" />
              <span>All 12 Haryana Districts · Real Travel Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#24483F] font-['Outfit']">
              Explore Haryana Destinations
            </h2>
            <p className="text-[#4F635C] mt-2 max-w-2xl text-sm sm:text-base leading-relaxed">
              From the Shivalik pine slopes of Panchkula to the ancient Saraswati basin of Sirsa. Filter by district, heritage, nature trails, or quiet culinary hubs.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-auto text-xs text-[#687E77] font-medium">
            <span>Showing</span>
            <strong className="text-[#24483F] font-bold tabular-nums">{filteredDestinations.length}</strong>
            <span>of {DESTINATIONS.length} curated destinations</span>
          </div>
        </div>

        {/* Filter Controls Panel */}
        <div className="bg-white p-6 rounded-2xl border border-[#E4DFD3] shadow-[0_4px_24px_rgba(36,72,63,0.04)] mb-12 space-y-5">
          
          {/* Top Bar: Search Input + Hidden Gems Toggle */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C9E97]" />
              <input
                type="text"
                placeholder="Search any destination, town, attraction, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-3 bg-[#F8F7F2] border border-[#E4DFD3] rounded-xl text-xs sm:text-sm text-[#26332F] placeholder-[#8C9E97] focus:outline-none focus:border-[#24483F] focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#687E77] hover:text-[#26332F] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            <button
              onClick={() => setOnlyHiddenGems(!onlyHiddenGems)}
              className={`px-4 py-3 text-xs font-semibold rounded-xl border transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer ${
                onlyHiddenGems
                  ? 'bg-[#FAEEE7] border-[#D58B65] text-[#BE744F] shadow-2xs'
                  : 'bg-[#F8F7F2] border-[#E4DFD3] text-[#4F635C] hover:bg-[#EDF2EB]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${onlyHiddenGems ? 'bg-[#D58B65]' : 'bg-[#A8B9A1]'}`} />
              <span>Hidden Gems Only</span>
            </button>
          </div>

          {/* District Selector Tabs */}
          <div>
            <div className="text-xs font-semibold text-[#687E77] uppercase tracking-wide mb-2.5 flex items-center justify-between">
              <span>Select District</span>
              {selectedCity !== 'All' && (
                <button
                  onClick={() => setSelectedCity('All')}
                  className="text-[#24483F] hover:underline capitalize text-[11px] font-semibold cursor-pointer"
                >
                  View All Districts
                </button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
              <button
                onClick={() => setSelectedCity('All')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedCity === 'All'
                    ? 'bg-[#24483F] text-[#F8F7F2] shadow-xs'
                    : 'bg-[#F8F7F2] hover:bg-[#EDF2EB] text-[#4F635C] border border-[#E4DFD3]'
                }`}
              >
                All Haryana ({DESTINATIONS.length})
              </button>
              {SUPPORTED_CITIES.map((city) => {
                const count = DESTINATIONS.filter((d) => d.city === city.name).length;
                return (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city.name)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                      selectedCity === city.name
                        ? 'bg-[#24483F] text-[#F8F7F2] shadow-xs font-semibold'
                        : 'bg-[#F8F7F2] hover:bg-[#EDF2EB] text-[#4F635C] border border-[#E4DFD3]'
                    }`}
                  >
                    {city.name} {count > 0 && <span className="opacity-70 tabular-nums font-normal">({count})</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="pt-3 border-t border-[#E4DFD3]/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#687E77] font-semibold mr-1">Experience Type:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1 text-xs font-semibold rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#EDF2EB] text-[#24483F] border border-[#C1CFBC]'
                      : 'text-[#4F635C] hover:text-[#24483F] hover:bg-[#F8F7F2]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {(selectedCity !== 'All' || selectedCategory !== 'All' || searchQuery || onlyHiddenGems) && (
              <button
                onClick={resetFilters}
                className="text-xs text-[#D58B65] hover:text-[#BE744F] flex items-center gap-1.5 cursor-pointer ml-auto font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset filters</span>
              </button>
            )}
          </div>

        </div>

        {/* Destination Cards Grid */}
        {filteredDestinations.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E4DFD3] p-12 text-center max-w-lg mx-auto shadow-sm">
            <MapPin className="w-10 h-10 text-[#C1CFBC] mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-[#24483F] mb-1">No destinations match your filters</h3>
            <p className="text-xs text-[#4F635C] mb-6">
              Try resetting your search query or switching to &ldquo;All Haryana&rdquo; to browse all districts.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 bg-[#24483F] text-white text-xs font-semibold rounded-xl hover:bg-[#162C26] transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => {
              const isFav = favorites.includes(dest.id);
              return (
                <article
                  key={dest.id}
                  className="group bg-white rounded-2xl border border-[#E4DFD3] overflow-hidden shadow-[0_4px_20px_rgba(36,72,63,0.05)] hover:shadow-[0_16px_36px_rgba(36,72,63,0.1)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Photo Container with subtle gradient */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                      <img
                        src={dest.image}
                        alt={dest.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      
                      {/* Dark gradient for text legibility on top of photo */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      {/* Bookmark Favorite Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFavorite(dest.id);
                        }}
                        className={`absolute top-3.5 right-3.5 p-2 rounded-xl backdrop-blur-md transition-all duration-200 cursor-pointer ${
                          isFav
                            ? 'bg-[#D58B65] text-white shadow-sm'
                            : 'bg-black/40 text-white hover:bg-black/60'
                        }`}
                        aria-label={isFav ? 'Remove from favorites' : 'Save to favorites'}
                      >
                        <Bookmark className={`w-4 h-4 ${isFav ? 'fill-current' : ''}`} />
                      </button>

                      {/* City & Category quiet text on image bottom */}
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <div className="flex items-center gap-2 text-xs text-stone-200 font-medium">
                          <span className="text-white font-semibold flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#A8B9A1]" />
                            {dest.city}
                          </span>
                          <span aria-hidden="true" className="opacity-60">·</span>
                          <span className="text-white/90">{dest.category}</span>
                          {dest.isHiddenGem && (
                            <>
                              <span aria-hidden="true" className="opacity-60">·</span>
                              <span className="text-[#D58B65] font-semibold">Hidden Gem</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-6">
                      {/* Verification Status with Deep Forest Green */}
                      <div className="flex items-center gap-1.5 text-xs text-[#24483F] font-semibold mb-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#24483F]" />
                        <span>{dest.verificationStatus}</span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-lg font-bold text-[#24483F] font-['Outfit'] leading-snug group-hover:text-[#D58B65] transition-colors">
                        {dest.title}
                      </h3>
                      <p className="text-xs text-[#687E77] mt-1.5 line-clamp-2 leading-relaxed">
                        {dest.tagline}
                      </p>

                      {/* Brief description snippet */}
                      <p className="text-xs text-[#4F635C] mt-3 line-clamp-2 leading-relaxed font-normal">
                        {dest.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-4 pt-3.5 border-t border-[#E4DFD3]/80 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-[#687E77]">
                        {dest.highlights.slice(0, 3).map((h, idx) => (
                          <span key={idx}>
                            {idx > 0 && <span className="mr-1 text-[#C1CFBC]">·</span>}
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Info: Estimated Cost & Duration + CTA */}
                  <div className="p-6 pt-0">
                    <div className="pt-3.5 border-t border-[#E4DFD3]/80 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 text-[#687E77]">
                        <Clock className="w-3.5 h-3.5 text-[#A8B9A1]" />
                        <span className="tabular-nums font-medium">{dest.idealDuration}</span>
                      </div>

                      <button
                        onClick={() => onSelectDestination(dest)}
                        className="font-semibold text-[#24483F] hover:text-[#D58B65] flex items-center gap-1 transition-all group-hover:translate-x-0.5 cursor-pointer"
                      >
                        <span>Explore Story</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
