import { ComponentProps } from "react";
import { cn } from "@/lib/common";

export function SubmitButton({ className, ...rest }: ComponentProps<"button">) {
  return (
    <button
      type="submit"
      className={cn("block rounded-sm border border-gray-200 px-4", className)}
      {...rest}
    />
  );
}
