import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Grid3X3, Home, Maximize, Minimize } from "lucide-react";
import SlideLayout from "./SlideLayout";
import { SlideOverviewGrid } from "./SlideOverviewGrid";
import { slides } from "./slides";
import { cn } from "@/lib/utils";

const bgClasses = {
  dark: "bg-primary text-primary-foreground",
  neutral: "bg-secondary text-secondary-foreground",
  light: "bg-background text-foreground",
};

function readInitialGrid(location: ReturnType<typeof useLocation>): boolean {
  const state = location.state as { openGrid?: boolean } | null;
  if (state?.openGrid === true) return true;
  if (state?.openGrid === false) return false;
  return new URLSearchParams(location.search).get("view") !== "slide";
}

const SlidePresenter = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showGrid, setShowGrid] = useState(() => readInitialGrid(location));
  const touchStartX = useRef<number | null>(null);

  const openGrid = useCallback(() => setShowGrid(true), []);

  const goTo = useCallback((i: number) => {
    setCurrent(Math.max(0, Math.min(i, slides.length - 1)));
    setShowGrid(false);
  }, []);

  const next = useCallback(() => {
    if (showGrid) return;
    setCurrent((c) => Math.min(c + 1, slides.length - 1));
  }, [showGrid]);

  const prev = useCallback(() => {
    if (showGrid) return;
    setCurrent((c) => Math.max(c - 1, 0));
  }, [showGrid]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "g" || e.key === "G") {
        e.preventDefault();
        if (!showGrid) openGrid();
        return;
      }
      if (e.key === "Escape") {
        if (!showGrid) {
          e.preventDefault();
          openGrid();
        }
        return;
      }
      if (showGrid) return;

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        next();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "f" || e.key === "F" || e.key === "F5") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showGrid, next, prev, openGrid, toggleFullscreen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (showGrid) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (showGrid || touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const slide = slides[current];

  if (showGrid) {
    return (
      <div className="proposal-font min-h-screen bg-background text-foreground p-4 md:p-8 overflow-y-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 max-w-[1600px] mx-auto">
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-3 transition-colors"
            >
              <Home size={16} />
              Home
            </Link>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">Proposal overview</h2>
            <p className="text-sm text-muted-foreground mt-1">Click a card to open that slide</p>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto">
          <SlideOverviewGrid slides={slides} currentIndex={current} onSelect={goTo} />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-primary">
      <div className="flex-1 flex min-h-0">
        <div className="hidden xl:flex flex-col w-52 border-r border-white/10 overflow-y-auto bg-primary py-2 px-2 gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className={cn(
                "relative aspect-video w-full overflow-hidden border transition-all shrink-0",
                i === current ? "border-white/50 ring-1 ring-white/20" : "border-white/10 hover:border-white/25"
              )}
            >
              <div className={cn("absolute inset-0 overflow-hidden opacity-25 pointer-events-none", bgClasses[s.bg])}>
                <SlideLayout>{s.content}</SlideLayout>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
              <div className="absolute bottom-0 left-0 right-0 px-2 py-2 text-left">
                <span className="text-[11px] font-semibold text-white leading-tight block">
                  {i + 1}. {s.title}
                </span>
                <span className="text-[9px] text-white/75 leading-snug line-clamp-2 mt-0.5">{s.summary}</span>
              </div>
            </button>
          ))}
        </div>

        <div
          className="flex-1 relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className={cn("absolute inset-0 overflow-hidden", bgClasses[slide.bg])}
            >
              <SlideLayout>{slide.content}</SlideLayout>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={openGrid}
            className="absolute top-4 left-4 z-20 hidden sm:inline-flex items-center gap-2 rounded-lg border border-white/25 bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-sm hover:bg-black/60 transition-colors"
          >
            <Grid3X3 size={18} />
            Back to Grid
            <span className="text-white/45 text-xs ml-1">(G)</span>
          </button>

          <button
            onClick={prev}
            disabled={current === 0}
            className="absolute left-0 top-0 bottom-0 w-1/4 z-10 lg:hidden disabled:hidden"
            aria-label="Previous slide"
          />
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="absolute right-0 top-0 bottom-0 w-1/4 z-10 lg:hidden disabled:hidden"
            aria-label="Next slide"
          />
        </div>
      </div>

      <div className="h-14 md:h-12 border-t border-white/10 bg-primary flex items-center justify-between px-3 md:px-4 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <button
            onClick={openGrid}
            className="flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-white text-sm hover:bg-white/10 transition-colors shrink-0"
            title="Back to grid (G)"
          >
            <Grid3X3 size={18} />
            <span className="hidden sm:inline">Back to Grid</span>
            <span className="sm:hidden">Grid</span>
          </button>
          <span className="text-sm text-white/40 truncate">
            {current + 1} / {slides.length}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-3 text-white/60 hover:text-white disabled:opacity-20 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="p-3 text-white/60 hover:text-white disabled:opacity-20 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <button
          onClick={toggleFullscreen}
          className="p-2 opacity-50 hover:opacity-100 transition-opacity text-white shrink-0"
          title="Fullscreen (F)"
        >
          {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
        </button>
      </div>
    </div>
  );
};

export default SlidePresenter;
