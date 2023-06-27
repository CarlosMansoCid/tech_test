'use client'
import { useState, useEffect } from "react"

const useServices = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{

    setIsLoading(true)
    const fetchData = async () =>{
        try{
              await   fetch(`${BASE_URL}/slides.json`)
                      .then(res => res.json())
                      .then(data => setServices(data))
              setIsLoading(false)
          }catch(error){
              setIsLoading(false)
          }
        }
    fetchData()
        
    },[])


    return {services, isLoading}
}

export default useServices