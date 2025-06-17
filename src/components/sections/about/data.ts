import {
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

export const EXPERIENCES = [
  {
    title: "Full-Stack Developer",
    company: "Freelance – Dr. Imani Sleep Clinic",
    location: "Remote",
    period: "Apr 2025 – Present",
    description:
      "Working independently with stakeholders to scope, plan, and deliver full-stack web applications with a strong focus on UX, performance, and privacy. Responsible for architecture, UI systems, and DevOps decisions. Gained deep experience in managing end-to-end product lifecycles, setting coding standards, and maintaining long-term scalability across codebases.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
      "Shadcn/UI",
      "Zod",
    ],
  },
  {
    title: "Lead Front-End Developer",
    company: "Aral Studio",
    location: "Remote",
    period: "Jan 2024 – Apr 2025",
    description:
      "Led front-end efforts across multiple high-impact platforms in a fully remote team. Worked closely with back-end engineers, product managers, and designers to shape scalable interfaces and streamline data-heavy dashboards. Took ownership of design systems, SEO foundations, and performance strategy. Mentored junior developers, reviewed codebase standards, and contributed to agile workflows across time zones.",
    technologies: [
      "React",
      "Next.js",
      "Redux",
      "React Query",
      "ApexCharts",
      "TypeScript",
      "Tailwind CSS",
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
      "Joined as an early-career developer and contributed to various web projects across healthcare and small business domains. Translated Figma designs into interactive UIs, collaborated in peer code reviews, and worked within structured release cycles. Developed an understanding of modern front-end workflows, reusable components, and cross-browser accessibility standards.",
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

export const EDUCATION = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University of Tabriz",
    location: "Tabriz, Iran",
    period: "2017 - 2022",
    description:
      "Focused on Web Development and Databases. Completed a CS internship supporting academic research.",
  },
  {
    degree: "Associate of Science in Mathematics and Physics",
    school: "Rezayi College",
    location: "Tabriz, Iran",
    period: "2015 - 2017",
    description: "Advanced mathematics and theoretical physics focus.",
  },
];

export const SKILLS_DATA = [
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

export const INTERESTS = [
  { title: "Philosophy", icon: Brain },
  { title: "Poems & Literature", icon: BookOpen },
  { title: "Fashion", icon: Shirt },
  { title: "Family & Friendship", icon: Heart },
  { title: "Playing Instruments", icon: Music },
  { title: "Music & Movies", icon: Film },
  { title: "Gym & Sports", icon: Dumbbell },
  { title: "Coffee", icon: Coffee },
  { title: "Reading Tech Blogs", icon: Monitor },
  { title: "Gaming", icon: Gamepad2 },
  { title: "Travel & Camping", icon: Tent },
  { title: "Learning New Languages", icon: Languages },
];
