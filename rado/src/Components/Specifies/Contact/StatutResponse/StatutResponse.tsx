import React from 'react'
import styles from './_statut.module.scss'
import successIcon from '../../../../Icons/Statut/sent-succes.svg'
import errorIcon from '../../../../Icons/Statut/sent-error.svg'
import Image from 'next/image'
import { IStatutResponse } from './statutResponseType'



function StatutResponse({ isSucces, onClick } : IStatutResponse) {
  return (
    <section className={styles.statut_resp}>
      <div className={styles.wrapper}>
        {/* {isSucces && 
        <p className={styles.succes}>sent successfully</p>}
        {isSucces && <p className={styles.error}>An error has occurred</p>} */}

        {isSucces === true ? <>
          <Image src={successIcon} alt='' />
          <h2 className={styles.succes}>Success</h2>
          <p className={styles.description}>Email sent <b> Successfully </b>! <br />I'll <b> Get Back </b> to you as soon as possible ! </p></> :
          <>
            <Image src={errorIcon} alt='' />
            <h2 className={styles.error}>Error</h2>
            <p className={styles.description}>An <b> Error </b> has occurred  <br /> Try again !</p></>}



        <button onClick={onClick}>Ok</button>
      </div>
    </section>
  )
}

export default StatutResponse