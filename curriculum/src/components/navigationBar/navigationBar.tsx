import { StyledButton, StyledContainer } from "./navigationBar.styles"

const NavigationBar = () => {
  return (
    <StyledContainer>
      <StyledButton to={'/'}>Home</StyledButton>
      <StyledButton to={'/Contato'}>Contato</StyledButton>
    </StyledContainer>
  )
}

export default NavigationBar
