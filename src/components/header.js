import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Basket from "../assets/images/basket.svg"
import Logo from "../assets/images/logo.png";

function Header() {
  const [mobNav, setMobNav] = useState(false);
  return (
    <>
      <Navbar>
        <Container className="mob_d_none">
          <Navbar.Brand href="/"><img src={Logo} alt="Logo" /></Navbar.Brand>
          <Nav className="ml-auto align-items-center">
            <Nav.Link href="/productlist">SHOP</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/whatweoffer">OFFERING</Nav.Link>
            <Nav.Link href="/ourconfections">CONFECTIONS</Nav.Link>
            <Nav.Link href="/ourvalues">THINK PIECER</Nav.Link>
            <Nav.Link href="/signin">LOG IN</Nav.Link>
            <Nav.Link href="/getintouch">TALK US</Nav.Link>
            <Nav.Link href="/comingsoon"><img src={Basket} alt="basket" /></Nav.Link>
          </Nav>
        </Container>
        <Container className="mob_vis_head">
          <div className="mob_nav d-flex align-items-center w-100">
            <div onClick={() => setMobNav(true)}>
              <svg viewBox="0 0 100 80" width="40" height="40">
                <rect width="80" height="5" fill="#fff"></rect>
                <rect y="20" width="80" height="5" fill="#fff"></rect>
                <rect y="40" width="80" height="5" fill="#fff"></rect>
              </svg>
            </div>
            <Navbar.Brand href="/"><img src={Logo} alt="Logo" /></Navbar.Brand>
            <div className={mobNav ? "sidenav active" : "sidenav"} >
              <span onClick={() => setMobNav(false)}>x</span>
              <Nav className="ml-auto align-items-center">
                <Nav.Link href="/productlist">SHOP</Nav.Link>
                <Nav.Link href="/about">ABOUT</Nav.Link>
                <Nav.Link href="/whatweoffer">OFFERING</Nav.Link>
                <Nav.Link href="/ourconfections">CONFECTIONS</Nav.Link>
                <Nav.Link href="/ourvalues">THINK PIECER</Nav.Link>
                <Nav.Link href="/signin">LOG IN</Nav.Link>
                <Nav.Link href="/getintouch">TALK US</Nav.Link>
                <Nav.Link href="/comingsoon">CART</Nav.Link>
              </Nav>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;