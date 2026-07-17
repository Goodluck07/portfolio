import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navigation from "@/components/Navigation";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Goodluck Badewole | Software Engineer",
  description:
    "Portfolio of Goodluck Badewole, a Computer Science senior at Alabama A&M University (4.0 GPA) with internship experience at Splunk, Activision, and Innovation Portal spanning backend infrastructure, game systems, and shipped AI products.",
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
      "CS senior at Alabama A&M University. Internships at Splunk, Activision, and Innovation Portal. 1st place, Sandia National Labs CTF.",
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
      <body className={`${inter.variable} ${fraunces.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navigation />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
