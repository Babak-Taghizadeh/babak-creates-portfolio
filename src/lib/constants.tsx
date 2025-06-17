import {
  Layout,
  Database,
  Server,
  Palette,
  Zap,
  Smile,
  Star,
  Sparkles,
  Code2,
} from "lucide-react";
import { IProject } from "./types";
import { TBlogCategory, TBlogSortOption } from "@/lib/types";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    icon: <Layout size={20} />,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query (with SSR)",
      "Redux Toolkit",
      "SASS",
      "ShadCN UI",
      "Framer Motion",
      "ApexCharts",
      "React Hook Form",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server size={20} />,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Drizzle ORM",
      "CMS Architecture",
      "Authentication (JWT, Sessions)",
    ],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    skills: ["PostgreSQL", "MongoDB", "Drizzle ORM", "Mongoose"],
  },
  {
    title: "UI/UX Design",
    icon: <Palette size={20} />,
    skills: [
      "Figma",
      "Responsive Layout Planning",
      "Mobile-First Design",
      "Design Systems",
      "Accessibility Principles (a11y)",
      "Basic UX Writing Awareness",
    ],
  },
  {
    title: "Tools & Practices",
    icon: <Zap size={20} />,
    skills: [
      "Git & GitHub",
      "CI/CD Pipelines",
      "Vitest / Jest",
      "React Testing Library",
      "Docker (Basics)",
      "Performance Profiling",
      "Agile & Scrum",
      "Code Reviews",
    ],
  },
  {
    title: "Soft Skills",
    icon: <Smile size={20} />,
    skills: [
      "Team Collaboration (Remote & On-Site)",
      "Mentorship",
      "Problem Solving",
      "Time Management",
      "Attention to Detail",
      "Requirement Analysis",
    ],
  },
];

const NAVIGATION_MENU_ITEMS = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Playlist",
    href: "/playlist",
  },
  {
    label: "Email",
  },
];

const PROJECT_CATEGORY_COLORS = {
  "Front-End": "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400",
  Fullstack:
    "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400",
  Backend:
    "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400",
  Other: "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-400",
};

const PROJECT_CATEGORY_ICONS = {
  "Front-End": <Sparkles className="h-4 w-4" />,
  Fullstack: <Code2 className="h-4 w-4" />,
  Backend: <Star className="h-4 w-4" />,
  Other: <Star className="h-4 w-4" />,
};

const PROJECTS: IProject[] = [
  {
    title: "Sleep Clinic Platform (Dr. Vida Imani)",
    description:
      "A full-stack healthcare platform for a sleep clinic, built to enhance patient experience and clinic operations. Focused on performance, reusability, and secure infrastructure.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Drizzle ORM",
      "ShadCN UI",
      "Next Auth",
      "motion",
    ],
    githubUrl: "",
    liveUrl: "",
    category: "Fullstack",
    features: [
      "Streamlined content operations with a custom CMS, reducing publishing time by 55%",
      "Delivered a secure patient dashboard with load times under 200ms for a seamless UX",
      "Achieved 95+ Lighthouse scores across marketing pages through performance tuning",
      "Built a scalable component system ensuring 98% visual consistency across the app",
    ],
  },
  {
    title: "Solar Plant Monitoring System (Aral Studio)",
    description:
      "An enterprise-level monitoring platform migrated to React, focused on real-time performance, global collaboration, and massive data visualization.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "React-Query",
      "ApexCharts",
      "React Hook Form",
      "SASS",
      "React-i18next",
      "Yup",
    ],
    githubUrl: "",
    liveUrl: "",
    category: "Front-End",
    features: [
      "Reduced platform load time from 25s to under 3s by refactoring and optimizing state management",
      "Enabled real-time rendering of over 200,000 data points using performant charting techniques",
      "Facilitated seamless cross-timezone collaboration through modular architecture and multilingual support",
    ],
  },
  {
    title: "Hospitality Dashboard (Platin Studio)",
    description:
      "A management dashboard for a hospitality business with inventory tracking, team coordination, and analytics tools.",
    technologies: [
      "React.js",
      "TypeScript",
      "Axios",
      "Tailwind CSS",
      "React Hook Form",
      "Yup",
      "recharts",
    ],
    githubUrl: "",
    liveUrl: "",
    category: "Front-End",
    features: [
      "Enhanced team productivity by 30% through real-time staff and inventory tracking tools",
      "Improved form performance by 40% with optimized validation and rendering techniques",
      "Boosted accessibility to 90+ scores via semantic HTML and responsive design improvements",
    ],
  },
];

const BLOG_CATEGORIES: TBlogCategory[] = [
  "Technical",
  "Career",
  "Personal",
  "Industry",
];

const BLOG_SORT_OPTIONS: { value: TBlogSortOption; label: string }[] = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
];

export {
  NAVIGATION_MENU_ITEMS,
  SKILL_CATEGORIES,
  PROJECT_CATEGORY_COLORS,
  PROJECT_CATEGORY_ICONS,
  PROJECTS,
  BLOG_CATEGORIES,
  BLOG_SORT_OPTIONS,
};
