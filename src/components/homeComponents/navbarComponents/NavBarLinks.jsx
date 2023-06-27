'use client'
import NavBarLink from "./NavBarLink";
import { homeNavBarLinks } from "@/lib/homeNavBarLinks";
import useToogle from "@/hooks/useToogle";


const NavBarLinks = ({value}) => {
  console.log(value)
  return (
    <ul className={`flex text-center max-lg:flex-col max-lg:absolute  max-lg:bg-white 
                     max-lg:top-${value ? '16' : '[-450px]'} max-lg:left-0  max-lg:z-10
                     max-lg:p-2  max-lg:w-[100%] 
                     max-lg:rounded-md  max-lg:text-left duration-100 `}>
    {
      homeNavBarLinks.map(link =>{
        return(
          <NavBarLink data={link}/>
        )
      })
    }
  </ul>
  )
}

export default NavBarLinks