import { Cube, House, ShoppingCart, User } from 'phosphor-react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container } from '../container/styles'
import { HeaderBg, Link, Menu, OptionsList, Title } from './styles'

const Navbar = () => {

  return (
    <HeaderBg>
      <Container>
        <Menu>
          <NavLink to="/">
            <Title>Sales</Title>
          </NavLink>
          <nav>
            <OptionsList>
              <li>
                <Link href="/">Home <House size={ 25 } /></Link>
              </li>
              <li>
                <Link href="/products">Products <Cube size={ 25 } /></Link>
              </li>
              <li>
                <Link href="/cart">Cart <ShoppingCart size={ 25 } /></Link>
              </li>
              <li>
                <Link href="/account">Account <User size={ 25 } /></Link>
              </li>
            </OptionsList>
          </nav>
        </Menu>
      </Container>
    </HeaderBg>
  )
}

export default Navbar