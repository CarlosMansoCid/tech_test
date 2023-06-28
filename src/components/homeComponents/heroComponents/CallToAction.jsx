import React from 'react'

const CallToAction = () => {
  return (
    <div className='w-[40%] p-5 max-md:w-[100%]'>
      <h1 className='font-bold text-[3rem] mb-[1rem] max-lg:text-[2.5rem] max-md:text-[4rem] max-md:text-center'>Es tiempo <br/>de maquetar</h1>
      <h2 className='max-lg:text-[.75rem] max-md:text-[1rem] max-md:text-center'>Debes usar <span className='font-bold'>NextJS</span> y <span className='font-bold'>Tailwind CSS</span>.
       Cada sección de la página debe ser un componente individual. Usa el módulo 
       <span className='font-bold'> next-intl</span> para internacionalización. Usa la imaginación para desarrollar
         el <span className='font-bold'>responsive</span> de la versión móvil. </h2>
    </div>
  )
}

export default CallToAction