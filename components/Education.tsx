"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            Education
          </h2>

          <div className="bg-background rounded-lg p-8 shadow-sm border border-border">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {education.school}
                </h3>
                <p className="text-lg text-primary font-semibold mb-1">
                  {education.degree}
                </p>
                <p className="text-muted-foreground mb-2">
                  {education.location} • Expected {education.expectedGraduation}
                </p>
                <p className="text-xl font-bold text-foreground">
                  GPA: {education.gpa}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">
                  Honors & Awards
                </h4>
              </div>
              <ul className="space-y-2">
                {education.honors.map((honor) => (
                  <li
                    key={honor}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5">•</span>
                    <span>{honor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
