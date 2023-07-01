'use client'
import { ServiceContext } from "@/context/ServicesContext"
import { Suspense, useContext } from "react"


const Titles = () => {

    const {data} = useContext(ServiceContext)

  return (
    <div>
        <h2 className="text-[1.5rem] text-right text-[#252525]">Use Context para acceder a los títulos de abajo desde la sesión anterior</h2>
        {
            !!data &&
            data.map((dat) =>{
                return(
                    <div className="flex items-center justify-end ">
                        <p className="text-[#3e3e3e] text-right " key={dat.id}>{dat.title}</p>
                        <div className="border-[2px] border-mediumBlue ml-[1rem] w-[1rem] h-[1rem] rounded-[50%] flex 
                        items-center justify-center">
                            <div className="w-[0.2rem] h-[0.2rem] rounded-[50%] bg-mediumBlue"></div>
                        </div>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Titles