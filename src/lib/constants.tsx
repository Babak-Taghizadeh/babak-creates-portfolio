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
  Brain,
  BookOpen,
  Shirt,
  Heart,
  Music,
  Film,
  Dumbbell,
  Coffee,
  Monitor,
  Gamepad2,
  Tent,
  Languages,
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
      "JavaScript (ES6+)",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "SASS",
      "i18next",
      "React Query (with SSR)",
      "Redux Toolkit",
      "ShadCN UI",
      "Framer Motion",
      "ApexCharts",
      "React Hook Form",
    ],
  },
  {
    title: "Tools & Practices",
    icon: <Zap size={20} />,
    skills: [
      "Git & GitHub",
      "CI/CD Pipelines",
      "Docker",
      "Nginx",
      "Vitest / Jest",
      "React Testing Library",
      "Vite",
      "Webpack",
      "MSW (Mock Service Worker)",
      "ESLint",
      "Agile & Scrum",
      "Performance Profiling",
      "Code Reviews",
      "Core Web Vitals",
    ],
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
      "Server Side Rendering (SSR)",
      "Zod",
      "Yup",
    ],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    skills: ["PostgreSQL", "MongoDB", "Drizzle ORM", "Mongoose"],
  },
];

const NAVIGATION_MENU_ITEMS = [
  {
    label: "babak-talks",
    href: "/about",
  },
  {
    label: "babak-thinks",
    href: "/blogs",
  },
  {
    label: "babak-vibes",
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
      "Docker",
      "Nginx",
    ],
    githubUrl: "",
    liveUrl: "https://drimanisleepclinic.com/",
    category: "Fullstack",
    features: [
      "Architected a scalable monorepo full-stack platform (Next.js API Routes, PostgreSQL) achieving 50ms API latency and 95% component reusability.",
      "Spearheaded technical and strategic planning with clinic owners, reducing initial MVP scope by 40% for an efficient launch.",
      "Implemented front-end optimizations achieving 97 Performance and 100 SEO Lighthouse scores, directly enhancing the clinic's online presence.",
      "Deployed the application using Docker and Nginx on a VPS, ensuring fast updates, reliable uptime, and robust security.",
      "Designed a reusable UI system with Tailwind, accelerating development by 70% and ensuring 98% design consistency.",
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
      "Spearheaded migration of a legacy Blazor platform to React, decreasing page load times by 40s and enhancing performance by 70%.",
      "Collaborated with backend to optimize data structures, enabling real-time rendering of 150k+ data points for a smoother user experience.",
      "Achieved pixel-perfect, responsive UIs from Figma designs, working closely with the design team for a seamless handoff and implementation.",
      "Mentored colleagues and optimized team workflow by analyzing strengths and delegating tasks, resulting in early sprint finishes.",
      "Reduced rendering times by 40% compared to the old stack by optimizing complex forms with React Hook Form and building a modular component structure.",
      "Facilitated seamless cross-timezone collaboration by working as a translator for team members (Turkish - Persian).",
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
      "Engineered a custom analytics dashboard with recharts, providing real-time insights into inventory and sales data that enabled managers to make strategic decisions. ",
      "Designed and implemented a role-based access control (RBAC) system for the dashboard, ensuring data security and proper access to sensitive financial and staff information.",
      "Collaborated with the backend team to design a RESTful API for seamless data flow, improving data consistency and decreasing API response times by 30% for all user actions.",
      "Established and enforced coding standards across the project using ESLint and Prettier, improving long-term project maintainability and onboarding for new team members.",
      "Implemented a modern, modular state management solution to handle real-time staff and inventory data, significantly improving application responsiveness and user experience.",
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

const EXPERIENCES = [
  {
    title: "Full-Stack Developer",
    company: "Freelance – Dr. Imani Sleep Clinic",
    location: "Remote",
    period: "Apr 2025 – Present",
    description:
      "Led end-to-end development of a full-stack platform, from strategic planning with stakeholders to deployment on a VPS. Architected a scalable monorepo using Next.js and PostgreSQL, achieving 50ms API latency and 95% component reusability. Optimized performance to achieve 97 Lighthouse Performance scores and enhanced SEO for brand visibility. Deployed with Docker and Nginx, ensuring robust security and fast updates.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Zod",
      "Tailwind CSS",
      "Drizzle ORM",
      "Shadcn/UI",
      "next-auth",
      "Docker",
      "Nginx",
    ],
  },
  {
    title: "Lead Front-End Developer",
    company: "Aral Studio",
    location: "Remote",
    period: "Jan 2024 – Apr 2025",
    description:
      "Spearheaded the migration of a legacy platform to React, decreasing page load times by 40s and boosting performance by 70%. Defined a modular design system that accelerated project delivery by 30% and ensured visual consistency. Mentored three junior developers in code quality and architecture, which led to a 40% reduction in bugs and improved team workflows.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "SASS",
      "i18next",
      "React Hook Form",
      "ApexCharts",
    ],
  },
  {
    title: "React Developer",
    company: "Platin Studio",
    location: "On-site",
    period: "Sep 2021 – Dec 2023",
    description:
      "Developed and maintained responsive web applications for a wide range of clients. Collaborated closely with UI/UX designers to translate visual concepts into production-ready interfaces. Improved testing coverage and refactored complex form flows. Gained experience in agile delivery, sprint planning, and improving legacy front-end codebases for performance and maintainability.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "Yup",
      "Vitest",
      "MSW",
    ],
  },
  {
    title: "Front-End Developer",
    company: "IpekDev Co.",
    location: "On-site",
    period: "Oct 2020 – Sep 2021",
    description:
      "Contributed as an early-career developer, translating Figma designs into interactive, production-ready UIs. Worked with modern front-end workflows, developed reusable components, and contributed to peer code reviews. Gained foundational experience in developing accessible, cross-browser compatible applications.",
    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Figma",
      "Git",
      "HTML5",
      "CSS3",
    ],
  },
];

const EDUCATION = [
  {
    degree: "Associate of Science in Computer Science",
    school: "Rezayi Technical Institute",
    location: "Tabriz, Iran",
    period: "2017 - 2019",
    description:
      "Studied programming fundamentals, C++, data structures, and logic design. Active in tech workshops and student-led coding sessions.",
  },
  {
    degree: "High School Diploma in Mathematics and Physics",
    school: "Rezayi High School",
    location: "Tabriz, Iran",
    period: "2014 - 2017",
    description:
      "Specialized in advanced mathematics and theoretical physics as part of Iran's Math-Physics track.",
  },
];

const SKILLS_DATA = [
  {
    Frontend: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 90 },
      { name: "SASS", level: 85 },
      { name: "Redux Toolkit", level: 80 },
      { name: "React Query (SSR)", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "React Hook Form", level: 85 },
    ],
  },
  {
    "Backend & Database": [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "RESTful APIs", level: 80 },
      { name: "Authentication (JWT, Sessions)", level: 80 },
      { name: "CMS Architecture", level: 70 },
      { name: "Drizzle ORM", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    "Tools & Practices": [
      { name: "Git & GitHub", level: 90 },
      { name: "CI/CD Pipelines", level: 80 },
      { name: "Vitest / Jest", level: 80 },
      { name: "React Testing Library", level: 80 },
      { name: "Docker", level: 70 },
      { name: "Performance Profiling", level: 75 },
      { name: "Mobile-First Design", level: 85 },
      { name: "Responsive Layouts", level: 90 },
    ],
  },
];

const LANGUAGES = [
  { name: "English", flag: "🇬🇧", level: "Fluent" },
  { name: "Turkish", flag: "🇹🇷", level: "Fluent" },
  { name: "Persian (Farsi)", flag: "🇮🇷", level: "Native" },
  { name: "Deutsch", flag: "🇩🇪", level: "Elementary" },
];

const INTERESTS = [
  { title: "Philosophy", icon: <Brain className="text-primary h-4 w-4" /> },
  {
    title: "Poems & Literature",
    icon: <BookOpen className="text-primary h-4 w-4" />,
  },
  { title: "Fashion", icon: <Shirt className="text-primary h-4 w-4" /> },
  {
    title: "Family & Friendship",
    icon: <Heart className="text-primary h-4 w-4" />,
  },
  {
    title: "Playing Instruments",
    icon: <Music className="text-primary h-4 w-4" />,
  },
  { title: "Music & Movies", icon: <Film className="text-primary h-4 w-4" /> },
  {
    title: "Gym & Sports",
    icon: <Dumbbell className="text-primary h-4 w-4" />,
  },
  { title: "Coffee", icon: <Coffee className="text-primary h-4 w-4" /> },
  {
    title: "Reading Tech Blogs",
    icon: <Monitor className="text-primary h-4 w-4" />,
  },
  { title: "Gaming", icon: <Gamepad2 className="text-primary h-4 w-4" /> },
  {
    title: "Travel & Camping",
    icon: <Tent className="text-primary h-4 w-4" />,
  },
  {
    title: "Learning New Languages",
    icon: <Languages className="text-primary h-4 w-4" />,
  },
];

export {
  NAVIGATION_MENU_ITEMS,
  SKILL_CATEGORIES,
  PROJECT_CATEGORY_COLORS,
  PROJECT_CATEGORY_ICONS,
  PROJECTS,
  BLOG_CATEGORIES,
  BLOG_SORT_OPTIONS,
  EXPERIENCES,
  EDUCATION,
  SKILLS_DATA,
  LANGUAGES,
  INTERESTS,
};
