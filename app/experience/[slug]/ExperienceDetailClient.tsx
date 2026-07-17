"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Briefcase, Lightbulb, Target, Rocket, BookOpen, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ExperienceStory {
  overview: string;
  challenge: string;
  approach: string;
  impact: string;
  techDetails: string[];
  learnings: string;
}

interface Experience {
  company: string;
  slug: string;
  role: string;
  location: string;
  period: string;
  logo: string;
  achievements: string[];
  story?: ExperienceStory;
}

interface Props {
  experience: Experience;
}

export default function ExperienceDetailClient({ experience }: Props) {
  const router = useRouter();
  const { story } = experience;

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back
        </button>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12"
      >
        <div className="flex items-start gap-6 mb-8">
          {experience.logo && (
            <div className="relative w-16 h-16 flex-shrink-0 bg-white rounded-lg p-3 border border-border">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                fill
                className="object-contain p-1"
              />
            </div>
          )}
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-2">
              {experience.company}
            </h1>
            <p className="text-lg text-primary font-medium mb-3">{experience.role}</p>
            <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {experience.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {experience.period}
              </span>
            </div>
          </div>
        </div>

        {/* Overview */}
        {story && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-t border-border pt-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Overview</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{story.overview}</p>
            </motion.div>

            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border-t border-border pt-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Target className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">The Challenge</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{story.challenge}</p>
            </motion.div>

            {/* My Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-t border-border pt-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">My Approach</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{story.approach}</p>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-border pt-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Rocket className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Impact</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{story.impact}</p>
            </motion.div>

            {/* Technical Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="border-t border-border pt-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Technical Details</h2>
              </div>
              <ul className="space-y-3 list-disc pl-5 marker:text-primary">
                {story.techDetails.map((detail) => (
                  <li key={detail} className="text-muted-foreground">
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Key Learnings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="border-t border-border pt-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide">Key Learnings</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{story.learnings}</p>
            </motion.div>
          </>
        )}

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-border pt-6"
        >
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">Key Achievements</h2>
          <ul className="space-y-4">
            {experience.achievements.map((achievement, index) => (
              <li key={achievement.slice(0, 50)} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 border border-primary/40 rounded-full flex items-center justify-center text-primary text-xs font-medium">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all experiences
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
