"use client";

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { useTheme } from "@/models/useTheme";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: Add metadata as pure HTML
// export const metadata: Metadata = {
//   title: "Pokemon Type Chart",
//   description: "tat-u's pokemon type chart!",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const theme = useTheme();

  return (
    <html lang="ja" data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[800px] mx-auto px-[16px]`}
      >
        {children}
      </body>
    </html>
  );
}
