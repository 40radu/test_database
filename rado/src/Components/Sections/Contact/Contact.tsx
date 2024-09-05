"use client"

import React, { useEffect, useRef, useState } from 'react'
import styles from './_contact.module.scss'
import Title from '@/Components/Global/Title/Title'
import emailIllustration from "../../../public/email-illustration.svg"
import Image from 'next/image'
import emailjs from 'emailjs-com'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import facebookIcon from '../../../Icons/SocialMedia/facebook.svg'
import whatsAppIcon from '../../../Icons/SocialMedia/whatsapp.svg'
import Link from 'next/link'
import Input from '@/Components/Global/InputForm/InputForm'
import TextArea from '@/Components/Specifies/Contact/Text-Area/TextArea'
import ButtonSend from '@/Components/Specifies/Contact/ButtonSend/ButtonSend'
import StatutResponse from '@/Components/Specifies/Contact/StatutResponse/StatutResponse'
// import axios, { all } from 'axios'
interface IFormData {
    name: string;
    email: string;
    message: string;
}

// const axios = require('axios')

function Contact() {
    const [viewEmailError, setViewEmailError] = useState(false)
    const refContactSection = useRef(null)
    const imageCont = useRef(null)

    const [buttonDisable, setButtonDisable] = useState(true)
    const [enableResponse, setEnableResponse] = useState(false)
    const [isSucces, setIsSucces] = useState(true)
    const [isNotLoading, setIsNotLoading] = useState(true)


    const [formData, setFormData] = useState<IFormData>({
        name: '',
        email: '',
        message: ''
    })

    const [buttonContent, setButtonContent] = useState<"Send" | "Loading">('Send')


    // async function verifyEmail(email: string) {
    //     const apiKey = 'IzxRXAvs2d56WxeTmpl2U';
    //     const url = `https://api.verifyemailaddress.org/api/verifyEmail?email=${encodeURIComponent(email)}&apiKey=${apiKey}`;

    //     try {
    //         const response = await axios.get(url);
    //         return response.data;
    //     } catch (error) {
    //         console.error(error);
    //         return null;
    //     }
    // }

    function handleChangeValue(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target
        // const name = e.target.name
        // const value = e.target.value

        // if (name === 'name') {
        //     // formData.name = value
        //     setFormData((prevState) => ({
        //         ...prevState,
        //         name: value
        //     }))

        // }

        setFormData((prevState) => {
            return (
                {
                    ...prevState,
                    [name]: value
                }
            )
        })

    }

    function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault()
        setButtonContent('Loading')
        setIsNotLoading(false)

        const rgExpEmail = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/
        const rgExpName = /^[a-zA-Z-\s]+$/;

        if (rgExpName.test(formData.name) === false) {
            setViewEmailError(true)
            setButtonContent('Send')
            setIsNotLoading(true)
        } else {

            if (rgExpEmail.test(formData.email)) {
                localStorage.removeItem('error')

                const body = document.querySelector('body')
                emailjs.send('service_x4yca0k', 'template_5zjetkr', { ...formData }, 'w7dKq_C37hbeLrg4u').then(function (res) {
                    if (body) {
                        body.style.overflow = 'hidden'
                    }
                    setIsSucces(true)
                    setButtonContent('Send')
                    setIsNotLoading(true)
                    setButtonDisable(true)
                    setEnableResponse(true)
                    setFormData((prevState) => ({
                        name: '',
                        email: '',
                        message: '',
                    }))

                }).catch((error) => {

                    // console.log(error)
                    if (body) {
                        body.style.overflow = 'hidden'
                    }
                    setButtonContent('Send')
                    setIsSucces(false)
                    setIsNotLoading(true)
                    setEnableResponse(true)

                })

            } else {
                // localStorage.setItem('error' , "true")
                setViewEmailError(true)
                setButtonContent('Send')
                setIsNotLoading(true)

            }
        }

        // const body = document.querySelector('body')
        // emailjs.send('service_x4yca0k', 'template_5zjetkr', { ...formData }, 'w7dKq_C37hbeLrg4u').then(function (res) {
        //     if (body) {
        //         body.style.overflow = 'hidden'
        //     }
        //     setIsSucces(true)
        //     setButtonContent('Send')
        //     setIsNotLoading(true)
        //     setButtonDisable(true)
        //     setEnableResponse(true)
        //     setFormData((prevState) => ({
        //         name: '',
        //         email: '',
        //         message: '',
        //     }))

        // }).catch((error) => {

        //     console.log(error)
        //     if (body) {
        //         body.style.overflow = 'hidden'
        //     }
        //     setButtonContent('Send')
        //     setIsSucces(false)
        //     setIsNotLoading(true)
        //     setEnableResponse(true)

        // })

    }

    function leaveStatut() {
        setEnableResponse(false)
        const body = document.querySelector('body')
        if (body) {
            body.style.overflow = 'auto'
        }
    }

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger)

        gsap.from(imageCont.current, {
            scrollTrigger: {
                // markers: true,
                trigger: imageCont.current,
                start: 'top 60%',
                toggleActions: 'restart none none reverse',
            },
            duration: 1,
            rotateZ: 35,
            opacity: 0,
            ease: 'elastic'

        })

        gsap.from(refContactSection.current, {
            scrollTrigger: {
                trigger: refContactSection.current,
                start: 'top bottom',
                endTrigger: refContactSection.current,
                end: '50% 50%',
                // markers: true, 
                scrub: 1
            },
            backgroundColor: 'rgba(4, 4, 4, 0.06)'
        })
    }, { scope: imageCont })

    useEffect(() => {
        if (viewEmailError === true) {
            setViewEmailError(!viewEmailError)
        }
        if (formData.name !== '' && formData.email !== '' && formData.message !== '') {
            setButtonDisable(false)
        } else {
            setButtonDisable(true)
        }
    }, [formData])

    return (
        <section className={styles.contact_section} id='contact' ref={refContactSection}>
            <Title
                title={'contact'}
                description={'[[ Here, you can leave a message ]]'}
                underTitle={"get in touch"} />

            <div className={styles.container_form}>
                <div className={styles.image_section} >
                    <Image src={emailIllustration} alt='' ref={imageCont} />
                    <p>radurakotoarivelo@gmail.com</p>
                </div>
                <div className={styles.socialMedia}>
                    <Link href='https://www.facebook.com/Boaikla/' target='_blank'><Image src={facebookIcon} alt='' /></Link>
                    <Link href='https://wa.me/+261324010557' target='_blank' ><Image src={whatsAppIcon} alt='' /></Link>
                </div>
                <form className={styles.form} onSubmit={handleSubmitForm}>
                    <Input
                        name='name'
                        onChange={handleChangeValue}
                        value={formData.name}
                        type='text'
                        placeholder='name'
                    />

                    <Input
                        name='email'
                        onChange={handleChangeValue}
                        value={formData.email}

                        type='email'
                        placeholder='email'
                    />
                    <TextArea onChange={handleChangeValue} value={formData.message} />

                    {viewEmailError && <p className={styles.errorEmail}>
                        <b> Name or Email is not valided !</b>
                         </p>}

                    <ButtonSend
                        content={buttonContent}
                        isDisable={buttonDisable}
                        isNotLoading={isNotLoading}
                    />
                    <p className={styles.required}>
                    All fields are required and the name must contain only letters and hyphens !
                    </p>

                    {enableResponse && <StatutResponse isSucces={isSucces} onClick={leaveStatut} />}
                </form>
            </div>

        </section>
    )
}

export default Contact