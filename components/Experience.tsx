"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { workExperience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3 text-center">Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4 text-center">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
            Each role links to the full story: the problem I walked into, what I built, and what shipped.
          </p>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <Link href={`/experience/${job.slug}`} className="block group">
                  <div className="border border-border rounded-lg p-6 sm:p-8 hover:border-primary/60 transition-colors cursor-pointer">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                      <div className="flex items-start gap-4 mb-4 sm:mb-0">
                        <div className="relative w-14 h-14 flex-shrink-0 bg-white rounded-md p-2 border border-border">
                          <Image
                            src={job.logo}
                            alt={`${job.company} logo`}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <div>
                          <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                            {job.company}
                          </h3>
                          <p className="text-base text-muted-foreground font-medium mb-2">
                            {job.role}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {job.period}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6 list-disc pl-5 marker:text-primary">
                      {job.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className="text-muted-foreground">
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all text-sm">
                      <span>Read the full story</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
