import './globals.css';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://altamentis.in'),
  title: {
    default: 'AltaMentis Technologies | SAP Excellence & Agentic AI',
    template: '%s | AltaMentis Technologies'
  },
  description: 'AltaMentis Technologies specializes in high-end SAP S/4HANA consulting, BTP integration, and innovative Agentic AI solutions for enterprise digital transformation.',
  keywords: ['SAP Consulting', 'S/4HANA Implementation', 'Agentic AI', 'SAP BTP Integration', 'Enterprise AI', 'Digital Transformation', 'SAP Solutions India', 'Autonomous AI for Business'],
  authors: [{ name: 'AltaMentis Technologies' }],
  creator: 'AltaMentis Technologies',
  publisher: 'AltaMentis Technologies',
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://altamentis.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://altamentis.in',
    title: 'AltaMentis Technologies | SAP Excellence & Agentic AI',
    description: 'Bridging the gap between traditional SAP Enterprise Services and modern Agentic AI with senior-level expertise.',
    siteName: 'AltaMentis Technologies',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AltaMentis Technologies - SAP & Agentic AI'
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AltaMentis Technologies | SAP & Agentic AI',
    description: 'Bespoke SAP S/4HANA implementations met with the autonomous power of Agentic AI.',
    images: ['/og-image.png'],
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Chennai',
    'geo.position': '12.8933;80.1472',
    'ICBM': '12.8933, 80.1472',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "AltaMentis Technologies",
              url: "https://altamentis.in",
              logo: "https://altamentis.in/og-image.png",
              description:
                "AltaMentis Technologies specializes in high-end SAP S/4HANA consulting, BTP integration, and innovative Agentic AI solutions for enterprise digital transformation.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "H1-101, Shriram Shankari Towers",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9600653863",
                contactType: "customer service",
                email: "info@altamentis.in",
                availableLanguage: ["English"],
              },
              sameAs: [],
              foundingLocation: {
                "@type": "Place",
                name: "Chennai, India",
              },
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: 12.8933,
                  longitude: 80.1472,
                },
              },
              knowsAbout: [
                "SAP S/4HANA",
                "SAP BTP",
                "Agentic AI",
                "Enterprise Digital Transformation",
                "SAP Consulting",
              ],
            }),
          }}
        />
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
