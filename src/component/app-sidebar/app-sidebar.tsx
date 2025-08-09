"use client";
import { useSidebar } from "@/context/sidebar-context";
import { cn } from "@/lib/common";
import Link from "next/link";

const LinkItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <li className="text-stone-800 hover:text-amber-600">
      <Link href={href} className="block py-2">
        <span className="block text-sm">{label}</span>
      </Link>
    </li>
  );
};

const LinkList = () => {
  return (
    <ul>
      <LinkItem href="/" label="Home" />
      <LinkItem href="/" label="Use Context" />
      <LinkItem href="/" label="Use Context" />
      <LinkItem href="/" label="Use Context" />
      <LinkItem href="/" label="Use Context" />
    </ul>
  );
};

export const AppSidebar = () => {
  const { isExpanded } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed h-full bg-amber-50 border-r border-gray-200",
        "transition-all duration-200",
        isExpanded ? "w-40 p-4" : "w-0 p-0"
      )}
    >
      <div
        className={cn(
          "transition-all duration-200",
          isExpanded ? "delay-200" : "scale-0 opacity-0"
        )}
      >
        <LinkList />
      </div>
    </aside>
  );
};
