import { useState } from 'react'
import { FormStepOne } from './FormStepOne'
import { FormStepTwo } from './FormStepTwo'
import { FormStepThree } from './FormStepThree'
import * as S from './Form.styled'

export const Form = () => {

  const [screen, setScreen] = useState('stepOne')

  const GoToStepTwo = () => {
    setScreen('stepTwo')
  }
  const GoToStepThree = () => {
    setScreen('stepThree')
  }

  return (
   <>
      <S.Container>
       {screen === 'stepOne' && <FormStepOne event={GoToStepTwo}/>}
       {screen === 'stepTwo' && <FormStepTwo event={GoToStepThree}/>}
       {screen === 'stepThree' && <FormStepThree/>}
      </S.Container>
   </>
  )
}
