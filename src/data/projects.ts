import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Near Blocks",
    href: "/projects",
    tags: ["Next.js", "Zustand", "Node.js", "Blockchain"],
    image: {
      LIGHT: "/images/projects/nearblocks1.png",
      DARK: "/images/projects/nearblocks2.png",
    },
  },
  {
    index: 1,
    title: "Ferry Booking",
    href: "/projects",
    tags: ["React Native", "TypeScript", "Zustand", "Supabase"],
    image: {
      LIGHT: "/images/projects/ferry1.png",
      DARK: "/images/projects/ferry2.png",
    },
  },
  {
    index: 2,
    title: "Voltron",
    href: "/projects",
    tags: ["React Native", "TypeScript", "Node.js", "EV Charging"],
    image: {
      LIGHT: "/images/projects/project-voltron.png",
      DARK: "/images/projects/project-voltron.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Near Blocks",
    favicon: "/images/projects/logos/project.svg",
    imageUrl: [
      "/images/projects/nearblocks1.png",
      "/images/projects/nearblocks2.png",
    ],
    description:
      "Developed the frontend of a blockchain explorer application, NearBlocks, utilizing the latest Next.js App Router for optimized performance and modern features. Implemented state management using Zustand, ensuring efficient and responsive data handling across the application. Collaborated closely with backend developers, who utilized Node.js for building robust APIs, to deliver seamless user experiences and real-time blockchain data visualization.",
    sourceCodeHref: "#",
    liveWebsiteHref: "https://lite.nearblocks.io/",
  },
  {
    name: "Ferry Booking",
    favicon: "/images/projects/logos/project.svg",
    imageUrl: ["/images/projects/ferry1.png", "/images/projects/ferry2.png"],
    description:
      "Designed and developed a ferry booking application using React Native, TypeScript, and Zustand for efficient state management. Worked on both frontend and backend, including Supabase database design, API integration, and end-to-end booking flow. Utilized modern tools like Cursor AI, Rork AI, and Loveable.dev to boost development speed and code quality.",
    sourceCodeHref: "#",
    liveWebsiteHref: "https://crystalhotels.mv/",
  },
  {
    name: "Voltron",
    favicon: "/images/projects/logos/project.svg",
    imageUrl: [
      "/images/projects/project-voltron.png",
      "/images/projects/project-voltron.png",
    ],
    description:
      "Developed and maintained the frontend of the Voltron EV Charging mobile app using React Native and TypeScript, enabling users across Indonesia to easily locate and control EV charging stations. Implemented key features such as real-time charging session tracking, payments, and dynamic station search to improve user experience and engagement. Collaborated with backend (Node.js) team to consume APIs and ensure smooth user interactions.",
    sourceCodeHref: "#",
    liveWebsiteHref:
      "https://play.google.com/store/apps/details?id=id.voltron&pcampaignid=web_share",
  },
  {
    name: "Brickar",
    favicon: "/images/projects/logos/project.svg",
    imageUrl: [
      "/images/projects/project-brickar.png",
      "/images/projects/project-brickar.png",
    ],
    description:
      "Currently developing the admin panel for a construction industry mobile application, employing React.js and Redux Toolkit to create a seamless and intuitive user interface. Implementing APIs to enhance functionality and connectivity within the application. Utilizing Swagger for API documentation, ensuring clear communication and integration for efficient development processes.",
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "FIES Prize Checker App",
    favicon: "/images/projects/logos/project.svg",
    imageUrl: [
      "/images/projects/prize-chker.jpg",
      "/images/projects/prize-chker.jpg",
    ],
    description:
      "Developed a retail barcode price checker app using React Native, enabling instant product price lookup in supermarkets. Integrated barcode scanning and consumed company-provided REST APIs for real-time pricing data. Optimized UI and performance for continuous in-store usage in high-traffic retail environments.",
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "Lucky Draw",
    favicon: "/images/projects/logos/project.svg",
    imageUrl: [
      "/images/projects/luckydraw.jpg",
      "/images/projects/luckydraw.jpg",
    ],
    description:
      "Built an end-to-end Lucky Draw web application using React.js and Supabase, including Admin and User modules. Implemented authentication, token-based participation, and automated winner selection. Developed admin features for managing draws, promotions, ads, and users with secure backend integration.",
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "ECommerce Website and CPanel",
    favicon: "/images/projects/logos/project.svg",
    imageUrl: [
      "/images/projects/project-ecommerce.png",
      "/images/projects/project-ecommerce.png",
    ],
    description:
      "Engineered a visually appealing e-commerce website utilizing React, Node.js, Redux Toolkit, Material UI, and Tailwind CSS for an enhanced online shopping experience. Implemented an intuitive C-panel, enabling seamless management of jewelry inventory, B2B-B2C orders, statistics, and a content management system (CMS). Contributed actively to daily standups, sprint planning, retrospectives, and task estimation, fostering a collaborative and agile project environment.",
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "GOPETZ - Mobile Application",
    favicon: "/images/projects/logos/project.svg",
    imageUrl: ["/images/projects/gopetz.jpg", "/images/projects/gopetz.jpg"],
    description:
      "Led the development of the backend for 'Goptez,' a dynamic mobile application designed for pet sales. Utilized Node.js to architect and implement a scalable and efficient backend. Collaborated with the mobile app development team to integrate essential features and functionalities. Employed best practices in database management to handle pet listings, user profiles, and transactions, ensuring data integrity and optimal performance.",
    sourceCodeHref: "#",
    liveWebsiteHref: "#",
  },
  {
    name: "TSO CHAMPIONS / TSO BRIARGROVE",
    favicon: "/images/projects/logos/project.svg",
    imageUrl: [
      "/images/projects/project-champions.png",
      "/images/projects/project-briargrove.png",
    ],
    description:
      "Designed and developed a visually appealing front-end for a website project for an eye hospital. Collaborated with a team to create an intuitive cPanel interface for easy management and navigation. Implemented modern web development technologies such as HTML, CSS, and JavaScript. Worked closely with the back-end team to integrate front-end design with necessary functionalities. Completed the project within the given timeframe, meeting client requirements.",
    sourceCodeHref: "#",
    liveWebsiteHref: "https://eveloungebriargrove.com/",
  },
  {
    name: "Zycaz - ECommerce (Personal)",
    favicon: "/images/projects/logos/project.svg",
    imageUrl: ["/images/projects/zycaz.png", "/images/projects/zycaz.png"],
    description:
      "Implemented all the necessary e-commerce functionalities like product listing, cart, orders, etc. Payment gateways integrated: PayPal. Technologies used: Node.js, Express.js, MongoDB and EJS, Bootstrap, Nginx, EC2.",
    sourceCodeHref: "https://github.com/vyshnay-v/zycaz",
    liveWebsiteHref: "https://zycaz.shop",
  },
];
