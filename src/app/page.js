'use client'
import Image from 'next/image'
import HeroComponent from './serverCoponents/Hero.component'
import ServicesComponent from '@/components/homeComponents/Services.component'
import AboutUsComponent from '@/components/homeComponents/AboutUs.component'
import FooterComponent from '@/components/homeComponents/Footer.component'
import NavbarComponent from '@/components/homeComponents/Navbar.component'
import useServices from '@/hooks/useServices'

export default function Home() {
  const {services, isLoading} = useServices()
  
  

  return (
    <section className='relative'>
      <NavbarComponent/>
      <HeroComponent/>
      <ServicesComponent/>
      <AboutUsComponent/>
      <FooterComponent/>
    </section>
  )
}
