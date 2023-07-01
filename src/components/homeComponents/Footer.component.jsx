import FooterLayout from '@/layouts/Footer.layout'
import {Slide} from '@/components/clientAnimations/slideAnimation'
import SocialLinks from './footerComponents/SocialLinks'
import GithubLink from './footerComponents/GithubLink'

const FooterComponent = () => {
  return (
    <FooterLayout>
      <Slide direction='up' className='duration-400 text-[1.2rem] mt-[.5rem] mb-0'  triggerOnce>
        <div>Contacto</div>
        <SocialLinks/>
        <div className='text-[1.2rem] mt-[.5rem]'>Enlace al código fuente</div>
        <GithubLink/>
      </Slide>
    </FooterLayout>
  )
}


export default FooterComponent