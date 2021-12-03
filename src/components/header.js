import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import Basket from "../assets/images/basket.svg"
import Logo from "../assets/images/logo.png";

function Header () {
  return(
<>
  <Navbar>
    <Container>
    <Navbar.Brand href="/"><img src={Logo} alt="Logo" /></Navbar.Brand>
    <Nav className="ml-auto align-items-center">
      <Nav.Link href="/shop">SHOP</Nav.Link>
      <Nav.Link href="/about">ABOUT</Nav.Link>
      <Nav.Link href="/offering">OFFERING</Nav.Link>
      <Nav.Link href="/connection">CONFECTIONS</Nav.Link>
      <Nav.Link href="/thinkpiecer">THINK PIECER</Nav.Link>
      <Nav.Link href="/login">LOG IN</Nav.Link>
      <Nav.Link href="/talktous">TALK US</Nav.Link>
      <Nav.Link href="/basket"><img src={Basket} alt="basket" /></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default Header;