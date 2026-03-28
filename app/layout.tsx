import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Farmers & Mill LLC | Premium Agricultural Asset Management",
  description:
    "Farmers & Mill LLC provides expert agricultural asset management, farm operations consulting, and land stewardship services. Maximizing yield, minimizing risk.",
  keywords: [
    "agricultural management",
    "farm consulting",
    "asset management",
    "land stewardship",
    "crop management",
    "agricultural services",
  ],
  openGraph: {
    title: "Farmers & Mill LLC | Premium Agricultural Asset Management",
    description:
      "Expert agricultural asset management and farm operations consulting.",
    url: "https://farmersandmill.com",
    siteName: "Farmers & Mill LLC",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
