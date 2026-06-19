import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const timerRef = useRef(null);

  const testimonialsList = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      country: 'United States',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&q=80',
      rating: 5,
      review: "Trekking Everest Base Camp with BucketList was absolutely life-changing. From our first inquiry to the final goodbye in Kathmandu, everything was flawless. Our guide, Dawa, knew every peak by name and looked after our safety like family.",
    },
    {
      id: 2,
      name: 'Oliver Dupont',
      country: 'France',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&q=80',
      rating: 5,
      review: "The paragliding over Phewa Lake in Pokhara is a memory I will carry forever. The organization was super professional, the equipment was brand new, and booking through the platform took less than 2 minutes. Strongly recommend!",
    },
    {
      id: 3,
      name: 'Maya Sharma',
      country: 'India',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&q=80',
      rating: 5,
      review: "BucketList organized a custom heritage tour of Kathmandu temples combined with a safari in Chitwan. The diversity of the sights was stunning. The 24/7 helpline saved us when our flight got delayed. Excellent ground support.",
    },
    {
      id: 4,
      name: 'Thomas Müller',
      country: 'Germany',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&q=80',
      rating: 5,
      review: "Upper Mustang is a mystical place and doing it with BucketList made it even more special. The logistics in Lo Manthang were perfect—excellent local hosts, comfortable 4WD support, and deep cultural explanations.",
    },
  ];

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleNext();
    }, 8000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsList[activeIndex];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-nepal-dark">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-nepal-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-nepal-teal/5 rounded-full blur-[120px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-nepal-gold font-display font-semibold tracking-widest text-xs uppercase block mb-3">
            Real Reviews
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white">
            Traveler Testimonials
          </h2>
        </div>

        {/* Carousel Slider */}
        <div className="relative">
          {/* Main Card */}
          <GlassCard hover={false} className="relative z-10 p-8 sm:p-12 border border-white/5 shadow-2xl bg-nepal-slate/40 min-h-[380px] sm:min-h-[320px] flex flex-col justify-between overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute right-8 top-8 h-20 w-20 text-white/5 pointer-events-none rotate-180" />

            <div className="relative flex-grow flex flex-col justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={current.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="space-y-6 text-left"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 text-nepal-gold">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-200 text-lg sm:text-xl font-light leading-relaxed italic">
                    "{current.review}"
                  </p>

                  {/* Reviewer Details */}
                  <div className="flex items-center gap-4 pt-4">
                    <img
                      src={current.image}
                      alt={current.name}
                      className="h-14 w-14 rounded-full object-cover border-2 border-nepal-gold shadow-md"
                    />
                    <div>
                      <h4 className="font-display font-bold text-white text-base">
                        {current.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
                        {current.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </GlassCard>

          {/* Nav Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-20 z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-900/60 border border-white/10 hover:bg-nepal-gold text-white hover:text-nepal-dark backdrop-blur-md transition-all duration-300 shadow-lg"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-20 z-20">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-900/60 border border-white/10 hover:bg-nepal-gold text-white hover:text-nepal-dark backdrop-blur-md transition-all duration-300 shadow-lg"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Indicators / Dot Nav */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonialsList.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-8 bg-nepal-gold' : 'w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
