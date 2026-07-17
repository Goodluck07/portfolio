"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-10">
            Who I am
          </h2>

          <div className="border-t border-border pt-10">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="relative w-40 h-40 rounded-md overflow-hidden border border-border">
                  <Image
                    src="/images/profile.png"
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I&apos;m a senior Computer Science major at Alabama A&M
                  University, graduating May 2027 with a 4.0 GPA across
                  coursework in operating systems, database systems, computer
                  organization, and linear algebra. Most of what I know about
                  building real software came from three internships:{" "}
                  <span className="text-foreground font-semibold">
                    Splunk (Cisco)
                  </span>
                  , where I shipped a Kubernetes-based Slack threading feature
                  now running in production;{" "}
                  <span className="text-foreground font-semibold">
                    Activision
                  </span>
                  , where I built NPC behavior and resource-economy systems in
                  Unity; and{" "}
                  <span className="text-foreground font-semibold">
                    Innovation Portal
                  </span>
                  , where I built a chess coaching tool that placed 2nd at the
                  2026 App Build & Pitch Competition.
                </p>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Outside of internships, I co-founded{" "}
                  <span className="text-foreground font-semibold">STAK</span>,
                  a fintech app now at 127 beta users, and led a five-person
                  team to 1st place at Sandia National Labs&apos; Tracer Fire
                  CTF, working through reverse engineering, cryptography, and
                  forensics challenges under a time limit. I gravitate toward
                  problems where the constraint is real: a login screen
                  killing user retention, a Slack channel too noisy to read,
                  an advisor who only has ten minutes per student. I&apos;d
                  rather ship something narrow that works than something broad
                  that doesn&apos;t.
                </p>

                <div className="mt-8">
                  <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                    Affiliations
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {affiliations.map((affiliation) => (
                      <span
                        key={affiliation}
                        className="px-3 py-1.5 border border-border text-secondary-foreground rounded-md text-sm"
                      >
                        {affiliation}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
