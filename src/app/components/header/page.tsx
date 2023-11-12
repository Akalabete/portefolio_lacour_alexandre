'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import CliquableWidgets from '../cliquablewidget/page';
import Link from 'next/link';

  
export default function Header() {
    
    return(
        <div className={styles.header}>
            <div className={styles.selfPic}>
                <Image 
                src="/photo.webp" 
                className={styles.coverImage}
                alt="Photo de l'auteur du site"
                height="200"
                width="200"
                style={{objectFit:"cover",objectPosition:"top"  }}
                priority
                />
            </div>
            <div>
                <h2 className={styles.titles}>LACOUR Alexandre</h2>
                <h3 className={styles.subTitles}>développeur web</h3>
                <CliquableWidgets />           
            </div>
            <div className={styles.nav}>
                <nav className={styles.navElements}>
                    <ul>
                        <li className={styles.liElementOne}>
                            <Link href="#techno">
                                Technologies
                            </Link>
                        </li>
                        <li className={styles.liElementTwo}>
                            <Link href="#SEO">
                                SEO
                            </Link>
                        </li>
                        <li className={styles.liElementThree}>
                            <Link href="#About">
                                A&nbsp;propos
                            </Link>
                        </li>
                        <li className={styles.liElementFour}>
                            <Link href="#contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )    
}
