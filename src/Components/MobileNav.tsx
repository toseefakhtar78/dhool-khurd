"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/Components/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/Components/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const components = [
  {
    title: "Electrions",
    href: "/Services",
    description: "",
  },
  {
    title: "Shops for delivery",
    href: "/Services/Shops",
    description: "",
  },
  {
    title: "Mechanics",
    href: "/Services/Mechanics",
    description: "",
  },
  {
    title: "House For Rent",
    href: "/HouseForRent",
    description:
      "",
  },
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
    <>   
     <section className="w-full max-w-[260px] ">
      <Sheet  open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetTrigger>
          <Image
            src="/icons/Ham1.png"
            height={50}
            width={50}
            alt="menu"
            className="cursor-pointer "
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none  bg-stone-600  ">
          <Link href="/" className="cursor-pointer flex items-center  border-b border-white">
            <Image src="/icons/D2.png" alt="logo" width={140} height={130} />
          
          </Link>
          
            <div className="mt-8">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={() => handleMenuClick("sports")}
                    className="cursor-pointer  "
                  >
                    Sports
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      "mt-2 z-50",
                      openMenu === "sports" ? "block" : "hidden"
                    )}
                  >
                    <ul className="flex flex-col  gap-2 p-2 w-[150px]  ">
                      <ListItem href="/Team" title="Cricket Team" onClick={handleItemClick} />
                      <ListItem href="/Team/VolleyBall" title="Football Team" onClick={handleItemClick} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={() => handleMenuClick("services")}
                    className="cursor-pointer ml-0"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      "mt-2 z-50",
                      openMenu === "services" ? "block" : "hidden"
                    )}
                  >
                    <ul className="flex flex-col gap-1 p- w-[200px] rounded-lg">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          onClick={handleItemClick}
                        >
                          <span className="text-sm text-yellow-500 uppercase">{component.description}</span>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/VoterList" legacyBehavior passHref >
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} >
                      VoterList
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            </div>
            <footer className="border-b text-center text-zinc-950 border-white  font-mono mt-[280px] text-sm">
             <span className="font-bold p-1 mr-4">DEV BY</span>:  AYAZ AHMED <br/>
             &nbsp;&nbsp;&nbsp;&nbsp; & Toseef Akhter
            </footer>
         
        </SheetContent>
        
      </Sheet>
    </section>
    
    </>

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
            "block select-none space-y-1 p-2 border-b border-white py-4  leading-none text-white outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
