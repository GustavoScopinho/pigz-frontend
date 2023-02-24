import { Button } from './Button'
import * as S from './Form.styled'

export const FormStepTwo = (props) => {
  return (
   <>
        <S.ContainerForm>
          <S.H2>
          Onde fica a sua loja?
          </S.H2>
          <S.InputBox>
          <label htmlFor="cep">CEP</label>
          <input type="text" name="cep" id="cep" placeholder='00000-00' />
          </S.InputBox>
          <S.SelectGroup>
            <S.Select>
              <label htmlFor="estado">Estado</label>
                <select name="estado" id="estado" placeholder='UF' >
                  <option value="" disabled selected hidden>UF</option>
                  <option value="sp">SP</option>
                  <option value="rj">RJ</option>
                  <option value="rr">RR</option>
              </select>
            </S.Select>
            <S.SelectCity>
                <label htmlFor="cidade">Cidade</label>
                <select name="cidade" id="cidade" >
                  <option value="" disabled selected hidden>Selecione</option>
                  <option value="boavista">Boa Vista</option>
                  <option value="rioclaro">Rio Claro</option>
                  <option value="piracicaba">Piracicaba</option>
                </select>
            </S.SelectCity>
          </S.SelectGroup>
          <S.ContainerInput>
          <label htmlFor="telefone">Endereço</label>
          <input type="text" name="endereco" id="endereco" placeholder='Avenida Brasil' />
          </S.ContainerInput>
          <S.ContainerInputAdress>
            <S.Input>
              <label htmlFor="numero">Número</label>
              <input type="number" name="numero" id="numero" placeholder='123' />
            </S.Input>
            <S.Input>
              <label htmlFor="cep">Complemento</label>
              <input type="text" name="complemento" id="complemento" placeholder='Sala 1' />
            </S.Input>
          </S.ContainerInputAdress>
          <S.ContainerButton>
            <Button event={props.event} text={'Próximo'}/>
          </S.ContainerButton>
        </S.ContainerForm>
   </>
  )
}
