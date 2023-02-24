import { Button } from './Button'
import * as S from './Form.styled'
import IconBrazil from '../../assets/brazil.svg'
import IconArrowDown from '../../assets/arrow-down.svg'

export const FormStepOne = (props) => {
  return (
    <>
        <S.ContainerForm>
          <S.H2>
          Quero vender no Pigz
          </S.H2>
          <S.P>
          Dê o primeiro passo para aumentar suas vendas
          </S.P>
          <S.ContainerInput>
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" placeholder='Leonercio Goesfeeld' />
          </S.ContainerInput>
          <S.ContainerInput>
          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" placeholder='leonercio.goesfeeld@email.com' />
          </S.ContainerInput>
          <label htmlFor="telefone">Telefone</label>
          <S.ContainerInputCountry>
          <S.ContainerInputTel>
          <img src={IconBrazil} alt="" />
          <S.CountryText>
            +55
          </S.CountryText>
          <img src={IconArrowDown} alt="" />
          </S.ContainerInputTel>
          <input type="tel" name="telefone" id="telefone" placeholder='(95) 99876-5432' />
          </S.ContainerInputCountry>
          <S.PLast>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</S.PLast>
          <S.ContainerButton>
          <Button event={props.event} text={'Continuar'}/>
          </S.ContainerButton>
        </S.ContainerForm>
    </>
  )
}
