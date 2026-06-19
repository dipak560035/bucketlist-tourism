import React from 'react';
import { Mountain, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Local Guides', href: '#' },
    { name: 'Impact & Giving', href: '#' },
    { name: 'Sustainability', href: '#' },
  ];

  const destinationLinks = [
    { name: 'Everest Base Camp', href: '#destinations' },
    { name: 'Pokhara Valley', href: '#destinations' },
    { name: 'Annapurna Circuit', href: '#destinations' },
    { name: 'Chitwan National Park', href: '#destinations' },
    { name: 'Upper Mustang', href: '#destinations' },
    { name: 'Lumbini Gardens', href: '#destinations' },
  ];

  const resourcesLinks = [
    { name: 'Trek Packing Lists', href: '#' },
    { name: 'Altitude Safety Guide', href: '#' },
    { name: 'Nepal Visa Info', href: '#' },
    { name: 'Best Time to Visit', href: '#' },
    { name: 'Travel Insurance FAQ', href: '#' },
  ];

  return (
    <footer id="footer" className="bg-nepal-dark border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-nepal-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Column 1: Company Logo & Pitch */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-tr from-nepal-amber to-nepal-gold rounded-xl text-nepal-dark">
                <Mountain className="h-6 w-6 stroke-[2.5]" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-wider text-white">
                BucketList<span className="text-nepal-gold">.</span>
              </span>
            </a>
            <p className="text-slate-400 text-sm font-light leading-relaxed">
              BucketList is Nepal's leading travel companion company, organizing curated treks, wildlife safaris, and cultural retreats. We support local tea houses and native Sherpa guides.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-nepal-gold text-slate-400 hover:text-nepal-dark border border-white/5 hover:border-transparent transition-all duration-300" aria-label="Facebook">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h3V1H13c-3.3 0-5 1.7-5 5v2z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-nepal-gold text-slate-400 hover:text-nepal-dark border border-white/5 hover:border-transparent transition-all duration-300" aria-label="Instagram">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-nepal-gold text-slate-400 hover:text-nepal-dark border border-white/5 hover:border-transparent transition-all duration-300" aria-label="Twitter">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-nepal-gold text-slate-400 hover:text-nepal-dark border border-white/5 hover:border-transparent transition-all duration-300" aria-label="Youtube">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.516 3.545 12 3.545 12 3.545s-7.516 0-9.388.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.872.507 9.388.507 9.388.507s7.516 0 9.388-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Destinations */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Destinations</h4>
            <ul className="space-y-2">
              {destinationLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-nepal-gold text-sm font-light transition-colors flex items-center gap-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-nepal-gold text-sm font-light transition-colors flex items-center gap-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company info */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-nepal-gold text-sm font-light transition-colors flex items-center gap-1">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-slate-400 text-sm font-light leading-relaxed">
                <MapPin className="h-5 w-5 text-nepal-gold shrink-0 mt-0.5" />
                <span>Suite 104, Thamel Marg, Kathmandu, Nepal</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-sm font-light">
                <Phone className="h-4.5 w-4.5 text-nepal-gold shrink-0" />
                <span>+977 1-4200500</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400 text-sm font-light hover:text-nepal-gold transition-colors">
                <Mail className="h-4.5 w-4.5 text-nepal-gold shrink-0" />
                <a href="mailto:info@bucketlistnepal.com">info@bucketlist.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyrights and Terms */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} BucketList Travel companion Co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Local Safety Guidelines</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
