import type { Metadata } from "next";

import LandingHero from "@/components/landing-hero";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectShowcase from "@/components/projects/project-showcase";
import { PROJECT_SHOWCASE } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const metadata: Metadata = {
  title: "Vaishnav V | Web and App Developer",
  description:
    "Explore the professional portfolio of Vaishnav V, a skilled Web and App Developer with 5+ years of hands-on experience. Discover innovative projects, expertise in React.js, React Native, Next.js, and a passion for creating seamless web and mobile experiences.",
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  openGraph: {
    url: siteMetadata.siteUrl,
    title: "Vaishnav V - Web and App Developer",
    description:
      "Dive into the world of web and mobile development with Vaishnav V. Discover a Web and App Developer with 5+ years of expertise, showcasing cutting-edge projects and a commitment to crafting exceptional user interfaces for web and mobile platforms.",
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
        alt: "Vaishnav V - Portfolio Image",
      },
    ],
    siteName: siteMetadata.siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  keywords: [
    "React Developer",
    "React Native Developer",
    "Next.js Developer",
    "Web and App Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "UI/UX",
    "React.js",
    "React Native",
    "Frontend Development",
    "Web Development",
    "Mobile Development",
    "JavaScript Developer",
    "Responsive Design",
  ],
};

export default function Home() {
  return (
    <>
      <LandingHero />
      <SkillsShowcase />
      <ProjectShowcase projects={PROJECT_SHOWCASE} />
    </>
  );
}
