import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/header";
import Creativity from "../assets/images/creativity.svg";
import Passion from "../assets/images/passion.svg";
import Exellence from "../assets/images/exellence.svg";

function OurValues() {
  return (
    <div>
      <Header />
      <div className="ourvalues_wrap d-flex align-items-center mob_h_100">
        <Container>
          <h2>Our Values</h2>
          <Row>
            <Col md={4} className="value_card mob_max_w_100 mb-3 mb-md-0">
                <div>
                  <img src={Creativity} alt="Creativity" />
                </div>
                <h4>Creativity</h4>
                <p>Creativity is a core value at TELMO. We are certain that it should be embraced at every level, and in every taken action.</p>
            </Col>
            <Col md={4} className="value_card mob_max_w_100 mb-3 mb-md-0">
                <div>
                  <img src={Passion} alt="Passion" />
                </div>
                <h4>Passion</h4>
                <p>At TELMO, we do what we do with passion, or we don’t do them at all. Passion is what drives TELMO.</p>
            </Col>
            <Col md={4} className="value_card mob_max_w_100 mb-3 mb-md-0">
                <div>
                  <img src={Exellence} alt="Exellence" />
                </div>
                <h4>Exellence</h4>
                <p>Whenever TELMO does something, we do not only put our best effort in doing it at an acceptable level, but we consider it with our utmost excellence.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>

  )
}

export default OurValues;