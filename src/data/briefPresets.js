export const sampleBriefPresets = [
  {
    id: 'founder-morning',
    name: 'Startup Founder Morning (Series A + Board + AWS Fire)',
    schedule: [
      { time: '09:00 AM', title: 'Q3 Board Meeting & ARR Review', attendees: 'Board Members (Peter, Claire, Tom)', duration: '60m', prepNeeded: true },
      { time: '11:30 AM', title: 'Lead Architect Offer Finalization', attendees: 'David Zhao (Principal Systems Engineer)', duration: '30m', prepNeeded: true },
      { time: '02:00 PM', title: 'Series A Lead Investor Due Diligence', attendees: 'Summit Capital Partners', duration: '45m', prepNeeded: true },
      { time: '04:30 PM', title: 'Weekly Product Roadmap Sync', attendees: 'Design & Eng Team (8 people)', duration: '30m', prepNeeded: false }
    ],
    inboundItems: [
      {
        id: 'in-1',
        source: 'Slack #incident-alerts',
        sender: 'AWS CloudWatch Bot',
        subject: 'AWS Billing Velocity Alert: $3,200 spike in us-east-1 GPU cluster',
        content: 'GPU cluster auto-scaling group breached hourly budget cap. 12 x H100 instances spun up for unmetered batch job.',
        urgency: 'MUST_ACT_TODAY',
        urgencyScore: 98,
        preDraftReply: 'Acknowledged. Paging @devops-oncall to pause cluster ASG-gpu-batch immediately and downgrade to spot pool.'
      },
      {
        id: 'in-2',
        source: 'Email (Priority)',
        sender: 'Claire Sterling (Summit Capital)',
        subject: 'Series A Term Sheet Clause 4.2: Liquidation Preference Clarification',
        content: 'Need your written sign-off on the 1x non-participating preferred clause before the partner lunch at noon.',
        urgency: 'MUST_ACT_TODAY',
        urgencyScore: 94,
        preDraftReply: 'Hi Claire, reviewed clause 4.2 with legal. 1x non-participating preferred is approved as drafted. Sending countersigned redline now.'
      },
      {
        id: 'in-3',
        source: 'Email',
        sender: 'David Zhao (Candidate)',
        subject: 'Counter-offer: Principal Systems Engineer package',
        content: 'Excited about the role. Can we adjust the equity component to 0.85% with the standard 4-year vesting schedule?',
        urgency: 'MEETING_PREP',
        urgencyScore: 82,
        preDraftReply: 'Hi David, looking forward to our 11:30 AM chat today. Happy to discuss the equity structure and vesting benchmarks.'
      },
      {
        id: 'in-4',
        source: 'Slack DM',
        sender: 'Marcus (VP Sales)',
        subject: 'Enterprise Pilot Contract Sign-off for Acme Corp ($75k ACV)',
        content: 'Acme legal approved standard DPA. Just need your CEO signature on DocuSign by 3 PM.',
        urgency: 'MUST_ACT_TODAY',
        urgencyScore: 89,
        preDraftReply: 'Signed on DocuSign. Great work closing the pilot team!'
      },
      {
        id: 'in-5',
        source: 'Email Newsletter',
        sender: 'SaaS Metrics Weekly',
        subject: 'State of B2B Multiples: Q3 2026 Public Benchmarks',
        content: 'Median ARR multiple sits at 6.8x for high-retention infrastructure tooling...',
        urgency: 'IGNORE_LATER',
        urgencyScore: 20,
        preDraftReply: ''
      }
    ]
  },
  {
    id: 'agency-director',
    name: 'Agency Director Morning (Client Escalation + Retainers)',
    schedule: [
      { time: '10:00 AM', title: 'Client Quarterly Strategy Review', attendees: 'Nike Brand Marketing Team', duration: '45m', prepNeeded: true },
      { time: '01:00 PM', title: 'Internal Creative Production All-Hands', attendees: '14 Designers & Copywriters', duration: '45m', prepNeeded: false },
      { time: '03:30 PM', title: 'Overdue Retainer Settlement Call', attendees: 'CFO of Apex Corp ($38k past due)', duration: '20m', prepNeeded: true }
    ],
    inboundItems: [
      {
        id: 'in-6',
        source: 'Slack #client-nike',
        sender: 'Rachel Simmons (Nike Brand VP)',
        subject: 'Urgent: Revision on Fall Campaign Video Color Grade',
        content: 'Director reviewed the 60s cut. Contrast on hero sneaker is slightly desaturated on OLED screens. Need v3 before 2 PM press drop.',
        urgency: 'MUST_ACT_TODAY',
        urgencyScore: 96,
        preDraftReply: 'On it Rachel. Our senior colorist is loading the Arri RAW project now. Pushing revised ProRes master to Frame.io by 1:15 PM.'
      },
      {
        id: 'in-7',
        source: 'Email (Accounts Receivable)',
        sender: 'Apex Corp Accounts Payable',
        subject: 'Remittance Advice: Invoice #AGY-849 ($38,000 ACH Initiated)',
        content: 'Wire transfer reference #WT-94281 was initiated this morning. Estimated clearance by 5 PM.',
        urgency: 'MEETING_PREP',
        urgencyScore: 78,
        preDraftReply: 'Thank you for the remittance update! Will verify receipt on our 3:30 PM check-in.'
      },
      {
        id: 'in-8',
        source: 'Email',
        sender: 'Google Ads Alerts',
        subject: 'Monthly spend report for Client Portfolio',
        content: 'Your ad accounts spent $142,500 across 18 managed campaigns in September.',
        urgency: 'IGNORE_LATER',
        urgencyScore: 15,
        preDraftReply: ''
      }
    ]
  }
];
