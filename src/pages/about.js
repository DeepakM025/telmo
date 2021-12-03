import React from 'react';
import Header from "../components/header";
import { Row } from "react-bootstrap";
import Logo from "../assets/images/logo.png";

function About (){
  return(
    <div>
      <Header />
      <div className="about_us_wrap">
        <Row className="h-100 mob_m_0">
          <div className="about_left col-md-5 d-flex align-items-center mob_d_none">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="about_right col-md-7 d-flex align-items-center">
            <div className="about_card mob_w_90">
              <h4>About Us</h4>
              <p>The Idea of this venture comes from our inability to easily find top-quality, local products in foreign countries. As our frustration mounted, we realised that it was an opportunity that had to be seized. Everything started with our international team that was abroad and did not have easy access to our local products. We wanted to make sure that we could have an effortless route to what we were longing for. Then, we wanted to share what we have found, and the idea of TELMO came to us.</p>
            </div>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default About;