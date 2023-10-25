'use client'

import styles from './page.module.scss';
import Image from 'next/image'

interface ModalProps {
    params: {
        isOpen: boolean;
        title: string;
        skills: string [];
        image: string;
        imageAlt: string;
        onClose: () => void;
    }
    
    
    
}
export default function Modal({params}:ModalProps){

    if (!params.isOpen) {
        return null;
    }
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.modalContainer}>
                    <div className={styles.modalInfos}>
                        <h2>{params.title}</h2>
                        {params.skills.map((skill, index) => (
                            <p key={index}>{skill}</p>
                        ))}     
                    </div>
                    <div className={styles.modalImage}>
                        <Image 
                            src={params.image}
                            className={styles.showCardImg}
                            alt={params.imageAlt}
                            height="200"
                            width="200"
                            style={{objectFit:"contain",objectPosition:"center"}}
                        />

                    </div>
                </div>
                <button className={styles.button} onClick={params.onClose}>Ok !</button>
            </div>
        </div>
    )
}