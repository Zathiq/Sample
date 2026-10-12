import React from 'react';
import { Wind, Cog, ShieldCheck, TrendingUp } from 'lucide-react';

export const BrandBanner: React.FC = () => {
  return (
    <div className="bg-white border-y border-slate-200 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Core Pillars Badges (Direct from Uploaded Logo) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {/* 1. TESTING */}
          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4 first:pt-0">
            <div className="w-11 h-11 rounded-full border-2 border-[#00204A] flex items-center justify-center shrink-0 bg-slate-50">
              {/* Wind / Airflow curves */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#00A8B5]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 8h11a3 3 0 1 0-3-3" />
                <path d="M2 13h16a3 3 0 1 0-3-3" />
                <path d="M6 18h7a2.5 2.5 0 1 0-2.5-2.5" />
              </svg>
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#00204A] block">
                Testing
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                HVAC Air & Electrical
              </span>
            </div>
          </div>

          {/* 2. COMMISSIONING */}
          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4">
            <div className="w-11 h-11 rounded-full border-2 border-[#00A8B5] flex items-center justify-center shrink-0 bg-[#F0F9FF]">
              <Cog className="w-5 h-5 text-[#00A8B5]" />
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#00204A] block">
                Commissioning
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Systematic Handover
              </span>
            </div>
          </div>

          {/* 3. VALIDATION */}
          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4">
            <div className="w-11 h-11 rounded-full border-2 border-[#00204A] flex items-center justify-center shrink-0 bg-slate-50">
              <ShieldCheck className="w-5 h-5 text-[#00A8B5]" />
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#00204A] block">
                Validation
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Condition Surveys & Audit
              </span>
            </div>
          </div>

          {/* 4. PERFORMANCE OPTIMIZATION */}
          <div className="flex items-center gap-3 pt-3 sm:pt-0 sm:px-4">
            <div className="w-11 h-11 rounded-full border-2 border-[#00204A] flex items-center justify-center shrink-0 bg-slate-50">
              <TrendingUp className="w-5 h-5 text-[#00A8B5]" />
            </div>
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#00204A] block leading-tight">
                Performance Optimization
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Energy & Air Balancing
              </span>
            </div>
          </div>
        </div>

        {/* Official Motto Banner (Direct from Uploaded Logo) */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-center gap-3 sm:gap-6 text-center select-none">
          <div className="hidden sm:block h-[1.5px] w-16 bg-[#00A8B5]"></div>
          <div className="text-xs sm:text-sm font-extrabold tracking-[0.16em] uppercase flex items-center gap-2 flex-wrap justify-center">
            <span className="text-[#00204A]">Precision.</span>
            <span className="text-[#00A8B5]">Performance.</span>
            <span className="text-[#00204A]">Peace of Mind.</span>
          </div>
          <div className="hidden sm:block h-[1.5px] w-16 bg-[#00A8B5]"></div>
        </div>
      </div>
    </div>
  );
};
