"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Code2, GitBranch, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const AUTOPLAY_PX_PER_SEC = 32;
const RESUME_AFTER_MS = 2200;

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const lastFrameTimeRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // scrollLeft only accepts whole-pixel values in most browsers, so a sub-1px
  // per-frame delta silently rounds up to a full pixel every frame, roughly
  // doubling the real speed. Accumulate the fractional remainder here and
  // only write to scrollLeft once it adds up to at least a whole pixel.
  const fractionalPixelsRef = useRef(0);
  const [isInteracting, setIsInteracting] = useState(false);

  // Triple the projects so the autoplay loop can wrap seamlessly in either direction
  const loopedProjects = [...projects, ...projects, ...projects];

  const scheduleResume = useCallback(() => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsInteracting(false), RESUME_AFTER_MS);
  }, []);

  const pauseImmediately = useCallback(() => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsInteracting(true);
  }, []);

  const pauseThenScheduleResume = useCallback(() => {
    pauseImmediately();
    scheduleResume();
  }, [pauseImmediately, scheduleResume]);

  // Start in the middle copy so autoplay always has room to wrap in either direction
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollLeft = el.scrollWidth / 3;
  }, []);

  // Keep the scroll position within the middle third by silently jumping by one
  // set width when it drifts near either edge - invisible since the sets are identical.
  // Safe to run regardless of what caused the scroll (autoplay, wheel, touch, arrows).
  const recenterIfNeeded = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const oneSet = el.scrollWidth / 3;
    if (oneSet <= 0) return;
    if (el.scrollLeft >= oneSet * 2) {
      el.scrollLeft -= oneSet;
    } else if (el.scrollLeft < oneSet * 0.5) {
      el.scrollLeft += oneSet;
    }
  }, []);

  // Autoplay loop, driven by scrollLeft (not CSS transform) so it shares the exact
  // same position as manual touch/trackpad scrolling and never has to "snap" on pause.
  // Whether the user is interacting is tracked separately via wheel/touch/mouse
  // events below - not inferred from the 'scroll' event, since that fires for
  // both autoplay's own writes and user input and can't reliably tell them apart.
  useEffect(() => {
    let rafId: number;

    const step = (ts: number) => {
      const el = trackRef.current;
      if (el && !isInteracting) {
        if (lastFrameTimeRef.current != null) {
          const dt = ts - lastFrameTimeRef.current;
          fractionalPixelsRef.current += (AUTOPLAY_PX_PER_SEC * dt) / 1000;
          const wholePixels = Math.trunc(fractionalPixelsRef.current);
          if (wholePixels !== 0) {
            el.scrollLeft += wholePixels;
            fractionalPixelsRef.current -= wholePixels;
            recenterIfNeeded();
          }
        }
        lastFrameTimeRef.current = ts;
      } else {
        lastFrameTimeRef.current = null;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isInteracting, recenterIfNeeded]);

  // Own eased scroll tween instead of native scrollBy({behavior:"smooth"}) - the
  // native smooth scroll fights with the autoplay loop's direct scrollLeft writes
  const animateScrollBy = useCallback((delta: number, duration = 400) => {
    const el = trackRef.current;
    if (!el) return;
    const start = el.scrollLeft;
    const startTime = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.scrollLeft = start + delta * eased;
      recenterIfNeeded();
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [recenterIfNeeded]);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-project-card]");
    const step = (card?.offsetWidth ?? 340) + 24;
    pauseThenScheduleResume();
    animateScrollBy(direction * step);
  };

  return (
    <section id="projects" className="py-20 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="eyebrow mb-3 text-center"
        >
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-semibold text-foreground text-center"
        >
          Featured Projects
        </motion.h2>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        {/* Prev/next controls */}
        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Previous project"
          className="hidden sm:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background border border-border hover:border-primary/60 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          aria-label="Next project"
          className="hidden sm:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background border border-border hover:border-primary/60 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={trackRef}
          onScroll={recenterIfNeeded}
          onWheel={pauseThenScheduleResume}
          onTouchStart={pauseImmediately}
          onTouchEnd={scheduleResume}
          onMouseEnter={pauseImmediately}
          onMouseLeave={() => setIsInteracting(false)}
          className="flex gap-6 overflow-x-auto scroll-container"
        >
          {loopedProjects.map((project, index) => (
            <div
              key={`${project.slug}-${index}`}
              data-project-card
              className="flex-shrink-0 w-[280px] sm:w-[380px]"
            >
              <div className="bg-background rounded-lg overflow-hidden border border-border hover:border-primary/60 transition-colors duration-300 h-full flex flex-col group">
                {/* Project Image */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative h-48 bg-secondary overflow-hidden block"
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code2 className="h-16 w-16 text-primary/30" />
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <Link href={`/projects/${project.slug}`} className="group/title">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover/title:text-primary transition-colors flex items-center gap-1.5">
                      {project.title}
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover/title:opacity-100 transition-opacity" />
                    </h3>
                  </Link>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 border border-border text-muted-foreground rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2.5 py-1 text-muted-foreground rounded-md text-xs font-medium">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-3 border-t border-border">
                    {project.github && (
                      <button
                        onClick={() => window.open(project.github, "_blank")}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                        suppressHydrationWarning
                      >
                        <GitBranch className="h-4 w-4" />
                        Code
                      </button>
                    )}
                    {project.liveDemo && (
                      <button
                        onClick={() => window.open(project.liveDemo, "_blank")}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                        suppressHydrationWarning
                      >
                        <ExternalLink className="h-4 w-4" />
                        Preview
                      </button>
                    )}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium ml-auto"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
