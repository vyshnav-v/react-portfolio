import type { Metadata } from "next";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const metadata: Metadata = {
  title: "Projects by Vaishnav V - Web and App Developer Portfolio",
  description:
    "Explore a collection of projects by Vaishnav V, a seasoned Web and App Developer. From innovative web applications to mobile apps and responsive interfaces, discover the depth and diversity of my work.",
  alternates: {
    canonical: `${siteMetadata.siteUrl}/projects`,
  },
  openGraph: {
    url: `${siteMetadata.siteUrl}/projects`,
    title: "Discover Projects by Vaishnav V - Web and App Developer",
    description:
      "Explore a showcase of projects crafted by Vaishnav V, a Web and App Developer. Witness the fusion of creativity and technology in web and mobile development.",
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
    "Projects",
    "Vaishnav V Portfolio",
    "Web and App Developer",
    "React Developer",
    "React Native Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Mobile App Developer",
    "Web Development",
    "Mobile Development",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "HTML",
    "CSS",
    "UI/UX",
    "Web Applications",
    "Mobile Applications",
    "Responsive Design",
  ],
};

export default function Projects() {
  return (
    <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
          Projects
        </h1>
        <div className="my-2">
          <span className="text-sm text-muted-foreground">
            Here are some of the projects I&apos;d like to share
          </span>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
          {PROJECTS_CARD.map((card, index) => (
            <ProjectCard key={index} {...card} />
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
          <span className="text-xl font-bold md:text-2xl">
            I am continuously building new projects and expanding my expertise
            in web and mobile development, exploring cutting-edge technologies
            to deliver innovative solutions.
          </span>
          <p className="mt-10 text-base md:text-xl">
            Visit my github to see some of the latest projects{" "}
            <a
              href={`${siteMetadata.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
