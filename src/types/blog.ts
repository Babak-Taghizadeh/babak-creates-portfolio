export type BlogCategory =
  | "Technical"
  | "Career"
  | "Tutorials"
  | "Personal"
  | "Industry";

export type SortOption = "newest" | "oldest" | "popular";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  readingTime: number; // in minutes
  viewCount: number;
  categories: BlogCategory[];
  featured?: boolean;
}

export interface BlogFilters {
  category?: BlogCategory;
  sortBy: SortOption;
  page: number;
  search?: string;
}

export interface BlogPagination {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
}
