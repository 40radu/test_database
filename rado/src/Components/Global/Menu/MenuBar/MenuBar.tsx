import React, { useRef, useState } from 'react'
import { IMenuBar } from './menuBarType'
import styles from './_menuBar.module.scss'
import Image from 'next/image'
import burger_menu from '../../../../Icons/MenuBar/menu-burger.svg'
import close_menu from '../../../../Icons/MenuBar/close_menu.svg'
import gsap from 'gsap'
import NavLink from '../NavLink/NavLink'


function MenuBar() {

    const [menu, setMenu] = useState<'menu' | 'close'>('menu')
    const [icon, setIcon] = useState(burger_menu)
    const containerMenuButton = useRef(null)
    const textButtonMenu = useRef(null)

    function handleClickMenu() {
        const body: HTMLBodyElement | null = document.querySelector('body')
        const navBar = document.querySelector(`.${styles.containerNavigation}`)
        const navLink = document.querySelectorAll(`.${styles.containerNavigation} a`)
        const maskForNav = document.getElementById('mask_for_nav')
        const maskBody = document.getElementById('mask_body')

        if (menu === 'menu') {

            if (maskForNav) {
                gsap.to(maskForNav, {
                    right: "0",
                    duration: 0.65,
                    delay: 0,

                })
            }

            if (maskBody) {
                setTimeout(() => {
                    maskBody.style.visibility = 'visible'
                }, 200)
            }

            if (body) {
                body.style.overflow = 'hidden'
                gsap.to(navBar, {
                    right: "0",
                    duration: 0.65,
                    delay: 0,

                });

            }

        } else {
            if (body) {
                body.style.overflow = 'auto'
                gsap.to(navBar, {
                    right: '-102%',
                    duration: 0.75,
                    delay: 0.2,
                })
            }

            if (maskForNav) {
                gsap.to(maskForNav, {
                    right: "-102%",
                    duration: 0.75,
                    delay: 0.2,

                })
            }

            if (maskBody) {
                setTimeout(() => {
                    maskBody.style.visibility = 'hidden'
                }, 100)
            }
        }

        setTimeout(() => {
            setMenu(`${menu === 'menu' ? "close" : "menu"}`)
            setIcon(icon === burger_menu ? close_menu : burger_menu)
        }, 200)
    }

    function handleMouseEnterMenu() {
        gsap.to(containerMenuButton.current, {
            delay: 0.10,
            duration: 0.25,
            opacity: '0.75',
            ease: 'elastic'
        })
        gsap.to(textButtonMenu.current, {
            scale: '0.9',
            duration: 0.35,
        })
    }

    function handleMouseLeaveMenu() {
        gsap.to(containerMenuButton.current, {
            delay: 0.10,
            duration: 0.25,
            opacity: '0.9'
        })
        gsap.to(textButtonMenu.current, {
            scale: '0.8',
            duration: 0.15

        })
    }

    return (
        <>

            <div className={styles.menu_bar} onClick={handleClickMenu} ref={containerMenuButton} onMouseEnter={handleMouseEnterMenu} onMouseLeave={handleMouseLeaveMenu}>
                <p ref={textButtonMenu}>{menu}</p>
                <Image src={icon} alt='menu_icon' />
            </div>

            <ul className={styles.containerNavigation}>
                <NavLink href={'#home'} text={'home'} onClick={handleClickMenu} />
                <NavLink href={'#about'} text={'about'} onClick={handleClickMenu} />
                <NavLink href={'#skills'} text={'skills'} onClick={handleClickMenu} />
                <NavLink href={'#contact'} text={'project'} onClick={handleClickMenu} />
                <NavLink href={'#contact'} text={'contact'} onClick={handleClickMenu} />
            </ul>

        </>
    )
}

export default MenuBar