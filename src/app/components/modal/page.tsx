'use client'
import { useState } from 'react';
import styles from './page.module.scss';
import Image from 'next/image'

interface ModalProps {
    params: {
        index: number
        isOpen: boolean;
        title: string;
        skills: string [];
        image: string[];
        imageAlt: string;
        link: string;
        onClose: () => void;
    }   
}

export default function Modal({params}:ModalProps){
    const [hoverIndex, setHoverIndex] = useState(-1);
    const handleMouseOut = () => {
        setHoverIndex(-1)
        params.index= -1;
      }
    if (!params.isOpen) {
        return null;
    }
    return (
        <div className={styles.modalOverlay} onClick={params.onClose}>
            <div role="dialog" className={styles.modal} onMouseOut={handleMouseOut}>
                <div className={styles.modalContainer}>
                    <div className={styles.modalInfos}>
                    <h2 className={styles.modalTitle}>{params.title}</h2>
                        {params.skills.map((skill, index) => (
                            <p 
                                key={index}
                                onMouseEnter={() => setHoverIndex(index)}
                            >
                                {skill}
                            </p>
                        ))}
                        {params.link !== '' ?
                            <p><strong>Exemple: </strong><a href={params.link}>{params.link}</a></p>
                            : '' 
                        }       
                    </div>
                    <div className={styles.modalImage}>
                        <Image 
                            src={params.image[hoverIndex + 1]}
                            className={styles.showCardImg}
                            alt={params.imageAlt}
                            height="200"
                            width="200"
                            style={{objectFit:"contain",objectPosition:"center"}}
                        />
                    </div>
                </div>
                <button className={styles.button} onClick={params.onClose}>Fermer</button>
            </div>
        </div>
    )
}