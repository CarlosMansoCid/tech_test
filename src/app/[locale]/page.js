import HeroComponent from '../../components/homeComponents/Hero.component'
import ServicesComponent from '@/components/homeComponents/Services.component'
import AboutUsComponent from '@/components/homeComponents/AboutUs.component'
import FooterComponent from '@/components/homeComponents/Footer.component'
import NavbarComponent from '@/components/homeComponents/Navbar.component'
import getData from '@/services/getData'
import ServicesContext from '@/context/ServicesContext'


export default async function Home() {

  const data = await getData()

  return (
    <section className='relative'>
      <NavbarComponent/>
      <HeroComponent/>
      <ServicesContext data={data}>
        <ServicesComponent/>
        <AboutUsComponent/>
      </ServicesContext>
      <FooterComponent/>
    </section>
  
  )
}

