import React from 'react'
import { IInputForm } from './inputFormType'
import styles from './_inputForm.module.scss'
import Image from 'next/image'
import userIcon from '../../../Icons/InputIcon/user.svg'
import emailIcon from '../../../Icons/InputIcon/email.svg'



function Input({placeholder, name, type, onChange, value} : IInputForm) {
  return (
    <label className={styles.input_container}>
        <Image src={placeholder === "email"?emailIcon:userIcon} alt=''/>
        <input type={type} placeholder={placeholder} name={name} onChange={onChange} value={value}/>
    </label>
  )
}

export default Input