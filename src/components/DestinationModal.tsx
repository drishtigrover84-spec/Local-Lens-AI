import React from 'react';
import { X, MapPin, Clock, Wallet, ShieldCheck, Bookmark, Check, Sparkles, Navigation } from 'lucide-react';
import { Destination } from '../data/haryanaData';

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onPlanTripForThis: (dest: Destination) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  onClose,
  isFavorite,
  onToggleFavorite,
  onPlanTripForThis
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      
      {/* Modal Surface */}
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-[0_24px_60px_rgba(36,72,63,0.2)] border border-[#E4DFD3] animate-in fade-in zoom-in-95 duration-200 my-8"
        role="dialog"
        aria-modal="true"
      >
        
        {/* Close Button Top Right */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Photo Banner */}
        <div className="relative aspect-[16/9] w-full bg-slate-900">
          <img
            src={destination.image}
            alt={destination.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#24483F]/90 via-[#24483F]/30 to-transparent" />

          {/* Bottom Overlay Title & City */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 text-xs text-[#F8F7F2] font-medium mb-1.5">
              <span className="flex items-center gap-1.5 font-semibold text-white">
                <MapPin className="w-3.5 h-3.5 text-[#A8B9A1]" />
                {destination.city}
              </span>
              <span aria-hidden="true" className="opacity-50">·</span>
              <span className="text-[#EDF2EB]">{destination.category}</span>
              {destination.isHiddenGem && (
                <>
                  <span aria-hidden="true" className="opacity-50">·</span>
                  <span className="text-[#D58B65] font-semibold">Hidden Gem Radar Verified</span>
                </>
              )}
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
              {destination.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#EDF2EB] mt-1 max-w-xl font-normal leading-relaxed">
              {destination.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto bg-white text-[#26332F]">
          
          {/* Verification Badge & Favorite bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#E4DFD3]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#24483F]">
              <ShieldCheck className="w-4 h-4 text-[#24483F]" />
              <span>{destination.verificationStatus}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onToggleFavorite(destination.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                  isFavorite
                    ? 'bg-[#FAEEE7] text-[#BE744F] border-[#D58B65] shadow-xs'
                    : 'bg-[#F8F7F2] text-[#4F635C] border-[#E4DFD3] hover:bg-[#EDF2EB]'
                }`}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isFavorite ? 'fill-[#D58B65] text-[#D58B65]' : 'text-[#8C9E97]'}`} />
                <span>{isFavorite ? 'Saved in Favourites' : 'Save Destination'}</span>
              </button>
            </div>
          </div>

          {/* Historical & Cultural Backstory */}
          <div>
            <h3 className="text-xs font-semibold text-[#687E77] uppercase tracking-wider mb-2">
              Historical & Cultural Narrative
            </h3>
            <p className="text-sm text-[#26332F] leading-relaxed font-normal">
              {destination.detailedStory}
            </p>
          </div>

          {/* Reasons to Visit */}
          <div className="bg-[#F8F7F2] p-5 rounded-xl border border-[#E4DFD3]">
            <h3 className="text-xs font-bold text-[#24483F] uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#D58B65]" />
              <span>Why You Should Visit</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#4F635C]">
              {destination.reasonsToVisit.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-3.5 h-3.5 text-[#24483F] shrink-0 mt-0.5" />
                  <span className="text-[#26332F]">{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Local Secrets & Insider Tips */}
          <div>
            <h3 className="text-xs font-semibold text-[#D58B65] uppercase tracking-wider mb-2">
              Local Insider Tips
            </h3>
            <div className="space-y-2">
              {destination.localTips.map((tip, idx) => (
                <div key={idx} className="bg-[#FAEEE7] p-4 rounded-xl border border-[#D58B65]/30 text-xs text-[#26332F] leading-relaxed">
                  {tip}
                </div>
              ))}
            </div>
          </div>

          {/* Practical Logistics Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#E4DFD3] text-xs text-[#687E77]">
            <div className="flex items-start gap-2.5 bg-[#F8F7F2] p-3 rounded-xl border border-[#E4DFD3]">
              <Clock className="w-4 h-4 text-[#24483F] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#24483F] block">Timings & Ideal Duration:</span>
                <span className="text-[#4F635C]">{destination.timings} ({destination.idealDuration})</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-[#F8F7F2] p-3 rounded-xl border border-[#E4DFD3]">
              <Wallet className="w-4 h-4 text-[#D58B65] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#24483F] block">Estimated Cost:</span>
                <span className="text-[#4F635C]">{destination.estimatedCost}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-[#F8F7F2] p-3 rounded-xl border border-[#E4DFD3]">
              <Navigation className="w-4 h-4 text-[#24483F] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#24483F] block">Nearest Transit Hub:</span>
                <span className="text-[#4F635C]">{destination.nearestTransit}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-[#F8F7F2] p-3 rounded-xl border border-[#E4DFD3]">
              <MapPin className="w-4 h-4 text-[#D58B65] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#24483F] block">Exact Address:</span>
                <span className="text-[#4F635C]">{destination.locationDetails}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#F8F7F2] border-t border-[#E4DFD3] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-[#687E77] text-center sm:text-left">
            Information independently curated with local cultural historians & travel contributors.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2.5 bg-white hover:bg-stone-100 text-[#26332F] font-semibold text-xs rounded-xl border border-[#E4DFD3] transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onPlanTripForThis(destination);
              }}
              className="flex-1 sm:flex-initial px-5 py-2.5 bg-[#24483F] hover:bg-[#162C26] text-white font-semibold text-xs rounded-xl transition-all duration-200 cursor-pointer shadow-xs active:scale-98"
            >
              Plan Trip To {destination.city}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
