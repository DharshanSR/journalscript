import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Plasma from "@/components/plasma";
import { SiteHeader } from "@/components/AppNavbar";
// import { NavbarDemo } from "@/components/AppNavbar";
// import { Footer } from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "JournalScript - Modern Blog Platform",
  description: "A clean and modern blog platform for sharing thoughts, stories, and insights. Built with Next.js for optimal performance and user experience.",
  icons: {
    icon: "/jouralscript-header.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <div className="fixed inset-0 z-0 bg-black">
          <Plasma color="#8b5cf6" speed={0.8} direction="forward" scale={1.5} opacity={0.4} mouseInteractive={true} />
        </div>
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
