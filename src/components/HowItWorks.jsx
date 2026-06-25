import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sliders, Compass, Flag } from 'lucide-react';

export default function HowItWorks() {
  const steps = [


  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-nepal-dark">
      {/* Visual Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-nepal-crimson/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
     

        {/* Timeline Layout */}
        <div className="relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-nepal-gold via-nepal-teal to-nepal-crimson opacity-30" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center group relative px-4"
                >
                  {/* Step Icon Node */}
                  <div className="relative z-10 mb-6">
                    {/* Ring Pulse */}
                    <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 blur-sm" />
                    
                  
                    
                    {/* Number Badge */}
                    <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center font-display font-bold text-sm text-white">
                      0{step.id}
                    </div>
                  </div>

                  {/* Step Badges */}
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-3 ${step.badgeColor}`}>
                    Step {step.id}
                  </span>

                  {/* Content details */}
                  <h3 className="font-display font-extrabold text-2xl text-white mb-2 group-hover:text-nepal-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
                    {step.subtitle}
                  </h4>
                  <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
















































// import React from 'react';
// import { motion } from 'framer-motion';
// import { Search, Sliders, Compass, Flag } from 'lucide-react';

// export default function HowItWorks() {
//   const steps = [
//     {
//       id: 1,
//       title: 'Discover',
//       subtitle: 'Find Your Path',
//       description: 'Browse our curated collection of iconic treks, wildlife tours, and cultural tracks, or talk to an expert to build a dream trip.',
//       icon: Search,
//       color: 'from-amber-400 to-nepal-gold',
//       badgeColor: 'bg-nepal-gold/20 text-nepal-gold border-nepal-gold/30',
//     },
//     {
//       id: 2,
//       title: 'Customize',
//       subtitle: 'Personalize the Tour',
//       description: 'Refine your route, choose accommodations (ranging from classic village tea houses to premium jungle camps), and add custom rests.',
//       icon: Sliders,
//       color: 'from-cyan-400 to-nepal-teal',
//       badgeColor: 'bg-nepal-teal/20 text-nepal-teal border-nepal-teal/30',
//     },
//     {
//       id: 3,
//       title: 'Travel',
//       subtitle: 'Explore the Peaks',
//       description: 'Land in Kathmandu to a direct greeting, receive full brief gear-checks, and step onto the mountain trails under native leadership.',
//       icon: Compass,
//       color: 'from-rose-400 to-nepal-crimson',
//       badgeColor: 'bg-nepal-crimson/20 text-nepal-crimson border-nepal-crimson/30',
//     },
//   ];

//   return (
//     <section id="how-it-works" className="py-24 relative overflow-hidden bg-nepal-dark">
//       {/* Visual Accent */}
//       <div className="absolute top-0 right-1/4 w-96 h-96 bg-nepal-crimson/5 rounded-full blur-[140px] pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <span className="text-nepal-crimson font-display font-semibold tracking-widest text-xs uppercase block mb-3">
//             Simple Process
//           </span>
//           <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
//             How BucketList Works
//           </h2>
//           <p className="text-base sm:text-lg text-slate-400 font-light">
//             Embarking on a Himalayan adventure is simple and stress-free. Here is our seamless route from explorer to traveler.
//           </p>
//         </div>

//         {/* Timeline Layout */}
//         <div className="relative">
//           {/* Connecting Line for Desktop */}
//           <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-nepal-gold via-nepal-teal to-nepal-crimson opacity-30" />

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
//             {steps.map((step, idx) => {
//               const IconComp = step.icon;
//               return (
//                 <motion.div
//                   key={step.id}
//                   initial={{ opacity: 0, y: 40 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
//                   className="flex flex-col items-center text-center group relative px-4"
//                 >
//                   {/* Step Icon Node */}
//                   <div className="relative z-10 mb-6">
//                     {/* Ring Pulse */}
//                     <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 blur-sm" />
                    
//                     <div className={`h-24 w-24 rounded-3xl bg-gradient-to-tr ${step.color} text-nepal-dark flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-6`}>
//                       <IconComp className="h-10 w-10 stroke-[2]" />
//                     </div>
                    
//                     {/* Number Badge */}
//                     <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center font-display font-bold text-sm text-white">
//                       0{step.id}
//                     </div>
//                   </div>

//                   {/* Step Badges */}
//                   <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mb-3 ${step.badgeColor}`}>
//                     Step {step.id}
//                   </span>

//                   {/* Content details */}
//                   <h3 className="font-display font-extrabold text-2xl text-white mb-2 group-hover:text-nepal-gold transition-colors duration-300">
//                     {step.title}
//                   </h3>
//                   <h4 className="text-sm font-semibold text-slate-400 mb-4 uppercase tracking-wider">
//                     {step.subtitle}
//                   </h4>
//                   <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
//                     {step.description}
//                   </p>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
