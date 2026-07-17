"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Users2 } from "lucide-react";
import { competitions, conferences } from "@/lib/data";

export default function Beyond() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="beyond"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3 text-center">Beyond the Classroom</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-12 text-center">
            Competitions & Conferences
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  Competitions
                </h3>
              </div>
              <div className="space-y-4">
                {competitions.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="border border-border rounded-lg p-6 hover:border-primary/60 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {item.name}
                      </h4>
                      <span className="flex-shrink-0 text-xs font-semibold text-primary border border-primary/40 rounded-full px-2.5 py-1">
                        {item.placement}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.period} &middot; {item.teamSize}-person team
                    </p>
                    <ul className="space-y-2 list-disc pl-5 marker:text-primary">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Users2 className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                  Conferences
                </h3>
              </div>
              <div className="space-y-4">
                {conferences.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="border border-border rounded-lg p-6 hover:border-primary/60 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-foreground">
                        {item.name}
                      </h4>
                      {item.status === "upcoming" && (
                        <span className="flex-shrink-0 text-xs font-semibold text-primary border border-primary/40 rounded-full px-2.5 py-1">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {item.period}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
