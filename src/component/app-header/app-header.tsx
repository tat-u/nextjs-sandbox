"use client";
import { PanelLeft, PanelLeftClose } from "lucide-react";
import { useSidebar } from "@/context/sidebar-context";

const Button = () => {
  const { toggleSidebar, isExpanded } = useSidebar();

  return (
    <button
      type="button"
      className="cursor-pointer hover:bg-gray-200 rounded"
      onClick={toggleSidebar}
    >
      {isExpanded ? (
        <PanelLeftClose className="size-6 text-stone-800" />
      ) : (
        <PanelLeft className="size-6 text-stone-800" />
      )}
    </button>
  );
};

export const AppHeader = () => {
  return (
    <>
      <header className="sticky top-0 left-0 flex w-full h-12 border-b border-gray-200 items-center px-4 gap-4 bg-amber-50">
        <Button />
        <span className="text-xl text-stone-800">My Next.js Examples</span>
      </header>
    </>
  );
};
