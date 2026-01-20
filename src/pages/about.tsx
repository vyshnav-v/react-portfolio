import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Vaishnav V | Web and App Developer"
        description="Learn more about Vaishnav V, a dedicated Web and App Developer with 5+ years of experience. Discover the journey, skills, and passion that drive me to create innovative and user-friendly web and mobile solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title: "Learn About Vaishnav V - Web and App Developer",
          description:
            "Dive into the story of Vaishnav V, a Web and App Developer specializing in React.js, React Native, and Next.js. Uncover the experiences, skills, and passion that fuel a commitment to delivering exceptional web and mobile solutions.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Vaishnav V - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Web and App Developer portfolio, React Developer, React Native Developer, Next.js Developer, Full Stack Developer, Frontend Developer, Mobile App Developer, JavaScript, TypeScript, Node.js, Professional Journey, Skills, Passion for Web and Mobile Development",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
