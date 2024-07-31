import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
              src="/logo.png"
              alt="Logo"
              width={300}
              height={300}
              priority
            />
             <Image
              src="/logo.png"
              alt="Logo"
              width={300}
              height={300}
              priority
            />
    </main>
  );
}
