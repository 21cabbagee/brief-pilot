import React from 'react';
import { Compass, Sparkles, AlertCircle, FileText, CheckCircle2, Clock, Zap } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, openCabModal }) {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-dark-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <div 
          onClick={() => setActiveTab('memo')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pilot-500 via-pilot-600 to-cyan-600 flex items-center justify-center text-white shadow-lg shadow-pilot-500/25 group-hover:scale-105 transition-transform">
            <Compass className="w-5 h-5 fill-white stroke-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                BriefPilot
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-pilot-500/15 text-pilot-300 border border-pilot-500/30">
                v1.0
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
              Executive Daily Briefing & Priority Aggregator
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-900 p-1 rounded-xl border border-slate-800/80">
          <button
            onClick={() => setActiveTab('memo')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'memo'
                ? 'bg-pilot-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            60s Morning Memo
          </button>

          <button
            onClick={() => setActiveTab('triage')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'triage'
                ? 'bg-pilot-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            Urgency Triage (P0/P1/P2)
          </button>

          <button
            onClick={() => setActiveTab('inbox')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'inbox'
                ? 'bg-pilot-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            1-Click Pre-Drafts
          </button>

          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
              activeTab === 'calculator'
                ? 'bg-pilot-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            Tab-Waste Calculator
          </button>
        </nav>

        {/* CAB Action Button */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 text-xs text-pilot-300 bg-pilot-950/60 border border-pilot-800/60 px-2.5 py-1 rounded-full font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-pilot-400 animate-pulse"></span>
            <span>CAB Cohort Open</span>
          </div>

          <button
            onClick={openCabModal}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-pilot-600 to-cyan-600 hover:from-pilot-500 hover:to-cyan-500 text-white shadow-md shadow-pilot-600/30 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join CAB (70% Off)</span>
          </button>
        </div>

      </div>
    </header>
  );
}
