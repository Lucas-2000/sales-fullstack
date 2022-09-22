import styled from "styled-components";

export const Span = styled.span`
  color: #84e;
`

export const GridInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
`

export const InfoBg = styled.div`
  background: #3d3c42;
  padding: 1rem;
  height: max-content;
  border-radius: 0.25rem;
`

export const ProductImg = styled.img`
  width: max-content;
  max-height: 700px;
`

export const InfoText = styled.p`
  font: 500 1rem 'Roboto', sans-serif;
  color: #a8a8b3;
`

export const Price = styled.p`
  font: 700 1.5rem 'Roboto', sans-serif;
  color: #84e;
`

export const PhoneButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: 700 1rem 'Poppins', sans-serif;
  color: #121214;
  background: #25D366;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

export const MailButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: 700 1rem 'Poppins', sans-serif;
  color: #121214;
  background: tomato;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

export const AddToCartButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font: 700 1rem 'Poppins', sans-serif;
  color: #121214;
  background: #FFBF00;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`