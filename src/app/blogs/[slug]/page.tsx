import { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { BlogPostContent } from "@/components/sections/blogs/blog-post-content";
import { BlogPostBackButton } from "@/components/sections/blogs/blog-post-back-button";
import urlFor from "@/utils/urlForImage";
import BlogPostHero from "@/components/sections/blogs/blog-post-hero";
import { IBlogPost } from "@/lib/types";

const options = { next: { revalidate: 30 } };

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]`;

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: (await params).slug },
    options,
  );

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [urlFor(post.coverImage).url()],
    },
  };
};

const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const post = await client.fetch<SanityDocument<IBlogPost>>(
    POST_QUERY,
    { slug: (await params).slug },
    options,
  );

  if (!post) {
    notFound();
  }

  return (
    <article className="relative mx-auto max-w-4xl">
      <BlogPostBackButton />
      <BlogPostHero post={post} />
      <BlogPostContent post={post} />
    </article>
  );
};

export default BlogPostPage;
