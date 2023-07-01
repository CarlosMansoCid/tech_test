'use client'
import { useState, useEffect } from 'react'
import es from '../../../../public/img/spanish.png'
import en from '../../../../public/img/english.png'
import Image from 'next/image'
import Link from 'next/link'


const Translate = () => {


    const [lang, setLang] = useState()
    
useEffect(()=>{
  setLang(window.location.pathname.split('/')[1])
},[])
    
  return (
    <Link href={`${lang === 'es' ? '/en' : '/es'}`} scroll={false}>
      <Image src={lang === 'es' ? en : es} alt='lng' className='ml-4 h-5 cursor-pointer max-lg:h-4 max-lg:w-5'/>
    </Link>
  )
}

export default Translate