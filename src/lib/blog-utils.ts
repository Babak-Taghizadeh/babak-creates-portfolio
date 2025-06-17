import { TBlogCategory, TBlogSortOption } from "@/lib/types";

export const getPostsQuery = (
  category: TBlogCategory | "All",
  sort: TBlogSortOption,
  start: number = 0,
  end: number = 12,
) => {
  const categoryFilter =
    category === "All" ? "" : `&& "${category}" in categories`;
  const sortOrder = sort === "newest" ? "desc" : "asc";

  return `{
    "posts": *[_type == "blogPost" ${categoryFilter}] | order(publishedAt ${sortOrder})[${start}...${end}] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    readingTime,
    viewCount,
    categories,
    coverImage
    },
    "total": count(*[_type == "blogPost" ${categoryFilter}])
  }`;
};
