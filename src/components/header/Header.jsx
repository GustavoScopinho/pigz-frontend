import * as S from './Header.styled'
import Logo from '../../assets/pigz-logo.svg'

export const Header = () => {
  return (
    <>
          <S.Header>
            <S.Nav>
              <S.ContainerLogo>
                <img src={Logo} alt="" />
              </S.ContainerLogo>
              <S.ContainerButton>
                  <S.Button>
                    Já sou parceiro
                  </S.Button>
                </S.ContainerButton>
            </S.Nav>
          </S.Header>
    </>

  )
}
