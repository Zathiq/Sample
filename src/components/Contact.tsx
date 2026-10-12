import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, AlertCircle, ArrowRight } from 'lucide-react';

interface ContactProps {
  initialServiceId?: string;
  initialSectorTitle?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialServiceId = '', initialSectorTitle = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceRequired: initialServiceId || '',
    projectLocation: initialSectorTitle || '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    referenceId: string;
    timestamp: string;
    name: string;
    company: string;
    serviceName: string;
  } | null>(null);

  React.useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceRequired: initialServiceId }));
    }
  }, [initialServiceId]);

  React.useEffect(() => {
    if (initialSectorTitle) {
      setFormData(prev => ({
        ...prev,
        projectLocation: prev.projectLocation ? prev.projectLocation : `Sector: ${initialSectorTitle}`
      }));
    }
  }, [initialSectorTitle]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full contact name.';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please specify your company or organization name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid corporate email address.';
    }

    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      newErrors.phone = 'Please provide a valid telephone or mobile number.';
    }

    if (!formData.serviceRequired) {
      newErrors.serviceRequired = 'Please select the required testing service.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide brief details about your project or required scope (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const matched = SERVICES.find(s => s.id === formData.serviceRequired);
      const serviceLabel = matched ? matched.name : formData.serviceRequired;
      const refNum = 'SO-' + Math.floor(100000 + Math.random() * 900000);

      setSubmittedData({
        referenceId: refNum,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        name: formData.name,
        company: formData.company,
        serviceName: serviceLabel,
      });

      setIsSubmitting(false);
    }, 700);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      serviceRequired: '',
      projectLocation: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold text-[#00A8B5] tracking-widest uppercase mb-2">
            <span>Direct Inquiries</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Technical Dispatch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#00204A]" style={{ textWrap: 'balance' }}>
            Request a Technical Quotation or Discuss Your Project Scope
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our engineering team in Dubai is available to review drawing packages, provide detailed methodology statements, and submit competitive proposals for MEP testing, commissioning, and balancing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Office Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#00204A] pb-3 border-b border-slate-200">
                Company Details
              </h3>

              {/* Office Address */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F0F9FF] text-[#00A8B5] border border-cyan-100 shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Postal & Office Address
                  </span>
                  <p className="font-bold text-[#00204A] text-sm">
                    {COMPANY_INFO.name}
                  </p>
                  <p className="text-slate-600 text-xs mt-0.5">
                    {COMPANY_INFO.postalAddress}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {COMPANY_INFO.location}
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F0F9FF] text-[#00A8B5] border border-cyan-100 shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Telephone (Direct Line)
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.telephoneRaw}`}
                    className="font-extrabold text-[#00204A] hover:text-[#00A8B5] text-base transition-colors"
                  >
                    {COMPANY_INFO.telephone}
                  </a>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Available for urgent site inquiries and consultation
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#F0F9FF] text-[#00A8B5] border border-cyan-100 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Email Correspondence
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-extrabold text-[#00204A] hover:text-[#00A8B5] text-base transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-slate-500 text-xs mt-0.5">
                    Send tender specifications and drawings directly
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200">
                <div className="p-2.5 rounded-lg bg-slate-100 text-slate-600 shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Operating Schedule
                  </span>
                  <p className="text-slate-700 text-xs font-medium">
                    {COMPANY_INFO.workingHours}
                  </p>
                  <p className="text-slate-500 text-[11px] mt-0.5">
                    Site testing can be scheduled outside normal operating hours to minimize operational disruption.
                  </p>
                </div>
              </div>
            </div>

            {/* Turnaround Commitment Card in Logo Cyan-Teal Tint */}
            <div className="p-5 rounded-xl border border-cyan-200 bg-[#F0F9FF] text-xs text-[#00204A] space-y-1">
              <span className="font-extrabold block text-sm">Fast Response Guarantee</span>
              <p className="text-slate-700 leading-relaxed">
                We review technical RFQs and site requirements promptly. Inquiries received with drawings or bills of quantities (BOQ) typically receive proposals within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Inquiry Form or Confirmation Card */}
          <div className="lg:col-span-7">
            {submittedData ? (
              <div className="bg-slate-50 rounded-2xl border border-emerald-200 p-8 text-slate-800 space-y-6 animate-in fade-in">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-100 text-emerald-700 rounded-full">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block">
                      Inquiry Received Successfully
                    </span>
                    <h3 className="text-xl font-bold text-[#00204A]">
                      Thank you, {submittedData.name}
                    </h3>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Reference Number:</span>
                    <span className="font-mono font-bold text-slate-900">{submittedData.referenceId}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Organization:</span>
                    <span className="font-semibold text-slate-900">{submittedData.company}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Service Category:</span>
                    <span className="font-bold text-[#00A8B5]">{submittedData.serviceName}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Logged Time:</span>
                    <span className="text-slate-700">{submittedData.timestamp} (UAE Standard Time)</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Our engineering team has received your project details and will review the specifications. A technical specialist will contact you via phone or email shortly to discuss site access, scheduling, and commercial terms.
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>

                  <a
                    href={`tel:${COMPANY_INFO.telephoneRaw}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00A8B5] hover:text-[#008E9B]"
                  >
                    <span>Need immediate response? Call us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5"
              >
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h3 className="text-lg font-bold text-[#00204A]">
                    Technical Scope & Quotation Request
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Fill out the fields below for our MEP engineering team.
                  </p>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Tariq Al-Mansoor"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-slate-300 focus:border-[#00A8B5] focus:ring-1 focus:ring-[#00A8B5]'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        if (errors.company) setErrors({ ...errors, company: '' });
                      }}
                      placeholder="e.g. Apex MEP Contracting LLC"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                        errors.company
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-slate-300 focus:border-[#00A8B5] focus:ring-1 focus:ring-[#00A8B5]'
                      }`}
                    />
                    {errors.company && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.company}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. t.mansoor@apexcontracting.ae"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-slate-300 focus:border-[#00A8B5] focus:ring-1 focus:ring-[#00A8B5]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">
                      Telephone / Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="e.g. +971 50 123 4567"
                      className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                          : 'border-slate-300 focus:border-[#00A8B5] focus:ring-1 focus:ring-[#00A8B5]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label htmlFor="serviceRequired" className="block text-xs font-bold text-slate-700 mb-1">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={(e) => {
                      setFormData({ ...formData, serviceRequired: e.target.value });
                      if (errors.serviceRequired) setErrors({ ...errors, serviceRequired: '' });
                    }}
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white focus:outline-none transition-colors ${
                      errors.serviceRequired
                        ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                        : 'border-slate-300 focus:border-[#00A8B5] focus:ring-1 focus:ring-[#00A8B5]'
                    }`}
                  >
                    <option value="">-- Please select the required service --</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                    <option value="combined-package">Comprehensive MEP Commissioning Package (Multiple Services)</option>
                  </select>
                  {errors.serviceRequired && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.serviceRequired}
                    </p>
                  )}
                </div>

                {/* Project Location / Sector Context */}
                <div>
                  <label htmlFor="projectLocation" className="block text-xs font-bold text-slate-700 mb-1">
                    Project Location / Facility Sector
                  </label>
                  <input
                    id="projectLocation"
                    type="text"
                    value={formData.projectLocation}
                    onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="e.g. Business Bay Commercial Tower / JAFZA Warehouse / Dubai Hills"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 focus:border-[#00A8B5] focus:ring-1 focus:ring-[#00A8B5] bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Message / Scope Details */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-1">
                    Project Details & Scope Notes <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Please specify estimated quantity of FCUs/AHUs, duct sections, distribution boards to test, or project handover target date..."
                    className={`w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border bg-white focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                        : 'border-slate-300 focus:border-[#00A8B5] focus:ring-1 focus:ring-[#00A8B5]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-xs font-extrabold uppercase tracking-wider text-white bg-[#00204A] hover:bg-[#00A8B5] transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00A8B5] disabled:opacity-60 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Technical Inquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-2.5">
                    Your details will be handled strictly by Sutton Oasis Technical Services LLC for quotation purposes.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
