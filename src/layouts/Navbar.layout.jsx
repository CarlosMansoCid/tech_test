import React from 'react'

const NavbarLayout = ({children, ...props}) => {
  return (
    <div {...props} className='z-30 bg-white  p-2 rounded-md w-[98%] mx-auto my-0 sticky top-0 '>
      <div className='w-[96%] flex items-center justify-between my-0 mx-auto  '>
        { children }
      </div>
    </div>

  )
}

export default NavbarLayout