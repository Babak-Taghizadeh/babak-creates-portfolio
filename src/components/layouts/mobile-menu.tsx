import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Mail } from "lucide-react";
import { NAVIGATION_MENU_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { memo } from "react";
import { cn } from "@/lib/utils";

const COLORS = [
  "bg-primary/40 hover:bg-pink-500/30",
  "bg-primary/30 hover:bg-purple-500/30",
  "bg-primary/20 hover:bg-yellow-500/30",
  "bg-primary/10 hover:bg-blue-500/30",
];

const MobileMenu = () => {
  const totalItems = NAVIGATION_MENU_ITEMS.length;
  const sectionHeight = 100 / totalItems;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] overflow-hidden p-0 sm:w-[400px]"
      >
        <div className="relative h-dvh overflow-hidden">
          <div className="absolute inset-0 origin-top -skew-y-45">
            {NAVIGATION_MENU_ITEMS.map((item, index) => {
              const colorClass = COLORS[index % COLORS.length];
              const isFirst = index === 0;
              const isLast = index === totalItems - 1;

              const middleElementsCount = totalItems - 2;
              const middleSectionHeight = (100 - 36) / middleElementsCount;

              const height =
                isFirst || isLast
                  ? `${sectionHeight + 17}%`
                  : `${middleSectionHeight}%`;

              const top = isFirst
                ? `-25%`
                : isLast
                  ? `${index * sectionHeight + 6}%`
                  : `${17 + (index - 1) * middleSectionHeight}%`;

              const content = (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={cn(
                      "flex skew-y-45 items-center justify-center gap-2 animate-in duration-700",
                      isFirst && "-translate-x-20",
                      isLast && "translate-x-18",
                    )}
                  >
                    {!item.href && (
                      <Mail
                        className="!h-8 !w-8 text-primary"
                      />
                    )}
                    <span className="text-4xl font-light text-black drop-shadow-md">
                      {item.label}
                    </span>
                  </div>
                </div>
              );

              return item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "absolute right-0 left-0 overflow-hidden transition-colors duration-200",
                    colorClass,
                  )}
                  style={{ top, height }}
                  aria-label={item.label}
                >
                  {content}
                </Link>
              ) : (
                <Button
                  key={item.label}
                  className={cn(
                    "absolute right-0 left-0 overflow-hidden rounded-none transition-colors duration-200",
                    colorClass,
                  )}
                  style={{ top, height }}
                  aria-label={`Contact via ${item.label}`}
                >
                  {content}
                </Button>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default memo(MobileMenu);
