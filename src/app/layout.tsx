import type { Metadata } from 'next';
import { Providers } from "@/redux/provider";
import Header from '../app/components/header/page';
import Footer from '../app/components/footer/page';
import styles from './page.module.scss';
import GoogleAnalytics from "./components/googleAnalytics/googleAnalytics";


const localBusiness = {
  localBusiness: {
    "@type": "LocalBusiness",
    name: "Dev'your Synergy",
    description: "développeur web indépendant",
    url: "https://lacouralexandre.tech",
    telephone: "0695238126",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 rue bel-air",
      addressLocality: "Saint aulaye",
      addressRegion: "Nouvelle acquitaine",
      postalCode: "24410",
      addressCountry: "France"
    },
  },
}


export const metadata: Metadata = {
  title: 'Porte Folio developpeur web LACOUR Alexandre',
  description: 'Présentation de travaux numériques et compétences associées',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Développeur Front-end','Next Js', 'React', 'JavaScript', 'HTML', 'CSS', 'Optimisation SEO'],
  authors: [{ name: 'Alexandre' }, { name: 'LACOUR', url: 'https://lacouralexandre.tech' }],
  creator: 'Alexandre LACOUR',
  publisher: 'Alexandre LACOUR',
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Porte Folio developpeur web LACOUR Alexandre',
    description: 'Présentation de travaux numériques et compétences associées',
    url: 'https://portefolio-lacour-alexandre.vercel.app/',
    siteName: 'PorteFolio de LACOUR Alexandre',
    images: [
      {
        url: '/photo.webp',
        width: 200,
        height: 200,
        alt: "Portrait de l'auteur du site"
      },
      {
        url: '/accessibilityIconSet.webp',
        width: 200,
        height: 200,
        alt: 'Image illustrant les différent symboles d&apos;accessibilité',
      },
      {
        url: '/CSS.webp',
        width: 200,
        height: 200,
        alt: 'logo css',
      },
      {
        url: '/exempleseo.webp',
        width: 200,
        height: 200,
        alt: 'Capture d&apos;écran d&apos;un site exemple en matière d&apos;exemple de traitement SEO',
      },
      {
        url: '/HTML.webp',
        width: 200,
        height: 200,
        alt: 'logo HTML',
      },
      {
        url: '/JS.webp',
        width: 200,
        height: 200,
        alt: 'logo JS',
      },
      {
        url: '/NEXT.webp',
        width: 200,
        height: 200,
        alt: 'Logo NEXT',
      },
      {
        url: '/optimisation.webp',
        width: 200,
        height: 200,
        alt: 'image representat un score de 100% en optimisation',
      },
      {
        url: '/pfnext.webp',
        width: 200,
        height: 200,
        alt: 'capture d&apos;écran d&apos;un site exemple de travail en html / css / js / next',
      },
      {
        url: '/redactionSEO.webp',
        width: 200,
        height: 200,
        alt: 'illustration à propos de rédaction SEO',
      },
      {
        url: '/SEO.webp',
        width: 200,
        height: 200,
        alt: 'illustration SEO',
      },
    ],
    locale: 'Fr',
    type: 'website',
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json">{JSON.stringify(localBusiness)}</script>
      </head>
      <body className={styles.body}>
      
        <Providers>
          <Header />
          <GoogleAnalytics />
            {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}


/* localBusiness: {
    "@type": "LocalBusiness",
    name: "Dev'your Synergy",
    description: "développeur web indépendant",
    url: "https://lacouralexandre.tech",
    telephone: "0695238126",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 rue bel-air",
      addressLocality: "Saint aulaye",
      addressRegion: "Nouvelle acquitaine",
      postalCode: "24410",
      addressCountry: "France"
    },
  }, */