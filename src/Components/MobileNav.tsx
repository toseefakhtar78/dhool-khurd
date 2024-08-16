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
    href: "/docs/primitives/alert-dialog",
    description: "",
  },
  {
    title: "Shops for delivery",
    href: "/docs/primitives/hover-card",
    description: "",
  },
  {
    title: "Mechanics",
    href: "/docs/primitives/progress",
    description: "",
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
            src="/icons/HB.jpg"
            height={30}
            width={30}
            alt="menu"
            className="cursor-pointer color-white"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none  bg-stone-600 p-4">
          <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
            <Image src="/icons/D2.png" alt="logo" width={140} height={134} />
            
          
            
          </Link>
          
            <div className="mt-16">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-2">
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
                      <ListItem href="/docs/installation" title="Volleyball Team" onClick={handleItemClick} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onClick={() => handleMenuClick("services")}
                    className="cursor-pointer ml-1"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      "mt-2 z-50",
                      openMenu === "services" ? "block" : "hidden"
                    )}
                  >
                    <ul className="flex flex-col gap-2 p-4 w-[250px] rounded-lg">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          onClick={handleItemClick}
                        >
                          {component.description}
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
            <footer className="border-b text-center border-white py-0 font-mono mt-[610px] text-sm">
             <span className="font-bold p-1 mr-4">DEV BY</span>:  AYAZ AHMED GORAYA <br/>
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
            "block select-none space-y-1 p-2 border-b border-white py-4  leading-none text-white hover:underline outline-none hover:outline-yellow-500 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
