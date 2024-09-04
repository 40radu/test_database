"use client"

import React, { useEffect, useState } from 'react'
import styles from './_navBar.module.scss'
import Logo from '@/Components/Global/Logo/Logo'
import MenuBar from '@/Components/Global/Menu/MenuBar/MenuBar'
function NavBar() {

  useEffect(() => {

    const navBar = document.querySelector(`.${styles.navBar_container}`) as HTMLElement

    window.addEventListener('scroll', () => {
      if (window.scrollY < 35 && window.innerWidth > 768) {
        if (navBar) {
          navBar.style.boxShadow = "none"
        }
      } else {
        navBar.style.boxShadow = "0 0 6px 0.25px rgba(0, 0, 0, 0.25)"
      }
    })
  }, [])

  return (


    <>
      <nav className={styles.navBar_container} >
        <Logo />
        <MenuBar />
        <ul className={styles.links_wrapper} translate='no'>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#project">Project</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className={styles.mask_nav} id='mask_for_nav'></div>
      <div className={styles.mask_body} id='mask_body'></div>
    </>
  )
}

export default NavBar