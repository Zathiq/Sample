import React, { useState } from 'react';
import { INDUSTRIES, IndustryItem } from '../data/companyData';
import { Building2, Home, Factory, HardHat, Hotel, Server, ArrowRight, CheckCircle2 } from 'lucide-react';

interface IndustriesProps {
  onSelectSectorForInquiry: (sectorTitle: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onSelectSectorForInquiry }) => {
  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES[0].id);

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case 'commercial':
        return <Building2 className="w-5 h-5" />;
      case 'residential':
        return <Home className="w-5 h-5" />;
      case 'industrial':
        return <Factory className="w-5 h-5" />;
      case 'construction':
        return <HardHat className="w-5 h-5" />;
      case 'hospitality':
        return <Hotel className="w-5 h-5" />;
      case 'critical-infrastructure':
        return <Server className="w-5 h-5" />;
      default:
        return <Building2 className="w-5 h-5" />;
    }
  };

  const selectedIndustry = INDUSTRIES.find(i => i.id === activeIndustryId) || INDUSTRIES[0];

  const handleInquireForSector = (sectorTitle: string) => {
    onSelectSectorForInquiry(sectorTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00A8B5] tracking-widest uppercase mb-2">
            <span>Sectors & Applications</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>UAE Regional Focus</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#00204A]" style={{ textWrap: 'balance' }}>
            Tailored Engineering Testing for Diverse Built Environments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From high-rise commercial headquarters along Sheikh Zayed Road to critical industrial distribution facilities and luxury developments, we adapt testing methodologies to specific operational demands.
          </p>
        </div>

        {/* Interactive Industry Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sector Tab Navigation */}
          <div className="lg:col-span-5 space-y-2">
            {INDUSTRIES.map((industry) => {
              const isActive = industry.id === activeIndustryId;

              return (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => setActiveIndustryId(industry.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8B5] ${
                    isActive
                      ? 'bg-white border-[#00A8B5] shadow-sm text-[#00204A]'
                      : 'bg-white/60 border-slate-200/80 hover:bg-white text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isActive ? 'bg-[#00204A] text-[#00A8B5]' : 'bg-slate-100 text-slate-600 group-hover:text-[#00A8B5]'
                      }`}
                    >
                      {getIndustryIcon(industry.id)}
                    </div>
                    <div>
                      <h3 className={`text-sm font-bold ${isActive ? 'text-[#00204A]' : 'text-slate-800'}`}>
                        {industry.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform shrink-0 ml-2 ${
                      isActive ? 'text-[#00A8B5] translate-x-0.5' : 'text-slate-300 group-hover:text-slate-500'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Sector Showcase Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Sector Photography Header Banner */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-900">
              <img
                src={
                  selectedIndustry.id === 'commercial' ? '/images/dubai-skyline.jpg' :
                  selectedIndustry.id === 'industrial' ? '/images/electrical-switchgear.jpg' :
                  selectedIndustry.id === 'construction' ? '/images/duct-installation.jpg' :
                  selectedIndustry.id === 'critical-infrastructure' ? '/images/thermographic-survey.jpg' :
                  selectedIndustry.id === 'residential' ? '/images/hvac-air-handler.jpg' :
                  '/images/mep-validation.jpg'
                }
                alt={selectedIndustry.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/95 text-[#00A8B5] border border-white/40 shadow-xs">
                    {getIndustryIcon(selectedIndustry.id)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#38BDF8] block">
                      Sector Focus
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {selectedIndustry.title}
                    </h3>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-300 bg-slate-950/60 px-2.5 py-1 rounded backdrop-blur-xs">
                  UAE Standard
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00204A] mb-1.5">
                  Sector Overview
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedIndustry.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00204A] mb-2">
                  Primary Testing Applications
                </h4>
                <div className="space-y-2">
                  {selectedIndustry.keyApplications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#00204A] mb-1.5">
                  Strategic Engineering Value
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-[#F0F9FF] p-3 rounded-lg border border-cyan-100">
                  {selectedIndustry.relevance}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Planning testing for this asset category?
                </span>
                <button
                  type="button"
                  onClick={() => handleInquireForSector(selectedIndustry.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#00204A] hover:bg-[#00A8B5] px-4 py-2.5 rounded-lg transition-colors shadow-xs"
                >
                  <span>Inquire for {selectedIndustry.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
