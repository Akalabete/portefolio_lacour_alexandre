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
              alt="image représentant la technologie Hyper Text Markup Language alias HTML"
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
              alt="image représentant la technologie Cascading Stylesheet  alias CSS"
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
              alt="image représentant la technologie Javascript alias JS"
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
              alt="image représentant la technologie Next Javascript alias NEXT"
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
              alt="image représentant une analyse SEO"
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
              alt="image représentant une rédaction de contenu SEO"
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
              alt="image représentant unpannel de signaux d'accessibilité"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
          <div className={styles.showCard}>
            <Image 
              src="/optimisation.png" 
              className={styles.showCardImg}
              alt="image représentant un gain de 100% de performances lors d'une analyse de site"
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
        <div className={styles.contactsContainer}>
          <div className={styles.presentationContainer}>
            <p>Développeur indépendant, spécialisé dans le front-end,
              je vous propose des solutions innovantes et design pour
                vos contenus web.</p>
          </div>
          <div className={styles.contactInfoContainer}>
            <p><strong>mél: </strong>lacour_alexandre@proton.me</p>
            <p><strong>tél: </strong>06 95 23 81 26</p>
            <p><strong>git: </strong>https://github.com/Akalabete</p>
          </div>
        </div>
      </section>
    </main>
  )
  
}