"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../ui/navigation-menu";
import { NAVIGATION_MENU_ITEMS } from "@/lib/constants";
import { Button } from "../../ui/button";
import { Mail } from "lucide-react";
import { memo } from "react";
import MobileMenu from "./mobile-menu";
import { NavItem } from "./nav-item";
import Logo from "@/components/ui/logo";
import ThemeSwitch from "@/components/ui/theme-switch";
import { usePathname, useRouter } from "next/navigation";

const Header = memo(() => {
  const router = useRouter();
  const pathname = usePathname();

  const scrollToContact = () => {
    if (pathname === "/") {
      const endElement = document.getElementById("contact");
      endElement?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/#contact");
    }
  };

  return (
    // <header className=" border border-border px-6 py-3 backdrop-blur-md shadow-lg"></header>
    <header className="supports-[backdrop-filter]:bg-secondary/70 border-border sticky top-2 z-50 mx-auto min-w-[92%] rounded-2xl px-6 py-3 backdrop-blur md:px-16 lg:top-4 lg:border">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center justify-start">
          <Link
            href="/"
            className="hover:text-primary font-semibold tracking-tight transition-colors"
          >
            <Logo fill="var(--foreground)" />
          </Link>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform md:hidden">
          <ThemeSwitch />
        </div>
        <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform md:block">
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-6">
              {NAVIGATION_MENU_ITEMS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.href ? <NavItem item={item} /> : null}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        <MobileMenu />
        <div className="ml-auto hidden items-center gap-3 md:flex">
          <ThemeSwitch />
          <Button
            onClick={scrollToContact}
            className="bg-primary/20 hover:bg-primary/20 text-primary gap-1 rounded-full transition-colors"
            aria-label={`Contact via Email`}
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span className="hidden font-semibold sm:inline">Email</span>
          </Button>
        </div>
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
