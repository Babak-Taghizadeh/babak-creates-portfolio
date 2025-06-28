import type { Metadata } from "next";
import "./globals.css";
import MainLayout from "@/components/layouts/main-layout";
import { Toaster } from "sonner";
import { Rajdhani } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Babak Portfolio | Full-Stack Developer",
    template: "%s | Babak Portfolio",
  },
  description:
    "Full-stack developer specializing in building exceptional digital experiences with modern web technologies.",
  keywords: [
    "Full-Stack Developer",
    "Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Babak Taghizadeh" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://babakcreates.com",
    title: "Babak Portfolio | Full-Stack Developer",
    description:
      "Full-stack developer specializing in building exceptional digital experiences with modern web technologies.",
    siteName: "Babak Portfolio",
    images: [
      {
        url: "/open-graph/home.png",
        width: 1200,
        height: 630,
        alt: "Home Page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Babak Portfolio | Full-Stack Developer",
    description:
      "Full-stack developer specializing in building exceptional digital experiences with modern web technologies.",
    creator: "@babaktaghizadeh",
    images: ["/open-graph/home.png"],
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
