"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Code2, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  slug: string;
  description: string;
  techStack: string[];
  highlights: string[];
  github: string;
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
        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-4 bg-primary/10 rounded-xl">
              <Code2 className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-grow">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors text-sm font-medium"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Project Image */}
        {project.image && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8 rounded-xl overflow-hidden border border-border"
          >
            <div className="relative w-full h-[400px]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        )}

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-xl p-6 border border-border mb-8"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {project.description}
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card rounded-xl p-6 border border-border mb-8"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium"
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
          className="bg-card rounded-xl p-6 border border-border mb-8"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">Key Highlights</h2>
          <ul className="space-y-4">
            {project.highlights.map((highlight) => (
              <li key={highlight.slice(0, 50)} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{highlight}</span>
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
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all projects
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
