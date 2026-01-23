import {
  SiExpress,
  SiSocketdotio,
  SiNextdotjs,
  SiReact,
  SiMysql,
  SiFirebase,
  SiCss3,
  SiPostman,
  SiFigma,
  SiJira,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiVite,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiC,
  SiJsonwebtokens,
  SiAuth0,
  SiStyledcomponents,
  SiChakraui,
  SiSwagger,
  SiReactquery,
  SiSupabase,
  SiAmazon,
  SiHostinger,
  SiGooglecloud,
  SiRailway,
  SiDigitalocean,
  SiApollographql,
  SiTrpc,
  SiSass,
  SiBootstrap,
  SiAntdesign,
  SiReactbootstrap,
  SiFramer,
  SiJest,
  SiVitest,
  SiWebpack,
  SiBabel,
  SiEsbuild,
  SiNpm,
  SiYarn,
  SiPnpm,
  SiGitlab,
  SiNginx,
  SiApache,
  SiPm2,
  SiNodemon,
  SiEslint,
  SiPrettier,
  SiCommitlint,
  SiZod,
  SiStripe,
  SiPaypal,
  SiSendgrid,
  SiTwilio,
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";
import { SKILL_COLORS } from "./skillColors";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: SKILL_COLORS.HTML,
      },
      {
        name: "CSS",
        icon: SiCss3,
        color: SKILL_COLORS.CSS,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: SKILL_COLORS.JavaScript,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: SKILL_COLORS.TypeScript,
      },
      {
        name: "C",
        icon: SiC,
        color: SKILL_COLORS.C,
      },
    ],
  },
  {
    sectionName: "Frameworks and Libraries",
    skills: [
      {
        name: "React.js",
        icon: SiReact,
        color: SKILL_COLORS["React.js"],
      },
      {
        name: "React Native",
        icon: SiReact, // No specific icon available, using React icon
        color: SKILL_COLORS["React Native"],
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: SKILL_COLORS["Next.js"],
      },
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: SKILL_COLORS["Node.js"],
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: SKILL_COLORS["Express.js"],
      },
      {
        name: "Vite",
        icon: SiVite,
        color: SKILL_COLORS.Vite,
      },
    ],
  },
  {
    sectionName: "State Management",
    skills: [
      {
        name: "Zustand",
        icon: SiReact,
        color: SKILL_COLORS.Zustand,
      },
      {
        name: "Redux Toolkit",
        icon: SiRedux,
        color: SKILL_COLORS["Redux Toolkit"],
      },
      {
        name: "Context API",
        icon: SiReact,
        color: SKILL_COLORS["Context API"],
      },
      {
        name: "React Query",
        icon: SiReactquery,
        color: SKILL_COLORS["React Query"],
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: SKILL_COLORS.MongoDB,
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: SKILL_COLORS.MySQL,
      },
      {
        name: "Firestore",
        icon: SiFirebase,
        color: SKILL_COLORS.Firestore,
      },
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: SKILL_COLORS.PostgreSQL,
      },
    ],
  },
  {
    sectionName: "APIs & Backend",
    skills: [
      {
        name: "REST API",
        icon: SiExpress,
        color: SKILL_COLORS["REST API"],
      },
      {
        name: "WebSockets",
        icon: SiSocketdotio,
        color: SKILL_COLORS.WebSockets,
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        color: SKILL_COLORS.JWT,
      },
      {
        name: "OAuth",
        icon: SiAuth0, // Using Auth0 as OAuth provider icon
        color: SKILL_COLORS.OAuth,
      },
      {
        name: "GraphQL",
        icon: SiApollographql,
        color: SKILL_COLORS.GraphQL,
      },
      {
        name: "tRPC",
        icon: SiTrpc,
        color: SKILL_COLORS.tRPC,
      },
    ],
  },
  {
    sectionName: "UI Libraries & Styling",
    skills: [
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: SKILL_COLORS["Tailwind CSS"],
      },
      {
        name: "Material UI",
        icon: SiMui,
        color: SKILL_COLORS["Material UI"],
      },
      {
        name: "Shadcn/UI",
        icon: SiReact, // No specific icon available, using React icon
        color: SKILL_COLORS["Shadcn/UI"],
      },
      {
        name: "Styled Components",
        icon: SiStyledcomponents,
        color: SKILL_COLORS["Styled Components"],
      },
      {
        name: "Chakra UI",
        icon: SiChakraui,
        color: SKILL_COLORS["Chakra UI"],
      },
      {
        name: "Sass/SCSS",
        icon: SiSass,
        color: SKILL_COLORS.Sass,
      },
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: SKILL_COLORS.Bootstrap,
      },
      {
        name: "Ant Design",
        icon: SiAntdesign,
        color: SKILL_COLORS["Ant Design"],
      },
      {
        name: "React Bootstrap",
        icon: SiReactbootstrap,
        color: SKILL_COLORS["React Bootstrap"],
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: SKILL_COLORS["Framer Motion"],
      },
    ],
  },
  {
    sectionName: "Tools",
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: SKILL_COLORS.Git,
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: SKILL_COLORS.GitHub,
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: SKILL_COLORS.Postman,
      },
      {
        name: "Swagger",
        icon: SiSwagger,
        color: SKILL_COLORS.Swagger,
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: SKILL_COLORS.Figma,
      },
      {
        name: "Jira",
        icon: SiJira,
        color: SKILL_COLORS.Jira,
      },
    ],
  },
  {
    sectionName: "Testing & Quality",
    skills: [
      {
        name: "Jest",
        icon: SiJest,
        color: SKILL_COLORS.Jest,
      },
      {
        name: "Vitest",
        icon: SiVitest,
        color: SKILL_COLORS.Vitest,
      },
    ],
  },
  {
    sectionName: "Build Tools & Bundlers",
    skills: [
      {
        name: "Webpack",
        icon: SiWebpack,
        color: SKILL_COLORS.Webpack,
      },
      {
        name: "Babel",
        icon: SiBabel,
        color: SKILL_COLORS.Babel,
      },
      {
        name: "ESBuild",
        icon: SiEsbuild,
        color: SKILL_COLORS.ESBuild,
      },
    ],
  },
  {
    sectionName: "Package Managers",
    skills: [
      {
        name: "NPM",
        icon: SiNpm,
        color: SKILL_COLORS.NPM,
      },
      {
        name: "Yarn",
        icon: SiYarn,
        color: SKILL_COLORS.Yarn,
      },
      {
        name: "PNPM",
        icon: SiPnpm,
        color: SKILL_COLORS.PNPM,
      },
    ],
  },
  {
    sectionName: "DevOps & CI/CD",
    skills: [
      {
        name: "GitHub Actions",
        icon: SiGithub,
        color: SKILL_COLORS["GitHub Actions"],
      },
      {
        name: "GitLab CI",
        icon: SiGitlab,
        color: SKILL_COLORS["GitLab CI"],
      },
    ],
  },
  {
    sectionName: "Server & Infrastructure",
    skills: [
      {
        name: "Nginx",
        icon: SiNginx,
        color: SKILL_COLORS.Nginx,
      },
      {
        name: "Apache",
        icon: SiApache,
        color: SKILL_COLORS.Apache,
      },
      {
        name: "PM2",
        icon: SiPm2,
        color: SKILL_COLORS.PM2,
      },
      {
        name: "Nodemon",
        icon: SiNodemon,
        color: SKILL_COLORS.Nodemon,
      },
    ],
  },
  {
    sectionName: "Code Quality & Linting",
    skills: [
      {
        name: "ESLint",
        icon: SiEslint,
        color: SKILL_COLORS.ESLint,
      },
      {
        name: "Prettier",
        icon: SiPrettier,
        color: SKILL_COLORS.Prettier,
      },
      {
        name: "Commitlint",
        icon: SiCommitlint,
        color: SKILL_COLORS.Commitlint,
      },
    ],
  },
  {
    sectionName: "Other Tools & Services",
    skills: [
      {
        name: "Zod",
        icon: SiZod,
        color: SKILL_COLORS.Zod,
      },
      {
        name: "Stripe",
        icon: SiStripe,
        color: SKILL_COLORS.Stripe,
      },
      {
        name: "PayPal",
        icon: SiPaypal,
        color: SKILL_COLORS.PayPal,
      },
      {
        name: "SendGrid",
        icon: SiSendgrid,
        color: SKILL_COLORS.SendGrid,
      },
      {
        name: "Twilio",
        icon: SiTwilio,
        color: SKILL_COLORS.Twilio,
      },
    ],
  },
  {
    sectionName: "Cloud & Deployment",
    skills: [
      {
        name: "Vercel",
        icon: SiVercel,
        color: SKILL_COLORS.Vercel,
      },
      {
        name: "Netlify",
        icon: SiNetlify,
        color: SKILL_COLORS.Netlify,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: SKILL_COLORS.Firebase,
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: SKILL_COLORS.Supabase,
      },
      {
        name: "Docker",
        icon: SiDocker,
        color: SKILL_COLORS.Docker,
      },
      {
        name: "AWS",
        icon: SiAmazon,
        color: SKILL_COLORS.AWS,
      },
      {
        name: "Hostinger",
        icon: SiHostinger,
        color: SKILL_COLORS.Hostinger,
      },
      {
        name: "Google Cloud",
        icon: SiGooglecloud,
        color: SKILL_COLORS["Google Cloud"],
      },
      {
        name: "Railway",
        icon: SiRailway,
        color: SKILL_COLORS.Railway,
      },
      {
        name: "DigitalOcean",
        icon: SiDigitalocean,
        color: SKILL_COLORS.DigitalOcean,
      },
    ],
  },
];
