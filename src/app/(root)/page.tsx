import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex  flex-col items-center justify-between p-10 ">
        <h1 className="text-yellow-500 pt-[-100px] text-center font-bold text-3xl">
          Welcome To The Official Website Of
          <br /> Dhool Khurd Village
        </h1>
        <p className="mt-6 text-2xl">( The Digital Village )</p>

        <Image
          src="/icons/Home-Logo.png"
          alt="Logo"
          width={600}
          height={600}
          priority
        />
      
      </div>
      {/* <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap"> */}
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-center relative lg:ml-40">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(1.5)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.3841628735595!2d74.0289581!3d32.5959442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0ff8113aa5e7%3A0x2cfbcd521ba8bc63!2sDhool%20khurd%2C%20Gujrat%2C%20Punjab!5e0!3m2!1sen!2s!4v1723466168664!5m2!1sen!2s"/>
      </div>
      {/* </div> */}
    </>
  );
}
