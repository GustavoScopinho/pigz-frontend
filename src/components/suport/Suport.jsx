import { CardSuport } from '../cardSuport/CardSuport'
import * as S from './Suport.styled'
import IconWpp from '../../assets/icon-whatsapp.svg'

export const Suport = () => {
  return (
    <>
      <S.Container>
        <S.H1>
        E mais: suporte que realmente funciona!
        </S.H1>
        <S.P>
        Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.
        </S.P>
        <CardSuport
        title={'Pigz'}
        subtitle={'Tudo o que você precisa'}
        p1={`Pigz Marketplace`}
        p2={'Página exclusiva'}
        p3={'Pigz Gestão Desktop e Mobile'}
        p4={'Gestão de entregadores'}
        p5={'Vias de impressão personalizáveis'}
        price={'R$199/mês'}
        button={'Vender no Pigz agora'}/>
        <CardSuport
        title={'Pagamento On-line'}
        subtitle={'Segurança e agilidade'}
        p1={`Aceite Pix e Cartão de Crédito`}
        p2={'Antecipação Pix automática'}p3={'Não dependa de maquininha de cartão'}
        p4={'Segurança para receber pedidos'}
        p5={'Agilidade para entregar'}
        price={'2,99% por transação'}
        button={'Saiba mais'}
        />
        <S.Contact>
        Fale com a Pigz <img src={IconWpp} alt="" /> <span>95</span> 3224-2603
        </S.Contact>
      </S.Container>
    </>
  )
}
