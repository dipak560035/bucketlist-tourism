import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mountain, Menu, X, Compass } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Why BucketList', href: '#why-choose-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-nepal-dark/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            
            
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-sm text-slate-300 hover:text-nepal-gold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-nepal-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#discovery"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-gradient-to-r from-nepal-amber to-nepal-gold text-nepal-dark hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Compass className="h-4 w-4 animate-spin-slow" />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-nepal-dark/95 border-b border-white/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
              
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#discovery"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-medium text-base bg-gradient-to-r from-nepal-amber to-nepal-gold text-nepal-dark shadow-md"
                >
                  <Compass className="h-5 w-5" />
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}









































// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Mountain, Menu, X, Compass } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Home', href: '#home' },
//     { name: 'Destinations', href: '#destinations' },
//     { name: 'Experiences', href: '#experiences' },
//     { name: 'Why BucketList', href: '#why-choose-us' },
//     { name: 'How It Works', href: '#how-it-works' },
//     { name: 'Reviews', href: '#testimonials' },
//     { name: 'Gallery', href: '#gallery' },
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled
//           ? 'bg-nepal-dark/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
//           : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <a href="#home" className="flex items-center gap-2 group">
//             <div className="p-2 bg-gradient-to-tr from-nepal-amber to-nepal-gold rounded-xl text-nepal-dark shadow-md group-hover:scale-105 transition-transform duration-300">
//               <Mountain className="h-6 w-6 stroke-[2.5]" />
//             </div>
//             <span className="font-display font-extrabold text-2xl tracking-wider bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:text-nepal-gold transition-colors duration-300">
//               BucketList<span className="text-nepal-gold">.</span>
//             </span>
//           </a>

//           {/* Desktop Nav Links */}
//           <nav className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="font-medium text-sm text-slate-300 hover:text-nepal-gold transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-nepal-gold after:transition-all after:duration-300 hover:after:w-full"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </nav>

//           {/* Right Action Button */}
//           <div className="hidden lg:flex items-center gap-4">
//             <a
//               href="#discovery"
//               className="flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm bg-gradient-to-r from-nepal-amber to-nepal-gold text-nepal-dark hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
//             >
//               <Compass className="h-4 w-4 animate-spin-slow" />
//               Book Now
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex lg:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Drawer Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3 }}
//             className="lg:hidden bg-nepal-dark/95 border-b border-white/10 backdrop-blur-lg overflow-hidden"
//           >
//             <div className="px-4 pt-2 pb-6 space-y-2">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   onClick={() => setIsOpen(false)}
//                   className="block px-3 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors duration-200"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//               <div className="pt-4 px-3">
//                 <a
//                   href="#discovery"
//                   onClick={() => setIsOpen(false)}
//                   className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-medium text-base bg-gradient-to-r from-nepal-amber to-nepal-gold text-nepal-dark shadow-md"
//                 >
//                   <Compass className="h-5 w-5" />
//                   Book Now
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }
