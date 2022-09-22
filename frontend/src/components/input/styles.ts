import styled from 'styled-components'

export const InputStyled = styled.input`
  display: block; 
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.875rem;
  border: 4px solid transparent;
  border-radius: 0.25rem;
  font: 500 1rem 'Roboto', sans-serif;
  box-sizing: border-box;
  transition: 0.3s;

  &:focus {
    outline: none;
    border: 4px solid #84e;
  }
`

export const Label = styled.label`
  font: 700 1.25rem 'Roboto', sans-serif;
  color: #84e;
`