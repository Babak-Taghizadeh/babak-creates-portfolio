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
      "React Query",
      "Redux Toolkit",
      "SASS",
      "ShadCN UI",
      "Framer Motion",
      "Apex Charts",
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
      "Accessibility Principles (a11y)",
      "Basic UX Writing Awareness",
    ],
  },
  {
    title: "Tools & Practices",
    icon: <Zap size={20} />,
    skills: [
      "Git & GitHub",
      "CI/CD",
      "Docker (Basics)",
      "Jest",
      "Performance Metrics Analysis",
      "ESLint & Prettier",
      "Agile & Scrum",
      "React Testing Library",
      "Code Reviews",
      "Responsive Design",
    ],
  },
  {
    title: "Soft Skills",
    icon: <Smile size={20} />,
    skills: [
      "Team Collaboration",
      "Mentoring",
      "Problem Solving",
      "Time Management",
      "Remote Communication",
      "Attention to Detail",
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
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my work and skills, built with cutting-edge technologies.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://your-portfolio.com",
    category: "Front-End",
    features: [
      "Responsive design with modern UI components",
      "Smooth page transitions and animations",
      "Dark mode support",
      "SEO optimized",
    ],
  },
];

const BLOG_CATEGORIES: TBlogCategory[] = [
  "Technical",
  "Career",
  "Tutorials",
  "Personal",
  "Industry",
];

const BLOG_SORT_OPTIONS: { value: TBlogSortOption; label: string }[] = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "popular", label: "Most Popular" },
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
