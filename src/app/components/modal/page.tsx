'use client'

import styles from './page.module.scss';
import Image from 'next/image'

interface ModalProps {
    isOpen: boolean;
    title: string;
    skills: [];
    image: string;
    imageAlt: string;
    
    onClose: () => void;
}
export default function Modal({isOpen, title, skills, image, imageAlt, onClose}:ModalProps){

    if (!isOpen) {
        return null;
    }
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalContainer}>
                    <div className={styles.modalInfos}>
                        <h2>{title}</h2>
                        <p>{}</p>
                    </div>
                    <div className={styles.modalImage}>
                        <Image 
                            src={image}
                            className={styles.showCardImg}
                            alt={imageAlt}
                            height="200"
                            width="200"
                            style={{objectFit:"contain",objectPosition:"center"}}
                        />

                    </div>
                </div>
                <button className={styles.button} onClick={onClose}>Ok !</button>
            </div>
        </div>
    )
}