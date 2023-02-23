import styled from "styled-components";

export const Container = styled.footer`
background-color: #FAFAFA;
position: relative;
`
export const ContainerFooter = styled.div`
  padding: 64px 16px 24px 16px;
`
export const P = styled.p`
  color: #676767;
  font-size: 11px;
  line-height: 0;
`
export const H5 = styled.h5`
  color: #676767;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
`
export const ContainerApp = styled.div`
  display: flex;
  gap: 10px;
  margin: -8px 0px 72px 0px ;

    img {
      cursor: pointer;
      :hover{
        scale: 1.01;
      }
    }
`
export const H6 = styled.h6`
  color: #676767;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`
export const ContainerContactUs = styled.div`
  margin: 45px 0 -25px 0 ;
  display: flex;
  gap: 15px;
  
    img {
      cursor: pointer;
      :hover{
        scale: 1.01;
      }
    }
`

export const ContainerSocial = styled.div`
  margin-top: -10px ;
  display: flex;
  gap: 15px;
  background-color: aliceblue;
  
`
export const ContainerList = styled.div`
  padding-top: 66px;
`
export const HR = styled.hr`
  border: 0.1em solid #9F9F9F;

`
export const ContainerTerm = styled.div`
  display: flex;
  gap: 30px;
`
export const SmallText = styled.p`
  font-size: 12px;
  color: #666666;
`
export const ContainerEnd = styled.div`
  display: flex;
  gap: 31.31px;
`
export const TinyText = styled(SmallText)`
  font-size: 10px;
`
export const OrangeList = styled.div`
  position: absolute;
  bottom: 0px;
  background-color: #FF671F;
  width: 100%;
  height: 5px;
`

