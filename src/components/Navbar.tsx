import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onSelectService?: (serviceId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Direct Technical Dispatch Strip (Logo Navy & Cyan) */}
      <div className="bg-[#00204A] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-[#003366]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 text-slate-300 text-[11px] sm:text-xs">
            <span className="font-medium">Dubai, United Arab Emirates</span>
            <span aria-hidden="true" className="text-[#00A8B5]">·</span>
            <span className="text-[#00A8B5] font-semibold">Testing · Commissioning · Validation</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href={`tel:${COMPANY_INFO.telephoneRaw}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#00A8B5] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00A8B5]" />
              <span className="font-semibold">{COMPANY_INFO.telephone}</span>
            </a>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#00A8B5] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#00A8B5]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Top Bar (Conforming to Top Bar Contract) */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
          isScrolled ? 'shadow-sm border-b border-slate-200 py-3' : 'border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Exact Brand Wordmark Element */}
          <a
            href="#home"
            className="flex items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8B5] rounded"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: 5 Concise Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#00204A]" aria-label="Main Navigation">
            <a
              href="#about"
              className="whitespace-nowrap shrink-0 hover:text-[#00A8B5] transition-colors py-1 relative hover:underline underline-offset-4 decoration-[#00A8B5] decoration-2"
            >
              About Us
            </a>
            <a
              href="#services"
              className="whitespace-nowrap shrink-0 hover:text-[#00A8B5] transition-colors py-1 relative hover:underline underline-offset-4 decoration-[#00A8B5] decoration-2"
            >
              Our Services
            </a>
            <a
              href="#why-choose-us"
              className="whitespace-nowrap shrink-0 hover:text-[#00A8B5] transition-colors py-1 relative hover:underline underline-offset-4 decoration-[#00A8B5] decoration-2"
            >
              Why Choose Us
            </a>
            <a
              href="#industries"
              className="whitespace-nowrap shrink-0 hover:text-[#00A8B5] transition-colors py-1 relative hover:underline underline-offset-4 decoration-[#00A8B5] decoration-2"
            >
              Industries
            </a>
            <a
              href="#contact"
              className="whitespace-nowrap shrink-0 hover:text-[#00A8B5] transition-colors py-1 relative hover:underline underline-offset-4 decoration-[#00A8B5] decoration-2"
            >
              Contact Us
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#00204A] hover:bg-[#00A8B5] rounded-lg transition-colors shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8B5] whitespace-nowrap shrink-0"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#00204A] hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8B5]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
            <nav className="flex flex-col space-y-3 font-semibold text-[#00204A] text-sm">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100"
              >
                Our Services
              </a>
              <a
                href="#why-choose-us"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100"
              >
                Why Choose Us
              </a>
              <a
                href="#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100"
              >
                Industries We Serve
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded hover:bg-slate-100"
              >
                Contact & Inquiries
              </a>
              <div className="pt-2 border-t border-slate-100">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#00204A] hover:bg-[#00A8B5] rounded-lg transition-colors"
                >
                  Request Technical Quotation
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
