import React from 'react'
import styles from './_socialMedia.module.scss'
import facebookIcon from '../../../Icons/SocialMedia/facebook.svg'
import whatsAppIcon from '../../../Icons/SocialMedia/whatsapp.svg'
import Image from 'next/image'
import Link from 'next/link'


function SocialMedia() {
  return (
    <section className={styles.socialMedia_container}>
      <Link href='https://www.facebook.com/Boaikla/' target='_blank'><Image src={facebookIcon} alt=''/></Link>
      <Link href='https://wa.me/+261324010557' target='_blank' ><Image src={whatsAppIcon} alt=''/></Link>
    </section>
  )
}

export default SocialMedia