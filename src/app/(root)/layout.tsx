import "/src/app/globals.css";
import MobileNav from "@/Components/MobileNav";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "@/Components/NavMenu";
import Footer from "@/Components/Footer"; // Import the Footer component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section
        className="bg-white text-gray-500 lg:block hidden"
        style={{ padding: "0px 20px 0px 20px" }}
      >
        <div className="flex justify-between h-[90px] font-mono tracking-wide">
          <div className="h-auto w-auto items-center justify-center flex">
            <Link href="/">
              <Image alt="logo" src="/icons/D2.png" width={200} height={200} />
            </Link>
          </div>
          <NavMenu />
        </div>
        {/* <MobileNav/> */}
      </section>
      <div className="md:hidden flex justify-center items-center p-0 bg-white">
        <Link href="/">
          <Image src="/icons/D2.png" alt="Logo" width={100} height={80} />
        </Link>
      </div>
      <main className="flex flex-col min-h-screen font-inter">
        <div className="flex flex-col flex-1">
          <div className="root-layout">
            <div className="">
              <MobileNav />
            </div>
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </main>
      <Footer /> 
    </>
  );
}
