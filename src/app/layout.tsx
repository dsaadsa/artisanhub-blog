import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "小诸的匠心工坊",
  description: "苹果风格手工博客与作品集展示",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
