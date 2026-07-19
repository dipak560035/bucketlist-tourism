
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import GlassCard from './ui/GlassCard';

export default function Destinations() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    e.preventDefault();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const destinationsList = [


 



  ];

  return (
    <section id="destinations" className="py-24 relative overflow-hidden bg-nepal-dark">
      {/* Background Ornaments */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-nepal-teal/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-nepal-gold/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-nepal-gold font-display font-semibold tracking-widest text-xs uppercase block mb-3"
          >
            Epic Destinations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
          >
            Popular Nepal Destinations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-base sm:text-lg text-slate-400 font-light"
          >
            From the snowcapped giants of the Himalayas to the lush, subtropical plains of the south, explore our curated travel packages.
          </motion.p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsList.map((dest, idx) => (
            <GlassCard
              key={dest.id}
              delay={idx * 0.1}
              className="group border border-white/5 flex flex-col h-full bg-nepal-slate/40 overflow-hidden !p-0"
            >
              {/* Image Section */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Image Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-nepal-slate to-transparent opacity-90" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-nepal-gold text-nepal-dark rounded-full shadow-lg">
                    {dest.badge}
                  </span>
                </div>

                {/* Favorite Button */}
                <button
                  type="button"
                  onClick={(e) => toggleFavorite(dest.id, e)}
                  className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-md bg-black/40 border border-white/10 hover:bg-black/60 transition-colors text-white hover:text-rose-400"
                >
                  <Heart className={`h-4.5 w-4.5 ${favorites[dest.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
                </button>

                {/* Difficulty Tag */}
                <span className="absolute bottom-3 right-4 text-xs font-semibold px-2.5 py-0.5 bg-black/50 border border-white/10 rounded-lg text-slate-300">
                  {dest.difficulty}
                </span>
              </div>

              {/* Text / Details Section */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Rating & Reviews */}
                <div className="flex items-center gap-1.5 text-nepal-gold text-sm font-semibold mb-3">
                  <Star className="h-4 w-4 fill-current stroke-[2.5]" />
                  <span>{dest.rating}</span>
                  <span className="text-slate-400 text-xs font-normal">({dest.reviews} reviews)</span>
                </div>

                {/* Name */}
               

                {/* Description */}
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 flex-grow">
                  {dest.description}
                </p>

                {/* Horizontal Divider */}
                <div className="border-t border-white/5 my-4" />

                {/* Price and Action Footer */}
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">From</span>
                    <span className="text-2xl font-display font-extrabold text-white">{dest.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 text-xs text-slate-400 mr-2">
                      <Clock className="h-3.5 w-3.5" />
                      {dest.duration}
                    </span>
                    <button
                      type="button"
                      className="p-2.5 bg-white/5 hover:bg-nepal-gold text-white hover:text-nepal-dark border border-white/10 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}















































// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Star, Clock, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
// import GlassCard from './ui/GlassCard';

// export default function Destinations() {
//   const [favorites, setFavorites] = useState({});

//   const toggleFavorite = (id, e) => {
//     e.stopPropagation();
//     e.preventDefault();
//     setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
//   };

//   const destinationsList = [
//     {
//       id: 1,
//       name: 'Everest Base Camp',
//       image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
//       description: "Trek to the base of the world's tallest peak, passing through Sherpa villages, ancient monasteries, and spectacular glacial landscapes.",
//       rating: 4.9,
//       reviews: '1,240',
//       price: '$1,499',
//       duration: '14 Days',
//       difficulty: 'Challenging',
//       badge: 'Best Seller',
//     },
//     {
//       id: 2,
//       name: 'Pokhara Valley',
//       image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800',
//       description: 'Relax by the tranquil Phewa Lake, marvel at the Annapurna reflection, and experience paragliding with panoramic mountain views.',
//       rating: 4.8,
//       reviews: '950',
//       price: '$699',
//       duration: '5 Days',
//       difficulty: 'Easy',
//       badge: 'Most Popular',
//     },
//     {
//       id: 3,
//       name: 'Annapurna Circuit',
//       image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800',
//       description: 'Journey through diverse climates, deep gorges, and high mountain passes, culminating at the breathtaking Thorong La Pass.',
//       rating: 4.9,
//       reviews: '1,080',
//       price: '$1,299',
//       duration: '12 Days',
//       difficulty: 'Moderate',
//       badge: 'Bucket List Special',
//     },
//     {
//       id: 4,
//       name: 'Chitwan National Park',
//       image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800',
//       description: 'Embark on an epic jungle safari to spot rare one-horned rhinos, Bengal tigers, and enjoy local Tharu cultural performances.',
//       rating: 4.7,
//       reviews: '820',
//       price: '$450',
//       duration: '3 Days',
//       difficulty: 'Easy',
//       badge: 'Wildlife Focus',
//     },
//     {
//       id: 5,
//       name: 'Lumbini Sacred Garden',
//       image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800',
//       description: 'Explore the sacred birthplace of Gautama Buddha, wander through tranquil monasteries, and reflect by the historic Maya Devi temple.',
//       rating: 4.8,
//       reviews: '510',
//       price: '$399',
//       duration: '4 Days',
//       difficulty: 'Easy',
//       badge: 'Cultural Heritage',
//     },
//     {
//       id: 6,
//       name: 'Upper Mustang',
//       image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800',
//       description: 'Step back in time to the forbidden kingdom of Lo, featuring mystical cave dwellings, red clay cliffs, and Tibetan Buddhist culture.',
//       rating: 4.9,
//       reviews: '340',
//       price: '$2,199',
//       duration: '10 Days',
//       difficulty: 'Moderate',
//       badge: 'Exclusive Tour',
//     },
//   ];

//   return (
//     <section id="destinations" className="py-24 relative overflow-hidden bg-nepal-dark">
//       {/* Background Ornaments */}
//       <div className="absolute top-1/4 left-0 w-96 h-96 bg-nepal-teal/5 rounded-full blur-[120px]" />
//       <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-nepal-gold/5 rounded-full blur-[120px]" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <motion.span
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5 }}
//             className="text-nepal-gold font-display font-semibold tracking-widest text-xs uppercase block mb-3"
//           >
//             Epic Destinations
//           </motion.span>
//           <motion.h2
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
//           >
//             Popular Nepal Destinations
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             className="text-base sm:text-lg text-slate-400 font-light"
//           >
//             From the snowcapped giants of the Himalayas to the lush, subtropical plains of the south, explore our curated travel packages.
//           </motion.p>
//         </div>

//         {/* Destination Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {destinationsList.map((dest, idx) => (
//             <GlassCard
//               key={dest.id}
//               delay={idx * 0.1}
//               className="group border border-white/5 flex flex-col h-full bg-nepal-slate/40 overflow-hidden !p-0"
//             >
//               {/* Image Section */}
//               <div className="relative aspect-[16/10] overflow-hidden">
//                 <img
//                   src={dest.image}
//                   alt={dest.name}
//                   loading="lazy"
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
                
//                 {/* Image Overlays */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-nepal-slate to-transparent opacity-90" />
                
//                 {/* Top Badge */}
//                 <div className="absolute top-4 left-4 flex flex-col gap-2">
//                   <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-nepal-gold text-nepal-dark rounded-full shadow-lg">
//                     {dest.badge}
//                   </span>
//                 </div>

//                 {/* Favorite Button */}
//                 <button
//                   type="button"
//                   onClick={(e) => toggleFavorite(dest.id, e)}
//                   className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-md bg-black/40 border border-white/10 hover:bg-black/60 transition-colors text-white hover:text-rose-400"
//                 >
//                   <Heart className={`h-4.5 w-4.5 ${favorites[dest.id] ? 'fill-rose-500 text-rose-500' : ''}`} />
//                 </button>

//                 {/* Difficulty Tag */}
//                 <span className="absolute bottom-3 right-4 text-xs font-semibold px-2.5 py-0.5 bg-black/50 border border-white/10 rounded-lg text-slate-300">
//                   {dest.difficulty}
//                 </span>
//               </div>

//               {/* Text / Details Section */}
//               <div className="p-6 flex flex-col flex-grow">
//                 {/* Rating & Reviews */}
//                 <div className="flex items-center gap-1.5 text-nepal-gold text-sm font-semibold mb-3">
//                   <Star className="h-4 w-4 fill-current stroke-[2.5]" />
//                   <span>{dest.rating}</span>
//                   <span className="text-slate-400 text-xs font-normal">({dest.reviews} reviews)</span>
//                 </div>

//                 {/* Name */}
//                 <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-nepal-gold transition-colors duration-300">
//                   {dest.name}
//                 </h3>

//                 {/* Description */}
//                 <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 flex-grow">
//                   {dest.description}
//                 </p>

//                 {/* Horizontal Divider */}
//                 <div className="border-t border-white/5 my-4" />

//                 {/* Price and Action Footer */}
//                 <div className="flex items-center justify-between mt-auto">
//                   <div>
//                     <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">From</span>
//                     <span className="text-2xl font-display font-extrabold text-white">{dest.price}</span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <span className="flex items-center gap-1 text-xs text-slate-400 mr-2">
//                       <Clock className="h-3.5 w-3.5" />
//                       {dest.duration}
//                     </span>
//                     <button
//                       type="button"
//                       className="p-2.5 bg-white/5 hover:bg-nepal-gold text-white hover:text-nepal-dark border border-white/10 rounded-xl transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
//                     >
//                       <ArrowRight className="h-4 w-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </GlassCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
