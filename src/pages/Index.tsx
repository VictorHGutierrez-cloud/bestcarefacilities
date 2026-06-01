import { ScrollTiltedGrid } from "@/components/ui/scroll-tilted-grid";
import {
  BadgeDollarSign,
  CheckCircle2,
  Clock3,
  FileSpreadsheet,
  MessageCircle,
  ShieldCheck,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: FileSpreadsheet,
    title: "From spreadsheets to control",
    description:
      "Best Care currently tracks attendance, payroll inputs, and compliance in Excel and manual books. The proposal replaces fragile manual work with one reliable HR system.",
  },
  {
    icon: Users,
    title: "Built for 100 employees and growth",
    description:
      "The team already manages around 100 employees and is hiring consistently. The recommended setup supports growth without adding HR complexity.",
  },
  {
    icon: MessageCircle,
    title: "Keep WhatsApp, add structure",
    description:
      "Recruitment communication can keep WhatsApp where useful, while documents, interview steps, and approvals stay centralized and auditable.",
  },
  {
    icon: Clock3,
    title: "Time tracking and leave automation",
    description:
      "Clock-in/out, overtime approvals, leave requests, and sick leave evidence become automated, connected, and payroll-ready every month.",
  },
];

const moduleCards = [
  "Recruitment and candidate pipeline",
  "Onboarding workflows and e-signature",
  "Time tracking, shifts, and absences",
  "1:1s, engagement surveys, and pulse",
  "Training management and renewals",
  "Expenses, projects, and profitability",
];

const Index = () => {
  return (
    <main className="min-h-screen bg-[#25253D] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FF355E_0%,rgba(255,53,94,0.2)_35%,rgba(37,37,61,1)_70%)]" />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-20 md:px-10">
          <p className="mb-5 inline-flex w-fit items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em]">
            Commercial Proposal - Best Care Facilities
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
            HR modernization proposal aligned with the real operating pain points of Best Care Facility
            Services.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-white/85 md:text-xl">
            This proposal is built from the discovery call transcript: a fast-growing facility management
            company, 100 employees, compliance-sensitive operations, and a clear need to bridge the gap from
            manual spreadsheets to one integrated HR operating model.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-[#FFB940]">Employees</p>
              <p className="mt-1 text-3xl font-semibold">100</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-[#07A2AD]">Current State</p>
              <p className="mt-1 text-3xl font-semibold">Excel + Books</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
              <p className="text-xs uppercase tracking-[0.15em] text-[#FF9153]">Commercial Model</p>
              <p className="mt-1 text-3xl font-semibold">Modular</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#25253D]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Client value concept from the transcript</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#25253D]/80">
            The heart of this proposal is operational reliability: remove spreadsheet risk, standardize people
            processes, and give HR and managers one source of truth from hiring to payroll inputs.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#25253D]/10 p-6 shadow-sm">
                <item.icon className="h-6 w-6 text-[#FF355E]" />
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-[#25253D]/75">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F8FB] py-20 text-[#25253D]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Recommended solution scope</h2>
          <p className="mt-4 max-w-3xl text-lg text-[#25253D]/80">
            Best Care can start with essential modules and expand over time. The platform is modular by design,
            matching what was requested during the call.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {moduleCards.map((moduleName) => (
              <div
                key={moduleName}
                className="rounded-xl border border-[#25253D]/10 bg-white p-4 text-sm font-medium shadow-sm"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-[#07A2AD]" />
                {moduleName}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#25253D] py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <h2 className="text-3xl font-semibold md:text-4xl">Commercial structure discussed</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <BadgeDollarSign className="h-6 w-6 text-[#FFB940]" />
              <h3 className="mt-4 text-xl font-semibold">Indicative subscription</h3>
              <p className="mt-2 text-white/80">
                Around <strong>USD 7 per employee per month</strong>, pending final module selection.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <Users className="h-6 w-6 text-[#FF9153]" />
              <h3 className="mt-4 text-xl font-semibold">100 employee scenario</h3>
              <p className="mt-2 text-white/80">
                Reference calculation shared in the call: <strong>USD 700/month</strong>.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <Clock3 className="h-6 w-6 text-[#07A2AD]" />
              <h3 className="mt-4 text-xl font-semibold">One-time onboarding</h3>
              <p className="mt-2 text-white/80">
                Implementation fee discussed as a one-time onboarding package before subscription starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-[#25253D]">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">Trust and compliance commitments</h2>
              <p className="mt-4 text-lg text-[#25253D]/80">
                Security was a core decision point in the conversation. The proposed platform addresses this
                with documented controls and enterprise hosting standards.
              </p>
              <ul className="mt-8 space-y-4 text-[#25253D]/80">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-[#07A2AD]" />
                  Hosting in AWS and Azure environments.
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-[#07A2AD]" />
                  SOC 2 Type II and ISO/GDPR-aligned posture shared in the call.
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-[#07A2AD]" />
                  NDA and security documentation available for management review.
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-[#25253D]/10 bg-[#F8F8FB] p-8">
              <h3 className="text-2xl font-semibold">Next step recommended</h3>
              <p className="mt-4 text-[#25253D]/80">
                Share module-by-module pricing with management, validate final scope, and schedule a short
                follow-up to approve rollout priorities for Best Care Facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#25253D]">
        <div className="mx-auto max-w-6xl px-6 pt-20 text-center md:px-10">
          <p className="text-sm uppercase tracking-[0.2em] text-[#FFB940]">Visual layout reference</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
            Editorial motion section in the new approved layout
          </h2>
        </div>
        <ScrollTiltedGrid loop className="text-white" />
      </section>
    </main>
  );
};

export default Index;
