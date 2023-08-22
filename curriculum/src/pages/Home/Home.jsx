import React from "react"
import { styled } from "styled-components"

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fonts.sizes.mainTitle};
  color: ${({ theme }) => theme.colors.white};
`

const Home = () => {
  console.log('TESTE')
  return (<StyledH1>HOME</StyledH1>)
}

export default Home
