"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-muted-foreground">
              {personalInfo.title} passionate about building scalable and
              impactful software solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link
                href="#about"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#experience"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#projects"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js
            & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
