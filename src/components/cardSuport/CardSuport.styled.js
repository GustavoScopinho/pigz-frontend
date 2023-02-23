import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  width: 382px;
  height: 472px;
  background-color: #FAFAFA;
  border-radius: 64px;
  margin-bottom: 20px;
`
export const ContainerCard = styled.div`
  padding: 30px 40px;
`
export const H1 = styled.h1`
  color: #333333;
  font-weight: 700;
  font-size: 24px;
  line-height: 14px;
`
export const H3 = styled.h3`
  color: #666666;
  font-weight: 500;
  font-size: 16px;
`
export const P = styled.p`
  color: #333333;
  font-size: 14px;
  text-align: left;
  line-height: 14px;
`
export const ContainerPrice = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border-radius: 32px;
  height: 56px;
  margin: 40px 0 25px 0;
  padding: 5px 22px;
  border: none;
  font-size: 20px;
  color: #333333;
  font-weight: 700;
`
export const Button = styled.button`
  background: linear-gradient(259deg, #FA641E, #FF881F);
  color: #fff;
  width: 302px;
  height: 56px;
  border-radius: 32px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(255, 136, 31, 0.7) 0 10px 12px;
  transition: 0.1s;
  cursor: pointer;
  :hover{
    scale: 1.01;
  }
`