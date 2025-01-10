import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BSA - Home",
  description: "We are a group of passionate students who share a deep fascination for the world of blockchain, cryptocurrencies, and decentralized technologies. Driven by our curiosity and a thirst for innovation, we actively participate in hackathons , crypto events and bootstrap projects.",
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
