import type { Metadata } from "next";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
  alternates: {
    canonical: `${siteMetadata.siteUrl}/404`,
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[700px] items-center justify-center md:max-h-[600px]">
      <div className="-mt-40 flex items-center gap-4 py-8 text-2xl font-bold text-accent md:text-5xl">
        <h1>404</h1>
        <span>:</span>
        <span>Page not found</span>
      </div>
    </div>
  );
}
