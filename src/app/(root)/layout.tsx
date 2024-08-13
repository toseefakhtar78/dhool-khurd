import SideBar from '@/Components/SideBar';
import'/src/app/globals.css'
import MobileNav from '@/Components/MobileNav';
import Image from 'next/image';
import Link from 'next/link';


export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="flex h-screen w-full font-inter">
         <SideBar/>
        <div className="flex size-full flex-col">
        <div className="root-layout">
         <Link href='/'> <Image src='/icons/Home-Logo.png' alt="menu-icon" width={80} height={80}/></Link>
          <div>
            <MobileNav/>
          </div>
        </div> 
        {children}
         </div> 
    
        {/* <footer className="text-yellow-200 ">
          Developed By: Dr. Ayaz Ahmed Goraya
        </footer> */}
      </main>
    );
  }
  