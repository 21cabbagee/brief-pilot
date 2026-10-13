import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContextInputFeed from './components/ContextInputFeed';
import MorningMemoWidget from './components/MorningMemoWidget';
import TriageGrid from './components/TriageGrid';
import PreDraftsInbox from './components/PreDraftsInbox';
import TimeSavedCalculator from './components/TimeSavedCalculator';
import CabModal from './components/CabModal';
import Footer from './components/Footer';
import { sampleBriefPresets } from './data/briefPresets';
import { synthesizeMorningBrief } from './utils/briefSynthesizer';

export default function App() {
  const [activeTab, setActiveTab] = useState('memo');
  const [currentPreset, setCurrentPreset] = useState(sampleBriefPresets[0]);
  const [isCabModalOpen, setIsCabModalOpen] = useState(false);

  // Synthesize executive morning brief dynamically from current preset
  const briefData = useMemo(() => {
    return synthesizeMorningBrief(currentPreset);
  }, [currentPreset]);

  const handleSelectDraftFromTriage = (item) => {
    setActiveTab('inbox');
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans">
      
      {/* Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openCabModal={() => setIsCabModalOpen(true)}
      />

      {/* Main App Content */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          openCabModal={() => setIsCabModalOpen(true)}
        />

        {/* Dashboard Workspace */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          
          {/* Preset Context Switcher (Stage 2 Context Feed) */}
          <ContextInputFeed
            currentPreset={currentPreset}
            onSelectPreset={setCurrentPreset}
          />

          {/* Navigation Pill Switcher */}
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
            <button
              onClick={() => setActiveTab('memo')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'memo'
                  ? 'bg-pilot-600 text-white shadow-md shadow-pilot-600/20'
                  : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              ☀️ 60s Morning Memo (Audio + Text)
            </button>

            <button
              onClick={() => setActiveTab('triage')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'triage'
                  ? 'bg-pilot-600 text-white shadow-md shadow-pilot-600/20'
                  : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              🚨 3-Tier Urgency Triage ({briefData.urgentFireCount} P0 Fires)
            </button>

            <button
              onClick={() => setActiveTab('inbox')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'inbox'
                  ? 'bg-pilot-600 text-white shadow-md shadow-pilot-600/20'
                  : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              ⚡ 1-Click Pre-Drafts Inbox
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'calculator'
                  ? 'bg-pilot-600 text-white shadow-md shadow-pilot-600/20'
                  : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              ⏱️ Tab-Waste ROI Calculator
            </button>
          </div>

          {/* TAB 1: 60s MORNING MEMO */}
          {activeTab === 'memo' && (
            <MorningMemoWidget
              briefData={briefData}
            />
          )}

          {/* TAB 2: 3-TIER URGENCIES */}
          {activeTab === 'triage' && (
            <TriageGrid
              briefData={briefData}
              onSelectDraft={handleSelectDraftFromTriage}
            />
          )}

          {/* TAB 3: 1-CLICK PRE-DRAFTS */}
          {activeTab === 'inbox' && (
            <PreDraftsInbox
              briefData={briefData}
            />
          )}

          {/* TAB 4: CALCULATOR */}
          {activeTab === 'calculator' && (
            <TimeSavedCalculator
              openCabModal={() => setIsCabModalOpen(true)}
            />
          )}

        </div>

      </main>

      {/* Footer */}
      <Footer
        openCabModal={() => setIsCabModalOpen(true)}
        setActiveTab={setActiveTab}
      />

      {/* Customer Advisory Board Modal */}
      <CabModal
        isOpen={isCabModalOpen}
        onClose={() => setIsCabModalOpen(false)}
      />

    </div>
  );
}
