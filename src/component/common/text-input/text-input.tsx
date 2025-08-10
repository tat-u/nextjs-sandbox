import { ComponentProps } from "react";
import { cn } from "@/lib/common";

export function TextInput({ className, ...rest }: ComponentProps<"input">) {
  return (
    <input
      type="text"
      className={cn("block rounded-sm border border-gray-200", className)}
      {...rest}
    />
  );
}
