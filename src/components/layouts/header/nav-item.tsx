"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationMenuTriggerStyle } from "../../ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavItemProps {
  item: {
    label: string;
    href: string;
  };
}

export const NavItem = ({ item }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.href}
      className={cn(
        navigationMenuTriggerStyle(),
        pathname.includes(item.href) &&
          "text-primary border-b-muted-foreground scale-115 rounded-none border-b",
        "font-semibold transition-all duration-300",
      )}
      aria-label={item.label}
      aria-current={pathname === item.href ? "page" : undefined}
    >
      {item.label}
    </Link>
  );
};
