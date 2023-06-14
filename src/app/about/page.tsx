import Logo from "@/components/Logo";
import SidecardList from "@/components/SidecardList";
import { IdCardIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="grid grid-cols-5 gap-4 mx-auto max-w-7xl">
      <div className="col-span-4 space-y-3">
        <h1 className="font-black text-8xl">Hey! I&apos;m Jack Merrill.</h1>

        <p className="text-2xl">
          I&apos;m a software engineer, designer, and student from the United
          States. I&apos;m working to bring accessible designs to the masses.
        </p>
      </div>

      <div className="w-full h-full col-span-1 row-span-3 px-8 py-4 space-y-12 rounded-md bg-violet-500">
        <div className="flex justify-center w-full">
          <div className="h-auto p-12 border-2 border-white rounded-md">
            <Logo />
          </div>
        </div>

        <SidecardList />
      </div>

      <div className="col-span-4 space-y-3">
        <h2 className="text-6xl font-black">About Me</h2>

        <p className="text-2xl">
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

        <p className="text-2xl"></p>
      </div>
    </div>
  );
}
