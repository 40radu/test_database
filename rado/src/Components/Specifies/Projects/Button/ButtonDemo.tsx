import React from 'react'
import styles from './_button_to_demo.module.scss'
import Image from 'next/image'
import arrow_icon from '../../../../Icons/Arrow/arrow-left.svg'
function ButtonDemo() {
  return (
    <button className={styles.button_container} >
        <p>Live Demo</p>
        <Image src={arrow_icon} alt='arrow_icon'/>
    </button>
  )
}

export default ButtonDemo