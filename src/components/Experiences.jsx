import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

export default function Experiences() {
  const experiencesList = [
  
   
 
   
  
    {
      id: 6,
      title: 'Cultural Heritage Tours',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800',
      description: 'Wander through centuries-old temples, local pottery markets, and attend vibrant spiritual festivals.',
      tag: 'History',
    },
  ];

  return (
    <section id="experiences" className="py-24 relative bg-nepal-dark">
      {/* Visual divider line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-2xl">
            <span className="text-nepal-teal font-display font-semibold tracking-widest text-xs uppercase block mb-3">
              Unforgettable Activities
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white">
              Signature Nepal Experiences
            </h2>
          </div>
          <p className="text-slate-400 font-light max-w-md text-left md:text-right">
            Nepal is more than just trekking. Indulge in white-water rapids, visual safaris, high altitude peaks, and rich culture.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiencesList.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              {/* Image Background */}
              <img
                src={exp.image}
                alt={exp.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Multistage Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-nepal-dark via-nepal-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-nepal-dark/30 group-hover:bg-nepal-dark/40 transition-colors" />

              {/* Card Contents */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
                {/* Tag */}
                <div className="mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-nepal-gold rounded-full">
                    {exp.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-2xl text-white mb-2 flex items-center justify-between group-hover:text-nepal-gold transition-colors duration-300">
                  {exp.title}
                  <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-nepal-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>

                {/* Description - height transitions for slide-up reveal */}
                <p className="text-slate-300 text-sm font-light leading-relaxed max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {exp.description}
                </p>
              </div>

              {/* Accent highlight border */}
              <div className="absolute inset-0 border border-white/5 group-hover:border-nepal-gold/30 rounded-2xl transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



















































// import React from 'react';
// import { motion } from 'framer-motion';
// import { Compass, ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

// export default function Experiences() {
//   const experiencesList = [
//     {
//       id: 1,
//       title: 'Himalayan Trekking',
//       image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800',
//       description: "Conquer remote high passes and marvel at the world's most impressive skylines on foot.",
//       tag: 'Adventure',
//     },
//     {
//       id: 2,
//       title: 'Wildlife Safari',
//       image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800',
//       description: 'Explore deep subtropical grasslands searching for one-horned rhinos, Bengal tigers, and exotic bird species.',
//       tag: 'Nature',
//     },
//     {
//       id: 3,
//       title: 'Mountain Flights',
//       image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
//       description: "Take a scenic flyby of Mount Everest and the high Himalayas from a bird's-eye perspective.",
//       tag: 'Sightseeing',
//     },
//     {
//       id: 4,
//       title: 'White Water Rafting',
//       image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800',
//       description: 'Plunge down wild, glacial rivers fed directly from snowy peaks on thrilling rafting excursions.',
//       tag: 'Adrenaline',
//     },
//     {
//       id: 5,
//       title: 'Tandem Paragliding',
//       image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
//       description: "Soar alongside eagles over Pokhara's lakes with direct backdrops of the snowy Annapurna range.",
//       tag: 'Aviation',
//     },
//     {
//       id: 6,
//       title: 'Cultural Heritage Tours',
//       image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800',
//       description: 'Wander through centuries-old temples, local pottery markets, and attend vibrant spiritual festivals.',
//       tag: 'History',
//     },
//   ];

//   return (
//     <section id="experiences" className="py-24 relative bg-nepal-dark">
//       {/* Visual divider line */}
//       <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
//           <div className="text-left max-w-2xl">
//             <span className="text-nepal-teal font-display font-semibold tracking-widest text-xs uppercase block mb-3">
//               Unforgettable Activities
//             </span>
//             <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white">
//               Signature Nepal Experiences
//             </h2>
//           </div>
//           <p className="text-slate-400 font-light max-w-md text-left md:text-right">
//             Nepal is more than just trekking. Indulge in white-water rapids, visual safaris, high altitude peaks, and rich culture.
//           </p>
//         </div>

//         {/* Experiences Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {experiencesList.map((exp, idx) => (
//             <motion.div
//               key={exp.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
//               className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
//             >
//               {/* Image Background */}
//               <img
//                 src={exp.image}
//                 alt={exp.title}
//                 loading="lazy"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />

//               {/* Multistage Overlays */}
//               <div className="absolute inset-0 bg-gradient-to-t from-nepal-dark via-nepal-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
//               <div className="absolute inset-0 bg-nepal-dark/30 group-hover:bg-nepal-dark/40 transition-colors" />

//               {/* Card Contents */}
//               <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10">
//                 {/* Tag */}
//                 <div className="mb-3">
//                   <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-nepal-gold rounded-full">
//                     {exp.tag}
//                   </span>
//                 </div>

//                 {/* Title */}
//                 <h3 className="font-display font-bold text-2xl text-white mb-2 flex items-center justify-between group-hover:text-nepal-gold transition-colors duration-300">
//                   {exp.title}
//                   <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-nepal-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
//                 </h3>

//                 {/* Description - height transitions for slide-up reveal */}
//                 <p className="text-slate-300 text-sm font-light leading-relaxed max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
//                   {exp.description}
//                 </p>
//               </div>

//               {/* Accent highlight border */}
//               <div className="absolute inset-0 border border-white/5 group-hover:border-nepal-gold/30 rounded-2xl transition-all duration-300 pointer-events-none" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
