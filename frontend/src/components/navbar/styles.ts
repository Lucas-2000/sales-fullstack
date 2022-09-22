import styled from "styled-components";

export const HeaderBg = styled.div`
  background: #3d3c42;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 99;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

`

export const Title = styled.h1`
  font: 700 1.5rem 'Poppins', sans-serif;
  color: #a8a8b3;
`

export const OptionsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

export const Link = styled.a`
  font: 500 1.125rem 'Roboto', sans-serif;
  color: #a8a8b3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0;
  transition: 0.3s;

  &:hover {
    font: 700 1.25rem 'Roboto', sans-serif;
    opacity: 0.7;
  }
`