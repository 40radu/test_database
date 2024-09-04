"use client"

import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import styles from './_animationFirst.module.scss'

function AnimationFirst() {


  useGSAP(() => {
    const body = document.querySelector('body')
    body ? body.style.overflow = 'hidden':''
    const bannerLeft = document.querySelector('#banner__left')
    const bannerRight = document.querySelector('#banner__right')

    gsap.to(bannerLeft, {
      yPercent: -1,
      yoyo: true,
      duration: 0.25,
      repeat: 1,
      ease: 'power3'
    })
    gsap.to(bannerLeft, {
      delay: 0.75,
      xPercent: -100,
      duration: 0.85,

    })
    gsap.to(bannerRight, {
      yPercent: 1 ,
      yoyo: true,
      duration: 0.25,
      repeat: 1,
      ease: 'power3'

    })
    gsap.to(bannerRight, {
      delay: 0.75,
      xPercent: 100,
      duration: 0.85,

    })

    setTimeout (()=>{
        body ? body.style.overflow = 'auto':''
    },2000)
  })

  return (
    <section className='overflow-hidden' >

      <div id='banner__left' className={styles.bannerLeft}>
        <p>Welcome To</p>
      </div>

      <div id='banner__right' className={styles.bannerRight}>
        <p>
          My Portfolio</p>
      </div>

    </section>

  )
}

export default AnimationFirst