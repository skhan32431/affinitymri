import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/top-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCta } from "@/components/layout/mobile-cta";
import { SmoothScroll } from "@/components/ui/smooth-scroll";

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["MedicalOrganization", "LocalBusiness"],
              name: "Affinity Radiology",
              alternateName: "Hackensack Radiology Center",
              url: "https://affinitymri.com",
              telephone: "+1-201-968-5544",
              faxNumber: "+1-800-707-8465",
              email: "appointments@affinitymri.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "155 State Street",
                addressLocality: "Hackensack",
                addressRegion: "NJ",
                postalCode: "07601",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.889,
                longitude: -74.046,
              },
              openingHoursSpecification: [
                { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" },
                { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "16:00" },
              ],
              medicalSpecialty: ["Radiology", "Diagnostic Imaging"],
              availableService: [
                { "@type": "MedicalProcedure", name: "MRI - Magnetic Resonance Imaging" },
                { "@type": "MedicalProcedure", name: "PET/CT Imaging" },
                { "@type": "MedicalProcedure", name: "Digital X-Ray" },
                { "@type": "MedicalProcedure", name: "Ultrasound" },
                { "@type": "MedicalProcedure", name: "DEXA Bone Density Scan" },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "250",
                bestRating: "5",
              },
              priceRange: "$$",
              image: "https://affinitymri.com/wp-content/uploads/2025/10/new__hrc__logo-new.jpg",
              hasCredential: [
                { "@type": "EducationalOccupationalCredential", credentialCategory: "ACR Accredited - MRI" },
                { "@type": "EducationalOccupationalCredential", credentialCategory: "ACR Accredited - CT" },
              ],
              identifier: { "@type": "PropertyValue", name: "NPI", value: "1285006791" },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileCta />
        <SmoothScroll />
      </body>
    </html>
  );
}
