import React, { useState } from 'react';
import { Activity, Gauge, Thermometer, Wind, Zap, CheckCircle2 } from 'lucide-react';

interface EngineeringVisualProps {
  type: 'hvac' | 'thermal' | 'duct' | 'electrical';
  className?: string;
}

export const EngineeringVisual: React.FC<EngineeringVisualProps> = ({ type, className = '' }) => {
  // HVAC State
  const [hvacDamperPos, setHvacDamperPos] = useState<number>(78);
  // Thermal State
  const [thermalHotspotHover, setThermalHotspotHover] = useState<boolean>(false);
  // Duct Pressure State
  const [ductPressure, setDuctPressure] = useState<number>(400);
  // Electrical Mode State
  const [elecTestMode, setElecTestMode] = useState<'cold' | 'live' | 'continuity'>('continuity');

  if (type === 'hvac') {
    const calculatedCfm = Math.round(450 * (hvacDamperPos / 100));
    const targetCfm = 350;
    const deviation = Math.round(((calculatedCfm - targetCfm) / targetCfm) * 100);

    return (
      <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm text-slate-800 ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-[#00A8B5]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Airflow Balancing Simulation
            </span>
          </div>
          <span className="text-xs font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
            Target: {targetCfm} L/s
          </span>
        </div>

        {/* Technical Duct Diagram SVG */}
        <div className="my-4 relative bg-slate-900 rounded-lg p-4 text-white overflow-hidden">
          <svg viewBox="0 0 400 130" className="w-full h-auto">
            {/* Duct Body */}
            <rect x="20" y="30" width="360" height="70" rx="4" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            
            {/* Airflow Velocity Streamlines */}
            <line x1="30" y1="50" x2="160" y2="50" stroke="#0D9488" strokeWidth="2.5" strokeDasharray="6 4" />
            <line x1="30" y1="65" x2="160" y2="65" stroke="#14B8A6" strokeWidth="3" strokeDasharray="8 4" />
            <line x1="30" y1="80" x2="160" y2="80" stroke="#0D9488" strokeWidth="2.5" strokeDasharray="6 4" />

            {/* Balancing Damper Blade */}
            <g transform={`rotate(${(100 - hvacDamperPos) * 0.65}, 180, 65)`}>
              <line x1="180" y1="33" x2="180" y2="97" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" />
              <circle cx="180" cy="65" r="4" fill="#FFFFFF" />
            </g>
            <text x="180" y="24" textAnchor="middle" fill="#94A3B8" fontSize="10" fontFamily="sans-serif">
              Damper ({hvacDamperPos}%)
            </text>

            {/* Downstream Airflow */}
            <line x1="200" y1="52" x2="330" y2="52" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 3" />
            <line x1="200" y1="65" x2="330" y2="65" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="7 3" />
            <line x1="200" y1="78" x2="330" y2="78" stroke="#38BDF8" strokeWidth="2" strokeDasharray="5 3" />

            {/* Measuring Sensor Probe (Pitot / Anemometer) */}
            <line x1="340" y1="15" x2="340" y2="65" stroke="#EF4444" strokeWidth="2" />
            <circle cx="340" cy="65" r="3" fill="#EF4444" />
            <rect x="315" y="6" width="50" height="16" rx="3" fill="#B91C1C" />
            <text x="340" y="17" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">SENSOR</text>
          </svg>

          {/* Real-time reading readouts */}
          <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-800 text-center text-xs">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Measured Flow</span>
              <span className="font-mono text-sm font-semibold text-teal-400">{calculatedCfm} L/s</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Design Variance</span>
              <span className={`font-mono text-sm font-semibold ${Math.abs(deviation) <= 10 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {deviation > 0 ? `+${deviation}` : deviation}%
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Status</span>
              <span className={`text-xs font-medium ${Math.abs(deviation) <= 10 ? 'text-emerald-400' : 'text-amber-400'}`}>
                {Math.abs(deviation) <= 10 ? 'Within Tolerance' : 'Adjustment Needed'}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Damper Control Slider */}
        <div className="mt-3">
          <div className="flex justify-between text-xs text-slate-600 mb-1">
            <span>Fine-Tune Damper Regulation</span>
            <span className="font-mono font-medium text-slate-800">{hvacDamperPos}% open</span>
          </div>
          <input
            type="range"
            min="20"
            max="100"
            value={hvacDamperPos}
            onChange={(e) => setHvacDamperPos(Number(e.target.value))}
            className="w-full accent-teal-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg"
            aria-label="Damper Regulation Position"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1">
            <span>20% (Restricted)</span>
            <span>78% (Design Target)</span>
            <span>100% (Full Open)</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'thermal') {
    return (
      <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm text-slate-800 ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Thermometer className="w-4 h-4 text-[#00A8B5]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Infrared Thermographic Inspection
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500">
            Ironbow Palette · 8–14 µm
          </span>
        </div>

        {/* Thermogram Simulation Canvas */}
        <div
          className="my-4 relative rounded-lg overflow-hidden border border-slate-800 bg-gradient-to-r from-purple-950 via-indigo-900 to-amber-950 p-4 cursor-pointer select-none"
          onMouseEnter={() => setThermalHotspotHover(true)}
          onMouseLeave={() => setThermalHotspotHover(false)}
          onClick={() => setThermalHotspotHover(!thermalHotspotHover)}
        >
          <svg viewBox="0 0 380 140" className="w-full h-auto">
            {/* Electrical Breakers Layout in Dark Switchboard */}
            <rect x="20" y="20" width="70" height="100" rx="4" fill="#1e1b4b" stroke="#312e81" />
            <rect x="110" y="20" width="70" height="100" rx="4" fill="#311042" stroke="#581c87" />
            <rect x="200" y="20" width="70" height="100" rx="4" fill="#1e1b4b" stroke="#312e81" />
            <rect x="290" y="20" width="70" height="100" rx="4" fill="#1e1b4b" stroke="#312e81" />

            {/* Normal Phase Terminals (28.4°C – 32.1°C) */}
            <circle cx="55" cy="35" r="10" fill="#2563eb" opacity="0.8" />
            <circle cx="55" cy="35" r="5" fill="#38bdf8" />
            <text x="55" y="70" textAnchor="middle" fill="#93c5fd" fontSize="10">Phase A</text>
            <text x="55" y="86" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">29.4°C</text>

            {/* Hotspot Phase B Terminal (Elevated 68.7°C - High Resistance Fault) */}
            <circle cx="145" cy="35" r="22" fill="#dc2626" opacity="0.4" />
            <circle cx="145" cy="35" r="14" fill="#f97316" opacity="0.8" />
            <circle cx="145" cy="35" r="7" fill="#fde047" />
            <text x="145" y="70" textAnchor="middle" fill="#fed7aa" fontSize="10" fontWeight="bold">Phase B</text>
            <text x="145" y="86" textAnchor="middle" fill="#fef08a" fontSize="10" fontFamily="monospace" fontWeight="bold">
              68.7°C
            </text>

            {/* Crosshair Target on Hotspot */}
            <line x1="145" y1="12" x2="145" y2="58" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" />
            <line x1="122" y1="35" x2="168" y2="35" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 2" />

            {/* Phase C Terminal (30.8°C) */}
            <circle cx="235" cy="35" r="10" fill="#2563eb" opacity="0.8" />
            <circle cx="235" cy="35" r="5" fill="#38bdf8" />
            <text x="235" y="70" textAnchor="middle" fill="#93c5fd" fontSize="10">Phase C</text>
            <text x="235" y="86" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">30.8°C</text>

            {/* Neutral Terminal (28.1°C) */}
            <circle cx="325" cy="35" r="9" fill="#1d4ed8" opacity="0.8" />
            <circle cx="325" cy="35" r="4" fill="#38bdf8" />
            <text x="325" y="70" textAnchor="middle" fill="#93c5fd" fontSize="10">Neutral</text>
            <text x="325" y="86" textAnchor="middle" fill="#cbd5e1" fontSize="9" fontFamily="monospace">28.1°C</text>
          </svg>

          {/* Live Thermal Colorbar */}
          <div className="flex items-center justify-between text-[10px] text-slate-300 mt-2 px-1">
            <span>22.0°C (Ambient)</span>
            <div className="h-2 w-44 rounded bg-gradient-to-r from-blue-600 via-purple-600 via-amber-500 to-yellow-300"></div>
            <span className="font-bold text-amber-300">75.0°C (Max)</span>
          </div>
        </div>

        {/* Diagnostic Assessment Panel */}
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-3 text-xs text-amber-900">
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-amber-950">Detected Anomaly: Phase B L2 Terminal</span>
            <span className="font-mono font-bold text-amber-800">ΔT = +39.3°C</span>
          </div>
          <p className="text-amber-800 text-[11px] leading-relaxed">
            Severity Rating: Priority Rectification required. Probable loose lug termination or oxidation contact resistance. Non-destructive inspection prevented catastrophic thermal trip.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'duct') {
    // Permissible leakage per DW144 Class B: 0.009 * p^0.65 (simplified reference)
    const permissible = (0.009 * Math.pow(ductPressure, 0.65)).toFixed(2);
    const measured = (Number(permissible) * 0.42).toFixed(2);

    return (
      <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm text-slate-800 ${className}`}>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4 text-[#00A8B5]" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Duct Pressurization Leakage Test
            </span>
          </div>
          <span className="text-xs font-mono text-slate-500">
            DW/144 Class B Spec
          </span>
        </div>

        {/* Pressurized Duct Schematic */}
        <div className="my-4 bg-slate-900 rounded-lg p-4 text-white">
          <svg viewBox="0 0 380 110" className="w-full h-auto">
            {/* Sealed Test Duct Section */}
            <rect x="70" y="25" width="280" height="60" rx="3" fill="#1E293B" stroke="#0D9488" strokeWidth="2" strokeDasharray="none" />
            
            {/* Temporary Test Bladders / End Plates */}
            <rect x="65" y="22" width="10" height="66" rx="2" fill="#DC2626" />
            <rect x="345" y="22" width="10" height="66" rx="2" fill="#DC2626" />
            <text x="70" y="16" textAnchor="middle" fill="#F87171" fontSize="9">Sealed End</text>
            <text x="350" y="16" textAnchor="middle" fill="#F87171" fontSize="9">Sealed End</text>

            {/* Test Rig & Flexible Hose Input */}
            <rect x="15" y="45" width="35" height="40" rx="3" fill="#334155" />
            <path d="M50 65 C60 65, 60 55, 70 55" fill="none" stroke="#F59E0B" strokeWidth="4" />
            <text x="32" y="68" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">RIG</text>

            {/* Internal Static Pressure Visualization */}
            <circle cx="210" cy="55" r="20" fill="#0D9488" opacity="0.2" />
            <text x="210" y="52" textAnchor="middle" fill="#5EEAD4" fontSize="12" fontWeight="bold" fontFamily="monospace">
              +{ductPressure} Pa
            </text>
            <text x="210" y="66" textAnchor="middle" fill="#94A3B8" fontSize="8">Test Static Head</text>
          </svg>

          {/* Test Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 mt-2 pt-2 border-t border-slate-800 text-center">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Static Test Pressure</span>
              <span className="font-mono text-sm font-semibold text-teal-400">{ductPressure} Pa</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Allowable Limit</span>
              <span className="font-mono text-sm font-semibold text-slate-300">{permissible} L/s/m²</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase">Actual Leakage</span>
              <span className="font-mono text-sm font-semibold text-emerald-400">{measured} L/s/m²</span>
            </div>
          </div>
        </div>

        {/* Pressure Step Selector */}
        <div>
          <div className="text-xs text-slate-600 mb-1.5 flex justify-between">
            <span>Select Test Pressure Step:</span>
            <span className="font-semibold text-emerald-600 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Pass: Rate is 58% Below Limit
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[250, 400, 750].map((pressureVal) => (
              <button
                key={pressureVal}
                onClick={() => setDuctPressure(pressureVal)}
                className={`py-1.5 px-2 text-xs font-medium rounded transition-colors ${
                  ductPressure === pressureVal
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {pressureVal} Pa
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Electrical Testing Visual
  return (
    <div className={`rounded-xl border border-slate-200 bg-white p-5 shadow-sm text-slate-800 ${className}`}>
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-[#00A8B5]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-700">
            Electrical Verification Instrument
          </span>
        </div>
        <span className="text-xs font-mono text-slate-500">
          BS 7671 / DEWA Regs
        </span>
      </div>

      {/* Mode Selector */}
      <div className="flex gap-1.5 my-3 bg-slate-100 p-1 rounded-lg">
        <button
          onClick={() => setElecTestMode('continuity')}
          className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${
            elecTestMode === 'continuity' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Continuity (R1+R2)
        </button>
        <button
          onClick={() => setElecTestMode('cold')}
          className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${
            elecTestMode === 'cold' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Cold (Insulation)
        </button>
        <button
          onClick={() => setElecTestMode('live')}
          className={`flex-1 py-1 text-xs font-medium rounded transition-colors ${
            elecTestMode === 'live' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Live (Loop Zs / RCD)
        </button>
      </div>

      {/* Calibrated Meter Readout Screen */}
      <div className="bg-slate-900 rounded-lg p-4 text-white">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
          <span>CALIBRATED TEST INSTRUMENT</span>
          <span className="text-emerald-400 font-mono flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span> READY
          </span>
        </div>

        <div className="py-3 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
              {elecTestMode === 'continuity' && 'Protective Earth Continuity'}
              {elecTestMode === 'cold' && 'Insulation Resistance @ 500V DC'}
              {elecTestMode === 'live' && 'Earth Fault Loop Impedance (Zs)'}
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-mono text-2xl font-bold text-teal-400">
                {elecTestMode === 'continuity' && '0.14'}
                {elecTestMode === 'cold' && '> 999'}
                {elecTestMode === 'live' && '0.28'}
              </span>
              <span className="text-slate-300 font-mono text-sm font-semibold">
                {elecTestMode === 'continuity' && 'Ω'}
                {elecTestMode === 'cold' && 'MΩ'}
                {elecTestMode === 'live' && 'Ω'}
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Result</span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
              COMPLIANT
            </span>
          </div>
        </div>

        {/* Electrical Trace details */}
        <div className="text-[11px] text-slate-400 bg-slate-950/60 p-2.5 rounded border border-slate-800/80 mt-1">
          {elecTestMode === 'continuity' && (
            <p>Low-resistance 4-wire measurement verified bonding path to Main Earth Terminal. Reading well below 1.0Ω threshold.</p>
          )}
          {elecTestMode === 'cold' && (
            <p>Test voltage 500V DC applied between Phase, Neutral and Earth. No leakage detected; insulation integrity verified.</p>
          )}
          {elecTestMode === 'live' && (
            <p>Phase-to-earth prospective fault current validated at 821 A; trips MCB within the required &lt;0.4s disconnection time.</p>
          )}
        </div>
      </div>
    </div>
  );
};
