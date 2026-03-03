import { Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import './globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://johnkanyi.com'), // PLACEHOLDER URL - Update before final prod push
  title: {
    template: '%s | John Kanyi',
    default: 'John Kanyi | International Grants and Business Development Leader',
  },
  description: 'Senior Business Development and Grants Leader with 17+ years experience securing $100M+ annually across sub-Saharan Africa. Specialising in USAID, EU, and WHO funding.',
  keywords: ['John Kanyi', 'Grants Management', 'Business Development', 'USAID', 'NGO Consulting', 'Africa'],
  authors: [{ name: 'John Kanyi' }],
  creator: 'John Kanyi',
  publisher: 'John Kanyi',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://johnkanyi.com',
  },
  openGraph: {
    title: 'John Kanyi | International Grants and Business Development Leader',
    description: 'Senior Business Development and Grants Leader with 17+ years experience securing $100M+ managed annually across 5+ African countries.',
    url: 'https://johnkanyi.com',
    siteName: 'John Kanyi Portfolio',
    images: [
      {
        url: '/og-image.jpg', // NOTE: Must add public/og-image.jpg before launch
        width: 1200,
        height: 630,
        alt: 'John Kanyi - International Grants and Business Development Leader',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Kanyi | International Grants and Business Development Leader',
    description: 'Senior Business Development and Grants Leader securing $100M+ managed annually across 5+ African countries.',
    images: ['/og-image.jpg'], // NOTE: Must add public/og-image.jpg before launch
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Kanyi",
  jobTitle: "International Grants and Business Development Leader",
  url: "https://johnkanyi.com",
  sameAs: [
    "https://linkedin.com/in/john-kanyi-mba"
  ],
  alumniOf: "Insert University Name Here if Known",
  knowsAbout: ["Grants Management", "Business Development", "USAID Funding", "Non-Profit Leadership"]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} ${cormorant.variable} font-body`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-lightgrey">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
