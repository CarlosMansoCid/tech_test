
import React from 'react'
import { Slide } from '@/components/clientAnimations/slideAnimation.js'
import { FaArrowRight } from 'react-icons/fa'
import Button from '@/components/buttons/Button'
import Header from '@/components/homeComponents/textComponents/Header'
import SubTitle from '@/components/homeComponents/textComponents/SubTitle'
import Title from '@/components/homeComponents/textComponents/Title'

const Info = () => {
  return (
    <Slide className='w-[40%] my-[4rem] max-md:w-[90%] animate-fade' direction='left' triggerOnce >
      <div className='w-[100%] h-[100%] p-2'>
        <Header>SERVICIOS</Header>
        <Title>Esta info te llega desde un servicio externo</Title>
        <SubTitle>Consultando el servicio en <br/>https://react-frontend.pages.dev/slides.json, debes usar Context para enviar los datos
        que necesitas en la seccion de abajo, a la derecha tiene un slide o carrusel.</SubTitle>
        <Button className='px-7 rounded-2xl py-2  hover:bg-mediumBlue active:bg-darkBlue duration-300 max-md:w-[100%] shadow-3xl text-white py-1 flex items-center justify-center bg-darkBlue'>
          <span className='font-bold'>Ver mas </span>
          <FaArrowRight style={{marginLeft:'.3rem'}}/>
        </Button>
      </div>
    </Slide>
  )
}



export default Info