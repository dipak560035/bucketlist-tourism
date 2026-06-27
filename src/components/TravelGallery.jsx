import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, MapPin } from 'lucide-react';

export default function TravelGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
  
  
  
    {
      id: 4,
      title: 'One-Horned Rhino Safari',
      location: 'Chitwan Wildlife Reserve',
      image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800',
      aspect: 'aspect-[2/3]',
    },
    {
      id: 5,
      title: 'Pashupatinath Temple Spires',
      location: 'Kathmandu Valley',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800',
      aspect: 'aspect-[3/4]',
    },
    {
      id: 6,
      title: 'Sherpa Village Life',
      location: 'Namche Bazaar',
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800',
      aspect: 'aspect-square',
    },
    {
      id: 7,
      title: 'Himalayan Paragliding Ascent',
      location: 'Sarangkot, Pokhara',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
      aspect: 'aspect-[4/3]',
    },
    {
      id: 8,
      title: 'Vibrant Holi Festival spirituals',
      location: 'Basantapur Durbar Square',
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800&sig=1',
      aspect: 'aspect-[3/5]',
    },
  ];

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-nepal-dark">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-nepal-teal/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
       

        {/* Pinterest Masonry Grid */}
        <div className="masonry-grid">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setSelectedImage(item)}
              className={`masonry-item group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg ${item.aspect}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nepal-dark/90 via-nepal-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" />

              {/* Hover Contents */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="flex items-center gap-1 text-[10px] text-nepal-gold font-bold uppercase tracking-wider mb-1">
                  <MapPin className="h-3 w-3" />
                  {item.location}
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {item.title}
                </h3>
              </div>

              {/* Floating Magnify Badge on Hover */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <ZoomIn className="h-4.5 w-4.5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-t-2xl shadow-2xl border border-white/10"
              />
              
              {/* Caption Strip */}
              <div className="w-full bg-slate-900/90 border-x border-b border-white/10 py-4 px-6 text-left rounded-b-2xl">
                <span className="flex items-center gap-1 text-xs text-nepal-gold font-semibold uppercase tracking-wider mb-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {selectedImage.location}
                </span>
                
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}





















































// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ZoomIn, MapPin } from 'lucide-react';

// export default function TravelGallery() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const galleryItems = [
//     {
//       id: 1,
//       title: 'Everest Golden Sunrise',
//       location: 'Sagarmatha National Park',
//       image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800',
//       aspect: 'aspect-[3/4]',
//     },
//     {
//       id: 2,
//       title: 'Tranquil Pokhara Lakeside',
//       location: 'Phewa Lake, Pokhara',
//       image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800',
//       aspect: 'aspect-square',
//     },
//     {
//       id: 3,
//       title: 'Annapurna Base Camp Trek',
//       location: 'Annapurna Range',
//       image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800',
//       aspect: 'aspect-[4/3]',
//     },
//     {
//       id: 4,
//       title: 'One-Horned Rhino Safari',
//       location: 'Chitwan Wildlife Reserve',
//       image: 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=800',
//       aspect: 'aspect-[2/3]',
//     },
//     {
//       id: 5,
//       title: 'Pashupatinath Temple Spires',
//       location: 'Kathmandu Valley',
//       image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800',
//       aspect: 'aspect-[3/4]',
//     },
//     {
//       id: 6,
//       title: 'Sherpa Village Life',
//       location: 'Namche Bazaar',
//       image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800',
//       aspect: 'aspect-square',
//     },
//     {
//       id: 7,
//       title: 'Himalayan Paragliding Ascent',
//       location: 'Sarangkot, Pokhara',
//       image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
//       aspect: 'aspect-[4/3]',
//     },
//     {
//       id: 8,
//       title: 'Vibrant Holi Festival spirituals',
//       location: 'Basantapur Durbar Square',
//       image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=800&sig=1',
//       aspect: 'aspect-[3/5]',
//     },
//   ];

//   return (
//     <section id="gallery" className="py-24 relative overflow-hidden bg-nepal-dark">
//       {/* Background accents */}
//       <div className="absolute top-1/4 right-0 w-80 h-80 bg-nepal-teal/5 rounded-full blur-[120px]" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="text-nepal-teal font-display font-semibold tracking-widest text-xs uppercase block mb-3">
//             Moments Captured
//           </span>
//           <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
//             Nepal Travel Gallery
//           </h2>
//           <p className="text-base sm:text-lg text-slate-400 font-light">
//             Browse beautiful snaps of majestic peaks, cultural temples, wild safaris, and high-altitude adventures captured by our guides and travelers.
//           </p>
//         </div>

//         {/* Pinterest Masonry Grid */}
//         <div className="masonry-grid">
//           {galleryItems.map((item, idx) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-50px" }}
//               transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
//               onClick={() => setSelectedImage(item)}
//               className={`masonry-item group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg ${item.aspect}`}
//             >
//               {/* Image */}
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 loading="lazy"
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//               />

//               {/* Hover Dark Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-nepal-dark/90 via-nepal-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" />

//               {/* Hover Contents */}
//               <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <span className="flex items-center gap-1 text-[10px] text-nepal-gold font-bold uppercase tracking-wider mb-1">
//                   <MapPin className="h-3 w-3" />
//                   {item.location}
//                 </span>
//                 <h3 className="font-display font-bold text-lg text-white">
//                   {item.title}
//                 </h3>
//               </div>

//               {/* Floating Magnify Badge on Hover */}
//               <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
//                 <ZoomIn className="h-4.5 w-4.5" />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedImage(null)}
//             className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
//           >
//             <button
//               onClick={() => setSelectedImage(null)}
//               className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-colors"
//               aria-label="Close Lightbox"
//             >
//               <X className="h-6 w-6" />
//             </button>

//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
//               onClick={(e) => e.stopPropagation()}
//               className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <img
//                 src={selectedImage.image}
//                 alt={selectedImage.title}
//                 className="max-h-[75vh] w-auto max-w-full object-contain rounded-t-2xl shadow-2xl border border-white/10"
//               />
              
//               {/* Caption Strip */}
//               <div className="w-full bg-slate-900/90 border-x border-b border-white/10 py-4 px-6 text-left rounded-b-2xl">
//                 <span className="flex items-center gap-1 text-xs text-nepal-gold font-semibold uppercase tracking-wider mb-1">
//                   <MapPin className="h-3.5 w-3.5" />
//                   {selectedImage.location}
//                 </span>
//                 <h3 className="font-display font-extrabold text-xl text-white">
//                   {selectedImage.title}
//                 </h3>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }
