import { Fragment, ReactNode } from "react";
import {
  AlertTriangle,
  BarChart3,
  Check,
  Cloud,
  Eye,
  FileText,
  Link2,
  Rocket,
  Shield,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";
import { DEFAULT_VALUES as d } from "@/utils/constants";
import { formatUSD } from "@/utils/formatters";
import { ExpandableImage } from "@/components/ui/ImageLightbox";
import { ReportsGallery } from "./ReportsGallery";
import factorialWhy from "@/assets/factorial/factorial-why.jpg";
import factorialModules from "@/assets/factorial/factorial-modules.jpg";
import factorialPerformance from "@/assets/factorial/factorial-performance.jpg";
import factorialCosts from "@/assets/factorial/factorial-costs.jpg";
import factorialDecisions from "@/assets/factorial/factorial-decisions.jpg";
import factorialWhoWeAre from "@/assets/factorial/factorial-who-we-are.jpg";

export interface SlideData {
  id: string;
  title: string;
  summary: string;
  icon: ReactNode;
  gradient: string;
  content: ReactNode;
  bg: "dark" | "neutral" | "light";
}

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <p className="text-[32px] tracking-[0.25em] uppercase opacity-90 mb-8 font-bold">{children}</p>
);

const SlideTitle = ({ children }: { children: ReactNode }) => (
  <h2 className="text-[80px] font-light leading-[1.15] mb-10 max-w-[1400px]">{children}</h2>
);

const SlideSubtitle = ({ children }: { children: ReactNode }) => (
  <p className="text-[36px] opacity-80 font-light leading-relaxed max-w-[1200px]">{children}</p>
);

export const slides: SlideData[] = [
  {
    id: "cover",
    title: "Welcome",
    summary: "Partnership proposal — Best Care Facilities",
    icon: <FileText size={24} />,
    gradient: "from-[hsl(347,100%,20%)] to-[hsl(347,80%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Partnership Proposal</SectionLabel>
        <h1 className="text-[96px] font-light leading-[1.1] mb-8 max-w-[1500px]">{d.empresa}</h1>
        <p className="opacity-80 font-light mb-6 text-6xl">Bridge the gap to one HR operating model</p>
        <p className="opacity-60 font-light text-3xl">
          Facility management at scale — without spreadsheets holding HR back
        </p>
        <div className="mt-16 flex items-center gap-6">
          <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
            <span className="text-[24px] font-light">F</span>
          </div>
          <div>
            <p className="opacity-70 text-4xl">{d.vendedor}</p>
            <p className="text-[18px] opacity-75">
              {d.cargoVendedor}
            </p>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "timeline",
    title: "Best Care journey",
    summary: "Facility services company growing with compliance at the core",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(347,70%,18%)] to-[hsl(200,40%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The journey</SectionLabel>
        <SlideTitle>Built on service. Ready for systems.</SlideTitle>
        <div className="grid grid-cols-4 gap-6 mt-10 border-t border-white/15 pt-10">
          {[
            { stat: "100+", label: "Employees today" },
            { stat: "Multi-site", label: "Client deployments" },
            { stat: "Compliance", label: "Statutory filing discipline" },
            { stat: "Growing", label: "Steady hiring, low turnover" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-[42px] font-light">{s.stat}</p>
              <p className="text-[16px] opacity-75 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-[24px] opacity-75 leading-[1.8] mt-12 max-w-[1200px]">
          Best Care delivers cleaning, fumigation, landscaping, and related services across client sites.
          Florence and the team run a <strong className="opacity-100">compliance-oriented</strong> operation —
          the next chapter is matching process discipline with workforce technology.
        </p>
      </div>
    ),
  },

  {
    id: "next-scale",
    title: "The moment now",
    summary: "Bridge the gap — from Excel to controlled operations",
    icon: <Zap size={24} />,
    gradient: "from-[hsl(160,60%,15%)] to-[hsl(200,50%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The moment is now</SectionLabel>
        <SlideTitle>You outgrew manual HR. Imagine with structure.</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-6">
          <div>
            <p className="text-[24px] opacity-75 leading-[1.8] mb-8">
              You built a growing facility management business with{" "}
              <strong className="opacity-100">Excel, tracking books, and determination</strong> — not with a
              workforce platform built for distributed teams.
            </p>
            <p className="text-[24px] opacity-75 leading-[1.8]">
              Factorial enters with {d.partner}: one layer for time, documents, hiring, and compliance proof —
              so HR stops reconciling and starts governing growth.
            </p>
          </div>
          <div className="space-y-6">
            <div className="border border-white/20 p-8">
              <p className="text-[18px] opacity-60 uppercase tracking-widest mb-3">Before</p>
              <p className="text-[22px] opacity-80">Spreadsheets · manual books · fragmented visibility</p>
            </div>
            <div className="border border-white/40 bg-white/10 p-8">
              <p className="text-[18px] opacity-60 uppercase tracking-widest mb-3">After</p>
              <p className="text-[22px]">One system · mobile field adoption · payroll-ready data</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "context-overview",
    title: "Current scenario",
    summary: "~100 employees, multi-client sites, HR trapped in operations",
    icon: <Eye size={24} />,
    gradient: "from-[hsl(347,60%,25%)] to-[hsl(347,50%,12%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Context</SectionLabel>
        <SlideTitle>How you operate today</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <p className="text-[26px] opacity-70 leading-[1.7] mb-8">
              You manage around <strong className="opacity-100">{d.totalColaboradores} employees</strong> deployed
              across client facilities. HR must stay compliant, keep payroll inputs accurate, and support managers
              who cannot see coverage in real time.
            </p>
            <p className="text-[26px] opacity-70 leading-[1.7]">
              The team is capable. The <strong className="opacity-100">tooling is the bottleneck</strong> — not
              people.
            </p>
          </div>
          <div className="space-y-5">
            {[
              { icon: "📋", title: "Manual time capture", desc: "Excel and tracking books for attendance." },
              { icon: "💬", title: "Informal channels", desc: "WhatsApp for speed — risk for contracts and IDs." },
              { icon: "📊", title: "Payroll preparation", desc: "HR rebuilds data every month-end." },
              { icon: "🎓", title: "Training proof", desc: "Mandatory certifications tracked outside one system." },
            ].map((item) => (
              <div key={item.title} className="flex gap-5 border border-foreground/15 p-5">
                <span className="text-[30px] shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-[22px] font-medium mb-1">{item.title}</h4>
                  <p className="text-[19px] text-foreground/75">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "context-tools",
    title: "Current tools",
    summary: "Excel, manual books, WhatsApp — where each breaks",
    icon: <AlertTriangle size={24} />,
    gradient: "from-[hsl(37,80%,25%)] to-[hsl(37,60%,12%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Diagnosis</SectionLabel>
        <SlideTitle>What you use today — and where it hurts</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-6">
          {[
            {
              code: "XL",
              name: "Excel",
              role: "Time & payroll inputs",
              pain: ["Version drift across sites", "No approval trail", "Errors found at month-end"],
            },
            {
              code: "BK",
              name: "Tracking books",
              role: "Field attendance",
              pain: ["Double entry into Excel", "Illegible or lost records", "No manager dashboard"],
            },
            {
              code: "WA",
              name: "WhatsApp",
              role: "Recruitment comms",
              pain: ["Documents outside system", "No hiring pipeline", "Hard to audit decisions"],
            },
          ].map((tool) => (
            <div key={tool.name} className="border border-white/20 p-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 border border-white/25 flex items-center justify-center">
                  <span className="text-[24px] font-light">{tool.code}</span>
                </div>
                <div>
                  <h3 className="text-[28px] font-medium">{tool.name}</h3>
                  <p className="text-[16px] opacity-75 uppercase tracking-widest">{tool.role}</p>
                </div>
              </div>
              <div className="space-y-3 border-t border-white/15 pt-5">
                {tool.pain.map((line) => (
                  <p key={line} className="text-[18px] opacity-65 flex items-center gap-3">
                    <X size={16} className="opacity-75 shrink-0" /> {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "context-impact",
    title: "Operational impact",
    summary: "Time lost, risk accumulated, growth constrained",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(184,80%,18%)] to-[hsl(184,60%,8%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Real impact</SectionLabel>
        <SlideTitle>What the business loses — every month</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-8">
          {[
            {
              emoji: "⏱️",
              title: "Time lost",
              body: "HR and Finance spend days reconciling instead of improving workforce quality.",
            },
            {
              emoji: "⚠️",
              title: "Risk accumulated",
              body: "Payroll corrections, coverage gaps on site, and statutory exposure grow quietly.",
            },
            {
              emoji: "📈",
              title: "Growth constrained",
              body: "Each new client site multiplies manual steps — the model does not compound.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-white/20 p-10">
              <div className="w-16 h-16 border border-white/25 flex items-center justify-center mb-6">
                <span className="text-[32px]">{item.emoji}</span>
              </div>
              <h3 className="text-[28px] font-medium mb-3">{item.title}</h3>
              <p className="text-[21px] opacity-70 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 border border-white/15 p-8 text-center">
          <p className="text-[26px] opacity-75 font-light leading-relaxed max-w-[1200px] mx-auto">
            None of this is inevitable. <strong className="opacity-100">The question is not if — it is when.</strong>
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "problems",
    title: "Pain points",
    summary: "Five pains that should not exist at your scale",
    icon: <X size={24} />,
    gradient: "from-[hsl(0,70%,25%)] to-[hsl(0,50%,12%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>What we identified</SectionLabel>
        <SlideTitle>Five pains holding operations back</SlideTitle>
        <div className="grid grid-cols-3 gap-6 mt-4">
          {[
            {
              title: "Unreliable time data",
              impact: "~48 hrs/month HR rework", // estimativa
              desc: "Clocking and books do not feed one payroll-ready source.",
            },
            {
              title: "Manager blind spots",
              impact: "Coverage gaps on client sites",
              desc: "Leave and overtime approved without team context.",
            },
            {
              title: "Compliance friction",
              impact: "Audit trail gaps",
              desc: "Statutory and client training proof scattered across files.",
            },
            {
              title: "Informal hiring",
              impact: "1–3 hires/month without pipeline",
              desc: "Growth continues; process does not institutionalize.",
            },
            {
              title: "Field disconnection",
              impact: "100 employees, one HR team",
              desc: "HR becomes middleware for every clock-in and document.",
            },
          ].map((p) => (
            <div key={p.title} className="border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle size={24} className="opacity-65" />
                <h3 className="text-[26px] font-normal">{p.title}</h3>
              </div>
              <p className="text-[20px] opacity-75 leading-relaxed mb-5">{p.desc}</p>
              <p className="text-[18px] opacity-80 border-t border-white/15 pt-4">{p.impact}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "cost-analysis",
    title: "Cost of standing still",
    summary: "Manual HR cost vs Factorial investment",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(347,90%,22%)] to-[hsl(0,70%,15%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Cost of standing still</SectionLabel>
        <SlideTitle>What does not changing cost?</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-4">
          <div>
            <h3 className="text-[26px] font-medium opacity-80 mb-6">The math is simple</h3>
            <div className="border border-white/20 p-8 space-y-4">
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">HR hours on manual HR / month</span>
                <span className="font-medium">{d.horasRHManualMes} h</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-65">Loaded cost / hour</span>
                <span className="font-medium">{formatUSD(d.custoHoraRH_USD)}</span>
              </div>
              <div className="flex justify-between text-[22px] border-t border-white/15 pt-4">
                <span className="opacity-75 font-medium">Direct labor cost / month</span>
                <span className="font-medium text-[24px]">{formatUSD(d.custoManualMensal_USD)}</span>
              </div>
              <div className="flex justify-between text-[22px]">
                <span className="opacity-75 font-medium">Annual (labor only)</span>
                <span className="font-medium text-[24px]">{formatUSD(d.custoManualAnual_USD)}</span>
              </div>
            </div>
            <p className="text-[16px] opacity-50 mt-4">// estimativa — validate with Finance</p>
          </div>
          <div>
            <div className="border border-white/25 bg-white/10 p-10 text-center mb-8">
              <p className="text-[20px] opacity-80 mb-2">Annual drag — manual model</p>
              <p className="text-[80px] font-light leading-none">{formatUSD(d.custoManualAnual_USD)}</p>
              <p className="text-[18px] opacity-75 mt-3">Before error, compliance, and manager time</p>
            </div>
            <div className="border border-white/15 p-6">
              <p className="text-[18px] opacity-80 uppercase tracking-widest mb-4">This still excludes...</p>
              {[
                "Payroll correction cycles",
                "Client service risk from understaffing",
                "Management time in firefighting",
              ].map((c) => (
                <p key={c} className="text-[19px] opacity-65 flex items-start gap-3 mb-2">
                  <AlertTriangle size={18} className="opacity-80 shrink-0 mt-1" /> {c}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border border-white/15 p-5 text-center">
          <p className="text-[22px] opacity-70 font-light">
            Factorial: <strong className="opacity-100">{formatUSD(d.mensalFactorial_USD)}/month</strong> — less than
            direct manual labor, before risk removed.
          </p>
        </div>
      </div>
    ),
  },

  {
    id: "solution",
    title: "Solution",
    summary: "Each pain has a concrete answer — demo included",
    icon: <Zap size={24} />,
    gradient: "from-[hsl(184,90%,20%)] to-[hsl(184,70%,10%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>The answer</SectionLabel>
        <SlideTitle>Every pain maps to a concrete change</SlideTitle>
        <div className="border-2 border-foreground/25 bg-foreground/[0.06] p-6 mb-10 flex items-center justify-between gap-8">
          <div>
            <p className="text-[22px] font-medium text-foreground mb-2">
              Your dedicated demo environment is ready
            </p>
            <p className="text-[18px] text-foreground/85 mb-1">
              Email: <span className="font-mono">{d.demoEmail}</span>
            </p>
            <p className="text-[18px] text-foreground/85">
              Password: <span className="font-mono">{d.demoPassword}</span>
            </p>
          </div>
          <a
            href={d.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-foreground text-background px-8 py-4 text-[20px] font-medium hover:opacity-90 transition-opacity"
          >
            Open demo →
          </a>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div className="space-y-4">
            {[
              { label: "Mobile clocking", desc: "Field teams capture time without HR in the middle." },
              { label: "Leave & approvals", desc: "Managers see coverage before approving absence." },
              { label: "Hiring pipeline", desc: "Candidates tracked; WhatsApp where it still helps." },
            ].map((f) => (
              <div key={f.label} className="flex items-start gap-4 border border-foreground/20 bg-background p-6">
                <Check size={24} className="text-foreground shrink-0 mt-1" />
                <div>
                  <p className="text-[24px] font-medium text-foreground">{f.label}</p>
                  <p className="text-[19px] text-foreground/80 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <ExpandableImage
            src={factorialWhy}
            alt="Factorial HR platform overview"
            title="Factorial HR platform"
            caption="Product overview"
            className="border border-foreground/15 overflow-hidden bg-background min-h-[380px]"
            imgClassName="w-full h-full object-cover object-center min-h-[380px]"
          />
        </div>
      </div>
    ),
  },

  {
    id: "factorial-value",
    title: "Why Factorial",
    summary: "Platform breadth, performance, cost control, decisions",
    icon: <Rocket size={24} />,
    gradient: "from-[hsl(347,70%,18%)] to-[hsl(347,50%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px] py-[48px]">
        <SectionLabel>Why Factorial</SectionLabel>
        <SlideTitle>One platform for how you actually run HR</SlideTitle>
        <div className="grid grid-cols-4 gap-5 mt-6">
          {[
            { src: factorialPerformance, label: "Build high-performance teams" },
            { src: factorialCosts, label: "Control costs & expenses" },
            { src: factorialDecisions, label: "Make better decisions" },
            { src: factorialWhoWeAre, label: "Built for growing companies" },
          ].map((item) => (
            <div key={item.label} className="border border-white/20 overflow-hidden bg-white/5">
              <ExpandableImage
                src={item.src}
                alt={item.label}
                title={item.label}
                caption="Factorial"
                className="w-full"
                imgClassName="w-full h-[200px] object-cover object-top"
              />
              <p className="text-[17px] font-medium p-4 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "reports",
    title: "Visibility",
    summary: "Real-time workforce intelligence",
    icon: <BarChart3 size={24} />,
    gradient: "from-[hsl(184,40%,95%)] to-[hsl(347,30%,92%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px] py-[60px]">
        <SectionLabel>Proof</SectionLabel>
        <SlideTitle>Decisions with data — not Excel</SlideTitle>
        <SlideSubtitle>Click any report to explore — real Factorial views.</SlideSubtitle>
        <ReportsGallery />
      </div>
    ),
  },

  {
    id: "integration",
    title: "Integration",
    summary: "Compliance workflow stays; Factorial owns people data",
    icon: <Link2 size={24} />,
    gradient: "from-[hsl(37,70%,22%)] to-[hsl(37,50%,10%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>How it fits</SectionLabel>
        <SlideTitle>Your compliance stays. Factorial owns people data.</SlideTitle>
        <p className="text-[24px] opacity-75 leading-[1.7] max-w-[1100px] mt-4 mb-10">
          You already file statutory obligations. Factorial becomes the{" "}
          <strong className="opacity-100">system of record</strong> for time, documents, and hiring — exporting
          payroll-ready data to Finance without rebuilding from books each month.
        </p>
        <div className="grid grid-cols-3 gap-8">
          {[
            { title: "Time → Payroll", desc: "Approved hours and leave flow to month-end preparation." },
            { title: "Documents", desc: "Contracts and IDs stored — not lost in chat threads." },
            { title: "Statutory", desc: "Audit-friendly records alongside your filing discipline." },
          ].map((item) => (
            <div key={item.title} className="border border-white/20 p-8">
              <h4 className="text-[24px] font-medium mb-3">{item.title}</h4>
              <p className="text-[20px] opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: "comparison",
    title: "Comparison",
    summary: "Before vs with Factorial",
    icon: <Check size={24} />,
    gradient: "from-[hsl(160,50%,20%)] to-[hsl(160,40%,8%)]",
    bg: "light",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Before and after</SectionLabel>
        <SlideTitle>What changes — point by point</SlideTitle>
        <div className="border border-foreground/20 mt-6">
          <div className="grid grid-cols-[1fr_1fr_1fr] text-[22px]">
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60">Criteria</div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">
              Today (manual)
            </div>
            <div className="px-10 py-6 border-b border-foreground/20 font-medium opacity-60 text-center">
              With Factorial
            </div>
            {[
              { c: "Time capture", s: "Excel + books", f: "Mobile / terminal" },
              { c: "Leave approvals", s: "Email / chat", f: "Calendar-aware" },
              { c: "Hiring", s: "Ad hoc", f: "Structured pipeline" },
              { c: "Training proof", s: "Files scattered", f: "Tracked + expiry alerts" },
              { c: "Payroll prep", s: "Manual rebuild", f: "Export ready" },
              { c: "Manager visibility", s: "None", f: "Team dashboards" },
              { c: "Scale", s: "Linear HR effort", f: "Same HR, more throughput" },
            ].map((row, i) => (
              <Fragment key={row.c}>
                <div
                  className={`px-10 py-5 flex items-center text-[20px] ${i < 6 ? "border-b border-foreground/10" : ""}`}
                >
                  {row.c}
                </div>
                <div
                  className={`px-10 py-5 flex items-center justify-center gap-3 opacity-70 ${i < 6 ? "border-b border-foreground/10" : ""}`}
                >
                  <X size={20} className="opacity-60 shrink-0" />
                  <span className="text-[20px]">{row.s}</span>
                </div>
                <div
                  className={`px-10 py-5 flex items-center justify-center gap-3 ${i < 6 ? "border-b border-foreground/10" : ""}`}
                >
                  <Check size={20} className="opacity-80 shrink-0" />
                  <span className="text-[20px]">{row.f}</span>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    id: "tech-architecture",
    title: "Security",
    summary: "AWS/Azure, SOC 2, GDPR — for management review",
    icon: <Cloud size={24} />,
    gradient: "from-[hsl(210,50%,18%)] to-[hsl(210,40%,8%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>For IT & management</SectionLabel>
        <SlideTitle>Security & compliance posture</SlideTitle>
        <div className="grid grid-cols-[1fr_1.1fr] gap-10 mt-6">
          <div className="space-y-6">
            <div className="border border-white/20 p-8 space-y-4">
              {[
                { label: "Hosting", value: "AWS + Azure (incl. EU regions)" },
                { label: "Availability", value: "SLA-backed infrastructure" },
                { label: "Recovery", value: "Disaster recovery in place" },
              ].map((r) => (
                <div key={r.label} className="flex justify-between text-[20px]">
                  <span className="opacity-75">{r.label}</span>
                  <span className="font-medium text-right">{r.value}</span>
                </div>
              ))}
            </div>
            <div className="border border-white/20 p-8">
              <div className="flex items-center gap-3 mb-5">
                <Shield size={24} className="opacity-80" />
                <h3 className="text-[26px] font-medium">Certifications</h3>
              </div>
              {["SOC 2 Type II", "ISO-aligned controls", "GDPR", "NDA available on request"].map((cert) => (
                <p key={cert} className="text-[19px] opacity-85 flex items-center gap-3 mb-2">
                  <Check size={16} className="shrink-0" /> {cert}
                </p>
              ))}
            </div>
          </div>
          <ExpandableImage
            src={factorialModules}
            alt="Factorial HR modules"
            title="All HR modules in one platform"
            caption="Factorial"
            className="border border-white/20 overflow-hidden bg-white/5 flex items-center justify-center p-4"
            imgClassName="w-full max-h-[520px] object-contain"
          />
        </div>
      </div>
    ),
  },

  {
    id: "investment",
    title: "Investment",
    summary: "USD 700/mo + onboarding — operational comparison",
    icon: <Rocket size={24} />,
    gradient: "from-[hsl(347,100%,25%)] to-[hsl(347,80%,12%)]",
    bg: "neutral",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Investment</SectionLabel>
        <SlideTitle>Operational comparison — not a line item</SlideTitle>
        <div className="grid grid-cols-2 gap-16 mt-8">
          <div className="border border-white/20 p-10">
            <p className="text-[18px] opacity-70 uppercase tracking-widest mb-2">Monthly</p>
            <p className="text-[64px] font-light leading-none">{formatUSD(d.mensalFactorial_USD)}</p>
            <p className="text-[20px] opacity-70 mt-3">
              ~{formatUSD(d.custoColaboradorMes_USD)} × {d.totalColaboradores} employees
            </p>
          </div>
          <div className="border border-white/20 p-10">
            <p className="text-[18px] opacity-70 uppercase tracking-widest mb-2">Implementation (one-time)</p>
            <p className="text-[64px] font-light leading-none">{formatUSD(d.implantacaoFactorial_USD)}</p>
            <p className="text-[20px] opacity-70 mt-3">Before subscription · {d.onboardingDias} days go-live</p>
          </div>
        </div>
        <p className="text-[26px] opacity-80 font-light mt-10 max-w-[1200px]">
          Continuing manual HR for {d.totalColaboradores} field employees costs more in rework and risk each month
          than this investment.
        </p>
      </div>
    ),
  },

  {
    id: "decision-path",
    title: "Decision path",
    summary: "Three steps to go-live",
    icon: <Users size={24} />,
    gradient: "from-[hsl(347,100%,20%)] to-[hsl(347,80%,10%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center h-full px-[120px]">
        <SectionLabel>Next</SectionLabel>
        <SlideTitle>Three steps to move forward</SlideTitle>
        <div className="grid grid-cols-3 gap-10 mt-12">
          {[
            { step: "1", title: "Confirm scope", desc: "HR + Operations align phase-one modules and sites." },
            { step: "2", title: "Approve terms", desc: "Management signs commercial alignment." },
            { step: "3", title: "Start onboarding", desc: `${d.partner} + Factorial kick off ${d.onboardingDias}-day rollout.` },
          ].map((item) => (
            <div key={item.step} className="border border-white/25 p-10 text-center">
              <p className="text-[48px] font-light mb-4">{item.step}</p>
              <h4 className="text-[28px] font-medium mb-3">{item.title}</h4>
              <p className="text-[20px] opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-[24px] opacity-70 mt-12 text-center max-w-[1000px] mx-auto">
          Staying on spreadsheets requires more justification than standardizing now.
        </p>
      </div>
    ),
  },

  {
    id: "video",
    title: "Closing",
    summary: "See Factorial in action",
    icon: <Video size={24} />,
    gradient: "from-[hsl(347,100%,25%)] to-[hsl(347,80%,12%)]",
    bg: "dark",
    content: (
      <div className="flex flex-col justify-center items-center h-full px-[120px] text-center">
        <SectionLabel>See it live</SectionLabel>
        <SlideTitle>Imagine your HR operating this way</SlideTitle>
        <div className="w-[960px] h-[540px] mt-8">
          <iframe
            width="960"
            height="540"
            src={`https://www.youtube.com/embed/${d.closingVideoId}`}
            title="Factorial — product overview (English)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-2 border-white/20"
          />
        </div>
      </div>
    ),
  },
];
