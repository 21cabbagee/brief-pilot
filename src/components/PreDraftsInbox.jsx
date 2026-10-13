import React, { useState } from 'react';
import { Send, Copy, Check, Sparkles, CheckCircle2, MessageSquare, Mail, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PreDraftsInbox({ briefData }) {
  const urgentItems = briefData.mustAct || [];
  const [drafts, setDrafts] = useState(() => {
    const map = {};
    urgentItems.forEach(item => {
      map[item.id] = item.preDraftReply;
    });
    return map;
  });

  const [copiedId, setCopiedId] = useState(null);
  const [dispatchedMap, setDispatchedMap] = useState({});

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDispatch = (id) => {
    setDispatchedMap(prev => ({ ...prev, [id]: true }));
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="space-y-6">
      
      <div>
        <h3 className="text-xl font-bold text-white">1-Click Pre-Drafted Responses</h3>
        <p className="text-xs text-slate-400">
          Auto-generated replies for top priority unblocks. Review, edit, and send in seconds.
        </p>
      </div>

      <div className="space-y-4">
        {urgentItems.map(item => {
          const isSent = dispatchedMap[item.id];
          return (
            <div 
              key={item.id}
              className={`p-5 rounded-2xl border transition-all ${
                isSent
                  ? 'bg-dark-950/60 border-emerald-500/40'
                  : 'bg-dark-900 border-slate-800'
              }`}
            >
              {/* Message Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-white">{item.subject}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                    {item.source}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">From: {item.sender}</span>
              </div>

              {/* Inbound Question / Request */}
              <div className="my-3 p-3 rounded-xl bg-dark-950 border border-slate-800/80 text-xs text-slate-300">
                <span className="text-[10px] uppercase font-mono text-slate-500 block mb-1">Inbound Message:</span>
                "{item.content}"
              </div>

              {/* Pre-Draft Reply Box */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-pilot-400 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AI Pre-Drafted Executive Reply:</span>
                  </span>
                  <span className="text-slate-500">Zero Fluff • Tone: Decisive & Direct</span>
                </div>

                <textarea
                  rows={2}
                  disabled={isSent}
                  value={drafts[item.id] || ''}
                  onChange={(e) => setDrafts({ ...drafts, [item.id]: e.target.value })}
                  className="w-full p-3 rounded-xl bg-dark-950 border border-slate-700 text-xs text-slate-100 focus:outline-none focus:border-pilot-500 font-sans leading-relaxed resize-none disabled:opacity-60"
                />
              </div>

              {/* Actions */}
              <div className="mt-3 flex items-center justify-between">
                <button
                  onClick={() => handleCopy(item.id, drafts[item.id])}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  {copiedId === item.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === item.id ? 'Copied' : 'Copy Text'}</span>
                </button>

                {!isSent ? (
                  <button
                    onClick={() => handleDispatch(item.id)}
                    className="px-4 py-1.5 rounded-xl bg-pilot-600 hover:bg-pilot-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>1-Click Dispatch to {item.source.split(' ')[0]}</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Dispatched to {item.sender}</span>
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
