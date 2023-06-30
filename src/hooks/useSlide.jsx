'use client'
import React, {useState} from 'react'


const useSlide = (pages) => {
    const [index, setIndex] = useState(0)

    const handlePrev = () =>{
        if(index > 0 ){
          setIndex(index - 1)
        }
      }
      const handleNext = () =>{
        if(index < pages - 1){
          setIndex(index + 1)
        }
    
      }

  return [index, handlePrev, handleNext]
}

export default useSlide