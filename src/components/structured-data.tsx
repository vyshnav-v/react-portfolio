import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteMetadata.author,
    jobTitle: "Web and App Developer",
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    email: siteMetadata.email,
    telephone: siteMetadata.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kochi",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    sameAs: [
      siteMetadata.github,
      siteMetadata.linkedin,
      siteMetadata.twitter,
      siteMetadata.instagram,
      siteMetadata.facebook,
    ].filter(Boolean),
    knowsAbout: [
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Mobile App Development",
      "Full Stack Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteMetadata.siteName,
    url: siteMetadata.siteUrl,
    description: siteMetadata.description,
    author: {
      "@type": "Person",
      name: siteMetadata.author,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteMetadata.siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${siteMetadata.siteUrl}/#portfolio`,
    name: `${siteMetadata.author} Portfolio`,
    description: siteMetadata.description,
    creator: {
      "@type": "Person",
      name: siteMetadata.author,
    },
    url: siteMetadata.siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />
    </>
  );
}
