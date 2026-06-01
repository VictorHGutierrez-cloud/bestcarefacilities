import { useNavigate } from "react-router-dom";
import { CinematicHero } from "@/components/ui/cinematic-hero";
import { ExpandableImage } from "@/components/ui/ImageLightbox";
import { DEFAULT_VALUES as d } from "@/utils/constants";
import factorialWhy from "@/assets/factorial/factorial-why.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
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
      <section className="bg-[hsl(347,80%,5%)] border-t border-white/10 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#FF355E] text-sm tracking-[0.3em] uppercase font-bold mb-4">Factorial HR</p>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              HR infrastructure for integrated facility management
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              {d.coreServices} — delivered across {d.location} with same- and next-day service, fixed quotes, and
              insured specialists.
            </p>
            <ul className="text-white/60 text-sm space-y-2">
              <li>· {d.servicePillars.join(" · ")}</li>
              <li>· {d.monthlyClients} monthly clients · {d.reviewCount}+ Google reviews</li>
              <li>· HQ: {d.headquarters}</li>
            </ul>
          </div>
          <ExpandableImage
            src={factorialWhy}
            alt="Factorial HR platform"
            title="Factorial HR platform"
            caption="Product overview"
            className="border border-white/15 overflow-hidden shadow-2xl"
            imgClassName="w-full h-auto object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default Landing;
