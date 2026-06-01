import { useNavigate } from "react-router-dom";
import { LayoutGrid } from "lucide-react";
import { ColorfulPillCardsGrid, slidePillAccent } from "@/components/ui/card-1";
import { ProposalPageShell } from "@/components/layout/ProposalPageShell";
import { DEFAULT_VALUES as d } from "@/utils/constants";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <ProposalPageShell
      title={d.empresa}
      subtitle={`${d.tagline} · ${d.location} — ${d.yearsExperience} years, ${d.branches} branches, ${d.professionalsNetwork} professionals`}
    >
      <ColorfulPillCardsGrid
        theme="light"
        columns={1}
        className="max-w-xl border border-border/80 bg-white shadow-sm"
        items={[
          {
            name: "Enter proposal",
            detail: "Topics on the left · slide opens in a floating panel — no extra steps",
            logo: <LayoutGrid className="h-5 w-5" />,
            accent: slidePillAccent(0),
            onClick: () => navigate("/proposta"),
          },
        ]}
      />

      <ul className="mt-8 space-y-2 text-sm text-muted-foreground max-w-xl">
        <li>· Pick a topic from the colorful cards in the sidebar</li>
        <li>· Use Previous / Next or swipe on mobile</li>
        <li>· Press F for fullscreen on the slide panel</li>
      </ul>
    </ProposalPageShell>
  );
};

export default Landing;
