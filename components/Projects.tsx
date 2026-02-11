"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Code2, Github } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate projects for seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section
      id="projects"
      className="py-20 bg-card overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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
          A collection of projects I&apos;ve built, from full-stack applications to AI-powered tools
        </motion.p>
      </div>

      {/* Horizontal Scrolling Carousel */}
      <div className="relative" ref={containerRef}>
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedProjects.map((project, index) => (
            <div
              key={`${project.title}-${index}`}
              className="flex-shrink-0 w-[350px] sm:w-[400px] mx-3"
            >
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300 group h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Code2 className="h-6 w-6 text-primary" />
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
                      <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                    </a>
                  )}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1 flex-shrink-0">•</span>
                      <span className="line-clamp-2">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
