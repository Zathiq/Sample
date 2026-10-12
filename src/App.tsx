import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandBanner } from './components/BrandBanner';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Industries } from './components/Industries';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedSectorTitle, setSelectedSectorTitle] = useState<string>('');

  const handleSelectService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const handleSelectSector = (sectorTitle: string) => {
    setSelectedSectorTitle(sectorTitle);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] text-slate-800 antialiased selection:bg-[#00A8B5] selection:text-white">
      {/* Precision Engineering Mouse Pointer Animation */}
      <CustomCursor />

      {/* Top Navigation */}
      <Navbar onSelectService={handleSelectService} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Home / Hero */}
        <Hero onSelectService={handleSelectService} />

        {/* Brand Banner: 4 Core Disciplines & Official Motto from Logo */}
        <BrandBanner />

        {/* 2. About Us */}
        <About />

        {/* 3. Our Services */}
        <Services onSelectServiceForInquiry={handleSelectService} />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Industries We Serve */}
        <Industries onSelectSectorForInquiry={handleSelectSector} />

        {/* 6. Contact Us */}
        <Contact
          initialServiceId={selectedServiceId}
          initialSectorTitle={selectedSectorTitle}
        />
      </main>

      {/* 7. Footer */}
      <Footer onSelectService={handleSelectService} />
    </div>
  );
}
