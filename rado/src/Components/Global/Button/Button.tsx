import React from 'react'
import { IButton } from './buttonType'
import styles from './_button.module.scss'

function Button({ type, value, className, onClick }: IButton)  {

    return (
        <button type={type} className={styles[className]} onClick={onClick}>
            {value} 
        </button>
    )
}

export default Button