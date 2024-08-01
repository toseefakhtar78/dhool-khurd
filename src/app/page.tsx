import PlayerX1 from "@/Components/PlayerX1";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex  flex-col items-center justify-between p-10 ">
        <div className="text-4xl text-yellow-500 pt-[-100px]">
          Welcome to official website of Dhool Khurd Cricket Club{" "}
        </div>
        <Image src="/logo.png" alt="Logo" width={300} height={100} priority />
        {/* <span className="text-3xl hover:underline text-yellow-500">
          DHOOL KHURD
        </span> */}
          <PlayerX1/>
      </div>
    
    </>
  );
}
