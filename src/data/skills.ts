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
} from "react-icons/si";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages - Keep existing SVG imports where available
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ReduxSvg from "@/public/icons/redux.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "JavaScript",
        icon: JavascriptSvg,
      },
      {
        name: "TypeScript",
        icon: TypescriptSvg,
      },
      {
        name: "C",
        icon: SiCss3, // Placeholder - using CSS icon
      },
    ],
  },
  {
    sectionName: "Frameworks and Libraries",
    skills: [
      {
        name: "React.js",
        icon: ReactjsSvg,
      },
      {
        name: "React Native",
        icon: SiReact,
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
      },
      {
        name: "Node.js",
        icon: NodejsSvg,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
      {
        name: "Redux Toolkit",
        icon: ReduxSvg,
      },
      {
        name: "Zustand",
        icon: SiReact,
      },
    ],
  },
  {
    sectionName: "State Management",
    skills: [
      {
        name: "Zustand",
        icon: SiReact,
      },
      {
        name: "Redux Toolkit",
        icon: ReduxSvg,
      },
      {
        name: "Context API",
        icon: SiReact,
      },
      {
        name: "React Query",
        icon: SiReact,
      },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "Firestore",
        icon: SiFirebase,
      },
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
      {
        name: "Supabase",
        icon: SiFirebase,
      },
    ],
  },
  {
    sectionName: "APIs & Backend",
    skills: [
      {
        name: "REST API",
        icon: SiExpress,
      },
      {
        name: "WebSockets",
        icon: SiSocketdotio,
      },
      {
        name: "JWT",
        icon: SiExpress, // Placeholder
      },
      {
        name: "OAuth",
        icon: SiExpress, // Placeholder
      },
    ],
  },
  {
    sectionName: "UI Libraries & Styling",
    skills: [
      {
        name: "Tailwind CSS",
        icon: TailwindcssSvg,
      },
      {
        name: "Material UI",
        icon: MuiSvg,
      },
      {
        name: "Shadcn/UI",
        icon: SiReact, // Placeholder
      },
      {
        name: "Styled Components",
        icon: SiReact, // Placeholder
      },
      {
        name: "Chakra UI",
        icon: SiReact, // Placeholder
      },
    ],
  },
  {
    sectionName: "Tools",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "GitHub",
        icon: GitSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Swagger",
        icon: SiPostman,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
      {
        name: "Jira",
        icon: SiJira,
      },
    ],
  },
  {
    sectionName: "Cloud & Deployment",
    skills: [
      {
        name: "Vercel",
        icon: SiVercel,
      },
      {
        name: "Netlify",
        icon: SiNetlify,
      },
      {
        name: "Firebase",
        icon: SiFirebase,
      },
      {
        name: "Supabase",
        icon: SiFirebase,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "GitHub Actions",
        icon: SiGithub,
      },
    ],
  },
];
