import React from 'react'
import { toast } from 'react-toastify'
import { IModalProps } from '../../interfaces/IModalProps'
import { Subtitle } from '../subtitle/styles'
import { CloseButton, ModalContainer, ModalForm, ModalOptions, NoButton, Span, YesButton } from './styles'

const Modal = ({showModal, setShowModal, id, title, text}: IModalProps) => {
  
  function closeModal() {
    setShowModal(false)
  }

  async function handleDeletePost() {
    try {
      const response = await toast.promise(
        fetch(`http://localhost:8000/api/product/${id}/`, {
          method: "DELETE",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            id,
          }),
        }),
        {
          pending: 'Delete in progress',
          success: 'Product deleted with success!',
          error: 'Error on delete!'
        }
      )
      setShowModal(false)
      return response
    } catch (err) {
      toast.error("Error on delete! " + err);
    }
  }


  return (
    <>
      {showModal &&    
       <ModalContainer>
        <ModalForm>
          <Subtitle>{text}: <Span>{title}</Span></Subtitle>
          <CloseButton onClick={closeModal}>X</CloseButton>
          <ModalOptions>
            <NoButton onClick={closeModal}>No</NoButton>
            <YesButton onClick={handleDeletePost}>Yes</YesButton>
          </ModalOptions>
        </ModalForm>
      </ModalContainer>}
    </>
  )
}

export default Modal