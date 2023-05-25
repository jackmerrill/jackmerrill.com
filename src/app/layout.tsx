import "./globals.css";
import { Inter } from "next/font/google";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import { client } from "../../sanity/lib/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jack Merrill",
  description:
    "Web designer and developer working to bring accessible designs to the masses.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const latestThreeProjects = await client.fetch(
    `*[_type == "project"] | order(_createdAt desc) [0...3]`
  );
  console.log(latestThreeProjects);
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-[100vh] flex justify-between flex-col bg-white heropattern-wiggle-indigo-100 dark:bg-black dark:heropattern-wiggle-slate-900`}
      >
        <Navbar projects={latestThreeProjects} blogPosts={{}} />

        <main className="w-full min-h-full">{children}</main>

        <footer></footer>
      </body>
    </html>
  );
}
