"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Mail } from "lucide-react";
import { NAVIGATION_MENU_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { memo, useState } from "react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const COLORS = [
  "bg-primary/40 hover:bg-primary/70",
  "bg-primary/30 hover:bg-primary/60",
  "bg-primary/20 hover:bg-primary/50",
  "bg-primary/10 hover:bg-primary/40",
];

const MobileMenu = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const totalItems = NAVIGATION_MENU_ITEMS.length;
  const sectionHeight = 100 / totalItems;

  const scrollToContact = () => {
    if (pathname === "/") {
      const endElement = document.getElementById("contact");
      endElement?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetTitle></SheetTitle>
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
                      "flex skew-y-45 items-center justify-center gap-2 duration-700",
                      isFirst && "-translate-x-18",
                      isLast && "translate-x-18",
                    )}
                  >
                    {!item.href && <Mail className="text-primary !h-8 !w-8" />}
                    <span className="text-foreground/80 text-3xl font-medium tracking-tight drop-shadow-md">
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
                  onClick={() => setIsOpen(false)}
                >
                  {content}
                </Link>
              ) : (
                <Button
                  key={item.label}
                  className={cn(
                    "text-foreground/80 absolute right-0 left-0 overflow-hidden rounded-none transition-colors duration-200",
                    colorClass,
                  )}
                  style={{ top, height }}
                  aria-label={`Contact via ${item.label}`}
                  onClick={scrollToContact}
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
