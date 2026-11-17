import React, { useEffect, useRef } from 'react';
import { Button } from './Button';

export interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  // Accessible Escape key listener & focus trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    firstInputRef.current?.focus();

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070D18]/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-xl bg-[#131D31] border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative"
        style={{ fontFamily: 'var(--font-primary, Outfit, sans-serif)' }}
      >
        {/* Header & Close Button */}
        <div className="flex justify-between items-start">
          <div>
            <h2
              id="consultation-modal-title"
              className="text-2xl font-extrabold text-slate-50"
              style={{ fontFamily: 'var(--font-display, Syne, sans-serif)' }}
            >
              Book Technical Briefing
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Connect directly with our senior staging director to review CAD schematics and acoustic riders.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-100 p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="modal-name" className="block text-sm font-medium text-slate-300">
              Full Name &amp; Title <span className="text-[#F09320]">*</span>
            </label>
            <input
              ref={firstInputRef}
              type="text"
              id="modal-name"
              required
              placeholder="e.g. Tanvir Ahmed, Brand Director"
              className="w-full h-11 px-3.5 bg-[#0F172A] border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#F09320] focus:ring-2 focus:ring-[#F09320]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="modal-org" className="block text-sm font-medium text-slate-300">
              Organization / Conglomerate <span className="text-[#F09320]">*</span>
            </label>
            <input
              type="text"
              id="modal-org"
              required
              placeholder="e.g. BSRM Group / UCB / BYD"
              className="w-full h-11 px-3.5 bg-[#0F172A] border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#F09320] focus:ring-2 focus:ring-[#F09320]"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="modal-venue" className="block text-sm font-medium text-slate-300">
              Target City / Venue <span className="text-[#F09320]">*</span>
            </label>
            <select
              id="modal-venue"
              required
              className="w-full h-11 px-3.5 bg-[#0F172A] border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:border-[#F09320] focus:ring-2 focus:ring-[#F09320]"
            >
              <option value="ctg-radisson">Chattogram (Radisson Blu Grand Ballroom)</option>
              <option value="dhk-sheraton">Dhaka (Sheraton Banani Ballroom)</option>
              <option value="ctg-gec">Chattogram (GEC Convention Centre)</option>
            </select>
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Submit Brief &amp; Request Stage Call
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

