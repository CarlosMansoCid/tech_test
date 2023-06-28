'use client'
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='w-screen h-screen bg-darkBlue flex flex-col justify-center content-center text-center'>
      <h2 className='text-white text-[2rem]'>Algo ha salido mal</h2>
      <button onClick={ () => reset()} className='text-darkBlue font-bold text-center p-2 bg-white hover:bg-mediumBlue active:bg-darkBlue w-[25%]' >
        Intentar de nuevo
      </button>
    </div>
  )
}