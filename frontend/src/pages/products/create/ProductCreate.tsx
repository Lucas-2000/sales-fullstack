import { ArrowCircleLeft } from 'phosphor-react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '../../../components/button/styles'
import { Container } from '../../../components/container/styles'
import Input from '../../../components/input/Input'
import { Subtitle } from '../../../components/subtitle/styles'
import { BackButton, HeaderForm, Label, Select } from './styles'

const ProductCreate = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [quantity, setQuantity] = useState('')
  const [image_url, setImageUrl] = useState('')
  const [contact, setContact] = useState('')
  const [email, setEmail] = useState('')

  const CategoryList = [
    {'id': 1, 'name': 'Select'},
    {'id': 2, 'name': 'House'},
    {'id': 3, 'name': 'Utensils'},
    {'id': 4, 'name': 'Automobiles'},
    {'id': 5, 'name': 'Clothes'},
    {'id': 6, 'name': 'Accessories'},
    {'id': 7, 'name': 'Electronics'},
    {'id': 8, 'name': 'Home appliances'},
    {'id': 9, 'name': 'Computers'},
    {'id': 10, 'name': 'Videogames'},
    {'id': 11, 'name': 'Others'},
  ]

  async function handleSubmitForm() {
    if(category === 'Select' || category === null) {
      return toast.error("Select a option")
    }

    if(title === "" || description === "" || price === "" || category === "" || quantity === "" || image_url === "" || contact === "" || email === "") {
      return toast.error("Need to fill all fields")
    }

    if(image_url.length > 400) {
      return toast.error("Image Url over 400 characters")
    }

    try {
      const response = await toast.promise(
        fetch("http://localhost:8000/api/product/", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            title,
            description,
            price,
            category,
            quantity,
            image_url,
            contact,
            email,
          }),
        }),
        {
          pending: 'Creation in progress',
          success: 'Product created with success!',
          error: 'Error on creation!'
        }
      )
      setTitle('')
      setDescription('')
      setCategory('Select')
      setPrice('')
      setQuantity('')
      setImageUrl('')
      setContact('')
      setEmail('')
      return response
    } catch(err) {
      toast.error('Error in creating product: ' + err)
    }
  }

  return (
    <Container>
      <HeaderForm>
        <Subtitle>Create new product</Subtitle>
        <BackButton href="/products">Back <ArrowCircleLeft size={25} /></BackButton>
      </HeaderForm>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <Input name="title" label="Title" type="text" value={title} placeholder="Title..." onChange={(e) => setTitle(e.target.value)}/>
        <Input name="description" label="Description" type="text" value={description} placeholder="Description..." onChange={(e) => setDescription(e.target.value)}/>
        <Label>Category</Label>
        <Select name="categories" value={category} onChange={(e) => setCategory(e.target.value)}>
        {CategoryList.map(category => (
          <option key={category.id} value={category.name}>{category.name}</option>
        ))}
        </Select>
        <Input name="price" label="Price" type="text" value={price} placeholder="99.99" onChange={(e) => setPrice(e.target.value)}/>
        <Input name="quantity" label="Quantity" type="text" value={quantity} placeholder="5" onChange={(e) => setQuantity(e.target.value)}/>
        <Input name="imageUrl" label="Image Url" type="text" value={image_url} placeholder="http://example.com" onChange={(e) => setImageUrl(e.target.value)}/>
        <Input name="contact" label="Contact" type="text" value={contact} placeholder="11912345678" onChange={(e) => setContact(e.target.value)}/>
        <Input name="email" label="Email" type="text" value={email} placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)}/>
        <Button onClick={handleSubmitForm}>Submit</Button>
      </form>
    </Container>
  )
}

export default ProductCreate