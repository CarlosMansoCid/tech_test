'use client'
import React, {useEffect} from 'react'
import {Fade} from 'react-awesome-reveal'

const NavbarLayout = ({children, ...props}) => {
  useEffect(() => {
    const nav = document.getElementById('nav')
    window.addEventListener("scroll", () => {

        if(window.scrollY > 70 ){
            // setChange(true)
            nav.classList.remove('absolute', 'top-5')
            nav.classList.add('sticky', 'top-0')
        }else{
          // setChange(false)
          nav.classList.remove('sticky', 'top-0')
          nav.classList.add('absolute', 'top-5')
        }
      })

  }, []);

  return (

      <nav {...props} id='nav'  className={`z-30  bg-white duration-700 p-2 rounded-md w-[90%] absolute top-5 left-0 right-0 m-auto  `}>
        <div className='w-[96%] flex items-center justify-between my-0 mx-auto  '>
          { children }
        </div>
      </nav>


  )
}

export default NavbarLayout