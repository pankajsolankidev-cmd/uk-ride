import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VehiclesSection from './components/VehiclesSection';
import WhyChooseUs from './components/WhyChooseUs';
import PopularDistances from './components/PopularDistances';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-navy-950 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <VehiclesSection />
        <WhyChooseUs />
        <PopularDistances />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
