import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "sonner";
import ActionButton from "@/components/ActionButtons";
import { PageBreadcrumbs } from "@/components/Breadcrumbs";
import GTM, { GTMNoScript } from "@/components/GTM";
import JsonLd from "@/components/JsonLd";
import { APP } from "@/App";
import { siteSchema } from "@/lib/schema";

// Inter is a variable font: omitting `weight` loads one file per subset
// instead of five static weights.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(APP.url),
  applicationName: "Shayan Movers and Packers",
  title: "Shayan Movers and Packers | Movers in Dubai & UAE",
  description:
    "Shayan Movers and Packers: house, villa and office moving across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and Al Ain. Call +971 54 732 6816.",
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
    shortcut: "/icons/favicon-32x32.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d84315",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AE" className="">
      <body className={`${inter.className} antialiased bg-(--neutral-color)`}>
        <GTMNoScript />
        <GTM />
        <JsonLd json={siteSchema} />
        <PageBreadcrumbs siteUrl={APP.url} />
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
        <ActionButton />
      </body>
    </html>
  );
}
