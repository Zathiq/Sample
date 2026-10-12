import React from 'react';
import { WHY_CHOOSE_US_POINTS } from '../data/companyData';
import { Sliders, CheckSquare, FileText, HardHat, TrendingUp } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Sliders className="w-5 h-5 text-[#00A8B5]" />;
      case 1:
        return <CheckSquare className="w-5 h-5 text-[#00A8B5]" />;
      case 2:
        return <FileText className="w-5 h-5 text-[#00A8B5]" />;
      case 3:
        return <HardHat className="w-5 h-5 text-[#00A8B5]" />;
      case 4:
        return <TrendingUp className="w-5 h-5 text-[#00A8B5]" />;
      default:
        return <Sliders className="w-5 h-5 text-[#00A8B5]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00A8B5] tracking-widest uppercase mb-2">
            <span>Competitive Differentiators</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Technical Distinction</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#00204A]" style={{ textWrap: 'balance' }}>
            Built on Measurement Accuracy, Engineering Rigor & Safety
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In technical verification, there is no substitute for empirical measurement. We provide engineering consultants, project managers, and property operators with unambiguous diagnostic integrity.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point, index) => {
            const isFullWidthOnLarge = index === 4;

            return (
              <div
                key={index}
                className={`p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-[#00A8B5] transition-all shadow-xs ${
                  isFullWidthOnLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-[#F0F9FF] border border-cyan-100">
                    {getIcon(index)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    PILLAR 0{index + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#00204A] mb-2.5">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}

          {/* Quick Technical Standard Card in Brand Cyan and Navy */}
          <div className="p-6 sm:p-7 rounded-2xl border border-[#00A8B5]/40 bg-[#F0F9FF] flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#00A8B5] block mb-1">
                Zero Compromise Commitment
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#00204A] mb-2">
                Traceable Data for Consultant Confidence
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed">
                Every test certificate and schedule of results we submit includes instrument serial numbers, calibration validity dates, and exact sampling locations.
              </p>
            </div>
            <div className="pt-4 border-t border-cyan-200/60 mt-4 text-[11px] text-[#00204A] font-bold">
              Precision · Performance · Peace of Mind
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
