import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#00204A] text-slate-300 border-t border-[#001737] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Summary (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" size="md" />
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm pt-2">
              Sutton Oasis Technical Services LLC delivers independent MEP testing, HVAC balancing, thermographic surveys, and electrical validation across Dubai and the United Arab Emirates.
            </p>
            <div className="text-[11px] text-slate-400 pt-2 space-y-1">
              <p>Commercial Registration: Dubai, UAE</p>
              <p>Postal Box: P.O. Box 187007, Dubai, United Arab Emirates</p>
            </div>
            {/* Logo Motto Strip */}
            <div className="pt-2 text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 text-slate-400">
              <span className="text-white">Precision.</span>
              <span className="text-[#00A8B5]">Performance.</span>
              <span className="text-white">Peace of Mind.</span>
            </div>
          </div>

          {/* Column 2: Technical Services (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-slate-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectService(s.id);
                      const sElem = document.getElementById('services');
                      if (sElem) sElem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-[#00A8B5] transition-colors text-left"
                  >
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#about" className="hover:text-[#00A8B5] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-[#00A8B5] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#00A8B5] transition-colors">
                  Industries We Serve
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#00A8B5] transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Coordinates (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Dubai Office
            </h4>
            <div className="space-y-2.5 text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
                <span>P.O. Box 187007, Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00A8B5] shrink-0" />
                <a href={`tel:${COMPANY_INFO.telephoneRaw}`} className="hover:text-[#00A8B5] transition-colors font-semibold">
                  {COMPANY_INFO.telephone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00A8B5] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#00A8B5] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back-to-Top bar */}
        <div className="mt-12 pt-8 border-t border-[#001737] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <div>
            © {currentYear} {COMPANY_INFO.legalName}. All rights reserved. Registered in Dubai, UAE.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#00A8B5] font-semibold">
              Testing · Commissioning · Validation · Optimization
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-300 hover:text-[#00A8B5] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00A8B5]"
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
