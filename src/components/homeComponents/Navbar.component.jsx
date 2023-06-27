'use client'
import NavbarLayout from '@/layouts/Navbar.layout'
import Button from '../buttons/Button'
import NavBarLinks from './navbarComponents/NavBarLinks'
import Translate from './navbarComponents/Translate'
import { useState } from 'react'
import useToogle from '@/hooks/useToogle'
import {FaBars, FaTimes} from 'react-icons/fa'

const NavbarComponent = () => {

  const [value, toogle] = useToogle()


  return (
    <NavbarLayout>
        <NavBarLinks value={value}/>
        <div  className='lg:hidden font text-mediumBlue hover:text-darkBlue cursor-pointer duration-300' onClick={toogle} >
          {value ?  <FaTimes/> : <FaBars/>}
        </div>

        <div className='flex items-center'>
          <Button className=' py-2 cursor-pointer px-8 m-0 rounded-2xl text-white bg-mediumBlue shadow-3xl 
                              shadow-shadowBlue hover:bg-darkBlue duration-100 active:bg-mediumBlue max-lg:py-1
                              max-lg:px-2 '>
            Contactar
          </Button>
          <Translate/>
        </div>
    </NavbarLayout>

  )
}

export default NavbarComponent