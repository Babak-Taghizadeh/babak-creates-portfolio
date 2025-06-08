import { BlogCategory, BlogPost, SortOption } from "@/types/blog";

interface GetBlogPostsParams {
  page: number;
  category?: BlogCategory;
  sortBy: SortOption;
}

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
}

interface GetBlogPostsResponse {
  posts: BlogPost[];
  pagination: PaginationInfo;
}

const MOCK_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    excerpt:
      "Learn the basics of Next.js and how to build modern web applications.",
    content: "",
    coverImage: "/images/bg.jpg",
    publishedAt: "2024-03-15T10:00:00Z",
    readingTime: 5,
    viewCount: 1234,
    categories: ["Technical", "Tutorials"],
  },
  {
    id: "2",
    title: "Advanced TypeScript Patterns",
    slug: "advanced-typescript-patterns",
    excerpt:
      "Explore advanced TypeScript patterns and best practices for better type safety.",
    content: "",
    coverImage: "/blog/typescript.jpg",
    publishedAt: "2024-03-10T10:00:00Z",
    readingTime: 8,
    viewCount: 856,
    categories: ["Technical", "Tutorials"],
  },
  {
    id: "3",
    title: "Building Accessible Web Applications",
    slug: "building-accessible-web-applications",
    excerpt:
      "Learn how to create web applications that are accessible to everyone.",
    content: "",
    coverImage: "/blog/accessibility.jpg",
    publishedAt: "2024-03-05T10:00:00Z",
    readingTime: 6,
    viewCount: 567,
    categories: ["Technical", "Industry"],
  },
  {
    id: "4",
    title: "React Server Components Deep Dive",
    slug: "react-server-components-deep-dive",
    excerpt:
      "Understanding the power and limitations of React Server Components.",
    content: "",
    coverImage: "/images/bg.jpg",
    publishedAt: "2024-03-01T10:00:00Z",
    readingTime: 10,
    viewCount: 432,
    categories: ["Technical", "Tutorials"],
  },
  {
    id: "5",
    title: "Modern CSS Techniques",
    slug: "modern-css-techniques",
    excerpt: "Exploring modern CSS features and how to use them effectively.",
    content: "",
    coverImage: "/images/bg.jpg",
    publishedAt: "2024-02-28T10:00:00Z",
    readingTime: 7,
    viewCount: 321,
    categories: ["Technical"],
  },
  {
    id: "6",
    title: "Performance Optimization Tips",
    slug: "performance-optimization-tips",
    excerpt: "Essential tips for optimizing web application performance.",
    content: "",
    coverImage: "/images/bg.jpg",
    publishedAt: "2024-02-25T10:00:00Z",
    readingTime: 8,
    viewCount: 654,
    categories: ["Technical", "Industry"],
  },
  {
    id: "7",
    title: "State Management in React",
    slug: "state-management-in-react",
    excerpt: "Comparing different state management solutions in React.",
    content: "",
    coverImage: "/images/bg.jpg",
    publishedAt: "2024-02-20T10:00:00Z",
    readingTime: 9,
    viewCount: 789,
    categories: ["Technical", "Tutorials"],
  },
  {
    id: "8",
    title: "Testing React Applications",
    slug: "testing-react-applications",
    excerpt: "Best practices for testing React applications.",
    content: "",
    coverImage: "/images/bg.jpg",
    publishedAt: "2024-02-15T10:00:00Z",
    readingTime: 6,
    viewCount: 543,
    categories: ["Technical"],
  },
  {
    id: "9",
    title: "Building APIs with Next.js",
    slug: "building-apis-with-nextjs",
    excerpt: "How to build robust APIs using Next.js API routes.",
    content: "",
    coverImage: "/images/bg.jpg",
    publishedAt: "2024-02-10T10:00:00Z",
    readingTime: 7,
    viewCount: 876,
    categories: ["Technical", "Tutorials"],
  },
  {
    id: "10",
    title: "Advanced Next.js Patterns",
    slug: "advanced-nextjs-patterns",
    excerpt: "Advanced patterns and techniques for Next.js applications.",
    content: "",
    coverImage: "/images/bg.jpg",
    publishedAt: "2024-02-05T10:00:00Z",
    readingTime: 11,
    viewCount: 987,
    categories: ["Technical", "Industry"],
  },
];

export const getBlogPosts = async ({
  page,
  category,
  sortBy,
}: GetBlogPostsParams): Promise<GetBlogPostsResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 100));

  let filteredPosts = [...MOCK_POSTS];

  if (category) {
    filteredPosts = filteredPosts.filter((post) =>
      post.categories.includes(category),
    );
  }

  filteredPosts.sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
      case "oldest":
        return (
          new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
        );
      case "popular":
        return b.viewCount - a.viewCount;
      default:
        return 0;
    }
  });


  const POSTS_PER_PAGE = 6;
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  return {
    posts: paginatedPosts,
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
      totalPosts: filteredPosts.length,
      postsPerPage: POSTS_PER_PAGE,
    },
  };
};
