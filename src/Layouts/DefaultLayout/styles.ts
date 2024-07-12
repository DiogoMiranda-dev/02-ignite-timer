import styled from 'styled-components'

export const LayoutConteiner = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
  }

  @media (max-width: 425px) {
    max-width: 100%;
    padding: 0.5rem;
  }

  @media (max-width: 320px) {
    max-width: 100%;
    padding: 0.2rem;
  }
`
