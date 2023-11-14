'use client'

import styles from './page.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';

const tooltipStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: 'darkred',
    padding: '5px',
    borderRadius: '10px',
    display: 'block',
    'white-space': 'nowrap',

  };


    
export default function CliquableWidgets() {
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
            navigator.clipboard.writeText('lacour_alexandre@hotmail.com');
            } else if (argument === "faGit") {
            navigator.clipboard.writeText('https://github.com/Akalabete');
            } else if (argument === "faLinked") {
            navigator.clipboard.writeText('www.linkedin.com/in/lacour-alexandre');
            } 
            setTooltipText('Copié !');
            setIsCopied(true);
            setTimeout(() => {
            setTooltipText('Cliquez pour copier');
            setIsCopied(false);
            }, 500);
        }
    }
    return (
        <div className={styles.faContainer}>
                    
            <div
                className={styles.tooltipenvelope}
                onMouseEnter={() => handleIconMouseEnter('faEnvelop')}
                onMouseLeave={handleIconMouseLeave}
                >
                <FontAwesomeIcon
                    aria-hidden="false"
                    height="20px"
                    width="20px"
                    className={styles.icon}
                    icon={faEnvelopeOpen}
                    onClick={() => handleIconClick("faEnvelop")}
                    tabIndex={0}
                    role="tooltip"
                    aria-label='cliquez pour copier l&apos;adresse mail dans le presse-papier'
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
                    aria-hidden="false"
                    className={styles.icon}
                    height="20px"
                    width="20px"
                    icon={faGithub}
                    onClick={() => handleIconClick("faGit")}
                    tabIndex={0}
                    role="tooltip"
                    aria-label='cliquez pour copier le lien vers le compte github'
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
                    aria-hidden="false"
                    className={styles.icon}
                    height="20px"
                    width="20px"
                    icon={faLinkedin} 
                    onClick={() => handleIconClick("faLinked")}
                    tabIndex={0}
                    role="tooltip"
                    aria-label='cliquez pour copier le lien vers le profil linkedin'
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
    )
}