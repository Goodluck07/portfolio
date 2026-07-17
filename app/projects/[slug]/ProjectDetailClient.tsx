"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, GitBranch, CheckCircle, Rocket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  highlights: string[];
  github: string;
  liveDemo?: string;
  image?: string;
}

interface Props {
  project: Project;
}

export default function ProjectDetailClient({ project }: Props) {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        {/* Project Image - Hero Style */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 rounded-lg overflow-hidden border border-border"
          >
            <div className="relative w-full h-[300px] sm:h-[400px] bg-secondary">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Project Header */}
        <div className="mb-8">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            {project.title}
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors text-sm font-medium"
              >
                <GitBranch className="h-4 w-4" />
                View Code
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                <Rocket className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-border pt-6 mb-6"
        >
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.description}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-border pt-6 mb-6"
        >
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 border border-border text-muted-foreground rounded-md font-medium text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-border pt-6 mb-8"
        >
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Key Highlights</h2>
          <ul className="space-y-4">
            {project.highlights.map((highlight) => (
              <li key={highlight.slice(0, 50)} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Back to Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
