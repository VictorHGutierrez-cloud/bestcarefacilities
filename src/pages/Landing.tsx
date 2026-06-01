import { useNavigate } from "react-router-dom";
import { Building2, LayoutGrid, Sparkles, Users } from "lucide-react";
import { ColorfulPillCardsGrid, slidePillAccent } from "@/components/ui/card-1";
import { ProposalPageShell } from "@/components/layout/ProposalPageShell";
import { DEFAULT_VALUES as d } from "@/utils/constants";

const Landing = () => {
  const navigate = useNavigate();

  const openProposal = () => navigate("/proposta", { state: { openGrid: true } });

  return (
    <ProposalPageShell
      title={d.empresa}
      subtitle={`${d.tagline} · ${d.location}`}
    >
      <ColorfulPillCardsGrid
        theme="light"
        columns={1}
        title="Partnership proposal"
        className="border border-border/80 bg-white shadow-sm"
        items={[
          {
            name: "Access Proposal",
            detail: "Open all slides — pick any topic to begin the presentation",
            logo: <LayoutGrid className="h-5 w-5" />,
            accent: slidePillAccent(0),
            onClick: openProposal,
          },
          {
            name: `${d.yearsExperience} years · ${d.branches} branches`,
            detail: `${d.professionalsNetwork} professionals · ${d.monthlyClients} monthly clients · ${d.googleRating}★ rated`,
            logo: <Building2 className="h-5 w-5" />,
            accent: slidePillAccent(1),
            onClick: openProposal,
          },
          {
            name: "Factorial HR scope",
            detail: `~${d.totalColaboradores} HQ & branch seats · deployed with ${d.partner}`,
            logo: <Users className="h-5 w-5" />,
            accent: slidePillAccent(2),
            onClick: openProposal,
          },
          {
            name: "What you will see",
            detail: "Context, solution, demo login, reports, integration, security, and closing video",
            logo: <Sparkles className="h-5 w-5" />,
            accent: slidePillAccent(3),
            onClick: openProposal,
          },
        ]}
      />

      <p className="text-center text-muted-foreground text-sm mt-6">
        Same card style across the proposal — tap any card or open the deck above.
      </p>
    </ProposalPageShell>
  );
};

export default Landing;
