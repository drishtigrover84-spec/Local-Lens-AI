import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, MapPin } from 'lucide-react';
import { DESTINATIONS, Destination } from '../data/haryanaData';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: string[];
  onRemoveFavorite: (id: string) => void;
  onClearFavorites: () => void;
  onSelectDestination: (dest: Destination) => void;
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFavorite,
  onClearFavorites,
  onSelectDestination
}) => {
  if (!isOpen) return null;

  const savedDestinations = DESTINATIONS.filter((d) => favorites.includes(d.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end">
      
      {/* Drawer Surface */}
      <div className="w-full max-w-md bg-white h-full shadow-[0_20px_60px_rgba(36,72,63,0.2)] flex flex-col justify-between border-l border-[#E4DFD3] animate-in slide-in-from-right duration-250">
        
        {/* Header in Deep Forest Green #24483F */}
        <div className="p-6 bg-[#24483F] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <Bookmark className="w-5 h-5 text-[#D58B65] fill-[#D58B65]" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Outfit'] text-white">Saved Destinations</h3>
              <div className="text-xs text-[#A8B9A1]">
                {savedDestinations.length} destination{savedDestinations.length === 1 ? '' : 's'} bookmarked
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close saved drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List of Saved Destinations */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-[#F8F7F2]">
          {savedDestinations.length === 0 ? (
            <div className="text-center py-20 px-4">
              <Bookmark className="w-12 h-12 text-[#C1CFBC] mx-auto mb-3" />
              <h4 className="text-base font-semibold text-[#24483F] mb-1">No saved places yet</h4>
              <p className="text-xs text-[#4F635C] mb-6 leading-relaxed max-w-xs mx-auto">
                Click the bookmark icon on any destination or hidden gem card to save it to your personal travel shortlist.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#24483F] hover:bg-[#162C26] text-white text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer shadow-xs"
              >
                Explore Destinations
              </button>
            </div>
          ) : (
            savedDestinations.map((dest) => (
              <div
                key={dest.id}
                className="bg-white rounded-2xl border border-[#E4DFD3] p-4 flex gap-3.5 items-start justify-between group hover:border-[#24483F]/40 shadow-[0_2px_10px_rgba(36,72,63,0.03)] transition-all duration-200"
              >
                <img
                  src={dest.image}
                  alt={dest.title}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-xl object-cover shrink-0"
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#24483F] font-semibold">
                    <MapPin className="w-3 h-3 text-[#24483F]" />
                    <span>{dest.city}</span>
                    <span aria-hidden="true" className="text-[#A8B9A1]">·</span>
                    <span className="text-[#687E77] font-normal">{dest.category}</span>
                  </div>

                  <h5 className="text-xs font-bold text-[#24483F] truncate mt-1 font-['Outfit']">
                    {dest.title}
                  </h5>

                  <p className="text-[11px] text-[#4F635C] truncate mt-0.5">
                    {dest.tagline}
                  </p>

                  <div className="mt-2.5 flex items-center gap-3">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectDestination(dest);
                      }}
                      className="text-xs font-semibold text-[#24483F] hover:text-[#D58B65] flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Story</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onRemoveFavorite(dest.id)}
                  className="p-1.5 text-[#8C9E97] hover:text-rose-600 rounded-lg transition-colors cursor-pointer shrink-0"
                  title="Remove from favorites"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedDestinations.length > 0 && (
          <div className="p-4 bg-white border-t border-[#E4DFD3] flex items-center justify-between">
            <button
              onClick={onClearFavorites}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold cursor-pointer"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-[#24483F] text-white text-xs font-semibold rounded-xl hover:bg-[#162C26] transition-colors cursor-pointer shadow-xs"
            >
              Done
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
