import Background from "@/components/Background";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Twemoji from "@/components/Twemoji";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex items-center px-6 mx-auto h-2/3 max-w-7xl">
      <div className="space-y-2 ">
        <h1 className="flex items-center text-6xl font-bold gap-x-2">
          <Twemoji emoji="👋" ext="svg" className="animate-hand-wave" /> Hey
          hey!
        </h1>
        <h2 className="text-2xl font-semibold">
          I&apos;m Jack Merrill, a web designer and developer working to bring
          accessible designs to the masses.
        </h2>

        <div className="flex">
          <Button link href="mailto:contact@jackmerrill.com">
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}
