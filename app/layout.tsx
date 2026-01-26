import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Goodluck Badewole | Software Engineer",
  description:
    "Portfolio of Goodluck Badewole - Computer Science student and Software Engineer with experience at Splunk and Activision. Passionate about building scalable software solutions.",
  keywords: [
    "Goodluck Badewole",
    "Software Engineer",
    "Full Stack Developer",
    "Computer Science",
    "AAMU",
  ],
  authors: [{ name: "Goodluck Badewole" }],
  openGraph: {
    title: "Goodluck Badewole | Software Engineer",
    description:
      "Portfolio of Goodluck Badewole - Software Engineer passionate about building scalable solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
