import Image from 'next/image'
import styles from './page.module.scss'


export default function MainPage() {

  return(
    <main>
      <section className={styles.realisations}>
        <h1>Conception et réalisation de contenu web selon vos besoins,
          rédaction de contenu, optimisation SEO,
            référencement naturel, designs élégants et étude de projets
             personnalisés.</h1>
        <h2>Par Dev&apos;Your Synergy</h2>
        <h2>Les technologies web innovantes que Dev&apos;Your Synergy met à votre dispotion.</h2>
        <div className={styles.technologiesContainer}>
          
          <div className={styles.showCard}>
            <Image 
              src="/HTML.png" 
              className={styles.showCardImg}
              alt="Photo de l'auteur du site"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
          <div className={styles.showCard}>
            <Image 
              src="/CSS.png" 
              className={styles.showCardImg}
              alt="Photo de l'auteur du site"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
          <div className={styles.showCard}>
            <Image 
              src="/JS.png" 
              className={styles.showCardImg}
              alt="Photo de l'auteur du site"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
          <div className={styles.showCard}>
            <Image 
              src="/NEXT.png" 
              className={styles.showCardImg}
              alt="Photo de l'auteur du site"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
          
        </div>
        <h2>Dev&apos;Your Synergy audit vos sites et vous propose des axes d&apos;amélioration </h2>
        <div className={styles.SEOContainer}>
          <div className={styles.showCard}>
            <Image 
              src="/SEO.png" 
              className={styles.showCardImg}
              alt="Image PNG de fr.pngtree.com"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
          <div className={styles.showCard}>
            <Image 
              src="/redactionSEO.png" 
              className={styles.showCardImg}
              alt="Image PNG de fr.pngtree.com"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
          <div className={styles.showCard}>
            <Image 
              src="/accessibilityIconSet.png" 
              className={styles.showCardImg}
              alt="Image PNG de fr.pngtree.com"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
        </div>
      </section>
       
      <section className={styles.contacts}>
        <h2>Dev&apos;Your Synergy est à votre écoute pour tous vos projets.</h2>
        <div className={styles.presentationContainer}>
          
        </div>
        <div className={styles.contactInfoContainer}></div>
      </section>
    </main>
  )
  
}