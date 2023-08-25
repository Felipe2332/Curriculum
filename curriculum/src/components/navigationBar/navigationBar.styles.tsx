import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${props => props.theme.colors.green};
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100vw;
  height: auto;
  padding: 10px;
`
export const StyledButton = styled(Link) `
  width: 250px;
  height: 25px;
  background-color: ${props => props.theme.colors.trnasparent};
  text-align: center;
  font-size: 20px;
  text-decoration: none;
  transition: background-color 0.6s;
  
  &:hover{
    background-color: ${props => props.theme.colors.lightBlue}; /* muda a cor*/
    font-size: 25px; /* Aumenta o tamanho */
  }
`


