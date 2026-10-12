import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Target, Compass, Layers, FileCheck, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00A8B5] tracking-widest uppercase mb-2">
            <span>Corporate Background</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Dubai, United Arab Emirates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#00204A]" style={{ textWrap: 'balance' }}>
            Delivering Empirical Accuracy & Technical Integrity for UAE Built Assets
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Sutton Oasis Technical Services LLC is an independent technical engineering services company based in Dubai. We specialize in precision testing, system balancing, and commissioning verification across mechanical, electrical, and plumbing (MEP) installations.
          </p>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              In the modern built environment of the UAE, complex HVAC systems and high-density electrical networks require meticulous validation. When building systems operate out of balance, the consequences are immediate: hot spots in tenant spaces, inflated DEWA energy consumption, unmanaged duct condensation, and silent electrical overloads.
            </p>
            <p>
              At <strong>{COMPANY_INFO.name}</strong>, our role is clear and uncompromising: to deliver accurate, non-biased, and empirical diagnostic data. We bridge the critical gap between engineering design drawings and practical on-site performance. Whether verifying air distribution in a commercial office tower, conducting a pre-handover MEP condition survey, or scanning switchgear under full load with thermographic infrared cameras, we prioritize precision above all else.
            </p>
            <p>
              Guided by our company motto — <em>Precision. Performance. Peace of Mind.</em> — our team operates with a safety-first mindset on every job site, utilizing strictly calibrated diagnostic instruments. Our engineering documentation delivers clean, traceable test logs and actionable recommendations that consulting engineers, main contractors, and facility managers can rely upon for handover approvals and operational peace of mind.
            </p>

            {/* Core Values / Operational Disciplines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-[#00A8B5] transition-colors">
                <div className="flex items-center gap-2 text-[#00204A] font-bold text-sm mb-1">
                  <Target className="w-4 h-4 text-[#00A8B5]" />
                  <span>Measurement-First Culture</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We base every conclusion on empirical data logged via calibrated instrumentation, eliminating guesswork.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-[#00A8B5] transition-colors">
                <div className="flex items-center gap-2 text-[#00204A] font-bold text-sm mb-1">
                  <Compass className="w-4 h-4 text-[#00A8B5]" />
                  <span>Objective Independence</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Unbiased testing that provides genuine condition clarity for clients, consultants, and landlords.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-[#00A8B5] transition-colors">
                <div className="flex items-center gap-2 text-[#00204A] font-bold text-sm mb-1">
                  <Layers className="w-4 h-4 text-[#00A8B5]" />
                  <span>Comprehensive Scopes</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From air duct static pressures to live electrical loop impedance, our diagnostic scope is rigorous.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 hover:border-[#00A8B5] transition-colors">
                <div className="flex items-center gap-2 text-[#00204A] font-bold text-sm mb-1">
                  <FileCheck className="w-4 h-4 text-[#00A8B5]" />
                  <span>Definitive Reporting</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Clear schematics, raw figures, delta calculations, and structured logs ready for consultant sign-off.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Facts & Operating Principles with On-Site Photography */}
          <div className="lg:col-span-5 space-y-6">
            {/* Engineering Facility Photography Card */}
            <div className="relative h-52 sm:h-60 rounded-2xl overflow-hidden border border-slate-200 shadow-xs group">
              <img
                src="/images/mep-validation.jpg"
                alt="Commercial mechanical plant room and chilled water piping inspection in Dubai"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00A8B5] block mb-0.5">
                  On-Site Inspection & Verification
                </span>
                <p className="text-sm font-bold text-white drop-shadow-sm">
                  Commercial Mechanical & Electrical Commissioning in Dubai
                </p>
              </div>
            </div>

            {/* Corporate Standards Card */}
            <div className="bg-[#00204A] text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#001737]">
              <h3 className="text-lg font-bold text-white mb-4 pb-3 border-b border-[#003366]">
                Our Professional Standard
              </h3>

            <div className="space-y-5 text-xs sm:text-sm">
              <div>
                <span className="text-[#00A8B5] font-bold block text-xs uppercase tracking-wider mb-1">
                  Operational Focus
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Specialized MEP testing, HVAC balancing, thermography, duct leakage verification, and electrical safety validation.
                </p>
              </div>

              <div>
                <span className="text-[#00A8B5] font-bold block text-xs uppercase tracking-wider mb-1">
                  Location & Reach
                </span>
                <p className="text-slate-300 leading-relaxed">
                  Registered in Dubai, UAE (P.O. Box 187007). Serving projects across commercial business districts, free zones, industrial estates, and residential master developments.
                </p>
              </div>

              <div>
                <span className="text-[#00A8B5] font-bold block text-xs uppercase tracking-wider mb-1">
                  Stakeholders We Partner With
                </span>
                <ul className="text-slate-300 space-y-1.5 mt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8B5] shrink-0" />
                    <span>MEP Design Consultants & Engineers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8B5] shrink-0" />
                    <span>Main Contractors & MEP Subcontractors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8B5] shrink-0" />
                    <span>Commercial Property & Facility Managers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A8B5] shrink-0" />
                    <span>Real Estate Developers & Tenancy Fit-Out Teams</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-[#003366]">
                <span className="text-slate-400 block text-xs mb-1">Direct Technical Inquiry:</span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-[#38BDF8] hover:text-white transition-colors font-semibold text-sm"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
};
