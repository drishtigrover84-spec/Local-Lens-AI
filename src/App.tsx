import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ExploreDestinations } from './components/ExploreDestinations';
import { HiddenGemRadar } from './components/HiddenGemRadar';
import { TripPlanner } from './components/TripPlanner';
import { LocalCulture } from './components/LocalCulture';
import { LocalGuideChat } from './components/LocalGuideChat';
import { DestinationModal } from './components/DestinationModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { Footer } from './components/Footer';
import { Destination, HaryanaCity } from './data/haryanaData';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<HaryanaCity | undefined>(undefined);
  
  // Bookmarks / Favorites with local storage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('local_lens_favorites');
      return saved ? JSON.parse(saved) : ['brahma-sarovar', 'tikkar-taal-morni', 'yadavindra-pinjore'];
    } catch {
      return ['brahma-sarovar', 'tikkar-taal-morni', 'yadavindra-pinjore'];
    }
  });

  const [activeModalDestination, setActiveModalDestination] = useState<Destination | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('local_lens_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.warn('LocalStorage save failed', e);
    }
  }, [favorites]);

  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRemoveFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item !== id));
  };

  const handleClearFavorites = () => {
    setFavorites([]);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHeroSearch = (query: string, city?: HaryanaCity) => {
    setSearchQuery(query);
    setSelectedCity(city);
    handleNavigate('explore');
  };

  const handleCitySelectFromFooter = (city: HaryanaCity) => {
    setSelectedCity(city);
    setSearchQuery('');
    handleNavigate('explore');
  };

  const handlePlanTripForDestination = (dest: Destination) => {
    handleNavigate('planner');
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-[#26332F] flex flex-col font-['Plus_Jakarta_Sans'] selection:bg-[#24483F] selection:text-[#F8F7F2]">
      
      {/* 3-Zone Top Bar Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        favoritesCount={favorites.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection
          onSearch={handleHeroSearch}
          onExploreClick={() => handleNavigate('explore')}
          onPlannerClick={() => handleNavigate('planner')}
        />

        {/* 2. Explore Haryana Destinations (All 12 Districts) */}
        <ExploreDestinations
          initialSearchQuery={searchQuery}
          initialCity={selectedCity}
          onSelectDestination={(dest) => setActiveModalDestination(dest)}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* 3. Hidden Gem Radar */}
        <HiddenGemRadar
          onSelectDestination={(dest) => setActiveModalDestination(dest)}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
        />

        {/* 4. AI Trip Planner */}
        <TripPlanner />

        {/* 5. Local Culture, Food & Handicrafts */}
        <LocalCulture />

        {/* 6. AI Local Guide Interactive Chatbot */}
        <LocalGuideChat />
      </main>

      {/* Quiet Footer */}
      <Footer
        onCityClick={handleCitySelectFromFooter}
        onNavigate={handleNavigate}
      />

      {/* Destination Modal */}
      <DestinationModal
        destination={activeModalDestination}
        onClose={() => setActiveModalDestination(null)}
        isFavorite={activeModalDestination ? favorites.includes(activeModalDestination.id) : false}
        onToggleFavorite={handleToggleFavorite}
        onPlanTripForThis={handlePlanTripForDestination}
      />

      {/* Saved Places Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
        onClearFavorites={handleClearFavorites}
        onSelectDestination={(dest) => {
          setIsFavoritesOpen(false);
          setActiveModalDestination(dest);
        }}
      />

    </div>
  );
}
