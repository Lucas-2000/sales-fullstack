import styled from 'styled-components'

export const Card = styled.a`
  width: 300px;
  height: max-content;
  background: #3d3c42;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: 0.7s;

  &:hover {
    width: 400px;
  }
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CardTitle = styled.h3`
  font: 700 1.125rem 'Poppins', sans-serif;
  color: #84e;
  max-width: 25ch;
`

export const CardPrice = styled.span`
  font: 700 1rem 'Poppins', sans-serif;
  color: #84e;
`

export const CardImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
`

export const CardQuantity = styled.span`
  font: 500 0.875rem 'Roboto', sans-serif;
  color: #a8a8b3;
`