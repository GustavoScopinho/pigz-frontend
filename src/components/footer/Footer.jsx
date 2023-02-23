import * as S from './Footer.styled'
import LogoPigz from '../../assets/pigz-logo-footer.svg'
import LogoAppStore from '../../assets/selo-app-store.svg'
import LogoGooglePlay from '../../assets/selo-google-play.svg'
import LogoContact from '../../assets/icone-fale-conosco.svg'
import LogoOrange from '../../assets/logo-orange.svg'
import IconFacebook from '../../assets/SocialNetwork/facebook-with-circle.svg'
import IconInstagram from '../../assets/SocialNetwork/instagram-with-circle.svg'
import IconLinkedin from '../../assets/SocialNetwork/linkedin-with-circle.svg'
import IconYoutube from '../../assets/SocialNetwork/youtube-with-circle.svg'

export const Footer = () => {
  return (
   <>
      <S.Container>
        <S.ContainerFooter>
          <img src={LogoPigz} alt="" />
          <S.P>
          Tudo que você precisa.
          </S.P>
          <S.H5>
          Baixe o APP
          </S.H5>
          <S.ContainerApp>
            <img src={LogoAppStore} alt="" />
            <img src={LogoGooglePlay} alt="" />
          </S.ContainerApp>
          <S.H5>
          Pigz
          </S.H5>
          <S.H6>
            Sobre o Pigz
          </S.H6>
          <S.H6>Portal do Parceiro</S.H6>
          <S.H6>Quero ser um Pigz Partner</S.H6>
          <S.ContainerContactUs>
            <img src={LogoContact} alt="" /> 
            <S.H5>
            Fale conosco
            </S.H5>
          </S.ContainerContactUs>
          <S.H6>falecom@pigz.com.br</S.H6>
          <S.H6>(95) 3224-2603</S.H6>
          <S.H5>
          Pigz nas redes
          </S.H5>
          <S.ContainerSocial>
            <img src={IconFacebook} alt="" />
            <img src={IconInstagram} alt="" />
            <img src={IconLinkedin} alt="" />
            <img src={IconYoutube} alt="" />
          </S.ContainerSocial>
          <S.ContainerList>
            <S.HR/>
          </S.ContainerList>
          <S.ContainerTerm>
            <S.SmallText>
            Nossos termos
            </S.SmallText>
            <S.SmallText>
            Privacidade
            </S.SmallText>
            <S.SmallText>
            Ajuda
            </S.SmallText>
          </S.ContainerTerm>
          <S.ContainerEnd>
            <S.TinyText>
            © Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85
            </S.TinyText>
            <img src={LogoOrange} alt="" />
          </S.ContainerEnd>
        </S.ContainerFooter>
        <S.OrangeList/>
      </S.Container>
   </>
  )
}
