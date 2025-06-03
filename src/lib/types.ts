export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
  category: "Front-End" | "Fullstack" | "Backend" | "Other";
}

export interface Song {
  id: string;
  title: string;
  artist: string;
  spotifyUrl: string;
  coverImage: string;
  genre: string;
}

export interface PlaylistSection {
  id: string;
  songs: Song[];
}
