import { useNavigate } from "react-router-dom";
import { CinematicHero } from "@/components/ui/cinematic-hero";
import { DEFAULT_VALUES as d } from "@/utils/constants";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <CinematicHero
      brandName="FACTORIAL HR"
      heroSubtitle={`${d.empresa} · ${d.location}`}
      tagline1="One platform for"
      tagline2="workforce operations."
      ctaButtonLabel="Open proposal →"
      cardHeading={d.tagline}
      cardDescription={
        <>
          Proposal for <strong>{d.empresa}</strong> — {d.yearsExperience} years, {d.branches} branches,{" "}
          {d.professionalsNetwork} professionals, {d.googleRating}★ rated. Factorial scopes ~{d.totalColaboradores}{" "}
          HQ & branch HR seats to run the operation behind your integrated FM network.
        </>
      }
      metricValue={d.professionalsCount}
      metricLabel="professionals nationwide"
      ctaHeading="Open the proposal"
      ctaDescription="Built from your company profile and discovery session — narrative, demo, and path to go-live."
      onCtaClick={() => navigate("/proposta")}
    />
  );
};

export default Landing;
