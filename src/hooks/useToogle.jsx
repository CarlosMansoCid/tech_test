import { useState } from "react"

const useToogle = (initialState = false) => {

    const [value, setValue] = useState(initialState)


    const toogle = () =>{
        setValue(!value)
    }

    console.log(value)
  return [value, toogle]
}

export default useToogle