import styled  from 'styled-components';

export const HeaderForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font: 700 1rem 'Poppins', sans-serif;
  color: #84e;
`

export const Label = styled.label`
  font: 700 1.25rem 'Roboto', sans-serif;
  color: #84e;
`

export const Select = styled.select`
  outline: none;
  border: none;
  background: #202024;
  color: #a8a8b3;
  font: 500 1rem 'Roboto', sans-serif;
  margin-bottom: 1rem;
  display: block;
`