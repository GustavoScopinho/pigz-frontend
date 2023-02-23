import * as S from './Formulario.styled'

export const Formulario = () => {
  return (
   <>
      <S.Container>
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
          <S.ContainerInput>
          <label htmlFor="telefone">Telefone</label>
          <input type="text" name="telefone" id="telefone" placeholder='(95) 99876-5432' />
          </S.ContainerInput>
          <S.PLast>Ao continuar, aceito que a Pigz entre em contato comigo por telefone, e-mail ou WhatsApp.</S.PLast>
          <S.ContainerButton>
            <input type="submit" value="Continuar" />
          </S.ContainerButton>
        </S.ContainerForm>
      </S.Container>
   </>
  )
}
