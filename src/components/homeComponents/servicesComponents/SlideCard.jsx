'use client'
import React from 'react'
import Link from 'next/link'

const SlideCard = ({data, active}) => {

  return (
    <div className={`animate-fade shadow-card p-1 my-[.5rem] duration-300 mx-2  cursor-pointer 
                    hover:bg-mediumBlue hover:text-white max-lg:w-[45%] w-[40%] overflow-hidden 
                    ${active ? 'flex flex-col' : 'hidden'} h-[20rem]` }>
      <div className='h-[45%] flex items-center'>
        <img src={`/img/${data.icon}.svg`} className='fill-current text-white ml-1'/>
      </div>
      <div className='h-[55%]'>
        <h2 className='font-bold text-[1.3rem] max-md:text-[.80rem]'>{data.title}</h2>
        <p className=' text-[.65rem]'>{data.description}</p>
        <Link href={data.link} className='font-bold max-md:text-[.80rem]'>Saber mas</Link>
      </div>
    </div>
  )
}


export default SlideCard