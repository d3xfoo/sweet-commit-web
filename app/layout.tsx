import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider";
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
  title: "sweet-commit - Interactive CLI for Conventional Git Commits",
  description: "Streamline your Git workflow with sweet-commit, an interactive CLI tool for generating conventional commit messages. Supports feat, fix, docs, refactor, breaking changes, and issue linking for better project history and automated changelogs.",
  keywords: [
    "sweet-commit",
    "conventional commits",
    "git",
    "cli",
    "commit messages",
    "interactive",
    "feat",
    "fix",
    "docs",
    "refactor",
    "breaking changes",
    "issue linking",
    "npm",
    "open source",
    "developer tools",
    "version control",
  ],
  openGraph: {
    title: "sweet-commit - Interactive CLI for Conventional Git Commits",
    description: "Streamline your Git workflow with sweet-commit, an interactive CLI tool for generating conventional commit messages. Supports feat, fix, docs, refactor, breaking changes, and issue linking for better project history and automated changelogs.",
    url: "https://sweet-commit.vercel.app",
    siteName: "sweet-commit",
    images: [
      {
        url: "/sweet-commit.png",
        width: 1200,
        height: 630,
        alt: "sweet-commit - Interactive CLI for Conventional Git Commits",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "sweet-commit - Interactive CLI for Conventional Git Commits",
    description: "Streamline your Git workflow with sweet-commit, an interactive CLI tool for generating conventional commit messages. Supports feat, fix, docs, refactor, breaking changes, and issue linking for better project history and automated changelogs.",
    creator: "@d3xfoo",
    images: ["/sweet-commit.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        <Analytics/>
        </ThemeProvider>
      </body>
    </html>
  );
}
