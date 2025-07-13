"use client";

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import { qptci18n } from "@/models/pokemonDefinitions";
import { useLang } from "@/models/useLang";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { lang } = useLang();

  return (
    // WARN: Suppress hydration warning to forcibly set the theme on the client side.
    <html suppressHydrationWarning>
      <title>{qptci18n.pageTitle[lang]}</title>
      <meta name="description" content="tat-u's easy pokemon tool!" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[800px] mx-auto px-[16px]`}
      >
        {/* WARN: Maybe need to sanitize */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const theme = localStorage.getItem("theme");
            if (theme) {
              document.documentElement.setAttribute("data-theme", theme);
            }
            `,
          }}
        ></script>
        {children}
      </body>
    </html>
  );
}
