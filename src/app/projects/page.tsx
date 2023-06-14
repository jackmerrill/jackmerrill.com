import { q } from "groqd";
import { client } from "../../../sanity/lib/client";
import Twemoji from "@/components/Twemoji";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const { query: projectQuery, schema: projectSchema } = q("*")
    .filterByType("project")
    .order("publishedAt desc")
    .grab$({
      title: q.string(),
      subtitle: q.string(),
      slug: q.slug("slug"),
      publishedAt: q.date(),
      mainImage: q("mainImage").grabOne$("asset->url", q.string()),
      categories: q("categories")
        .filter()
        .deref()
        .grabOne$("title", q.string()),
    });

  const projects = projectSchema.parse(await client.fetch(projectQuery));

  return (
    <div>
      <section className="flex items-center px-6 py-48 mx-auto h-2/3 max-w-7xl">
        <div className="space-y-4">
          <h1 className="flex items-center text-6xl font-bold gap-x-4">
            <Twemoji emoji="🛠" ext="svg" /> Projects
          </h1>
          <h2 className="text-2xl font-semibold">
            The weird and wonderful things I work on.
          </h2>
        </div>
      </section>

      <div className="dark:bg-zinc-900">
        <section className="grid grid-cols-4 gap-4 py-8 mx-auto max-w-7xl">
          {projects.map((project) => {
            const r = project.mainImage.match(/(?<width>\d+)x(?<height>\d+)/);

            return (
              <Link
                key={project.slug}
                className="flex flex-col items-center justify-center p-6 space-y-4 transition-all duration-150 rounded-md dark:bg-zinc-800 hover:scale-105"
                href={`/projects/${project.slug}`}
              >
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  width={parseInt(r?.groups?.width ?? "400")}
                  height={parseInt(r?.groups?.height ?? "400")}
                />
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-lg">{project.subtitle}</p>

                <p className="text-md text-zinc-400">
                  Categories:
                  {project.categories.map((category) => (
                    <span
                      key={category}
                      className="px-2 py-1 ml-2 text-sm font-semibold text-white bg-indigo-500 rounded-md"
                    >
                      {category}
                    </span>
                  ))}
                </p>

                <div className="flex items-center space-x-2">
                  <time
                    className="text-sm text-gray-500"
                    dateTime={project.publishedAt.toISOString()}
                  >
                    Published at{" "}
                    {new Date(project.publishedAt).toLocaleDateString()}
                  </time>
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    </div>
  );
}
