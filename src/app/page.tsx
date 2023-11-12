'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.scss'
import { useAppSelector, useAppDispatch } from '@/redux/hook';
import { openModal, closeModal } from "@/redux/features//modalSlice";
import Modal from './components/modal/page';




  
export default function MainPage() {

  const dispatch = useAppDispatch();
  
  const modal = useAppSelector((state: { modal: any; }) => state.modal);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1); 
  const handleCloseModal = () => {
    dispatch(closeModal());
    setSelectedCardIndex(-1);
  };
  
  const onShowCardClick = (cardData: { title: any; skills: any; image: any; imageAlt: any; link: any; index: number;}) => {
    dispatch(openModal({
      index: cardData.index,
      title: cardData.title,
      skills: cardData.skills,
      image: cardData.image,
      imageAlt: cardData.imageAlt,
      link: cardData.link,
    }),
    )
  };
  
  const handleCardClick = (cardData: { title: any; skills: any; image: any; imageAlt: any; link: any; index: number }) => {
    setSelectedCardIndex(cardData.index);
    onShowCardClick(cardData);
  };
  return(
    <main>
      <section className={styles.realisations}>
        <div className={styles.borderLg}></div>
        <h1>Conception et réalisation de contenu web selon vos besoins,
          rédaction de contenu, optimisation SEO,
            référencement naturel, designs élégants et étude de projets
             personnalisés.</h1>
        <div  id="techno" className={styles.border}></div>
        <h2>Les technologies web innovantes que je met à votre dispotion.</h2>
        <p>Avec une approche qui repose sur la simplicité et l&apos;efficacité,
           garantissant des sites web élégants et performants. Je vous 
           accompagne dans la réalisation de vos projets, offrant une excellente
           expérience utilisateur. Mon savoir-faire me permet de créer
            des sites web réactifs, séduisants et parfaitement adaptés 
            à vos besoins.
        </p>
        <div className={styles.borderSmall}></div>
        <h3>Un exemple de réalisation avec <a href="https://portefolio-lacour-alexandre.vercel.app/">ce site</a></h3>  
        {modal.isOpen && (
        <Modal
        params={{
          index: modal.cardIndex,
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
            className={`${styles.showCard} ${selectedCardIndex === 1 ? 'cardCollapser' : ''}`}
            onClick={() => handleCardClick({
              index: 1,
              title: "Compétences HTML",
              skills: [
                "HTML",
                "CSS",
                "JS",
                "NextJS/React"
              ],
              image: [
                "/pfnext.webp",
                "/HTML.webp",
                "/CSS.webp",
                "/JS.webp",
                "/NEXT.webp",
              ],
              imageAlt: "Panel de compétence liées au développement web",
              link: "https://portefolio-lacour-alexandre.vercel.app/",
            })}
          >
            <Image 
              src="/pfnext.webp" 
              className={styles.showCardImg}
              alt="image et lien vers un site portefolio en next js html et css"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
          
          
        </div>
        <div id="SEO" className={styles.border}></div>
        <h2>Des audit de sites afin de vous proposer des axes d&apos;amélioration </h2>
        <p>Grâce a un audit approfondi j&apos;optimise les sites et 
          leur contenu afin d&apos;améliorer le référencement des moteurs de recherche,
          améliorant ainsi les nombres de vues. Il est également possible de 
          raffraîchir des pages existantes en remaniant les textes et l&apos;accessibilité
        </p>
        <div className={styles.borderSmall}></div>
        <h3>Un exemple de réalisation avec <a href="https://akalabete.github.io/akalabete-github.io/">ce site</a></h3>
        
        <div className={styles.SEOContainer}>
          <div 
            className={styles.showCard}
            onClick={() => handleCardClick({
              index: 2,
              title: "Compétences SEO",
              skills: [
                "Optimisation on-page",
                "Recherches de mots-clés pertinents",
                "Normes d'accessibilité web(WCAG)",
                "Optimisation de la vitesse de chargement"
              ],
              image: [
                "/exempleseo.webp",
                "/SEO.webp",
                "/redactionSEO.webp",
                "/accessibilityIconSet.webp",
                "/optimisation.webp",
              ],
              imageAlt: "Panel de compétences liées au SEO et aux bonnes pratiques du développement web",
              link: 'https://akalabete.github.io/akalabete-github.io/',
            })}
          >
            <Image 
              src="/exempleseo.webp" 
              className={styles.showCardImg}
              alt="image représentant une analyse SEO"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
        </div>
      </section>
      <section id="About" className={styles.contacts}>
      <div className={styles.border}></div>
        <h2>Je suis disponible pour vous aider à réaliser vos projets.</h2>
        <div className={styles.contactsContainer}>
          <div className={styles.presentationContainer}>
            <p className={styles.presParagraph}>En tant que développeur web junior, je m&apos;appuie sur
               ma formation d&apos;intégrateur web dispensée par <a href="https://openclassrooms.com/fr/">Open Classrooms</a> afin de vous proposer des 
               solutions pratiques et esthétiques pour vos projets en 
               ligne. Mon objectif est de créer des sites web fonctionnels
                et élégants, en mettant l&apos;accent sur la simplicité et 
                l&apos;utilisabilité.
            </p>

            <p className={styles.presParagraph}>Que ce soit pour un site personnel, une application ou
              tout autre projet en ligne, je suis là pour vous 
              accompagner dans la réalisation de vos idées. 
              Mon engagement est de mettre en œuvre mes compétences 
              pour concrétiser votre vision sur internet.
            </p>
            
          </div>
        </div>
      </section>
    </main>
  )
  
}

 /*
        <a href="https://portefolio-lacour-alexandre.vercel.app/">
          <Image 
              src="/pfnext.webp" 
              className={styles.siteExemple}
              alt="image représentant la technologie Hyper Text Markup Language alias HTML"
              height="200"
              width="300"
              style={{objectFit:"cover",objectPosition:"center"}}
              priority
            />
        </a>
        
        <div 
            className={`${styles.showCard} ${selectedCardIndex === 1 ? 'cardCollapser' : ''}`}
            onClick={() => handleCardClick({
              index: 1,
              title: "Compétences HTML",
              skills: [
                "Structure sémantique aux normes",
                "Utilisation de balises HTML",
                "Création de formulaires",
                "Mise à jour et maintenance",
                "Intégration de ressources externes"
              ],
              image: [
                "/html.webp",
                "/structure.webp",
                "/balises.jpg",
                "/form.webp",
                "/maintenance.webp",
                "/gitmerge.webp"
              ],
              imageAlt: "Exemple illustrant la pratique du HTML",
              link: "https://github.com/Akalabete/projet_booki",
            })}
          >
            <Image 
              src="/HTML.webp" 
              className={styles.showCardImg}
              alt="image et lien vers un site portefolio en next js html et css"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
          <div 
            className={styles.showCard}
            onClick={() => onShowCardClick({
              index: 2,
              title: "Compétences CSS",
              skills: [
                "Maîtrise des sélecteurs CSS",
                "Mise en page display flex ou grid",
                "Styles d'animation CSS",
                "Utilisation de police et typographies",
                "Préprocesseur CSS (SASS, SCSS)",
                "Méthodologie CSS(BEM)"
              ],
              image:[
                "/CSS.webp",
                "/HTML.webp",
                "/CSS.webp",
                "/JS.webp",
                "/NEXT.webp",
                "/SEO.webp",
                "/redactionSEO.webp"
              ],
              imageAlt: "Exemple illustrant la pratique du CSS",
              link: 'https://github.com/Akalabete/Ohmyfood',
            })}
          >
            <Image 
              src="/CSS.webp" 
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
              index: 3,
              title: "Compétences JavaScript",
              skills: [
                "Javascript ES6",
                "Manipulation du DOM",
                "Evénement et gestion des événements",
                "Requêtes Fetch",
                "Intégration et utilisation d'API",
                "Manipulation de tableaux et chaîne de caractères"
              ],
              image: [
                "/JS.webp",
                "/HTML.webp",
                "/CSS.webp",
                "/JS.webp",
                "/NEXT.webp",
                "/SEO.webp",
                "/redactionSEO.webp"
              ],
              imageAlt: "Exemple illustrant la pratique du Javascript",
              link: 'https://github.com/Akalabete/Porte-folio-Sophie-BLUEL',
            })}
          >
            <Image 
              src="/JS.webp" 
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
              index: 4,
              title: "Compétences NextJS",
              skills: [
                "REACT",
                "Routage dynamique",
                "Gestionnaire d'état(REDUX)",
                "Rendu Côté client",
                "Pages dynamiques"
              ],
              image: [
                "/NEXT.webp",
                "/HTML.webp",
                "/CSS.webp",
                "/JS.webp",
                "/NEXT.webp",
                "/SEO.webp",
              ],
              imageAlt: "Exemple illustrant la pratique du NextJS",
              link: 'https://portefolio-lacour-alexandre.vercel.app/',
            })}
          >
            <Image 
              src="/NEXT.webp" 
              className={styles.showCardImg}
              alt="image représentant la technologie Next Javascript alias NEXT"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
        </div>
        <a href="https://akalabete.github.io/akalabete-github.io/">
          <Image 
              src="/exempleSEO.webp" 
              className={styles.siteExemple}
              alt="image et lien vers un site, exemple d'optimisation SEO"
              height="200"
              width="300"
              style={{objectFit:"cover",objectPosition:"center"}}
              priority
            />
        </a>
        <div className={styles.borderSmall}></div>
        <div className={styles.SEOContainer}>
          <div 
            className={styles.showCard}
            onClick={() => onShowCardClick({
              index: 5,
              title: "Compétences SEO",
              skills: [
                "Optimisation on-page",
                "Optimisation des images",
                "Recherches de mots-clés pertinents",
                "Optimisation de la vitesse de chargement"
              ],
              image: [
                "/SEO.webp",
                "/HTML.webp",
                "/CSS.webp",
                "/JS.webp",
                "/NEXT.webp",
              ],
              imageAlt: "Exemple illustrant les bonnes pratiques SEO",
              link: 'https://akalabete.github.io/akalabete-github.io/',
            })}
          >
            <Image 
              src="/SEO.webp" 
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
              index: 6,
              title: "Rédaction SEO",
              skills: [
                "Rédaction incluant des mots-clés pertinents",
                "Contenu de qualité, engageant pour les utilisateurs",
                "Création de titre et description méta efficaces",
                "Liens internes et externes"
              ],
              image: [
                "/redactionSEO.webp",
                "/HTML.webp",
                "/CSS.webp",
                "/JS.webp",
                "/NEXT.webp",
              ],
              imageAlt: "Exemple illustrant un contenu web adapté",
              link: 'https://github.com/Akalabete/akalabete-github.io',
            })}
          >
            <Image 
              src="/redactionSEO.webp" 
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
              index: 7,
              title: "Accessibilité",
              skills: [
                "Normes d'accessibilité web(WCAG)",
                "Utilisation de couleurs accessibles",
                "Navigation clavier",
                "Textes alternatifs"
              ],
              image: [
                "/accessibilityIconSet.webp",
                "/HTML.webp",
                "/CSS.webp",
                "/JS.webp",
                "/NEXT.webp",
              ],
              imageAlt: "Exemple illustrant les normes d'accessibilité",
              link: 'https://github.com/Akalabete/akalabete-github.io',
            })}
          >
            <Image 
              src="/accessibilityIconSet.webp" 
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
              index: 8,
              title: "Audit de sites",
              skills: [
                "Utilisation d'outils d'audit",
                "Création de rapports d'optimisation",
                "Proposition d'axes d'amélioration",
                "Suivi de traffic"
              ],
              image: [
                "/optimisation.webp",
                "/HTML.webp",
                "/CSS.webp",
                "/JS.webp",
                "/NEXT.webp",
              ],
              imageAlt: "Exemple illustrant un outil d'audit",
              link: 'https://github.com/Akalabete/akalabete-github.io',
            })}
          >
            <Image 
              src="/optimisation.webp" 
              className={styles.showCardImg}
              alt="image représentant un gain de 100% de performances lors d'une analyse de site"
              height="200"
              width="200"
              style={{objectFit:"contain",objectPosition:"center"}}
              priority
            />
          </div>
        </div>
        */