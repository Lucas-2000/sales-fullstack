import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/card/ProductCard'
import Categories from '../../components/categories/Categories'
import { Container } from '../../components/container/styles'
import { Subtitle } from '../../components/subtitle/styles'
import { IProductsProps } from '../../interfaces/IProductsProps'
import { CardGrid, Span } from './styles'

const Home = () => {
  const [products, setProducts] = useState<IProductsProps[]>([])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/product')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  return (
    <Container>
      <Subtitle>See the products in the page</Subtitle>
      <Span>Categories: </Span>
      <Categories />
      <hr />
      <CardGrid>
      {products.map(product => (
        <ProductCard {...product} />
      ))}
      </CardGrid>
    </Container>
  )
}

export default Home