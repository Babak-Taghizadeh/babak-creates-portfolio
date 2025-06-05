import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PlaylistSectionSkeleton = () => {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <Card
          key={index}
          className="from-primary/70 via-muted/95 to-background/30 relative overflow-hidden bg-gradient-to-br py-0 shadow-xl"
        >
          <CardContent className="p-4">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Skeleton className="h-full w-full" />
            </div>
            <div className="mt-4 space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Skeleton className="absolute right-4 bottom-4 h-8 w-8 rounded-full" />
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};

export default PlaylistSectionSkeleton;
