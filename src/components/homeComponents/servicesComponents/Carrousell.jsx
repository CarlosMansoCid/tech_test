'use client'
import React, {Suspense, useContext} from 'react'
import Dots from './Dots'
import SlideCard from './SlideCard'
import { ServiceContext } from '@/context/ServicesContext'


const Carrousell = ({pages, index}) => {

  const {data} = useContext(ServiceContext)



    
  return (
    <div className='w-[80%] max-md:w-[100%] flex-col items-center justify-center'> 
    <div className='width-[100%] flex overflow-y-hidden justify-evenly max-md:justify-between'>
      {
        !!data &&
        data.map(slide =>{
          return(
            <SlideCard key={slide.id} data={slide} 
                  active={ data.indexOf(slide) === index || data.indexOf(slide) === index + 1 ? true : false}
            />
            )
          })
        }
      </div>
    <Dots activeIndex={index} pages={pages}/>
  </div>
  )
}

export default Carrousell