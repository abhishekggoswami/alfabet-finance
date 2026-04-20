import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display, Pinyon_Script, Great_Vibes } from 'next/font/google'
import './globals.css'
import WhatsAppButton from '@/components/whatsapp-button'
import QuickConnectPopup from '@/components/quick-connect-popup'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
})

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-signature',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
})

export const metadata: Metadata = {
  title: 'Alfabet Finance | Expert Financial Education & Stock Market Coaching by Hridyesh Mishra',
  description: 'Master personal finance, stock market investing, and options trading with Alfabet Finance. Learn from Ex SEBI Registered Investment Advisor Hridyesh Mishra. Transform your financial future with proven courses and expert mentorship.',
  keywords: 'financial education, stock market courses, options trading, technical analysis, personal finance coaching, wealth building, investment education India, NISM, SEBI certification, research analyst',
  metadataBase: new URL('https://alfabetfinance.com'),
  openGraph: {
    title: 'Alfabet Finance | Transform Your Financial Future',
    description: 'Expert financial coaching and online courses for stock market investing, technical analysis, and wealth building in India.',
    type: 'website',
    url: 'https://alfabetfinance.com',
    siteName: 'Alfabet Finance',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Alfabet Finance - Financial Education Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alfabet Finance | Expert Financial Education',
    description: 'Learn stock market investing and financial planning from Ex SEBI Registered Investment Advisor',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: 'https://alfabetfinance.com',
  },
}

export const viewport = {
  themeColor: '#1B5E5E',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="theme-color" content="#1B5E5E" />
        <meta name="msapplication-TileColor" content="#1B5E5E" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://alfabetfinance.com" />
        
        {/* Schema Markup for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Alfabet Finance',
              url: 'https://alfabetfinance.com',
              logo: 'https://alfabetfinance.com/logo.png',
              description: 'Expert financial education and coaching platform for stock market investing and wealth building in India',
              founder: {
                '@type': 'Person',
                name: 'Hridyesh Mishra',
                jobTitle: 'Founder & Ex SEBI Registered Investment Advisor',
              },
              sameAs: [
                'https://instagram.com/learnwithalfabetfinance',
                'https://youtube.com/@alfabetfinance',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                availableLanguage: 'en',
              },
            }),
          }}
        />

        {/* Schema Markup for EducationalOrganization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'Alfabet Finance',
              url: 'https://alfabetfinance.com',
              description: 'Online financial education platform offering stock market investing, options trading, and wealth building courses',
              foundingDate: '2024',
              founder: {
                '@type': 'Person',
                name: 'Hridyesh Mishra',
              },
              areaServed: 'IN',
              educationLevel: 'Professional Development',
            }),
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${playfairDisplay.variable} ${pinyonScript.variable} ${greatVibes.variable} font-sans antialiased`}>
        {children}
        <WhatsAppButton />
        <QuickConnectPopup />
      </body>
    </html>
  )
}
