import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Trash2, ShieldCheck, MapPin } from 'lucide-react';
import { AI_FAQ_KNOWLEDGE, DESTINATIONS, SUPPORTED_CITIES } from '../data/haryanaData';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  suggestedSpots?: string[];
}

export const LocalGuideChat: React.FC = () => {
  const initialMessages: Message[] = [
    {
      id: 'welcome',
      sender: 'ai',
      text: "Namaste! I am your Local Lens guide for Haryana. Ask me anything about exploring Ambala, Kurukshetra, Panchkula, Pinjore, Yamunanagar, Karnal, Hisar, Rohtak, Gurugram, Faridabad, Panipat, or Sirsa — from quiet sunrise sarovars to authentic winter bajra khichdi.",
      timestamp: 'Just now'
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    'What should I eat in Ambala Cantt?',
    'Best time to visit Pinjore Gardens fountains?',
    '1-day spiritual tour in Kurukshetra?',
    'Hidden spots in Morni Hills & Tikkar Taal?',
    'Is Sultanpur bird sanctuary good right now?',
    'What is special about Hisar Firoz Shah Palace?',
    'What are the best winter crafts in Panipat?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateAnswer = (query: string): { text: string; spots?: string[] } => {
    const qLower = query.toLowerCase();

    // Check exact or keyword match in AI_FAQ_KNOWLEDGE
    for (const item of AI_FAQ_KNOWLEDGE) {
      if (item.keywords.some((k) => qLower.includes(k))) {
        return { text: item.answer };
      }
    }

    // Check city specific
    for (const city of SUPPORTED_CITIES) {
      if (qLower.includes(city.name.toLowerCase())) {
        const cityDests = DESTINATIONS.filter((d) => d.city === city.name);
        const titles = cityDests.map((d) => d.title).join(', ');
        return {
          text: `${city.name} is a captivating destination characterized by ${city.character}. Key highlights include ${titles}. Best visited during ${city.bestMonth}. Would you like a 1-day itinerary or local food recommendations for ${city.name}?`,
          spots: cityDests.map((d) => d.title)
        };
      }
    }

    // General fallback
    return {
      text: `That is a great question about Haryana travel! Across our 12 covered districts (Ambala, Yamunanagar, Kurukshetra, Panchkula, Pinjore, Karnal, Hisar, Rohtak, Faridabad, Gurugram, Panipat, Sirsa), you can experience a rich blend of Vedic heritage, Mughal gardens, Shivalik foothill lakes, and living artisan communities. Try asking about a specific city, street food trail, budget estimates, or hidden nature getaways!`
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAnswer(query);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: response.text,
        suggestedSpots: response.spots,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handleClear = () => {
    setMessages(initialMessages);
  };

  return (
    <section id="guide" className="py-24 bg-[#F8F7F2] text-[#26332F] border-b border-[#E4DFD3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#24483F] uppercase mb-2">
            <Bot className="w-3.5 h-3.5 text-[#D58B65]" />
            <span>Interactive Travel Concierge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#24483F] font-['Outfit']">
            AI Local Guide for Haryana
          </h2>
          <p className="text-[#4F635C] mt-2 text-sm sm:text-base leading-relaxed">
            Curated, instant intelligence powered by local stories and travel archives. No paid APIs or accounts needed.
          </p>

          <div className="inline-flex items-center gap-2 mt-3.5 px-3.5 py-1.5 bg-[#EDF2EB] border border-[#C1CFBC] rounded-full text-[11px] text-[#24483F] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#24483F]" />
            <span>Curated Haryana Travel Engine · Verified Local Contributor Insights</span>
          </div>
        </div>

        {/* Chat Container - Light Luxury Travel App Interface */}
        <div className="bg-white rounded-2xl border border-[#E4DFD3] overflow-hidden shadow-[0_16px_40px_rgba(36,72,63,0.08)] flex flex-col h-[600px]">
          
          {/* Top Bar inside Chat */}
          <div className="px-6 py-4 bg-[#24483F] text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4 text-[#D58B65]" />
              </div>
              <div>
                <div className="text-sm font-bold text-white font-['Outfit']">
                  Local Lens Assistant
                </div>
                <div className="text-[11px] text-[#A8B9A1]">
                  Ready to answer questions on all 12 districts
                </div>
              </div>
            </div>

            <button
              onClick={handleClear}
              className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer text-xs flex items-center gap-1.5"
              title="Reset conversation"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Clear Chat</span>
            </button>
          </div>

          {/* Messages Viewport */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-7 space-y-4 bg-[#F8F7F2]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 text-sm ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-[#24483F] flex items-center justify-center text-[#F8F7F2] shrink-0 mt-0.5 shadow-2xs">
                    <Bot className="w-4 h-4 text-[#A8B9A1]" />
                  </div>
                )}

                <div
                  className={`max-w-lg rounded-2xl p-4 sm:p-5 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#24483F] text-white rounded-br-xs shadow-xs'
                      : 'bg-white text-[#26332F] border border-[#E4DFD3] rounded-bl-xs shadow-2xs'
                  }`}
                >
                  <p className="text-xs sm:text-sm whitespace-pre-line leading-relaxed">{m.text}</p>
                  
                  {m.suggestedSpots && m.suggestedSpots.length > 0 && (
                    <div className="mt-3.5 pt-3 border-t border-[#E4DFD3] text-xs">
                      <div className="text-[#687E77] font-semibold mb-1.5">Key Curated Stops:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.suggestedSpots.map((spot, idx) => (
                          <span key={idx} className="bg-[#EDF2EB] text-[#24483F] border border-[#C1CFBC] px-2.5 py-1 rounded-md text-[11px] flex items-center gap-1 font-semibold">
                            <MapPin className="w-3 h-3 text-[#D58B65]" />
                            {spot}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className={`text-[10px] text-right mt-2 ${m.sender === 'user' ? 'text-white/60' : 'text-[#8C9E97]'}`}>
                    {m.timestamp}
                  </div>
                </div>

                {m.sender === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[#D58B65] flex items-center justify-center text-white shrink-0 mt-0.5 shadow-2xs">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 text-sm justify-start">
                <div className="w-8 h-8 rounded-full bg-[#24483F] flex items-center justify-center text-[#F8F7F2] shrink-0 shadow-2xs">
                  <Bot className="w-4 h-4 text-[#A8B9A1]" />
                </div>
                <div className="bg-white text-[#687E77] border border-[#E4DFD3] rounded-2xl rounded-bl-xs px-4 py-3 flex items-center gap-2 text-xs shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#24483F] animate-pulse" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#24483F] animate-pulse [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#24483F] animate-pulse [animation-delay:0.4s]" />
                  <span className="ml-1 text-[#4F635C] font-medium">Consulting Haryana travel archives...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions Strip */}
          <div className="px-6 py-3 bg-white border-t border-[#E4DFD3] flex items-center gap-2 overflow-x-auto text-xs whitespace-nowrap">
            <span className="text-[#687E77] text-[11px] font-semibold shrink-0">Suggestions:</span>
            {suggestedPrompts.map((prompt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(prompt)}
                className="px-3 py-1 rounded-lg bg-[#F8F7F2] hover:bg-[#EDF2EB] border border-[#E4DFD3] text-[#4F635C] hover:text-[#24483F] transition-colors cursor-pointer text-[11px] font-medium"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 bg-white border-t border-[#E4DFD3] flex items-center gap-2.5"
          >
            <input
              type="text"
              placeholder="Ask about cities, routes, street food, temples, lakes..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-4 py-3 bg-[#F8F7F2] border border-[#E4DFD3] rounded-xl text-xs sm:text-sm text-[#26332F] placeholder-[#8C9E97] focus:outline-none focus:border-[#24483F] focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="px-5 py-3 bg-[#D58B65] hover:bg-[#BE744F] disabled:opacity-40 text-white font-semibold text-xs rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-xs active:scale-98"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Send</span>
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
