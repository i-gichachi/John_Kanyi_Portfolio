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

export const metadata = {
  title: 'John Kanyi | Senior Grants and Business Development Leader',
  description: 'Senior Grants and Business Development Leader with over 17 years of experience securing and managing large-scale donor-funded programmes across sub-Saharan Africa.',
  keywords: [
    'grants management',
    'business development',
    'international development',
    'donor funding',
    'sub-Saharan Africa',
    'USAID',
    'remote work',
    'NGO consulting',
    'proposal development',
    'capacity building'
  ],
  authors: [{ name: 'John Kanyi' }],
  openGraph: {
    title: 'John Kanyi | Senior Grants and Business Development Leader',
    description: 'Senior Grants and Business Development Leader with over 17 years of experience securing and managing large-scale donor-funded programmes across sub-Saharan Africa.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Kanyi | Senior Grants and Business Development Leader',
    description: 'Senior Grants and Business Development Leader with over 17 years of experience securing and managing large-scale donor-funded programmes across sub-Saharan Africa.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} ${cormorant.variable} font-body`}>
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
