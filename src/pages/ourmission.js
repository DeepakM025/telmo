import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/header";

function OurMission() {
  return (
    <div>
      <Header />
      <div className="ourmission_wrap mob_h_100" >
        <Container className="h-100 d-flex align-items-center">
          <Row>
            <Col md={5} className="d-flex align-items-center">
              <h2 className="mob_p_0">Our <br/> Mission</h2>
            </Col>
            <Col md={7}>
              <p className="mob_w_100">As quality products are the assurance of a positive experience, a constant discovery, and authentic excellence, we want to make sure that you have these products at your doorstep. We want to make sure that having high-quality products is an easy, seamless process in terms of an array of choices, trust, ease of buying. We want to make sure that the high-quality comes to you, and that you may experience the locality of the products we offer in your own comfort.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

  )
}

export default OurMission;