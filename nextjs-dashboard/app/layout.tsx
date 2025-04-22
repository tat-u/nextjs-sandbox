import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Chapter 3 - Adding a primary font
          特に子要素で指定が無い場合は、Inter が使われるものとする */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
