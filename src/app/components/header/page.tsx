'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import CliquableWidgets from '../cliquablewidget/page';



  
export default function Header() {
    
    return(
        <div className={styles.header}>
            <div className={styles.selfPic}>
                <Image 
                src="/photo.jpg" 
                className={styles.coverImage}
                alt="Photo de l'auteur du site"
                height="200"
                width="200"
                style={{objectFit:"cover",objectPosition:"top"  }}
                priority
                />
            </div>
            <div className={styles.headerTitle}>
                <h2 className={styles.titles}>LACOUR Alexandre</h2>
                <h3 className={styles.subTitles}>développeur web</h3>
                <CliquableWidgets />
                
            </div>
            <div className={styles.nav}>
                <nav className={styles.navElements}>
                    <ul>
                        <li className={styles.liElementOne}>Technologies</li>
                        <li className={styles.liElementTwo}>SEO</li>
                        <li className={styles.liElementThree}>A&nbsp;propos</li>
                        <li className={styles.liElementFour}>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
    
}
