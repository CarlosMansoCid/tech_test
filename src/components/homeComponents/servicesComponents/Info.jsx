import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { FaArrowRight } from 'react-icons/fa'
import Button from '@/components/buttons/Button'

const Info = () => {
  return (
    <Slide className='w-[40%] my-[4rem] max-md:w-[90%]' direction='left' triggerOnce>
      <div className='w-[100%] h-[100%] p-2'>
        <h3 className='text-mediumBlue font-bold text-[.75rem]'>SERVICIOS</h3>
        <h2 className='text-black font-bold text-[2rem] my-[.5rem]'>Esta info te llega desde un servicio externo</h2>
        <p className='text-black text-[.75rem] my-[.5rem]'>Consultando el servicio en <br/>https://react-frontend.pages.dev/slides.json, debes usar Context para enviar los datos
          que necesitas en la seccion de abajo, a la derecha tiene un slide o carrusel.
        </p>
        <Button className='px-7 hover:bg-mediumBlue active:bg-darkBlue duration-300 max-md:w-[100%] shadow-3xl text-white py-1 flex items-center justify-center bg-darkBlue'>
          <span className='font-bold'>Ver mas </span>
          <FaArrowRight style={{marginLeft:'.3rem'}}/>
        </Button>
      </div>
    </Slide>
  )
}



export default Info