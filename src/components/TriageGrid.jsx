import React from 'react';
import { Flame, Calendar, EyeOff, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

export default function TriageGrid({ briefData, onSelectDraft }) {
  const { mustAct, meetingPrep, ignoreLater } = briefData;

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-white">3-Tier Morning Urgency Classifier</h3>
          <p className="text-xs text-slate-400">
            Triaged via GPT-4o-mini structured reasoning • Zero cognitive clutter
          </p>
        </div>

        <span className="text-xs font-mono text-pilot-400 bg-pilot-500/10 px-2.5 py-1 rounded-full border border-pilot-500/30">
          {mustAct.length} P0 Blocker{mustAct.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        
        {/* TIER 1: MUST ACT TODAY (P0) */}
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold text-red-300 uppercase font-mono">1. Must Act Today</span>
            </div>
            <span className="text-xs font-mono font-bold text-red-400 bg-red-500/20 px-2 py-0.5 rounded">
              P0 Urgent ({mustAct.length})
            </span>
          </div>

          <div className="space-y-3">
            {mustAct.map(item => (
              <div 
                key={item.id}
                className="p-4 rounded-xl bg-dark-900 border border-red-500/30 hover:border-red-500 transition-colors shadow-sm space-y-2 text-xs"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="text-red-300 font-semibold">{item.source}</span>
                  <span className="text-red-400 font-bold">{item.urgencyScore}/100</span>
                </div>

                <div className="font-bold text-white leading-tight">
                  {item.subject}
                </div>

                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {item.content}
                </p>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono">From: {item.sender}</span>
                  <button
                    onClick={() => onSelectDraft(item)}
                    className="px-2.5 py-1 rounded-lg bg-red-500/20 text-red-300 hover:bg-red-500/30 font-bold text-[10px] transition-colors flex items-center gap-1"
                  >
                    <span>View 1-Click Draft</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TIER 2: MEETING PREP REQUIRED (P1) */}
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold text-amber-300 uppercase font-mono">2. Meeting Prep</span>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded">
              P1 High ({meetingPrep.length})
            </span>
          </div>

          <div className="space-y-3">
            {meetingPrep.map(item => (
              <div 
                key={item.id}
                className="p-4 rounded-xl bg-dark-900 border border-slate-800 hover:border-amber-500/40 transition-colors space-y-2 text-xs"
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="text-amber-300 font-semibold">{item.source}</span>
                  <span className="text-amber-400 font-bold">{item.urgencyScore}/100</span>
                </div>

                <div className="font-bold text-white leading-tight">
                  {item.subject}
                </div>

                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {item.content}
                </p>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono">From: {item.sender}</span>
                  <button
                    onClick={() => onSelectDraft(item)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-medium text-[10px] transition-colors"
                  >
                    Review Talking Points
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TIER 3: IGNORE / READ LATER (P2) */}
        <div className="space-y-3">
          <div className="p-3 rounded-xl bg-dark-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-slate-500" />
              <span className="text-xs font-bold text-slate-400 uppercase font-mono">3. Noise / Archive</span>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
              P2 Low ({ignoreLater.length})
            </span>
          </div>

          <div className="space-y-3">
            {ignoreLater.map(item => (
              <div 
                key={item.id}
                className="p-3.5 rounded-xl bg-dark-950/60 border border-slate-800 text-xs space-y-1.5 opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="text-[10px] font-mono text-slate-500">{item.sender} • {item.source}</div>
                <div className="font-semibold text-slate-300 line-clamp-1">{item.subject}</div>
                <p className="text-[11px] text-slate-500 line-clamp-1">{item.content}</p>
                <div className="text-[10px] font-mono text-slate-600 pt-1">
                  ✓ Automatically filtered from morning audio brief
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
