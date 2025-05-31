export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    features: string[];
    category: "Front-End" | "Fullstack" | "Backend" | "Other";
  }