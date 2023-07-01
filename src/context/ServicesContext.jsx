'use client'
import { createContext } from "react"


export const ServiceContext = createContext()

const ServicesContext = ({children, data}) => {

  return (
    <ServiceContext.Provider value={{data}}>{children}</ServiceContext.Provider>
  )
}

export default ServicesContext