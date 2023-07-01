import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='w-screen h-screen bg-darkBlue flex flex-col justify-center items-center'>
      <h1 className='text-white text-[2rem]'>Error 404</h1>
      <h2 className='text-white text-[1rem] m-2'>Esta pagina no se encuentra</h2>
      <Link className='text-darkBlue bg-white rounded-lg m-3 p-3 font-bold ' href='/es'>Navegar al inicio</Link>
    </div>
  )

}

export default NotFound