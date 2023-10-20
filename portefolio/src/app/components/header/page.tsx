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
            <div className={styles.nav}>
                <nav className={styles.navElements}>
                    <ul>
                        <li className={styles.liElementOne}>1</li>
                        <li className={styles.liElementTwo}>2</li>
                        <li className={styles.liElementThree}>3</li>
                        <li className={styles.liElementFour}>4</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
    
}