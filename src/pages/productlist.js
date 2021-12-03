import React from 'react';
import Header from "../components/header";
import Search from "../assets/images/search.svg";
import { Container, Row, Col } from "react-bootstrap";
import Products from "../assets/product.json"

function ProductList() {
  let products = Products.products;
  return (
    <div className="product_list_wrap">
      <Header />
      <Container>
        <Col md="10" className="mx-auto">
          <h3>Products</h3>
          <div className="search_wrap">
            <div className="search_">
              <span><img src={Search} alt="Search" /></span>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <Row>
            {
              products.map((product, i) => {
                return (
                  <Col md="4" key={i}>
                    <div className="product_card">
                      <img src={require(`../assets/images/products/${product.img_link}`).default} alt={product.img_link} />
                      <h4>
                        {product.name}
                      </h4>
                    </div>

                  </Col>
                )
              })
            }
          </Row>
        </Col>

      </Container>
    </div>
  )
}

export default ProductList;