import styled from 'styled-components'

interface ButtonContainerProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  height: 40px;
  width: 100px;
  margin: 0 10px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
`
