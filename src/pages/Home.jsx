import { Carousel } from '../components/carousel/Carousel'
import { Footer } from '../components/footer/Footer'
import { Functionalities } from '../components/functionalities/Functionalities'
import { Header } from '../components/header/Header'
import { Section } from '../components/section/Section'
import { Suport } from '../components/suport/Suport'

export const Home = () => {
  return (
    <>
      <Header/>
      <Section/>
      <Functionalities/>
      <Carousel/>
      <Suport/>
      <Footer/>
    </>
  )
}
