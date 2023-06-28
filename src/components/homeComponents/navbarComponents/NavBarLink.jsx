'use client'
import Link from "next/link"


const NavBarLink = ({data, toogle}) => {

  return (
    <li onClick={toogle}>
      <Link href={data.href} className='mx-6 hover:text-lightBlue duration-100 active:text-black '>{data.title}</Link>
    </li>

  )
}

export default NavBarLink