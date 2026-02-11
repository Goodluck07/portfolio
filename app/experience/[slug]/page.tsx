import { notFound } from "next/navigation";
import { Metadata } from "next";
import ExperienceDetailClient from "./ExperienceDetailClient";
import { workExperience } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return workExperience.map((exp) => ({
    slug: exp.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experience = workExperience.find((exp) => exp.slug === slug);

  if (!experience) {
    return {
      title: "Experience Not Found",
    };
  }

  return {
    title: `${experience.company} - ${experience.role} | Goodluck Badewole`,
    description: experience.story?.overview || experience.achievements[0],
  };
}

export default async function ExperienceDetail({ params }: Props) {
  const { slug } = await params;
  const experience = workExperience.find((exp) => exp.slug === slug);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetailClient experience={experience} />;
}
