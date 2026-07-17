"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Layers, Wrench } from "lucide-react";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: skills.languages,
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: skills.frameworks,
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: skills.tools,
    },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3 text-center">Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-12 text-center">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-2 mb-5">
                  <category.icon className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + i * 0.05,
                      }}
                      className="px-3 py-1.5 border border-border text-secondary-foreground rounded-md text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
