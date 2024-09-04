'use client'

import React, { useRef } from 'react'
import styles from './_project.module.scss'
import Title from '@/Components/Global/Title/Title'
import CardProject from '@/Components/Specifies/Projects/Card/CardProject'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Project() {
    const refProjectSection = useRef(null)

    useGSAP(() => {
        gsap.from(refProjectSection.current, {
            scrollTrigger: {
                trigger: refProjectSection.current,
                start: 'top bottom',
                endTrigger: refProjectSection.current,
                end: '50% 50%',
                // markers: true, 
                scrub: 1
            },
            backgroundColor: 'rgba(4, 4, 4, 0.06)'
        })
    })


    return (
        <section className={styles.section_project} id='project' ref={refProjectSection}>
            <Title title='project' description='Here you can see my some project' underTitle='get in touch' />
            <div className={styles.cards_wrapper}>
                <CardProject />
                <CardProject />
            </div>
        </section>
    )
}

export default Project