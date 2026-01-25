"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "@/lib/data";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-background via-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="#projects"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </a>
            <Link
              href="#contact"
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-full hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </Link>
      </motion.div>
    </section>
  );
}
