import React from 'react';
import Header from "../components/header";
import { Container } from "react-bootstrap";

function ComingSoon() {
  return (
    <div>
      <Header />
      <Container>
        <div className="comingsoon_wrap">
          <h1>Coming Soon</h1>
        </div>
      </Container>

    </div>
  )
}

export default ComingSoon;