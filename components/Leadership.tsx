"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy } from "lucide-react";
import { leadership } from "@/lib/data";

export default function Leadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="leadership"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow mb-3 text-center">Leadership</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-12 text-center">
            Leadership & Activities
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="border border-border rounded-lg p-6 hover:border-primary/60 transition-colors"
              >
                <div className="flex items-start gap-3 mb-4">
                  {item.organization.includes("CTF") ? (
                    <Trophy className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  ) : (
                    <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {item.role}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {item.organization}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.period}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 list-disc pl-5 marker:text-primary">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
