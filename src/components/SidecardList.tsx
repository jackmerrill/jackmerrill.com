"use client";

import { Crosshair2Icon, IdCardIcon, PersonIcon } from "@radix-ui/react-icons";
import * as Tooltip from "@radix-ui/react-tooltip";

export default function SidecardList() {
  return (
    <Tooltip.Provider>
      <ul className="flex flex-col gap-4 mt-4">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <li className="flex items-center gap-2 w-min">
              <PersonIcon className="w-6 h-6" />
              <span className="ml-2 font-semibold text-md">
                <span className="sr-only">Age</span>
                {new Date().getFullYear() - 2004}
              </span>
            </li>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white dark:bg-zinc-600 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
              <span className="font-semibold">Age</span>
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <li className="flex items-center gap-2 w-min">
              <IdCardIcon className="w-6 h-6" />
              <span className="ml-2 font-semibold text-md">
                <span className="sr-only">Pronouns</span>
                he/him
              </span>
            </li>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white dark:bg-zinc-600 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
              <span className="font-semibold">Pronouns</span>
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <li className="flex items-center w-full gap-2">
              <Crosshair2Icon className="w-6 h-6" />
              <span className="ml-2 font-semibold text-md">
                <span className="sr-only">Location</span>
                Chicago, IL / Amherst, MA
              </span>
            </li>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white dark:bg-zinc-600 px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]">
              <span className="font-semibold">Location</span>
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </ul>
    </Tooltip.Provider>
  );
}
