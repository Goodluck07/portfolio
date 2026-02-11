"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Code2, Github, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";
import Link from "next/link";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll with requestAnimationFrame
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let lastTime = 0;

    const animate = (currentTime: number) => {
      if (!lastTime) lastTime = currentTime;
      const delta = currentTime - lastTime;
      lastTime = currentTime;

      if (!isPaused) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const newScroll = container.scrollLeft + (delta / 1000) * 100; // 100px per second

        if (newScroll >= maxScroll) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = newScroll;
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const scrollAmount = 400;
    containerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-20 bg-card overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground text-center"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto"
        >
          Scroll or use arrows to browse • Click to learn more
        </motion.p>
      </div>

      {/* Navigation Arrows */}
      <div className="max-w-7xl mx-auto px-4 mb-4 flex justify-end gap-2">
        <button
          onClick={() => scroll("left")}
          className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors shadow-sm"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors shadow-sm"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Scrollable Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        <div
          ref={containerRef}
          className="flex gap-5 px-6 overflow-x-auto scroll-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {projects.map((project) => (
            <div
              key={project.slug}
              className="flex-shrink-0 w-[320px] sm:w-[360px]"
            >
              <Link href={`/projects/${project.slug}`} className="block h-full group">
                <div className="bg-background rounded-xl p-5 shadow-sm border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Code2 className="h-5 w-5 text-primary" />
                    </div>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-secondary rounded-lg transition-colors"
                        aria-label="View on GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-4 w-4 text-muted-foreground hover:text-primary" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-3 leading-relaxed text-sm line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-xs">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all mt-auto">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
