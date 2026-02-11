"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Briefcase, Lightbulb, Target, Rocket, BookOpen, Code } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { workExperience } from "@/lib/data";

export default function ExperienceDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const experience = workExperience.find((exp) => exp.slug === slug);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Experience not found</h1>
          <Link href="/#experience" className="text-primary hover:underline">
            Go back to experiences
          </Link>
        </div>
      </div>
    );
  }

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
            <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded-xl p-3 shadow-lg border border-border">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                fill
                className="object-contain p-1"
              />
            </div>
          )}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              {experience.company}
            </h1>
            <p className="text-xl text-primary font-semibold mb-3">{experience.role}</p>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
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
              className="bg-card rounded-xl p-6 border border-border mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Overview</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{story.overview}</p>
            </motion.div>

            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card rounded-xl p-6 border border-border mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Target className="h-5 w-5 text-orange-500" />
                </div>
                <h2 className="text-xl font-bold text-foreground">The Challenge</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{story.challenge}</p>
            </motion.div>

            {/* My Approach */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card rounded-xl p-6 border border-border mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-blue-500" />
                </div>
                <h2 className="text-xl font-bold text-foreground">My Approach</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{story.approach}</p>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-card rounded-xl p-6 border border-border mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Rocket className="h-5 w-5 text-green-500" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Impact</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{story.impact}</p>
            </motion.div>

            {/* Technical Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-card rounded-xl p-6 border border-border mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <Code className="h-5 w-5 text-purple-500" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Technical Details</h2>
              </div>
              <ul className="space-y-3">
                {story.techDetails.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Key Learnings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-card rounded-xl p-6 border border-border mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-yellow-500" />
                </div>
                <h2 className="text-xl font-bold text-foreground">Key Learnings</h2>
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
          className="bg-card rounded-xl p-6 border border-border"
        >
          <h2 className="text-xl font-bold text-foreground mb-4">Key Achievements</h2>
          <ul className="space-y-4">
            {experience.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </main>
  );
}
