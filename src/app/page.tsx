'use client';

import Image from 'next/image'
import styles from './page.module.scss'
import { useAppSelector, useAppDispatch } from '@/redux/hook';
import { openModal, closeModal } from "@/redux/features//modalSlice";
import Modal from './components/modal/page';




  
export default function MainPage() {

  const dispatch = useAppDispatch();
  
  const modal = useAppSelector((state: { modal: any; }) => state.modal);
  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const onShowCardClick = (cardData: { title: any; skills: any; image: any; imageAlt: any; link: any;}) => {
    dispatch(openModal({
      title: cardData.title,
      skills: cardData.skills,
      image: cardData.image,
      imageAlt: cardData.imageAlt,
      link: cardData.link,
    })
    )
  };
  
  return(
    <main>
      <section className={styles.realisations}>
        <h1>Conception et réalisation de contenu web selon vos besoins,
          rédaction de contenu, optimisation SEO,
            référencement naturel, designs élégants et étude de projets
             personnalisés.</h1>
        <h2>Par Dev&apos;Your Synergy</h2>
        <h2>Les technologies web innovantes que Dev&apos;Your Synergy met à votre dispotion.</h2>
        {modal.isOpen && (
        <Modal
        params={{
          isOpen: modal.isOpen,
          title: modal.title,
          skills: modal.skills,
          image: modal.image,
          imageAlt: modal.imageAlt,
          onClose: handleCloseModal,
          link: modal.link
        }}
      />
      )} 
        <div className={styles.technologiesContainer}>
          
          <div 
            className={styles.showCard}
            onClick={() => onShowCardClick({
              title: "Compétences HTML",
              skills: [
                "Structure sémantique aux normes",
                "Utilisation de balises HTML",
                "Création de formulaires",
                "Mise à jour et maintenance",
                "Intégration de ressources externes"
              ],
              image: "/HTML.png",
              imageAlt: "Exemple illustrant la pratique du HTML",
              link: "https://www.sample.smp",
            })}
          >
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
          <div 
            className={styles.showCard}
            onClick={() => onShowCardClick({
              title: "Compétences CSS",
              skills: [
                "Maîtrise des sélecteurs CSS",
                "Mise en page display flex ou grid",
                "Styles d'animation CSS",
                "Utilisation de police et typographies",
                "Préprocesseur CSS (SASS, SCSS)",
                "Méthodologie CSS(BEM)"
              ],
              image: "/CSS.png",
              imageAlt: "Exemple illustrant la pratique du CSS",
              link: '',
            })}
          >
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
          <div 
            className={styles.showCard}
            onClick={() => onShowCardClick({
              title: "Compétences JavaScript",
              skills: [
                "Javascript ES6",
                "Manipulation du DOM",
                "Evénement et gestion des événements",
                "Requêtes Fetch",
                "Intégration et utilisation d'API",
                "Manipulation de tableaux et chaîne de caractères"
              ],
              image: "/JS.png",
              imageAlt: "Exemple illustrant la pratique du Javascript",
              link: '',
            })}
          >
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
          <div 
            className={styles.showCard}
            onClick={() => onShowCardClick({
              title: "Compétences NextJS",
              skills: [
                "REACT",
                "Routage dynamique",
                "Gestionnaire d'état(REDUX)",
                "Rendu Côté client",
                "Pages dynamiques"
              ],
              image: "/NEXT.png",
              imageAlt: "Exemple illustrant la pratique du NextJS",
              link: '',
            })}
          >
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
          <div 
            className={styles.showCard}
            onClick={() => onShowCardClick({
              title: "Compétences SEO",
              skills: [
                "Optimisation on-page",
                "Optimisation des images",
                "Recherches de mots-clés pertinents",
                "Optimisation de la vitesse de chargement"
              ],
              image: "/SEO.png",
              imageAlt: "Exemple illustrant les bonnes pratiques SEO",
              link: '',
            })}
          >
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
          <div 
            className={styles.showCard}
            onClick={() => onShowCardClick({
              title: "Rédaction SEO",
              skills: [
                "Rédaction incluant des mots-clés pertinents",
                "Contenu de qualité, engageant pour les utilisateurs",
                "Création de titre et description méta efficaces",
                "Liens internes et externes"
              ],
              image: "/redactionSEO.png",
              imageAlt: "Exemple illustrant un contenu web adapté",
              link: '',
            })}
          >
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
          <div 
            className={styles.showCard}
            onClick={() => onShowCardClick({
              title: "Accessibilité",
              skills: [
                "Normes d'accessibilité web(WCAG)",
                "Utilisation de couleurs accessibles",
                "Navigation clavier",
                "Textes alternatifs"
              ],
              image: "/accessibilityIconSet.png",
              imageAlt: "Exemple illustrant les normes d'accessibilité",
              link: '',
            })}
          >
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
          <div 
            className={styles.showCard}
            onClick={() => onShowCardClick({
              title: "Audit de sites",
              skills: [
                "Utilisation d'outils d'audit",
                "Création de rapports d'optimisation",
                "Proposition d'axes d'amélioration",
                "Suivi de traffic"
              ],
              image: "/optimisation.png",
              imageAlt: "Exemple illustrant un outil d'audit",
              link: '',
            })}
          >
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
            <p>Développeur indépendant, valorisé par une formation d&apos;intégrateur
               web par <a href="#">Open Classrooms</a>
               , je vous propose des solutions 
               innovantes et design pour vos contenus web.</p>
          </div>
          <div className={styles.contactInfoContainer}>
            <p><strong>mél: </strong>lacour_alexandre@proton.me</p>
            <p><strong>tél: </strong>06 95 23 81 26</p>
            <p><strong>git: </strong>https://github.com/Akalabete</p>
            <p><strong>LinkedIn: </strong>www.linkedin.com/in/lacour-alexandre</p>
          </div>
        </div>
      </section>
    </main>
  )
  
}