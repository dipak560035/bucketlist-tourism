import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star, Users, Award, MapPin } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background Image with Parallax & Zoom effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920')",
          }}
        />
        {/* Multilayered overlays for premium contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-nepal-dark/40 via-nepal-dark/60 to-nepal-dark" />
        <div className="absolute inset-0 bg-gradient-to-r from-nepal-dark/80 via-transparent to-nepal-dark/50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Headline & CTAs */}
    
            {/* Tagline */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-nepal-gold uppercase"
            >
              <MapPin className="h-3.5 w-3.5" />
              Roof of the World
            </motion.div>

            {/* Main Headline */}
          
              Your Dream <br />
             <br />
              Starts Here
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-200 font-light max-w-2xl leading-relaxed"
            >
              Discover breathtaking mountains, vibrant cultures, hidden gems, and unforgettable experiences across Nepal.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#destinations"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium bg-gradient-to-r from-nepal-amber to-nepal-gold text-nepal-dark hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Trips
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium bg-white/5 border border-white/20 text-white hover:bg-white/15 hover:border-white/40 transition-all duration-300 backdrop-blur-md"
              >
                <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/20 text-white">
                  <Play className="h-3.5 w-3.5 fill-current" />
                </span>
                Watch Video
              </button>
            </motion.div>
          </motion.div>

          {/* Floating Trust Cards */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="relative w-full max-w-sm space-y-6"
            >
              {/* Trust Stats Card */}
              <GlassCard hover={false} className="relative z-10 border border-white/15 shadow-2xl">
                <h3 className="font-display font-bold text-xl text-white mb-4">Why Travelers Trust Us</h3>
                
                <div className="space-y-4">
                  {/* Stat 1 */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-nepal-gold/20 text-nepal-gold rounded-xl">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-2xl text-white">10,000+</h4>
                      <p className="text-sm text-slate-400">Happy Travelers</p>
                    </div>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-nepal-teal/20 text-nepal-teal rounded-xl">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-2xl text-white">500+</h4>
                      <p className="text-sm text-slate-400">Tailored Experiences</p>
                    </div>
                  </div>

                  {/* Stat 3 */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-nepal-crimson/20 text-nepal-crimson rounded-xl">
                      <Star className="h-6 w-6 fill-current" />
                    </div>
                    <div>
                     
                      <p className="text-sm text-slate-400">Customer Rating (9.8k reviews)</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Minor Floating Detail Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -top-6 -left-6 bg-gradient-to-r from-nepal-teal to-cyan-500 text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-white/20"
              >
                <div className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
                <span className="font-display text-sm font-semibold">Live trekking updates</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Slope Decorator */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-nepal-dark to-transparent z-1" />
    </section>
  );
}
































// import React from 'react';
// import { motion } from 'framer-motion';
// import { Play, ArrowRight, Star, Users, Award, MapPin } from 'lucide-react';
// import GlassCard from './ui/GlassCard';

// export default function Hero() {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 35 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
//     },
//   };

//   const floatVariants = {
//     animate: {
//       y: [0, -10, 0],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: 'easeInOut',
//       },
//     },
//   };

//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
//       {/* Background Image with Parallax & Zoom effect */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <motion.div 
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 1.8, ease: 'easeOut' }}
//           className="w-full h-full bg-cover bg-center"
//           style={{
//             backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920')",
//           }}
//         />
//         {/* Multilayered overlays for premium contrast */}
//         <div className="absolute inset-0 bg-gradient-to-b from-nepal-dark/40 via-nepal-dark/60 to-nepal-dark" />
//         <div className="absolute inset-0 bg-gradient-to-r from-nepal-dark/80 via-transparent to-nepal-dark/50" />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="grid lg:grid-cols-12 gap-12 items-center">
//           {/* Headline & CTAs */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="visible"
//             className="lg:col-span-7 text-left space-y-6"
//           >
//             {/* Tagline */}
//             <motion.div
//               variants={itemVariants}
//               className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider text-nepal-gold uppercase"
//             >
//               <MapPin className="h-3.5 w-3.5" />
//               Roof of the World
//             </motion.div>

//             {/* Main Headline */}
//             <motion.h1
//               variants={itemVariants}
//               className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl text-white leading-tight"
//             >
//               Your Dream <br />
//               <span className="bg-gradient-to-r from-nepal-gold via-orange-400 to-nepal-amber bg-clip-text text-transparent">
//                 Nepal Adventure
//               </span> <br />
//               Starts Here
//             </motion.h1>

//             {/* Subheadline */}
//             <motion.p
//               variants={itemVariants}
//               className="text-lg sm:text-xl text-slate-200 font-light max-w-2xl leading-relaxed"
//             >
//               Discover breathtaking mountains, vibrant cultures, hidden gems, and unforgettable experiences across Nepal.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div
//               variants={itemVariants}
//               className="flex flex-col sm:flex-row gap-4 pt-4"
//             >
//               <a
//                 href="#destinations"
//                 className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium bg-gradient-to-r from-nepal-amber to-nepal-gold text-nepal-dark hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all duration-300 transform hover:-translate-y-0.5"
//               >
//                 Explore Trips
//                 <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               </a>
//               <button
//                 onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
//                 className="flex items-center justify-center gap-3 px-8 py-4 rounded-full font-medium bg-white/5 border border-white/20 text-white hover:bg-white/15 hover:border-white/40 transition-all duration-300 backdrop-blur-md"
//               >
//                 <span className="flex items-center justify-center h-6 w-6 rounded-full bg-white/20 text-white">
//                   <Play className="h-3.5 w-3.5 fill-current" />
//                 </span>
//                 Watch Video
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Floating Trust Cards */}
//           <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
//             <motion.div
//               variants={floatVariants}
//               animate="animate"
//               className="relative w-full max-w-sm space-y-6"
//             >
//               {/* Trust Stats Card */}
//               <GlassCard hover={false} className="relative z-10 border border-white/15 shadow-2xl">
//                 <h3 className="font-display font-bold text-xl text-white mb-4">Why Travelers Trust Us</h3>
                
//                 <div className="space-y-4">
//                   {/* Stat 1 */}
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-nepal-gold/20 text-nepal-gold rounded-xl">
//                       <Users className="h-6 w-6" />
//                     </div>
//                     <div>
//                       <h4 className="font-display font-extrabold text-2xl text-white">10,000+</h4>
//                       <p className="text-sm text-slate-400">Happy Travelers</p>
//                     </div>
//                   </div>
                  
//                   {/* Stat 2 */}
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-nepal-teal/20 text-nepal-teal rounded-xl">
//                       <Award className="h-6 w-6" />
//                     </div>
//                     <div>
//                       <h4 className="font-display font-extrabold text-2xl text-white">500+</h4>
//                       <p className="text-sm text-slate-400">Tailored Experiences</p>
//                     </div>
//                   </div>

//                   {/* Stat 3 */}
//                   <div className="flex items-center gap-4">
//                     <div className="p-3 bg-nepal-crimson/20 text-nepal-crimson rounded-xl">
//                       <Star className="h-6 w-6 fill-current" />
//                     </div>
//                     <div>
//                       <h4 className="font-display font-extrabold text-2xl text-white">4.9 / 5.0</h4>
//                       <p className="text-sm text-slate-400">Customer Rating (9.8k reviews)</p>
//                     </div>
//                   </div>
//                 </div>
//               </GlassCard>

//               {/* Minor Floating Detail Badge */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 1, duration: 0.8 }}
//                 className="absolute -top-6 -left-6 bg-gradient-to-r from-nepal-teal to-cyan-500 text-white px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 border border-white/20"
//               >
//                 <div className="h-2 w-2 rounded-full bg-green-400 animate-ping" />
//                 <span className="font-display text-sm font-semibold">Live trekking updates</span>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Hero Bottom Slope Decorator */}
//       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-nepal-dark to-transparent z-1" />
//     </section>
//   );
// }
