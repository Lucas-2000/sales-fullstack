export interface IModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  id: number,
  title: string,
  text: string
}