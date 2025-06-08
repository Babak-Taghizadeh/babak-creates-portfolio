import dynamic from "next/dynamic";
import { type PlaylistSection } from "@/lib/types";
import SectionHeader from "@/components/sections/about/section-header";

const DynamicPlaylistSection = dynamic(
  () => import("@/components/sections/playlist/playlist-section"),
  {
    loading: () => (
      <div className="from-muted/50 to-muted h-48 animate-pulse rounded-xl bg-gradient-to-br" />
    ),
  },
);

const playlistData: PlaylistSection[] = [
  {
    id: "favorites",
    songs: [
      {
        id: "1",
        title: "Bohemian Rhapsody",
        artist: "Queen",
        spotifyUrl: "https://open.spotify.com/track/6l8GvAyoUZwWDgF1e4822w",
        coverImage: "/images/don.jpg",
        genre: "Rock",
      },
      // Add more songs here
    ],
  },
];

const PlaylistPage = () => {
  return (
    <>
      <SectionHeader
        title="Code & Chords"
        description="The soundtracks that keep my IDE and I in flow state."
      />
      <div className="space-y-16">
        {playlistData.map((section) => (
          <DynamicPlaylistSection key={section.id} section={section} />
        ))}
      </div>
    </>
  );
};

export default PlaylistPage;
