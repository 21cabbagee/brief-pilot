import React, { useState } from 'react';
import { TrendingUp, FileText, CheckCircle2, Clock, Zap, DollarSign, Sparkles, Send } from 'lucide-react';

/**
 * OutcomeChart for BriefPilot (Bklit UI + Julien Bek $1:$6 Sequoia Framework + Larry Ellison ROI Engine)
 * Compares $8,500/mo Chief of Staff manual triage & lost executive hours ($6 services layer)
 * with Autonomous Morning Memo & Pre-Drafted Inbox Autopilot ($1 software layer).
 */
export default function OutcomeChart({
  serviceName = "Autonomous Executive Briefing & Triage Autopilot",
  defaultExecutiveTeam = 3, // executives/founders using the system
  onCtaClick
}) {
  const [execs, setExecs] = useState(defaultExecutiveTeam);

  // Legacy Chief of Staff / EA: $8,500/mo salary + 45 hrs/mo spent by each executive reading Slack/email ($150/hr = $6,750/exec)
  const legacyServicesCost = (execs * 6750) + 4000;
  // BriefPilot autonomous software fee: $49/mo base + $29/exec
  const autoSoftwareCost = 49 + (execs * 29);
  const netExecutiveValueReclaimed = legacyServicesCost - autoSoftwareCost;
  const savingsPercent = Math.round(((legacyServicesCost - autoSoftwareCost) / legacyServicesCost) * 100);

  const maxCost = Math.max(legacyServicesCost, 1);
  const legacyBarHeight = 100;
  const autoBarHeight = Math.max(Math.round((autoSoftwareCost / maxCost) * 100), 6);

  return (
    <div className="relative rounded-2xl border border-blue-500/30 bg-slate-950/90 p-6 md:p-8 backdrop-blur-xl shadow-2xl overflow-hidden my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border bg-slate-900 border-blue-500/40 text-blue-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
            The Sequoia Equation: Software ($1) vs $8,500/mo Chief of Staff ($6)
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
            Executive Productivity Economics: <span className="text-blue-400">{savingsPercent}% Overhead Crushed</span>
          </h3>
          <p className="text-sm text-slate-300 mt-1 max-w-xl">
            Founders waste 11 hours a week drowning in 40 Slack channels and 100+ unread emails. BriefPilot delivers a synthesized 1-page morning decision memo at 7:00 AM with pre-drafted 1-click email responses.
          </p>
        </div>

        <div className="text-right bg-slate-900/80 border border-blue-500/30 rounded-xl p-3 px-4 min-w-[200px]">
          <span className="text-[11px] text-slate-400 block font-medium">Monthly Leadership Time Saved</span>
          <span className="text-2xl md:text-3xl font-black text-blue-400">
            ${netExecutiveValueReclaimed.toLocaleString()}
          </span>
          <span className="text-[10px] text-blue-300/80 flex items-center justify-end gap-1 font-semibold font-mono">
            <TrendingUp className="w-3 h-3" /> 11 hrs/wk Reclaimed Per Exec
          </span>
        </div>
      </div>

      {/* Interactive Volume Slider */}
      <div className="py-6 border-b border-white/10">
        <div className="flex items-center justify-between text-sm mb-3">
          <label className="text-slate-300 font-semibold flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            Executive / Partner Seats Covered:
          </label>
          <span className="text-base font-bold text-white bg-slate-900 px-3 py-1 rounded-lg border border-blue-500/30 font-mono">
            {execs} Executives (${(legacyServicesCost * 12).toLocaleString()}/yr Overhead Drag)
          </span>
        </div>
        <input 
          type="range" 
          min={1} 
          max={15} 
          step={1}
          value={execs}
          onChange={(e) => setExecs(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-400"
        />
        <div className="flex justify-between text-[11px] text-slate-500 mt-2 font-mono">
          <span>1 Exec (Solo Founder)</span>
          <span>3 Execs (Founding Leadership)</span>
          <span>15 Execs (Full Executive Suite & VPs)</span>
        </div>
      </div>

      {/* Bklit UI Visual Comparison Chart & Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-center">
        {/* SVG Visual Bars */}
        <div className="md:col-span-5 bg-slate-900 rounded-xl p-5 border border-white/10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 flex items-center justify-between font-mono">
            <span>Leadership Information Cost</span>
            <span className="text-[10px] text-slate-500">Live ROI Calculation</span>
          </div>

          <div className="space-y-4">
            {/* Legacy Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-rose-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                  Manual Slack/Email Drudgery ($6 Layer)
                </span>
                <span className="font-mono font-bold text-rose-300">${legacyServicesCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-rose-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-rose-600 to-indigo-600 transition-all duration-300 rounded-lg"
                  style={{ width: `${legacyBarHeight}%` }}
                />
              </div>
            </div>

            {/* Autonomous Bar */}
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-blue-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  BriefPilot Morning Autopilot ($1 Layer)
                </span>
                <span className="font-mono font-bold text-blue-300">${autoSoftwareCost.toLocaleString()}</span>
              </div>
              <div className="h-6 w-full bg-slate-950 rounded-lg overflow-hidden border border-blue-950/40">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-300 rounded-lg shadow-lg shadow-blue-500/30"
                  style={{ width: `${autoBarHeight}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-400">Annual Net Founder Value Reclaimed:</span>
            <span className="text-sm font-bold text-blue-400">+${(netExecutiveValueReclaimed * 12).toLocaleString()}</span>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="md:col-span-7 space-y-3">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Daily 7:00 AM Morning Executive Memo</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Autonomous overnight ingestion of Slack channels, GitHub PRs, Linear tickets, and urgent emails synthesized into a 3-minute executive read.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Pre-Drafted 1-Click Approval Queue</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Every critical inbound request arrives with a verified context-aware reply pre-drafted. Review, edit if needed, and send in 2 seconds.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Zero Third-Party Training or Storage</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                SOC2 Type II compliant ephemeral processing. Private keys and confidential customer threads are purged immediately upon memo dispatch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
