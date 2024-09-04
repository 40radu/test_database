import React from 'react'
import styles from './_scroll.module.scss'
import arrowIcon from '../../../Icons/Arrow/arrow_down.svg'
import Image from 'next/image'

function Scroll() {
    return (
        <>
            <div className={styles.wrapper_scroll}>
                <Image src={arrowIcon} alt='' />
                <p>Scroll</p>
            </div>
        </>
    )
}

export default Scroll