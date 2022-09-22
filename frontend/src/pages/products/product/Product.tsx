import { Envelope, Phone, ShoppingCart } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Container } from '../../../components/container/styles'
import { Subtitle } from '../../../components/subtitle/styles'
import { IProductsProps } from '../../../interfaces/IProductsProps'
import { AddToCartButton, GridInfo, InfoBg, InfoText, MailButton, PhoneButton, Price, ProductImg, Span } from './styles'

const Product = () => {
  const [product, setProduct] = useState<IProductsProps>()

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/product/${id}`)
    .then(response => response.json())
    .then(data => setProduct(data))
  }, [id])
  
  if (product === null) return null;
  return (
    <Container>
      <Subtitle>{product?.title}</Subtitle>
      <GridInfo>
        <ProductImg src={product?.image_url} alt={product?.title} />
        <InfoBg>
          <InfoText>Category: <Span>{product?.category}</Span></InfoText>
          <InfoText>{product?.description}</InfoText>
          <Price>${product?.price}</Price>
          <InfoText>In Stock: <Span>{product?.quantity}</Span></InfoText>
          <PhoneButton href={`tel:${product?.contact}`}>Call to {product?.contact} <Phone size={25} /></PhoneButton>
          <MailButton href={`mailto:${product?.email}`}>Mail to {product?.email} <Envelope size={25} /></MailButton>
          <AddToCartButton>Add To Cart <ShoppingCart size={25} /></AddToCartButton>
        </InfoBg>
      </GridInfo>
    </Container>
  )
}

export default Product