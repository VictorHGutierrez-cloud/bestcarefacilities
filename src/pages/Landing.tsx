import { useNavigate } from "react-router-dom";
import { CinematicHero } from "@/components/ui/cinematic-hero";
import { DEFAULT_VALUES } from "@/utils/constants";
import factorialWhy from "@/assets/factorial/factorial-why.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
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
    <section className="bg-[hsl(347,80%,5%)] border-t border-white/10 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-[#FF355E] text-sm tracking-[0.3em] uppercase font-bold mb-4">Factorial HR</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            See the platform your team will run on
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Attendance, leave, documents, hiring, and analytics — one system for{" "}
            {DEFAULT_VALUES.empresa} and ~{DEFAULT_VALUES.totalColaboradores} employees across client sites.
          </p>
        </div>
        <div className="border border-white/15 overflow-hidden shadow-2xl">
          <img src={factorialWhy} alt="Factorial HR platform" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
    </>
  );
};

export default Landing;
