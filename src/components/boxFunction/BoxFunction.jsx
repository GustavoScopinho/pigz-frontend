import React from 'react'
import * as S from './BoxFunction.styled'

export const BoxFunction = (props) => {
  return (
    <>
        <S.Container>
          <img src={props.img} alt="" />
          <S.H4>
            {props.title}
          </S.H4>
          <S.P>
            {props.description}
          </S.P>
        </S.Container>
    </>
  )
}
