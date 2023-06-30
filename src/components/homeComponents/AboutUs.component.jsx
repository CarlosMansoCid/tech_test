import React from 'react'
import ImageM from './imageMosaicComponents/ImageMosaic'
import Info from './aboutUsComponents/Info'


const AboutUsComponent = () => {
  return (
    <div className='flex w-[90%] items-center justify-center my-[3rem] mx-auto max-md:flex-col-reverse overflow-hidden' id='aboutus'>
        <ImageM/>
        <Info/>
    </div>
  )
}

export default AboutUsComponent