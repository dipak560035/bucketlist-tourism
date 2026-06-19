import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, MapPin, HeartHandshake, PhoneCall } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: 'Local Travel Experts',
      description: "Our guides are born in the high Himalayas, bringing native wisdom, cultural insights, and unparalleled safety coordination.",
      icon: Compass,
      color: 'from-amber-400 to-nepal-gold',
      shadow: 'rgba(245,158,11,0.15)',
    },
    {
      id: 2,
      title: 'Secure & Ethical Booking',
      description: 'Encrypted booking flows with flexible cancellations, guaranteeing fair local wages and eco-friendly operations.',
      icon: ShieldCheck,
      color: 'from-emerald-400 to-nepal-teal',
      shadow: 'rgba(20,184,166,0.15)',
    },
    {
      id: 3,
      title: 'Personalized Itineraries',
      description: "Tailor your trekking speed, acclimatization days, safari targets, and hotels to match your travel goals.",
      icon: MapPin,
      color: 'from-cyan-400 to-blue-500',
      shadow: 'rgba(6,182,212,0.15)',
    },
    {
      id: 4,
      title: '24/7 Kathmandu Ground Support',
      description: 'Emergency sat-com coordination, real-time weather monitoring, and round-the-clock direct phone access.',
      icon: PhoneCall,
      color: 'from-rose-400 to-nepal-crimson',
      shadow: 'rgba(225,29,72,0.15)',
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden bg-nepal-dark">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nepal-slate/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Section Headers */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-nepal-gold font-display font-semibold tracking-widest text-xs uppercase block">
              The BucketList Difference
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Why Choose Us For Your Adventure
            </h2>
            <p className="text-slate-400 font-light leading-relaxed">
              We specialize in creating premium, tailored, safe, and deeply authentic experiences that directly support local Himalayan communities and preserve Nepal's rich ecological heritage.
            </p>
            <div className="pt-4 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-nepal-dark" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" alt="User 1" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-nepal-dark" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="User 2" />
                <img className="inline-block h-10 w-10 rounded-full ring-2 ring-nepal-dark" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="User 3" />
              </div>
              <div className="text-sm">
                <span className="text-white font-bold block">Trusted by 10k+</span>
                <span className="text-slate-400 text-xs">worldwide explorers</span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feat, idx) => {
              const IconComponent = feat.icon;
              return (
                <GlassCard
                  key={feat.id}
                  delay={idx * 0.1}
                  className="border border-white/5 bg-nepal-slate/30 text-left p-8 group relative overflow-hidden"
                >
                  {/* Decorative glow behind icon */}
                  <div
                    className="absolute -top-12 -left-12 w-24 h-24 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150 opacity-20 group-hover:opacity-40"
                    style={{ backgroundColor: feat.shadow.replace('0.15', '0.6') }}
                  />

                  {/* Icon */}
                  <div className={`p-4 rounded-2xl bg-gradient-to-tr ${feat.color} text-nepal-dark inline-block mb-6 shadow-md transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent className="h-6 w-6 stroke-[2]" />
                  </div>

                  {/* Headline */}
                  <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-nepal-gold transition-colors duration-300">
                    {feat.title}
                  </h3>

                  {/* Body Text */}
                  <p className="text-slate-400 text-sm font-light leading-relaxed">
                    {feat.description}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
