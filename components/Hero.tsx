"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Eye, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [showResumeMenu, setShowResumeMenu] = useState(false);
  const resumeMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resumeMenuRef.current && !resumeMenuRef.current.contains(event.target as Node)) {
        setShowResumeMenu(false);
      }
    };

    if (showResumeMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showResumeMenu]);
  return (
    <section className="min-h-screen flex items-center relative bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="eyebrow mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {personalInfo.title} · {personalInfo.location}
          </motion.p>

          <motion.h1
            className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-foreground mb-8 leading-[1.05] max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-4 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#projects"
              className="px-7 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
            >
              View Projects
            </Link>
            <div className="relative" ref={resumeMenuRef}>
              <button
                onClick={() => setShowResumeMenu(!showResumeMenu)}
                className="px-7 py-3 border border-border rounded-md font-medium text-foreground hover:border-primary hover:text-primary transition-colors flex items-center gap-2"
                suppressHydrationWarning
              >
                <FileText className="h-4 w-4" />
                Resume
              </button>
              {showResumeMenu && (
                <div className="absolute top-full mt-2 left-0 w-52 bg-card border border-border rounded-md overflow-hidden z-10">
                  <a
                    href="/resume/Goodluck_Badewole_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 hover:bg-secondary transition-colors text-foreground text-sm"
                    onClick={() => setShowResumeMenu(false)}
                  >
                    <Eye className="h-4 w-4" />
                    View Resume
                  </a>
                  <a
                    href="/resume/Goodluck_Badewole_resume.pdf"
                    download
                    className="flex items-center gap-2 px-5 py-3 hover:bg-secondary transition-colors text-foreground text-sm border-t border-border"
                    onClick={() => setShowResumeMenu(false)}
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </div>
              )}
            </div>
            <Link
              href="#contact"
              className="px-7 py-3 rounded-md font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md hover:bg-secondary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-md hover:bg-secondary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-md hover:bg-secondary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-5 w-5 text-muted-foreground" />
        </Link>
      </motion.div>
    </section>
  );
}
