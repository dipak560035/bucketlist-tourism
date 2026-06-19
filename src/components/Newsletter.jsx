import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Sparkles } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1200);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-nepal-dark">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nepal-dark via-nepal-dark/85 to-nepal-dark" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GlassCard hover={false} className="border border-white/10 shadow-2xl bg-slate-900/60 backdrop-blur-xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Subtle decorations */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-nepal-gold/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-nepal-teal/10 rounded-full blur-2xl" />

          <div className="max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-nepal-gold uppercase tracking-widest px-3 py-1 bg-nepal-gold/10 border border-nepal-gold/20 rounded-full">
              <Sparkles className="h-3 w-3 animate-pulse" />
              BucketList Newsletter
            </span>
            
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white leading-tight">
              Get Nepal Travel Inspiration
            </h2>
            
            <p className="text-slate-300 font-light leading-relaxed text-sm sm:text-base">
              Subscribe to receive curated Himalayan trekking route plans, seasonal packing lists, weather guides, and early-bird adventure discounts directly in your inbox.
            </p>

            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 pt-4 max-w-lg mx-auto"
                >
                  <input
                    required
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow bg-black/40 border border-white/10 text-white rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-nepal-gold transition-all duration-300 font-medium"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-nepal-amber to-nepal-gold text-nepal-dark font-display font-bold px-8 py-4 rounded-xl hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all duration-300 flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <div className="h-5 w-5 border-2 border-nepal-dark border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Subscribe
                        <Send className="h-4.5 w-4.5 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-6 rounded-2xl bg-nepal-teal/10 border border-nepal-teal/30 max-w-md mx-auto space-y-2"
                >
                  <CheckCircle className="h-10 w-10 text-nepal-teal mx-auto" />
                  <h3 className="font-display font-bold text-white text-lg">Thank You For Subscribing!</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    We've sent a welcome guide with seasonal trekking maps to your email. Get ready to experience Nepal!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <span className="block text-xs text-slate-400 font-light italic">
              We respect your privacy. Unsubscribe at any time.
            </span>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
