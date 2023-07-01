'use client'
import {useTranslations} from 'next-intl';
import Header from '@/components/homeComponents/textComponents/Header'
import SubTitle from '@/components/homeComponents/textComponents/SubTitle'
import Title from '@/components/homeComponents/textComponents/Title'
import {Slide} from '@/components/clientAnimations/slideAnimation'
import Titles from './Titles'

const Info = () => {
  const t = useTranslations('title');
  return (
    <Slide className='w-[50%] my-[1rem] p-3 max-md:w-[100%] '  direction='right'  triggerOnce>
      <div className='items-end flex flex-col'>
        <Header>SOBRE NOSOTROS</Header>
        <Title right>{t('title')}</Title>
        <SubTitle right>Usted debe tener un sólodo conocimiento de HTML y CSS. Debe comprender la arquitectura de componentes
        de react. Debe tener buena atención al detalle, organización del código, habilidad de comunicación efectiva y 
        capacidad para trabajar en equipo.</SubTitle>
      <Titles/>
      </div>
    </Slide>

)

    
}

export default Info