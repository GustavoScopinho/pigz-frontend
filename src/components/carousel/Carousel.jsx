import * as S from './Carousel.styled'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination} from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { CarouselContent } from '../carouselContent/CarouselContent';
import { SliderWrapper} from './Carousel.styled'
import MarketPlaceImg from '../../assets/CarouselContent/marketplace.png'
import ManagementImg from '../../assets/CarouselContent/management.png'
import CouriersImg from '../../assets/CarouselContent/couriers.png'
import PaymentImg from '../../assets/CarouselContent/payment.png'

import 'swiper/css/pagination';
import { useEffect, useState } from 'react';

const numberPages = [1,2,3,4] 

export const Carousel = () => {

  const [view, setView] = useState('0')

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollX > 1) {
        setView('1')
      } else if ( window.scrollX > 450) {
        setView('2')
      }
    })
  }, [])

  return (
    <>
    <S.ContainerPagination>
      {numberPages.map((i) => <S.Pagination/>)}
    </S.ContainerPagination>
  
      <Swiper
      modules={[Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}

      renderBullet
    >
      <SwiperSlide>
    
        <CarouselContent  title={'Pigz Marketplace'} description={'Além de uma página exclusiva, com o Pigz Marketplace sua loja terá mais visibilidade, no app e no site. Uma vitrine com milhares de clientes todos os dias, pra vender muito mais.'} img={MarketPlaceImg} />
        </SwiperSlide>
      <SwiperSlide>
        <CarouselContent title={'Pigz Gestão'} description={'Acompanhe suas vendas em tempo real, no computador ou no celular, de onde estiver. Faça alterações de preços e disponibilidade de produtos rapidamente, como deve ser.'} img={ManagementImg} />
        </SwiperSlide>
      <SwiperSlide>
        <CarouselContent title={'Gestão de entregadores'} description={'A ferramenta ideal pra quem tem entrega própria. Controle de entregas por motoboy, geração de relatórios por entregas e por taxas de entrega, individualmente.'} img={CouriersImg} />
        </SwiperSlide>
      <SwiperSlide>
        <CarouselContent title={'Pagamento on-line'} description={'Segurança e agilidade para receber e entregar pedidos. Seus clientes pagam com Pix ou cartão de crédito pelo app, e o entregador nem precisa levar a maquininha de cartão.'} img={PaymentImg} />
        </SwiperSlide>
    </Swiper>
    </>
  )
}
