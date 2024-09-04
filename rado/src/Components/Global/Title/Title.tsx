'use client'
import React, { useRef } from 'react'
import styles from './_title.module.scss'
import { ITitle } from './titleType'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { splitText } from '@/Utils/splitText/splitText'

function Title({ title, description, underTitle }: ITitle) {

  const refTitle = useRef<HTMLHeadingElement>(null)
  const refDescription = useRef<HTMLParagraphElement>(null)
  useGSAP(() => {
    //TITLE ANIMATION
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(refTitle.current, {
      scrollTrigger: {
        // markers: true,
        trigger: refTitle.current,
        start: "top 85%",
        end: 'top 30%',
        scrub: 1
      },
      paddingRight: '14%'
    })

    // TITILE DESCRIPTION ANIMATION
    const titleDescription = refDescription.current
    if (refDescription.current) {
      splitText(refDescription.current)
    }

    if (titleDescription) {
      const chars = titleDescription.querySelectorAll(`span`)

      const tl = gsap.timeline()
      tl.from(chars, {
        scrollTrigger: {
          // markers: true,
          trigger: chars,
          endTrigger: refTitle.current,
          start: 'top 85%',
          end: 'top 48%',
          scrub: true,
        },
        opacity: 0,
        stagger: 0.25,
      })
    }

  })
  return (
    <>
      <section className={styles.section_title} translate='no'>
        <h2 ref={refTitle}>
          {title}
        </h2>
        <div className={styles.section_title__center}>
          <p>{underTitle}</p>
        </div>
        <p className={styles.descri} ref={refDescription}>{description}</p>
      </section>
    </>
  )
}

export default Title