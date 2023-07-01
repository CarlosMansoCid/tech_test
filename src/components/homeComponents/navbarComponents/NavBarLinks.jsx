import NavBarLink from "./NavBarLink";






const NavBarLinks = ({value, toogle}) => {

  return (
    <ul className={`flex max-md:${value ? 'flex' : 'hidden'} text-center max-md:flex-col max-md:absolute  max-md:bg-white 
                     top-0 max-md:left-0  max-md:z-10 max-md:overfloY-scroll
                     max-md:p-2  max-lg:w-[100%] max-md:mt-[3.5rem]
                     max-md:rounded-md  max-md:text-left duration-100 text-xs`}>
      <NavBarLink toogle={toogle}/>
  </ul>
  )
}

export default NavBarLinks