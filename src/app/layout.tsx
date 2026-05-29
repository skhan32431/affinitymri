import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCta } from "@/components/layout/mobile-cta";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Affinity Radiology | Precision Imaging for Clinical Clarity",
  description:
    "State-of-the-art diagnostic imaging center in Hackensack, NJ. MRI, PET/CT, X-Ray, Ultrasound, and DEXA services with board-certified radiologists.",
  keywords: [
    "radiology",
    "MRI",
    "PET/CT",
    "X-Ray",
    "ultrasound",
    "DEXA",
    "Hackensack NJ",
    "diagnostic imaging",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCta />
      </body>
    </html>
  );
}
