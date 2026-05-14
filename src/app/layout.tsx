import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FX Clearing Hub | Stable Payment Infrastructure for High-Risk Merchants',
  description: 'Reliable payment solutions for forex brokers, gaming platforms, and high-risk businesses. Secure, compliant, and scalable payment processing worldwide.',
  keywords: 'payment processing, high-risk merchants, forex payments, gaming payments, crypto payments, merchant accounts, payment gateway, secure payments, compliant payments',
  authors: [{ name: 'FX Clearing Hub' }],
  creator: 'FX Clearing Hub',
  publisher: 'FX Clearing Hub',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fxclearinghub.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FX Clearing Hub | Stable Payment Infrastructure for High-Risk Merchants',
    description: 'Reliable payment solutions for forex brokers, gaming platforms, and high-risk businesses. Secure, compliant, and scalable payment processing worldwide.',
    url: 'https://fxclearinghub.com',
    siteName: 'FX Clearing Hub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FX Clearing Hub - Payment Solutions for High-Risk Merchants',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FX Clearing Hub | Stable Payment Infrastructure for High-Risk Merchants',
    description: 'Reliable payment solutions for forex brokers, gaming platforms, and high-risk businesses.',
    images: ['/og-image.jpg'],
    creator: '@fxclearinghub',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FX Clearing Hub",
              "url": "https://fxclearinghub.com",
              "logo": "https://fxclearinghub.com/logo.png",
              "description": "Stable Payment Infrastructure for High-Risk Merchants",
              "foundingDate": "2024",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "email": "support@fxclearinghub.com"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global"
              },
              "sameAs": [
                "https://www.linkedin.com/company/fx-clearing-hub",
                "https://twitter.com/fxclearinghub"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Payment Solutions",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "High-Risk Merchant Accounts",
                      "description": "Secure merchant accounts for high-risk industries"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Forex Payment Processing",
                      "description": "Specialized payment processing for forex brokers"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gaming Payment Solutions",
                      "description": "Payment solutions for online gaming platforms"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}