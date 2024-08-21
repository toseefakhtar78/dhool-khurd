import AdSense from "@/Components/Adsense";
import Banner from "@/Components/Banner";
import { AppProps } from "next/app";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div>
        <Banner text=" This is Official website of DHOOL KHURD village (a digital village) Welcome all 👋 " 
            backgroundImage='/icons/23.jpg'
             textColor="custom-black"
             alt="banner"
        />
      </div>

      <h1 className="text-center mb-4 text-xl font-bold font-mono mt-12 ">
        Here is where we live :
      </h1>

      <div className="bg-white mb-2  overflow-hidden p-4 sm:p-6 lg:p-10 flex items-center justify-center w-full max-w-screen-lg mx-auto">
  <div className="relative w-full h-0 pb-[55.25%]"> {/* 16:9 Aspect Ratio */}
    <iframe
      className="absolute inset-0 w-full h-full"
      title="map"
      style={{ filter: "opacity(1.5)" }}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.3841628735595!2d74.0289581!3d32.5959442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0ff8113aa5e7%3A0x2cfbcd521ba8bc63!2sDhool%20khurd%2C%20Gujrat%2C%20Punjab!5e0!3m2!1sen!2s!4v1723466168664!5m2!1sen!2s"
    />
  </div>
</div>
<div className="adsense-ad-container">
<Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241486495309147"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
<AdSense />\

</div>
    </>
  );
}
