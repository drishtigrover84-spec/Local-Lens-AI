import React from 'react';
import { Compass, Heart } from 'lucide-react';
import { SUPPORTED_CITIES, HaryanaCity } from '../data/haryanaData';

interface FooterProps {
  onCityClick: (city: HaryanaCity) => void;
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onCityClick, onNavigate }) => {
  return (
    <footer className="bg-[#162C26] text-[#A8B9A1] text-xs border-t border-[#2C584D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C584D]">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#24483F] border border-[#386C5F] flex items-center justify-center text-[#F8F7F2]">
                <Compass className="w-5 h-5 text-[#A8B9A1]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#F8F7F2] font-['Outfit']">
                LOCAL LENS <span className="text-[#D58B65]">AI</span>
              </span>
            </div>
            <p className="text-sm text-[#DFE7DC] font-normal max-w-sm leading-relaxed">
              Discover Hidden Places. Experience Local Stories. A modern travel discovery platform spotlighting the cultural, spiritual, and ecological tapestry of Haryana, India.
            </p>
            <div className="pt-2 text-xs text-[#8FA387]">
              Zero fake live AI claims · Curated with local residents & cultural historians · Open travel archives
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#F8F7F2] uppercase tracking-wider">
              Explore Platform
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => onNavigate('explore')}
                  className="hover:text-[#F8F7F2] transition-colors cursor-pointer text-left"
                >
                  All 12 Supported Districts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('radar')}
                  className="hover:text-[#D58B65] transition-colors cursor-pointer text-left"
                >
                  Hidden Gem Radar
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('planner')}
                  className="hover:text-[#F8F7F2] transition-colors cursor-pointer text-left"
                >
                  AI Trip Planner
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('culture')}
                  className="hover:text-[#F8F7F2] transition-colors cursor-pointer text-left"
                >
                  Haryana Food & Handicrafts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('guide')}
                  className="hover:text-[#F8F7F2] transition-colors cursor-pointer text-left"
                >
                  Interactive Local Concierge
                </button>
              </li>
            </ul>
          </div>

          {/* Districts Directory */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-[#F8F7F2] uppercase tracking-wider">
              Featured Haryana Districts
            </h4>
            <div className="flex flex-wrap gap-2">
              {SUPPORTED_CITIES.map((city) => (
                <button
                  key={city.name}
                  onClick={() => onCityClick(city.name)}
                  className="px-3 py-1 bg-[#24483F] hover:bg-[#2C584D] rounded-xl text-[#DFE7DC] hover:text-[#F8F7F2] transition-all duration-200 cursor-pointer text-xs border border-[#386C5F]"
                >
                  {city.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8FA387] text-[11px]">
          <div>
            &copy; 2026 LOCAL LENS AI · Crafted for Haryana Tourism & Cultural Discovery.
          </div>
          <div className="flex items-center gap-1 text-[#DFE7DC]">
            <span>Celebrating authentic stories across Haryana</span>
            <Heart className="w-3.5 h-3.5 text-[#D58B65] fill-[#D58B65] mx-1" />
          </div>
        </div>

      </div>
    </footer>
  );
};
