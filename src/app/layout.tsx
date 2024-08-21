import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
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
     <head>
    <script async src="https://www.googletagmanager.com/gtm.js?id=G-3WF9PRTKHS"></script>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241486495309147"
      crossOrigin="anonymous">
    </script>

</head>

<GoogleTagManager gtmId='G-3WF9PRTKHS'/>
<Script async src="https://www.googletagmanager.com/gtm.js?id=G-3WF9PRTKHS"></Script>
      <body className={inter.className}>
        {children}

      </body>
    </html>
  );
}
