import { useNavigate } from "react-router-dom";
import { DEFAULT_VALUES as d } from "@/utils/constants";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="proposal-font min-h-screen bg-[hsl(347,80%,6%)] flex flex-col items-center justify-center px-6 text-center font-sans">
      <p className="text-[#FF355E] text-sm tracking-[0.35em] uppercase font-bold mb-6">Factorial HR</p>
      <h1 className="text-4xl md:text-6xl font-light text-white mb-3 max-w-4xl leading-tight">
        {d.empresa}
      </h1>
      <p className="text-white/55 text-lg md:text-xl mb-2">{d.tagline}</p>
      <p className="text-white/40 text-sm md:text-base mb-14">{d.location}</p>

      <button
        type="button"
        onClick={() => navigate("/proposta", { state: { openGrid: true } })}
        className="rounded-2xl bg-white text-[hsl(347,80%,12%)] px-10 py-4 text-lg font-semibold shadow-lg hover:bg-white/95 hover:scale-[1.02] active:scale-[0.98] transition-all"
      >
        Access Proposal
      </button>

      <p className="text-white/35 text-xs mt-8 max-w-md">
        Opens the slide overview — pick any topic card to begin.
      </p>
    </div>
  );
};

export default Landing;
