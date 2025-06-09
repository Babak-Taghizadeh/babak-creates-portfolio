"use client";

import { motion } from "motion/react";
import { Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { SanityDocument } from "next-sanity";
import { ISongFields } from "@/lib/types";
import urlFor from "@/utils/urlForImage";
import useMediaQuery from "@/hooks/use-media-query";
import {
  createStaggeredAnimation,
  createViewportAnimation,
} from "@/lib/animations";

interface SongCardProps {
  song: SanityDocument<ISongFields>;
  index: number;
}

const SongCard = ({ song, index = 0 }: SongCardProps) => {
  const { title, artist, spotifyUrl, coverImage, genre } = song;
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const desktopAnimation = createStaggeredAnimation({ index });
  const mobileAnimation = createViewportAnimation();

  return (
    <motion.div {...(isDesktop ? desktopAnimation : mobileAnimation)}>
      <Card className="group from-primary/70 via-muted/95 to-background/30 relative overflow-hidden bg-gradient-to-br py-0 shadow-xl transition-all hover:shadow-md">
        <CardContent className="p-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg">
            {coverImage ? (
              <Image
                src={urlFor(coverImage).url()}
                alt={`${title} album cover`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="bg-muted flex h-full items-center justify-center">
                <Music2 className="text-muted-foreground/50 h-12 w-12" />
              </div>
            )}
            {genre && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                className="absolute bottom-2 left-2 z-10"
              >
                <Badge variant="secondary">{genre}</Badge>
              </motion.div>
            )}
          </div>
          <div className="mt-4 space-y-1">
            <h3 className="line-clamp-1 font-medium">{title}</h3>
            <p className="text-muted-foreground line-clamp-1 text-sm">
              {artist}
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Link
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants(), "absolute right-4 bottom-4 p-1")}
            aria-label={`Listen to ${title} by ${artist} on Spotify`}
          >
            <Image
              src="/icons/spotify.svg"
              alt="Spotify"
              width={85}
              height={85}
            />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default SongCard;
