"use client"
import { ILogoSkills } from './logoSkillsType';
import React, { useEffect, useState } from 'react'
import styles from './_logoSkills.module.scss';
import cssIcon from '../../../../Icons/Skills/css.svg';
import figmaIcon from '../../../../Icons/Skills/figma.svg';
import gitHubIcon from '../../../../Icons/Skills/github.svg';
import gitIcon from '../../../../Icons/Skills/git.svg'
import gsapIcon from '../../../../Icons/Skills/gsap.svg';
import htmlIcon from '../../../../Icons/Skills/html.svg';
import nextjsIcon from '../../../../Icons/Skills/nextjs.svg';
import reactIcon from '../../../../Icons/Skills/react.svg';
import sassIcon from '../../../../Icons/Skills/sass.svg';
import tailwindIcon from '../../../../Icons/Skills/tailwind.svg';
import typescriptIcon from '../../../../Icons/Skills/typescript.svg';
import javascriptIcon from '../../../../Icons/Skills/javascript.svg';

import Image from 'next/image';

function LogoSkills({ icon }: ILogoSkills) {

  const [srcIcon, setSrcIcon] = useState("")

  useEffect(() => {
    if (icon === 'javascript') {
      setSrcIcon(javascriptIcon)
    }
    if (icon === 'css') {
      setSrcIcon(cssIcon)
    }
    if (icon === 'figma') {
      setSrcIcon(figmaIcon)
    }
    if (icon === 'gitHub') {
      setSrcIcon(gitHubIcon)
    }
    if (icon === 'gsap') {
      setSrcIcon(gsapIcon)
    }
    if (icon === 'html') {
      setSrcIcon(htmlIcon)
    }
    if (icon === 'nextjs') {
      setSrcIcon(nextjsIcon)
    }
    if (icon === 'react') {
      setSrcIcon(reactIcon)
    }
    if (icon === 'sass') {
      setSrcIcon(sassIcon)
    }
    if (icon === 'tailwind') {
      setSrcIcon(tailwindIcon)
    }
    if (icon === 'typescript') {
      setSrcIcon(typescriptIcon)
    }
    if (icon === 'git') {
      setSrcIcon(gitIcon)
    }
  }, [icon])

 


  return (

    <>
      <div className={styles.logo_container} >
        {srcIcon && <Image src={srcIcon} alt=''/>}
        <p>{icon}</p>
      </div>
    </>

  )
}

export default LogoSkills