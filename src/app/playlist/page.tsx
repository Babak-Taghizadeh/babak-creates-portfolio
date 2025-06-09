import { Suspense } from "react";
import { Metadata } from "next";
import SectionHeader from "@/components/shared/section-header";
import PlaylistSectionSkeleton from "@/components/sections/playlist/playlist-section-skeleton";
import { ISongFields } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import SongCard from "@/components/sections/playlist/song-card";
import { PaginationControls } from "@/components/ui/pagination-controls";

export const metadata: Metadata = {
  title: "Code & Chords",
  description:
    "Explore the soundtracks that keep Babak's IDE and flow state in perfect harmony. A curated collection of music for coding and productivity.",
  openGraph: {
    title: "Code & Chords",
    description:
      "Explore the soundtracks that keep Babak's IDE and flow state in perfect harmony. A curated collection of music for coding and productivity.",
    type: "website",
    url: "/playlist",
    images: [
      {
        url: "/open-graph/playlist.png",
        width: 1200,
        height: 630,
        alt: "Code & Chords Playlist Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code & Chords",
    description:
      "Explore the soundtracks that keep Babak's IDE and flow state in perfect harmony. A curated collection of music for coding and productivity.",
    images: ["/open-graph/playlist.png"],
  },
};

const POSTS_PER_PAGE = 12;

const POSTS_QUERY = `{
  "songs": *[_type == "song"] | order(publishedAt desc)[$start...$end] {...},
  "total": count(*[_type == "song"])
}`;

const options = { next: { revalidate: 30 } };

interface PlaylistPageProps {
  searchParams: {
    page?: string;
  };
}

const PlaylistPage = async ({ searchParams }: PlaylistPageProps) => {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const { songs, total } = await client.fetch<{
    songs: SanityDocument<ISongFields>[];
    total: number;
  }>(POSTS_QUERY, { start, end }, options);

  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <>
      <SectionHeader
        title="Code & Chords"
        description="The soundtracks that keep my IDE and I in flow state."
      />
      <div className="space-y-8">
        <Suspense fallback={<PlaylistSectionSkeleton />}>
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {songs.map((song, index) => (
              <SongCard key={song._id} song={song} index={index} />
            ))}
          </section>
        </Suspense>
        {totalPages > 1 && (
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            className="mt-8"
          />
        )}
      </div>
    </>
  );
};

export default PlaylistPage;
