import { useNavigate } from "react-router-dom";
import { LayoutGrid } from "lucide-react";
import { ColorfulPillCardsGrid, slidePillAccent } from "@/components/ui/card-1";
import { ParticleTextEffect, BEST_CARE_PARTICLE_WORDS } from "@/components/ui/particle-text-effect";
import { DEFAULT_VALUES as d } from "@/utils/constants";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="proposal-font min-h-screen bg-background text-foreground font-sans flex flex-col">
      {/* Hero — Factorial-style particle text for Best Care */}
      <section className="relative w-full h-[min(48vh,420px)] min-h-[260px] shrink-0 overflow-hidden border-b border-border/60">
        <ParticleTextEffect words={BEST_CARE_PARTICLE_WORDS} theme="light" className="pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center pb-6 px-4 text-center pointer-events-none">
          <p className="text-primary text-xs md:text-sm tracking-[0.35em] uppercase font-bold">Factorial HR</p>
          <p className="text-muted-foreground text-sm mt-2 max-w-lg">
            Partnership proposal for {d.empresa}
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="flex-1 max-w-[1200px] w-full mx-auto px-4 md:px-8 py-10 md:py-12">
        <h1 className="text-2xl md:text-3xl font-semibold leading-tight max-w-3xl">{d.empresa}</h1>
        <p className="text-muted-foreground text-base md:text-lg mt-2 max-w-2xl">
          {d.tagline} · {d.location} — {d.yearsExperience} years, {d.branches} branches,{" "}
          {d.professionalsNetwork} professionals
        </p>

        <div className="mt-8 md:mt-10 max-w-xl">
          <ColorfulPillCardsGrid
            theme="light"
            columns={1}
            className="border border-border/80 bg-white shadow-sm"
            items={[
              {
                name: "Enter proposal",
                detail: "Topics on the left · slide opens in a floating panel",
                logo: <LayoutGrid className="h-5 w-5" />,
                accent: slidePillAccent(0),
                onClick: () => navigate("/proposta"),
              },
            ]}
          />
        </div>

        <p className="text-muted-foreground text-sm mt-6 max-w-xl">
          Words above rotate automatically in Factorial colors — same spirit as the Factorial brand experience,
          tailored for Best Care.
        </p>
      </div>
    </div>
  );
};

export default Landing;
