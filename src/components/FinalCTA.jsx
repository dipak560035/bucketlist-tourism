import React from 'react';
import { motion } from 'framer-motion';
import { Compass, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-nepal-dark">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-nepal-dark via-nepal-dark/70 to-nepal-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-nepal-dark/95 via-transparent to-nepal-dark/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-nepal-gold rounded-full"
          >
            <Compass className="h-4 w-4 animate-spin-slow" />
            Pack Your Bags
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
          >
            Ready for Your <br />
            <span className="bg-gradient-to-r from-nepal-gold to-nepal-amber bg-clip-text text-transparent">
              Nepal Adventure?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Whether you want to climb Everest Base Camp, glide over Pokhara, or wander temple shrines, our expert local team will design a safe, unforgettable journey.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <a
              href="#discovery"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium bg-gradient-to-r from-nepal-amber to-nepal-gold text-nepal-dark hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Exploring
            </a>
            <a
              href="#footer"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/35 transition-all duration-300 backdrop-blur-md"
            >
              <MessageSquare className="h-5 w-5 text-nepal-gold" />
              Talk To Expert
            </a>
          </motion.div>

          {/* Minimal security indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6 pt-8 text-xs text-slate-400 font-medium uppercase tracking-wider"
          >
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-4.5 w-4.5 text-nepal-teal" />
              100% Secure Checkout
            </span>
            <span className="h-4 w-[1px] bg-white/10" />
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}














































// import React from 'react';
// import { motion } from 'framer-motion';
// import { Compass, MessageSquare, ShieldCheck, HelpCircle } from 'lucide-react';
// import GlassCard from './ui/GlassCard';

// export default function FinalCTA() {
//   return (
//     <section className="relative py-32 overflow-hidden bg-nepal-dark">
//       {/* Background Image Layer */}
//       <div className="absolute inset-0 z-0">
//         <div
//           className="w-full h-full bg-cover bg-center"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920')",
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-nepal-dark via-nepal-dark/70 to-nepal-dark" />
//         <div className="absolute inset-0 bg-gradient-to-r from-nepal-dark/95 via-transparent to-nepal-dark/90" />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
//         <div className="max-w-3xl mx-auto space-y-8">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="inline-flex items-center gap-2 px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold uppercase tracking-wider text-nepal-gold rounded-full"
//           >
//             <Compass className="h-4 w-4 animate-spin-slow" />
//             Pack Your Bags
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
//           >
//             Ready for Your <br />
//             <span className="bg-gradient-to-r from-nepal-gold to-nepal-amber bg-clip-text text-transparent">
//               Nepal Adventure?
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
//           >
//             Whether you want to climb Everest Base Camp, glide over Pokhara, or wander temple shrines, our expert local team will design a safe, unforgettable journey.
//           </motion.p>

//           {/* Action CTAs */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
//           >
//             <a
//               href="#discovery"
//               className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium bg-gradient-to-r from-nepal-amber to-nepal-gold text-nepal-dark hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
//             >
//               Start Exploring
//             </a>
//             <a
//               href="#footer"
//               className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/35 transition-all duration-300 backdrop-blur-md"
//             >
//               <MessageSquare className="h-5 w-5 text-nepal-gold" />
//               Talk To Expert
//             </a>
//           </motion.div>

//           {/* Minimal security indicators */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//             className="flex items-center justify-center gap-6 pt-8 text-xs text-slate-400 font-medium uppercase tracking-wider"
//           >
//             <span className="flex items-center gap-1">
//               <ShieldCheck className="h-4.5 w-4.5 text-nepal-teal" />
//               100% Secure Checkout
//             </span>
//             <span className="h-4 w-[1px] bg-white/10" />
//             <span className="flex items-center gap-1">
//               <HelpCircle className="h-4.5 w-4.5 text-nepal-teal" />
//               No Hidden Fees
//             </span>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
