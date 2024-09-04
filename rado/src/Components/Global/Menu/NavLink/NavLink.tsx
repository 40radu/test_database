import React, { useRef } from 'react'
import { INavLink } from './navLinkType'
import styles from './_navLink.module.scss'
import Link from 'next/link'
import gsap from 'gsap'


function NavLink({ text, href , onClick} : INavLink) {

    const linkRef = useRef(null)
    const rectRef = useRef(null)

    function mouseEnter() {
        gsap.to(linkRef.current, { backgroundColor: 'rgba(217, 217, 217, 0.20)', columnGap: "30px" , duration: 0.25, stagger: 0.1})
        gsap.to(rectRef.current, {opacity:1, rotate : '360deg', duration: 0.35})
    }

    function mouseLeave () {
        gsap.to(linkRef.current, { backgroundColor: 'transparent', columnGap: "0" , duration: 0.25, stagger: 0.1})
        gsap.to(rectRef.current, {opacity: '0', rotate : '0', duration: 0.30})
    }

    return (
        <Link href={href} onMouseEnter={mouseEnter} className={styles.link_container} ref={linkRef} onMouseLeave={mouseLeave} onClick={onClick}>
            <p>{text}</p>
            <div className={styles.rectangle} ref={rectRef}></div>
        </Link>
    )
}

export default NavLink