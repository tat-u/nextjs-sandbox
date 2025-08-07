import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "useContext Example",
  description: "An example of using useContext in Next.js",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
