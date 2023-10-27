'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

const tooltipStyles = {
    backgroundColor: 'black',
    color: 'darkred',
    padding: '5px',
    borderRadius: '10px',
    display: 'block',
    'white-space': 'nowrap',

  };

  
export default function Header() {
    const [tooltipText, setTooltipText] = useState('Cliquez pour copier');
    const [isCopied, setIsCopied] = useState(false);
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    const [activeIcon, setActiveIcon] = useState(null);
    const handleIconMouseEnter = (icon:any) => {
        setActiveIcon(icon);
        setTooltipVisible(true);
    };
  
    const handleIconMouseLeave = () => {
        setActiveIcon(null);
        setTooltipVisible(false);
    };
    const handleIconClick = (argument: string) => {
        if (!isCopied) {
          if (argument ==="faEnvelop") {
            navigator.clipboard.writeText('votre@email.com');
          } else if (argument === "faGit") {
            navigator.clipboard.writeText('git@gmail.com');
          } else if (argument === "faLinked") {
            navigator.clipboard.writeText('linkedin@gmail');
          }
          
          setTooltipText('Copié !');
          setIsCopied(true);
          setTimeout(() => {
            setTooltipText('Cliquez pour copier');
            setIsCopied(false);
          }, 500);
        }
      };
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
                <div className={styles.faContainer}>
                
                    <div
                        className={styles.tooltipenvelope}
                        onMouseEnter={() => handleIconMouseEnter('faEnvelop')}
                        onMouseLeave={handleIconMouseLeave}
                        >
                        <FontAwesomeIcon
                            height="20px"
                            width="20px"
                            icon={faEnvelopeOpen}
                            onClick={() => handleIconClick("faEnvelop")}
                        />
                        {isTooltipVisible && activeIcon === 'faEnvelop' && (
                        <div
                            className={`tooltiptext ${isCopied ? 'active' : ''}`}
                            style={tooltipStyles}
                        >
                            {tooltipText}
                        </div> 
                        )}        
                    </div>
                    <div
                        className={styles.tooltipgit}
                        onMouseEnter={() => handleIconMouseEnter('faGit')}
                        onMouseLeave={handleIconMouseLeave}
                        >
                        <FontAwesomeIcon 
                            className={styles.tooltip}
                            height="20px"
                            width="20px"
                            icon={faGithub}
                            onClick={() => handleIconClick("faGit")}
                            />
                            {isTooltipVisible && activeIcon === 'faGit' && (
                            <div
                            className={`tooltiptext ${isCopied ? 'active' : ''}`}
                            style={tooltipStyles}
                        >
                            {tooltipText}
                        </div> 
                            )}        
                    </div>
                    <div
                        className={styles.tooltiplink}
                        onMouseEnter={() => handleIconMouseEnter('faLink')}
                        onMouseLeave={handleIconMouseLeave}
                        >                 
                        <FontAwesomeIcon 
                            className={styles.tooltip}
                            height="20px"
                            width="20px"
                            icon={faLinkedin} 
                            onClick={() => handleIconClick("faLinked")}
                            />
                            {isTooltipVisible && activeIcon === 'faLink' && (
                           <div
                            className={`tooltiptext ${isCopied ? 'active' : ''}`}
                            style={tooltipStyles}
                        >
                            {tooltipText}
                        </div>   
                            )}      
                    </div>
                </div>
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