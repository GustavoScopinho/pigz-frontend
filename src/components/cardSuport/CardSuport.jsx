import * as S from './CardSuport.styled'

export const CardSuport = (props) => {
  return (
    <>
        <S.Container>
         <S.ContainerCard>
         <S.H1>
          {props.title}
          </S.H1>
          <S.H3>
          {props.subtitle}
          </S.H3>
          <S.P>
          {props.p1}
          <S.P>
          {props.p2}
          </S.P>
         <S.P>
         {props.p3}
         </S.P>
          <S.P>
          {props.p4}
          </S.P>
          {props.p5}
          </S.P>
          <S.ContainerPrice>
            {props.price}
          </S.ContainerPrice>
          <S.Button>
          {props.button}
          </S.Button>
         </S.ContainerCard>
        </S.Container>
    </>
  )
}
