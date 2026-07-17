"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen } from "lucide-react";
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
          <p className="eyebrow mb-3">Education</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-10">
            {education.school}
          </h2>

          <div className="border-t border-border pt-10">
            <div className="flex items-start gap-4 mb-10">
              <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-lg text-foreground font-semibold mb-1">
                  {education.degree}
                </p>
                <p className="text-muted-foreground mb-2">
                  {education.location} • Expected {education.expectedGraduation}
                </p>
                <p className="text-xl font-semibold text-foreground">
                  GPA: {education.gpa}
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Award className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Honors & Awards
                  </h4>
                </div>
                <ul className="space-y-2 list-disc pl-5 marker:text-primary">
                  {education.honors.map((honor) => (
                    <li key={honor} className="text-muted-foreground">
                      {honor}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Currently Taking · {education.currentTerm}
                  </h4>
                </div>
                <ul className="space-y-2 list-disc pl-5 marker:text-primary">
                  {education.coursesInProgress.map((course) => (
                    <li key={course} className="text-muted-foreground">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
