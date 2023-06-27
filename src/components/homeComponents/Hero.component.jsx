import React from 'react'
import CallToAction from './heroComponents/CallToAction'
import NavbarComponent from './Navbar.component'

const HeroComponent = () => {
  return (
    <header className='m-0 w-screen h-screen flex-column items-center bg-darkBlue p-5' id='hero'> 
      <NavbarComponent/>
      <section className='flex  h-screen items-center justify-between text-white'>
        <CallToAction/> 
        Hero
      </section>
    </header>
  )
}


export default HeroComponent