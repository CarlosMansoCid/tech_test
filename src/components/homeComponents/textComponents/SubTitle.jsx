import React from 'react'

const SubTitle = ({children, ...props}) => {
  return (
    <p className={`text-black text-[.75rem] my-[.5rem] ${props?.right && 'text-right'}`}>{children}</p>
  )
}

export default SubTitle