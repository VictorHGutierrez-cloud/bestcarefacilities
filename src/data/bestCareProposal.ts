/**
 * Best Care Facilities — proposal content (discovery transcript + promptmestre structure).
 * Outcome-focused, executive-facing, English.
 */

export const FACTORIAL_COLORS = {
  radicalRed: "#FF355E",
  viridian: "#07A2AD",
  sunbeam: "#FFB940",
  tangerine: "#FF9153",
  midnight: "#25253D",
  lightNeutral: "#F5F0E8",
  white: "#FFFFFF",
} as const;

export type ProposalCard = {
  title: string;
  body: string;
};

export type ProposalSection = {
  id: string;
  label: string;
  ariaLabel: string;
  backgroundColor: string;
  color: string;
  headline: string[];
  lead?: string;
  paragraphs?: string[];
  cards?: ProposalCard[];
  bullets?: string[];
  footer?: string;
  innerClassName?: string;
  dividerLight?: boolean;
};

export const PROPOSAL_META = {
  clientName: "Best Care Facilities",
  legalName: "Best Care Facility Services",
  partner: "Talent Grid Africa",
  vendor: "Factorial",
  seatCount: 100,
  pricePerSeatUsd: 7,
  monthlyUsd: 700,
  onboardingOneTimeUsd: 700,
  onboardingDays: "30–45",
  contactName: "Victor Gutierrez",
  contactRole: "Business Development · Factorial",
  contactEmail: "victor.gutierrez@factorial.co",
} as const;

export const PROPOSAL_SECTIONS: ProposalSection[] = [
  {
    id: "executive-summary",
    label: "01 — Executive summary",
    ariaLabel: "Executive summary",
    backgroundColor: FACTORIAL_COLORS.radicalRed,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    headline: ["Bridge", "The", "Gap"],
    lead:
      "Best Care is a growing facility management company delivering cleaning, fumigation, landscaping, and related services across client sites — with around 100 employees and compliance obligations that cannot depend on spreadsheets.",
    paragraphs: [
      "Today, attendance, payroll inputs, and statutory readiness rely on Excel and manual tracking books. That creates rework, weak visibility for managers, and risk as hiring continues on a steady, need-based pace.",
      "The recommended path is a modular Factorial rollout: one operating layer for workforce operations, employee administration, and controlled talent growth — implemented with Talent Grid Africa and Factorial over a focused onboarding window before monthly subscription billing begins.",
    ],
    cards: [
      {
        title: "Investment snapshot",
        body: "Indicative USD 7 per employee per month (~USD 700/month at 100 seats), plus a one-time onboarding package (USD 700 discussed on the call), subject to final module selection.",
      },
      {
        title: "Timeline",
        body: "Onboarding targeted in 30–45 days; subscription starts after go-live configuration and adoption checkpoints.",
      },
      {
        title: "Decision path",
        body: "HR and operations validate scope; management reviews commercial terms; modular plan approved before contract.",
      },
    ],
  },
  {
    id: "current-challenges",
    label: "02 — Current challenges",
    ariaLabel: "Current challenges",
    backgroundColor: FACTORIAL_COLORS.midnight,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    innerClassName: "!justify-start gap-8",
    headline: ["Manual", "HR", "Doesn't", "Scale"],
    lead: "Maintaining the status quo will cost more time and more risk as Best Care grows — not because the team lacks discipline, but because the tools were never designed for distributed facility operations.",
    cards: [
      {
        title: "Spreadsheet dependency",
        body: "Time tracking and payroll preparation live in Excel and paper books. Errors propagate into pay cycles and consume HR capacity that should focus on people and compliance.",
      },
      {
        title: "Fragmented visibility",
        body: "Managers lack a single view of who is on site, on leave, or pending approval across client projects. Decisions slow down; coverage gaps appear without early warning.",
      },
      {
        title: "Compliance pressure",
        body: "Best Care positions itself as a compliance-oriented operator. Manual records make statutory filing and audit trails harder to defend under growth.",
      },
      {
        title: "Hiring without a system",
        body: "Recruitment is need-based (roughly one to three hires per month) with low turnover — ideal timing to institutionalize hiring and onboarding before volume increases.",
      },
    ],
  },
  {
    id: "recommended-solution",
    label: "03 — Recommended solution",
    ariaLabel: "Recommended solution",
    backgroundColor: FACTORIAL_COLORS.lightNeutral,
    color: "#1a1a1a",
    innerClassName: "!justify-start gap-8",
    headline: ["One", "Platform", "Three", "Objectives"],
    lead: "Factorial is modular — Best Care can adopt what matters now and expand later. Each block below maps to a business objective raised in discovery, not a product catalog.",
    cards: [
      {
        title: "Workforce operations",
        body: "Replace spreadsheet clocking with mobile or terminal capture, layered overtime approvals, connected absences and sick leave evidence, and shift-aware manager calendars across client deployments.",
      },
      {
        title: "Employee administration",
        body: "Centralize documents, onboarding tasks, contracts and signatures, and training records — including mandatory certifications required before employees serve client sites.",
      },
      {
        title: "Talent & growth",
        body: "Structured recruitment (including WhatsApp-friendly touchpoints with audit-safe document collection), candidate pipeline visibility, and light engagement via 1:1s and surveys before formal performance cycles.",
      },
      {
        title: "Projects & cost control",
        body: "Track hours and spend per client project, align expenses to budgets, and improve profitability visibility where teams cannot use standard clock-in patterns alone.",
      },
    ],
  },
  {
    id: "expected-outcomes",
    label: "04 — Expected outcomes",
    ariaLabel: "Expected business outcomes",
    backgroundColor: FACTORIAL_COLORS.viridian,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    innerClassName: "!justify-start gap-8",
    headline: ["Outcomes", "That", "Matter"],
    lead: "Every initiative below ties a discovered pain to a measurable operational result — the standard management will use to judge ROI.",
    cards: [
      {
        title: "Payroll-ready data",
        body: "Challenge: manual timesheets and books. Outcome: consolidated, approval-backed hours and leave records exported with confidence each month.",
      },
      {
        title: "Manager effectiveness",
        body: "Challenge: approving leave without coverage context. Outcome: calendar intelligence flags conflicts before teams are understaffed on site.",
      },
      {
        title: "Safer hiring workflow",
        body: "Challenge: WhatsApp-only document exchange. Outcome: keep fast communication while contracts and IDs live in a controlled system of record.",
      },
      {
        title: "Training compliance",
        body: "Challenge: mandatory trainings for client work. Outcome: expiry alerts, attendance tracking, and certificates without parallel spreadsheets.",
      },
      {
        title: "Employee adoption",
        body: "Challenge: HR-only tools fail in the field. Outcome: every employee uses mobile for clocking, leave, and surveys — democratic access, role-based visibility.",
      },
      {
        title: "Scalable governance",
        body: "Challenge: growth without HR headcount explosion. Outcome: repeatable onboarding and operational playbooks as new client sites come online.",
      },
    ],
  },
  {
    id: "implementation",
    label: "05 — Implementation plan",
    ariaLabel: "Implementation plan",
    backgroundColor: FACTORIAL_COLORS.sunbeam,
    color: "#1a1a1a",
    innerClassName: "!justify-start gap-8",
    headline: ["Phased", "Go", "Live"],
    lead: `A ${PROPOSAL_META.onboardingDays}-day onboarding window was discussed before recurring billing — structured to protect daily operations while Best Care transitions off Excel.`,
    cards: [
      {
        title: "Phase 1 — Foundation",
        body: "Confirm module scope with HR and operations; configure company structure, worksites/projects, roles, and approval layers for time and leave.",
      },
      {
        title: "Phase 2 — Deployment",
        body: "Migrate core employee records; launch clocking and absence workflows; stand up document templates, onboarding checklists, and recruitment pipeline for active hiring.",
      },
      {
        title: "Phase 3 — Adoption",
        body: "Train managers and field supervisors; validate payroll export samples with Finance; tighten compliance reports; agree expansion modules (e.g., advanced performance) only when ready.",
      },
    ],
    bullets: [
      "Weekly working sessions with Factorial onboarding support",
      "Pilot group across representative client sites before full rollout",
      "Success criteria signed with Florence (HR) and operations leadership",
    ],
  },
  {
    id: "security",
    label: "06 — Security & compliance",
    ariaLabel: "Security and compliance",
    backgroundColor: FACTORIAL_COLORS.tangerine,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    innerClassName: "!justify-start gap-8",
    headline: ["Trust", "By", "Design"],
    lead: "Security questions raised in the call are addressed directly — no generic claims beyond what was discussed.",
    cards: [
      {
        title: "Hosting & resilience",
        body: "Factorial operates on AWS and Azure regions (including Frankfurt), with disaster recovery and SLA commitments suitable for enterprise HR data.",
      },
      {
        title: "Standards",
        body: "SOC 2 Type II, ISO-aligned controls, and GDPR posture — documentation available for management and IT review.",
      },
      {
        title: "Contractual assurance",
        body: "NDA available if required; terms cover data use and retention (including post-termination data handling discussed on the call).",
      },
    ],
  },
  {
    id: "commercial",
    label: "07 — Commercial proposal",
    ariaLabel: "Commercial proposal",
    backgroundColor: FACTORIAL_COLORS.white,
    color: FACTORIAL_COLORS.midnight,
    innerClassName: "!justify-start gap-8",
    headline: ["Clear", "Commercial", "Terms"],
    lead: "Pricing shared on the discovery call — final quote follows module selection. Africa market terms may apply; figures below are indicative anchors for management review.",
    cards: [
      {
        title: "Subscription",
        body: `~USD ${PROPOSAL_META.pricePerSeatUsd} per employee per month × ${PROPOSAL_META.seatCount} employees ≈ USD ${PROPOSAL_META.monthlyUsd}/month (recurring).`,
      },
      {
        title: "Onboarding (one-time)",
        body: `USD ${PROPOSAL_META.onboardingOneTimeUsd} onboarding package discussed as mandatory before subscription billing; implementation over ${PROPOSAL_META.onboardingDays} days.`,
      },
      {
        title: "Modular scope",
        body: "Core workforce modules can launch first; recruitment, training, expenses, and projects added when Best Care confirms priority — avoiding shelfware.",
      },
    ],
    bullets: [
      "Billing currency: USD or EUR as agreed",
      "Management approval required — HR recommends, leadership commits",
      "Talent Grid Africa remains implementation partner alongside Factorial",
    ],
  },
  {
    id: "next-steps",
    label: "08 — Next steps",
    ariaLabel: "Recommended next steps",
    backgroundColor: FACTORIAL_COLORS.radicalRed,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    headline: ["Ready", "When", "You", "Are"],
    lead: "No pressure timeline — HR transformation should be deliberate. When Best Care is ready, the path below keeps momentum without forcing a premature decision.",
    bullets: [
      "Internal review with HR, operations, and Finance using this proposal and module-level pricing",
      "30-minute scope workshop to confirm phase-one modules and site rollout order",
      "Security pack (SOC/ISO/GDPR + hosting overview) for IT or management",
      "Follow-up call to answer open questions and align on contract timing",
    ],
    footer: `Prepared for ${PROPOSAL_META.clientName} · Factorial × ${PROPOSAL_META.partner} · 2026`,
  },
];
