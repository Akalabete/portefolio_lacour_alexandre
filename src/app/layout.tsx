import type { Metadata } from 'next';
import { Providers } from "@/redux/provider";
import Header from '../app/components/header/page';
import Footer from '../app/components/footer/page';
import styles from './page.module.scss';
import GoogleAnalytics from "./components/googleAnalytics/googleAnalytics";


export const metadata: Metadata = {
  title: 'Porte Folio developpeur web LACOUR Alexandre',
  description: 'Présentation de travaux numériques et compétences associées',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
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
