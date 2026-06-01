import { ResourceCardsGrid } from "@/components/ui/cards-grid";
import type { SlideData } from "./slides";

interface SlideOverviewGridProps {
  slides: SlideData[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export function SlideOverviewGrid({ slides, currentIndex, onSelect }: SlideOverviewGridProps) {
  return (
    <ResourceCardsGrid
      variant="presenter"
      columns={4}
      className="max-w-[1600px]"
      items={slides.map((slide, index) => ({
        title: `${index + 1}. ${slide.title}`,
        subtitle: slide.summary,
        icon: <span className="text-white [&_svg]:h-5 [&_svg]:w-5">{slide.icon}</span>,
        active: index === currentIndex,
        onClick: () => onSelect(index),
      }))}
    />
  );
}
