import * as S from './Form.styled'

export const Button = (props) => {

  return (
    <>
      <S.Button onClick={props.event}>{props.text}</S.Button>
    </>
  )
}
