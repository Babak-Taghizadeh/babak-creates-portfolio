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
    <header className="supports-[backdrop-filter]:bg-secondary/90 sticky top-0 z-50 flex items-center justify-between px-6 py-3 backdrop-blur md:px-16">
      <div className="flex justify-start">
        <Link
          href="/"
          className="hover:text-primary font-semibold tracking-tight transition-colors"
        >
          <Logo fill="var(--foreground)" />
        </Link>
      </div>
      <div className="md:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <ThemeSwitch />
      </div>
      <div className="flex justify-end">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList className="gap-6">
            {NAVIGATION_MENU_ITEMS.map((item) => (
              <NavigationMenuItem key={item.label}>
                {item.href ? (
                  <NavItem item={item} />
                ) : (
                  <Button
                    onClick={scrollToContact}
                    className="bg-primary/20 hover:bg-primary/20 text-primary gap-2 rounded-full transition-colors"
                    aria-label={`Contact via ${item.label}`}
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Button>
                )}
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <ThemeSwitch />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <MobileMenu />
      </div>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
