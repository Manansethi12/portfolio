import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manan Sethi | Senior Software Engineer",
  description: "Senior Software Engineer specializing in Golang, Kubernetes, distributed systems, and AI-integrated backends. Building high-scale platforms at FuboTV serving 10M+ daily requests.",
  keywords: ["Manan Sethi", "Software Engineer", "Golang", "Kubernetes", "GCP", "Distributed Systems", "AI", "Backend Engineer"],
  openGraph: {
    title: "Manan Sethi | Senior Software Engineer",
    description: "Building high-scale distributed systems with Golang, Kubernetes & AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
