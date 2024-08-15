"use client"
// import { sidebarLinks } from '@/constants/index.ts'
import { sidebarLinks } from '../../constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideBar = () => {

    const pathname = usePathname();
  return (
   <section className='sidebar h-full'>
    <nav className='flex flex-col gap-4'>
      <Link href='/' className='mb-12 cursor-pointer flex items-center gap-2'>
      <Image src='/icons/Home-Logo.png' alt='logo' width={50} height={40}
       className='size-[24px] max-xl:size-14'/>
       <h1 className='sidebar-logo'>
        Dhool Khurd
       </h1>
      </Link>
      {sidebarLinks.map((item )=>{
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
        return(
            <Link key={item.label} href={item.route} className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>
              <div className='relative size-6'>
              <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0': isActive})}/>
              </div>
              <p className={cn('sidebar-label',{'!text-white':isActive})}>{item.label}</p>
            </Link>
        )
      })}
     
    </nav>
    Footer
   </section>
  )
}

export default SideBar
