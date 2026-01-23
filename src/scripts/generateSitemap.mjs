import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";
import { siteMetadata } from "../data/siteMetaData.mjs";

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig(
    "../../prettier.config.js",
  );

  // Get pages from App Router (src/app)
  const appPages = await globby([
    "src/app/**/page.tsx",
    "src/app/**/route.ts",
    "!src/app/**/layout.tsx",
    "!src/app/**/template.tsx",
    "!src/app/**/loading.tsx",
    "!src/app/**/error.tsx",
    "!src/app/**/not-found.tsx",
  ]);

  // Also check for legacy Pages Router (if any remain)
  const legacyPages = await globby([
    "src/pages/**/*.tsx",
    "!src/pages/_*.tsx",
    "!src/pages/api",
    "!src/pages/404.tsx",
  ]);

  const allPages = [...appPages, ...legacyPages];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${allPages
      .map((page) => {
        let path = page
          .replace(".tsx", "")
          .replace(".ts", "");

        // Handle App Router paths
        if (path.startsWith("src/app/")) {
          path = path
            .replace("src/app/", "/")
            .replace("/page", "")
            .replace("/route", "");
        }
        // Handle Pages Router paths
        else if (path.startsWith("src/pages/")) {
          path = path
            .replace("src/pages/", "/")
            .replace("/index", "");
        }

        // exclude dynamic routes
        if (path.includes("[") || path.includes("]")) {
          return "";
        }

        // Ensure path starts with /
        if (!path.startsWith("/")) {
          path = "/" + path;
        }

        return `<url>
                            <loc>${siteMetadata.siteUrl}${path}</loc>
                        </url>
                    `;
      })
      .filter(Boolean)
      .join("")}
        </urlset>
  `;

  const formatted = await prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  writeFileSync("public/sitemap.xml", formatted);
  writeFileSync("public/robots.txt", robotsTxt);

  console.log(
    "Successfully generated\n-> Sitemap at public/sitemap.xml\n-> Robots.txt at public/robots.txt",
  );
}

const robotsTxt = `User-agent: *
Allow: /
Sitemap: ${siteMetadata.siteUrl}/sitemap.xml`;

generateSitemap();
