import React from 'react';
import { Bookmark, Compass } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  favoritesCount: number;
  onOpenFavorites: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  favoritesCount,
  onOpenFavorites
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F2]/95 backdrop-blur-md border-b border-[#E4DFD3] text-[#26332F] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark with icon */}
        <button 
          onClick={() => onNavigate('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-[#24483F] flex items-center justify-center text-[#F8F7F2] shadow-xs group-hover:scale-105 transition-transform duration-200">
            <Compass className="w-5 h-5 text-[#A8B9A1]" />
          </div>
          <div className="whitespace-nowrap shrink-0">
            <span className="text-xl font-bold tracking-tight text-[#24483F] font-['Outfit'] block leading-none">
              LOCAL LENS <span className="text-[#D58B65] font-semibold">AI</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#687E77] font-semibold block mt-1">
              Haryana Tourism
            </span>
          </div>
        </button>

        {/* Zone 2: Clean single-line text navigation links with refined hover/active states */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#4F635C]">
          <button
            onClick={() => onNavigate('explore')}
            className={`transition-all duration-200 whitespace-nowrap shrink-0 py-1.5 relative cursor-pointer hover:text-[#24483F] ${
              activeSection === 'explore' ? 'text-[#24483F] font-semibold' : ''
            }`}
          >
            <span>Explore Haryana</span>
            {activeSection === 'explore' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#24483F] rounded-full" />
            )}
          </button>
          <button
            onClick={() => onNavigate('radar')}
            className={`transition-all duration-200 whitespace-nowrap shrink-0 py-1.5 relative cursor-pointer hover:text-[#24483F] ${
              activeSection === 'radar' ? 'text-[#24483F] font-semibold' : ''
            }`}
          >
            <span>Hidden Gem Radar</span>
            {activeSection === 'radar' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D58B65] rounded-full" />
            )}
          </button>
          <button
            onClick={() => onNavigate('planner')}
            className={`transition-all duration-200 whitespace-nowrap shrink-0 py-1.5 relative cursor-pointer hover:text-[#24483F] ${
              activeSection === 'planner' ? 'text-[#24483F] font-semibold' : ''
            }`}
          >
            <span>Trip Planner</span>
            {activeSection === 'planner' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#24483F] rounded-full" />
            )}
          </button>
          <button
            onClick={() => onNavigate('culture')}
            className={`transition-all duration-200 whitespace-nowrap shrink-0 py-1.5 relative cursor-pointer hover:text-[#24483F] ${
              activeSection === 'culture' ? 'text-[#24483F] font-semibold' : ''
            }`}
          >
            <span>Culture & Food</span>
            {activeSection === 'culture' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#24483F] rounded-full" />
            )}
          </button>
          <button
            onClick={() => onNavigate('guide')}
            className={`transition-all duration-200 whitespace-nowrap shrink-0 py-1.5 relative cursor-pointer hover:text-[#24483F] ${
              activeSection === 'guide' ? 'text-[#24483F] font-semibold' : ''
            }`}
          >
            <span>Local Guide</span>
            {activeSection === 'guide' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#24483F] rounded-full" />
            )}
          </button>
        </nav>

        {/* Zone 3: 1 primary action + saved bookmarks */}
        <div className="flex items-center gap-3.5 shrink-0">
          <button
            onClick={onOpenFavorites}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#26332F] bg-white hover:bg-[#F1EDE4] rounded-xl border border-[#E4DFD3] transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer shadow-2xs focus-visible:ring-2 focus-visible:ring-[#24483F]"
            aria-label="View saved destinations"
          >
            <Bookmark className="w-3.5 h-3.5 text-[#D58B65]" />
            <span className="hidden sm:inline">Saved</span>
            <span className="ml-0.5 px-1.5 py-0.5 text-[11px] font-semibold bg-[#FAEEE7] text-[#BE744F] rounded-md tabular-nums">
              {favoritesCount}
            </span>
          </button>

          <button
            onClick={() => onNavigate('planner')}
            className="px-5 py-2.5 text-xs font-semibold text-[#F8F7F2] bg-[#24483F] hover:bg-[#162C26] active:scale-98 rounded-xl shadow-xs transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#D58B65]"
          >
            Plan My Trip
          </button>
        </div>

      </div>
    </header>
  );
};
