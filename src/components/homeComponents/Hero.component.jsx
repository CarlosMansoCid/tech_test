import React from 'react'
import CallToAction from './heroComponents/CallToAction'
import Image from 'next/image'
import { FaArrowCircleDown } from 'react-icons/fa'

const HeroComponent = () => {
  return (
    <header className='mx-0 my-auto w-screen h-[100vh] flex-col items-center justify-center  bg-darkBlue 
     top-0 bg-[url("/img/heroImgNumbers.png")] mb-[2rem] relative max-md:bg-cover max-md:bg-center'
     id='hero'> 
      <section className='flex my-0 mx-auto  h-[100%] w-[90%] items-center justify-between text-white'>
        <CallToAction/> 
        <div className='w-[50%] h-[100%] absolute right-0 max-md:hidden'>
          <Image src='/img/heroImg.png' fill={true} style={{top:'5rem', right:'0'}}/>
        </div>
      </section>
      <div className='bg-darkBlue z-10 w-[4rem] h-[4rem] left-[100px] absolute rotate-45 bottom-[-1rem]'/>
    </header>
  )
}


export default HeroComponent