/**
 * Best Care Facilities — executive proposal content.
 * Structure and style: promptmestre.txt (decision document, not call summary).
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
    headline: ["Decision", "Memo"],
    lead:
      "Best Care Facility Services operates facility management (cleaning, fumigation, landscaping) across client sites in Kenya with ~100 employees and a compliance-led operating model.",
    paragraphs: [
      "At current scale, attendance, payroll inputs, and statutory readiness depend on Excel and manual tracking books. That model breaks under growth: errors compound, manager visibility weakens, and HR time shifts from people to reconciliation.",
      "Factorial provides a modular workforce platform — workforce operations, employee administration, and talent hiring — deployed with Talent Grid Africa. Investment scales with selected modules and headcount; go-live follows a guided onboarding window before recurring billing.",
    ],
    cards: [
      {
        title: "Investment range",
        body: `~USD ${PROPOSAL_META.pricePerSeatUsd}/employee/month (≈ USD ${PROPOSAL_META.monthlyUsd}/month at ${PROPOSAL_META.seatCount} employees), plus one-time onboarding before subscription.`,
      },
      {
        title: "Timeline",
        body: `${PROPOSAL_META.onboardingDays}-day onboarding to go-live; subscription begins after configuration and adoption checkpoints.`,
      },
      {
        title: "Decision",
        body: "HR validates operational scope; management approves commercial terms; phased rollout limits disruption to daily client service delivery.",
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
    headline: ["Cost", "Of", "Status", "Quo"],
    lead: "The current operating model creates friction and risk that will intensify as Best Care adds sites and headcount — without adding proportional HR capacity.",
    cards: [
      {
        title: "Payroll and time risk",
        body: "Spreadsheet clocking and paper books delay month-end close and increase correction cycles — direct cost to Finance and HR every pay period.",
      },
      {
        title: "Visibility gaps",
        body: "Managers cannot see coverage, leave, and overtime in one place across client deployments. Approvals happen without context; understaffing surfaces on site, not in advance.",
      },
      {
        title: "Compliance exposure",
        body: "Statutory filing depends on records that are hard to audit. Growth multiplies documentation burden without a single system of record.",
      },
      {
        title: "Scaling constraint",
        body: "Need-based hiring (1–3 per month) with strong retention is an advantage — but only if onboarding, training proof, and site assignment are repeatable, not reinvented each time.",
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
    headline: ["Objectives", "Not", "Modules"],
    lead: "Each objective below solves a specific business problem. Scope is modular — adopt what delivers immediate operational return, expand when ready.",
    cards: [
      {
        title: "Workforce operations",
        body: "Problem: unreliable time and absence data. Outcome: mobile or terminal capture, approval layers for overtime, connected sick leave evidence, and manager calendars aligned to client sites.",
      },
      {
        title: "Employee administration",
        body: "Problem: documents and onboarding scattered across channels. Outcome: centralized files, e-signatures, task tracking, and mandatory training records before employees deploy to clients.",
      },
      {
        title: "Talent & hiring",
        body: "Problem: informal hiring slows quality and compliance. Outcome: structured pipeline, fast candidate communication (including WhatsApp where appropriate), and secure document collection for offers and contracts.",
      },
      {
        title: "Projects & profitability",
        body: "Problem: hours and spend opaque per client contract. Outcome: project-based tracking for teams that split time across accounts — hours, expenses, and margin visibility in one place.",
      },
    ],
  },
  {
    id: "expected-outcomes",
    label: "04 — Expected business outcomes",
    ariaLabel: "Expected business outcomes",
    backgroundColor: FACTORIAL_COLORS.viridian,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    innerClassName: "!justify-start gap-8",
    headline: ["Measurable", "Impact"],
    lead: "Five outcomes management can use to judge return on investment — tied directly to operational pain, not software features.",
    cards: [
      {
        title: "Payroll accuracy",
        body: "Reduce manual reconciliation; export approval-backed hours and leave data each month with fewer corrections.",
      },
      {
        title: "Manager visibility",
        body: "Single view of attendance, leave, and coverage across teams — approve with context before service levels are affected.",
      },
      {
        title: "Compliance readiness",
        body: "Audit-friendly records for statutory obligations and client-mandated training without parallel spreadsheets.",
      },
      {
        title: "Faster, controlled hiring",
        body: "Structured pipeline and documentation for steady need-based recruitment without losing speed in the field.",
      },
      {
        title: "Field adoption",
        body: "Mobile-first experience so employees clock, request leave, and complete tasks without HR as intermediary.",
      },
      {
        title: "Scale without headcount",
        body: "Repeatable onboarding and site rollout playbooks as Best Care grows — same HR team, higher throughput.",
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
    headline: ["Low", "Disruption", "Rollout"],
    lead: `Phased delivery over ${PROPOSAL_META.onboardingDays} days — Excel and books can run in parallel until cutover, so client sites stay served throughout transition.`,
    cards: [
      {
        title: "Phase 1 — Foundation",
        body: "Confirm modules and site structure; configure roles, approval chains, and project/client mapping with HR and operations.",
      },
      {
        title: "Phase 2 — Deployment",
        body: "Load employee data; activate time, leave, and document workflows; pilot on representative sites before network-wide launch.",
      },
      {
        title: "Phase 3 — Adoption",
        body: "Train managers and supervisors; validate payroll extracts with Finance; lock go-live criteria before turning off manual books.",
      },
    ],
    bullets: [
      "Guided onboarding with weekly Factorial specialist sessions",
      "Parallel operation during transition — no big-bang cutover on day one",
      "Talent Grid Africa + Factorial joint alignment with Florence (HR) and operations leadership",
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
    headline: ["Enterprise", "Posture"],
    lead: "Data protection and contractual assurance suitable for management and IT review.",
    cards: [
      {
        title: "Hosting",
        body: "AWS and Azure infrastructure (including EU regions), disaster recovery, and SLA-backed availability.",
      },
      {
        title: "Standards",
        body: "SOC 2 Type II, ISO-aligned controls, GDPR — documentation available on request.",
      },
      {
        title: "Governance",
        body: "NDA available; terms define data use, retention, and post-termination handling.",
      },
    ],
  },
  {
    id: "investment",
    label: "07 — Investment",
    ariaLabel: "Investment",
    backgroundColor: FACTORIAL_COLORS.white,
    color: FACTORIAL_COLORS.midnight,
    innerClassName: "!justify-start gap-8",
    headline: ["Value", "Anchored"],
    lead: `Investment follows selected modules and workforce size (${PROPOSAL_META.seatCount} employees). The figures below reflect the operating return: fewer payroll cycles lost to correction, lower compliance risk, and HR capacity redirected from spreadsheets to workforce quality.`,
    cards: [
      {
        title: "Estimated range",
        body: `~USD ${PROPOSAL_META.pricePerSeatUsd} per employee/month — approximately USD ${PROPOSAL_META.monthlyUsd}/month at current headcount (recurring, modular scope).`,
      },
      {
        title: "Implementation",
        body: `One-time onboarding investment USD ${PROPOSAL_META.onboardingOneTimeUsd} before go-live and subscription billing (${PROPOSAL_META.onboardingDays} days).`,
      },
      {
        title: "Operational anchor",
        body: "For a 100-person field workforce, replacing manual time books and Excel payroll prep typically recovers multiple HR days per month — before counting error and compliance risk avoided.",
      },
    ],
    bullets: [
      "Module selection finalized in scope workshop — pay only for operational scope adopted",
      "USD or EUR billing as agreed · Management approval · HR recommends, leadership commits",
    ],
  },
  {
    id: "next-steps",
    label: "08 — Next steps",
    ariaLabel: "Next steps",
    backgroundColor: FACTORIAL_COLORS.radicalRed,
    color: FACTORIAL_COLORS.white,
    dividerLight: true,
    headline: ["Move", "Forward"],
    lead: "A clear path from review to go-live — each step is short and decision-oriented.",
    bullets: [
      "Internal review with HR, Operations, and Finance (this document + module-level pricing)",
      "Scope confirmation workshop — phase-one modules and site rollout order",
      "Final commercial alignment with management",
      "Implementation kickoff with Talent Grid Africa and Factorial",
    ],
    footer: `${PROPOSAL_META.clientName} · Factorial × ${PROPOSAL_META.partner} · 2026`,
  },
];
