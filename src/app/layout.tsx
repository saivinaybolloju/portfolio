import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import CursorSpotlight from "./components/ui/CursorSpotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sai Vinay Bolloju | Software Developer",
  description:
    "Software Developer Intern specializing in Full-Stack & Mobile development. Building high-performance applications with React, Node.js, and React Native.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-[#0B0F19] text-[#F3F4F6]`}>
        <CursorSpotlight>{children}</CursorSpotlight>
      </body>
    </html>
  );
}
