"use client"

import React, { useRef } from 'react'
import styles from './_about.module.scss'
import Title from '@/Components/Global/Title/Title'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import decoLeft from '../../../public/deco_flower1.png'
import decoRight from '../../../public/deco_flower2.png'
import Image from 'next/image';



function About() {
    const title_about = useRef()
    const about_section = useRef <HTMLDivElement>(null)
    const titleDescription = useRef()

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger)

        // T E X T D E S C R I P T I O N

        const textDescription = document.querySelectorAll(`.${styles.more_description} p`)

        // gsap.set ( textDescription, {xPercent: -100})
        gsap.from(textDescription, {
            scrollTrigger: {
                // markers : true, 
                trigger: textDescription,
                start: "top 70%",
                endTrigger: about_section?.current,
                toggleActions: 'restart none none reverse',
                end: 'bottom 65%',
                // scrub:1,
            },
            xPercent: -100,
            duration: 0.5,
            stagger: 0.25,
            opacity: 0

        })

        if (about_section) {
            gsap.to(about_section.current, {
                scrollTrigger: {
                    trigger: about_section.current,
                    start: '20% top',
                    end: '50% top',
                    // markers: true, 
                    scrub: 1
                },
                opacity: 0.8,
                duration: 5,
                delay: 1.5,
            })

            gsap.from(about_section.current, {
                scrollTrigger: {
                    trigger: about_section.current,
                    start: 'top bottom',
                    end: '50% 50%',
                    // markers: true, 
                    scrub: 1
                },
                backgroundColor: 'rgba(4, 4, 4, 0.06)'
            })
        }

    }, { scope: about_section })


    return (
        <section className={styles.about_section} ref={about_section} id='about'>
            <Title
                underTitle='self-summary'
                title='about'
                description='[[ HERE,  DISCOVER MY PERSONAL PROFILE  ]]'
            />

            <div className={styles.more_description}>
                <p className='text-description'>Each new challenge is an opportunity for me to grow and improve.
                    My goal is to create intuitive and high-performing user experiences.
                    Feel free to contact me to explore new collaborations!</p>

                <p className='text-description'>Passionate about innovation and technology, I am a developer specializing in creating web and mobile solutions.
                    Since 2023, I have focused my efforts on front-end development, mastering various
                    languages and frameworks. Don't hesitate to contact me ! </p>

                <div className={styles.flowerZone}>
                    <Image src={decoLeft} alt='' />
                    <Image src={decoRight} alt='' />

                </div>

            </div>
        </section>
    )
}

export default About