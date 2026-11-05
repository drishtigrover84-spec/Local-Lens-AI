import React, { useState } from 'react';
import { Calendar, Wallet, Compass, MapPin, Copy, Check, Printer, Sparkles, AlertCircle } from 'lucide-react';
import { HaryanaCity, SUPPORTED_CITIES, generateSmartItinerary, GeneratedItinerary } from '../data/haryanaData';

export const TripPlanner: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<HaryanaCity | 'All Haryana'>('Kurukshetra');
  const [duration, setDuration] = useState<'1' | '2' | '3'>('2');
  const [budget, setBudget] = useState<'budget' | 'moderate' | 'premium'>('moderate');
  const [interest, setInterest] = useState<'heritage' | 'nature' | 'spiritual' | 'culture' | 'all'>('all');
  
  const [itinerary, setItinerary] = useState<GeneratedItinerary>(() => 
    generateSmartItinerary('Kurukshetra', '2', 'moderate', 'all')
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      const generated = generateSmartItinerary(selectedCity, duration, budget, interest);
      setItinerary(generated);
      setIsGenerating(false);
    }, 350);
  };

  const handleCopy = () => {
    let text = `LOCAL LENS AI - BESPOKE ITINERARY\n${itinerary.title}\nDestination: ${itinerary.destination}\nDuration: ${itinerary.tripLength} | Tier: ${itinerary.budgetTier}\nEstimated Budget: ${itinerary.totalEstimatedCost}\n\n`;
    itinerary.days.forEach((day) => {
      text += `DAY ${day.dayNumber}: ${day.title}\n${day.summary}\n`;
      day.slots.forEach((s) => {
        text += `• ${s.time}: ${s.title} (${s.location})\n  Plan: ${s.description}\n  Food: ${s.foodRecommendation}\n  Transit: ${s.transportTip}\n`;
      });
      text += '\n';
    });
    text += `Budget Breakdown:\nStay: ${itinerary.budgetBreakdown.stay}\nFood: ${itinerary.budgetBreakdown.food}\nTransport: ${itinerary.budgetBreakdown.transport}\n\nLocal Etiquette: ${itinerary.localEtiquetteTip}`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="planner" className="py-24 bg-[#F8F7F2] text-[#26332F] border-b border-[#E4DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#24483F] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D58B65]" />
            <span>Algorithm-Driven Itinerary Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#24483F] font-['Outfit']">
            AI Trip Planner for Haryana
          </h2>
          <p className="text-[#4F635C] mt-2 text-sm sm:text-base leading-relaxed">
            Select your target district, travel duration, budget tier, and cultural interests. Our regional recommendation engine designs an optimized daily schedule with transport links and authentic dhaba stops.
          </p>
        </div>

        {/* Input Parameters Box - Styled like a luxury travel booking interface */}
        <form onSubmit={handleGenerate} className="bg-white p-6 sm:p-9 rounded-2xl border border-[#E4DFD3] shadow-[0_8px_30px_rgba(36,72,63,0.06)] mb-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 1. Destination City */}
            <div>
              <label className="block text-xs font-bold text-[#24483F] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#24483F]" />
                <span>Destination Focus</span>
              </label>
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value as HaryanaCity | 'All Haryana')}
                  className="w-full pl-3.5 pr-8 py-3 bg-[#F8F7F2] border border-[#E4DFD3] rounded-xl text-xs sm:text-sm font-medium text-[#26332F] focus:outline-none focus:border-[#24483F] focus:bg-white appearance-none cursor-pointer transition-colors"
                >
                  <option value="All Haryana">All Haryana (Statewide Highlights)</option>
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
            </div>

            {/* 2. Duration */}
            <div>
              <label className="block text-xs font-bold text-[#24483F] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#24483F]" />
                <span>Trip Duration</span>
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { value: '1', label: '1 Day' },
                  { value: '2', label: '2 Days' },
                  { value: '3', label: '3 Days' }
                ].map((d) => (
                  <button
                    key={d.value}
                    type="button"
                    onClick={() => setDuration(d.value as '1' | '2' | '3')}
                    className={`py-2.5 text-xs font-semibold rounded-xl border transition-all duration-200 cursor-pointer ${
                      duration === d.value
                        ? 'bg-[#24483F] text-white border-[#24483F] shadow-xs'
                        : 'bg-[#F8F7F2] text-[#4F635C] border-[#E4DFD3] hover:bg-[#EDF2EB]'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Budget Tier */}
            <div>
              <label className="block text-xs font-bold text-[#24483F] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                <Wallet className="w-3.5 h-3.5 text-[#24483F]" />
                <span>Budget Tier</span>
              </label>
              <div className="relative">
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value as 'budget' | 'moderate' | 'premium')}
                  className="w-full pl-3.5 pr-8 py-3 bg-[#F8F7F2] border border-[#E4DFD3] rounded-xl text-xs sm:text-sm font-medium text-[#26332F] focus:outline-none focus:border-[#24483F] focus:bg-white appearance-none cursor-pointer transition-colors"
                >
                  <option value="budget">Budget (Under ₹1,200/day)</option>
                  <option value="moderate">Moderate (₹1,200 - ₹2,500/day)</option>
                  <option value="premium">Premium (₹2,500 - ₹5,000/day)</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#687E77] text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* 4. Interests */}
            <div>
              <label className="block text-xs font-bold text-[#24483F] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#24483F]" />
                <span>Primary Interest</span>
              </label>
              <div className="relative">
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value as any)}
                  className="w-full pl-3.5 pr-8 py-3 bg-[#F8F7F2] border border-[#E4DFD3] rounded-xl text-xs sm:text-sm font-medium text-[#26332F] focus:outline-none focus:border-[#24483F] focus:bg-white appearance-none cursor-pointer transition-colors"
                >
                  <option value="all">All Experiences (Balanced)</option>
                  <option value="heritage">Heritage & Monuments</option>
                  <option value="nature">Nature Trails & Lakes</option>
                  <option value="spiritual">Sacred Shrines & Sarovars</option>
                  <option value="culture">Food & Artisan Crafts</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#687E77] text-xs">
                  ▼
                </div>
              </div>
            </div>

          </div>

          <div className="mt-7 pt-6 border-t border-[#E4DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#687E77]">
              <AlertCircle className="w-3.5 h-3.5 text-[#D58B65]" />
              <span>Budget estimates are projections based on regional public transit & dhaba rates.</span>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="px-7 py-3 bg-[#D58B65] hover:bg-[#BE744F] text-white font-semibold text-xs rounded-xl shadow-xs transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap active:scale-98"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>{isGenerating ? 'Compiling Itinerary...' : 'Generate Personalized Itinerary'}</span>
            </button>
          </div>
        </form>

        {/* Generated Itinerary Output - Bespoke Editorial Travel Journal Style */}
        <div className="bg-white rounded-2xl border border-[#E4DFD3] overflow-hidden shadow-[0_12px_40px_rgba(36,72,63,0.06)]">
          
          {/* Header Bar in Deep Forest Green #24483F */}
          <div className="bg-[#24483F] text-[#F8F7F2] p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs text-[#F8F7F2] font-medium mb-1.5">
                <span className="text-[#A8B9A1] font-bold">{itinerary.destination}</span>
                <span aria-hidden="true" className="opacity-50">·</span>
                <span>{itinerary.tripLength}</span>
                <span aria-hidden="true" className="opacity-50">·</span>
                <span className="text-[#D58B65] font-semibold">{itinerary.budgetTier}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Outfit'] text-white">
                {itinerary.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#EDF2EB] mt-1.5 font-normal">
                Estimated Total Trip Cost: <span className="font-semibold text-[#D58B65] tabular-nums">{itinerary.totalEstimatedCost}</span> per traveler
              </p>
            </div>

            {/* Quick Export Controls */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={handleCopy}
                className="px-4 py-2 text-xs font-semibold text-[#F8F7F2] bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#A8B9A1]" /> : <Copy className="w-3.5 h-3.5 text-[#A8B9A1]" />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Text'}</span>
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="px-4 py-2 text-xs font-semibold text-[#F8F7F2] bg-white/10 hover:bg-white/20 rounded-xl border border-white/15 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#A8B9A1]" />
                <span>Print Plan</span>
              </button>
            </div>
          </div>

          {/* Days Timetable */}
          <div className="p-7 sm:p-9 space-y-10">
            {itinerary.days.map((day) => (
              <div key={day.dayNumber} className="border-b border-[#E4DFD3] pb-9 last:border-b-0 last:pb-0">
                <div className="mb-5">
                  <div className="text-xs font-bold text-[#24483F] uppercase tracking-wider">
                    Day 0{day.dayNumber}
                  </div>
                  <h4 className="text-xl font-bold text-[#24483F] font-['Outfit'] mt-0.5">
                    {day.title}
                  </h4>
                  <p className="text-xs text-[#687E77] mt-1">{day.summary}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {day.slots.map((slot, sIdx) => (
                    <div
                      key={sIdx}
                      className="bg-[#F8F7F2] p-5 rounded-2xl border border-[#E4DFD3] flex flex-col justify-between shadow-2xs hover:border-[#24483F]/40 transition-colors"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-[#687E77] mb-2">
                          <span className="font-bold text-[#24483F] uppercase tracking-wide text-[11px]">{slot.time}</span>
                          <span className="tabular-nums text-[#687E77] font-medium">{slot.costEstimate}</span>
                        </div>
                        <h5 className="text-sm font-bold text-[#24483F] font-['Outfit'] leading-snug">
                          {slot.title}
                        </h5>
                        <div className="text-[11px] text-[#687E77] mt-1 mb-2.5 font-medium">
                          {slot.location}
                        </div>
                        <p className="text-xs text-[#4F635C] leading-relaxed font-normal">
                          {slot.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-3.5 border-t border-[#E4DFD3] space-y-2 text-[11px]">
                        <div className="text-[#26332F]">
                          <strong className="text-[#D58B65] font-semibold">Food recommendation: </strong>
                          <span className="text-[#4F635C]">{slot.foodRecommendation}</span>
                        </div>
                        <div className="text-[#687E77]">
                          <strong className="text-[#24483F] font-semibold">Transit tip: </strong>
                          <span>{slot.transportTip}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Budget Breakdown Summary */}
            <div className="bg-[#F8F7F2] p-6 rounded-2xl border border-[#E4DFD3]">
              <h5 className="text-xs font-bold text-[#24483F] uppercase tracking-wider mb-4">
                Estimated Cost Distribution Breakdown
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-xs text-[#687E77]">
                <div className="bg-white p-3.5 rounded-xl border border-[#E4DFD3]">
                  <span className="text-[#687E77] block mb-0.5">Accommodations</span>
                  <span className="font-semibold text-[#24483F] text-[13px]">{itinerary.budgetBreakdown.stay}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E4DFD3]">
                  <span className="text-[#687E77] block mb-0.5">Food & Meals</span>
                  <span className="font-semibold text-[#24483F] text-[13px]">{itinerary.budgetBreakdown.food}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E4DFD3]">
                  <span className="text-[#687E77] block mb-0.5">Local Transit</span>
                  <span className="font-semibold text-[#24483F] text-[13px]">{itinerary.budgetBreakdown.transport}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#E4DFD3]">
                  <span className="text-[#687E77] block mb-0.5">Tickets & Entry</span>
                  <span className="font-semibold text-[#24483F] text-[13px]">{itinerary.budgetBreakdown.activities}</span>
                </div>
              </div>
            </div>

            {/* Local Etiquette & Packing Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#4F635C] pt-2">
              <div className="bg-[#FAEEE7] p-5 rounded-2xl border border-[#D58B65]/30">
                <span className="font-bold text-[#BE744F] block mb-1 text-sm">Local Haryanvi Etiquette Tip:</span>
                <p className="leading-relaxed text-[#26332F]">{itinerary.localEtiquetteTip}</p>
              </div>
              <div className="bg-[#EDF2EB] p-5 rounded-2xl border border-[#C1CFBC]">
                <span className="font-bold text-[#24483F] block mb-1 text-sm">Traveler Packing Essentials:</span>
                <ul className="list-disc pl-4 space-y-1 text-[#26332F]">
                  {itinerary.packingEssentials.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
