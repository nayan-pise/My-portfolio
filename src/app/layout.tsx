import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Embers from "@/components/Embers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nayan A. Pise | AI/ML Engineer",
  description: "Portfolio of Nayan A. Pise, AI/ML Engineer and Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-100 antialiased selection:bg-amber-500 selection:text-black`}>
        {/* Animated glowing embers overlay */}
        <Embers />
        
        {/* Dark overlay to ensure text contrast over the background texture */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-black/40"></div>
        
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
