import type { Metadata } from "next";
import { geistSans, geistMono } from "@/ui/fonts";
import "@/ui/global.css";
import { TopNav } from "@/ui/components/top-nav";

export const metadata: Metadata = {
  title: "Background Tool",
  description: "Simple background generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNav />
        {children}
      </body>
    </html>
  );
}
