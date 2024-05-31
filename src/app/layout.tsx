import Sidebar from "@/components/menu/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basic Next Js App",
  description: "Get started with Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-gray-50">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
