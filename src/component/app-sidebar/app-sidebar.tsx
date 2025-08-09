"use client";
import { useSidebar } from "@/context/sidebar-context";
import { cn } from "@/lib/common";

export const AppSidebar = () => {
  const { isExpanded } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed h-full bg-amber-50 border-r border-gray-200",
        isExpanded ? "w-40" : "w-0"
      )}
    >
      {/* Sidebar content */}
    </aside>
  );
};
