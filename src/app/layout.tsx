import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";

import MainLayout from "@/layout/main-layout";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import Providers from "@/components/providers";
import StructuredData from "@/components/structured-data";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import { classNames } from "@/utility/classNames";
import "@/styles/globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.headerTitle}`,
  },
  description: siteMetadata.description,
  authors: [{ name: siteMetadata.author }],
  creator: siteMetadata.author,
  openGraph: {
    type: "website",
    locale: siteMetadata.locale,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: siteMetadata.siteName,
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [`${siteMetadata.siteUrl}${siteMetadata.twitterImage}`],
    creator: "@Vaishna30943894",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: siteMetadata.googleSiteVerification,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  category: "Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={classNames(
          "bg-background text-zinc-950 antialiased selection:bg-accent selection:text-background",
          montserrat.className,
        )}
        suppressHydrationWarning
      >
        <Providers>
          <MainLayout>
            <CursorTrailCanvas className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
            {children}
          </MainLayout>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
