"use client";
import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { HistoryItem } from "@/lib/history";
import { useTranslation } from "@/app/i18n/client";

export function GenerationItem(props: {
  item: HistoryItem;
  lng: string;
  id: number;
}) {
  const { t } = useTranslation(props.lng, "common");
  function getRandomGradient() {
    const gradients = [
      "bg-gradient-to-r from-yellow-400 to-pink-500",
      "bg-gradient-to-r from-green-400 to-blue-500",
      "bg-gradient-to-r from-purple-400 to-red-500",
      "bg-gradient-to-r from-pink-400 to-blue-500",
      "bg-gradient-to-r from-indigo-500 to-purple-600",
      "bg-gradient-to-r from-pink-500 to-indigo-600",
      "bg-gradient-to-r from-red-500 to-yellow-500",
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  }

  function getLabel() {
    switch (props.item.template) {
      case "para":
        return t("paragraph");
      case "blog":
        return t("blog-post");
      case "email":
        return t("email");
      case "ideas":
        return t("ideas");
      default:
        return t("paragraph");
    }
  }

  const label = getLabel();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link
            href={"generations/" + props.id.toString()}
            className="m-2 flex w-[380px] flex-col overflow-hidden rounded-md border border-slate-200 shadow-md transition hover:-translate-y-2 hover:shadow-lg dark:border-slate-700"
          >
            <span
              className={
                "h-16 border-b border-slate-200 dark:border-slate-700 flex items-start justify-start " +
                getRandomGradient()
              }
            >
              <span className="mx-2 mt-2 w-auto border border-[#ffffff55] rounded-full px-1.5 text-sm bg-[#ffffff55] text-white backdrop-blur-md">
                {label}
              </span>
            </span>
            <span className="flex flex-col items-start">
              <h3 className="m-2 text-left font-bold">
                {props.item.prompt.length > 40
                  ? props.item.prompt.substring(0, 40) + "..."
                  : props.item.prompt}
              </h3>
            </span>
          </Link>
        </TooltipTrigger>
        <TooltipContent className="max-w-[380px]">
          {props.item.prompt}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}