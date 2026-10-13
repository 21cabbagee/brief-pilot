import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Sparkles, 
  Copy, 
  Check, 
  Download, 
  FileText, 
  Clock, 
  Flame, 
  Calendar,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MorningMemoWidget({ briefData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // 0 to 45 seconds
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [copiedMemo, setCopiedMemo] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState('Adam (Executive Baritone)');

  // Audio simulation timer
  useEffect(() => {
    let timer = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= 45.0) {
            setIsPlaying(false);
            return 0.0;
          }
          return parseFloat((prev + 0.1 * playbackSpeed).toFixed(1));
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isPlaying, playbackSpeed]);

  const handleCopyMemo = () => {
    navigator.clipboard.writeText(briefData.markdownMemo);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2000);
  };

  const progressPercent = (currentTime / 45.0) * 100;

  return (
    <div className="space-y-6">
      
      {/* 45-Second Executive Audio Briefing Player */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-dark-900 via-dark-850 to-pilot-950/40 border border-pilot-500/40 shadow-xl space-y-4">
        
        {/* Player Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-pilot-500/20 text-pilot-400 border border-pilot-500/40 flex items-center justify-center">
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-white">60-Second Audio Intelligence Briefing</h3>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-pilot-500/20 text-pilot-300">
                  ElevenLabs Turbo v2.5
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Synthesized at 7:00 AM • 45s Total Runtime
              </p>
            </div>
          </div>

          {/* Voice Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Voice:</span>
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="px-2.5 py-1 rounded-lg bg-dark-950 border border-slate-700 text-xs text-slate-200 font-mono focus:outline-none focus:border-pilot-500"
            >
              <option value="Adam (Executive Baritone)">Adam (Executive Baritone)</option>
              <option value="Rachel (British Strategist)">Rachel (British Strategist)</option>
            </select>
          </div>
        </div>

        {/* Dynamic Waveform Graphic */}
        <div className="flex items-center justify-center gap-1 h-8 px-4 bg-dark-950/80 rounded-xl border border-slate-800/80 overflow-hidden">
          {[14, 28, 20, 36, 18, 30, 24, 40, 16, 28, 34, 18, 26, 38, 22, 32, 18, 24, 30, 20].map((h, i) => (
            <div
              key={i}
              className={`w-1 rounded-full transition-all duration-150 ${
                (currentTime / 45.0) * 20 > i ? 'bg-pilot-400' : 'bg-slate-700'
              }`}
              style={{
                height: isPlaying 
                  ? `${Math.min(32, Math.max(6, h * (Math.sin(currentTime * 6 + i) + 1.2)))}px` 
                  : `${Math.min(22, h * 0.5)}px`
              }}
            ></div>
          ))}
        </div>

        {/* Player Controls Deck */}
        <div className="flex items-center justify-between gap-4 text-xs">
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-xl bg-pilot-600 hover:bg-pilot-500 text-white flex items-center justify-center shadow-md shadow-pilot-600/30 transition-all"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
            </button>

            <button
              onClick={() => setCurrentTime(0)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Restart Audio"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <span className="font-mono text-slate-300 font-bold ml-1">
              {currentTime.toFixed(1)}s / 45.0s
            </span>
          </div>

          {/* Scrub timeline */}
          <div className="flex-1 mx-2 hidden sm:block">
            <input
              type="range"
              min="0"
              max="45"
              step="0.1"
              value={currentTime}
              onChange={(e) => setCurrentTime(parseFloat(e.target.value))}
              className="w-full h-1.5 accent-pilot-400 bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Speed Buttons */}
          <div className="flex items-center gap-1 font-mono">
            {[1.0, 1.25, 1.5].map((speed) => (
              <button
                key={speed}
                onClick={() => setPlaybackSpeed(speed)}
                className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors ${
                  playbackSpeed === speed
                    ? 'bg-pilot-500 text-white'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Rendered Executive Markdown Memo */}
      <div className="p-6 rounded-2xl bg-dark-900 border border-slate-800 shadow-xl space-y-4">
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-pilot-400" />
            <h3 className="text-sm font-bold text-white">Synthesized 200-Word Markdown Memo</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMemo}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copiedMemo ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedMemo ? 'Copied to Clipboard' : 'Copy Markdown'}</span>
            </button>
          </div>
        </div>

        {/* Memo Content Display */}
        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 leading-relaxed font-sans space-y-4">
          <div className="p-4 rounded-xl bg-dark-950 border border-red-500/30 space-y-2">
            <h4 className="text-xs font-bold text-red-400 uppercase font-mono flex items-center gap-1.5">
              <Flame className="w-4 h-4" />
              <span>Top 3 Critical Fires To Extinguish</span>
            </h4>
            <div className="space-y-2 pl-1 text-xs">
              {briefData.mustAct.map((item, idx) => (
                <div key={idx} className="border-b border-slate-800/80 pb-2 last:border-b-0 last:pb-0">
                  <div className="font-bold text-white">
                    {idx + 1}. {item.subject} <span className="text-slate-500 font-mono text-[11px]">({item.source})</span>
                  </div>
                  <div className="text-slate-300 mt-0.5">{item.content}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-dark-950 border border-amber-500/30 space-y-2">
            <h4 className="text-xs font-bold text-amber-400 uppercase font-mono flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>Calendar & High-Stakes Stakeholder Prep ({briefData.totalMeetings} Meetings)</span>
            </h4>
            <p className="text-xs text-slate-300">
              Highest stakes: <strong>Q3 Board Meeting & ARR Review (09:00 AM)</strong>. Non-negotiable: Hold 1x non-participating preferred term sheet structure.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-dark-950/60 border border-slate-800 text-xs text-slate-400 space-y-1 font-mono">
            <div>• Filtered {briefData.ignoreLater.length} newsletters/digests into afternoon batch archive.</div>
            <div>• {briefData.meetingPrep.length} secondary items staged for upcoming calendar huddles.</div>
            <div className="text-pilot-300 font-semibold pt-1">
              Executive Target: Clear the 3 urgent blockers before 12:00 PM for 3h of afternoon deep focus.
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
