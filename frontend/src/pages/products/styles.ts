import styled from "styled-components";

export const ProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewProduct = styled.a`
  font: 700 1rem 'Poppins', sans-serif;
  background: #84e;
  padding: 1rem;
  color: #fff;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 0.25rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 2rem;
`

export const Th = styled.th`
  border: 1px solid #3d3c42;
  color: #84e;
  text-align: left;
  padding: 8px;
`

export const Td = styled.td`
  border: 1px solid #3d3c42;
  color: #a8a8b3;
  text-align: left;
  padding: 1.125rem;
`

export const TdOptions = styled.td`
  border: 1px solid #3d3c42;
  color: #a8a8b3;
  text-align: left;
  padding: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const EditButton = styled.a`
  padding: 1rem;
  background: #FFBF00;
  border-radius: 0.25rem;
  font: 700 1rem 'Poppins', sans-serif;
  color: #121214;
  transition: 0.3s;

  &:hover {
    opacity: 0.7
  }
`

export const DeleteButton = styled.button`
  padding: 1rem;
  background: tomato;
  border-radius: 0.25rem;
  font: 700 1rem 'Poppins', sans-serif;
  color: #121214;
  transition: 0.3s;

  &:hover {
    opacity: 0.7
  }
`