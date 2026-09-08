import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alexpandian A | Software Developer",
  description:
    "Professional portfolio of Alexpandian A — entry-level Software Developer skilled in Java, Python, React.js, JavaScript, SQL and REST APIs.",
  keywords: [
    "Alexpandian",
    "Software Developer",
    "Java",
    "Python",
    "React",
    "Next.js",
    "SQL",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}