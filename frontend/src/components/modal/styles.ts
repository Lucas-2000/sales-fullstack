import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`

export const ModalWrapper = styled.div`
  position: relative;
`

export const ModalForm = styled.div`
  position: relative;
  width: 400px;
  height: max-content;
  background: #3d3c42;
  padding: 1rem;
  border-radius: 0.25rem;
`

export const ModalOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
`

export const Span = styled.span`
  font: 700 1.5rem 'Roboto', sans-serif;
  text-transform: uppercase;
`


export const CloseButton = styled.button`
  font: 700 1rem 'Poppins', sans-serif;
  background: red;
  border-radius: 50%;
  padding: 0.5rem 1rem;
  border: solid 1px #3d3c42;
  outline: none;
  transition: 0.3s;
  position: absolute;
  top: -1rem;
  right: -1rem;

  &:hover {
    opacity: 0.7;
  }
`

export const NoButton = styled.button`
  font: 700 1rem 'Poppins', sans-serif;
  background: tomato;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
    translate: 0 -10px;
  }
`

export const YesButton = styled.button`
  font: 700 1rem 'Poppins', sans-serif;
  background: #25D366;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  border: none;
  outline: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
    translate: 0 -10px;
  }
`