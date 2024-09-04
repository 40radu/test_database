import React from 'react'
import styles from './_card-project.module.scss'
import ButtonDemo from '../Button/ButtonDemo'
import Link from 'next/link'
import image_project from '../../../../../public/image_project.png'
import Image from 'next/image'

function CardProject() {
    return (
        <section className={styles.card_wrapper}>

            <Image className={styles.image} src={image_project} alt='image-project' />

            <div className={styles.text_wrapper}>
                <h3>Project 1</h3>
                <ul>
                    <li>html</li>
                    <li>react</li>
                </ul>
            </div>
            <Link href={'#'}>
                <ButtonDemo />
            </Link>
        </section>
    )
}

export default CardProject