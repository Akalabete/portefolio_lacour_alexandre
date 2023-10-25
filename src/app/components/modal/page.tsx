'use client'

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react';
import styles from './page.module.scss';
import Image from 'next/image'

/*interface ModalProps {
    isOpen: boolean;
    title: string;
    skills: string [];
    image: string;
    imageAlt: string;
    
    onClose: () => void;
}*/
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
                        {skills.map((skill: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, index: Key | null | undefined) => (
                            <p key={index}>{skill}</p>
                        ))}     
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