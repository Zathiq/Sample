import React from 'react';
import { ServiceItem } from '../data/companyData';
import { X, Check, ArrowRight, Award } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onRequestQuote }) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-800 my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8B5]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Photograph Banner */}
        <div className="relative -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-5 h-44 sm:h-52 overflow-hidden bg-slate-900">
          <img
            src={service.imageSrc}
            alt={service.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-6 text-white text-xs font-semibold drop-shadow-sm">
            {service.imageAlt}
          </div>
        </div>

        {/* Modal Header */}
        <div className="pr-10 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00A8B5] tracking-widest uppercase mb-1">
            <span>Technical Service Scope</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Dubai, UAE</span>
          </div>
          <h3 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-[#00204A]">
            {service.name}
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            {service.shortSummary}
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="py-4 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          {/* Purpose & Value */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00204A] mb-2">
              Engineering Purpose & Core Value
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-lg border border-slate-100">
              {service.purpose}
            </p>
            <p className="mt-2 text-sm text-slate-700 leading-relaxed">
              <strong className="text-[#00204A]">Deliverable Value:</strong> {service.value}
            </p>
          </div>

          {/* Key Benefits */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00204A] mb-2">
              Key Client & Project Benefits
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {service.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00A8B5] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Scope of Work */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00204A] mb-2">
              Standard Testing Scope
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-100">
              {service.scopePoints.map((sp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#00A8B5] font-bold shrink-0">·</span>
                  <span>{sp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testing Methodology & Instruments */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00204A] mb-2">
              Methodology & Calibrated Instruments
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {service.testingMethods.map((tm, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5"></span>
                  <span>{tm}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards Referenced */}
          <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#F0F9FF] border border-cyan-100 text-xs text-[#00204A]">
            <Award className="w-4 h-4 text-[#00A8B5] shrink-0" />
            <span className="font-medium">{service.standardsReferenced}</span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            Need customized testing parameters for your project?
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestQuote(service.id);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#00A8B5] hover:bg-[#00929E] rounded-lg transition-colors shadow-xs"
            >
              <span>Select in Inquiry Form</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
