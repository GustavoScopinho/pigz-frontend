import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(158deg, #FA641E, #FF881F);
  flex-direction: column;
  padding-bottom: 105px;
`
export const Container = styled.div`
display: flex;
width: 95%;
`
export const H1 = styled.h1`
font-size: 40px;
width: 80%;
color: #fff;
z-index: 999;

`
export const ContainerImage= styled.div`
z-index: 0;
width: 20%;

img{
  width: 250px;
  height: 250px;
}

@media (max-width: 700px) {
  margin-left: -22%;
}
`
export const ContainerText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const P = styled.div`
width: 90%;
color: #fff;
font-size: 16px;
margin-top: -20px;
`

export const ContainerForm = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
`