import React from 'react'
import * as S from './CarouselContent.styled'



export const CarouselContent = (props) => {
  return (
    <>
      <S.Container>
        <S.H3>{props.title}</S.H3>
        <S.Box>
          <S.P>
          {props.description}
          </S.P>
          <S.ContainerImage>
            <img src={props.img} alt="" />
          </S.ContainerImage>
        </S.Box>
      </S.Container>
    </>
  )
}
