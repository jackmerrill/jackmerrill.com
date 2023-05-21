"use client";
import useTheme from "@/lib/useTheme";
import { MoonIcon, SunIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function ThemeSelector() {
  const [theme, setTheme] = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="p-2 duration-150 rounded-full dark:hover:bg-gray-700 hover:bg-slate-400">
          {theme === "dark" ? (
            <MoonIcon className="w-6 h-6 text-gray-500" />
          ) : (
            <SunIcon className="w-6 h-6 text-yellow-500" />
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark Mode
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light Mode
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
