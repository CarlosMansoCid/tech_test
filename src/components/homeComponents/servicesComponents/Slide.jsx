'use client'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import useSlide from '@/hooks/useSlide'
import Carrousell from './Carrousell'
import {Slide} from '@/components/clientAnimations/slideAnimation.js'
import { ServiceContext } from '@/context/ServicesContext'
import { useContext } from 'react'

const SlideComponent = () => {

  const {data} = useContext(ServiceContext)


  const pages = Math.ceil(data?.length / 2) || 0

  const [index, handlePrev, handleNext] = useSlide(pages)

  return (
    <Slide className='w-[60%] max-md:w-[90%] animate-fade' direction='right'  triggerOnce>
      <div className='w-[100%] flex items-center justify-between'>
        <div className='m-0 max-sm:absolute max-sm:bottom-0 max-sm:left-0 hover:text-darkBlue duration-300'>
          {/* <FaArrowLeft style={{widht:'1rem', cursor:'pointer'}} onClick={handlePrev}/> */}
          <div className='text-[2rem] cursor-pointer font-bold' onClick={handlePrev}>{'<'}</div>
        </div>
        <Carrousell pages={pages} index={index}/>
          <div className='m-0 max-sm:absolute max-sm:bottom-0 max-sm:right-0 hover:text-darkBlue duration-300' >
            {/* <FaArrowRight style={{widht:'1rem', cursor:'pointer'}} onClick={handleNext}/> */}
            <div className='text-[2rem] cursor-pointer font-bold' onClick={handleNext}>{'>'}</div>
          </div>
        </div>
      </Slide>
    )
  }



            

              
      




export default SlideComponent