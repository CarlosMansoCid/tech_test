'use client'
import Link from "next/link"
import {useTranslations} from 'next-intl';


const NavBarLink = ({toogle}) => {
  const t = useTranslations('navbar');

  return (
    <>
    <li onClick={toogle} className='max-md:my-[1rem]'>
      <Link href="#hero" className='mx-6 hover:text-lightBlue duration-100 active:text-black '>{t('home')}</Link>
    </li>
    <li onClick={toogle} className='max-md:my-[1rem]'>
      <Link href="/#services" className='mx-6 hover:text-lightBlue duration-100 active:text-black '>{t('services')}</Link>
    </li>
    <li onClick={toogle} className='max-md:my-[1rem]'>
      <Link href="/#aboutus" className='mx-6 hover:text-lightBlue duration-100 active:text-black '>{t('aboutus')}</Link>
    </li>
    <li onClick={toogle} className='max-md:my-[1rem]'>
      <Link href="#" className='mx-6 hover:text-lightBlue duration-100 active:text-black '>{t('tools')}</Link>
    </li>
    <li onClick={toogle} className='max-md:my-[1rem]'>
      <Link href="#" className='mx-6 hover:text-lightBlue duration-100 active:text-black '>{t('partners')}</Link>
    </li>
    </>

  )
}

export default NavBarLink