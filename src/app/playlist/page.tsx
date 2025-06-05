import { Suspense } from "react";
import SectionHeader from "@/components/sections/about/section-header";
import PlaylistSection from "@/components/sections/playlist/playlist-section";
import PlaylistSectionSkeleton from "@/components/sections/playlist/playlist-section-skeleton";
import { ISongFields } from "@/lib/types";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[
  _type == "song"
]|order(publishedAt desc)[0...12]{...}`;

const options = { next: { revalidate: 30 } };

const PlaylistPage = async () => {
  const songs = await client.fetch<SanityDocument<ISongFields>[]>(
    POSTS_QUERY,
    {},
    options,
  );

  return (
    <>
      <SectionHeader
        title="Code & Chords"
        description="The soundtracks that keep my IDE and I in flow state."
      />

      <Suspense fallback={<PlaylistSectionSkeleton />}>
        <PlaylistSection songs={songs} />
      </Suspense>
    </>
  );
};

export default PlaylistPage;
