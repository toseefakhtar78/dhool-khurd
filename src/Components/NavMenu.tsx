"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/Components/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Electrions",
    href: "/Services",
    description:
      "",
  },
  {
    title: "Shops for delivery",
    href: "/Services/Shops",
    description:
      "",
  },
  {
    title: "Mechanics",
    href: "/Services/Mechanics",
    description:
      "",
  },
  {
    title: "House For Rent",
    href: "/HouseForRent",
    description:
     "",}

]

const  NavMenu=()=> {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="hover:underline-offset-4">
          <NavigationMenuTrigger className="hover:border-b-8 border-gray-400">Sports</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" gap-0 flex flex-col p-0 text-center md:w-[400px] lg:w-[150px] lg:grid-cols-[.75fr_1fr]">
              {/* <li className="row-span-2"> */}
                {/* <NavigationMenuLink asChild>
                  {/* <a
                    className="flex h-full w-full select-none flex-col justify-end  bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  > */}
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    {/* <div className="mb-2 mt-4 text-lg text-white font-medium underline">
                    Sports
                    </div> */}
                    {/* <p className="text-sm leading-tight text-muted-foreground">
                      {/* We are official cricket team of our village 
                      hard/tape ball */}
                    {/* </p> */}
                  {/* </a> */} 
                {/* </NavigationMenuLink>  */}
              {/* </li> */}
             <Link href='/Team'>
             <ListItem  title="Cricket" className=" hover:bg-gray-400 ">
                {/* Re-usable components built using Radix UI and Tailwind CSS. */}
              </ListItem>
              </Link> 
              <Link href='/Team/Football'>
                <ListItem title="Football" className=" hover:bg-gray-400 ">
                {/* How to install dependencies and structure your app. */}
              </ListItem>
              </Link>
            
              {/* <ListItem href="/docs/primitives/typography" title=""> */}
                {/* Styles for headings, paragraphs, lists...etc */}
              {/* </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:border-b-8 border-gray-400">Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap- p-0 text-center md:w-[500px] md:grid-cols-1 lg:w-[200px] ">
              {components.map((component) => (
                <ListItem
                className=" hover:bg-gray-400 "
                  key={component.title}
                  // title={component.title}
                  // href={component.href}
                >
                   <Link href={component.href} legacyBehavior passHref>{component.title}</Link><br/>
               
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:border-b-8 p border-gray-400 rounded-md">
          <Link href="/VoterList" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             VoterList
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:border-b-8 border-gray-400 rounded-md">
          <Link href="/PrivacyPolicy" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
             Privacy Policy
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default NavMenu
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
            "block select-none space-y-1 bg-stone-950 p-0 border-b border-white py-4  leading-none text-white  outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
  )
})
ListItem.displayName = "ListItem"
