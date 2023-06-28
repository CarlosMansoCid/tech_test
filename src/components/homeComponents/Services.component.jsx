import React from 'react'
import Info from './servicesComponents/Info'
import SlideComponent from './servicesComponents/Slide'

const ServicesComponent = () => {
  return (
    <article className='w-[90%] my-0 mx-auto flex items-center justify-center max-md:flex-col'>
        <Info/>
        <SlideComponent/>
    </article>
  )
}

export default ServicesComponent