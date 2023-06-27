'use client'
import { useState } from 'react'
import spanish from '../../../../public/img/spanish.png'
import english from '../../../../public/img/english.png'
import Image from 'next/image'


const Translate = () => {

    const [lang, setLang] = useState(spanish)

    const toggleLang = () =>{
        setLang(lang === spanish ? english : spanish)
    }
    
  return (
    <Image src={lang} className='ml-4 h-5 cursor-pointer max-lg:h-4 max-lg:w-5' onClick={()=>toggleLang()}/>
  )
}

export default Translate