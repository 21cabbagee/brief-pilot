import React from 'react';
import { RefreshCw, Check, Calendar, MessageSquare, Zap } from 'lucide-react';
import { sampleBriefPresets } from '../data/briefPresets';

export default function ContextInputFeed({ currentPreset, onSelectPreset }) {
  return (
    <div className="p-4 rounded-2xl bg-dark-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-300">Active Morning Context:</span>
        <div className="flex flex-wrap gap-2">
          {sampleBriefPresets.map(preset => (
            <button
              key={preset.id}
              onClick={() => onSelectPreset(preset)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                currentPreset.id === preset.id
                  ? 'bg-pilot-600 text-white font-bold shadow-sm'
                  : 'bg-dark-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-xs font-mono text-pilot-400 bg-pilot-950/40 px-3 py-1 rounded-full border border-pilot-800/40">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span>Google Calendar + Slack OAuth Synced</span>
      </div>
    </div>
  );
}
