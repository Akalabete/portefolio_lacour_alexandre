'use client'

import styles from './page.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import CliquableWidgets from '../cliquablewidget/page'
    
export default function Footer() {
    return (
        <footer className={styles.footer}>
        
            <div className={styles.footerItem}>
                <p>©️ Dev&apos;your synergy</p>
            </div>
            <CliquableWidgets />
         </footer> 
    )

}