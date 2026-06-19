import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TripDiscovery from './components/TripDiscovery';
import Destinations from './components/Destinations';
import Experiences from './components/Experiences';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import TravelGallery from './components/TravelGallery';
import Newsletter from './components/Newsletter';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-nepal-dark min-h-screen text-slate-100 selection:bg-nepal-gold selection:text-nepal-dark">
      {/* Sticky Top Header Navigation */}
      <Navbar />
      
      {/* Page Content Portals */}
      <main>
        {/* Full-screen Himalayan Hero */}
        <Hero />
        
        {/* Floating Search Discovery Deck */}
        <TripDiscovery />
        
        {/* Interactive Destinations Grid */}
        <Destinations />
        
        {/* Signature Experiences Catalog */}
        <Experiences />
        
        {/* Brand Value Propositions */}
        <WhyChooseUs />
        
        {/* Workflow Animated Timeline */}
        <HowItWorks />
        
        {/* Interactive Reviews Slider */}
        <Testimonials />
        
        {/* Pinterest Masonry Lightbox Gallery */}
        <TravelGallery />
        
        {/* Inspirational newsletter capture */}
        <Newsletter />
        
        {/* Final Conversion CTA banner */}
        <FinalCTA />
      </main>
      
      {/* Structured Footer Directories */}
      <Footer />
    </div>
  );
}
