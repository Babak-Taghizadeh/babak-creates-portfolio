import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layouts/main-layout";
import { Toaster } from "sonner";
import { Rajdhani } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://babakcreates.com"),
  title: {
    default: "Babak Taghizadeh | Full-Stack Developer & UI Engineer",
    template: "%s | Babak Taghizadeh",
  },
  description:
    "Babak Taghizadeh is a full-stack developer crafting high-performance web apps with React, Next.js, and modern JavaScript. Explore projects, articles, and his creative journey.",
  keywords: [
    "Babak Taghizadeh",
    "Full-Stack Developer",
    "Frontend Developer",
    "Web Development",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "JavaScript Engineer",
    "UI Engineer",
    "Frontend Architecture",
    "Performance Optimization",
  ],
  authors: [{ name: "Babak Taghizadeh", url: "https://babakcreates.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://babakcreates.com",
    title: "Babak Taghizadeh | Full-Stack Developer & UI Engineer",
    description:
      "Discover the portfolio of Babak Taghizadeh, a full-stack developer focused on building exceptional digital experiences using modern web technologies.",
    siteName: "Babak Creates",
    images: [
      {
        url: "/open-graph/home.png",
        width: 1200,
        height: 630,
        alt: "Babak's Portfolio OpenGraph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babak Taghizadeh | Full-Stack Developer",
    description:
      "Full-stack developer building beautiful, high-performance web experiences. Explore projects, blogs, and code with Babak.",
    images: ["/open-graph/home.png"],
  },
  alternates: {
    canonical: "https://babakcreates.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${rajdhani.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <MainLayout>{children}</MainLayout>
          <Toaster richColors closeButton position="top-center" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
