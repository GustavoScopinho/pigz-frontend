import React from 'react'
import * as S from './Section.styled'
import ImgFloating from '../../assets/floating-ingredients.png'

export const Section = () => {
  return (
    <>
      <S.Section>
        <S.Container>
          <S.H1>
          Pigz: tudo que você precisa pra vender ainda mais!
          </S.H1>
          <S.ContainerImage>
            <img src={ImgFloating} alt="" />
          </S.ContainerImage>
        </S.Container>
        <S.ContainerText>
            <S.P>
            Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.
            </S.P>
          </S.ContainerText>
          
      </S.Section>
    </>
  )
}
