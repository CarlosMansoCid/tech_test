'use client'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { mookSlides } from '@/lib/mookSlides'
import useSlide from '@/hooks/useSlide'
import Carrousell from './Carrousell'
import {Slide} from '@/components/clientAnimations/slideAnimation.js'

const SlideComponent = () => {



  const pages = Math.ceil(mookSlides?.length / 2)

  const [index, handlePrev, handleNext] = useSlide(pages)

  return (
    <Slide className='w-[60%] max-md:w-[90%] animate-fade' direction='right'  triggerOnce>
      <div className='w-[100%] flex items-center justify-between'>
        <div className='m-0 max-sm:absolute max-sm:bottom-0 max-sm:left-0 hover:text-darkBlue duration-300'>
          <FaArrowLeft style={{widht:'1rem', cursor:'pointer'}} onClick={handlePrev}/>
        </div>
        <Carrousell data={mookSlides} pages={pages} index={index}/>
          <div className='m-0 max-sm:absolute max-sm:bottom-0 max-sm:right-0 hover:text-darkBlue duration-300' >
            <FaArrowRight style={{widht:'1rem', cursor:'pointer'}} onClick={handleNext}/>
          </div>
        </div>
      </Slide>
    )
  }



            

              
      




export default SlideComponent