import React from 'react'
import styles from './_buttonSend.module.scss'
import Image from 'next/image'
import iconSend from '../../../../Icons/SendEmail/send_email.svg'
import { IButtonSend } from './buttonSendType'
import { ClipLoader, FadeLoader, MoonLoader, PulseLoader } from 'react-spinners'

function ButtonSend({ content, isDisable, isNotLoading }: IButtonSend) {
  return (
    <button type='submit' className={styles.btn_send} disabled={isDisable}>
      <p>{content}</p>
      {isNotLoading ?
        <Image src={iconSend} alt='' /> :
        <PulseLoader
        color="#ffffff"
        size={6}
        />}

    </button>
  )
}

export default ButtonSend