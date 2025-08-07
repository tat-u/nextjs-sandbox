import type { Metadata } from "next";
import { Counter } from "@/stories/molecules/Counter";

export const metadata: Metadata = {
  title: "useState Example",
  description: "An example of using useState in Next.js",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Counter />
      <div>{children}</div>
    </>
  );
}
