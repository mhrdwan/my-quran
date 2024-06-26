import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import image from "../public/next.svg";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My-Quran",
  description: "Made By Ridwan",
  openGraph: {
    images: image,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
