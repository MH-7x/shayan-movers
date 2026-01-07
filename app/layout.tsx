import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from "sonner";

const inter = Inter({
  adjustFontFallback: false,
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  weight: ["400", "500", "600", "700", "800"],
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "Shayan Movers and Packers",
  robots: {
    "max-image-preview": "large",
    follow: true,
    googleBot: {
      notranslate: true,
      "max-image-preview": "large",
      index: true,
      follow: true,
    },
    index: true,
    notranslate: true,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} antialiased bg-(--neutral-color)`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
