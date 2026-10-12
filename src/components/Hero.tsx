import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { ArrowRight, Phone, CheckCircle, Shield, Award, Cpu } from 'lucide-react';
import { EngineeringVisual } from './EngineeringVisuals';

interface HeroProps {
  onSelectService: (serviceId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<'hvac' | 'thermal' | 'duct' | 'electrical'>('hvac');

  return (
    <section id="home" className="relative bg-[#00204A] text-white pt-12 pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-[#001737]">
      {/* Background Engineering Photography with Measured Scrim */}
      <img
        src="/images/dubai-skyline.jpg"
        alt="Dubai commercial skyline and engineering infrastructure"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-25 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#00204A] via-[#00204A]/90 to-[#001737]/85 pointer-events-none" />

      {/* Subtle technical background grid with brand cyan dots */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#00A8B5 1px, transparent 1px), radial-gradient(#38BDF8 1px, #00204A 1px)`,
          backgroundSize: '36px 36px',
          backgroundPosition: '0 0, 18px 18px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Zero-Pill Unboxed Metadata Kicker with Logo Motto */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#38BDF8]">
              <span>Dubai, UAE</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-[#00A8B5]">Testing · Commissioning · Validation</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>Performance Optimization</span>
            </div>

            {/* Hero Main Headline (text-wrap balance, clamp size) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.14]" style={{ textWrap: 'balance' }}>
              Precision MEP Testing, Commissioning Validation & Diagnostic Engineering
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Sutton Oasis Technical Services LLC delivers authoritative, measurement-backed testing and balancing for commercial towers, residential developments, and industrial infrastructure across the UAE. We turn engineering specifications into verifiable performance.
            </p>

            {/* 4 Core Discipline Checklist from Logo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00A8B5] shrink-0" />
                <span>HVAC Testing and Balancing (TAB)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00A8B5] shrink-0" />
                <span>Non-Destructive Thermographic Surveys</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00A8B5] shrink-0" />
                <span>DW/144 & SMACNA Duct Leakage Testing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#00A8B5] shrink-0" />
                <span>Live, Cold & Electrical Continuity Testing</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <a
                href="#contact"
                className="inline-flex justify-center items-center gap-2.5 px-6 py-3.5 bg-[#00A8B5] hover:bg-[#00929E] text-white font-bold text-sm rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8] whitespace-nowrap shrink-0"
              >
                <span>Request Inspection / Quote</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.telephoneRaw}`}
                className="inline-flex justify-center items-center gap-2 px-5 py-3.5 bg-[#001737] hover:bg-[#002D62] text-slate-100 border border-[#003B73] font-semibold text-sm rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 whitespace-nowrap shrink-0"
              >
                <Phone className="w-4 h-4 text-[#00A8B5]" />
                <span>Call +971 54 130 4006</span>
              </a>

              <a
                href="#services"
                className="inline-flex justify-center items-center px-4 py-3.5 text-xs text-slate-300 hover:text-white transition-colors underline underline-offset-4 decoration-[#00A8B5]/50 hover:decoration-[#00A8B5] whitespace-nowrap shrink-0"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Diagnostic Lab Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#001737]/95 rounded-2xl border border-[#003366] p-5 shadow-2xl backdrop-blur-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#002B55]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00A8B5] shadow-xs shadow-[#00A8B5]"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                    Diagnostic Scope Visualizer
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#38BDF8]">
                  Precision Standard
                </span>
              </div>

              {/* Discipline Interactive Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-[#001026] rounded-lg mb-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('hvac')}
                  className={`py-1.5 px-2 text-[11px] font-bold rounded transition-colors whitespace-nowrap ${
                    activeTab === 'hvac'
                      ? 'bg-[#00A8B5] text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  HVAC Air
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('thermal')}
                  className={`py-1.5 px-2 text-[11px] font-bold rounded transition-colors whitespace-nowrap ${
                    activeTab === 'thermal'
                      ? 'bg-[#00A8B5] text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Thermal IR
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('duct')}
                  className={`py-1.5 px-2 text-[11px] font-bold rounded transition-colors whitespace-nowrap ${
                    activeTab === 'duct'
                      ? 'bg-[#00A8B5] text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Duct Leak
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('electrical')}
                  className={`py-1.5 px-2 text-[11px] font-bold rounded transition-colors whitespace-nowrap ${
                    activeTab === 'electrical'
                      ? 'bg-[#00A8B5] text-white shadow-xs'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Electrical
                </button>
              </div>

              {/* Dynamic Interactive Visual Component */}
              <EngineeringVisual type={activeTab} className="bg-[#000E20] border-[#002B55]" />

              {/* Quick scope action */}
              <div className="mt-4 pt-3 border-t border-[#002B55] flex items-center justify-between text-xs text-slate-300">
                <span>Require this survey on your project?</span>
                <button
                  type="button"
                  onClick={() => {
                    const matchedService = SERVICES.find(s => s.id.includes(activeTab));
                    if (matchedService) onSelectService(matchedService.id);
                    const contactSection = document.getElementById('contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-[#00A8B5] hover:text-[#38BDF8] font-bold inline-flex items-center gap-1 hover:underline"
                >
                  <span>Select in form</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Rigor Proof Strip */}
        <div className="mt-12 pt-8 border-t border-[#002B55] grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-[#00A8B5] shrink-0" />
            <div>
              <p className="font-bold text-white">Full Safety Adherence</p>
              <p className="text-slate-400 text-xs">UAE OSHAD & site isolation protocols</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-[#00A8B5] shrink-0" />
            <div>
              <p className="font-bold text-white">Calibrated Equipment</p>
              <p className="text-slate-400 text-xs">Certified traceabilities & logs</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Award className="w-5 h-5 text-[#00A8B5] shrink-0" />
            <div>
              <p className="font-bold text-white">Consultant-Ready Reports</p>
              <p className="text-slate-400 text-xs">Detailed logs, photos & data charts</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#00A8B5] shrink-0" />
            <div>
              <p className="font-semibold text-white">Dubai & UAE Coverage</p>
              <p className="text-slate-400 text-xs">Commercial, residential & industrial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
