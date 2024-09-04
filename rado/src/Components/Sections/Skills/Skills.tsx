"use client"

import React, { useRef, useState } from 'react'
import styles from './_skills.module.scss'
import Title from '@/Components/Global/Title/Title'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import LogoSkills from '@/Components/Specifies/Skills/LogoSkills/LogoSkills'
import { Metadata } from 'next'
gsap.registerPlugin(ScrollTrigger)

function Skills() {
    const skillsSection = useRef<HTMLDivElement>(null)
    const containerBottomLogo = useRef <HTMLDivElement>(null)
    const btn_showMore = useRef<HTMLButtonElement>(null)
    const [valueButton, setValueButton] = useState('View More')

    useGSAP(() => {

        const sectionSkill = skillsSection.current
        const logoSectionFirst = sectionSkill?.querySelectorAll(`.${styles.top} div`)
        const logoSectionCenter = sectionSkill?.querySelectorAll(`.${styles.center} div`)
        const logoSectionBottom = sectionSkill?.querySelectorAll(`.${styles.bottom} div`)


        function initAnimation(element : any, valueStartWindow: string) : void {
            gsap.from(element, {
                scrollTrigger: {
                    // markers: true,
                    trigger: element,
                    // trigger: skillsSection.current,
                    start: `top ${valueStartWindow}`,
                    toggleActions: 'restart none none reverse',
                    // endTrigger: skillsSection.current,
                    end: 'top, top',
                    // scrub: 1 
                },
                scale: 0,
                duration: 0.55,
                stagger: 0.10,
                opacity: 0,
            })
        }

        initAnimation(logoSectionFirst, '82%')
        initAnimation(logoSectionCenter, '82%')
        initAnimation(logoSectionBottom, '82%')

        // gsap.to(skillsSection.current, {
        //     scrollTrigger: {
        //         // markers: true, 
        //         trigger: skillsSection.current,
        //         start: '85% top',
        //         scrub: 1
        //     },
        //     opacity: 0.25,
        // })

        gsap.from(skillsSection.current, {
            scrollTrigger: {
                trigger: skillsSection.current,
                start: 'top bottom',
                end: '50% 50%',
                // markers: true, 
                scrub: 1
            },
            backgroundColor: 'rgba(4, 4, 4, 0.06)'
        })

    }, { scope: skillsSection })

    function handleBtnSeeMore() {

        if (containerBottomLogo.current) {
            const containerBottom = containerBottomLogo.current
            if (valueButton === 'View More') {
                containerBottom.style.display = 'flex'
                setValueButton('View Less')
            } else {
                containerBottom.style.display = 'none'
                setValueButton('View More')

            }
        }
    }


    return (
        <section className={styles.skills_section} id='skills' ref={skillsSection}>
            <Title
                description='[[ HERE, YOU WILL SEE A LIST OF MY SKILLS ]]'
                title='skills'
                underTitle='competencies'
            />

            <div className={styles.skills_containers}>

                <div className={styles.top}>
                    <LogoSkills icon='html' />
                    <LogoSkills icon={'react'} />
                    <LogoSkills icon={'typescript'} />
                    <LogoSkills icon={'nextjs'} />

                </div>

                <div className={styles.center}>
                    <LogoSkills icon={'tailwind'} />
                    <LogoSkills icon={'javascript'} />
                    <LogoSkills icon={'sass'} />
                    <LogoSkills icon={'figma'} />

                </div>

                <div className={styles.bottom} ref={containerBottomLogo}>
                    <LogoSkills icon={'css'} />
                    <LogoSkills icon={'git'} />
                    <LogoSkills icon={'gitHub'} />
                    <LogoSkills icon={'gsap'} />

                </div>

                <button onClick={handleBtnSeeMore} className={styles.btn_showMore} ref={btn_showMore}>{valueButton}</button>
            </div>
        </section>
    )
}

export default Skills