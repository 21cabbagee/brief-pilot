# BriefPilot — Executive Daily Briefing & Priority Aggregator

> **Unified morning intelligence memo synthesizing your calendar, unread high-priority emails, and pending task lists into a single 60-second actionable brief with TTS audio.**

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-success?style=flat-square&logo=github)](https://21cabbagee.github.io/brief-pilot/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-emerald?style=flat-square)](#)

---

## 1. Executive Summary & Problem Thesis
- **Product Name:** BriefPilot
- **One-Liner:** Unified morning intelligence memo synthesizing your calendar, unread high-priority emails, and pending task lists into a single 60-second actionable brief.
- **Problem Thesis:** Knowledge workers waste the first 45 minutes of every workday jumping across 5 tabs—Google Calendar, Slack, Outlook, Linear, and Notion—trying to figure out what actually demands attention today. Existing summaries are either dumb daily email digests or fragmented notifications that add to cognitive overload rather than solving it.

---

## 2. Market Sizing & Playbook Validation
- **Bottoms-Up TAM:** 2,000,000 remote knowledge workers & executives * $15/mo ($180/yr) = **$360 Million TAM**.
- **Market Desperation:** Missed calendar prep, delayed executive approvals, and morning triage anxiety. Fragmented notifications reduce deep-work capacity by 40%.
- **Timing & Disruption:** The rapid expansion of autonomous agent workflows and multimodal AI creates an immediate requirement for this specialized micro-tool, unbundling bloated horizontal software.

---

## 3. Black Car Scope (V1 MVP Features)

### ✅ In-Scope (Fully Built & Functional)
1. **Manual Context Feed & Webhook Sync:** Preloaded presets for *Startup Founder Morning* and *Agency Director Morning* syncing Google Calendar + Slack + Email.
2. **Urgency Classifier & Synthesis Engine:** Categorizes items into:
   - `Must Act Today (P0)`: High-severity blockers (AWS spend spikes, term sheet signatures).
   - `Meeting Prep Required (P1)`: Stakeholder agendas, candidate counter-offers.
   - `Ignore / Read Later (P2)`: Automated digests and newsletters filtered out.
3. **60-Second Audio & Text Briefing:** Synthesizes a tight 200-word Markdown memo + interactive 45-second TTS audio briefing player with waveform animation and speed toggles (1x, 1.25x, 1.5x).
4. **1-Click Pre-drafted Responses:** Instant pre-written decisive replies for urgent inbound items with 1-click clipboard copy.
5. **Tab-Switching Waste Calculator:** Interactive calculator showing $18,000–$45,000/yr in executive payroll lost to morning tab switching.
6. **Customer Advisory Board (CAB) Modal:** 10-member founding cohort application with 70% lifetime platform discount ($4.50/mo).

### ❌ Out-of-Scope (Strictly Excluded)
- No intrusive corporate background agent monitoring every keystroke.
- No complex enterprise project management replatforming.

---

## 4. Technical Architecture

```
[Google Calendar + Slack + Inbound Emails]
                    ↓
[GPT-4o-mini Urgency Classifier]
   ├── Tier 0: Must Act Today (P0 Fires)
   ├── Tier 1: Meeting Prep Required (P1 Stakeholders)
   └── Tier 2: Ignore / Read Later (P2 Noise)
                    ↓
[Synthesis Engine (200-word Memo + Spoken Script)]
                    ↓
  ┌─────────────────┴─────────────────┐
  ↓                                   ↓
[60s Audio Briefing (ElevenLabs)]  [1-Click Action Inbox]
  ↓                                   ↓
[Web Dashboard / Telegram Push]   [Instant Dispatch]
```

### Tech Stack
- **Frontend Framework:** Next.js 14 / React with TailwindCSS & Lucide icons.
- **Synthesis & Classification:** OpenAI GPT-4o-mini structured classification schema.
- **Audio Synthesis:** OpenAI Audio TTS / ElevenLabs Turbo v2.5 voice pipeline.
- **Storage & Webhook Rail:** Supabase Storage + Fastify/Node + Telegram Bot API.
- **Deployment:** GitHub Pages / Vercel with automated GitHub Actions CI/CD.

---

## 5. Local Setup & Quickstart

```bash
# Clone the repository
git clone https://github.com/21cabbagee/brief-pilot.git
cd brief-pilot

# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build
```

### Environment Variables (`.env.example`)
```env
NEXT_PUBLIC_APP_URL=https://21cabbagee.github.io/brief-pilot
OPENAI_API_KEY=sk-proj-your-openai-api-key
ELEVENLABS_API_KEY=your-elevenlabs-api-key
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
TELEGRAM_BOT_TOKEN=your-telegram-bot-token
```

---

## 6. Go-To-Market & High-Intent SEO Setup
- **H1:** "Your 60-Second AI Morning Briefing: Calendar, Priority Tasks & Inbound Fires"
- **URL Slug:** `/tools/executive-daily-ai-briefing-aggregator`
- **Target Long-Tail Keywords:**
  - `ai daily briefing generator`
  - `executive morning agenda aggregator`
  - `slack calendar ai digest`
  - `smart morning brief for founders`
- **Customer Advisory Board (CAB) Pitch Script:**
  *"We are assembling a 10-member Customer Advisory Board (CAB) for BriefPilot to solve this exact bottleneck. We are offering a 70% lifetime platform discount and dedicated onboarding for our first cohort."*
