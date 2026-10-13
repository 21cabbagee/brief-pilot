import React, { useState } from 'react';
import { Clock, TrendingUp, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TimeSavedCalculator({ openCabModal }) {
  const [dailyMinutes, setDailyMinutes] = useState(45);
  const [hourlyRate, setHourlyRate] = useState(150);

  // Calculations
  const annualHoursWasted = Math.round((dailyMinutes * 240) / 60); // 240 workdays
  const annualFinancialDrain = annualHoursWasted * hourlyRate;
  const deepWorkDaysRecovered = Math.round(annualHoursWasted / 6); // 6-hour deep work day

  return (
    <section id="calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-800/80">
      
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pilot-500/10 border border-pilot-500/30 text-pilot-300 text-xs font-mono font-semibold mb-2">
          <Clock className="w-3.5 h-3.5" />
          <span>Cognitive Drain & Tab-Switching Waste Calculator</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Stop Burning The First 45 Minutes of Every Morning
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Fragmented notifications reduce deep-work capacity by 40%. Calculate your firm's annual payroll loss.
        </p>
      </div>

      <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-dark-900 border border-slate-800 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Sliders (7 cols) */}
        <div className="md:col-span-7 space-y-6">
          
          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="font-semibold text-slate-300">Minutes Wasted Jumping Across 5 Tabs Each Morning:</span>
              <span className="font-mono font-bold text-pilot-400 text-sm">{dailyMinutes} mins/day</span>
            </div>
            <input
              type="range"
              min="15"
              max="90"
              step="5"
              value={dailyMinutes}
              onChange={(e) => setDailyMinutes(parseInt(e.target.value))}
              className="w-full h-1.5 accent-pilot-500 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="font-semibold text-slate-300">Executive / Founder Effective Hourly Rate:</span>
              <span className="font-mono font-bold text-cyan-400 text-sm">${hourlyRate}/hour</span>
            </div>
            <input
              type="range"
              min="50"
              max="400"
              step="25"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(parseInt(e.target.value))}
              className="w-full h-1.5 accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          <div className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 text-[11px] text-slate-400 font-mono space-y-1">
            <div>• Annual hours burned on morning triage: <strong className="text-white">{annualHoursWasted} hours/year</strong></div>
            <div>• Equivalent deep-work days reclaimed: <strong className="text-emerald-400">{deepWorkDaysRecovered} entire days</strong></div>
          </div>

        </div>

        {/* Results Box (5 cols) */}
        <div className="md:col-span-5 p-5 rounded-xl bg-gradient-to-b from-pilot-950/60 via-dark-850 to-dark-850 border border-pilot-500/40 text-center space-y-3">
          <span className="text-[10px] uppercase font-mono text-pilot-400 font-bold block">
            Annual Executive Time Cost
          </span>

          <div className="text-3xl sm:text-4xl font-black text-white font-mono">
            ${annualFinancialDrain.toLocaleString()}
          </div>
          <p className="text-[11px] text-slate-400">
            Lost productivity cost per executive per year before a single high-leverage task is touched.
          </p>

          <div className="py-2.5 px-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs">
            <span className="text-[10px] text-emerald-400 font-mono block">BriefPilot Cost</span>
            <span className="font-extrabold text-emerald-300 text-sm">$180/year (or $54/yr with CAB)</span>
          </div>

          <button
            onClick={openCabModal}
            className="w-full py-2.5 rounded-xl bg-pilot-600 hover:bg-pilot-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
          >
            <span>Claim 70% Lifetime CAB Rate</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
}
