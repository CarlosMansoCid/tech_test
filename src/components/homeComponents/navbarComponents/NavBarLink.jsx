import Link from "next/link"

const NavBarLink = ({data}) => {
  return (
    <li>
      <Link href={data.href} className='mx-3 hover:text-lightBlue duration-100 active:text-black '>{data.title}</Link>
    </li>

  )
}

export default NavBarLink