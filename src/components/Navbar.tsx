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

export default function Navbar({
  projects,
  blogPosts,
}: {
  projects: any;
  blogPosts: any;
}) {
  return (
    <div className="flex items-center justify-between w-full p-6 mx-auto max-w-7xl">
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

      <div className="flex items-center min-h-full font-bold transition-all duration-150 rounded-full text-slate-900 dark:text-white bg-slate-300 dark:bg-gray-800 hover:px-2">
        <NavigationMenu.Root className="relative z-[1] flex w-full h-full justify-center">
          <NavigationMenu.List className="flex m-0 list-none center">
            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="hover:bg-gray-700 group flex select-none items-center justify-between gap-[2px] rounded-full h-full px-3 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                Projects
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                  <li className="grid row-span-3">
                    <NavigationMenu.Link asChild>
                      <a
                        className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-full bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                        href="/"
                      >
                        <svg
                          aria-hidden
                          width="38"
                          height="38"
                          viewBox="0 0 25 25"
                          fill="white"
                        >
                          <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                          <path d="M12 0H4V8H12V0Z"></path>
                          <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                        </svg>
                        <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                          Radix Primitives
                        </div>
                        <p className="text-mauve4 text-[14px] leading-[1.3]">
                          Unstyled, accessible components for React.
                        </p>
                      </a>
                    </NavigationMenu.Link>
                  </li>
                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Trigger className="hover:bg-gray-700 h-full group flex select-none items-center justify-between gap-[2px] rounded-full px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                Blog
              </NavigationMenu.Trigger>
              <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3"></ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                className="hover:bg-gray-700 h-full items-center flex select-none rounded-full px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                href="https://github.com/radix-ui"
              >
                About
              </NavigationMenu.Link>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <ThemeSelector />
            </NavigationMenu.Item>

            <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
              <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
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
