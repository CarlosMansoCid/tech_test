'use client'
import { useState } from 'react'
import es from '../../../../public/img/spanish.png'
import en from '../../../../public/img/english.png'
import Image from 'next/image'
import Link from 'next/link'


const Translate = () => {

    const [lang, setLang] = useState(es)


    const toggleLang = () =>{
        setLang(lang === es ? en : es)
    }
    
  return (
    <Link href={`${lang === es ? '/es' : '/en'}`} scroll={false}>
      <Image src={lang} alt='lng' className='ml-4 h-5 cursor-pointer max-lg:h-4 max-lg:w-5' onClick={()=>toggleLang()}/>
    </Link>
  )
}

export default Translate