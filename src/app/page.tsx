import Background from "@/components/Background";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Twemoji from "@/components/Twemoji";
import {
  CodeIcon,
  CubeIcon,
  FrameIcon,
  HobbyKnifeIcon,
  MagicWandIcon,
  ScissorsIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex items-center px-6 py-48 mx-auto h-2/3 max-w-7xl">
        <div className="space-y-4">
          <h1 className="flex items-center text-6xl font-bold gap-x-4">
            <Twemoji
              emoji="👋"
              ext="svg"
              className="motion-safe:animate-hand-wave"
            />{" "}
            Hey hey!
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

      <section className="px-6 py-28 bg-zinc-900">
        <div className="flex flex-col items-center mx-auto space-y-4 max-w-7xl">
          <h2 className="text-4xl font-bold">What I do</h2>

          <div className="grid grid-cols-4 gap-x-4">
            <div className="grid items-center grid-rows-2 p-4 group gap-y-2 bg-zinc-800">
              <div></div>
              <div className="space-y-2">
                <FrameIcon className="w-12 h-12 transition-colors duration-150 text-zinc-100 group-hover:text-pink-500" />
                <h3 className="text-2xl font-semibold">UI Design</h3>
                <p className="text-lg">
                  Designing interfaces and websites that are accessible, usable,
                  and intuitive.
                </p>
              </div>
            </div>

            <div className="grid items-center grid-rows-2 p-4 group gap-y-2 bg-zinc-800">
              <div></div>
              <div className="space-y-2">
                <CodeIcon className="w-12 h-12 transition-colors duration-150 text-zinc-100 group-hover:text-teal-500" />{" "}
                <h3 className="text-2xl font-semibold">Development</h3>
                <p className="text-lg">
                  Building websites and software that are fast, responsive, and
                  accessible.
                </p>
              </div>
            </div>

            <div className="grid items-center grid-rows-2 p-4 group gap-y-2 bg-zinc-800">
              <div></div>
              <div className="space-y-2">
                <MagicWandIcon className="w-12 h-12 transition-colors duration-150 text-zinc-100 group-hover:text-indigo-500" />{" "}
                <h3 className="text-2xl font-semibold">Creative</h3>
                <p className="text-lg">
                  Creating stunning designs and illustrations that are unique
                  and memorable.
                </p>
              </div>
            </div>

            <div className="grid items-center grid-rows-2 p-4 group gap-y-2 bg-zinc-800">
              <div></div>
              <div className="space-y-2">
                <ScissorsIcon className="w-12 h-12 transition-colors duration-150 text-zinc-100 group-hover:text-green-500" />{" "}
                <h3 className="text-2xl font-semibold">Other</h3>
                <p className="text-lg">
                  I&apos;m always looking to learn new things and expand my
                  skillset. Check out my projects for more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-28">
        <div className="flex flex-col items-center mx-auto space-y-4 max-w-7xl">
          <h2 className="text-4xl font-bold">
            Tell me about your next project
          </h2>

          <div className="flex">
            <Button rainbow link href="mailto:contact@jackmerrill.com">
              Reach out
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
