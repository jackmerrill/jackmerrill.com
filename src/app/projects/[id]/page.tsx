import { q } from "groqd";
import { client } from "../../../../sanity/lib/client";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/components/Codeblock";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default async function Page({
  params: { id: slug },
}: {
  params: { id: string };
}) {
  const { query: projectQuery, schema: projectSchema } = q("*")
    .filterByType("project")
    .filter(`slug.current == "${slug}"`)
    .grab$({
      title: q.string(),
      subtitle: q.string(),
      slug: q.slug("slug"),
      publishedAt: q.date(),
      content: q.string(),
      mainImage: q("mainImage").grabOne$("asset->url", q.string()),
    })
    .slice(0, 1);

  const project = projectSchema.parse(await client.fetch(projectQuery))[0];

  const r = project.mainImage.match(/(?<width>\d+)x(?<height>\d+)/);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex items-center justify-center w-full py-24">
        {/* the mainimage with the text on top of it */}
        <div className="relative w-full h-96">
          <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-4xl font-bold text-center text-white">
                {project.title}
              </h1>

              <h2 className="text-2xl font-semibold text-center text-white">
                {project.subtitle}
              </h2>
            </div>
          </div>
          <Image
            className="object-cover w-full h-full"
            src={project.mainImage}
            alt={project.title}
            width={parseInt(r?.groups?.width ?? "400")}
            height={parseInt(r?.groups?.height ?? "400")}
          />
        </div>
      </div>

      {/* the content */}
      <article className="prose dark:prose-invert prose-zinc max-w-none lg:prose-xl">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={
            {
              code: CodeBlock,
              img: ({ ...props }) => {
                const { width, height } = props.src.match(
                  /(?<width>\d+)x(?<height>\d+)/
                ).groups;
                return (
                  <Image
                    src={props.src}
                    alt={props.alt}
                    width={width}
                    height={height}
                  />
                );
              },
            } as any
          }
        >
          {project?.content || ""}
        </ReactMarkdown>
      </article>
    </div>
  );
}
