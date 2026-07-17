"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, GitBranch, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = trackRef.current;
    if (!el) return;
    const onResize = () => updateScrollState();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollByCard = (direction: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-project-card]");
    const step = (card?.offsetWidth ?? 340) + 24;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
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
          disabled={!canScrollLeft}
          aria-label="Previous project"
          className="hidden sm:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background border border-border hover:border-primary/60 disabled:opacity-0 disabled:pointer-events-none transition-all"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollByCard(1)}
          disabled={!canScrollRight}
          aria-label="Next project"
          className="hidden sm:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background border border-border hover:border-primary/60 disabled:opacity-0 disabled:pointer-events-none transition-all"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div
          ref={trackRef}
          onScroll={updateScrollState}
          className="flex gap-6 overflow-x-auto scroll-container snap-x snap-mandatory pb-2"
        >
          {projects.map((project) => (
            <div
              key={project.slug}
              data-project-card
              className="flex-shrink-0 w-[280px] sm:w-[380px] snap-start"
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
