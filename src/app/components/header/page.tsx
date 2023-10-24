import Image from 'next/image'
import styles from './page.module.scss'


export default function Header() {

    return(
        <div className={styles.header}>
            <div className={styles.selfPic}>
                <Image 
                src="https://picsum.photos/200" 
                className={styles.coverImage}
                alt="Photo de l'auteur du site"
                height="200"
                width="200"
                style={{objectFit:"cover",objectPosition:"center left"  }}
                priority
                />
            </div>
            <div className={styles.headerTitle}>
                <p className={styles.titles}><strong>LACOUR Alexandre</strong></p>
                <p className={styles.subTitles}>développeur web</p>
            </div>
            <div className={styles.nav}>
                <nav className={styles.navElements}>
                    <ul>
                        <li className={styles.liElementOne}>Technologies</li>
                        <li className={styles.liElementTwo}>SEO</li>
                        <li className={styles.liElementThree}>A propos</li>
                        <li className={styles.liElementFour}>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
    
}