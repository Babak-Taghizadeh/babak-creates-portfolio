import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { NAVIGATION_MENU_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { Mail } from "lucide-react";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { memo } from "react";

const MobileMenu = () => {
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
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Explore</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col items-center gap-4">
          {NAVIGATION_MENU_ITEMS.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                className={navigationMenuTriggerStyle()}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            ) : (
              <Button
                key={item.label}
                className="bg-primary/10 text-primary w-fit justify-start gap-2 rounded-full"
                aria-label={`Contact via ${item.label}`}
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                <span>{item.label}</span>
              </Button>
            ),
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default memo(MobileMenu);
