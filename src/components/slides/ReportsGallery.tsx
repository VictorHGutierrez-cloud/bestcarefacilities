import { useState, useEffect } from "react";
import { ResourceCardsGrid } from "@/components/ui/cards-grid";
import { LightboxOverlay } from "@/components/ui/ImageLightbox";
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
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  useEffect(() => {
    if (openIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx]);

  const openReport = openIdx !== null ? REPORTS[openIdx] : null;

  const toCardItems = (slice: typeof REPORTS, offset: number) =>
    slice.map((report, i) => ({
      title: report.title,
      subtitle: `${report.category} · Click to expand`,
      imageSrc: report.src,
      onClick: () => setOpenIdx(offset + i),
    }));

  return (
    <>
      <ResourceCardsGrid columns={3} className="mt-4" items={toCardItems(REPORTS.slice(0, 3), 0)} />
      <ResourceCardsGrid
        columns={2}
        className="mt-5 max-w-[820px] mx-auto w-full"
        items={toCardItems(REPORTS.slice(3, 5), 3)}
      />

      {openReport && (
        <LightboxOverlay
          image={{
            src: openReport.src,
            alt: openReport.title,
            title: openReport.title,
            caption: openReport.category,
          }}
          onClose={() => setOpenIdx(null)}
        />
      )}
    </>
  );
}
