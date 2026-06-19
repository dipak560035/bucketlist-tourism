import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, MapPin, Calendar, Users, DollarSign, CheckCircle2, Sparkles } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function TripDiscovery() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [travelers, setTravelers] = useState('');
  const [budget, setBudget] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const destinations = [
    'Everest Base Camp',
    'Pokhara Lake & Paragliding',
    'Annapurna Circuit',
    'Chitwan Wildlife Safari',
    'Upper Mustang Trek',
    'Lumbini Pilgrimage',
  ];

  const travelerOptions = [
    { label: 'Solo Traveler (1)', value: '1' },
    { label: 'Couple (2)', value: '2' },
    { label: 'Small Group (3-5)', value: '3-5' },
    { label: 'Large Group (6+)', value: '6+' },
  ];

  const budgetOptions = [
    { label: 'Economy ($500 - $1,200)', value: 'economy' },
    { label: 'Standard ($1,200 - $2,500)', value: 'standard' },
    { label: 'Premium Luxury ($2,500+)', value: 'premium' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!destination || !date || !travelers || !budget) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <section id="discovery" className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
      <GlassCard 
        hover={false} 
        className="border border-white/10 shadow-2xl relative bg-nepal-slate/85 backdrop-blur-xl p-8"
      >
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-end">
          {/* Destination */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-nepal-gold" />
              Where to?
            </label>
            <select
              required
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-slate-900/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-nepal-gold transition-all duration-300 font-medium"
            >
              <option value="" disabled className="bg-nepal-dark">Select Destination</option>
              {destinations.map((d) => (
                <option key={d} value={d} className="bg-nepal-dark text-white">
                  {d}
                </option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-nepal-teal" />
              When?
            </label>
            <input
              required
              type="date"
              value={date}
              min="2026-06-19"
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-slate-900/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-nepal-teal transition-all duration-300 font-medium cursor-pointer"
            />
          </div>

          {/* Travelers */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-nepal-crimson" />
              Travelers
            </label>
            <select
              required
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full bg-slate-900/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-nepal-crimson transition-all duration-300 font-medium"
            >
              <option value="" disabled className="bg-nepal-dark">Select Guests</option>
              {travelerOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-nepal-dark text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <DollarSign className="h-3.5 w-3.5 text-nepal-emerald" />
              Budget Limit
            </label>
            <select
              required
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full bg-slate-900/50 border border-white/10 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-nepal-emerald transition-all duration-300 font-medium"
            >
              <option value="" disabled className="bg-nepal-dark">Select Budget</option>
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-nepal-dark text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          {/* Search Button */}
          <div>
            <button
              type="submit"
              disabled={isSearching}
              className="w-full bg-gradient-to-r from-nepal-amber to-nepal-gold text-nepal-dark font-display font-bold py-3.5 px-6 rounded-xl hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isSearching ? (
                <>
                  <div className="h-5 w-5 border-2 border-nepal-dark border-t-transparent rounded-full animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5 stroke-[2.5]" />
                  Find My Adventure
                </>
              )}
            </button>
          </div>
        </form>

        {/* Dynamic Search Result Modal / Toast Overlay */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 p-4 rounded-xl bg-nepal-teal/10 border border-nepal-teal/30 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-nepal-teal shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-white flex items-center gap-1.5 text-sm sm:text-base">
                    Matches Found!
                    <Sparkles className="h-4 w-4 text-nepal-gold animate-pulse" />
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300">
                    We found <strong className="text-white">3 curated packages</strong> for <span className="text-nepal-gold font-semibold">{destination}</span> departing around {date}.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowResults(false)}
                className="text-xs font-semibold text-nepal-teal hover:text-white underline transition-colors"
              >
                View Matches
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </section>
  );
}
