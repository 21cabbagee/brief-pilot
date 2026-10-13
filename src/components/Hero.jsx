import React from 'react';
import { 
  Compass, 
  Sparkles, 
  Calendar, 
  Flame, 
  CheckCircle2, 
  Clock, 
  Volume2, 
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Inbox
} from 'lucide-react';

export default function Hero({ openCabModal }) {
  return (
    <div className="relative pt-8 pb-12 overflow-hidden border-b border-slate-800/60 bg-radial-pilot">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Long-Tail Keyword Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pilot-500/10 border border-pilot-500/30 text-pilot-300 text-xs font-mono font-medium">
            <span className="w-2 h-2 rounded-full bg-pilot-400 animate-ping"></span>
            ai daily briefing generator
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
            executive morning agenda aggregator
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
            slack calendar ai digest
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-mono">
            smart morning brief for founders
          </span>
        </div>

        {/* Target H1 & Subhead */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Your 60-Second AI Morning Briefing:{' '}
            <span className="bg-gradient-to-r from-pilot-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent">
              Calendar, Priority Tasks
            </span>{' '}
            & Inbound Fires
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Unified morning intelligence memo synthesizing your calendar, unread high-priority emails, and pending task lists into a single 60-second actionable brief.
          </p>
        </div>

        {/* CAB Pitch Banner */}
        <div className="mt-8 max-w-3xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-pilot-950/80 via-dark-900 to-dark-900 border border-pilot-500/40 shadow-xl shadow-pilot-500/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-pilot-400 bg-pilot-500/20 px-2 py-0.5 rounded">
                  Customer Advisory Board (CAB)
                </span>
                <span className="text-xs text-slate-400 font-mono">10 Founding Seats</span>
              </div>
              <p className="text-xs text-slate-200 font-medium">
                "We are assembling a 10-member Customer Advisory Board (CAB) for BriefPilot to solve this exact bottleneck. We are offering a <strong>70% lifetime platform discount</strong> and dedicated onboarding for our first cohort."
              </p>
            </div>

            <button
              onClick={openCabModal}
              className="px-4 py-2.5 rounded-xl bg-pilot-600 hover:bg-pilot-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 shrink-0"
            >
              <span>Apply for CAB Seat ($4.50/mo)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* TAM & Problem Metrics */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <div className="text-2xl font-black text-white font-mono">$360M</div>
            <div className="text-xs text-slate-400 mt-0.5">Bottoms-Up TAM (2M Execs)</div>
          </div>
          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <div className="text-2xl font-black text-pilot-400 font-mono">45 Mins</div>
            <div className="text-xs text-slate-400 mt-0.5">Wasted Morning Triage Daily</div>
          </div>
          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <div className="text-2xl font-black text-amber-400 font-mono">3 Fires</div>
            <div className="text-xs text-slate-400 mt-0.5">Top Daily Priority Limit</div>
          </div>
          <div className="p-3.5 rounded-xl bg-dark-900/60 border border-slate-800/80">
            <div className="text-2xl font-black text-cyan-400 font-mono">45s Audio</div>
            <div className="text-xs text-slate-400 mt-0.5">Voice Briefing Playback</div>
          </div>
        </div>

      </div>
    </div>
  );
}
