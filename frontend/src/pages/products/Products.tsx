import { Pencil, Plus, Trash } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { Container } from '../../components/container/styles'
import Input from '../../components/input/Input'
import Modal from '../../components/modal/Modal'
import { ModalWrapper } from '../../components/modal/styles'
import { Subtitle } from '../../components/subtitle/styles'
import { IProductsProps } from '../../interfaces/IProductsProps'
import { DeleteButton, EditButton, NewProduct, ProductsHeader, Table, Td, TdOptions, Th } from './styles'

const Products = () => {
  const [products, setProducts] = useState<IProductsProps[]>([])
  const [id, setId] = useState(0)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [search, SetSearch] = useState('')

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [products])

  function deleteModal(id:number, title:string) {
    setId(id)
    setTitle(title)
    setText('Are you sure you want to delete this item')
    setShowModal(true)
  }

  return (
    <ModalWrapper>
      <Modal showModal={showModal}setShowModal={setShowModal} id={id} title={title} text={text}  />
      <Container>
        <ProductsHeader>
          <Subtitle>My Products</Subtitle>
          <NewProduct href="/products/create">Add new <Plus /></NewProduct>
        </ProductsHeader>
        <div>
          <Input name="find" type="text" label="Find" placeholder="Search..." value={search} onChange={(e) => SetSearch(e.target.value)}/>
        </div>
        <hr />
        <Table>
          <tr>
            <Th>Title</Th>
            <Th>Category</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>Contact</Th>
            <Th>Email</Th>
            <Th>Options</Th>
          </tr>
          {products.map(product => (
            <tr key={product.id}>
                <Td>{product.title}</Td>
                <Td>{product.category}</Td>
                <Td>${product.price}</Td>
                <Td>{product.quantity}</Td>
                <Td>{product.contact}</Td>
                <Td>{product.email}</Td>
                <TdOptions>
                  <EditButton href={`/products/edit/${product.id}`}><Pencil size={25}/></EditButton>
                  <DeleteButton onClick={() => deleteModal(product.id, product.title)}><Trash size={25}/></DeleteButton>
                </TdOptions>
            </tr>
          ))}
        </Table>
      </Container>
    </ModalWrapper>
  )
}

export default Products