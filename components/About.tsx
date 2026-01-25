"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, affiliations } from "@/lib/data";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>

          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I&apos;m a Computer Science student at Alabama A&M University with
              a 4.0 GPA, passionate about building scalable software solutions.
              I have hands-on experience from internships at{" "}
              <span className="text-primary font-semibold">Splunk (Cisco)</span>{" "}
              and{" "}
              <span className="text-primary font-semibold">Activision</span>,
              where I worked on backend infrastructure and game development.
            </p>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My expertise spans across full-stack development, distributed
              systems, and AI/ML applications. I&apos;m proficient in Go,
              Python, TypeScript, React, and cloud technologies. I love solving
              complex problems and building systems that make a real impact.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Professional Affiliations
              </h3>
              <div className="flex flex-wrap gap-3">
                {affiliations.map((affiliation) => (
                  <span
                    key={affiliation}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                  >
                    {affiliation}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
