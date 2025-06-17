import { PortableTextBlock, Slug } from "@sanity/types";

export interface IProject {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  category: "Front-End" | "Fullstack" | "Backend" | "Other";
}

export interface ISongFields {
  title: string;
  artist: string;
  spotifyUrl: string;
  coverImage: string;
  genre: string;
}

export type TBlogCategory =
  | "Technical"
  | "Career"
  | "Personal"
  | "Industry";

export type TBlogSortOption = "newest" | "oldest";

export interface IBlogPost {
  title: string;
  slug: Slug;
  excerpt: string;
  content: PortableTextBlock[];
  coverImage: string;
  publishedAt: string;
  readingTime: number;
  categories: TBlogCategory[];
}

export interface IBlogFilters {
  category?: TBlogCategory;
  sortBy: TBlogSortOption;
  page: number;
  search?: string;
}

export interface IBlogPagination {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
}
