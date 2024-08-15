"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/Components/components/ui/sheet"
// import { sidebarLinks } from "/home/toseef/Desktop/Next-Js/Dhool-khurd/constants"
import { sidebarLinks } from "../../constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
  

const MobileNav = () => {
    const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
  <SheetTrigger>
    <Image src='/icons/hamburger.svg'height={30} width={30} alt="menu" className="cursor-pointer"/>
  </SheetTrigger>
  <SheetContent side='left' className="border-none bg-white ">
  <Link href='/' className=' cursor-pointer flex items-center gap-1 px-4'>
      <Image src='/icons/Home-Logo.png' alt='logo' width={34} height={34}
      />
       <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
       Dhool Khurd
       </h1>
      </Link>
      <div className="mobilenav-sheet">
      <SheetClose asChild>
       <nav className="flex h-full flex-col gap-6 pt-16 text-zinc-950">
       {sidebarLinks.map((item)=>{
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
        return(
            <SheetClose asChild key={item.route}>
            <Link key={item.label} href={item.route} className={cn('mobilenav-sheet_close w-full',{'bg-bank-gradient':isActive})}>
             
              <Image src={item.imgURL} alt={item.label} width={20} height={20} className={cn({'brightness-[3] invert-0': isActive})}/>
              
              <p className={cn('text-16 font-semibold text-black-2',{'text-white':isActive})}>{item.label}</p>
            </Link>
            </SheetClose>
        )
      })}
      
       </nav>
      </SheetClose>
    <footer className="text-zinc-950 ring-2 ring-yellow-500 mb-4 text-sm">Dev by: DR.AYAZ AHMED GORAYA</footer>
      </div>
      
  </SheetContent>
</Sheet>

    </section>
  )
}

export default MobileNav
