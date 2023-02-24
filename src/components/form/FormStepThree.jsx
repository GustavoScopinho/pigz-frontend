import { Button } from './Button'
import * as S from './Form.styled'

export const FormStepThree = () => {
  return (
    <>
        <S.ContainerForm>
          <S.H2>
          Me conta um pouco sobre a sua loja
          </S.H2>
          <S.InputBox>
          <label htmlFor="nome-da-loja">Nome da loja</label>
          <input type="text" name="nome-da-loja" id="nome-da-loja" placeholder='Restaurante Todo Mundo Gosta' />
          </S.InputBox>
          <S.ContainerInput>
          <label htmlFor="cnpj">CNPJ da loja</label>
          <input type="text" name="cnpj" id="cnpj" placeholder='12.345.678/0001-99' />
          </S.ContainerInput>
          <S.ContainerInput>
          
          <S.SelectType>
          <label htmlFor="tipo-de-loja">Tipo de loja</label>
                <select name="tipo-de-loja" id="tipo-de-loja" >
                  <option value="" disabled selected hidden>Selecione</option>
                  <option value="rotisseria">Rotisseria</option>
                  <option value="pizzaria">Pizzaria</option>
                  <option value="hamburgueria">Hamburgueria</option>
                </select>
            </S.SelectType>
          </S.ContainerInput>
          <S.ContainerButton>
          <Button text={'Concluir'}/>
          </S.ContainerButton>
        </S.ContainerForm>
    </>
  )
}
