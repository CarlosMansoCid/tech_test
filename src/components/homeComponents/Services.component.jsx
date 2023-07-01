import Info from './servicesComponents/Info'
import SlideComponent from './servicesComponents/Slide'

const ServicesComponent = () => {
  return (
    <article className='w-[90%] my-0 overflow-hidden mx-auto flex items-center justify-center max-md:flex-col' id='services'>
        <Info/>
        <SlideComponent/>
    </article>
  )
}

export default ServicesComponent