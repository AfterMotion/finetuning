import React from 'react';

export interface TelemetryCardProps {
  label: string;
  value: string | number;
  unit?: string;
  statusText?: string;
  statusLevel?: 'nominal' | 'elevated' | 'danger';
  className?: string;
}

export const TelemetryCard: React.FC<TelemetryCardProps> = ({
  label,
  value,
  unit,
  statusText,
  statusLevel = 'nominal',
  className = '',
}) => {
  const beaconColors = {
    nominal: 'bg-[#10B981] shadow-[0_0_8px_#10B981]',
    elevated: 'bg-[#F09320] shadow-[0_0_8px_#F09320]',
    danger: 'bg-[#EF4444] shadow-[0_0_8px_#EF4444]',
  }[statusLevel];

  const statusTextColors = {
    nominal: 'text-emerald-400',
    elevated: 'text-amber-400',
    danger: 'text-red-400',
  }[statusLevel];

  return (
    <div
      className={`bg-[#131D31] border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-3 ${className}`}
      style={{ fontFamily: 'var(--font-primary, Outfit, sans-serif)' }}
    >
      <div className="flex justify-between items-center">
        <span
          className="text-xs font-mono uppercase text-slate-400 tracking-wider"
          style={{ fontFamily: 'var(--font-mono, JetBrains Mono, monospace)' }}
        >
          {label}
        </span>
        <span className={`w-2.5 h-2.5 rounded-full ${beaconColors}`} aria-hidden="true" />
      </div>

      <div
        className="text-3xl font-extrabold text-slate-50 flex items-baseline gap-1.5"
        style={{ fontFamily: 'var(--font-display, Syne, sans-serif)' }}
      >
        <span>{value}</span>
        {unit && (
          <span
            className="text-sm font-normal text-slate-400 font-mono"
            style={{ fontFamily: 'var(--font-mono, JetBrains Mono, monospace)' }}
          >
            {unit}
          </span>
        )}
      </div>

      {statusText && (
        <div
          className={`text-xs font-mono font-medium ${statusTextColors}`}
          style={{ fontFamily: 'var(--font-mono, JetBrains Mono, monospace)' }}
        >
          {statusText}
        </div>
      )}
    </div>
  );
};

