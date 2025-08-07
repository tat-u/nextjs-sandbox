import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Next.js Sandbox",
  description: "Hello, world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="w-full border-b border-zinc-200 h-10 flex items-center px-2">
        <ul className="flex gap-4 h-full">
          <li>
            <Link href="/">
              <div className="h-full flex">
                <span className="m-auto">Home</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/example/form">
              <div className="h-full flex">
                <span className="m-auto">Form</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/example/use-state/a">
              <div className="h-full flex">
                <span className="m-auto">useState</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/example/use-context">
              <div className="h-full flex">
                <span className="m-auto">useContext</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  );
}
