import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const H1 = styled.h1`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  color: #333333;
  width: 320px;
  line-height: 40px;
  
`
export const P = styled(H1)`
font-size: 16px;
font-weight: 400;
width: 286px;
margin-bottom: 40px;
line-height: 24px;
`
export const Contact = styled.p`
  color: #333333;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: end;
  gap: 5px;
  padding: 37px 0 56px 0;

  span{
    font-size: 13px;
  }

  img{
    padding: 0px 1px 2px 5px;
  }
`