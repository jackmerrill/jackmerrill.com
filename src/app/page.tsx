import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full h-full">
      <Background />

      <Navbar />
    </main>
  );
}
