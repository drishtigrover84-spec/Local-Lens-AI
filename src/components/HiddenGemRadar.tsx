import React, { useState } from 'react';
import { Compass, Sparkles, MapPin, ArrowRight, ShieldCheck, Bookmark } from 'lucide-react';
import { DESTINATIONS, Destination } from '../data/haryanaData';

interface HiddenGemRadarProps {
  onSelectDestination: (dest: Destination) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const HiddenGemRadar: React.FC<HiddenGemRadarProps> = ({
  onSelectDestination,
  favorites,
  onToggleFavorite
}) => {
  const [selectedGemId, setSelectedGemId] = useState<string>('tikkar-taal-morni');

  // Filter out destinations marked as hidden gems
  const hiddenGems = DESTINATIONS.filter((d) => d.isHiddenGem).sort(
    (a, b) => (b.radarScore || 90) - (a.radarScore || 90)
  );

  const activeGem = hiddenGems.find((g) => g.id === selectedGemId) || hiddenGems[0];

  return (
    <section id="radar" className="py-24 bg-[#EDF2EB]/60 text-[#26332F] relative overflow-hidden border-b border-[#E4DFD3]">
      {/* Soft Ambient Organic Blooms */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A8B9A1]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#D58B65]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#24483F] uppercase mb-2">
            <Compass className="w-3.5 h-3.5 text-[#D58B65]" />
            <span>Off-The-Beaten-Path Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#24483F] font-['Outfit']">
            Hidden Gem Radar
          </h2>
          <p className="text-[#4F635C] mt-2 text-sm sm:text-base leading-relaxed">
            Unpublished village trails, ancient ruins hidden in plain sight, and peaceful lakes far from tourist buses. Verified by local cultural contributors across Haryana.
          </p>
        </div>

        {/* Radar Layout: Master-Detail Curated Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Radar List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-semibold text-[#687E77] uppercase tracking-wider mb-3 flex items-center justify-between">
              <span>Curated Radar Findings</span>
              <span className="text-[#24483F] font-bold tabular-nums">{hiddenGems.length} Spots</span>
            </div>

            <div className="space-y-2.5 max-h-[590px] overflow-y-auto pr-1">
              {hiddenGems.map((gem) => {
                const isSelected = gem.id === activeGem.id;
                return (
                  <button
                    key={gem.id}
                    onClick={() => setSelectedGemId(gem.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#24483F] shadow-[0_8px_24px_rgba(36,72,63,0.1)]'
                        : 'bg-white/70 border-[#E4DFD3] hover:bg-white text-[#4F635C]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 text-xs font-medium">
                          <MapPin className="w-3.5 h-3.5 text-[#24483F]" />
                          <span className="text-[#24483F] font-bold">{gem.city}</span>
                          <span aria-hidden="true" className="text-[#A8B9A1]">·</span>
                          <span className="text-[#687E77]">{gem.category}</span>
                        </div>
                        <h4 className="text-sm font-bold text-[#24483F] mt-1.5 font-['Outfit'] leading-snug">
                          {gem.title}
                        </h4>
                        <p className="text-xs text-[#4F635C] mt-1 line-clamp-1">
                          {gem.tagline}
                        </p>
                      </div>

                      {/* Radar score badge */}
                      {gem.radarScore && (
                        <div className="text-right shrink-0 bg-[#EDF2EB] px-2.5 py-1.5 rounded-xl border border-[#C1CFBC]">
                          <div className="text-[10px] uppercase text-[#687E77] font-semibold">Radar</div>
                          <div className="text-sm font-bold text-[#D58B65] tabular-nums leading-none mt-0.5">
                            {gem.radarScore}
                          </div>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: In-Depth Spotlight View of Active Gem */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E4DFD3] overflow-hidden shadow-[0_16px_40px_rgba(36,72,63,0.08)]">
            {/* Spotlight Image with warm contrast scrim */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100">
              <img
                src={activeGem.image}
                alt={activeGem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24483F]/90 via-[#24483F]/30 to-transparent" />

              {/* Top overlay action buttons */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onToggleFavorite(activeGem.id)}
                  className={`p-2.5 rounded-xl backdrop-blur-md transition-all duration-200 cursor-pointer ${
                    favorites.includes(activeGem.id)
                      ? 'bg-[#D58B65] text-white shadow-sm'
                      : 'bg-black/40 text-white hover:bg-black/60'
                  }`}
                  aria-label="Save to favorites"
                >
                  <Bookmark className={`w-4 h-4 ${favorites.includes(activeGem.id) ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Bottom overlay badge info */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="flex items-center gap-2 text-xs text-[#F8F7F2] font-medium mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#A8B9A1]" />
                  <span className="text-[#A8B9A1] font-semibold">{activeGem.verificationStatus}</span>
                  <span aria-hidden="true" className="opacity-60">·</span>
                  <span>{activeGem.city}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                  {activeGem.title}
                </h3>
              </div>
            </div>

            {/* Spotlight Content */}
            <div className="p-7 sm:p-8 space-y-6">
              
              {/* Detailed Backstory */}
              <div>
                <h4 className="text-xs font-semibold text-[#687E77] uppercase tracking-wider mb-2">
                  The Untold Local Story
                </h4>
                <p className="text-sm text-[#26332F] leading-relaxed font-normal">
                  {activeGem.detailedStory}
                </p>
              </div>

              {/* Why Visit Reasons */}
              <div className="bg-[#F8F7F2] p-5 rounded-xl border border-[#E4DFD3]">
                <h4 className="text-xs font-semibold text-[#24483F] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D58B65]" />
                  <span>Reasons to Visit</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#4F635C]">
                  {activeGem.reasonsToVisit.map((reason, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-[#D58B65] font-bold shrink-0 mt-0.5">·</span>
                      <span className="leading-relaxed text-[#26332F]">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Local Secret Tips */}
              <div>
                <h4 className="text-xs font-semibold text-[#D58B65] uppercase tracking-wider mb-2">
                  Insider Tip from Local Residents
                </h4>
                <div className="text-xs sm:text-[13px] text-[#26332F] bg-[#FAEEE7] border border-[#D58B65]/30 p-4 rounded-xl leading-relaxed">
                  {activeGem.localTips[0]}
                </div>
              </div>

              {/* Practical Details & Action */}
              <div className="pt-4 border-t border-[#E4DFD3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-[#4F635C]">
                  <div>Estimated Budget: <span className="text-[#24483F] font-bold">{activeGem.estimatedCost}</span></div>
                  <div className="mt-1">Best Season: <span className="text-[#24483F] font-semibold">{activeGem.bestSeason}</span></div>
                </div>

                <button
                  onClick={() => onSelectDestination(activeGem)}
                  className="px-6 py-2.5 bg-[#24483F] hover:bg-[#162C26] text-white font-semibold text-xs rounded-xl transition-all duration-200 flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer self-stretch sm:self-auto justify-center shadow-xs active:scale-98"
                >
                  <span>Read Complete Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
