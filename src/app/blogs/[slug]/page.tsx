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
  const paramsValue = await params;
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: paramsValue.slug },
    options,
  );

  if (!post) {
    return {
      title: "Post Not Found | Babak's Blogs",
      description: "The requested blog post could not be found.",
      openGraph: {
        title: "Post Not Found",
        description: "The requested blog post could not be found.",
        url: `/blogs/${paramsValue.slug}`,
      },
      alternates: {
        canonical: `/blogs/${paramsValue.slug}`,
      },
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const ogImageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : "/open-graph/blogs.png";

  return {
    title: `${post.title} | Babak's Blogs`,
    description: post.excerpt || "Read this blog post from Babak Taghizadeh.",
    keywords: [
      "web development",
      "blog",
      "frontend",
      "programming",
      "personal growth",
      "career tips",
      "coding tutorials",
    ],
    authors: [{ name: "Babak Taghizadeh" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blogs/${paramsValue.slug}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: post.title || "Blog post image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `/blogs/${paramsValue.slug}`,
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
