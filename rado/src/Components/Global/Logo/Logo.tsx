import React from 'react'
import logoMobile from '../../../Icons/Logo/logo-mobile.svg'
// import logoMobile from '../../../../public/favicon.ico'
import Image from 'next/image'
import Link from 'next/link'
import styles from './_logo.module.scss'

function Logo() {
  return (
    <Link translate='no' href={'#home'} className={styles.logo} >
        <p className={styles.logo__top}>Portfolio</p>
        <p className={styles.logo__bottom} >Radonirina</p>
        <Image src={logoMobile} alt='logo'/>
    </Link>
  )
}

export default Logo