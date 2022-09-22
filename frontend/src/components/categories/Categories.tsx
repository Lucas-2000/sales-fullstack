import React from 'react'
import { Select } from './styles'

const Categories = () => {
  const CategoryList = [
    {'id': 1, 'name': 'All'},
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

  return (
    <Select name="categories">
      {CategoryList.map(category => (
        <option key={category.id} value={category.name}>{category.name}</option>
      ))}
    </Select>
  )
}

export default Categories