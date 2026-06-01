import { ExpandableImage } from "@/components/ui/ImageLightbox";
import reportRotatividade from "@/assets/reports/report-rotatividade.png";
import reportDesempenho from "@/assets/reports/report-desempenho.png";
import reportAusencias from "@/assets/reports/report-ausencias.png";
import reportFuncionarios from "@/assets/reports/report-funcionarios.png";
import reportFolha from "@/assets/reports/report-folha.png";

const REPORTS = [
  { src: reportRotatividade, title: "Turnover & retention", category: "People analytics" },
  { src: reportDesempenho, title: "Performance", category: "Performance" },
  { src: reportAusencias, title: "Absences", category: "HR operations" },
  { src: reportFuncionarios, title: "Employees", category: "HR operations" },
  { src: reportFolha, title: "Payroll management", category: "Payroll" },
];

export function ReportsGallery() {
  return (
    <>
      <div className="grid grid-cols-3 gap-6 mt-4">
        {REPORTS.slice(0, 3).map((r) => (
          <ReportCard key={r.title} report={r} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6 max-w-[1100px] mx-auto w-full">
        {REPORTS.slice(3, 5).map((r) => (
          <ReportCard key={r.title} report={r} />
        ))}
      </div>
    </>
  );
}

function ReportCard({
  report,
}: {
  report: { src: string; title: string; category: string };
}) {
  return (
    <ExpandableImage
      src={report.src}
      alt={report.title}
      title={report.title}
      caption={report.category}
      className="group border border-foreground/20 bg-background overflow-hidden hover:border-foreground/40 hover:shadow-xl transition-all duration-300"
      imgClassName="aspect-[16/10] object-cover object-top group-hover:scale-105 transition-transform duration-500"
    >
      <div className="aspect-[16/10] overflow-hidden bg-foreground/5">
        <img
          src={report.src}
          alt={report.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 pointer-events-none"
        />
      </div>
      <div className="p-6 pointer-events-none">
        <p className="text-[18px] tracking-[0.2em] uppercase text-foreground/60 mb-2">{report.category}</p>
        <p className="text-[26px] font-light leading-tight text-foreground">{report.title}</p>
      </div>
    </ExpandableImage>
  );
}
