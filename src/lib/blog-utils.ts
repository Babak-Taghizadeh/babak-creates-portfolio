import { TBlogCategory, TBlogSortOption } from "@/lib/types";

export const getPostsQuery = (
  category?: TBlogCategory | "All",
  sort?: TBlogSortOption,
) => {
  const categoryFilter =
    category && category !== "All" ? `&& "${category}" in categories` : "";

  const sortOrder =
    sort === "oldest"
      ? "publishedAt asc"
      : sort === "popular"
        ? "viewCount desc"
        : "publishedAt desc";

  return `*[
    _type == "blogPost"
    && defined(slug.current)
    ${categoryFilter}
  ]|order(${sortOrder})[0...12]{
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    viewCount,
    categories,
    coverImage
  }`;
};
