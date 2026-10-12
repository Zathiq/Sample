import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/companyData';
import { Wind, ClipboardCheck, Flame, ShieldAlert, Zap, ArrowRight, Eye, Check } from 'lucide-react';
import { ServiceModal } from './ServiceModal';

interface ServicesProps {
  onSelectServiceForInquiry: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForInquiry }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-5 h-5 text-[#00A8B5]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-[#00A8B5]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#00A8B5]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-[#00A8B5]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#00A8B5]" />;
      default:
        return <Wind className="w-5 h-5 text-[#00A8B5]" />;
    }
  };

  const handleSelectService = (serviceId: string) => {
    onSelectServiceForInquiry(serviceId);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00A8B5] tracking-widest uppercase mb-2">
            <span>Core Capabilities</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Testing · Commissioning · Validation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#00204A]" style={{ textWrap: 'balance' }}>
            Specialized Engineering Testing, Balancing & Survey Solutions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every service is executed with calibrated diagnostic instrumentation and compliant with international testing methodologies, delivering verified performance and transparent reports.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isMarquee = index === 0 || index === 4;

            return (
              <div
                key={service.id}
                className={`bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group ${
                  isMarquee ? 'lg:col-span-1 border-t-2 border-t-[#00A8B5]' : ''
                }`}
              >
                {/* Service Photography Header */}
                <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      onError={(e) => {
                        // Fallback container if image fails
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    {/* Service Icon Badge Overlaid on Photo */}
                    <div className="absolute bottom-3 left-3 p-2 rounded-lg bg-white/95 backdrop-blur-xs border border-white/40 shadow-xs">
                      {getServiceIcon(service.iconName)}
                    </div>

                    {/* Numerical Index Badge */}
                    <span className="absolute top-3 right-3 font-mono text-xs font-bold text-white bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur-xs">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    {/* Title & Short Summary */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#00204A] leading-snug mb-2.5">
                      {service.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {service.shortSummary}
                    </p>

                  {/* Purpose Box */}
                  <div className="mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-700 leading-relaxed">
                    <strong className="text-[#00204A] block mb-0.5">Objective:</strong>
                    {service.purpose}
                  </div>

                  {/* Benefits bullet preview */}
                  <div className="space-y-1.5 mb-5 text-xs text-slate-600">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00A8B5] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Unboxed Metadata (Zero-Pill) */}
                  {/* Card Actions */}
                  <div className="pt-4 flex items-center justify-between gap-3 border-t border-slate-100 mt-auto">
                    <button
                      type="button"
                      onClick={() => setActiveModalService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#00A8B5] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8B5] py-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>View Full Scope</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSelectService(service.id)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#00204A] hover:text-[#00A8B5] transition-colors hover:underline underline-offset-2 py-1"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Banner in Official Logo Dark Navy */}
        <div className="mt-12 bg-[#00204A] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#001737]">
          <div>
            <div className="text-xs text-[#00A8B5] font-extrabold uppercase tracking-wider mb-1">
              Need a Combined MEP Commissioning Package?
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              We offer bundled testing schedules for fit-outs, handovers, and annual facility audits.
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-1">
              Coordinated on-site execution minimizing disruption to trades and operational tenants.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="#contact"
              className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#00A8B5] hover:bg-[#00929E] rounded-lg transition-colors shadow-sm"
            >
              <span>Submit Scope for Pricing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Service Detailed Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onRequestQuote={handleSelectService}
      />
    </section>
  );
};
