import React from 'react'
import styles from './_footer.module.scss'
import copyrightIcon from '../../../Icons/Copyright/copyright.svg'
import Image from 'next/image'

function Footer() {
  return (
    <footer className={styles.footer} translate='no'>
        <Image src={copyrightIcon}  alt=''/>
        <p>Copyright Portfolio 2024</p>
    </footer>
  )
}

export default Footer