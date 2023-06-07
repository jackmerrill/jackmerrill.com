"use client";

import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { q } from "groqd";
import { client } from "../../../../../sanity/lib/client";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import CodeBlock from "@/components/Codeblock";

type Project = {
  title: string;
  subtitle: string;
  slug: string;
  publishedAt: Date;
  mainImage: string;
  content: string;
};

export default function ProjectModal({
  params: { id: slug },
}: {
  params: {
    id: string;
  };
}) {
  const router = useRouter();
  const [project, setProject] = React.useState<Project | null>(null);
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  React.useEffect(() => {
    async function getProject() {
      const { query: projectQuery, schema: projectSchema } = q("*")
        .filterByType("project")
        .filter(`slug.current == "${slug}"`)
        .grab$({
          title: q.string(),
          subtitle: q.string(),
          slug: q.slug("slug"),
          publishedAt: q.date(),
          mainImage: q("mainImage").grabOne$("asset->url", q.string()),
          content: q.string(),
        })
        .slice(0, 1);

      const project = projectSchema.parse(await client.fetch(projectQuery));

      setProject(project[0]);
    }
    getProject();
  }, [slug]);

  return (
    <Dialog.Root open onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-zinc-900 opacity-75 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow overflow-y-scroll fixed top-[50%] left-[50%] w-[90vw] max-h-[85vh] max-w-[50vw] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white dark:bg-zinc-800 px-8 py-12 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title
            className={cn(
              "dark:text-white text-indigo-600 m-0 text-6xl font-bold",
              !project && "bg-gray-500 animate-pulse block w-52 h-5"
            )}
          >
            {project?.title}
          </Dialog.Title>
          <Dialog.Description
            className={cn(
              "dark:text-white text-indigo-500 font-semibold mt-[10px] mb-5 text-2xl leading-normal",
              !project && "bg-gray-500 animate-pulse block w-72 h-5"
            )}
          >
            {project?.subtitle}
          </Dialog.Description>

          <article className="prose dark:prose-invert prose-zinc max-w-none lg:prose-xl">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={
                {
                  code: CodeBlock,
                } as any
              }
            >
              {project?.content || ""}
            </ReactMarkdown>
          </article>

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-12 right-8 inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
