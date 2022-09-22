import React from 'react'
import { IProductsProps } from '../../interfaces/IProductsProps'
import { Card, CardHeader, CardImg, CardPrice, CardQuantity, CardTitle } from './styles'

const ProductCard = ({ id, title, price, quantity, image_url }:IProductsProps) => {
  return (
    <Card href={`/product/${id}`}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardPrice>${price}</CardPrice>
      </CardHeader>
      <CardImg src={image_url} alt={title} />
      <CardQuantity>Quantity in stock: {quantity}</CardQuantity>
    </Card>
  )
}

export default ProductCard