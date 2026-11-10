import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const socialPreview = "https://files.manuscdn.com/user_upload_by_module/session_file/310519664051237667/DqdkuwTAOctiBpMA.jpg";

export const metadata: Metadata = {
  title: "Sri Charan | Founder • Builder • Entrepreneur",
  description:
    "Sri Charan is a founder, builder, and entrepreneur exploring technology, products, and opportunities while building NextZen Technos.",
  applicationName: "Sri Charan — Founder Portfolio",
  authors: [{ name: "Sri Charan" }],
  creator: "Sri Charan",
  icons: {
    icon: [{ url: site.personalLogo, type: "image/png" }],
  },
  openGraph: {
    type: "website",
    title: "Sri Charan | Founder • Builder • Entrepreneur",
    description:
      "Sri Charan is a founder, builder, and entrepreneur exploring technology, products, and opportunities while building NextZen Technos.",
    siteName: "Sri Charan",
    locale: "en_US",
    images: [
      {
        url: socialPreview,
        width: 2172,
        height: 724,
        alt: "Sri Charan personal logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Charan | Founder • Builder • Entrepreneur",
    description:
      "Sri Charan is a founder, builder, and entrepreneur exploring technology, products, and opportunities while building NextZen Technos.",
    images: [socialPreview],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fbfcff",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
