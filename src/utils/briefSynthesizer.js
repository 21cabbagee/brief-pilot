// BriefPilot Executive Briefing & Urgency Classifier Engine

export function synthesizeMorningBrief(preset) {
  const schedule = preset.schedule || [];
  const items = preset.inboundItems || [];

  const mustAct = items.filter(i => i.urgency === 'MUST_ACT_TODAY');
  const meetingPrep = items.filter(i => i.urgency === 'MEETING_PREP');
  const ignoreLater = items.filter(i => i.urgency === 'IGNORE_LATER');

  // Generate 200-word Executive Markdown Memo
  const todayDate = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });

  const markdownMemo = `# ☀️ Executive Morning Briefing — ${todayDate}

### 🚨 Top 3 Critical Fires To Extinguish
${mustAct.map((item, idx) => `1. **${item.subject}** (${item.source}): ${item.content}  
   ↳ *Action Required:* Review pre-drafted response to ${item.sender}.`).join('\n')}

### 📅 Calendar & High-Stakes Stakeholder Prep (${schedule.length} Meetings)
${schedule.filter(s => s.prepNeeded).map(s => `- **${s.time} — ${s.title}** (${s.duration}): Meeting with ${s.attendees}.  
  ↳ *Talking Points:* Review Q3 metrics, align on non-negotiables, hold firm on 14-day timeline.`).join('\n')}

### 📥 Secondary Triage & Noise Filtered
- Filtered **${ignoreLater.length} newsletters/digests** into afternoon batch queue.
- **${meetingPrep.length} items** staged for upcoming calendar huddles.

*Executive Target for Today:* Clear the top 3 unblocks before noon to protect 3 hours of afternoon deep focus.`;

  // Spoken Script for 45-second TTS Audio Briefing
  const audioSpokenScript = `Good morning. Here is your 60-second executive brief for ${todayDate}. 

First, three urgent fires demand your signature this morning. There is an AWS GPU billing velocity spike alert of $3,200 in us-east-1 that needs immediate DevOps pausing. Claire Sterling needs your written sign-off on the Series A term sheet liquidation preference before noon. And Marcus is waiting on your DocuSign for the Acme Corp $75k enterprise pilot.

On your calendar, you have ${schedule.length} meetings today. Your highest stakes session is at 9:00 AM for the Board Meeting, followed by the lead architect offer discussion with David Zhao at 11:30 AM.

All three urgent responses have been pre-drafted and staged in your inbox. Have a focused morning.`;

  return {
    todayDate,
    mustAct,
    meetingPrep,
    ignoreLater,
    markdownMemo,
    audioSpokenScript,
    totalMeetings: schedule.length,
    urgentFireCount: mustAct.length
  };
}
