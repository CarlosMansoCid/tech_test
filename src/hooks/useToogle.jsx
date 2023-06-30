'use client'
import { useState } from "react"

const useToogle = () => {

    const [value, setValue] = useState(false)


    const setTrue = () =>{
        setValue(true)
    }
    const setFalse = () =>{
      setValue(false)
    }
    const toogle= () =>{
      setValue(!value)
  }

  return [value, setTrue, setFalse, toogle]
}

export default useToogle