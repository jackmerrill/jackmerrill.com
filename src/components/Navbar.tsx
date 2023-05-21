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

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6">
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

      <div className="flex items-center font-bold transition-all duration-150 rounded-full text-slate-900 dark:text-white bg-slate-300 dark:bg-gray-800 h-min hover:px-2">
        <Link
          href="/projects"
          className="px-3 py-2 duration-150 rounded-full dark:hover:bg-gray-700 hover:bg-slate-400"
        >
          Projects
        </Link>

        <Link
          href="/about"
          className="px-3 py-2 duration-150 rounded-full dark:hover:bg-gray-700 hover:bg-slate-400"
        >
          About
        </Link>

        <ThemeSelector />
      </div>

      <div className="flex items-center">
        <Button rainbow={true}>Contact</Button>
      </div>
    </nav>
  );
}
