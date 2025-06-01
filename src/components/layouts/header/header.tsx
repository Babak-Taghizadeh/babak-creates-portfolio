import Link from "next/link";
import Image from "next/image";
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

const Header = memo(() => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur md:px-16">
      <Link
        href="/"
        className="hover:text-primary font-semibold tracking-tight transition-colors"
      >
        <Image
          src="/images/Logo.png"
          alt="Babak Portfolio Logo"
          width={90}
          height={90}
        />
      </Link>
      <NavigationMenu className="ml-auto hidden md:block">
        <NavigationMenuList className="gap-6">
          {NAVIGATION_MENU_ITEMS.map((item) => (
            <NavigationMenuItem key={item.label}>
              {item.href ? (
                <NavItem item={item} />
              ) : (
                <Button
                  className="bg-primary/10 hover:bg-primary/20 text-primary gap-2 rounded-full transition-colors"
                  aria-label={`Contact via ${item.label}`}
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">{item.label}</span>
                </Button>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <MobileMenu />
    </header>
  );
});

Header.displayName = "Header";

export default Header;
