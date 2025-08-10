"use client";
import { cn } from "@/lib/common";
import { createContext, useState, useContext, ReactNode } from "react";

type SidebarContextType =
  | undefined
  | {
      isExpanded: boolean;
      toggleSidebar: () => void;
    };

const SidebarContext = createContext<SidebarContextType>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <SidebarContext value={{ isExpanded, toggleSidebar }}>
      {children}
    </SidebarContext>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarAwareMain = ({ children }: { children: ReactNode }) => {
  const { isExpanded } = useSidebar();

  return (
    <div className={cn("transition-all duration-200", isExpanded && "pl-40")}>
      <main className="p-2">{children}</main>
    </div>
  );
};
