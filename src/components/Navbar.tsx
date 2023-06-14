"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, MouseEvent } from "react";
import Button from "./Button";
import Logo from "./Logo";
import ThemeSelector from "./ThemeSelector";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cn } from "@/lib/utils";
import { BackpackIcon, Pencil2Icon } from "@radix-ui/react-icons";

export default function Navbar({
  projects,
  blogPosts,
}: {
  projects: {
    publishedAt: Date;
    title: string;
    subtitle: string;
    slug: string;
    mainImage: string;
  }[];
  blogPosts: {
    publishedAt: Date;
    title: string;
    slug: string;
    categories: string[];
  }[];
}) {
  return (
    <div className="flex items-center w-full p-6 mx-auto max-w-7xl">
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="p-4 bg-gray-800 rounded-md w-14 h-14 animate-rainbow-outline">
            <Logo />
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            <Link href="/">Home</Link>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>

      <div className="flex items-center flex-grow min-h-full px-4">
        <NavigationMenu.Root className="relative z-[1] mx-auto w-full flex h-full justify-center font-bold ">
          <NavigationMenu.List className="flex m-0 list-none transition-all duration-150 rounded-full center text-slate-900 dark:text-white bg-slate-300 dark:bg-gray-800 hover:px-2">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="hover:bg-gray-700 group flex select-none items-center justify-between gap-[2px] rounded-full h-full px-3 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                Projects
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-5">
                  <li className="grid col-span-2 row-span-3">
                    <NavigationMenu.Link asChild>
                      <Link
                        className="focus:shadow-purple-500 from-purple-500 to-indigo-500 flex
                    h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                        href="/projects"
                      >
                        <BackpackIcon className="w-12 h-12 mb-2 text-white" />
                        <div className="pb-4 text-[18px] font-bold leading-[1.2] text-white">
                          Projects
                        </div>
                        <p className="text-[14px] font-medium leading-[1.3]">
                          See the weird and wonderful things I&apos;ve been
                          working on.
                        </p>
                      </Link>
                    </NavigationMenu.Link>
                  </li>

                  {projects.map((project) => (
                    <li
                      key={project.slug}
                      className="col-span-3 transition duration-150 rounded-md hover:bg-gray-900"
                    >
                      <NavigationMenu.Link asChild>
                        <Link
                          href={`/projects/${project.slug}`}
                          className={
                            "focus:shadow-[0_0_0_2px] grid grid-cols-4 items-center focus:shadow-violet7 hover:bg-mauve3 select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors"
                          }
                        >
                          <div className="col-span-3">
                            <div className="mb-[5px] font-bold leading-[1.2]">
                              {project.title}
                            </div>
                            <p className="font-medium leading-[1.4]">
                              {project.subtitle}
                            </p>
                          </div>

                          {/* project image */}
                          {project.mainImage && (
                            <div className="relative w-full h-full overflow-hidden rounded-md">
                              <Image
                                src={project.mainImage}
                                alt=""
                                fill
                                style={{ objectFit: "cover" }}
                                className="h-full rounded-md"
                              />
                            </div>
                          )}
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="hover:bg-gray-700 h-full group flex select-none items-center justify-between gap-[2px] rounded-full px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                Blog
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-5">
                  <li className="grid col-span-2 row-span-3">
                    <NavigationMenu.Link asChild>
                      <Link
                        className="focus:shadow-green-500 from-green-500 to-cyan-500 flex
                    h-full w-full select-none flex-col justify-end rounded-lg bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                        href="/blog"
                      >
                        <Pencil2Icon className="w-12 h-12 mb-2 text-white" />
                        <div className="pb-4 text-[18px] font-bold leading-[1.2] text-white">
                          Blog
                        </div>
                        <p className="text-[14px] font-medium leading-[1.3]">
                          Read my thoughts on the web, tech, and life.
                        </p>
                      </Link>
                    </NavigationMenu.Link>
                  </li>

                  {blogPosts.map((post) => (
                    <li
                      key={post.slug}
                      className="col-span-3 transition duration-150 rounded-md hover:bg-gray-900"
                    >
                      <NavigationMenu.Link asChild>
                        <Link
                          href={`/blog/${post.slug}`}
                          className={
                            "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors"
                          }
                        >
                          <div className="mb-[5px] font-bold leading-[1.2]">
                            {post.title}
                          </div>
                          <p className="font-medium leading-[1.4]">
                            Categories: {post.categories.join(", ")}
                          </p>
                        </Link>
                      </NavigationMenu.Link>
                    </li>
                  ))}
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="hover:bg-gray-700 h-full items-center flex select-none rounded-full px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                asChild
              >
                <Link href="/about">About</Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <ThemeSelector />
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
              <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white dark:bg-gray-800" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
            <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white dark:bg-gray-800 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>
        </NavigationMenu.Root>
      </div>

      <div className="flex items-center">
        <Button link rainbow href="mailto:contact@jackmerrill.com">
          Contact
        </Button>
      </div>
    </div>
  );
}
