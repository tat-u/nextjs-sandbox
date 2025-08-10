"use client";
import { useSidebar } from "@/context/sidebar-context";
import { cn } from "@/lib/common";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkItem = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <li
      className={cn(
        "text-stone-800 hover:text-amber-600",
        isActive && "font-bold text-amber-600"
      )}
    >
      <Link href={href} className="block py-2">
        <span className="block text-sm">{label}</span>
      </Link>
    </li>
  );
};

const LinkList = () => {
  return (
    <>
      <ul>
        <LinkItem href="/use-state" label="useState" />
        <LinkItem href="/use-context" label="useContext" />
        <LinkItem href="/api-route" label="API Route" />
      </ul>
      <div className="h-1 w-full border-y border-gray-200" />
      <ul>
        <LinkItem href="/form" label="form" />
      </ul>
    </>
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
