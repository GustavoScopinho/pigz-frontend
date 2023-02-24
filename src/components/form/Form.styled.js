import styled from "styled-components";

export const Container = styled.div`
background-color: #fff;
width: 382px;
height: 547px;
border-radius: 32px;
display: flex;
justify-content: center;
margin-top: 30px;
`
export const ContainerForm = styled.form`
width: 90%;
padding: 5px;

label {
  color: #333333;
  font-size: 12px;
  font-weight: 500;
  padding-bottom: 3px;
}

input {
  border-radius: 16px;
  border: #999999 1px solid;
  width: 334px;
  height: 48px;
  margin-bottom: 15px;
  padding-left: 16px;

  ::placeholder{
    font-size: 14px;
    font-weight: 400;
    color: #CCCCCC;
    
  }
}
  
`
export const H2 = styled.h2`
font-size: 28px;
color: #333333;
font-weight: 600;
margin-bottom: -8px;
`
export const P = styled.p`
color: #333333;
font-size: 13px;
margin-bottom: 30px;
`
export const ContainerInput = styled.div`
display: flex;
flex-direction: column;
font-size: 14px;
`
export const SelectGroup = styled.div`
display: flex;
gap: 15px;
`

export const Select = styled.div`
  display:flex;
  flex-direction: column;

  select {
  border-radius: 16px;
  border: #999999 1px solid;
  width: 114px;
  height: 48px;
  margin-bottom: 15px;
  padding-left: 16px;
  
  :has(option:disabled:checked[hidden]) {
  color: #999;
}
option {
    color: #000;
  }
}
`
export const SelectCity = styled(Select)`
  select {
    width: 205px;
  }
`

export const PLast = styled.p`
color: #666666;
font-size: 13px;
`
export const ContainerButton = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Button = styled.button`
  background-color: #FA641E;
  width: 334px;
  height: 48px ;
  border: none;
  border-radius: 16px;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  transition: 0.1s;
  cursor: pointer;
  :hover{
    scale: 1.01;
  }  
  `
export const InputBox = styled(ContainerInput)`
  margin-top: 35px;
`
export const Input = styled.div`
  display: flex;
  flex-direction: column;
  input{
    width: 114px;
  }
  :last-child{
    input{
      width: 205px;
    }
  }
`
export const ContainerInputAdress = styled.div`
display: flex;
flex-direction: row;
gap:15px;
`
export const SelectType = styled(SelectCity)`
  select{
    width: 334px;
    margin-bottom: 75px;
  }
`
export const ContainerInputCountry = styled.div`
  display: flex;
  border-radius: 16px;
  border: #999999 1px solid;
  width: 334px;
  height: 50px;
  z-index: 999;


  input{
    border: none;
    :focus{
      border: none;
      outline: 0;
    }
  }
`

export const ContainerInputTel = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #F0F0F0;
border-radius: 16px;
width: 100px;
height: 48px;
padding: 0px 10.5px;
z-index: 1;
  img {
    width: 24px;
    height: 24px;
    color: #9F9F9F;
    :last-child{
      opacity: 0.3;
      margin-top: 2.5px;
    }
  }
`
export const CountryText = styled.p`
 color: #9F9F9F;
 font-weight: 300;
 font-size: 14px;
 margin: 0 2px 0px 4px;
`



