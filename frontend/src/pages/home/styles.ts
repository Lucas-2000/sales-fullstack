import styled from 'styled-components'

export const Span = styled.span`
  font: 500 1rem 'Roboto', sans-serif;
  color: #7159c1;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  grid-template-rows: masonry;
  margin-bottom: 2rem;
`