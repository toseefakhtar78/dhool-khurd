import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhool Khurd",
  description: "Dhool Khurd ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241486495309147"
        crossOrigin="anonymous"
      ></Script>
      
      <body className={inter.className}>
        {children}
        <GoogleTagManager gtmId="G-3WF9PRTKHS" />
        <footer className="text-yellow-200">
          Developed By: Dr. Ayaz Ahmed Goraya
        </footer>
      </body>
    </html>
  );
}
