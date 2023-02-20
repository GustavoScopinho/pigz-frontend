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

label {
  color: #333333;
  font-size: 12px;
  font-weight: 500;
  padding-bottom: 5px;
}

input {
  border-radius: 16px;
  border: #999999 1px solid;
  width: 334px;
  height: 40px;
  margin-bottom: 15px;

  ::placeholder{
    font-size: 14px;
    font-weight: 400;
    color: #CCCCCC;
    padding-left: 16px;
  }
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

  input {
    background-color: #FA641E;
    width: 334px;
    height:48px ;
    border: none;
    border-radius: 16px;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
  }
`
