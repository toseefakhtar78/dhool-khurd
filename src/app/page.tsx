import PlayerX1 from "@/Components/PlayerX1";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex  flex-col items-center justify-between p-10 ">
        <h1 className="text-yellow-500 pt-[-100px] text-center">
          Welcome To The Official Website Of Dhool Khurd Cricket Club
        </h1>

        <Image src="/logo.png" alt="Logo" width={200} height={100} priority />
    
          <PlayerX1/>
      </div>
    
    </>
  );
}
