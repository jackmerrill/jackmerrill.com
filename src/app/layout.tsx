import "./globals.css";
import { Inter } from "next/font/google";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import { client } from "../../sanity/lib/client";
import type ProjectType from "../../sanity/schemas/project";
import { q } from "groqd";
import Link from "next/link";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Twemoji from "@/components/Twemoji";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jack Merrill",
  description:
    "Web designer and developer working to bring accessible designs to the masses.",
};

export default async function RootLayout({
  children,
  project,
  blogpost,
}: {
  children: React.ReactNode;
  project?: React.ReactNode;
  blogpost?: React.ReactNode;
}) {
  const { query: projectQuery, schema: projectSchema } = q("*")
    .filterByType("project")
    .slice(0, 3)
    .order("publishedAt desc")
    .grab$({
      title: q.string(),
      subtitle: q.string(),
      slug: q.slug("slug"),
      publishedAt: q.date(),
      mainImage: q("mainImage").grabOne$("asset->url", q.string()),
    });

  const { query: blogQuery, schema: blogSchema } = q("*")
    .filterByType("post")
    .slice(0, 3)
    .order("publishedAt desc")
    .grab$({
      title: q.string(),
      slug: q.slug("slug"),
      publishedAt: q.date(),
      categories: q("categories")
        .filter()
        .deref()
        .grabOne$("title", q.string()),
    });

  const latestThreeProjects = projectSchema.parse(
    await client.fetch(projectQuery)
  );

  const latestThreeBlogPosts = blogSchema.parse(await client.fetch(blogQuery));

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} min-h-[100vh] flex justify-between flex-col bg-white heropattern-wiggle-indigo-100 dark:bg-zinc-900 dark:heropattern-wiggle-zinc-800`}
      >
        <Navbar
          projects={latestThreeProjects}
          blogPosts={latestThreeBlogPosts}
        />

        <main className="w-full min-h-full space-y-6">{children}</main>

        <footer className="flex justify-center w-full py-8 bg-zinc-900">
          <div className="flex items-center justify-between w-full max-w-7xl">
            <p className="flex items-center space-x-1 text-lg text-center text-zinc-100">
              Made with
              <Twemoji
                emoji="❤️"
                className="w-5 h-5 mx-1 text-red-500 transition-all duration-150 hover:scale-110"
                ext="svg"
              />
              by Jack Merrill
            </p>

            <p className="text-xs font-light text-zinc-700">
              Build{" "}
              {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA
                ? process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA.slice(0, 7)
                : "dev"}
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/jack-merrill-39aa7520b/"
                target="_blank"
              >
                <LinkedInLogoIcon className="w-6 h-6 transition-colors duration-150 cursor-pointer text-zinc-100 hover:text-[#0a66c2]" />
              </Link>

              <Link href="https://github.com/jackmerrill" target="_blank">
                <GitHubLogoIcon className="w-6 h-6 transition-colors duration-150 cursor-pointer text-zinc-100 hover:text-pink-500" />
              </Link>

              <Link href="https://twitter.com/jack__merrill" target="_blank">
                <TwitterLogoIcon className="w-6 h-6 transition-colors duration-150 cursor-pointer text-zinc-100 hover:text-[#1d9bf0]" />
              </Link>
            </div>
          </div>
        </footer>

        {project}
        {blogpost}
      </body>
    </html>
  );
}
