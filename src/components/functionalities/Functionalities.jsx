import * as S from './Functionalities.styled'
import PigzImage from '../../assets/pigz-pigz.svg'
import { BoxFunction } from '../boxFunction/BoxFunction'
import ImgMarket from '../../assets/function-market.svg'
import ImgTel from '../../assets/function-tel.svg'
import ImgManagement from '../../assets/function-management.svg'
import ImgPrinter from '../../assets/function-printer.svg'



export const Functionalities = () => {
  return (
    <>
        <S.Container>
          <S.ContainerImage>
          <img src={PigzImage} alt="" />
          </S.ContainerImage>
          <S.H1>Você tem um novo Pigzdido!</S.H1>
          <BoxFunction img={ImgMarket} title={'Marketplace'} description={'Pra sua loja vender mais'}/>
          <BoxFunction img={ImgTel} title={'É fácil e rápido'} description={'Fazer um pedido no Pigz'}/>
          <BoxFunction img={ImgManagement} title={'Pigz Gestão'} description={'Você no controle, sempre'}/>
          <BoxFunction img={ImgPrinter} title={'Vias de impressão'} description={'Personalizáveis'}/>
          <S.H1Last>
          Tudo que você precisa por apenas R$199/mês
          </S.H1Last>
          <S.P>
          Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por cada venda, sem letrinhas miúdas.
          </S.P>
        </S.Container>
    </>
  )
}
