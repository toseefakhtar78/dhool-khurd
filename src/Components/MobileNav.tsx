"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/Components/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/Components/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const components = [
  { title: "Electrions", href: "/Services", description: "" },
  { title: "Shops for delivery", href: "/Services/Shops", description: "" },
  { title: "Mechanics", href: "/Services/Mechanics", description: "" },
  { title: "House For Rent", href: "/HouseForRent", description: "" },
];

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = (menu: string) => {
    setOpenMenu(menu === openMenu ? null : menu);
  };

  const handleItemClick = () => {
    setSidebarOpen(false);
  };

  return (
    <section className="relative w-full max-w-[260px]">
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger>
          <div className="ml-[-10px]">
            <Image
              src="/icons/Ham1.png"
              height={50}
              width={50}
              alt="menu"
              className="cursor-pointer"
            />
          </div>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-stone-600 text-white p-4 max-w-[260px] h-full"
        >
          <Link
            href="/"
            className="flex items-center border-b border-white pb-4"
          >
            <Image src="/icons/D2.png" alt="logo" width={120} height={100} />
          </Link>
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col mt-6 space-y-4">
              {/* Sports Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={() => handleMenuClick("sports")}
                  className="cursor-pointer text-xl font-mono "
                >
                  Sports
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className={cn(
                    "mt-2 z-50",
                    openMenu === "sports" ? "block" : "hidden"
                  )}
                >
                  <ul className="flex flex-col gap-1 pl-2">
                    <li>
                      <Link href="/Team" passHref>
                        <span
                          className="block p-2 border-b font-mono border-white text-white hover:bg-accent hover:text-accent-foreground"
                          onClick={handleItemClick}
                        >
                          Cricket
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/Team/Football" passHref>
                        <span
                          className="block p-2 border-b border-white font-mono text-white hover:bg-accent hover:text-accent-foreground"
                          onClick={handleItemClick}
                        >
                          Football
                        </span>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* Services Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  onClick={() => handleMenuClick("services")}
                  className="cursor-pointer text-xl font-mono"
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  className={cn(
                    "mt-2 z-50",
                    openMenu === "services" ? "block" : "hidden"
                  )}
                >
                  <ul className="flex flex-col gap-2 pl-4">
                    {components.map((component) => (
                      <li key={component.title}>
                        <Link href={component.href} passHref>
                          <span
                            className="block p-2 font-mono border-b border-white text-white hover:bg-accent hover:text-accent-foreground"
                            onClick={handleItemClick}
                          >
                            {component.title}
                            <span className="text-sm text-yellow-500 uppercase">
                              {component.description}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* Voter List Link */}
              <NavigationMenuItem>
                <Link href="/VoterList" legacyBehavior passHref>
                  <span className="block p-2 text-xl font-mono text-white hover:bg-accent hover:text-accent-foreground">
                    VoterList
                  </span>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/PrivacyPolicy" legacyBehavior passHref>
                  <span className="block p-2 text-xl font-mono text-white hover:bg-accent hover:text-accent-foreground">
                    Privacy-Policy
                  </span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 p-2 border-b border-white py-4  leading-none text-white outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:underline-offset-8 ",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
