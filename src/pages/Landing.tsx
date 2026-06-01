import { useNavigate } from "react-router-dom";
import { CinematicHero } from "@/components/ui/cinematic-hero";
import { DEFAULT_VALUES } from "@/utils/constants";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <CinematicHero
      brandName="FACTORIAL HR"
      tagline1="One platform for"
      tagline2="workforce operations."
      cardHeading="Bridge the gap from spreadsheets to control."
      cardDescription={
        <>
          A tailored proposal for <strong>{DEFAULT_VALUES.empresa}</strong> — facility management across
          Kenya, ~{DEFAULT_VALUES.totalColaboradores} employees, and a compliance-led operating model.
        </>
      }
      metricValue={DEFAULT_VALUES.totalColaboradores}
      metricLabel="employees managed"
      ctaHeading="Open the proposal"
      ctaDescription="Executive narrative, operating model, investment, and decision path — built from your discovery session."
      onCtaClick={() => navigate("/proposta")}
    />
  );
};

export default Landing;
