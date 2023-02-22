import React from 'react'
import { Carousel } from '../components/carousel/Carousel'
import { Functionalities } from '../components/functionalities/Functionalities'
import { Header } from '../components/header/Header'
import { Section } from '../components/section/Section'

export const Home = () => {
  return (
    <>
      <Header/>
      <Section/>
      <Functionalities/>
      <Carousel/>
    </>
  )
}
