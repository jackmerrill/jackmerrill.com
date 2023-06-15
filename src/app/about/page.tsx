import Logo from "@/components/Logo";
import SidecardList from "@/components/SidecardList";
import { IdCardIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="grid grid-cols-5 gap-4 px-4 mx-auto text-black max-w-7xl dark:text-white">
      <div className="col-span-4 space-y-3">
        <h1 className="text-4xl font-black md:text-8xl">
          Hey! I&apos;m Jack Merrill.
        </h1>

        <p className="text-xl md:text-2xl">
          I&apos;m a software engineer, designer, and student from the United
          States. I&apos;m working to bring accessible designs to the masses.
        </p>
      </div>

      <div className="grid order-last w-full h-full grid-cols-2 px-8 py-4 rounded-md lg:order-none lg:space-y-12 gap-x-2 lg:row-span-3 lg:grid-cols-1 lg:col-span-1 col-span-full bg-violet-500">
        <div className="flex justify-center lg:w-full">
          <div className="h-auto p-8 border-4 border-white aspect-square w-fit max-h-48 lg:p-12 md:p-10 sm:p-6 rounded-xl">
            <Logo />
          </div>
        </div>

        <SidecardList />
      </div>

      <div className="col-span-4 space-y-3">
        <h2 className="text-3xl font-black md:text-6xl">About Me</h2>

        <p className="text-xl md:text-2xl">
          I&apos;m a Division II (sophomore) student at Hampshire College,
          studying interaction design. I&apos;m also a full-stack web developer
          at{" "}
          <Link
            rel="noreferrer"
            target="_blank"
            href="https://merch.co"
            className="font-bold text-violet-500"
          >
            Merch
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
