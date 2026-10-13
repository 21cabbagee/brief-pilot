import React from 'react';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';

export default function Footer({ openCabModal, setActiveTab }) {
  return (
    <footer className="border-t border-slate-800/80 bg-dark-950 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-pilot-600 flex items-center justify-center text-white font-black text-xs">
                BP
              </div>
              <span className="font-bold text-white text-base">BriefPilot</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Unified morning intelligence memo synthesizing your calendar, unread high-priority emails, and pending task lists into a single 60-second actionable brief.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-pilot-400">
              <span className="w-2 h-2 rounded-full bg-pilot-400"></span>
              <span>GPT-4o-mini + ElevenLabs TTS Synthesis</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Core Intelligence
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('memo')}
                  className="hover:text-white transition-colors"
                >
                  60s Audio Briefing & Markdown Memo
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('triage')}
                  className="hover:text-white transition-colors"
                >
                  3-Tier Urgency Classifier (P0/P1/P2)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('inbox')}
                  className="hover:text-white transition-colors"
                >
                  1-Click Pre-Drafted Action Inbox
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('calculator')}
                  className="hover:text-white transition-colors"
                >
                  Tab-Switching Waste Calculator
                </button>
              </li>
            </ul>
          </div>

          {/* SEO Focus */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Target Solutions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>AI Daily Briefing Generator</li>
              <li>Executive Morning Agenda Aggregator</li>
              <li>Slack Calendar AI Digest</li>
              <li>Smart Morning Brief for Founders</li>
            </ul>
          </div>

          {/* CAB Program */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">
              Customer Advisory Board
            </h4>
            <p className="text-xs text-slate-400">
              Apply for our 10-member founding cohort for a 70% lifetime platform discount ($4.50/mo).
            </p>
            <button
              onClick={openCabModal}
              className="px-3 py-1.5 rounded-lg bg-pilot-500/20 text-pilot-300 border border-pilot-500/30 hover:bg-pilot-500/30 text-xs font-semibold transition-colors"
            >
              Apply for CAB Seat →
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div>
            © 2026 BriefPilot • Canonical: <code>/tools/executive-daily-ai-briefing-aggregator</code>
          </div>
          <div className="flex items-center gap-4">
            <span>Next.js 14 App Router</span>
            <span>•</span>
            <span>Fastify/Node</span>
            <span>•</span>
            <span>Telegram Bot API</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
